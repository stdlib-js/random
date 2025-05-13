/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
import createFactory = require( './index' );


// TESTS //

// The function returns a function...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const policies = {
		'output': 'real_floating_point' as OutputPolicy
	};

	createFactory<number, number, number>( uniform, [ dtypes, dtypes ], dtypes, policies ); // $ExpectType Factory<number, number, number>
	createFactory<number, number, number>( uniform, [ dtypes, dtypes ], dtypes, policies, {} ); // $ExpectType Factory<number, number, number>
}

// The compiler throws an error if the function is provided a first argument which is not a PRNG function...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const policies = {
		'output': 'real_floating_point' as OutputPolicy
	};

	createFactory( '5', [ dtypes, dtypes ], dtypes, policies ); // $ExpectError
	createFactory( 5, [ dtypes, dtypes ], dtypes, policies ); // $ExpectError
	createFactory( true, [ dtypes, dtypes ], dtypes, policies ); // $ExpectError
	createFactory( false, [ dtypes, dtypes ], dtypes, policies ); // $ExpectError
	createFactory( null, [ dtypes, dtypes ], dtypes, policies ); // $ExpectError
	createFactory( void 0, [ dtypes, dtypes ], dtypes, policies ); // $ExpectError
	createFactory( 'abc', [ dtypes, dtypes ], dtypes, policies ); // $ExpectError
	createFactory( {}, [ dtypes, dtypes ], dtypes, policies ); // $ExpectError
	createFactory( ( x: number ): number => x, [ dtypes, dtypes ], dtypes, policies ); // $ExpectError

	createFactory( '5', [ dtypes, dtypes ], dtypes, policies, {} ); // $ExpectError
	createFactory( 5, [ dtypes, dtypes ], dtypes, policies, {} ); // $ExpectError
	createFactory( true, [ dtypes, dtypes ], dtypes, policies, {} ); // $ExpectError
	createFactory( false, [ dtypes, dtypes ], dtypes, policies, {} ); // $ExpectError
	createFactory( null, [ dtypes, dtypes ], dtypes, policies, {} ); // $ExpectError
	createFactory( void 0, [ dtypes, dtypes ], dtypes, policies, {} ); // $ExpectError
	createFactory( 'abc', [ dtypes, dtypes ], dtypes, policies, {} ); // $ExpectError
	createFactory( {}, [ dtypes, dtypes ], dtypes, policies, {} ); // $ExpectError
	createFactory( ( x: number ): number => x, [ dtypes, dtypes ], dtypes, policies, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a list of lists containing data types...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const policies = {
		'output': 'real_floating_point' as OutputPolicy
	};

	createFactory<number, number, number>( uniform, '5', dtypes, policies ); // $ExpectError
	createFactory<number, number, number>( uniform, 5, dtypes, policies ); // $ExpectError
	createFactory<number, number, number>( uniform, true, dtypes, policies ); // $ExpectError
	createFactory<number, number, number>( uniform, false, dtypes, policies ); // $ExpectError
	createFactory<number, number, number>( uniform, null, dtypes, policies ); // $ExpectError
	createFactory<number, number, number>( uniform, void 0, dtypes, policies ); // $ExpectError
	createFactory<number, number, number>( uniform, 'abc', dtypes, policies ); // $ExpectError
	createFactory<number, number, number>( uniform, {}, dtypes, policies ); // $ExpectError
	createFactory<number, number, number>( uniform, ( x: number ): number => x, dtypes, policies ); // $ExpectError

	createFactory<number, number, number>( uniform, '5', dtypes, policies, {} ); // $ExpectError
	createFactory<number, number, number>( uniform, 5, dtypes, policies, {} ); // $ExpectError
	createFactory<number, number, number>( uniform, true, dtypes, policies, {} ); // $ExpectError
	createFactory<number, number, number>( uniform, false, dtypes, policies, {} ); // $ExpectError
	createFactory<number, number, number>( uniform, null, dtypes, policies, {} ); // $ExpectError
	createFactory<number, number, number>( uniform, void 0, dtypes, policies, {} ); // $ExpectError
	createFactory<number, number, number>( uniform, 'abc', dtypes, policies, {} ); // $ExpectError
	createFactory<number, number, number>( uniform, {}, dtypes, policies, {} ); // $ExpectError
	createFactory<number, number, number>( uniform, ( x: number ): number => x, dtypes, policies, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a list of data types...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const policies = {
		'output': 'real_floating_point' as OutputPolicy
	};

	createFactory<number, number, number>( uniform, [ dtypes, dtypes ], '5', policies ); // $ExpectError
	createFactory<number, number, number>( uniform, [ dtypes, dtypes ], 5, policies ); // $ExpectError
	createFactory<number, number, number>( uniform, [ dtypes, dtypes ], true, policies ); // $ExpectError
	createFactory<number, number, number>( uniform, [ dtypes, dtypes ], false, policies ); // $ExpectError
	createFactory<number, number, number>( uniform, [ dtypes, dtypes ], null, policies ); // $ExpectError
	createFactory<number, number, number>( uniform, [ dtypes, dtypes ], void 0, policies ); // $ExpectError
	createFactory<number, number, number>( uniform, [ dtypes, dtypes ], 'abc', policies ); // $ExpectError
	createFactory<number, number, number>( uniform, [ dtypes, dtypes ], {}, policies ); // $ExpectError
	createFactory<number, number, number>( uniform, [ dtypes, dtypes ], ( x: number ): number => x, policies ); // $ExpectError

	createFactory<number, number, number>( uniform, [ dtypes, dtypes ], '5', policies, {} ); // $ExpectError
	createFactory<number, number, number>( uniform, [ dtypes, dtypes ], 5, policies, {} ); // $ExpectError
	createFactory<number, number, number>( uniform, [ dtypes, dtypes ], true, policies, {} ); // $ExpectError
	createFactory<number, number, number>( uniform, [ dtypes, dtypes ], false, policies, {} ); // $ExpectError
	createFactory<number, number, number>( uniform, [ dtypes, dtypes ], null, policies, {} ); // $ExpectError
	createFactory<number, number, number>( uniform, [ dtypes, dtypes ], void 0, policies, {} ); // $ExpectError
	createFactory<number, number, number>( uniform, [ dtypes, dtypes ], 'abc', policies, {} ); // $ExpectError
	createFactory<number, number, number>( uniform, [ dtypes, dtypes ], {}, policies, {} ); // $ExpectError
	createFactory<number, number, number>( uniform, [ dtypes, dtypes ], ( x: number ): number => x, policies, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a valid policy object...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];

	createFactory<number, number, number>( uniform, [ dtypes, dtypes ], dtypes, '5' ); // $ExpectError
	createFactory<number, number, number>( uniform, [ dtypes, dtypes ], dtypes, 5 ); // $ExpectError
	createFactory<number, number, number>( uniform, [ dtypes, dtypes ], dtypes, true ); // $ExpectError
	createFactory<number, number, number>( uniform, [ dtypes, dtypes ], dtypes, false ); // $ExpectError
	createFactory<number, number, number>( uniform, [ dtypes, dtypes ], dtypes, null ); // $ExpectError
	createFactory<number, number, number>( uniform, [ dtypes, dtypes ], dtypes, void 0 ); // $ExpectError
	createFactory<number, number, number>( uniform, [ dtypes, dtypes ], dtypes, 'abc' ); // $ExpectError
	createFactory<number, number, number>( uniform, [ dtypes, dtypes ], dtypes, {} ); // $ExpectError
	createFactory<number, number, number>( uniform, [ dtypes, dtypes ], dtypes, ( x: number ): number => x ); // $ExpectError

	createFactory<number, number, number>( uniform, [ dtypes, dtypes ], dtypes, '5', {} ); // $ExpectError
	createFactory<number, number, number>( uniform, [ dtypes, dtypes ], dtypes, 5, {} ); // $ExpectError
	createFactory<number, number, number>( uniform, [ dtypes, dtypes ], dtypes, true, {} ); // $ExpectError
	createFactory<number, number, number>( uniform, [ dtypes, dtypes ], dtypes, false, {} ); // $ExpectError
	createFactory<number, number, number>( uniform, [ dtypes, dtypes ], dtypes, null, {} ); // $ExpectError
	createFactory<number, number, number>( uniform, [ dtypes, dtypes ], dtypes, void 0, {} ); // $ExpectError
	createFactory<number, number, number>( uniform, [ dtypes, dtypes ], dtypes, 'abc', {} ); // $ExpectError
	createFactory<number, number, number>( uniform, [ dtypes, dtypes ], dtypes, {}, {} ); // $ExpectError
	createFactory<number, number, number>( uniform, [ dtypes, dtypes ], dtypes, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const policies = {
		'output': 'real_floating_point' as OutputPolicy
	};

	createFactory(); // $ExpectError
	createFactory<number, number, number>( uniform ); // $ExpectError
	createFactory<number, number, number>( uniform, [ dtypes, dtypes ] ); // $ExpectError
	createFactory<number, number, number>( uniform, [ dtypes, dtypes ], dtypes ); // $ExpectError
	createFactory<number, number, number>( uniform, [ dtypes, dtypes ], dtypes, policies, {}, {} ); // $ExpectError
}

// The returned function returns a function...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const policies = {
		'output': 'real_floating_point' as OutputPolicy
	};

	const factory = createFactory<number, number, number>( uniform, [ dtypes, dtypes ], dtypes, policies );

	factory(); // $ExpectType Random<number, number, number>
	factory( {} ); // $ExpectType Random<number, number, number>
}

