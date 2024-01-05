/*
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
* Interface for generating pseudorandom values drawn from a nullary PRNG.
*/
interface NullaryPRNG<U> extends PRNG {
	/**
	* Returns a pseudorandom value.
	*
	* @returns pseudorandom value
	*/
	(): U;
}

/**
* Class for creating arrays filled with pseudorandom values drawn from a nullary PRNG.
*/
declare class RandomArray<U> {
	/**
	* Constructor for creating arrays filled with pseudorandom values drawn from a nullary PRNG.
	*
	* @param prng - nullary pseudorandom value generator
	* @param dtypes - list of supported output data types
	* @param dtype - default output data type
	* @returns instance
	*
	* @example
	* var exponential = require( './../../../../../base/exponential' );
	*
	* var dtypes = [ 'float64', 'float32', 'generic' ];
	* var defaultDType = 'float64';
	*
	* var rand = new RandomArray( exponential.factory( 2.0 ), dtypes, defaultDType );
	*
	* var v = rand.generate( 10 );
	* // returns <Float64Array>
	*/
	constructor( prng: NullaryPRNG<U>, dtypes: ArrayLike<DataType>, dtype: DataType );

	/**
	* Returns an array filled with pseudorandom values drawn from a nullary PRNG.
	*
	* @param len - number of elements
	* @param options - function options
	* @returns output array
	*
	* @example
	* var exponential = require( './../../../../../base/exponential' );
	*
	* var dtypes = [ 'float64', 'float32', 'generic' ];
	* var defaultDType = 'float64';
	*
	* var rand = new RandomArray( exponential.factory( 2.0 ), dtypes, defaultDType );
	*
	* var v = rand.generate( 10 );
	* // returns <Float64Array>
	*/
	generate( len: number, options?: Options ): OutputArray<U>;

	/**
	* Fills an array with pseudorandom values drawn from a nullary PRNG.
	*
	* @param out - output array
	* @returns output array
	*
	* @example
	* var exponential = require( './../../../../../base/exponential' );
	* var zeros = require( '@stdlib/array/zeros' );
	*
	* var dtypes = [ 'float64', 'float32', 'generic' ];
	* var defaultDType = 'float64';
	*
	* var rand = new RandomArray( exponential.factory( 2.0 ), dtypes, defaultDType );
	*
	* var out = zeros( 10, 'float64' );
	* // returns <Float64Array>
	*
	* var v = rand.assign( out );
	* // returns <Float64Array>
	*
	* var bool = ( v === out );
	* // returns true
	*/
	assign( out: OutputArray<U> ): OutputArray<U>;
}

/**
* Interface defining a constructor which is both "newable" and "callable".
*/
interface RandomArrayConstructor {
	/**
	* Constructor for creating arrays filled with pseudorandom values drawn from a nullary PRNG.
	*
	* @param prng - nullary pseudorandom value generator
	* @param dtypes - list of supported output data types
	* @param dtype - default output data type
	* @returns instance
	*
	* @example
	* var exponential = require( './../../../../../base/exponential' );
	*
	* var dtypes = [ 'float64', 'float32', 'generic' ];
	* var defaultDType = 'float64';
	*
	* var rand = new RandomArray( exponential.factory( 2.0 ), dtypes, defaultDType );
	*
	* var v = rand.generate( 10 );
	* // returns <Float64Array>
	*/
	new<U = unknown>( prng: NullaryPRNG<U>, dtypes: ArrayLike<DataType>, dtype: DataType ): RandomArray<U>;

	/**
	* Constructor for creating arrays filled with pseudorandom values drawn from a nullary PRNG.
	*
	* @param prng - nullary pseudorandom value generator
	* @param dtypes - list of supported output data types
	* @param dtype - default output data type
	* @returns instance
	*
	* @example
	* var exponential = require( './../../../../../base/exponential' );
	*
	* var dtypes = [ 'float64', 'float32', 'generic' ];
	* var defaultDType = 'float64';
	*
	* var rand = new RandomArray( exponential.factory( 2.0 ), dtypes, defaultDType );
	*
	* var v = rand.generate( 10 );
	* // returns <Float64Array>
	*/
	<U = unknown>( prng: NullaryPRNG<U>, dtypes: ArrayLike<DataType>, dtype: DataType ): RandomArray<U>;
}

/**
* Constructor for creating arrays filled with pseudorandom values drawn from a nullary PRNG.
*
* @param prng - nullary pseudorandom value generator
* @param dtypes - list of supported output data types
* @param dtype - default output data type
* @returns instance
*
* @example
* var exponential = require( '@stdlib/random/base/exponential' );
*
* var dtypes = [ 'float64', 'float32', 'generic' ];
* var defaultDType = 'float64';
*
* var rand = new RandomArray( exponential.factory( 2.0 ), dtypes, defaultDType );
*
* var v = rand.generate( 10 );
* // returns <Float64Array>
*/
declare var ctor: RandomArrayConstructor;


// EXPORTS //

export = ctor;
