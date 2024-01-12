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

/* eslint-disable @typescript-eslint/no-unused-expressions */

/// <reference types="@stdlib/types"/>

import { DataType } from '@stdlib/types/array';
import triangular = require( './../../../../../base/triangular' );
import zeros = require( '@stdlib/array/zeros' );
import Random = require( './index' );


// TESTS //

// The function returns an instance for generating arrays of pseudorandom values...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];

	new Random<number, number, number, number>( triangular, dtypes, dtypes[ 0 ] ); // $ExpectType RandomArray<number, number, number, number>

	const random = Random;
	random<number, number, number, number>( triangular, dtypes, dtypes[ 0 ] ); // $ExpectType RandomArray<number, number, number, number>
}

// The compiler throws an error if the function is provided a first argument which is not a PRNG function...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];

	new Random( '5', dtypes, dtypes[ 0 ] ); // $ExpectError
	new Random( 5, dtypes, dtypes[ 0 ] ); // $ExpectError
	new Random( true, dtypes, dtypes[ 0 ] ); // $ExpectError
	new Random( false, dtypes, dtypes[ 0 ] ); // $ExpectError
	new Random( null, dtypes, dtypes[ 0 ] ); // $ExpectError
	new Random( void 0, dtypes, dtypes[ 0 ] ); // $ExpectError
	new Random( 'abc', dtypes, dtypes[ 0 ] ); // $ExpectError
	new Random( {}, dtypes, dtypes[ 0 ] ); // $ExpectError
	new Random( ( x: number ): number => x, dtypes, dtypes[ 0 ] ); // $ExpectError

	const random = Random;
	random( '5', dtypes, dtypes[ 0 ] ); // $ExpectError
	random( 5, dtypes, dtypes[ 0 ] ); // $ExpectError
	random( true, dtypes, dtypes[ 0 ] ); // $ExpectError
	random( false, dtypes, dtypes[ 0 ] ); // $ExpectError
	random( null, dtypes, dtypes[ 0 ] ); // $ExpectError
	random( void 0, dtypes, dtypes[ 0 ] ); // $ExpectError
	random( 'abc', dtypes, dtypes[ 0 ] ); // $ExpectError
	random( {}, dtypes, dtypes[ 0 ] ); // $ExpectError
	random( ( x: number ): number => x, dtypes, dtypes[ 0 ] ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a list of data types...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];

	new Random<number, number, number, number>( triangular, '5', dtypes[ 0 ] ); // $ExpectError
	new Random<number, number, number, number>( triangular, 5, dtypes[ 0 ] ); // $ExpectError
	new Random<number, number, number, number>( triangular, true, dtypes[ 0 ] ); // $ExpectError
	new Random<number, number, number, number>( triangular, false, dtypes[ 0 ] ); // $ExpectError
	new Random<number, number, number, number>( triangular, null, dtypes[ 0 ] ); // $ExpectError
	new Random<number, number, number, number>( triangular, void 0, dtypes[ 0 ] ); // $ExpectError
	new Random<number, number, number, number>( triangular, 'abc', dtypes[ 0 ] ); // $ExpectError
	new Random<number, number, number, number>( triangular, {}, dtypes[ 0 ] ); // $ExpectError
	new Random<number, number, number, number>( triangular, ( x: number ): number => x, dtypes[ 0 ] ); // $ExpectError

	const random = Random;
	random<number, number, number, number>( triangular, '5', dtypes[ 0 ] ); // $ExpectError
	random<number, number, number, number>( triangular, 5, dtypes[ 0 ] ); // $ExpectError
	random<number, number, number, number>( triangular, true, dtypes[ 0 ] ); // $ExpectError
	random<number, number, number, number>( triangular, false, dtypes[ 0 ] ); // $ExpectError
	random<number, number, number, number>( triangular, null, dtypes[ 0 ] ); // $ExpectError
	random<number, number, number, number>( triangular, void 0, dtypes[ 0 ] ); // $ExpectError
	random<number, number, number, number>( triangular, 'abc', dtypes[ 0 ] ); // $ExpectError
	random<number, number, number, number>( triangular, {}, dtypes[ 0 ] ); // $ExpectError
	random<number, number, number, number>( triangular, ( x: number ): number => x, dtypes[ 0 ] ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a data type...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];

	new Random<number, number, number, number>( triangular, dtypes, '5' ); // $ExpectError
	new Random<number, number, number, number>( triangular, dtypes, 5 ); // $ExpectError
	new Random<number, number, number, number>( triangular, dtypes, true ); // $ExpectError
	new Random<number, number, number, number>( triangular, dtypes, false ); // $ExpectError
	new Random<number, number, number, number>( triangular, dtypes, null ); // $ExpectError
	new Random<number, number, number, number>( triangular, dtypes, void 0 ); // $ExpectError
	new Random<number, number, number, number>( triangular, dtypes, 'abc' ); // $ExpectError
	new Random<number, number, number, number>( triangular, dtypes, {} ); // $ExpectError
	new Random<number, number, number, number>( triangular, dtypes, ( x: number ): number => x ); // $ExpectError

	const random = Random;
	random<number, number, number, number>( triangular, dtypes, '5' ); // $ExpectError
	random<number, number, number, number>( triangular, dtypes, 5 ); // $ExpectError
	random<number, number, number, number>( triangular, dtypes, true ); // $ExpectError
	random<number, number, number, number>( triangular, dtypes, false ); // $ExpectError
	random<number, number, number, number>( triangular, dtypes, null ); // $ExpectError
	random<number, number, number, number>( triangular, dtypes, void 0 ); // $ExpectError
	random<number, number, number, number>( triangular, dtypes, 'abc' ); // $ExpectError
	random<number, number, number, number>( triangular, dtypes, {} ); // $ExpectError
	random<number, number, number, number>( triangular, dtypes, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];

	new Random(); // $ExpectError
	new Random<number, number, number, number>( triangular ); // $ExpectError
	new Random<number, number, number, number>( triangular, dtypes ); // $ExpectError
	new Random<number, number, number, number>( triangular, dtypes, dtypes[ 0 ], {} ); // $ExpectError

	const random = Random;
	random(); // $ExpectError
	random<number, number, number, number>( triangular ); // $ExpectError
	random<number, number, number, number>( triangular, dtypes ); // $ExpectError
	random<number, number, number, number>( triangular, dtypes, dtypes[ 0 ], {} ); // $ExpectError
}

