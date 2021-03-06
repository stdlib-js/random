/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
var isObject = require( '@stdlib/assert/is-plain-object' );
var isFunction = require( '@stdlib/assert/is-function' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var constantFunction = require( '@stdlib/utils/constant-function' );
var noop = require( '@stdlib/utils/noop' );
var randu = require( './../../../base/mt19937' ).factory;
var isNonNegativeInteger = require( '@stdlib/math/base/assert/is-nonnegative-integer' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var typedarray2json = require( '@stdlib/array/to-json' );
var format = require( '@stdlib/string/format' );
var validate = require( './validate.js' );
var hypergeometric0 = require( './hypergeometric.js' );


// MAIN //

/**
* Returns a pseudorandom number generator for generating hypergeometric distributed random numbers.
*
* @param {NonNegativeInteger} [N] - population size
* @param {NonNegativeInteger} [K] - subpopulation size
* @param {NonNegativeInteger} [n] - number of draws
* @param {Options} [options] - function options
* @param {PRNG} [options.prng] - pseudorandom number generator which generates uniformly distributed pseudorandom numbers
* @param {PRNGSeedMT19937} [options.seed] - pseudorandom number generator seed
* @param {PRNGStateMT19937} [options.state] - pseudorandom number generator state
* @param {boolean} [options.copy=true] - boolean indicating whether to copy a provided pseudorandom number generator state
* @throws {TypeError} `N` must be a nonnegative integer
* @throws {TypeError} `K` must be a nonnegative integer
* @throws {TypeError} `n` must be a nonnegative integer
* @throws {RangeError} `n` must be less than or equal to `N`
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {Error} must provide a valid state
* @returns {PRNG} pseudorandom number generator
*
* @example
* var hypergeometric = factory( 5, 3, 2 );
* var v = hypergeometric();
* // returns <number>
*
* @example
* var hypergeometric = factory( 10, 10, 10, {
*     'seed': 297
* });
* var v = hypergeometric();
* // returns <number>
*
* @example
* var hypergeometric = factory();
* var v = hypergeometric( 5, 3, 2 );
* // returns <number>
*/
function factory() {
	var opts;
	var rand;
	var prng;
	var err;
	var N;
	var K;
	var n;

	if ( arguments.length === 0 ) {
		rand = randu();
	} else if ( arguments.length === 1 ) {
		opts = arguments[ 0 ];
		if ( !isObject( opts ) ) {
			throw new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', opts ) );
		}
		if ( hasOwnProp( opts, 'prng' ) ) {
			if ( !isFunction( opts.prng ) ) {
				throw new TypeError( format( 'invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.', 'prng', opts.prng ) );
			}
			rand = opts.prng;
		} else {
			rand = randu( opts );
		}
	} else {
		N = arguments[ 0 ];
		K = arguments[ 1 ];
		n = arguments[ 2 ];
		err = validate( N, K, n );
		if ( err ) {
			throw err;
		}
		if ( arguments.length > 3 ) {
			opts = arguments[ 3 ];
			if ( !isObject( opts ) ) {
				throw new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', opts ) );
			}
			if ( hasOwnProp( opts, 'prng' ) ) {
				if ( !isFunction( opts.prng ) ) {
					throw new TypeError( format( 'invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.', 'prng', opts.prng ) );
				}
				rand = opts.prng;
			} else {
				rand = randu( opts );
			}
		} else {
			rand = randu();
		}
	}
	if ( N === void 0 ) {
		prng = hypergeometric2;
	} else {
		prng = hypergeometric1;
	}
	setReadOnly( prng, 'NAME', 'hypergeometric' );

	// If we are provided an "external" PRNG, we don't support getting or setting PRNG state, as we'd need to check for compatible state value types, etc, entailing considerable complexity.
	if ( opts && opts.prng ) {
		setReadOnly( prng, 'seed', null );
		setReadOnly( prng, 'seedLength', null );
		setReadWriteAccessor( prng, 'state', constantFunction( null ), noop );
		setReadOnly( prng, 'stateLength', null );
		setReadOnly( prng, 'byteLength', null );
		setReadOnly( prng, 'toJSON', constantFunction( null ) );
		setReadOnly( prng, 'PRNG', rand );
	} else {
		setReadOnlyAccessor( prng, 'seed', getSeed );
		setReadOnlyAccessor( prng, 'seedLength', getSeedLength );
		setReadWriteAccessor( prng, 'state', getState, setState );
		setReadOnlyAccessor( prng, 'stateLength', getStateLength );
		setReadOnlyAccessor( prng, 'byteLength', getStateSize );
		setReadOnly( prng, 'toJSON', toJSON );
		setReadOnly( prng, 'PRNG', rand );
		rand = rand.normalized;
	}
	return prng;

	/**
	* Returns the PRNG seed.
	*
	* @private
	* @returns {PRNGSeedMT19937} seed
	*/
	function getSeed() {
		return rand.seed;
	}

	/**
	* Returns the PRNG seed length.
	*
	* @private
	* @returns {PositiveInteger} seed length
	*/
	function getSeedLength() {
		return rand.seedLength;
	}

	/**
	* Returns the PRNG state length.
	*
	* @private
	* @returns {PositiveInteger} state length
	*/
	function getStateLength() {
		return rand.stateLength;
	}

	/**
	* Returns the PRNG state size (in bytes).
	*
	* @private
	* @returns {PositiveInteger} state size (in bytes)
	*/
	function getStateSize() {
		return rand.byteLength;
	}

	/**
	* Returns the current pseudorandom number generator state.
	*
	* @private
	* @returns {PRNGStateMT19937} current state
	*/
	function getState() {
		return rand.state;
	}

	/**
	* Sets the pseudorandom number generator state.
	*
	* @private
	* @param {PRNGStateMT19937} s - generator state
	* @throws {Error} must provide a valid state
	*/
	function setState( s ) {
		rand.state = s;
	}

	/**
	* Serializes the pseudorandom number generator as a JSON object.
	*
	* ## Notes
	*
	* -   `JSON.stringify()` implicitly calls this method when stringifying a PRNG.
	*
	* @private
	* @returns {Object} JSON representation
	*/
	function toJSON() {
		var out = {};
		out.type = 'PRNG';
		out.name = prng.NAME;
		out.state = typedarray2json( rand.state );
		if ( N === void 0 ) {
			out.params = [];
		} else {
			out.params = [ N, K, n ];
		}
		return out;
	}

	/**
	* Returns a random number drawn from a hypergeometric distribution with bound parameters.
	*
	* @private
	* @returns {NonNegativeInteger} pseudorandom number
	*
	* @example
	* var v = hypergeometric1();
	* // returns <number>
	*/
	function hypergeometric1() {
		return hypergeometric0( rand, N, K, n );
	}

	/**
	* Returns a pseudorandom number drawn from a hypergeometric distribution.
	*
	* @private
	* @param {NonNegativeInteger} N - population size
	* @param {NonNegativeInteger} K - subpopulation size
	* @param {NonNegativeInteger} n - number of draws
	* @returns {NonNegativeInteger} pseudorandom number
	*
	* @example
	* var v = hypergeometric2( 5, 3, 2 );
	* // returns <number>
	*
	* @example
	* var v = hypergeometric2( NaN, NaN, NaN );
	* // returns NaN
	*
	* @example
	* var v = hypergeometric2( 5.21, 3.14, 2.76 );
	* // returns NaN
	*/
	function hypergeometric2( N, K, n ) {
		if (
			N === PINF ||
			K === PINF ||
			!isNonNegativeInteger( N ) ||
			!isNonNegativeInteger( K ) ||
			!isNonNegativeInteger( n ) ||
			n > N
		) {
			return NaN;
		}
		return hypergeometric0( rand, N, K, n );
	}
}


// EXPORTS //

module.exports = factory;
