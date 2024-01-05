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

/* eslint-disable @typescript-eslint/no-unused-expressions */

/// <reference types="@stdlib/types"/>

import { DataType } from '@stdlib/types/array';
import exponential = require( './../../../../../base/exponential' );
import zeros = require( '@stdlib/array/zeros' );
import Random = require( './index' );


// TESTS //

// The function returns an instance for generating arrays of pseudorandom values...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];

	new Random<number>( exponential.factory( 2.0 ), dtypes, dtypes[ 0 ] ); // $ExpectType RandomArray<number>

	const random = Random;
	random<number>( exponential.factory( 2.0 ), dtypes, dtypes[ 0 ] ); // $ExpectType RandomArray<number>
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

	new Random( exponential.factory( 2.0 ), '5', dtypes[ 0 ] ); // $ExpectError
	new Random( exponential.factory( 2.0 ), 5, dtypes[ 0 ] ); // $ExpectError
	new Random( exponential.factory( 2.0 ), true, dtypes[ 0 ] ); // $ExpectError
	new Random( exponential.factory( 2.0 ), false, dtypes[ 0 ] ); // $ExpectError
	new Random( exponential.factory( 2.0 ), null, dtypes[ 0 ] ); // $ExpectError
	new Random( exponential.factory( 2.0 ), void 0, dtypes[ 0 ] ); // $ExpectError
	new Random( exponential.factory( 2.0 ), 'abc', dtypes[ 0 ] ); // $ExpectError
	new Random( exponential.factory( 2.0 ), {}, dtypes[ 0 ] ); // $ExpectError
	new Random( exponential.factory( 2.0 ), ( x: number ): number => x, dtypes[ 0 ] ); // $ExpectError

	const random = Random;
	random( exponential.factory( 2.0 ), '5', dtypes[ 0 ] ); // $ExpectError
	random( exponential.factory( 2.0 ), 5, dtypes[ 0 ] ); // $ExpectError
	random( exponential.factory( 2.0 ), true, dtypes[ 0 ] ); // $ExpectError
	random( exponential.factory( 2.0 ), false, dtypes[ 0 ] ); // $ExpectError
	random( exponential.factory( 2.0 ), null, dtypes[ 0 ] ); // $ExpectError
	random( exponential.factory( 2.0 ), void 0, dtypes[ 0 ] ); // $ExpectError
	random( exponential.factory( 2.0 ), 'abc', dtypes[ 0 ] ); // $ExpectError
	random( exponential.factory( 2.0 ), {}, dtypes[ 0 ] ); // $ExpectError
	random( exponential.factory( 2.0 ), ( x: number ): number => x, dtypes[ 0 ] ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a data type...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];

	new Random( exponential.factory( 2.0 ), dtypes, '5' ); // $ExpectError
	new Random( exponential.factory( 2.0 ), dtypes, 5 ); // $ExpectError
	new Random( exponential.factory( 2.0 ), dtypes, true ); // $ExpectError
	new Random( exponential.factory( 2.0 ), dtypes, false ); // $ExpectError
	new Random( exponential.factory( 2.0 ), dtypes, null ); // $ExpectError
	new Random( exponential.factory( 2.0 ), dtypes, void 0 ); // $ExpectError
	new Random( exponential.factory( 2.0 ), dtypes, 'abc' ); // $ExpectError
	new Random( exponential.factory( 2.0 ), dtypes, {} ); // $ExpectError
	new Random( exponential.factory( 2.0 ), dtypes, ( x: number ): number => x ); // $ExpectError

	const random = Random;
	random( exponential.factory( 2.0 ), dtypes, '5' ); // $ExpectError
	random( exponential.factory( 2.0 ), dtypes, 5 ); // $ExpectError
	random( exponential.factory( 2.0 ), dtypes, true ); // $ExpectError
	random( exponential.factory( 2.0 ), dtypes, false ); // $ExpectError
	random( exponential.factory( 2.0 ), dtypes, null ); // $ExpectError
	random( exponential.factory( 2.0 ), dtypes, void 0 ); // $ExpectError
	random( exponential.factory( 2.0 ), dtypes, 'abc' ); // $ExpectError
	random( exponential.factory( 2.0 ), dtypes, {} ); // $ExpectError
	random( exponential.factory( 2.0 ), dtypes, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];

	new Random(); // $ExpectError
	new Random( exponential.factory( 2.0 ) ); // $ExpectError
	new Random( exponential.factory( 2.0 ), dtypes ); // $ExpectError
	new Random( exponential.factory( 2.0 ), dtypes, dtypes[ 0 ], {} ); // $ExpectError

	const random = Random;
	random(); // $ExpectError
	random( exponential.factory( 2.0 ) ); // $ExpectError
	random( exponential.factory( 2.0 ), dtypes ); // $ExpectError
	random( exponential.factory( 2.0 ), dtypes, dtypes[ 0 ], {} ); // $ExpectError
}

