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
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isPositive = require( '@stdlib/assert/is-positive-number' ).isPrimitive;
var isObject = require( '@stdlib/assert/is-plain-object' );
var isUint32Array = require( '@stdlib/assert/is-uint32array' );
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var isFunction = require( '@stdlib/assert/is-function' );
var constantFunction = require( '@stdlib/utils/constant-function' );
var noop = require( '@stdlib/utils/noop' );
var chisquare = require( './../../../base/chisquare' ).factory;
var randn = require( './../../../base/improved-ziggurat' ).factory;
var gcopy = require( '@stdlib/blas/base/gcopy' );
var Uint32Array = require( '@stdlib/array/uint32' );
var assign = require( '@stdlib/object/assign' );
var typedarray2json = require( '@stdlib/array/to-json' );
var format = require( '@stdlib/string/format' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );


// MAIN //

/**
* Returns a pseudorandom number generator for generating t-distributed random numbers.
*
* @param {PositiveNumber} [v] - degrees of freedom
* @param {Options} [options] - function options
* @param {PRNG} [options.prng] - pseudorandom number generator which generates uniformly distributed pseudorandom numbers
* @param {PRNGSeedMT19937} [options.seed] - pseudorandom number generator seed
* @param {PRNGStateMT19937} [options.state] - pseudorandom number generator state
* @param {boolean} [options.copy=true] - boolean indicating whether to copy a provided pseudorandom number generator state
* @throws {TypeError} `v` must be a positive number
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {Error} must provide a valid state
* @returns {PRNG} pseudorandom number generator
*
* @example
* var t = factory( 1.0 );
*
* var v = t();
* // returns <number>
*
* @example
* var t = factory( 0.5, {
*     'seed': 297
* });
* var v = t();
* // returns <number>
*
* @example
* var t = factory();
* var v = t( 0.5 );
* // returns <number>
*/
function factory() {
	var rchisq;
	var STATE;
	var rnorm;
	var rand;
	var opts;
	var prng;
	var FLG;
	var v;

	FLG = true;
	if ( arguments.length === 0 ) {
		opts = {
			'copy': false
		};
		rnorm = randn( opts );
	} else if ( arguments.length === 1 ) {
		if ( isObject( arguments[ 0 ] ) ) {
			opts = arguments[ 0 ];
			if ( hasOwnProp( opts, 'copy' ) && !isBoolean( opts.copy ) ) {
				throw new TypeError( format( 'invalid option. `%s` option must be a boolean. Option: `%s`.', 'copy', opts.copy ) );
			}
			if ( hasOwnProp( opts, 'prng' ) ) {
				if ( !isFunction( opts.prng ) ) {
					throw new TypeError( format( 'invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.', 'prng', opts.prng ) );
				}
				rnorm = randn({
					'prng': opts.prng
				});
			} else {
				if ( hasOwnProp( opts, 'state' ) && !isUint32Array( opts.state ) ) {
					throw new TypeError( format( 'invalid option. `%s` option must be a Uint32Array. Option: `%s`.', 'state', opts.state ) );
				}
				opts = assign( {}, opts );
				if ( opts.copy === false ) {
					FLG = false;
				} else if ( opts.state ) {
					opts.state = gcopy( opts.state.length, opts.state, 1, new Uint32Array( opts.state.length ), 1 ); // eslint-disable-line max-len
				}
				opts.copy = false;
				rnorm = randn( opts );
			}
		} else {
			v = arguments[ 0 ];
			if ( !isPositive( v ) ) {
				throw new TypeError( format( 'invalid argument. First argument must be a positive number or an options object. Value: `%s`.', v ) );
			}
			opts = {
				'copy': false
			};
			rnorm = randn( opts );
		}
	} else {
		v = arguments[ 0 ];
		if ( !isPositive( v ) ) {
			throw new TypeError( format( 'invalid argument. First argument must be a positive number. Value: `%s`.', v ) );
		}
		opts = arguments[ 1 ];
		if ( !isObject( opts ) ) {
			throw new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', opts ) );
		}
		if ( hasOwnProp( opts, 'copy' ) && !isBoolean( opts.copy ) ) {
			throw new TypeError( format( 'invalid option. `%s` option must be a boolean. Option: `%s`.', 'copy', opts.copy ) );
		}
		if ( hasOwnProp( opts, 'prng' ) ) {
			if ( !isFunction( opts.prng ) ) {
				throw new TypeError( format( 'invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.', 'prng', opts.prng ) );
			}
			rnorm = randn({
				'prng': opts.prng
			});
		} else {
			if ( hasOwnProp( opts, 'state' ) && !isUint32Array( opts.state ) ) {
				throw new TypeError( format( 'invalid option. `%s` option must be a Uint32Array. Option: `%s`.', 'state', opts.state ) );
			}
			opts = assign( {}, opts );
			if ( opts.copy === false ) {
				FLG = false;
			} else if ( opts.state ) {
				opts.state = gcopy( opts.state.length, opts.state, 1, new Uint32Array( opts.state.length ), 1 ); // eslint-disable-line max-len
			}
			opts.copy = false;
			rnorm = randn( opts );
		}
	}
	if ( opts && opts.prng ) {
		if ( v === void 0 ) {
			rchisq = chisquare({
				'prng': opts.prng
			});
		} else {
			rchisq = chisquare( v, {
				'prng': opts.prng
			});
		}
	} else {
		if ( opts.state ) {
			STATE = opts.state;
		} else {
			STATE = rnorm.state;
			rnorm.state = STATE; // updates the underlying PRNG to point to a shared state
		}
		if ( v === void 0 ) {
			rchisq = chisquare({
				'state': STATE,
				'copy': false
			});
		} else {
			rchisq = chisquare( v, {
				'state': STATE,
				'copy': false
			});
		}
	}
	if ( v === void 0 ) {
		prng = t2;
	} else {
		prng = t1;
	}
	rand = rnorm.PRNG;

	setReadOnly( prng, 'NAME', 't' );

	// If we are provided an "external" PRNG, we don't support getting or setting PRNG state, as we'd need to check for compatible state value types, etc, entailing considerable complexity.
	if ( opts && opts.prng ) {
		setReadOnly( prng, 'seed', null );
		setReadOnly( prng, 'seedLength', null );
		setReadWriteAccessor( prng, 'state', constantFunction( null ), noop );
		setReadOnly( prng, 'stateLength', null );
		setReadOnly( prng, 'byteLength', null );
		setReadOnly( prng, 'toJSON', constantFunction( null ) );
	} else {
		setReadOnlyAccessor( prng, 'seed', getSeed );
		setReadOnlyAccessor( prng, 'seedLength', getSeedLength );
		setReadWriteAccessor( prng, 'state', getState, setState );
		setReadOnlyAccessor( prng, 'stateLength', getStateLength );
		setReadOnlyAccessor( prng, 'byteLength', getStateSize );
		setReadOnly( prng, 'toJSON', toJSON );
	}
	setReadOnly( prng, 'PRNG', rand );
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
	* @throws {TypeError} must provide a `Uint32Array`
	* @throws {Error} must provide a valid state
	*/
	function setState( s ) {
		if ( !isUint32Array( s ) ) {
			throw new TypeError( format( 'invalid argument. Must provide a Uint32Array. Value: `%s`.', s ) );
		}
		if ( FLG ) {
			s = gcopy( s.length, s, 1, new Uint32Array( s.length ), 1 );
		}
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
		if ( v === void 0 ) {
			out.params = [];
		} else {
			out.params = [ v ];
		}
		return out;
	}

	/**
	* Returns a pseudorandom number drawn from a Student's t-distribution with bound degrees of freedom `v`.
	*
	* @private
	* @returns {number} pseudorandom number
	*
	* @example
	* var v = t1();
	* // returns <number>
	*/
	function t1() {
		return rnorm() / sqrt( rchisq() / v );
	}

	/**
	* Returns a pseudorandom number drawn from a Student's t-distribution with degrees of freedom `v`.
	*
	* @private
	* @param {PositiveNumber} v - degrees of freedom
	* @returns {number} pseudorandom number
	*
	* @example
	* var v = t2( 3.0 );
	* // returns <number>
	*
	* @example
	* var v = t2( 0.0 );
	* // returns NaN
	*
	* @example
	* var v = t2( -1.5 );
	* // returns NaN
	*/
	function t2( v ) {
		if (
			isnan( v ) ||
			v <= 0.0
		) {
			return NaN;
		}
		return rnorm() / sqrt( rchisq( v ) / v );
	}
}


// EXPORTS //

module.exports = factory;
