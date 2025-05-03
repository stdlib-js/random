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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { DataType, Order, Mode, Shape, OutputPolicy, typedndarray } from '@stdlib/types/ndarray';
import { ArrayLike } from '@stdlib/types/array';
import { PRNG } from '@stdlib/types/random';

/**
* Interface defining constructor options.
*/
interface ConstructorOptions {
	/**
	* Default memory layout.
	*/
	order?: Order;
}

/**
* Interface defining options.
*/
interface Options {
	/**
	* Output ndarray data type.
	*
	* ## Notes
	*
	* -   Setting this option overrides the output data type policy.
	*/
	dtype?: DataType;

	/**
	* Memory layout.
	*
	* ## Notes
	*
	* -   Setting this option overrides the default memory layout.
	*/
	order?: Order;

	/**
	* Specifies how to handle indices which exceed ndarray dimensions.
	*/
	mode?: Mode;

	/**
	* Specifies how to handle subscripts which exceed ndarray dimensions on a per dimension basis.
	*/
	submode?: ArrayLike<Mode>;

	/**
	* Boolean indicating whether an ndarray should be read-only.
	*/
	readonly?: boolean;
}

/**
* Interface defining class policies.
*/
interface Policies {
	/**
	* Output data type policy.
	*/
	output: OutputPolicy;
}

/**
* Interface for generating pseudorandom values drawn from a unary PRNG.
*/
interface UnaryPRNG<T, U> extends PRNG {
	/**
	* Returns a pseudorandom value.
	*
	* @param param1 - PRNG parameter
	* @returns pseudorandom value
	*/
	( param1: T ): U;
}

/**
* Class for creating ndarrays filled with pseudorandom values drawn from a unary PRNG.
*/
declare class RandomArray<T, U> {
	/**
	* Constructor for creating ndarrays filled with pseudorandom values drawn from a unary PRNG.
	*
	* @param prng - unary pseudorandom value generator
	* @param idtypes - list of supported input data types
	* @param odtypes - list of supported output data types
	* @param policies - dispatch policies
	* @param options - function options
	* @returns instance
	*
	* @example
	* var dtypes = require( '@stdlib/ndarray/dtypes' );
	* var exponential = require( './../../../../base/exponential' );
	*
	* var idt = dtypes( 'real_and_generic' );
	* var odt = dtypes( 'real_floating_point_and_generic' );
	*
	* var policies = {
	*     'output': 'real_floating_point_and_generic'
	* };
	* var options = {
	*     'order': 'row-major'
	* };
	*
	* var rand = new Random( exponential, idt, odt, policies, options );
	*
	* var v = rand.generate( [ 2, 2 ], 2.0 );
	* // returns <ndarray>
	*/
	constructor( prng: UnaryPRNG<T, U>, idtypes: ArrayLike<DataType>, odtypes: ArrayLike<DataType>, policies: Policies, options?: ConstructorOptions );

	/**
	* Returns an array filled with pseudorandom values drawn from a unary PRNG.
	*
	* @param shape - output shape
	* @param param1 - PRNG parameter
	* @param options - function options
	* @returns output ndarray
	*
	* @example
	* var dtypes = require( '@stdlib/ndarray/dtypes' );
	* var exponential = require( './../../../../base/exponential' );
	*
	* var idt = dtypes( 'real_and_generic' );
	* var odt = dtypes( 'real_floating_point_and_generic' );
	*
	* var policies = {
	*     'output': 'real_floating_point_and_generic'
	* };
	* var options = {
	*     'order': 'row-major'
	* };
	*
	* var rand = new Random( exponential, idt, odt, policies, options );
	*
	* var v = rand.generate( [ 2, 2 ], 2.0 );
	* // returns <ndarray>
	*/
	generate( shape: Shape, param1: T | typedndarray<T>, options?: Options ): typedndarray<U>;

	/**
	* Fills an ndarray with pseudorandom values drawn from a unary PRNG.
	*
	* @param param1 - PRNG parameter
	* @param out - output ndarray
	* @returns output ndarray
	*
	* @example
	* var dtypes = require( '@stdlib/ndarray/dtypes' );
	* var ndzeros = require( '@stdlib/ndarray/zeros' );
	* var exponential = require( './../../../../base/exponential' );
	*
	* var idt = dtypes( 'real_and_generic' );
	* var odt = dtypes( 'real_floating_point_and_generic' );
	*
	* var policies = {
	*     'output': 'real_floating_point_and_generic'
	* };
	* var options = {
	*     'order': 'row-major'
	* };
	*
	* var rand = new Random( exponential, idt, odt, policies, options );
	*
	* var out = ndzeros( [ 2, 2 ] );
	* var v = rand.assign( 2.0, out );
	* // returns <ndarray>
	*
	* var bool = ( v === out );
	* // returns true
	*/
	assign( param1: T | typedndarray<T>, out: typedndarray<U> ): typedndarray<U>;
}