// The function returns an instance having a `generate` method which returns an array...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];

	const r1 = new Random<number>( exponential.factory( 2.0 ), dtypes, dtypes[ 0 ] );
	r1.generate( 10 ); // $ExpectType OutputArray<number>
	r1.generate( 10, {} ); // $ExpectType OutputArray<number>

	const random = Random;
	const r2 = random<number>( exponential.factory( 2.0 ), dtypes, dtypes[ 0 ] );
	r2.generate( 10 ); // $ExpectType OutputArray<number>
	r2.generate( 10, {} ); // $ExpectType OutputArray<number>
}

// The compiler throws an error if the `generate` method is provided a first argument which is not a number...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];

	const r1 = new Random<number>( exponential.factory( 2.0 ), dtypes, dtypes[ 0 ] );
	r1.generate( '5' ); // $ExpectError
	r1.generate( true ); // $ExpectError
	r1.generate( false ); // $ExpectError
	r1.generate( null ); // $ExpectError
	r1.generate( void 0 ); // $ExpectError
	r1.generate( [] ); // $ExpectError
	r1.generate( {} ); // $ExpectError
	r1.generate( ( x: number ): number => x ); // $ExpectError

	r1.generate( '5', {} ); // $ExpectError
	r1.generate( true, {} ); // $ExpectError
	r1.generate( false, {} ); // $ExpectError
	r1.generate( null, {} ); // $ExpectError
	r1.generate( void 0, {} ); // $ExpectError
	r1.generate( [], {} ); // $ExpectError
	r1.generate( {}, {} ); // $ExpectError
	r1.generate( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `generate` method is provided a second argument which is not an object...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];

	const r1 = new Random<number>( exponential.factory( 2.0 ), dtypes, dtypes[ 0 ] );
	r1.generate( 10, '5' ); // $ExpectError
	r1.generate( 10, true ); // $ExpectError
	r1.generate( 10, false ); // $ExpectError
	r1.generate( 10, null ); // $ExpectError
	r1.generate( 10, [] ); // $ExpectError
	r1.generate( 10, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `generate` method is provided an invalid `dtype` option...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];

	const r1 = new Random<number>( exponential.factory( 2.0 ), dtypes, dtypes[ 0 ] );
	r1.generate( 10, { 'dtype': '5' } ); // $ExpectError
	r1.generate( 10, { 'dtype': 5 } ); // $ExpectError
	r1.generate( 10, { 'dtype': true } ); // $ExpectError
	r1.generate( 10, { 'dtype': false } ); // $ExpectError
	r1.generate( 10, { 'dtype': null } ); // $ExpectError
	r1.generate( 10, { 'dtype': [] } ); // $ExpectError
	r1.generate( 10, { 'dtype': {} } ); // $ExpectError
	r1.generate( 10, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `generate` method is provided an unsupported number of arguments...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];

	const r1 = new Random<number>( exponential.factory( 2.0 ), dtypes, dtypes[ 0 ] );
	r1.generate(); // $ExpectError
	r1.generate( 10, {}, {} ); // $ExpectError
}

// The function returns an instance having an `assign` method which returns an array...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const x = zeros( 10, dtypes[ 0 ] );

	const r1 = new Random<number>( exponential.factory( 2.0 ), dtypes, dtypes[ 0 ] );
	r1.assign( x ); // $ExpectType OutputArray<number>

	const random = Random;
	const r2 = random<number>( exponential.factory( 2.0 ), dtypes, dtypes[ 0 ] );
	r2.assign( x ); // $ExpectType OutputArray<number>
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an array-like object...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];

	const r1 = new Random<number>( exponential.factory( 2.0 ), dtypes, dtypes[ 0 ] );
	r1.assign( '5' ); // $ExpectError
	r1.assign( 5 ); // $ExpectError
	r1.assign( true ); // $ExpectError
	r1.assign( false ); // $ExpectError
	r1.assign( null ); // $ExpectError
	r1.assign( void 0 ); // $ExpectError
	r1.assign( {} ); // $ExpectError
	r1.assign( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const x = zeros( 10, dtypes[ 0 ] );

	const r1 = new Random<number>( exponential.factory( 2.0 ), dtypes, dtypes[ 0 ] );
	r1.assign(); // $ExpectError
	r1.assign( x, {} ); // $ExpectError
}
