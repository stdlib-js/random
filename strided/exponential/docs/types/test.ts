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

import random = require( './index' );


// TESTS //

// The function returns a collection...
{
	const x1 = new Float64Array( 10 );
	const out = new Float64Array( 10 );

	random( x1.length, x1, 1, out, 1 ); // $ExpectType Collection<number>
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x1 = new Float64Array( 10 );
	const out = new Float64Array( 10 );

	random( '10', x1, 1, out, 1 ); // $ExpectError
	random( true, x1, 1, out, 1 ); // $ExpectError
	random( false, x1, 1, out, 1 ); // $ExpectError
	random( null, x1, 1, out, 1 ); // $ExpectError
	random( undefined, x1, 1, out, 1 ); // $ExpectError
	random( [], x1, 1, out, 1 ); // $ExpectError
	random( {}, x1, 1, out, 1 ); // $ExpectError
	random( ( x: number ): number => x, x1, 1, out, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a collection...
{
	const x1 = new Float64Array( 10 );
	const out = new Float64Array( 10 );

	random( x1.length, 10, 1, out, 1 ); // $ExpectError
	random( x1.length, true, 1, out, 1 ); // $ExpectError
	random( x1.length, false, 1, out, 1 ); // $ExpectError
	random( x1.length, null, 1, out, 1 ); // $ExpectError
	random( x1.length, undefined, 1, out, 1 ); // $ExpectError
	random( x1.length, {}, 1, out, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x1 = new Float64Array( 10 );
	const out = new Float64Array( 10 );

	random( x1.length, x1, '10', out, 1 ); // $ExpectError
	random( x1.length, x1, true, out, 1 ); // $ExpectError
	random( x1.length, x1, false, out, 1 ); // $ExpectError
	random( x1.length, x1, null, out, 1 ); // $ExpectError
	random( x1.length, x1, undefined, out, 1 ); // $ExpectError
	random( x1.length, x1, [], out, 1 ); // $ExpectError
	random( x1.length, x1, {}, out, 1 ); // $ExpectError
	random( x1.length, x1, ( x: number ): number => x, out, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a collection...
{
	const x1 = new Float64Array( 10 );

	random( x1.length, x1, 1, 10, 1 ); // $ExpectError
	random( x1.length, x1, 1, true, 1 ); // $ExpectError
	random( x1.length, x1, 1, false, 1 ); // $ExpectError
	random( x1.length, x1, 1, null, 1 ); // $ExpectError
	random( x1.length, x1, 1, undefined, 1 ); // $ExpectError
	random( x1.length, x1, 1, {}, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x1 = new Float64Array( 10 );
	const out = new Float64Array( 10 );

	random( x1.length, x1, 1, out, '10' ); // $ExpectError
	random( x1.length, x1, 1, out, true ); // $ExpectError
	random( x1.length, x1, 1, out, false ); // $ExpectError
	random( x1.length, x1, 1, out, null ); // $ExpectError
	random( x1.length, x1, 1, out, undefined ); // $ExpectError
	random( x1.length, x1, 1, out, [] ); // $ExpectError
	random( x1.length, x1, 1, out, {} ); // $ExpectError
	random( x1.length, x1, 1, out, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x1 = new Float64Array( 10 );
	const out = new Float64Array( 10 );

	random(); // $ExpectError
	random( x1.length ); // $ExpectError
	random( x1.length, x1 ); // $ExpectError
	random( x1.length, x1, 1 ); // $ExpectError
	random( x1.length, x1, 1, out ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a collection...
{
	const x1 = new Float64Array( 10 );
	const out = new Float64Array( 10 );

	random.ndarray( x1.length, x1, 1, 0, out, 1, 0 ); // $ExpectType Collection<number>
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x1 = new Float64Array( 10 );
	const out = new Float64Array( 10 );

	random.ndarray( '10', x1, 1, 0, out, 1, 0 ); // $ExpectError
	random.ndarray( true, x1, 1, 0, out, 1, 0 ); // $ExpectError
	random.ndarray( false, x1, 1, 0, out, 1, 0 ); // $ExpectError
	random.ndarray( null, x1, 1, 0, out, 1, 0 ); // $ExpectError
	random.ndarray( undefined, x1, 1, 0, out, 1, 0 ); // $ExpectError
	random.ndarray( [], x1, 1, 0, out, 1, 0 ); // $ExpectError
	random.ndarray( {}, x1, 1, 0, out, 1, 0 ); // $ExpectError
	random.ndarray( ( x: number ): number => x, x1, 1, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a collection...
{
	const x1 = new Float64Array( 10 );
	const out = new Float64Array( 10 );

	random.ndarray( x1.length, 10, 1, 0, out, 1, 0 ); // $ExpectError
	random.ndarray( x1.length, true, 1, 0, out, 1, 0 ); // $ExpectError
	random.ndarray( x1.length, false, 1, 0, out, 1, 0 ); // $ExpectError
	random.ndarray( x1.length, null, 1, 0, out, 1, 0 ); // $ExpectError
	random.ndarray( x1.length, undefined, 1, 0, out, 1, 0 ); // $ExpectError
	random.ndarray( x1.length, {}, 1, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x1 = new Float64Array( 10 );
	const out = new Float64Array( 10 );

	random.ndarray( x1.length, x1, '10', 0, out, 1, 0 ); // $ExpectError
	random.ndarray( x1.length, x1, true, 0, out, 1, 0 ); // $ExpectError
	random.ndarray( x1.length, x1, false, 0, out, 1, 0 ); // $ExpectError
	random.ndarray( x1.length, x1, null, 0, out, 1, 0 ); // $ExpectError
	random.ndarray( x1.length, x1, undefined, 0, out, 1, 0 ); // $ExpectError
	random.ndarray( x1.length, x1, [], 0, out, 1, 0 ); // $ExpectError
	random.ndarray( x1.length, x1, {}, 0, out, 1, 0 ); // $ExpectError
	random.ndarray( x1.length, x1, ( x: number ): number => x, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x1 = new Float64Array( 10 );
	const out = new Float64Array( 10 );

	random.ndarray( x1.length, x1, 1, '10', out, 1, 0 ); // $ExpectError
	random.ndarray( x1.length, x1, 1, true, out, 1, 0 ); // $ExpectError
	random.ndarray( x1.length, x1, 1, false, out, 1, 0 ); // $ExpectError
	random.ndarray( x1.length, x1, 1, null, out, 1, 0 ); // $ExpectError
	random.ndarray( x1.length, x1, 1, undefined, out, 1, 0 ); // $ExpectError
	random.ndarray( x1.length, x1, 1, [], out, 1, 0 ); // $ExpectError
	random.ndarray( x1.length, x1, 1, {}, out, 1, 0 ); // $ExpectError
	random.ndarray( x1.length, x1, 1, ( x: number ): number => x, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a collection...
{
	const x1 = new Float64Array( 10 );

	random.ndarray( x1.length, x1, 1, 0, 10, 1, 0 ); // $ExpectError
	random.ndarray( x1.length, x1, 1, 0, true, 1, 0 ); // $ExpectError
	random.ndarray( x1.length, x1, 1, 0, false, 1, 0 ); // $ExpectError
	random.ndarray( x1.length, x1, 1, 0, null, 1, 0 ); // $ExpectError
	random.ndarray( x1.length, x1, 1, 0, undefined, 1, 0 ); // $ExpectError
	random.ndarray( x1.length, x1, 1, 0, {}, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x1 = new Float64Array( 10 );
	const out = new Float64Array( 10 );

	random.ndarray( x1.length, x1, 1, 0, out, '10', 0 ); // $ExpectError
	random.ndarray( x1.length, x1, 1, 0, out, true, 0 ); // $ExpectError
	random.ndarray( x1.length, x1, 1, 0, out, false, 0 ); // $ExpectError
	random.ndarray( x1.length, x1, 1, 0, out, null, 0 ); // $ExpectError
	random.ndarray( x1.length, x1, 1, 0, out, undefined, 0 ); // $ExpectError
	random.ndarray( x1.length, x1, 1, 0, out, [], 0 ); // $ExpectError
	random.ndarray( x1.length, x1, 1, 0, out, {}, 0 ); // $ExpectError
	random.ndarray( x1.length, x1, 1, 0, out, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x1 = new Float64Array( 10 );
	const out = new Float64Array( 10 );

	random.ndarray( x1.length, x1, 1, 0, out, 1, '10' ); // $ExpectError
	random.ndarray( x1.length, x1, 1, 0, out, 1, true ); // $ExpectError
	random.ndarray( x1.length, x1, 1, 0, out, 1, false ); // $ExpectError
	random.ndarray( x1.length, x1, 1, 0, out, 1, null ); // $ExpectError
	random.ndarray( x1.length, x1, 1, 0, out, 1, undefined ); // $ExpectError
	random.ndarray( x1.length, x1, 1, 0, out, 1, [] ); // $ExpectError
	random.ndarray( x1.length, x1, 1, 0, out, 1, {} ); // $ExpectError
	random.ndarray( x1.length, x1, 1, 0, out, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x1 = new Float64Array( 10 );
	const out = new Float64Array( 10 );

	random.ndarray(); // $ExpectError
	random.ndarray( x1.length ); // $ExpectError
	random.ndarray( x1.length, x1 ); // $ExpectError
	random.ndarray( x1.length, x1, 1 ); // $ExpectError
	random.ndarray( x1.length, x1, 1, 0 ); // $ExpectError
	random.ndarray( x1.length, x1, 1, 0, out ); // $ExpectError
	random.ndarray( x1.length, x1, 1, 0, out, 1 ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	random.factory(); // $ExpectType Random
	random.factory( {} ); // $ExpectType Random
	random.factory( { 'copy': true } ); // $ExpectType Random
}

// The compiler throws an error if the `factory` method is provided an invalid option...
{
	random.factory( { 'copy': '10' } ); // $ExpectError
	random.factory( { 'copy': null } ); // $ExpectError
	random.factory( { 'copy': [] } ); // $ExpectError
	random.factory( { 'copy': {} } ); // $ExpectError
	random.factory( { 'copy': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an unsupported number of arguments...
{
	random.factory( {}, {} ); // $ExpectError
}
