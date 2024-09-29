/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import binary = require( './../../../../array/tools/binary' );
import binaryFactory = require( './../../../../array/tools/binary-factory' );
import nullary = require( './../../../../array/tools/nullary' );
import ternary = require( './../../../../array/tools/ternary' );
import ternaryFactory = require( './../../../../array/tools/ternary-factory' );
import unary = require( './../../../../array/tools/unary' );
import unaryFactory = require( './../../../../array/tools/unary-factory' );

/**
* Interface describing the `tools` namespace.
*/
interface Namespace {
	/**
	* Constructor for creating arrays filled with pseudorandom values drawn from a binary PRNG.
	*
	* @param prng - binary pseudorandom value generator
	* @param dtypes - list of supported output data types
	* @param dtype - default output data type
	* @returns instance
	*
	* @example
	* var arcsine = require( './../../../../base/arcsine' );
	*
	* var dtypes = [ 'float64', 'float32', 'generic' ];
	* var defaultDType = 'float64';
	*
	* var rand = new RandomArray( arcsine, dtypes, defaultDType );
	*
	* var v = rand.generate( 10, 2.0, 5.0 );
	* // returns <Float64Array>
	*/
	binary: typeof binary;

	/**
	* Constructor for creating arrays filled with pseudorandom values drawn from a nullary PRNG.
	*
	* @param prng - nullary pseudorandom value generator
	* @param dtypes - list of supported output data types
	* @param dtype - default output data type
	* @returns instance
	*
	* @example
	* var exponential = require( './../../../../base/exponential' );
	*
	* var dtypes = [ 'float64', 'float32', 'generic' ];
	* var defaultDType = 'float64';
	*
	* var rand = new RandomArray( exponential.fanullaryy( 2.0 ), dtypes, defaultDType );
	*
	* var v = rand.generate( 10 );
	* // returns <Float64Array>
	*/
	nullary: typeof nullary;

	/**
	* Constructor for creating arrays filled with pseudorandom values drawn from a ternary PRNG.
	*
	* @param prng - ternary pseudorandom value generator
	* @param dtypes - list of supported output data types
	* @param dtype - default output data type
	* @returns instance
	*
	* @example
	* var triangular = require( './../../../../base/triangular' );
	*
	* var dtypes = [ 'float64', 'float32', 'generic' ];
	* var defaultDType = 'float64';
	*
	* var rand = new RandomArray( triangular, dtypes, defaultDType );
	*
	* var v = rand.generate( 10, 2.0, 5.0, 3.33 );
	* // returns <Float64Array>
	*/
	ternary: typeof ternary;

	/**
	* Constructor for creating arrays filled with pseudorandom values drawn from a unary PRNG.
	*
	* @param prng - unary pseudorandom value generator
	* @param dtypes - list of supported output data types
	* @param dtype - default output data type
	* @returns instance
	*
	* @example
	* var exponential = require( './../../../../base/exponential' );
	*
	* var dtypes = [ 'float64', 'float32', 'generic' ];
	* var defaultDType = 'float64';
	*
	* var rand = new RandomArray( exponential, dtypes, defaultDType );
	*
	* var v = rand.generate( 10, 2.0 );
	* // returns <Float64Array>
	*/
	unary: typeof unary;
}

/**
* Pseudorandom number generator array creation function tools.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
