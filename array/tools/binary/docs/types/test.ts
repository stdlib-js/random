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
import arcsine = require( './../../../../../base/arcsine' );
import zeros = require( '@stdlib/array/zeros' );
import Random = require( './index' );


// TESTS //

// The function returns an instance for generating arrays of pseudorandom values...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];

	new Random<number, number, number>( arcsine, dtypes, dtypes[ 0 ] ); // $ExpectType RandomArray<number, number, number>

	const random = Random;
	random<number, number, number>( arcsine, dtypes, dtypes[ 0 ] ); // $ExpectType RandomArray<number, number, number>
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

	new Random<number, number, number>( arcsine, '5', dtypes[ 0 ] ); // $ExpectError
	new Random<number, number, number>( arcsine, 5, dtypes[ 0 ] ); // $ExpectError
	new Random<number, number, number>( arcsine, true, dtypes[ 0 ] ); // $ExpectError
	new Random<number, number, number>( arcsine, false, dtypes[ 0 ] ); // $ExpectError
	new Random<number, number, number>( arcsine, null, dtypes[ 0 ] ); // $ExpectError
	new Random<number, number, number>( arcsine, void 0, dtypes[ 0 ] ); // $ExpectError
	new Random<number, number, number>( arcsine, 'abc', dtypes[ 0 ] ); // $ExpectError
	new Random<number, number, number>( arcsine, {}, dtypes[ 0 ] ); // $ExpectError
	new Random<number, number, number>( arcsine, ( x: number ): number => x, dtypes[ 0 ] ); // $ExpectError

	const random = Random;
	random<number, number, number>( arcsine, '5', dtypes[ 0 ] ); // $ExpectError
	random<number, number, number>( arcsine, 5, dtypes[ 0 ] ); // $ExpectError
	random<number, number, number>( arcsine, true, dtypes[ 0 ] ); // $ExpectError
	random<number, number, number>( arcsine, false, dtypes[ 0 ] ); // $ExpectError
	random<number, number, number>( arcsine, null, dtypes[ 0 ] ); // $ExpectError
	random<number, number, number>( arcsine, void 0, dtypes[ 0 ] ); // $ExpectError
	random<number, number, number>( arcsine, 'abc', dtypes[ 0 ] ); // $ExpectError
	random<number, number, number>( arcsine, {}, dtypes[ 0 ] ); // $ExpectError
	random<number, number, number>( arcsine, ( x: number ): number => x, dtypes[ 0 ] ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a data type...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];

	new Random<number, number, number>( arcsine, dtypes, '5' ); // $ExpectError
	new Random<number, number, number>( arcsine, dtypes, 5 ); // $ExpectError
	new Random<number, number, number>( arcsine, dtypes, true ); // $ExpectError
	new Random<number, number, number>( arcsine, dtypes, false ); // $ExpectError
	new Random<number, number, number>( arcsine, dtypes, null ); // $ExpectError
	new Random<number, number, number>( arcsine, dtypes, void 0 ); // $ExpectError
	new Random<number, number, number>( arcsine, dtypes, 'abc' ); // $ExpectError
	new Random<number, number, number>( arcsine, dtypes, {} ); // $ExpectError
	new Random<number, number, number>( arcsine, dtypes, ( x: number ): number => x ); // $ExpectError

	const random = Random;
	random<number, number, number>( arcsine, dtypes, '5' ); // $ExpectError
	random<number, number, number>( arcsine, dtypes, 5 ); // $ExpectError
	random<number, number, number>( arcsine, dtypes, true ); // $ExpectError
	random<number, number, number>( arcsine, dtypes, false ); // $ExpectError
	random<number, number, number>( arcsine, dtypes, null ); // $ExpectError
	random<number, number, number>( arcsine, dtypes, void 0 ); // $ExpectError
	random<number, number, number>( arcsine, dtypes, 'abc' ); // $ExpectError
	random<number, number, number>( arcsine, dtypes, {} ); // $ExpectError
	random<number, number, number>( arcsine, dtypes, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];

	new Random(); // $ExpectError
	new Random<number, number, number>( arcsine ); // $ExpectError
	new Random<number, number, number>( arcsine, dtypes ); // $ExpectError
	new Random<number, number, number>( arcsine, dtypes, dtypes[ 0 ], {} ); // $ExpectError

	const random = Random;
	random(); // $ExpectError
	random<number, number, number>( arcsine ); // $ExpectError
	random<number, number, number>( arcsine, dtypes ); // $ExpectError
	random<number, number, number>( arcsine, dtypes, dtypes[ 0 ], {} ); // $ExpectError
}

// The function returns an instance having a `generate` method which returns an array...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];

	const r1 = new Random<number, number, number>( arcsine, dtypes, dtypes[ 0 ] );
	r1.generate( 10, 2.0, 5.0 ); // $ExpectType OutputArray<number>
	r1.generate( 10, 2.0, 5.0, {} ); // $ExpectType OutputArray<number>

	const random = Random;
	const r2 = random<number, number, number>( arcsine, dtypes, dtypes[ 0 ] );
	r2.generate( 10, 2.0, 5.0 ); // $ExpectType OutputArray<number>
	r2.generate( 10, 2.0, 5.0, {} ); // $ExpectType OutputArray<number>
}

