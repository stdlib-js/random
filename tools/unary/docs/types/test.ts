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
import exponential = require( './../../../../base/exponential' );
import zeros = require( '@stdlib/ndarray/zeros' );
import Random = require( './index' );


// TESTS //

// The function returns an instance for generating arrays of pseudorandom values...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const policies = {
		'output': 'same' as OutputPolicy
	};

	new Random<number, number>( exponential, dtypes, dtypes, policies ); // $ExpectType RandomArray<number, number>
	new Random<number, number>( exponential, dtypes, dtypes, policies, {} ); // $ExpectType RandomArray<number, number>

	const random = Random;
	random<number, number>( exponential, dtypes, dtypes, policies ); // $ExpectType RandomArray<number, number>
	random<number, number>( exponential, dtypes, dtypes, policies, {} ); // $ExpectType RandomArray<number, number>
}

// The compiler throws an error if the function is provided a first argument which is not a PRNG function...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const policies = {
		'output': 'same' as OutputPolicy
	};

	new Random( '5', dtypes, dtypes, policies ); // $ExpectError
	new Random( 5, dtypes, dtypes, policies ); // $ExpectError
	new Random( true, dtypes, dtypes, policies ); // $ExpectError
	new Random( false, dtypes, dtypes, policies ); // $ExpectError
	new Random( null, dtypes, dtypes, policies ); // $ExpectError
	new Random( void 0, dtypes, dtypes, policies ); // $ExpectError
	new Random( 'abc', dtypes, dtypes, policies ); // $ExpectError
	new Random( {}, dtypes, dtypes, policies ); // $ExpectError
	new Random( ( x: number ): number => x, dtypes, dtypes, policies ); // $ExpectError

	new Random( '5', dtypes, dtypes, policies, {} ); // $ExpectError
	new Random( 5, dtypes, dtypes, policies, {} ); // $ExpectError
	new Random( true, dtypes, dtypes, policies, {} ); // $ExpectError
	new Random( false, dtypes, dtypes, policies, {} ); // $ExpectError
	new Random( null, dtypes, dtypes, policies, {} ); // $ExpectError
	new Random( void 0, dtypes, dtypes, policies, {} ); // $ExpectError
	new Random( 'abc', dtypes, dtypes, policies, {} ); // $ExpectError
	new Random( {}, dtypes, dtypes, policies, {} ); // $ExpectError
	new Random( ( x: number ): number => x, dtypes, dtypes, policies, {} ); // $ExpectError

	const random = Random;
	random( '5', dtypes, dtypes, policies ); // $ExpectError
	random( 5, dtypes, dtypes, policies ); // $ExpectError
	random( true, dtypes, dtypes, policies ); // $ExpectError
	random( false, dtypes, dtypes, policies ); // $ExpectError
	random( null, dtypes, dtypes, policies ); // $ExpectError
	random( void 0, dtypes, dtypes, policies ); // $ExpectError
	random( 'abc', dtypes, dtypes, policies ); // $ExpectError
	random( {}, dtypes, dtypes, policies ); // $ExpectError
	random( ( x: number ): number => x, dtypes, dtypes, policies ); // $ExpectError

	random( '5', dtypes, dtypes, policies, {} ); // $ExpectError
	random( 5, dtypes, dtypes, policies, {} ); // $ExpectError
	random( true, dtypes, dtypes, policies, {} ); // $ExpectError
	random( false, dtypes, dtypes, policies, {} ); // $ExpectError
	random( null, dtypes, dtypes, policies, {} ); // $ExpectError
	random( void 0, dtypes, dtypes, policies, {} ); // $ExpectError
	random( 'abc', dtypes, dtypes, policies, {} ); // $ExpectError
	random( {}, dtypes, dtypes, policies, {} ); // $ExpectError
	random( ( x: number ): number => x, dtypes, dtypes, policies, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a list of data types...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const policies = {
		'output': 'same' as OutputPolicy
	};

	new Random<number, number>( exponential, '5', dtypes, policies ); // $ExpectError
	new Random<number, number>( exponential, 5, dtypes, policies ); // $ExpectError
	new Random<number, number>( exponential, true, dtypes, policies ); // $ExpectError
	new Random<number, number>( exponential, false, dtypes, policies ); // $ExpectError
	new Random<number, number>( exponential, null, dtypes, policies ); // $ExpectError
	new Random<number, number>( exponential, void 0, dtypes, policies ); // $ExpectError
	new Random<number, number>( exponential, 'abc', dtypes, policies ); // $ExpectError
	new Random<number, number>( exponential, {}, dtypes, policies ); // $ExpectError
	new Random<number, number>( exponential, ( x: number ): number => x, dtypes, policies ); // $ExpectError

	new Random<number, number>( exponential, '5', dtypes, policies, {} ); // $ExpectError
	new Random<number, number>( exponential, 5, dtypes, policies, {} ); // $ExpectError
	new Random<number, number>( exponential, true, dtypes, policies, {} ); // $ExpectError
	new Random<number, number>( exponential, false, dtypes, policies, {} ); // $ExpectError
	new Random<number, number>( exponential, null, dtypes, policies, {} ); // $ExpectError
	new Random<number, number>( exponential, void 0, dtypes, policies, {} ); // $ExpectError
	new Random<number, number>( exponential, 'abc', dtypes, policies, {} ); // $ExpectError
	new Random<number, number>( exponential, {}, dtypes, policies, {} ); // $ExpectError
	new Random<number, number>( exponential, ( x: number ): number => x, dtypes, policies, {} ); // $ExpectError

	const random = Random;
	random<number, number>( exponential, '5', dtypes, policies ); // $ExpectError
	random<number, number>( exponential, 5, dtypes, policies ); // $ExpectError
	random<number, number>( exponential, true, dtypes, policies ); // $ExpectError
	random<number, number>( exponential, false, dtypes, policies ); // $ExpectError
	random<number, number>( exponential, null, dtypes, policies ); // $ExpectError
	random<number, number>( exponential, void 0, dtypes, policies ); // $ExpectError
	random<number, number>( exponential, 'abc', dtypes, policies ); // $ExpectError
	random<number, number>( exponential, {}, dtypes, policies ); // $ExpectError
	random<number, number>( exponential, ( x: number ): number => x, dtypes, policies ); // $ExpectError

	random<number, number>( exponential, '5', dtypes, policies, {} ); // $ExpectError
	random<number, number>( exponential, 5, dtypes, policies, {} ); // $ExpectError
	random<number, number>( exponential, true, dtypes, policies, {} ); // $ExpectError
	random<number, number>( exponential, false, dtypes, policies, {} ); // $ExpectError
	random<number, number>( exponential, null, dtypes, policies, {} ); // $ExpectError
	random<number, number>( exponential, void 0, dtypes, policies, {} ); // $ExpectError
	random<number, number>( exponential, 'abc', dtypes, policies, {} ); // $ExpectError
	random<number, number>( exponential, {}, dtypes, policies, {} ); // $ExpectError
	random<number, number>( exponential, ( x: number ): number => x, dtypes, policies, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a data type...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const policies = {
		'output': 'same' as OutputPolicy
	};

	new Random<number, number>( exponential, dtypes, '5', policies ); // $ExpectError
	new Random<number, number>( exponential, dtypes, 5, policies ); // $ExpectError
	new Random<number, number>( exponential, dtypes, true, policies ); // $ExpectError
	new Random<number, number>( exponential, dtypes, false, policies ); // $ExpectError
	new Random<number, number>( exponential, dtypes, null, policies ); // $ExpectError
	new Random<number, number>( exponential, dtypes, void 0, policies ); // $ExpectError
	new Random<number, number>( exponential, dtypes, 'abc', policies ); // $ExpectError
	new Random<number, number>( exponential, dtypes, {}, policies ); // $ExpectError
	new Random<number, number>( exponential, dtypes, ( x: number ): number => x, policies ); // $ExpectError

	new Random<number, number>( exponential, dtypes, '5', policies, {} ); // $ExpectError
	new Random<number, number>( exponential, dtypes, 5, policies, {} ); // $ExpectError
	new Random<number, number>( exponential, dtypes, true, policies, {} ); // $ExpectError
	new Random<number, number>( exponential, dtypes, false, policies, {} ); // $ExpectError
	new Random<number, number>( exponential, dtypes, null, policies, {} ); // $ExpectError
	new Random<number, number>( exponential, dtypes, void 0, policies, {} ); // $ExpectError
	new Random<number, number>( exponential, dtypes, 'abc', policies, {} ); // $ExpectError
	new Random<number, number>( exponential, dtypes, {}, policies, {} ); // $ExpectError
	new Random<number, number>( exponential, dtypes, ( x: number ): number => x, policies, {} ); // $ExpectError

	const random = Random;
	random<number, number>( exponential, dtypes, '5', policies ); // $ExpectError
	random<number, number>( exponential, dtypes, 5, policies ); // $ExpectError
	random<number, number>( exponential, dtypes, true, policies ); // $ExpectError
	random<number, number>( exponential, dtypes, false, policies ); // $ExpectError
	random<number, number>( exponential, dtypes, null, policies ); // $ExpectError
	random<number, number>( exponential, dtypes, void 0, policies ); // $ExpectError
	random<number, number>( exponential, dtypes, 'abc', policies ); // $ExpectError
	random<number, number>( exponential, dtypes, {}, policies ); // $ExpectError
	random<number, number>( exponential, dtypes, ( x: number ): number => x, policies ); // $ExpectError

	random<number, number>( exponential, dtypes, '5', policies, {} ); // $ExpectError
	random<number, number>( exponential, dtypes, 5, policies, {} ); // $ExpectError
	random<number, number>( exponential, dtypes, true, policies, {} ); // $ExpectError
	random<number, number>( exponential, dtypes, false, policies, {} ); // $ExpectError
	random<number, number>( exponential, dtypes, null, policies, {} ); // $ExpectError
	random<number, number>( exponential, dtypes, void 0, policies, {} ); // $ExpectError
	random<number, number>( exponential, dtypes, 'abc', policies, {} ); // $ExpectError
	random<number, number>( exponential, dtypes, {}, policies, {} ); // $ExpectError
	random<number, number>( exponential, dtypes, ( x: number ): number => x, policies, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a valid policy object...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];

	new Random<number, number>( exponential, dtypes, dtypes, '5' ); // $ExpectError
	new Random<number, number>( exponential, dtypes, dtypes, 5 ); // $ExpectError
	new Random<number, number>( exponential, dtypes, dtypes, true ); // $ExpectError
	new Random<number, number>( exponential, dtypes, dtypes, false ); // $ExpectError
	new Random<number, number>( exponential, dtypes, dtypes, null ); // $ExpectError
	new Random<number, number>( exponential, dtypes, dtypes, void 0 ); // $ExpectError
	new Random<number, number>( exponential, dtypes, dtypes, 'abc' ); // $ExpectError
	new Random<number, number>( exponential, dtypes, dtypes, {} ); // $ExpectError
	new Random<number, number>( exponential, dtypes, dtypes, ( x: number ): number => x ); // $ExpectError

	new Random<number, number>( exponential, dtypes, dtypes, '5', {} ); // $ExpectError
	new Random<number, number>( exponential, dtypes, dtypes, 5, {} ); // $ExpectError
	new Random<number, number>( exponential, dtypes, dtypes, true, {} ); // $ExpectError
	new Random<number, number>( exponential, dtypes, dtypes, false, {} ); // $ExpectError
	new Random<number, number>( exponential, dtypes, dtypes, null, {} ); // $ExpectError
	new Random<number, number>( exponential, dtypes, dtypes, void 0, {} ); // $ExpectError
	new Random<number, number>( exponential, dtypes, dtypes, 'abc', {} ); // $ExpectError
	new Random<number, number>( exponential, dtypes, dtypes, {}, {} ); // $ExpectError
	new Random<number, number>( exponential, dtypes, dtypes, ( x: number ): number => x, {} ); // $ExpectError

	const random = Random;
	random<number, number>( exponential, dtypes, dtypes, '5' ); // $ExpectError
	random<number, number>( exponential, dtypes, dtypes, 5 ); // $ExpectError
	random<number, number>( exponential, dtypes, dtypes, true ); // $ExpectError
	random<number, number>( exponential, dtypes, dtypes, false ); // $ExpectError
	random<number, number>( exponential, dtypes, dtypes, null ); // $ExpectError
	random<number, number>( exponential, dtypes, dtypes, void 0 ); // $ExpectError
	random<number, number>( exponential, dtypes, dtypes, 'abc' ); // $ExpectError
	random<number, number>( exponential, dtypes, dtypes, {} ); // $ExpectError
	random<number, number>( exponential, dtypes, dtypes, ( x: number ): number => x ); // $ExpectError

	random<number, number>( exponential, dtypes, dtypes, '5', {} ); // $ExpectError
	random<number, number>( exponential, dtypes, dtypes, 5, {} ); // $ExpectError
	random<number, number>( exponential, dtypes, dtypes, true, {} ); // $ExpectError
	random<number, number>( exponential, dtypes, dtypes, false, {} ); // $ExpectError
	random<number, number>( exponential, dtypes, dtypes, null, {} ); // $ExpectError
	random<number, number>( exponential, dtypes, dtypes, void 0, {} ); // $ExpectError
	random<number, number>( exponential, dtypes, dtypes, 'abc', {} ); // $ExpectError
	random<number, number>( exponential, dtypes, dtypes, {}, {} ); // $ExpectError
	random<number, number>( exponential, dtypes, dtypes, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const policies = {
		'output': 'same' as OutputPolicy
	};

	new Random(); // $ExpectError
	new Random<number, number>( exponential ); // $ExpectError
	new Random<number, number>( exponential, dtypes ); // $ExpectError
	new Random<number, number>( exponential, dtypes, dtypes ); // $ExpectError
	new Random<number, number>( exponential, dtypes, dtypes, policies, {}, {} ); // $ExpectError

	const random = Random;
	random(); // $ExpectError
	random<number, number>( exponential ); // $ExpectError
	random<number, number>( exponential, dtypes ); // $ExpectError
	random<number, number>( exponential, dtypes, dtypes ); // $ExpectError
	random<number, number>( exponential, dtypes, dtypes, polices, {}, {} ); // $ExpectError
}

// The function returns an instance having a `generate` method which returns an array...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const policies = {
		'output': 'same' as OutputPolicy
	};

	const r1 = new Random<number, number>( exponential, dtypes, dtypes, policies );
	r1.generate( [ 2, 2 ], 2.0 ); // $ExpectType typedndarray<number>
	r1.generate( [ 2, 2 ], 2.0, {} ); // $ExpectType typedndarray<number>

	const random = Random;
	const r2 = random<number, number>( exponential, dtypes, dtypes, policies );
	r2.generate( [ 2, 2 ], 2.0 ); // $ExpectType typedndarray<number>
	r2.generate( [ 2, 2 ], 2.0, {} ); // $ExpectType typedndarray<number>
}

