/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

import RandomStream = require( './index' );


// TESTS //

// The constructor returns a stream...
{
	/* eslint-disable @typescript-eslint/no-unused-expressions */
	new RandomStream( 20, 10, 7 ); // $ExpectType RandomStream
	new RandomStream( 20, 10, 7, {} ); // $ExpectType RandomStream
	new RandomStream( 20, 10, 7, { 'iter': 10 } ); // $ExpectType RandomStream

	/* eslint-enable @typescript-eslint/no-unused-expressions */
}

// The constructor is callable...
{
	const randomStream = RandomStream;

	randomStream( 20, 10, 7 ); // $ExpectType RandomStream
	randomStream( 20, 10, 7, {} ); // $ExpectType RandomStream
	randomStream( 20, 10, 7, { 'iter': 10 } ); // $ExpectType RandomStream
}

// The constructor has an `objectMode` method which returns a stream...
{
	RandomStream.objectMode( 20, 10, 7 ); // $ExpectType RandomStream
	RandomStream.objectMode( 20, 10, 7, {} ); // $ExpectType RandomStream
	RandomStream.objectMode( 20, 10, 7, { 'iter': 10 } ); // $ExpectType RandomStream
}

// The constructor has a `factory` method which returns a function for creating streams...
{
	let f = RandomStream.factory( 20, 10, 7 );
	f(); // $ExpectType RandomStream
	f(); // $ExpectType RandomStream
	f(); // $ExpectType RandomStream

	f = RandomStream.factory( 20, 10, 7, {} );
	f(); // $ExpectType RandomStream
	f(); // $ExpectType RandomStream
	f(); // $ExpectType RandomStream

	f = RandomStream.factory( 20, 10, 7, { 'iter': 10 } );
	f(); // $ExpectType RandomStream
	f(); // $ExpectType RandomStream
	f(); // $ExpectType RandomStream

	f = RandomStream.factory();
	f( 20, 10, 7 ); // $ExpectType RandomStream
	f( 5, 2, 3 ); // $ExpectType RandomStream
	f( 5, 4, 4 ); // $ExpectType RandomStream

	f = RandomStream.factory( {} );
	f( 20, 10, 7 ); // $ExpectType RandomStream
	f( 5, 2, 3 ); // $ExpectType RandomStream
	f( 5, 4, 4 ); // $ExpectType RandomStream

	f = RandomStream.factory( { 'iter': 10 } );
	f( 20, 10, 7 ); // $ExpectType RandomStream
	f( 5, 2, 3 ); // $ExpectType RandomStream
	f( 5, 4, 4 ); // $ExpectType RandomStream
}

// The compiler throws an error if the constructor is provided invalid input arguments...
{
	const s1 = new RandomStream( '20', 5, 1 ); // $ExpectError
	const s2 = new RandomStream( 20, '5', 1 ); // $ExpectError
}

// The compiler throws an error if the `objectMode` method is provided invalid input arguments...
{
	RandomStream.objectMode( '20', 5, 3 ); // $ExpectError
	RandomStream.objectMode( 20, '5', 3 ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided invalid input arguments...
{
	RandomStream.factory( '20', 5, 2 ); // $ExpectError
	RandomStream.factory( '20', 5, 2, {} ); // $ExpectError

	RandomStream.factory( 20, '5', 1 ); // $ExpectError
	RandomStream.factory( 20, '5', 1, {} ); // $ExpectError

	RandomStream.factory( 20, 10, 7, null ); // $ExpectError
	RandomStream.factory( 20, 10, 7, { 'iter': 'beep' } ); // $ExpectError

	RandomStream.factory( null ); // $ExpectError
	RandomStream.factory( { 'iter': 'beep' } ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid input arguments...
{
	let f = RandomStream.factory();
	f( '20', 5, 3 ); // $ExpectError
	f( 20, '5', 3 ); // $ExpectError

	f = RandomStream.factory( {} );
	f( '20', 5, 3 ); // $ExpectError
	f( 20, '5', 3 ); // $ExpectError

	f = RandomStream.factory( { 'iter': 10 } );
	f( '20', 10, 3 ); // $ExpectError
	f( 20, '10', 3 ); // $ExpectError
}

// The compiler throws an error if the constructor is provided insufficient arguments...
{
	const s1 = new RandomStream(); // $ExpectError
	const s2 = new RandomStream( 20 ); // $ExpectError
	const s3 = new RandomStream( 20, 10 ); // $ExpectError
}

// The compiler throws an error if the `objectMode` method is provided insufficient arguments...
{
	RandomStream.objectMode(); // $ExpectError
	RandomStream.objectMode( 20 ); // $ExpectError
	RandomStream.objectMode( 20, 10 ); // $ExpectError
}