// The compiler throws an error if the `generate` method is provided a first argument which is not a number...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];

	const r1 = new Random<number, number, number>( arcsine, dtypes, dtypes[ 0 ] );
	r1.generate( '5', 2.0, 5.0 ); // $ExpectError
	r1.generate( true, 2.0, 5.0 ); // $ExpectError
	r1.generate( false, 2.0, 5.0 ); // $ExpectError
	r1.generate( null, 2.0, 5.0 ); // $ExpectError
	r1.generate( void 0, 2.0, 5.0 ); // $ExpectError
	r1.generate( [], 2.0, 5.0 ); // $ExpectError
	r1.generate( {}, 2.0, 5.0 ); // $ExpectError
	r1.generate( ( x: number ): number => x, 2.0, 5.0 ); // $ExpectError

	r1.generate( '5', 2.0, 5.0, {} ); // $ExpectError
	r1.generate( true, 2.0, 5.0, {} ); // $ExpectError
	r1.generate( false, 2.0, 5.0, {} ); // $ExpectError
	r1.generate( null, 2.0, 5.0, {} ); // $ExpectError
	r1.generate( void 0, 2.0, 5.0, {} ); // $ExpectError
	r1.generate( [], 2.0, 5.0, {} ); // $ExpectError
	r1.generate( {}, 2.0, 5.0, {} ); // $ExpectError
	r1.generate( ( x: number ): number => x, 2.0, 5.0, {} ); // $ExpectError
}

// The compiler throws an error if the `generate` method is provided a fourth argument which is not an object...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];

	const r1 = new Random<number, number, number>( arcsine, dtypes, dtypes[ 0 ] );
	r1.generate( 10, 2.0, 5.0, '5' ); // $ExpectError
	r1.generate( 10, 2.0, 5.0, true ); // $ExpectError
	r1.generate( 10, 2.0, 5.0, false ); // $ExpectError
	r1.generate( 10, 2.0, 5.0, null ); // $ExpectError
	r1.generate( 10, 2.0, 5.0, [] ); // $ExpectError
	r1.generate( 10, 2.0, 5.0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `generate` method is provided an invalid `dtype` option...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];

	const r1 = new Random<number, number, number>( arcsine, dtypes, dtypes[ 0 ] );
	r1.generate( 10, 2.0, 5.0, { 'dtype': '5' } ); // $ExpectError
	r1.generate( 10, 2.0, 5.0, { 'dtype': 5 } ); // $ExpectError
	r1.generate( 10, 2.0, 5.0, { 'dtype': true } ); // $ExpectError
	r1.generate( 10, 2.0, 5.0, { 'dtype': false } ); // $ExpectError
	r1.generate( 10, 2.0, 5.0, { 'dtype': null } ); // $ExpectError
	r1.generate( 10, 2.0, 5.0, { 'dtype': [] } ); // $ExpectError
	r1.generate( 10, 2.0, 5.0, { 'dtype': {} } ); // $ExpectError
	r1.generate( 10, 2.0, 5.0, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `generate` method is provided an unsupported number of arguments...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];

	const r1 = new Random<number, number, number>( arcsine, dtypes, dtypes[ 0 ] );
	r1.generate(); // $ExpectError
	r1.generate( 10 ); // $ExpectError
	r1.generate( 10, 2.0 ); // $ExpectError
	r1.generate( 10, 2.0, 5.0, {}, {} ); // $ExpectError
}

// The function returns an instance having an `assign` method which returns an array...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const x = zeros( 10, dtypes[ 0 ] );

	const r1 = new Random<number, number, number>( arcsine, dtypes, dtypes[ 0 ] );
	r1.assign( 2.0, 5.0, x ); // $ExpectType OutputArray<number>

	const random = Random;
	const r2 = random<number, number, number>( arcsine, dtypes, dtypes[ 0 ] );
	r2.assign( 2.0, 5.0, x ); // $ExpectType OutputArray<number>
}

// The compiler throws an error if the `assign` method is provided a third argument which is not an array-like object...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];

	const r1 = new Random<number, number, number>( arcsine, dtypes, dtypes[ 0 ] );
	r1.assign( 2.0, 5.0, '5' ); // $ExpectError
	r1.assign( 2.0, 5.0, 5 ); // $ExpectError
	r1.assign( 2.0, 5.0, true ); // $ExpectError
	r1.assign( 2.0, 5.0, false ); // $ExpectError
	r1.assign( 2.0, 5.0, null ); // $ExpectError
	r1.assign( 2.0, 5.0, void 0 ); // $ExpectError
	r1.assign( 2.0, 5.0, {} ); // $ExpectError
	r1.assign( 2.0, 5.0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const x = zeros( 10, dtypes[ 0 ] );

	const r1 = new Random<number, number, number>( arcsine, dtypes, dtypes[ 0 ] );
	r1.assign(); // $ExpectError
	r1.assign( 2.0 ); // $ExpectError
	r1.assign( 2.0, 5.0 ); // $ExpectError
	r1.assign( 2.0, 5.0, x, {} ); // $ExpectError
}