// The compiler throws an error if the `generate` method is provided a first argument which is not a valid shape...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const policies = {
		'output': 'same' as OutputPolicy
	};

	const r1 = new Random<number, number>( exponential, dtypes, dtypes, policies );
	r1.generate( '5', 2.0 ); // $ExpectError
	r1.generate( 5, 2.0 ); // $ExpectError
	r1.generate( true, 2.0 ); // $ExpectError
	r1.generate( false, 2.0 ); // $ExpectError
	r1.generate( null, 2.0 ); // $ExpectError
	r1.generate( void 0, 2.0 ); // $ExpectError
	r1.generate( [ '5' ], 2.0 ); // $ExpectError
	r1.generate( {}, 2.0 ); // $ExpectError
	r1.generate( ( x: number ): number => x, 2.0 ); // $ExpectError

	r1.generate( '5', 2.0, {} ); // $ExpectError
	r1.generate( 5, 2.0, {} ); // $ExpectError
	r1.generate( true, 2.0, {} ); // $ExpectError
	r1.generate( false, 2.0, {} ); // $ExpectError
	r1.generate( null, 2.0, {} ); // $ExpectError
	r1.generate( void 0, 2.0, {} ); // $ExpectError
	r1.generate( [ '5' ], 2.0, {} ); // $ExpectError
	r1.generate( {}, 2.0, {} ); // $ExpectError
	r1.generate( ( x: number ): number => x, 2.0, {} ); // $ExpectError
}