// The compiler throws an error if the returned function is provided an invalid options arguments...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const policies = {
		'output': 'real_floating_point' as OutputPolicy
	};

	const factory = createFactory<number, number, number>( uniform, [ dtypes, dtypes ], dtypes, policies );

	factory( '5' ); // $ExpectError
	factory( 5 ); // $ExpectError
	factory( true ); // $ExpectError
	factory( false ); // $ExpectError
	factory( null ); // $ExpectError
	factory( [] ); // $ExpectError
	factory( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the returned function is provided an unsupported number of arguments...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const policies = {
		'output': 'real_floating_point' as OutputPolicy
	};

	const factory = createFactory<number, number, number>( uniform, [ dtypes, dtypes ], dtypes, policies );

	factory( {}, {} ); // $ExpectError
}

// The returned function returns a function which returns an ndarray...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const policies = {
		'output': 'real_floating_point' as OutputPolicy
	};

	const factory = createFactory<number, number, number>( uniform, [ dtypes, dtypes ], dtypes, policies );

	const r1 = factory();
	r1( [ 2, 2 ], 0.0, 1.0 ); // $ExpectType typedndarray<number>
	r1( [ 2, 2 ], 0.0, 1.0, {} ); // $ExpectType typedndarray<number>
}

// The compiler throws an error if the returned function is provided a first argument which is not a valid shape...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const policies = {
		'output': 'real_floating_point' as OutputPolicy
	};

	const factory = createFactory<number, number, number>( uniform, [ dtypes, dtypes ], dtypes, policies );

	const r1 = factory();
	r1( '5', 0.0, 1.0 ); // $ExpectError
	r1( 5, 0.0, 1.0 ); // $ExpectError
	r1( true, 0.0, 1.0 ); // $ExpectError
	r1( false, 0.0, 1.0 ); // $ExpectError
	r1( null, 0.0, 1.0 ); // $ExpectError
	r1( void 0, 0.0, 1.0 ); // $ExpectError
	r1( [ '5' ], 0.0, 1.0 ); // $ExpectError
	r1( {}, 0.0, 1.0 ); // $ExpectError
	r1( ( x: number ): number => x, 0.0, 1.0 ); // $ExpectError

	r1( '5', 0.0, 1.0, {} ); // $ExpectError
	r1( 5, 0.0, 1.0, {} ); // $ExpectError
	r1( true, 0.0, 1.0, {} ); // $ExpectError
	r1( false, 0.0, 1.0, {} ); // $ExpectError
	r1( null, 0.0, 1.0, {} ); // $ExpectError
	r1( void 0, 0.0, 1.0, {} ); // $ExpectError
	r1( [ '5' ], 0.0, 1.0, {} ); // $ExpectError
	r1( {}, 0.0, 1.0, {} ); // $ExpectError
	r1( ( x: number ): number => x, 0.0, 1.0, {} ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a fourth argument which is not an object...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const policies = {
		'output': 'real_floating_point' as OutputPolicy
	};

	const factory = createFactory<number, number, number>( uniform, [ dtypes, dtypes ], dtypes, policies );

	const r1 = factory();
	r1( [ 2, 2 ], 0.0, 1.0, '5' ); // $ExpectError
	r1( [ 2, 2 ], 0.0, 1.0, true ); // $ExpectError
	r1( [ 2, 2 ], 0.0, 1.0, false ); // $ExpectError
	r1( [ 2, 2 ], 0.0, 1.0, null ); // $ExpectError
	r1( [ 2, 2 ], 0.0, 1.0, [] ); // $ExpectError
	r1( [ 2, 2 ], 0.0, 1.0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the returned function is provided an invalid `dtype` option...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const policies = {
		'output': 'real_floating_point' as OutputPolicy
	};

	const factory = createFactory<number, number, number>( uniform, [ dtypes, dtypes ], dtypes, policies );

	const r1 = factory();
	r1( [ 2, 2 ], 0.0, 1.0, { 'dtype': '5' } ); // $ExpectError
	r1( [ 2, 2 ], 0.0, 1.0, { 'dtype': 5 } ); // $ExpectError
	r1( [ 2, 2 ], 0.0, 1.0, { 'dtype': true } ); // $ExpectError
	r1( [ 2, 2 ], 0.0, 1.0, { 'dtype': false } ); // $ExpectError
	r1( [ 2, 2 ], 0.0, 1.0, { 'dtype': null } ); // $ExpectError
	r1( [ 2, 2 ], 0.0, 1.0, { 'dtype': [] } ); // $ExpectError
	r1( [ 2, 2 ], 0.0, 1.0, { 'dtype': {} } ); // $ExpectError
	r1( [ 2, 2 ], 0.0, 1.0, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the returned function is provided an unsupported number of arguments...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const policies = {
		'output': 'real_floating_point' as OutputPolicy
	};

	const factory = createFactory<number, number, number>( uniform, [ dtypes, dtypes ], dtypes, policies );

	const r1 = factory();
	r1(); // $ExpectError
	r1( [ 2, 2 ] ); // $ExpectError
	r1( [ 2, 2 ], 0.0 ); // $ExpectError
	r1( [ 2, 2 ], 0.0, 1.0, {}, {} ); // $ExpectError
}

// The returned function returns a function having an `assign` method which returns an ndarray...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const policies = {
		'output': 'real_floating_point' as OutputPolicy
	};

	const x = zeros( [ 5, 5 ], {
		'dtype': 'float64'
	});

	const factory = createFactory<number, number, number>( uniform, [ dtypes, dtypes ], dtypes, policies );

	const r1 = factory();
	r1.assign( 0.0, 1.0, x ); // $ExpectType typedndarray<number>
}

// The compiler throws an error if the `assign` method is provided a third argument which is not an ndarray...
{
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const policies = {
		'output': 'real_floating_point' as OutputPolicy
	};

	const factory = createFactory<number, number, number>( uniform, [ dtypes, dtypes ], dtypes, policies );

	const r1 = factory();
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
	const dtypes: Array<DataType> = [ 'float64', 'float32' ];
	const policies = {
		'output': 'real_floating_point' as OutputPolicy
	};

	const x = zeros( [ 5, 5 ], {
		'dtype': 'float64'
	});

	const factory = createFactory<number, number, number>( uniform, [ dtypes, dtypes ], dtypes, policies );

	const r1 = factory();
	r1.assign(); // $ExpectError
	r1.assign( 0.0 ); // $ExpectError
	r1.assign( 0.0, 1.0 ); // $ExpectError
	r1.assign( 0.0, 1.0, x, {} ); // $ExpectError
}
