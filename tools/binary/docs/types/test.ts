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

/* eslint-disable @typescript-eslint/no-unused-expressions, space-in-parens */

/// <reference types="@stdlib/types"/>

import { DataType, OutputPolicy } from '@stdlib/types/ndarray';
import uniform = require( './../../../../base/uniform' );
import zeros = require( '@stdlib/ndarray/zeros' );
import Random = require( './index' );


// TESTS //

// The function returns an instance for generating arrays of pseudorandom values...
{
	const dt: Array<DataType> = [ 'float64', 'float32' ];
	const policies = {
		'output': 'same' as OutputPolicy
	};

	new Random<number, number, number>( uniform, [ dt, dt ], dt, policies ); // $ExpectType RandomArray<number, number, number>
	new Random<number, number, number>( uniform, [ dt, dt ], dt, policies, {} ); // $ExpectType RandomArray<number, number, number>

	const random = Random;
	random<number, number, number>( uniform, [ dt, dt ], dt, policies ); // $ExpectType RandomArray<number, number, number>
	random<number, number, number>( uniform, [ dt, dt ], dt, policies, {} ); // $ExpectType RandomArray<number, number, number>
}

// The compiler throws an error if the function is provided a first argument which is not a PRNG function...
{
	const dt: Array<DataType> = [ 'float64', 'float32' ];
	const policies = {
		'output': 'same' as OutputPolicy
	};

	new Random( '5', [ dt, dt ], dt, policies ); // $ExpectError
	new Random( 5, [ dt, dt ], dt, policies ); // $ExpectError
	new Random( true, [ dt, dt ], dt, policies ); // $ExpectError
	new Random( false, [ dt, dt ], dt, policies ); // $ExpectError
	new Random( null, [ dt, dt ], dt, policies ); // $ExpectError
	new Random( void 0, [ dt, dt ], dt, policies ); // $ExpectError
	new Random( 'abc', [ dt, dt ], dt, policies ); // $ExpectError
	new Random( {}, [ dt, dt ], dt, policies ); // $ExpectError
	new Random( ( x: number ): number => x, [ dt, dt ], dt, policies ); // $ExpectError

	new Random( '5', [ dt, dt ], dt, policies, {} ); // $ExpectError
	new Random( 5, [ dt, dt ], dt, policies, {} ); // $ExpectError
	new Random( true, [ dt, dt ], dt, policies, {} ); // $ExpectError
	new Random( false, [ dt, dt ], dt, policies, {} ); // $ExpectError
	new Random( null, [ dt, dt ], dt, policies, {} ); // $ExpectError
	new Random( void 0, [ dt, dt ], dt, policies, {} ); // $ExpectError
	new Random( 'abc', [ dt, dt ], dt, policies, {} ); // $ExpectError
	new Random( {}, [ dt, dt ], dt, policies, {} ); // $ExpectError
	new Random( ( x: number ): number => x, [ dt, dt ], dt, policies, {} ); // $ExpectError

	const random = Random;
	random( '5', [ dt, dt ], dt, policies ); // $ExpectError
	random( 5, [ dt, dt ], dt, policies ); // $ExpectError
	random( true, [ dt, dt ], dt, policies ); // $ExpectError
	random( false, [ dt, dt ], dt, policies ); // $ExpectError
	random( null, [ dt, dt ], dt, policies ); // $ExpectError
	random( void 0, [ dt, dt ], dt, policies ); // $ExpectError
	random( 'abc', [ dt, dt ], dt, policies ); // $ExpectError
	random( {}, [ dt, dt ], dt, policies ); // $ExpectError
	random( ( x: number ): number => x, [ dt, dt ], dt, policies ); // $ExpectError

	random( '5', [ dt, dt ], dt, policies, {} ); // $ExpectError
	random( 5, [ dt, dt ], dt, policies, {} ); // $ExpectError
	random( true, [ dt, dt ], dt, policies, {} ); // $ExpectError
	random( false, [ dt, dt ], dt, policies, {} ); // $ExpectError
	random( null, [ dt, dt ], dt, policies, {} ); // $ExpectError
	random( void 0, [ dt, dt ], dt, policies, {} ); // $ExpectError
	random( 'abc', [ dt, dt ], dt, policies, {} ); // $ExpectError
	random( {}, [ dt, dt ], dt, policies, {} ); // $ExpectError
	random( ( x: number ): number => x, [ dt, dt ], dt, policies, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a list containing lists of data types...
{
	const dt: Array<DataType> = [ 'float64', 'float32' ];
	const policies = {
		'output': 'same' as OutputPolicy
	};

	new Random<number, number, number>( uniform, '5', dt, policies ); // $ExpectError
	new Random<number, number, number>( uniform, 5, dt, policies ); // $ExpectError
	new Random<number, number, number>( uniform, true, dt, policies ); // $ExpectError
	new Random<number, number, number>( uniform, false, dt, policies ); // $ExpectError
	new Random<number, number, number>( uniform, null, dt, policies ); // $ExpectError
	new Random<number, number, number>( uniform, void 0, dt, policies ); // $ExpectError
	new Random<number, number, number>( uniform, 'abc', dt, policies ); // $ExpectError
	new Random<number, number, number>( uniform, {}, dt, policies ); // $ExpectError
	new Random<number, number, number>( uniform, ( x: number ): number => x, dt, policies ); // $ExpectError

	new Random<number, number, number>( uniform, '5', dt, policies, {} ); // $ExpectError
	new Random<number, number, number>( uniform, 5, dt, policies, {} ); // $ExpectError
	new Random<number, number, number>( uniform, true, dt, policies, {} ); // $ExpectError
	new Random<number, number, number>( uniform, false, dt, policies, {} ); // $ExpectError
	new Random<number, number, number>( uniform, null, dt, policies, {} ); // $ExpectError
	new Random<number, number, number>( uniform, void 0, dt, policies, {} ); // $ExpectError
	new Random<number, number, number>( uniform, 'abc', dt, policies, {} ); // $ExpectError
	new Random<number, number, number>( uniform, {}, dt, policies, {} ); // $ExpectError
	new Random<number, number, number>( uniform, ( x: number ): number => x, dt, policies, {} ); // $ExpectError

	const random = Random;
	random<number, number, number>( uniform, '5', dt, policies ); // $ExpectError
	random<number, number, number>( uniform, 5, dt, policies ); // $ExpectError
	random<number, number, number>( uniform, true, dt, policies ); // $ExpectError
	random<number, number, number>( uniform, false, dt, policies ); // $ExpectError
	random<number, number, number>( uniform, null, dt, policies ); // $ExpectError
	random<number, number, number>( uniform, void 0, dt, policies ); // $ExpectError
	random<number, number, number>( uniform, 'abc', dt, policies ); // $ExpectError
	random<number, number, number>( uniform, {}, dt, policies ); // $ExpectError
	random<number, number, number>( uniform, ( x: number ): number => x, dt, policies ); // $ExpectError

	random<number, number, number>( uniform, '5', dt, policies, {} ); // $ExpectError
	random<number, number, number>( uniform, 5, dt, policies, {} ); // $ExpectError
	random<number, number, number>( uniform, true, dt, policies, {} ); // $ExpectError
	random<number, number, number>( uniform, false, dt, policies, {} ); // $ExpectError
	random<number, number, number>( uniform, null, dt, policies, {} ); // $ExpectError
	random<number, number, number>( uniform, void 0, dt, policies, {} ); // $ExpectError
	random<number, number, number>( uniform, 'abc', dt, policies, {} ); // $ExpectError
	random<number, number, number>( uniform, {}, dt, policies, {} ); // $ExpectError
	random<number, number, number>( uniform, ( x: number ): number => x, dt, policies, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a list of data types...
{
	const dt: Array<DataType> = [ 'float64', 'float32' ];
	const policies = {
		'output': 'same' as OutputPolicy
	};

	new Random<number, number, number>( uniform, [ dt, dt ], '5', policies ); // $ExpectError
	new Random<number, number, number>( uniform, [ dt, dt ], 5, policies ); // $ExpectError
	new Random<number, number, number>( uniform, [ dt, dt ], true, policies ); // $ExpectError
	new Random<number, number, number>( uniform, [ dt, dt ], false, policies ); // $ExpectError
	new Random<number, number, number>( uniform, [ dt, dt ], null, policies ); // $ExpectError
	new Random<number, number, number>( uniform, [ dt, dt ], void 0, policies ); // $ExpectError
	new Random<number, number, number>( uniform, [ dt, dt ], 'abc', policies ); // $ExpectError
	new Random<number, number, number>( uniform, [ dt, dt ], {}, policies ); // $ExpectError
	new Random<number, number, number>( uniform, [ dt, dt ], ( x: number ): number => x, policies ); // $ExpectError

	new Random<number, number, number>( uniform, [ dt, dt ], '5', policies, {} ); // $ExpectError
	new Random<number, number, number>( uniform, [ dt, dt ], 5, policies, {} ); // $ExpectError
	new Random<number, number, number>( uniform, [ dt, dt ], true, policies, {} ); // $ExpectError
	new Random<number, number, number>( uniform, [ dt, dt ], false, policies, {} ); // $ExpectError
	new Random<number, number, number>( uniform, [ dt, dt ], null, policies, {} ); // $ExpectError
	new Random<number, number, number>( uniform, [ dt, dt ], void 0, policies, {} ); // $ExpectError
	new Random<number, number, number>( uniform, [ dt, dt ], 'abc', policies, {} ); // $ExpectError
	new Random<number, number, number>( uniform, [ dt, dt ], {}, policies, {} ); // $ExpectError
	new Random<number, number, number>( uniform, [ dt, dt ], ( x: number ): number => x, policies, {} ); // $ExpectError

	const random = Random;
	random<number, number, number>( uniform, [ dt, dt ], '5', policies ); // $ExpectError
	random<number, number, number>( uniform, [ dt, dt ], 5, policies ); // $ExpectError
	random<number, number, number>( uniform, [ dt, dt ], true, policies ); // $ExpectError
	random<number, number, number>( uniform, [ dt, dt ], false, policies ); // $ExpectError
	random<number, number, number>( uniform, [ dt, dt ], null, policies ); // $ExpectError
	random<number, number, number>( uniform, [ dt, dt ], void 0, policies ); // $ExpectError
	random<number, number, number>( uniform, [ dt, dt ], 'abc', policies ); // $ExpectError
	random<number, number, number>( uniform, [ dt, dt ], {}, policies ); // $ExpectError
	random<number, number, number>( uniform, [ dt, dt ], ( x: number ): number => x, policies ); // $ExpectError

	random<number, number, number>( uniform, [ dt, dt ], '5', policies, {} ); // $ExpectError
	random<number, number, number>( uniform, [ dt, dt ], 5, policies, {} ); // $ExpectError
	random<number, number, number>( uniform, [ dt, dt ], true, policies, {} ); // $ExpectError
	random<number, number, number>( uniform, [ dt, dt ], false, policies, {} ); // $ExpectError
	random<number, number, number>( uniform, [ dt, dt ], null, policies, {} ); // $ExpectError
	random<number, number, number>( uniform, [ dt, dt ], void 0, policies, {} ); // $ExpectError
	random<number, number, number>( uniform, [ dt, dt ], 'abc', policies, {} ); // $ExpectError
	random<number, number, number>( uniform, [ dt, dt ], {}, policies, {} ); // $ExpectError
	random<number, number, number>( uniform, [ dt, dt ], ( x: number ): number => x, policies, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a valid policy object...
{
	const dt: Array<DataType> = [ 'float64', 'float32' ];

	new Random<number, number, number>( uniform, [ dt, dt ], dt, '5' ); // $ExpectError
	new Random<number, number, number>( uniform, [ dt, dt ], dt, 5 ); // $ExpectError
	new Random<number, number, number>( uniform, [ dt, dt ], dt, true ); // $ExpectError
	new Random<number, number, number>( uniform, [ dt, dt ], dt, false ); // $ExpectError
	new Random<number, number, number>( uniform, [ dt, dt ], dt, null ); // $ExpectError
	new Random<number, number, number>( uniform, [ dt, dt ], dt, void 0 ); // $ExpectError
	new Random<number, number, number>( uniform, [ dt, dt ], dt, 'abc' ); // $ExpectError
	new Random<number, number, number>( uniform, [ dt, dt ], dt, {} ); // $ExpectError
	new Random<number, number, number>( uniform, [ dt, dt ], dt, ( x: number ): number => x ); // $ExpectError

	new Random<number, number, number>( uniform, [ dt, dt ], dt, '5', {} ); // $ExpectError
	new Random<number, number, number>( uniform, [ dt, dt ], dt, 5, {} ); // $ExpectError
	new Random<number, number, number>( uniform, [ dt, dt ], dt, true, {} ); // $ExpectError
	new Random<number, number, number>( uniform, [ dt, dt ], dt, false, {} ); // $ExpectError
	new Random<number, number, number>( uniform, [ dt, dt ], dt, null, {} ); // $ExpectError
	new Random<number, number, number>( uniform, [ dt, dt ], dt, void 0, {} ); // $ExpectError
	new Random<number, number, number>( uniform, [ dt, dt ], dt, 'abc', {} ); // $ExpectError
	new Random<number, number, number>( uniform, [ dt, dt ], dt, {}, {} ); // $ExpectError
	new Random<number, number, number>( uniform, [ dt, dt ], dt, ( x: number ): number => x, {} ); // $ExpectError

	const random = Random;
	random<number, number, number>( uniform, [ dt, dt ], dt, '5' ); // $ExpectError
	random<number, number, number>( uniform, [ dt, dt ], dt, 5 ); // $ExpectError
	random<number, number, number>( uniform, [ dt, dt ], dt, true ); // $ExpectError
	random<number, number, number>( uniform, [ dt, dt ], dt, false ); // $ExpectError
	random<number, number, number>( uniform, [ dt, dt ], dt, null ); // $ExpectError
	random<number, number, number>( uniform, [ dt, dt ], dt, void 0 ); // $ExpectError
	random<number, number, number>( uniform, [ dt, dt ], dt, 'abc' ); // $ExpectError
	random<number, number, number>( uniform, [ dt, dt ], dt, {} ); // $ExpectError
	random<number, number, number>( uniform, [ dt, dt ], dt, ( x: number ): number => x ); // $ExpectError

	random<number, number, number>( uniform, [ dt, dt ], dt, '5', {} ); // $ExpectError
	random<number, number, number>( uniform, [ dt, dt ], dt, 5, {} ); // $ExpectError
	random<number, number, number>( uniform, [ dt, dt ], dt, true, {} ); // $ExpectError
	random<number, number, number>( uniform, [ dt, dt ], dt, false, {} ); // $ExpectError
	random<number, number, number>( uniform, [ dt, dt ], dt, null, {} ); // $ExpectError
	random<number, number, number>( uniform, [ dt, dt ], dt, void 0, {} ); // $ExpectError
	random<number, number, number>( uniform, [ dt, dt ], dt, 'abc', {} ); // $ExpectError
	random<number, number, number>( uniform, [ dt, dt ], dt, {}, {} ); // $ExpectError
	random<number, number, number>( uniform, [ dt, dt ], dt, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const dt: Array<DataType> = [ 'float64', 'float32' ];
	const policies = {
		'output': 'same' as OutputPolicy
	};

	new Random(); // $ExpectError
	new Random<number, number, number>( uniform ); // $ExpectError
	new Random<number, number, number>( uniform, [ dt, dt ] ); // $ExpectError
	new Random<number, number, number>( uniform, [ dt, dt ], dt ); // $ExpectError
	new Random<number, number, number>( uniform, [ dt, dt ], dt, policies, {}, {} ); // $ExpectError

	const random = Random;
	random(); // $ExpectError
	random<number, number, number>( uniform ); // $ExpectError
	random<number, number, number>( uniform, [ dt, dt ] ); // $ExpectError
	random<number, number, number>( uniform, [ dt, dt ], dt ); // $ExpectError
	random<number, number, number>( uniform, [ dt, dt ], dt, policies, {}, {} ); // $ExpectError
}

// The function returns an instance having a `generate` method which returns an ndarray...
{
	const dt: Array<DataType> = [ 'float64', 'float32' ];
	const policies = {
		'output': 'same' as OutputPolicy
	};

	const r1 = new Random<number, number, number>( uniform, [ dt, dt ], dt, policies );
	r1.generate( [ 2, 2 ], 0.0, 1.0 ); // $ExpectType typedndarray<number>
	r1.generate( [ 2, 2 ], 0.0, 1.0, {} ); // $ExpectType typedndarray<number>

	const random = Random;
	const r2 = random<number, number, number>( uniform, [ dt, dt ], dt, policies );
	r2.generate( [ 2, 2 ], 0.0, 1.0 ); // $ExpectType typedndarray<number>
	r2.generate( [ 2, 2 ], 0.0, 1.0, {} ); // $ExpectType typedndarray<number>
}

// The compiler throws an error if the `generate` method is provided a first argument which is not a valid shape...
{
	const dt: Array<DataType> = [ 'float64', 'float32' ];
	const policies = {
		'output': 'same' as OutputPolicy
	};

	const r1 = new Random<number, number, number>( uniform, [ dt, dt ], dt, policies );
	r1.generate( '5', 0.0, 1.0 ); // $ExpectError
	r1.generate( 5, 0.0, 1.0 ); // $ExpectError
	r1.generate( true, 0.0, 1.0 ); // $ExpectError
	r1.generate( false, 0.0, 1.0 ); // $ExpectError
	r1.generate( null, 0.0, 1.0 ); // $ExpectError
	r1.generate( void 0, 0.0, 1.0 ); // $ExpectError
	r1.generate( [ '5' ], 0.0, 1.0 ); // $ExpectError
	r1.generate( {}, 0.0, 1.0 ); // $ExpectError
	r1.generate( ( x: number ): number => x, 0.0, 1.0 ); // $ExpectError

	r1.generate( '5', 0.0, 1.0, {} ); // $ExpectError
	r1.generate( 5, 0.0, 1.0, {} ); // $ExpectError
	r1.generate( true, 0.0, 1.0, {} ); // $ExpectError
	r1.generate( false, 0.0, 1.0, {} ); // $ExpectError
	r1.generate( null, 0.0, 1.0, {} ); // $ExpectError
	r1.generate( void 0, 0.0, 1.0, {} ); // $ExpectError
	r1.generate( [ '5' ], 0.0, 1.0, {} ); // $ExpectError
	r1.generate( {}, 0.0, 1.0, {} ); // $ExpectError
	r1.generate( ( x: number ): number => x, 0.0, 1.0, {} ); // $ExpectError
}

// The compiler throws an error if the `generate` method is provided a fourth argument which is not an object...
{
	const dt: Array<DataType> = [ 'float64', 'float32' ];
	const policies = {
		'output': 'same' as OutputPolicy
	};

	const r1 = new Random<number, number, number>( uniform, [ dt, dt ], dt, policies );
	r1.generate( [ 2,2  ], 0.0, 1.0, '5' ); // $ExpectError
	r1.generate( [ 2,2  ], 0.0, 1.0, true ); // $ExpectError
	r1.generate( [ 2,2  ], 0.0, 1.0, false ); // $ExpectError
	r1.generate( [ 2,2  ], 0.0, 1.0, null ); // $ExpectError
	r1.generate( [ 2,2  ], 0.0, 1.0, [] ); // $ExpectError
	r1.generate( [ 2,2  ], 0.0, 1.0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `generate` method is provided an invalid `dtype` option...
{
	const dt: Array<DataType> = [ 'float64', 'float32' ];
	const policies = {
		'output': 'same' as OutputPolicy
	};

	const r1 = new Random<number, number, number>( uniform, [ dt, dt ], dt, policies );
	r1.generate( [ 2,2  ], 0.0, 1.0, { 'dtype': '5' } ); // $ExpectError
	r1.generate( [ 2,2  ], 0.0, 1.0, { 'dtype': 5 } ); // $ExpectError
	r1.generate( [ 2,2  ], 0.0, 1.0, { 'dtype': true } ); // $ExpectError
	r1.generate( [ 2,2  ], 0.0, 1.0, { 'dtype': false } ); // $ExpectError
	r1.generate( [ 2,2  ], 0.0, 1.0, { 'dtype': null } ); // $ExpectError
	r1.generate( [ 2,2  ], 0.0, 1.0, { 'dtype': [] } ); // $ExpectError
	r1.generate( [ 2,2  ], 0.0, 1.0, { 'dtype': {} } ); // $ExpectError
	r1.generate( [ 2,2  ], 0.0, 1.0, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `generate` method is provided an unsupported number of arguments...
{
	const dt: Array<DataType> = [ 'float64', 'float32' ];
	const policies = {
		'output': 'same' as OutputPolicy
	};

	const r1 = new Random<number, number, number>( uniform, [ dt, dt ], dt, policies );
	r1.generate(); // $ExpectError
	r1.generate( [ 2, 2 ] ); // $ExpectError
	r1.generate( [ 2, 2 ], 0.0 ); // $ExpectError
	r1.generate( [ 2, 2 ], 0.0, 1.0, {}, {} ); // $ExpectError
}

// The function returns an instance having an `assign` method which returns an ndarray...
{
	const dt: Array<DataType> = [ 'float64', 'float32' ];
	const policies = {
		'output': 'same' as OutputPolicy
	};
	const x = zeros( [ 5, 5 ], {
		'dtype': 'float64'
	});

	const r1 = new Random<number, number, number>( uniform, [ dt, dt ], dt, policies );
	r1.assign( 0.0, 1.0, x ); // $ExpectType typedndarray<number>

	const random = Random;
	const r2 = random<number, number, number>( uniform, [ dt, dt ], dt, policies );
	r2.assign( 0.0, 1.0, x ); // $ExpectType typedndarray<number>
}

// The compiler throws an error if the `assign` method is provided a third argument which is not an ndarray...
{
	const dt: Array<DataType> = [ 'float64', 'float32' ];
	const policies = {
		'output': 'same' as OutputPolicy
	};

	const r1 = new Random<number, number, number>( uniform, [ dt, dt ], dt, policies );
	r1.assign( 0.0, 1.0, '5' ); // $ExpectError
	r1.assign( 0.0, 1.0, 5 ); // $ExpectError
	r1.assign( 0.0, 1.0, true ); // $ExpectError
	r1.assign( 0.0, 1.0, false ); // $ExpectError
	r1.assign( 0.0, 1.0, null ); // $ExpectError
	r1.assign( 0.0, 1.0, void 0 ); // $ExpectError
	r1.assign( 0.0, 1.0, {} ); // $ExpectError
	r1.assign( 0.0, 1.0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const dt: Array<DataType> = [ 'float64', 'float32' ];
	const policies = {
		'output': 'same' as OutputPolicy
	};
	const x = zeros( [ 5, 5 ], {
		'dtype': 'float64'
	});

	const r1 = new Random<number, number, number>( uniform, [ dt, dt ], dt, policies );
	r1.assign(); // $ExpectError
	r1.assign( 0.0 ); // $ExpectError
	r1.assign( 0.0, 1.0 ); // $ExpectError
	r1.assign( 0.0, 1.0, x, {} ); // $ExpectError
}
