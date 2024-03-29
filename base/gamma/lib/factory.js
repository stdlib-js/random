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
var isUint32Array = require( '@stdlib/assert/is-uint32array' );
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var isFunction = require( '@stdlib/assert/is-function' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var constantFunction = require( '@stdlib/utils/constant-function' );
var noop = require( '@stdlib/utils/noop' );
var randn = require( './../../../base/improved-ziggurat' ).factory;
var randu = require( './../../../base/mt19937' ).factory;
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var pow = require( '@stdlib/math/base/special/pow' );
var gcopy = require( '@stdlib/blas/base/gcopy' );
var Uint32Array = require( '@stdlib/array/uint32' );
var typedarray2json = require( '@stdlib/array/to-json' );
var assign = require( '@stdlib/object/assign' );
var format = require( '@stdlib/string/format' );
var validate = require( './validate.js' );
var gamma0 = require( './gamma.js' );


// VARIABLES //

var ONE_THIRD = 1.0 / 3.0;


// MAIN //

/**
* Returns a pseudorandom number generator for generating gamma distributed random numbers.
*
* @param {PositiveNumber} [alpha] - shape parameter
* @param {PositiveNumber} [beta] - rate parameter
* @param {Options} [options] - function options
* @param {PRNG} [options.prng] - pseudorandom number generator which generates uniformly distributed pseudorandom numbers
* @param {PRNGSeedMT19937} [options.seed] - pseudorandom number generator seed
* @param {PRNGStateMT19937} [options.state] - pseudorandom number generator state
* @param {boolean} [options.copy=true] - boolean indicating whether to copy a provided pseudorandom number generator state
* @throws {TypeError} `alpha` must be a positive number
* @throws {TypeError} `beta` must be a positive number
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {Error} must provide a valid state
* @returns {PRNG} pseudorandom number generator
*
* @example
* var gamma = factory( 2.0, 1.0 );
* var v = gamma();
* // returns <number>
*
* @example
* var gamma = factory( 2.0, 2.0, {
*     'seed': 297
* });
* var v = gamma();
* // returns <number>
*/
function factory() {
	var STATE;
	var alpha;
	var rnorm;
	var beta;
	var opts;
	var rand;
	var prng;
	var FLG;
	var err;
	var c;
	var d;

	FLG = true;
	if ( arguments.length === 0 ) {
		opts = {
			'copy': false
		};
		rand = randu( opts );
	} else if ( arguments.length === 1 ) {
		opts = arguments[ 0 ];
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
			rand = opts.prng;
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
			rand = randu( opts );
		}
	} else {
		alpha = arguments[ 0 ];
		beta = arguments[ 1 ];
		err = validate( alpha, beta );
		if ( err ) {
			throw err;
		}
		if ( arguments.length > 2 ) {
			opts = arguments[ 2 ];
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
				rand = opts.prng;
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
				rand = randu( opts );
			}
		} else {
			opts = {
				'copy': false
			};
			rand = randu( opts );
		}
	}
	if ( opts && opts.prng ) {
		rnorm = randn({
			'prng': opts.prng
		});
	} else {
		if ( opts.state ) {
			STATE = opts.state;
		} else {
			STATE = rand.state;
			rand.state = STATE; // updates the underlying PRNG to point to a shared state
		}
		rnorm = randn({
			'state': STATE,
			'copy': false
		});
	}
	if ( alpha === void 0 ) {
		prng = gamma2;
	} else {
		if ( alpha >= 1.0 ) {
			prng = gamma1a;
			d = alpha - ONE_THIRD;
		} else {
			prng = gamma1b;
			d = alpha + 1.0 - ONE_THIRD;
		}
		c = 1.0 / sqrt( 9.0*d );
	}
	setReadOnly( prng, 'NAME', 'gamma' );

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
		if ( alpha === void 0 ) {
			out.params = [];
		} else {
			out.params = [ alpha, beta ];
		}
		return out;
	}

	/**
	* Returns a pseudorandom number drawn from a gamma distribution with bound parameters when `alpha >= 1`.
	*
	* @private
	* @returns {PositiveNumber} pseudorandom number
	*
	* @example
	* var v = gamma1a();
	* // returns <number>
	*/
	function gamma1a() {
		return gamma0( rand, rnorm, beta, d, c );
	}

	/**
	* Returns a pseudorandom number drawn from a gamma distribution with bound parameters when `alpha < 1`.
	*
	* @private
	* @returns {PositiveNumber} pseudorandom number
	*
	* @example
	* var v = gamma1b();
	* // returns <number>
	*/
	function gamma1b() {
		return gamma0( rand, rnorm, beta, d, c ) * pow( rand(), 1.0/alpha );
	}

	/**
	* Returns a pseudorandom number drawn from a gamma distribution.
	*
	* @private
	* @param {PositiveNumber} alpha - shape parameter
	* @param {PositiveNumber} beta - rate parameter
	* @returns {PositiveNumber} pseudorandom number
	*
	* @example
	* var v = gamma2( 2.0, 4.0 );
	* // returns <number>
	*
	* @example
	* var v = gamma2( 3.0, 0.0 );
	* // returns NaN
	*
	* @example
	* var v = gamma2( 0.0, 2.0 );
	* // returns NaN
	*
	* @example
	* var v = gamma2( NaN, NaN );
	* // returns NaN
	*/
	function gamma2( alpha, beta ) {
		var c;
		var d;
		if (
			isnan( alpha ) ||
			isnan( beta ) ||
			alpha <= 0.0 ||
			beta <= 0.0
		) {
			return NaN;
		}
		if ( alpha < 1.0 ) {
			d = alpha + 1.0 - ONE_THIRD;
			c = 1.0 / sqrt( 9.0*d );
			return gamma0( rand, rnorm, beta, d, c ) * pow( rand(), 1.0/alpha );
		}
		d = alpha - ONE_THIRD;
		c = 1.0 / sqrt( 9.0*d );
		return gamma0( rand, rnorm, beta, d, c );
	}
}


// EXPORTS //

module.exports = factory;
