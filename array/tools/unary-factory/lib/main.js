/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

var setReadWriteAccessor = require( '@stdlib/utils/define-nonenumerable-read-write-accessor' );
var setReadOnlyAccessor = require( '@stdlib/utils/define-nonenumerable-read-only-accessor' );
var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var isStringArray = require( '@stdlib/assert/is-string-array' ).primitives;
var isFunction = require( '@stdlib/assert/is-function' );
var isMethodIn = require( '@stdlib/assert/is-method-in' );
var isPlainObject = require( '@stdlib/assert/is-plain-object' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var contains = require( '@stdlib/array/base/assert/contains' ).factory;
var constantFunction = require( '@stdlib/utils/constant-function' );
var noop = require( '@stdlib/utils/noop' );
var UnaryRandom = require( './../../../../array/tools/unary' );
var NullaryRandom = require( './../../../../array/tools/nullary' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Returns a factory function for generating pseudorandom values drawn from a unary PRNG.
*
* @param {Function} prng - unary pseudorandom value generator
* @param {Function} prng.factory - method which returns a new unary pseudorandom value generator
* @param {StringArray} dtypes - list of supported output array data types
* @param {string} dtype - default output array data type
* @throws {TypeError} first argument must be a function
* @throws {TypeError} first argument must have a `factory` method
* @throws {TypeError} second argument must be an array of strings
* @throws {TypeError} third argument must be a supported output array data type
* @returns {Function} function which returns a function for creating arrays
*
* @example
* var exponential = require( '@stdlib/random/base/exponential' );
*
* var dtypes = [ 'float64', 'float32', 'generic' ];
*
* var factory = createFactory( exponential, dtypes, 'float64' );
* // returns <Function>
*
* var random = factory();
* // returns <Function>
*
* var x = random( 10, 2.0 );
* // returns <Float64Array>
*
* @example
* var exponential = require( '@stdlib/random/base/exponential' );
*
* var dtypes = [ 'float64', 'float32', 'generic' ];
*
* var factory = createFactory( exponential, dtypes, 'float64' );
* // returns <Function>
*
* var random = factory();
* // returns <Function>
*
* var x = random( 10, 2.0, {
*     'dtype': 'float32'
* });
* // returns <Float32Array>
*/
function createFactory( prng, dtypes, dtype ) {
	var isValidDataType;
	if ( !isFunction( prng ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a function. Value: `%s`.', prng ) );
	}
	if ( !isMethodIn( prng, 'factory' ) ) {
		throw new TypeError( format( 'invalid argument. First argument must have a `%s` method.', 'factory' ) );
	}
	// TODO: tighten this up by actually validating that `dtypes` contains only recognized/supported dtype strings
	if ( !isStringArray( dtypes ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must an array of strings. Value: `%s`.', dtypes ) );
	}
	// Require that the default output array data type be a member of the list of supported output array data types...
	if ( !contains( dtypes, dtype ) ) {
		throw new TypeError( format( 'invalid argument. Third argument must be a supported data type. Value: `%s`.', dtype ) );
	}
	isValidDataType = contains( dtypes );
	return factory;

	/**
	* Returns a function for generating pseudorandom values drawn from a PRNG.
	*
	* @private
	* @param {*} [param1] - PRNG parameter
	* @param {Options} [options] - function options
	* @param {PRNG} [options.prng] - pseudorandom number generator which generates uniformly distributed pseudorandom numbers
	* @param {*} [options.seed] - pseudorandom value generator seed
	* @param {*} [options.state] - pseudorandom value generator state
	* @param {boolean} [options.copy] - boolean indicating whether to copy a provided pseudorandom value generator state
	* @param {string} [options.dtype] - default output array data type
	* @throws {TypeError} options argument must be an object
	* @throws {TypeError} must provide valid options
	* @throws {Error} must provide a valid state
	* @returns {Function} function for creating arrays
	*/
	function factory() {
		var Random;
		var random;
		var param1;
		var assign;
		var nargs;
		var base;
		var opts;
		var rand;
		var dt;

		nargs = arguments.length;
		if ( nargs < 1 ) {                              // e.g., factory()
			opts = {};
			base = prng;
			rand = rand1;
		} else if ( nargs > 1 ) {                       // e.g., factory( param1, {} )
			param1 = arguments[ 0 ];
			opts = arguments[ 1 ];
			base = prng.factory( param1, opts );
			rand = rand2;
		} else if ( isPlainObject( arguments[ 0 ] ) ) { // e.g., factory( {} )
			opts = arguments[ 0 ];
			base = prng.factory( opts );
			rand = rand1;
		} else {                                        // e.g., factory( param1 )
			param1 = arguments[ 0 ];
			opts = {};
			base = prng.factory( param1 );
			rand = rand2;
		}
		if ( hasOwnProp( opts, 'dtype' ) ) {
			dt = opts.dtype;
			if ( !isValidDataType( dt ) ) {
				throw new TypeError( format( 'invalid option. `%s` option must be one of the following: "%s". Option: `%s`.', 'dtype', dtypes.join( '", "' ), dt ) );
			}
		} else {
			dt = dtype;
		}
		if ( rand === rand1 ) {
			assign = assign1;
			Random = UnaryRandom;
		} else {
			assign = assign2;
			Random = NullaryRandom;
		}
		random = new Random( base, dtypes, dt );
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
		* Returns an array of pseudorandom values drawn from a PRNG.
		*
		* @private
		* @param {NonNegativeInteger} len - output array length
		* @param {*} param1 - PRNG parameter
		* @param {Options} [options] - function options
		* @param {string} [options.dtype] - output array data type
		* @throws {TypeError} first argument must be a nonnegative integer
		* @throws {TypeError} options argument must be an object
		* @throws {TypeError} must provide valid options
		* @returns {Collection} output array
		*/
		function rand1( len, param1, options ) {
			if ( arguments.length < 3 ) {
				return random.generate( len, param1 );
			}
			return random.generate( len, param1, options );
		}

		/**
		* Returns an array of pseudorandom values drawn from a PRNG.
		*
		* @private
		* @param {NonNegativeInteger} len - output array length
		* @param {Options} [options] - function options
		* @param {string} [options.dtype] - output array data type
		* @throws {TypeError} first argument must be a nonnegative integer
		* @throws {TypeError} options argument must be an object
		* @throws {TypeError} must provide valid options
		* @returns {Collection} output array
		*/
		function rand2( len, options ) {
			if ( arguments.length < 2 ) {
				return random.generate( len );
			}
			return random.generate( len, options );
		}

		/**
		* Fills an array with pseudorandom values drawn from a PRNG.
		*
		* @private
		* @param {*} param1 - PRNG parameter
		* @param {Collection} out - output array
		* @throws {TypeError} second argument must be a collection
		* @returns {Collection} output array
		*/
		function assign1( param1, out ) {
			return random.assign( param1, out );
		}

		/**
		* Fills an array with pseudorandom values drawn from a PRNG.
		*
		* @private
		* @param {Collection} out - output array
		* @throws {TypeError} first argument must be a collection
		* @returns {Collection} output array
		*/
		function assign2( out ) {
			return random.assign( out );
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
		* Returns the current pseudorandom number generator state.
		*
		* @private
		* @returns {*} current state
		*/
		function getState() {
			return rand.PRNG.state;
		}

		/**
		* Sets the pseudorandom number generator state.
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
