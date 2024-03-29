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
var constantFunction = require( '@stdlib/utils/constant-function' );
var noop = require( '@stdlib/utils/noop' );
var assign = require( '@stdlib/object/assign' );
var isObject = require( '@stdlib/assert/is-plain-object' );
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var MAX_VALUE = require( '@stdlib/constants/float64/max' );
var randn = require( './../../../base/randn' ).factory;
var iteratorSymbol = require( '@stdlib/symbol/iterator' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Returns an iterator for generating pseudorandom numbers drawn from a standard normal distribution.
*
* @param {Options} [options] - function options
* @param {string} [options.name='improved-ziggurat'] - name of a supported pseudorandom number generator (PRNG), which will serve as the underlying source of pseudorandom numbers
* @param {PRNG} [options.prng] - pseudorandom number generator which generates uniformly distributed pseudorandom numbers
* @param {PRNGSeedMT19937} [options.seed] - pseudorandom number generator seed
* @param {PRNGStateMT19937} [options.state] - pseudorandom number generator state
* @param {boolean} [options.copy=true] - boolean indicating whether to copy a provided pseudorandom number generator state
* @param {NonNegativeInteger} [options.iter] - number of iterations
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {Error} must provide a valid state
* @returns {Iterator} iterator
*
* @example
* var iter = iterator();
*
* var r = iter.next().value;
* // returns <number>
*
* r = iter.next().value;
* // returns <number>
*
* r = iter.next().value;
* // returns <number>
*
* // ...
*/
function iterator( options ) {
	var opts;
	var iter;
	var rand;
	var FLG;
	var i;
	if ( arguments.length > 0 ) {
		if ( !isObject( options ) ) {
			throw new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', options ) );
		}
		opts = assign( {}, options );
		if ( hasOwnProp( opts, 'iter' ) ) {
			if ( !isNonNegativeInteger( opts.iter ) ) {
				throw new TypeError( format( 'invalid option. `%s` option must be a nonnegative integer. Option: `%s`.', 'iter', opts.iter ) );
			}
		} else {
			opts.iter = MAX_VALUE;
		}
		rand = randn( opts );
		if ( opts.prng === void 0 && opts.copy !== false ) {
			opts.state = rand.state; // cache a copy of the PRNG state
		}
	} else {
		rand = randn();
		opts = {
			'iter': MAX_VALUE,
			'state': rand.state // cache a copy of the PRNG state
		};
	}
	i = 0;

	// Create an iterator protocol-compliant object:
	iter = {};
	setReadOnly( iter, 'next', next );
	setReadOnly( iter, 'return', end );

	if ( opts && opts.prng ) {
		setReadOnly( iter, 'seed', null );
		setReadOnly( iter, 'seedLength', null );
		setReadWriteAccessor( iter, 'state', constantFunction( null ), noop );
		setReadOnly( iter, 'stateLength', null );
		setReadOnly( iter, 'byteLength', null );
	} else {
		setReadOnlyAccessor( iter, 'seed', getSeed );
		setReadOnlyAccessor( iter, 'seedLength', getSeedLength );
		setReadWriteAccessor( iter, 'state', getState, setState );
		setReadOnlyAccessor( iter, 'stateLength', getStateLength );
		setReadOnlyAccessor( iter, 'byteLength', getStateSize );
	}
	setReadOnly( iter, 'PRNG', rand.PRNG );

	// If an environment supports `Symbol.iterator`, make the iterator iterable:
	if ( iteratorSymbol ) {
		setReadOnly( iter, iteratorSymbol, factory );
	}
	return iter;

	/**
	* Returns an iterator protocol-compliant object containing the next iterated value.
	*
	* @private
	* @returns {Object} iterator protocol-compliant object
	*/
	function next() {
		i += 1;
		if ( FLG || i > opts.iter ) {
			return {
				'done': true
			};
		}
		return {
			'value': rand(),
			'done': false
		};
	}

	/**
	* Finishes an iterator.
	*
	* @private
	* @param {*} [value] - value to return
	* @returns {Object} iterator protocol-compliant object
	*/
	function end( value ) {
		FLG = true;
		if ( arguments.length ) {
			return {
				'value': value,
				'done': true
			};
		}
		return {
			'done': true
		};
	}

	/**
	* Returns a new iterator.
	*
	* @private
	* @returns {Iterator} iterator
	*/
	function factory() {
		return iterator( opts );
	}

	/**
	* Returns the PRNG seed.
	*
	* @private
	* @returns {PRNGSeedMT19937} seed
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
	* @returns {PRNGStateMT19937} current state
	*/
	function getState() {
		return rand.PRNG.state;
	}

	/**
	* Sets the pseudorandom number generator state.
	*
	* @private
	* @param {PRNGStateMT19937} s - generator state
	* @throws {Error} must provide a valid state
	*/
	function setState( s ) {
		rand.PRNG.state = s;
	}
}


// EXPORTS //

module.exports = iterator;
