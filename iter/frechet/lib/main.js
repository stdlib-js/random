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
var copy = require( '@stdlib/utils/copy' );
var isPositiveNumber = require( '@stdlib/assert/is-positive-number' ).isPrimitive;
var isObject = require( '@stdlib/assert/is-plain-object' );
var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var MAX_VALUE = require( '@stdlib/constants/float64/max' );
var rfrechet = require( '@stdlib/random/base/frechet' ).factory;
var iteratorSymbol = require( '@stdlib/symbol/iterator' );


// MAIN //

/**
* Returns an iterator for generating pseudorandom numbers drawn from a Fréchet distribution.
*
* @param {PositiveNumber} alpha - shape parameter
* @param {PositiveNumber} s  - rate parameter
* @param {number} m - location parameter
* @param {Options} [options] - function options
* @param {PRNG} [options.prng] - pseudorandom number generator which generates uniformly distributed pseudorandom numbers
* @param {PRNGSeedMT19937} [options.seed] - pseudorandom number generator seed
* @param {PRNGStateMT19937} [options.state] - pseudorandom number generator state
* @param {boolean} [options.copy=true] - boolean indicating whether to copy a provided pseudorandom number generator state
* @param {NonNegativeInteger} [options.iter] - number of iterations
* @throws {TypeError} `alpha` must be a positive number
* @throws {TypeError} `s` must be a positive number
* @throws {TypeError} `m` must be a number
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {Error} must provide a valid state
* @returns {Iterator} iterator
*
* @example
* var iter = iterator( 2.0, 5.0, 3.0 );
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
function iterator( alpha, s, m, options ) {
	var opts;
	var iter;
	var rand;
	var FLG;
	var i;
	if ( !isPositiveNumber( alpha ) ) {
		throw new TypeError( 'invalid argument. First argument must be a positive number. Value: `'+alpha+'`.' );
	}
	if ( !isPositiveNumber( s ) ) {
		throw new TypeError( 'invalid argument. Second argument must be a positive number. Value: `'+s+'`.' );
	}
	if ( !isNumber( m ) || isnan( m ) ) {
		throw new TypeError( 'invalid argument. Third argument must be a number primitive. Value: `'+m+'`.' );
	}
	if ( arguments.length > 3 ) {
		if ( !isObject( options ) ) {
			throw new TypeError( 'invalid argument. Options argument must be an object. Value: `'+options+'`.' );
		}
		opts = copy( options, 1 );
		if ( hasOwnProp( opts, 'iter' ) ) {
			if ( !isNonNegativeInteger( opts.iter ) ) {
				throw new TypeError( 'invalid option. `iter` option must be a nonnegative integer. Option: `'+opts.iter+'`.' );
			}
		} else {
			opts.iter = MAX_VALUE;
		}
		rand = rfrechet( alpha, s, m, opts );
		if ( opts.prng === void 0 && opts.copy !== false ) {
			opts.state = rand.state; // cache a copy of the PRNG state
		}
	} else {
		rand = rfrechet( alpha, s, m );
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
		return iterator( alpha, s, m, opts );
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