// The compiler throws an error if the `generate` method is provided a third argument which is not an object...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const policies = {
		'output': 'same' as OutputPolicy
	};

	const r1 = new Random<number, number>( exponential, dtypes, dtypes, policies );
	r1.generate( [ 2,2  ], 2.0, '5' ); // $ExpectError
	r1.generate( [ 2,2  ], 2.0, true ); // $ExpectError
	r1.generate( [ 2,2  ], 2.0, false ); // $ExpectError
	r1.generate( [ 2,2  ], 2.0, null ); // $ExpectError
	r1.generate( [ 2,2  ], 2.0, [] ); // $ExpectError
	r1.generate( [ 2,2  ], 2.0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `generate` method is provided an invalid `dtype` option...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const policies = {
		'output': 'same' as OutputPolicy
	};

	const r1 = new Random<number, number>( exponential, dtypes, dtypes, policies );
	r1.generate( [ 2,2  ], 2.0, { 'dtype': '5' } ); // $ExpectError
	r1.generate( [ 2,2  ], 2.0, { 'dtype': 5 } ); // $ExpectError
	r1.generate( [ 2,2  ], 2.0, { 'dtype': true } ); // $ExpectError
	r1.generate( [ 2,2  ], 2.0, { 'dtype': false } ); // $ExpectError
	r1.generate( [ 2,2  ], 2.0, { 'dtype': null } ); // $ExpectError
	r1.generate( [ 2,2  ], 2.0, { 'dtype': [] } ); // $ExpectError
	r1.generate( [ 2,2  ], 2.0, { 'dtype': {} } ); // $ExpectError
	r1.generate( [ 2,2  ], 2.0, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `generate` method is provided an unsupported number of arguments...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const policies = {
		'output': 'same' as OutputPolicy
	};

	const r1 = new Random<number, number>( exponential, dtypes, dtypes, policies );
	r1.generate(); // $ExpectError
	r1.generate( [ 2, 2 ] ); // $ExpectError
	r1.generate( [ 2, 2 ], 2.0, {}, {} ); // $ExpectError
}

// The function returns an instance having an `assign` method which returns an array...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const policies = {
		'output': 'same' as OutputPolicy
	};
	const x = zeros( [ 5, 5 ], {
		'dtype': 'float64'
	});

	const r1 = new Random<number, number>( exponential, dtypes, dtypes, policies );
	r1.assign( 2.0, x ); // $ExpectType typedndarray<number>

	const random = Random;
	const r2 = random<number, number>( exponential, dtypes, dtypes, policies );
	r2.assign( 2.0, x ); // $ExpectType typedndarray<number>
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an ndarray...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const policies = {
		'output': 'same' as OutputPolicy
	};

	const r1 = new Random<number, number>( exponential, dtypes, dtypes, policies );
	r1.assign( 2.0, '5' ); // $ExpectError
	r1.assign( 2.0, 5 ); // $ExpectError
	r1.assign( 2.0, true ); // $ExpectError
	r1.assign( 2.0, false ); // $ExpectError
	r1.assign( 2.0, null ); // $ExpectError
	r1.assign( 2.0, void 0 ); // $ExpectError
	r1.assign( 2.0, {} ); // $ExpectError
	r1.assign( 2.0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const policies = {
		'output': 'same' as OutputPolicy
	};
	const x = zeros( [ 5, 5 ], {
		'dtype': 'float64'
	});

	const r1 = new Random<number, number>( exponential, dtypes, dtypes, policies );
	r1.assign(); // $ExpectError
	r1.assign( 2.0 ); // $ExpectError
	r1.assign( 2.0, x, {} ); // $ExpectError
}