// The function returns an instance having a `generate` method which returns an array...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];

	const r1 = new Random<number, number, number, number>( triangular, dtypes, dtypes[ 0 ] );
	r1.generate( 10, 2.0, 5.0, 3.33 ); // $ExpectType OutputArray<number>
	r1.generate( 10, 2.0, 5.0, 3.33, {} ); // $ExpectType OutputArray<number>

	const random = Random;
	const r2 = random<number, number, number, number>( triangular, dtypes, dtypes[ 0 ] );
	r2.generate( 10, 2.0, 5.0, 3.33 ); // $ExpectType OutputArray<number>
	r2.generate( 10, 2.0, 5.0, 3.33, {} ); // $ExpectType OutputArray<number>
}

// The compiler throws an error if the `generate` method is provided a first argument which is not a number...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];

	const r1 = new Random<number, number, number, number>( triangular, dtypes, dtypes[ 0 ] );
	r1.generate( '5', 2.0, 5.0, 3.33 ); // $ExpectError
	r1.generate( true, 2.0, 5.0, 3.33 ); // $ExpectError
	r1.generate( false, 2.0, 5.0, 3.33 ); // $ExpectError
	r1.generate( null, 2.0, 5.0, 3.33 ); // $ExpectError
	r1.generate( void 0, 2.0, 5.0, 3.33 ); // $ExpectError
	r1.generate( [], 2.0, 5.0, 3.33 ); // $ExpectError
	r1.generate( {}, 2.0, 5.0, 3.33 ); // $ExpectError
	r1.generate( ( x: number ): number => x, 2.0, 5.0, 3.33 ); // $ExpectError

	r1.generate( '5', 2.0, 5.0, 3.33, {} ); // $ExpectError
	r1.generate( true, 2.0, 5.0, 3.33, {} ); // $ExpectError
	r1.generate( false, 2.0, 5.0, 3.33, {} ); // $ExpectError
	r1.generate( null, 2.0, 5.0, 3.33, {} ); // $ExpectError
	r1.generate( void 0, 2.0, 5.0, 3.33, {} ); // $ExpectError
	r1.generate( [], 2.0, 5.0, 3.33, {} ); // $ExpectError
	r1.generate( {}, 2.0, 5.0, 3.33, {} ); // $ExpectError
	r1.generate( ( x: number ): number => x, 2.0, 5.0, 3.33, {} ); // $ExpectError
}

