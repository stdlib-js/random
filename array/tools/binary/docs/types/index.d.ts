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

/// <reference types="@stdlib/types"/>

import { DataType, ArrayLike, AccessorArrayLike } from '@stdlib/types/array';
import { PRNG } from '@stdlib/types/random';

/**
* Output array.
*/
type OutputArray<T> = ArrayLike<T> | AccessorArrayLike<T>;

/**
* Interface defining options.
*/
interface Options {
	/**
	* Output array data type.
	*/
	dtype?: DataType;
}

/**
* Interface for generating pseudorandom values drawn from a binary PRNG.
*/
interface BinaryPRNG<T, U, V> extends PRNG {
	/**
	* Returns a pseudorandom value.
	*
	* @param param1 - first PRNG parameter
	* @param param2 - second PRNG parameter
	* @returns pseudorandom value
	*/
	( param1: T, param2: U ): V;
}

/**
* Class for creating arrays filled with pseudorandom values drawn from a binary PRNG.
*/
declare class RandomArray<T, U, V> {
	/**
	* Constructor for creating arrays filled with pseudorandom values drawn from a binary PRNG.
	*
	* @param prng - binary pseudorandom value generator
	* @param dtypes - list of supported output data types
	* @param dtype - default output data type
	* @returns instance
	*
	* @example
	* var arcsine = require( './../../../../../base/arcsine' );
	*
	* var dtypes = [ 'float64', 'float32', 'generic' ];
	* var defaultDType = 'float64';
	*
	* var rand = new RandomArray( arcsine, dtypes, defaultDType );
	*
	* var v = rand.generate( 10, 2.0, 5.0 );
	* // returns <Float64Array>
	*/
	constructor( prng: BinaryPRNG<T, U, V>, dtypes: ArrayLike<DataType>, dtype: DataType );

	/**
	* Returns an array filled with pseudorandom values drawn from a binary PRNG.
	*
	* @param len - number of elements
	* @param param1 - first PRNG parameter
	* @param param2 - second PRNG parameter
	* @param options - function options
	* @returns output array
	*
	* @example
	* var arcsine = require( './../../../../../base/arcsine' );
	*
	* var dtypes = [ 'float64', 'float32', 'generic' ];
	* var defaultDType = 'float64';
	*
	* var rand = new RandomArray( arcsine, dtypes, defaultDType );
	*
	* var v = rand.generate( 10, 2.0, 5.0 );
	* // returns <Float64Array>
	*/
	generate( len: number, param1: T, param2: U, options?: Options ): OutputArray<V>;

	/**
	* Fills an array with pseudorandom values drawn from a binary PRNG.
	*
	* @param param1 - PRNG parameter
	* @param param2 - PRNG parameter
	* @param out - output array
	* @returns output array
	*
	* @example
	* var arcsine = require( './../../../../../base/arcsine' );
	* var zeros = require( '@stdlib/array/zeros' );
	*
	* var dtypes = [ 'float64', 'float32', 'generic' ];
	* var defaultDType = 'float64';
	*
	* var rand = new RandomArray( arcsine, dtypes, defaultDType );
	*
	* var out = zeros( 10, 'float64' );
	* // returns <Float64Array>
	*
	* var v = rand.assign( 2.0, 5.0, out );
	* // returns <Float64Array>
	*
	* var bool = ( v === out );
	* // returns true
	*/
	assign( param1: T, param2: U, out: OutputArray<V> ): OutputArray<V>;
}

/**
* Interface defining a constructor which is both "newable" and "callable".
*/
interface RandomArrayConstructor {
	/**
	* Constructor for creating arrays filled with pseudorandom values drawn from a binary PRNG.
	*
	* @param prng - binary pseudorandom value generator
	* @param dtypes - list of supported output data types
	* @param dtype - default output data type
	* @returns instance
	*
	* @example
	* var arcsine = require( './../../../../../base/arcsine' );
	*
	* var dtypes = [ 'float64', 'float32', 'generic' ];
	* var defaultDType = 'float64';
	*
	* var rand = new RandomArray( arcsine, dtypes, defaultDType );
	*
	* var v = rand.generate( 10, 2.0, 5.0 );
	* // returns <Float64Array>
	*/
	new<T = unknown, U = unknown, V = unknown>( prng: BinaryPRNG<T, U, V>, dtypes: ArrayLike<DataType>, dtype: DataType ): RandomArray<T, U, V>;

	/**
	* Constructor for creating arrays filled with pseudorandom values drawn from a binary PRNG.
	*
	* @param prng - binary pseudorandom value generator
	* @param dtypes - list of supported output data types
	* @param dtype - default output data type
	* @returns instance
	*
	* @example
	* var arcsine = require( './../../../../../base/arcsine' );
	*
	* var dtypes = [ 'float64', 'float32', 'generic' ];
	* var defaultDType = 'float64';
	*
	* var rand = new RandomArray( arcsine, dtypes, defaultDType );
	*
	* var v = rand.generate( 10, 2.0, 5.0 );
	* // returns <Float64Array>
	*/
	<T = unknown, U = unknown, V = unknown>( prng: BinaryPRNG<T, U, V>, dtypes: ArrayLike<DataType>, dtype: DataType ): RandomArray<T, U, V>;
}

/**
* Constructor for creating arrays filled with pseudorandom values drawn from a binary PRNG.
*
* @param prng - binary pseudorandom value generator
* @param dtypes - list of supported output data types
* @param dtype - default output data type
* @returns instance
*
* @example
* var arcsine = require( '@stdlib/random/base/arcsine' );
*
* var dtypes = [ 'float64', 'float32', 'generic' ];
* var defaultDType = 'float64';
*
* var rand = new RandomArray( arcsine, dtypes, defaultDType );
*
* var v = rand.generate( 10, 2.0, 5.0 );
* // returns <Float64Array>
*/
declare var ctor: RandomArrayConstructor;


// EXPORTS //

export = ctor;
