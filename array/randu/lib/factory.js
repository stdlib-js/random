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

var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var setReadOnlyAccessor = require( '@stdlib/utils/define-nonenumerable-read-only-accessor' );
var setReadWriteAccessor = require( '@stdlib/utils/define-nonenumerable-read-write-accessor' );
var base = require( './../../../base/randu' );
var ctors = require( '@stdlib/array/typed-real-float-ctors' );
var filledBy = require( '@stdlib/array/base/filled-by' );
var nullary = require( '@stdlib/strided/base/nullary' );
var format = require( '@stdlib/string/format' );
var defaults = require( './defaults.json' );
var validate = require( './validate.js' );


// MAIN //

/**
* Returns a function for creating arrays containing uniformly distributed pseudorandom numbers between `0` and `1`.
*
* @param {Options} [options] - function options
* @param {string} [options.name='mt19937'] - name of a supported pseudorandom number generator (PRNG), which will serve as the underlying source of pseudorandom numbers
* @param {*} [options.seed] - pseudorandom number generator seed
* @param {*} [options.state] - pseudorandom number generator state
* @param {boolean} [options.copy=true] - boolean indicating whether to copy a provided pseudorandom number generator state
* @param {string} [options.dtype="float64"] - default data type
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {Error} must provide a valid state
* @returns {Function} function for creating arrays
*
* @example
* var randu = factory();
* // returns <Function>
*
* var arr = randu( 10 );
* // returns <Float64Array>
*
* @example
* var randu = factory();
* // returns <Function>
*
* var arr = randu( 10, {
*     'dtype': 'generic'
* });
* // returns [...]
*/
function factory() {
	var options;
	var nargs;
	var opts;
	var rand;
	var prng;
	var err;

	opts = {
		'dtype': defaults.dtype
	};

	nargs = arguments.length;
	rand = randu;
	if ( nargs === 0 ) {
		prng = base;
	} else if ( nargs === 1 ) {
		options = arguments[ 0 ];
		prng = base.factory( options );
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	setReadOnlyAccessor( rand, 'seed', getSeed );
	setReadOnlyAccessor( rand, 'seedLength', getSeedLength );
	setReadWriteAccessor( rand, 'state', getState, setState );
	setReadOnlyAccessor( rand, 'stateLength', getStateLength );
	setReadOnlyAccessor( rand, 'byteLength', getStateSize );
	setReadOnly( rand, 'PRNG', prng.PRNG );
	return rand;

	/**
	* Returns an array containing pseudorandom numbers drawn from a randu distribution.
	*
	* @private
	* @param {NonNegativeInteger} len - array length
	* @param {Options} [options] - function options
	* @param {string} [options.dtype] - output array data type
	* @throws {TypeError} first argument must be a nonnegative integer
	* @throws {TypeError} options argument must be an object
	* @throws {TypeError} must provide valid options
	* @returns {(Array|TypedArray)} output array
	*/
	function randu( len, options ) {
		var ctor;
		var out;
		var err;
		var dt;
		var o;
		if ( !isNonNegativeInteger( len ) ) {
			throw new TypeError( format( 'invalid argument. First argument must be a nonnegative integer. Value: `%s`.', len ) );
		}
		o = {};
		if ( arguments.length > 1 ) {
			err = validate( o, options );
			if ( err ) {
				throw err;
			}
		}
		dt = o.dtype || opts.dtype;
		if ( dt === 'generic' ) {
			return filledBy( len, prng );
		}
		ctor = ctors( dt );
		out = new ctor( len );
		nullary( [ out ], [ len ], [ 1 ], prng );
		return out;
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


// EXPORTS //

module.exports = factory;