/**
* Interface defining a constructor which is both "newable" and "callable".
*/
interface RandomArrayConstructor {
	/**
	* Constructor for creating ndarrays filled with pseudorandom values drawn from a unary PRNG.
	*
	* @param prng - unary pseudorandom value generator
	* @param idtypes - list of supported input data types
	* @param odtypes - list of supported output data types
	* @param policies - dispatch policies
	* @param options - function options
	* @returns instance
	*
	* @example
	* var dtypes = require( '@stdlib/ndarray/dtypes' );
	* var exponential = require( './../../../../base/exponential' );
	*
	* var idt = dtypes( 'real_and_generic' );
	* var odt = dtypes( 'real_floating_point_and_generic' );
	*
	* var policies = {
	*     'output': 'real_floating_point_and_generic'
	* };
	* var options = {
	*     'order': 'row-major'
	* };
	*
	* var rand = new Random( exponential, idt, odt, policies, options );
	*
	* var v = rand.generate( [ 2, 2 ], 2.0 );
	* // returns <ndarray>
	*/
	new<T = unknown, U = unknown>( prng: UnaryPRNG<T, U>, idtypes: ArrayLike<DataType>, odtypes: ArrayLike<DataType>, policies: Policies, options?: ConstructorOptions ): RandomArray<T, U>;

	/**
	* Constructor for creating ndarrays filled with pseudorandom values drawn from a unary PRNG.
	*
	* @param prng - unary pseudorandom value generator
	* @param idtypes - list of supported input data types
	* @param odtypes - list of supported output data types
	* @param policies - dispatch policies
	* @param options - function options
	* @returns instance
	*
	* @example
	* var dtypes = require( '@stdlib/ndarray/dtypes' );
	* var exponential = require( './../../../../base/exponential' );
	*
	* var idt = dtypes( 'real_and_generic' );
	* var odt = dtypes( 'real_floating_point_and_generic' );
	*
	* var policies = {
	*     'output': 'real_floating_point_and_generic'
	* };
	* var options = {
	*     'order': 'row-major'
	* };
	*
	* var rand = new Random( exponential, idt, odt, policies, options );
	*
	* var v = rand.generate( [ 2, 2 ], 2.0 );
	* // returns <ndarray>
	*/
	<T = unknown, U = unknown>( prng: UnaryPRNG<T, U>, idtypes: ArrayLike<DataType>, odtypes: ArrayLike<DataType>, policies: Policies, options?: ConstructorOptions ): RandomArray<T, U>;
}

/**
* Constructor for creating ndarrays filled with pseudorandom values drawn from a unary PRNG.
*
* @param prng - unary pseudorandom value generator
* @param idtypes - list of supported input data types
* @param odtypes - list of supported output data types
* @param policies - dispatch policies
* @param options - function options
* @returns instance
*
* @example
* var dtypes = require( '@stdlib/ndarray/dtypes' );
* var exponential = require( '@stdlib/random/base/exponential' );
*
* var idt = dtypes( 'real_and_generic' );
* var odt = dtypes( 'real_floating_point_and_generic' );
*
* var policies = {
*     'output': 'real_floating_point_and_generic'
* };
* var options = {
*     'order': 'row-major'
* };
*
* var rand = new Random( exponential, idt, odt, policies, options );
*
* var v = rand.generate( [ 2, 2 ], 2.0 );
* // returns <ndarray>
*
* @example
* var dtypes = require( '@stdlib/ndarray/dtypes' );
* var ndzeros = require( '@stdlib/ndarray/zeros' );
* var exponential = require( '@stdlib/random/base/exponential' );
*
* var idt = dtypes( 'real_and_generic' );
* var odt = dtypes( 'real_floating_point_and_generic' );
*
* var policies = {
*     'output': 'real_floating_point_and_generic'
* };
* var options = {
*     'order': 'row-major'
* };
*
* var rand = new Random( exponential, idt, odt, policies, options );
*
* var out = ndzeros( [ 2, 2 ] );
* var v = rand.assign( 2.0, out );
* // returns <ndarray>
*
* var bool = ( v === out );
* // returns true
*/
declare var ctor: RandomArrayConstructor;


// EXPORTS //

export = ctor;