// The compiler throws an error if the `generate` method is provided a fifth argument which is not an object...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];

	const r1 = new Random<number, number, number, number>( triangular, dtypes, dtypes[ 0 ] );
	r1.generate( 10, 2.0, 5.0, 3.33, '5' ); // $ExpectError
	r1.generate( 10, 2.0, 5.0, 3.33, true ); // $ExpectError
	r1.generate( 10, 2.0, 5.0, 3.33, false ); // $ExpectError
	r1.generate( 10, 2.0, 5.0, 3.33, null ); // $ExpectError
	r1.generate( 10, 2.0, 5.0, 3.33, [] ); // $ExpectError
	r1.generate( 10, 2.0, 5.0, 3.33, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `generate` method is provided an invalid `dtype` option...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];

	const r1 = new Random<number, number, number, number>( triangular, dtypes, dtypes[ 0 ] );
	r1.generate( 10, 2.0, 5.0, 3.33, { 'dtype': '5' } ); // $ExpectError
	r1.generate( 10, 2.0, 5.0, 3.33, { 'dtype': 5 } ); // $ExpectError
	r1.generate( 10, 2.0, 5.0, 3.33, { 'dtype': true } ); // $ExpectError
	r1.generate( 10, 2.0, 5.0, 3.33, { 'dtype': false } ); // $ExpectError
	r1.generate( 10, 2.0, 5.0, 3.33, { 'dtype': null } ); // $ExpectError
	r1.generate( 10, 2.0, 5.0, 3.33, { 'dtype': [] } ); // $ExpectError
	r1.generate( 10, 2.0, 5.0, 3.33, { 'dtype': {} } ); // $ExpectError
	r1.generate( 10, 2.0, 5.0, 3.33, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `generate` method is provided an unsupported number of arguments...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];

	const r1 = new Random<number, number, number, number>( triangular, dtypes, dtypes[ 0 ] );
	r1.generate(); // $ExpectError
	r1.generate( 10 ); // $ExpectError
	r1.generate( 10, 2.0 ); // $ExpectError
	r1.generate( 10, 2.0, 5.0 ); // $ExpectError
	r1.generate( 10, 2.0, 5.0, 3.33, {}, {} ); // $ExpectError
}

// The function returns an instance having an `assign` method which returns an array...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const x = zeros( 10, dtypes[ 0 ] );

	const r1 = new Random<number, number, number, number>( triangular, dtypes, dtypes[ 0 ] );
	r1.assign( 2.0, 5.0, 3.33, x ); // $ExpectType OutputArray<number>

	const random = Random;
	const r2 = random<number, number, number, number>( triangular, dtypes, dtypes[ 0 ] );
	r2.assign( 2.0, 5.0, 3.33, x ); // $ExpectType OutputArray<number>
}

// The compiler throws an error if the `assign` method is provided a fourth argument which is not an array-like object...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];

	const r1 = new Random<number, number, number, number>( triangular, dtypes, dtypes[ 0 ] );
	r1.assign( 2.0, 5.0, 3.33, '5' ); // $ExpectError
	r1.assign( 2.0, 5.0, 3.33, 5 ); // $ExpectError
	r1.assign( 2.0, 5.0, 3.33, true ); // $ExpectError
	r1.assign( 2.0, 5.0, 3.33, false ); // $ExpectError
	r1.assign( 2.0, 5.0, 3.33, null ); // $ExpectError
	r1.assign( 2.0, 5.0, 3.33, void 0 ); // $ExpectError
	r1.assign( 2.0, 5.0, 3.33, {} ); // $ExpectError
	r1.assign( 2.0, 5.0, 3.33, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const x = zeros( 10, dtypes[ 0 ] );

	const r1 = new Random<number, number, number, number>( triangular, dtypes, dtypes[ 0 ] );
	r1.assign(); // $ExpectError
	r1.assign( 2.0 ); // $ExpectError
	r1.assign( 2.0, 5.0 ); // $ExpectError
	r1.assign( 2.0, 5.0, 3.33 ); // $ExpectError
	r1.assign( 2.0, 5.0, 3.33, x, {} ); // $ExpectError
}
