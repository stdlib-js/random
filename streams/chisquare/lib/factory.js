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

var isPositive = require( '@stdlib/assert/is-positive-number' ).isPrimitive;
var isPlainObject = require( '@stdlib/assert/is-plain-object' );
var assign = require( '@stdlib/object/assign' );
var format = require( '@stdlib/string/format' );
var RandomStream = require( './main.js' );


// MAIN //

/**
* Returns a function for creating readable streams which generate pseudorandom numbers drawn from a chi-square distribution.
*
* @param {PositiveNumber} [k] - degrees of freedom
* @param {Options} [options] - stream options
* @param {boolean} [options.objectMode=false] - specifies whether a stream should operate in object mode
* @param {(string|null)} [options.encoding=null] - specifies how `Buffer` objects should be decoded to `strings`
* @param {NonNegativeNumber} [options.highWaterMark] - specifies the maximum number of bytes to store in an internal buffer before ceasing to generate additional pseudorandom numbers
* @param {string} [options.sep='\n'] - separator used to join streamed data
* @param {NonNegativeInteger} [options.iter] - number of iterations
* @param {PRNG} [options.prng] - pseudorandom number generator which generates uniformly distributed pseudorandom numbers
* @param {PRNGSeedMT19937} [options.seed] - pseudorandom number generator seed
* @param {PRNGStateMT19937} [options.state] - pseudorandom number generator state
* @param {boolean} [options.copy=true] - boolean indicating whether to copy a provided pseudorandom number generator state
* @param {PositiveInteger} [options.siter] - number of iterations after which to emit the PRNG state
* @throws {TypeError} options argument must be an object
* @returns {Function} stream factory
*
* @example
* var opts = {
*     'sep': ',',
*     'objectMode': false,
*     'encoding': 'utf8',
*     'highWaterMark': 64
* };
*
* var createStream = factory( opts );
*
* // Create 10 identically configured streams...
* var streams = [];
* var i;
* for ( i = 0; i < 10; i++ ) {
*     streams.push( createStream( 3.0 ) );
* }
*/
function factory( k, options ) {
	var nargs;
	var opts;
	var fcn;

	nargs = arguments.length;
	if ( nargs > 1 ) {
		if ( !isPlainObject( options ) ) {
			throw new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', options ) );
		}
		fcn = createStream2;
		opts = assign( {}, options );
	} else if ( nargs === 1 ) {
		if ( isPositive( k ) ) {
			fcn = createStream2;
			opts = {};
		} else {
			if ( !isPlainObject( k ) ) {
				throw new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', k ) );
			}
			opts = assign( {}, k );
			fcn = createStream1;
		}
	} else {
		opts = {};
		fcn = createStream1;
	}
	return fcn;

	/**
	* Returns a readable stream for generating pseudorandom numbers drawn from a chi-square distribution.
	*
	* @private
	* @param {PositiveNumber} k - degrees of freedom
	* @throws {TypeError} `k` must be a positive number
	* @throws {TypeError} options argument must be an object
	* @throws {TypeError} must provide valid options
	* @throws {Error} must provide a valid state
	* @returns {RandomStream} Stream instance
	*/
	function createStream1( k ) {
		return new RandomStream( k, opts );
	}

	/**
	* Returns a readable stream for generating pseudorandom numbers drawn from a chi-square distribution.
	*
	* @private
	* @throws {TypeError} `k` must be a positive number
	* @throws {TypeError} options argument must be an object
	* @throws {TypeError} must provide valid options
	* @throws {Error} must provide a valid state
	* @returns {RandomStream} Stream instance
	*/
	function createStream2() {
		return new RandomStream( k, opts );
	}
}


// EXPORTS //

module.exports = factory;
