/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var setReadOnlyAccessor = require( '@stdlib/utils/define-nonenumerable-read-only-accessor' );
var setReadWriteAccessor = require( '@stdlib/utils/define-nonenumerable-read-write-accessor' );
var isMethodIn = require( '@stdlib/assert/is-method-in' );
var isFunction = require( '@stdlib/assert/is-function' );
var isPlainObject = require( '@stdlib/assert/is-plain-object' );
var isObject = require( '@stdlib/assert/is-object' );
var isCollection = require( '@stdlib/assert/is-collection' );
var isDataType = require( '@stdlib/ndarray/base/assert/is-data-type' );
var isOutputDataTypePolicy = require( '@stdlib/ndarray/base/assert/is-output-data-type-policy' );
var isOrder = require( '@stdlib/ndarray/base/assert/is-order' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var everyBy = require( '@stdlib/array/base/every-by' );
var constantFunction = require( '@stdlib/utils/constant-function' );
var noop = require( '@stdlib/utils/noop' );
var Random = require( './../../../tools/unary' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Returns a function for generating pseudorandom values drawn from a unary PRNG.
*
* @param {Function} prng - unary pseudorandom value generator
* @param {Function} prng.factory - method which returns a new unary pseudorandom value generator
* @param {StringArray} idtypes - list of supported input data types
* @param {StringArray} odtypes - list of supported output data types
* @param {Object} policies - policies
* @param {string} policies.output - output data type policy
* @param {Object} options - options
* @param {string} options.order - default memory layout (either row-major or column-major)
* @throws {TypeError} first argument must be a function
* @throws {TypeError} first argument must have a `factory` method
* @throws {TypeError} second argument must be an array of strings
* @throws {TypeError} third argument must be an object
* @throws {TypeError} must provide valid options
* @returns {Function} function which returns a function for creating arrays
*
* @example
* var dtypes = require( '@stdlib/ndarray/dtypes' );
* var exponential = require( '@stdlib/random/base/exponential' );
*
* var idt = dtypes( 'real_and_generic' );
* var odt = dtypes( 'real_floating_point_and_generic' );
*
* var policies = {
*     'output': 'real_floating_point_and_generic'
* };
* var options = {
*     'order': 'row-major'
* };
*
* var factory = createFactory( exponential, idt, odt, policies, options );
*
* var rand = factory();
* // returns <Function>
*
* var v = rand( [ 2, 2 ], 2.0 );
* // returns <ndarray>
*
* @example
* var dtypes = require( '@stdlib/ndarray/dtypes' );
* var ndzeros = require( '@stdlib/ndarray/zeros' );
* var exponential = require( '@stdlib/random/base/exponential' );
*
* var idt = dtypes( 'real_and_generic' );
* var odt = dtypes( 'real_floating_point_and_generic' );
*
* var policies = {
*     'output': 'real_floating_point_and_generic'
* };
* var options = {
*     'order': 'row-major'
* };
*
* var factory = createFactory( exponential, idt, odt, policies, options );
*
* var rand = factory();
* // returns <Function>
*
* var out = ndzeros( [ 2, 2 ] );
* var v = rand.assign( 2.0, out );
* // returns <ndarray>
*
* var bool = ( v === out );
* // returns true
*/
function createFactory( prng, idtypes, odtypes, policies, options ) {
	var OPTIONS;

	if ( !isFunction( prng ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a function. Value: `%s`.', prng ) );
	}
	if ( !isMethodIn( prng, 'factory' ) ) {
		throw new TypeError( format( 'invalid argument. First argument must have a `%s` method.', 'factory' ) );
	}
	if (
		!isCollection( idtypes ) ||
		idtypes.length < 1 ||
		!everyBy( idtypes, isDataType )
	) {
		throw new TypeError( format( 'invalid argument. Second argument must be an array of data types. Value: `%s`.', idtypes ) );
	}
	if (
		!isCollection( odtypes ) ||
		odtypes.length < 1 ||
		!everyBy( odtypes, isDataType )
	) {
		throw new TypeError( format( 'invalid argument. Third argument must be an array of data types. Value: `%s`.', odtypes ) );
	}
	if ( !isObject( policies ) ) {
		throw new TypeError( format( 'invalid argument. Fourth argument must be an object. Value: `%s`.', policies ) );
	}
	if ( !isOutputDataTypePolicy( policies.output ) ) {
		throw new TypeError( format( 'invalid argument. Fourth argument must be an object having a supported output data type policy. Value: `%s`.', policies.output ) );
	}
	OPTIONS = {};
	if ( arguments.length > 4 ) {
		if ( !isPlainObject( options ) ) {
			throw new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', options ) );
		}
		if ( hasOwnProp( options, 'order' ) ) {
			OPTIONS.order = options.order;
			if ( !isOrder( OPTIONS.order ) ) {
				throw new TypeError( format( 'invalid option. `%s` option must be a valid memory layout. Option: `%s`.', 'order', OPTIONS.order ) );
			}
		}
	}
	return factory;

	/**
	* Returns a function for generating pseudorandom values drawn from a unary PRNG.
	*
	* @private
	* @param {Options} [options] - function options
	* @param {PRNG} [options.prng] - pseudorandom number generator which generates uniformly distributed pseudorandom numbers
	* @param {*} [options.seed] - pseudorandom value generator seed
	* @param {*} [options.state] - pseudorandom value generator state
	* @param {boolean} [options.copy] - boolean indicating whether to copy a provided pseudorandom value generator state
	* @throws {TypeError} options argument must be an object
	* @throws {TypeError} must provide valid options
	* @throws {Error} must provide a valid state
	* @returns {Function} function for creating ndarrays
	*/
	function factory() {
		var random;
		var base;
		var opts;

		if ( arguments.length > 0 ) {
			opts = arguments[ 0 ];
			if ( !isPlainObject( opts ) ) {
				throw new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', opts ) );
			}
			base = prng.factory( opts );
		} else {
			opts = {};
			base = prng;
		}
		random = new Random( base, idtypes, odtypes, policies, OPTIONS );
		if ( opts && opts.prng ) {
			setReadOnly( rand, 'seed', null );
			setReadOnly( rand, 'seedLength', null );
			setReadWriteAccessor( rand, 'state', constantFunction( null ), noop );
			setReadOnly( rand, 'stateLength', null );
			setReadOnly( rand, 'byteLength', null );
		} else {
			setReadOnlyAccessor( rand, 'seed', getSeed );
			setReadOnlyAccessor( rand, 'seedLength', getSeedLength );
			setReadWriteAccessor( rand, 'state', getState, setState );
			setReadOnlyAccessor( rand, 'stateLength', getStateLength );
			setReadOnlyAccessor( rand, 'byteLength', getStateSize );
		}
		setReadOnly( rand, 'PRNG', base.PRNG );
		setReadOnly( rand, 'assign', assign );
		return rand;

		/**
		* Returns an ndarray filled with pseudorandom values drawn from a unary PRNG.
		*
		* @private
		* @param {NonNegativeIntegerArray} shape - output ndarray shape
		* @param {(ndarrayLike|*)} param1 - PRNG parameter
		* @param {Options} [options] - function options
		* @param {string} [options.dtype] - output data type
		* @param {string} [options.order] - memory layout (either row-major or column-major)
		* @param {string} [options.mode] - specifies how to handle indices which exceed ndarray dimensions
		* @param {StringArray} [options.submode] - specifies how to handle subscripts which exceed ndarray dimensions on a per dimension basis
		* @param {boolean} [options.readonly] - boolean indicating whether an ndarray should be read-only
		* @throws {TypeError} first argument must be a valid shape
		* @throws {TypeError} must provide valid PRNG parameters
		* @throws {TypeError} PRNG parameters and the desired shape must be broadcast compatible
		* @throws {TypeError} options argument must be an object
		* @throws {TypeError} must provide valid options
		* @returns {ndarray} output array
		*/
		function rand( shape, param1, options ) {
			if ( arguments.length < 3 ) {
				return random.generate( shape, param1 );
			}
			return random.generate( shape, param1, options );
		}

		/**
		* Fills an ndarray with pseudorandom values drawn from a unary PRNG.
		*
		* @private
		* @param {(ndarrayLike|*)} param1 - PRNG parameter
		* @param {ndarrayLike} out - output ndarray
		* @throws {TypeError} second argument must be an ndarray
		* @throws {TypeError} must provide valid PRNG parameters
		* @throws {TypeError} PRNG parameters and the output ndarray must be broadcast compatible
		* @returns {ndarray} output ndarray
		*/
		function assign( param1, out ) {
			return random.assign( param1, out );
		}

		/**
		* Returns the PRNG seed.
		*
		* @private
		* @returns {*} seed
		*/
		function getSeed() {
			return rand.PRNG.seed;
		}

		/**
		* Returns the PRNG seed length.
		*
		* @private
		* @returns {PositiveInteger} seed length
		*/
		function getSeedLength() {
			return rand.PRNG.seedLength;
		}

		/**
		* Returns the PRNG state length.
		*
		* @private
		* @returns {PositiveInteger} state length
		*/
		function getStateLength() {
			return rand.PRNG.stateLength;
		}

		/**
		* Returns the PRNG state size (in bytes).
		*
		* @private
		* @returns {PositiveInteger} state size (in bytes)
		*/
		function getStateSize() {
			return rand.PRNG.byteLength;
		}

		/**
		* Returns the current pseudorandom value generator state.
		*
		* @private
		* @returns {*} current state
		*/
		function getState() {
			return rand.PRNG.state;
		}

		/**
		* Sets the pseudorandom value generator state.
		*
		* @private
		* @param {*} s - generator state
		* @throws {Error} must provide a valid state
		*/
		function setState( s ) {
			rand.PRNG.state = s;
		}
	}
}


// EXPORTS //

module.exports = createFactory;
