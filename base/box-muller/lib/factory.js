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
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isUint32Array = require( '@stdlib/assert/is-uint32array' );
var mt19937 = require( './../../../base/mt19937' ).factory;
var constantFunction = require( '@stdlib/utils/constant-function' );
var noop = require( '@stdlib/utils/noop' );
var typedarray2json = require( '@stdlib/array/to-json' );
var format = require( '@stdlib/string/format' );
var randn0 = require( './randn.js' );
var getMin = require( './min.js' );
var getMax = require( './max.js' );


// MAIN //

/**
* Returns a pseudorandom number generator which implements the Box-Muller transform to generate standard normally distributed pseudorandom numbers.
*
* @param {Options} [options] - function options
* @param {PRNG} [options.prng] - pseudorandom number generator which generates uniformly distributed pseudorandom numbers
* @param {PRNGSeedMT19937} [options.seed] - pseudorandom number generator seed
* @param {PRNGStateMT19937} [options.state] - pseudorandom number generator state
* @param {boolean} [options.copy=true] - boolean indicating whether to copy a provided pseudorandom number generator state
* @throws {TypeError} must provide an object
* @throws {TypeError} must provide valid options
* @throws {Error} must provide a valid state
* @returns {PRNG} pseudorandom number generator
*
* @example
* var randn = factory();
*
* var r = randn();
* // returns <number>
*
* @example
* // Return a seeded PRNG:
* var randn = factory({
*     'seed': 12345
* });
*
* var r = randn();
* // returns <number>
*/
function factory( options ) {
	var randu;
	var randn;
	var rand;
	var opts;

	opts = {
		'copy': true
	};
	if ( arguments.length ) {
		if ( !isObject( options ) ) {
			throw new TypeError( format( 'invalid argument. Must provide an object. Value: `%s`.', options ) );
		}
		if ( hasOwnProp( options, 'copy' ) ) {
			opts.copy = options.copy;
			if ( !isBoolean( options.copy ) ) {
				throw new TypeError( format( 'invalid option. `%s` option must be a boolean. Option: `%s`.', 'copy', options.copy ) );
			}
		}
		if ( hasOwnProp( options, 'prng' ) ) {
			if ( !isFunction( options.prng ) ) {
				throw new TypeError( format( 'invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.', 'prng', options.prng ) );
			}
			randu = options.prng;
		}
		// If provided a PRNG, ignore the `state` option, as we don't support getting or setting PRNG state.
		else if ( hasOwnProp( options, 'state' ) ) {
			opts.state = options.state;
			if ( !isUint32Array( options.state ) ) {
				throw new TypeError( format( 'invalid option. `%s` option must be a Uint32Array. Option: `%s`.', 'state', options.state ) );
			}
		}
		// If provided a PRNG, ignore the `seed` option, as a `seed`, by itself, is insufficient to guarantee reproducibility. If provided a state, ignore the `seed` option, as a PRNG state should contain seed information.
		else if ( hasOwnProp( options, 'seed' ) ) {
			opts.seed = options.seed;
			if ( options.seed === void 0 ) {
				throw new TypeError( format( 'invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.', 'seed', options.seed ) );
			}
		}
	}
	if ( opts.state === void 0 ) {
		if ( randu === void 0 ) {
			rand = mt19937( opts );
			randu = rand.normalized;
		} else {
			opts.seed = null;
		}
	} else {
		rand = mt19937( opts );
		randu = rand.normalized;
	}
	randn = randn0( randu );

	setReadOnly( randn, 'NAME', 'box-muller' );
	if ( opts.seed === null ) {
		setReadOnly( randn, 'seed', null );
		setReadOnly( randn, 'seedLength', null );
	} else {
		setReadOnlyAccessor( randn, 'seed', getSeed );
		setReadOnlyAccessor( randn, 'seedLength', getSeedLength );
	}
	// If we are provided an "external" PRNG, we don't support getting or setting PRNG state, as we'd need to check for compatible state value types, etc, entailing considerable complexity.
	if ( options && options.prng ) {
		setReadWriteAccessor( randn, 'state', constantFunction( null ), noop );
		setReadOnly( randn, 'stateLength', null );
		setReadOnly( randn, 'byteLength', null );
		setReadOnly( randn, 'toJSON', constantFunction( null ) );
	} else {
		setReadWriteAccessor( randn, 'state', getState, setState );
		setReadOnlyAccessor( randn, 'stateLength', getStateLength );
		setReadOnlyAccessor( randn, 'byteLength', getStateSize );
		setReadOnly( randn, 'toJSON', toJSON );
	}
	setReadOnly( randn, 'PRNG', randu );

	if ( hasOwnProp( randu, 'MIN' ) ) {
		setReadOnly( randn, 'MIN', getMin( randu.MIN ) );
		setReadOnly( randn, 'MAX', getMax( randu.MIN ) );
	} else {
		setReadOnly( randn, 'MIN', null );
		setReadOnly( randn, 'MAX', null );
	}

	return randn;

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
		out.name = randn.NAME;
		out.state = typedarray2json( rand.state );
		out.params = [];
		return out;
	}
}


// EXPORTS //

module.exports = factory;
