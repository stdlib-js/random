/* eslint-disable max-lines */

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

'use strict';

// MODULES //

var tape = require( 'tape' );
var ENV = require( '@stdlib/process/env' );
var UINT32_MAX = require( '@stdlib/constants/uint32/max' );
var FLOAT64_MAX_SAFE_INTEGER = require( '@stdlib/constants/float64/max-safe-integer' );
var isNonNegativeInteger = require( '@stdlib/math/base/assert/is-nonnegative-integer' );
var isUint32Array = require( '@stdlib/assert/is-uint32array' );
var Uint32Array = require( '@stdlib/array/uint32' );
var kstest = require( '@stdlib/stats/kstest' );
var minstd = require( './../../../base/minstd-shuffle' );
var gcopy = require( '@stdlib/blas/base/gcopy' );
var typedarray2json = require( '@stdlib/array/to-json' );
var factory = require( './../lib/factory.js' );


// VARIABLES //

var opts = {
	'skip': ( ENV.TEST_MODE === 'coverage' )
};


// FIXTURES //

var UINT32_INTEGER_SEED = require( './fixtures/c/uint32_integer_seed.json' );
var UINT32_ARRAY_SEED = require( './fixtures/c/uint32_array_seed.json' );
var FLOAT64_INTEGER_SEED = require( './fixtures/c/float64_integer_seed.json' );
var FLOAT64_ARRAY_SEED = require( './fixtures/c/float64_array_seed.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof factory, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided an options argument which is not an object, the factory function throws an error', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		3,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory( value );
		};
	}
});

tape( 'if provided a `copy` option which is not a boolean, the factory function throws an error', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory({
				'copy': value
			});
		};
	}
});

tape( 'if provided a `seed` which is not a positive integer or a non-empty array-like object containing positive integers, the factory function throws an error', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		3.14,
		0.0,
		-5.0,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		[ -1 ],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory({
				'seed': value
			});
		};
	}
});

tape( 'the function throws a range error if provided a `seed` greater than the maximum unsigned 32-bit integer (integer seed)', function test( t ) {
	var values;
	var i;

	values = [
		UINT32_MAX + 1,
		UINT32_MAX + 2,
		UINT32_MAX + 3
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws a range error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory({
				'seed': value
			});
		};
	}
});

tape( 'the function throws a range error if provided a `seed` greater than the maximum unsigned 32-bit integer (array seed; length=1)', function test( t ) {
	var values;
	var i;

	values = [
		UINT32_MAX + 1,
		UINT32_MAX + 2,
		UINT32_MAX + 3
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws a range error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory({
				'seed': [ value ]
			});
		};
	}
});

tape( 'if provided a `state` option which is not a Uint32Array, the factory function throws an error', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory({
				'state': value
			});
		};
	}
});

tape( 'if provided a `state` option having an insufficient length, the factory function throws an error', function test( t ) {
	var values;
	var i;

	values = [
		new Uint32Array( 0 ),
		new Uint32Array( 10 ),
		new Uint32Array( 100 )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory({
				'state': value
			});
		};
	}
});

tape( 'if provided a `state` option containing an unsupported version, the factory function throws an error', function test( t ) {
	var values;
	var v;
	var i;

	values = [];

	v = new Uint32Array( 631 ); // 624+7
	v[ 0 ] = 0;   // version
	v[ 1 ] = 3;   // number of sections
	v[ 2 ] = 624; // state length
	v[ 627 ] = 1; // other length
	v[ 628 ] = 1; // value <= 624
	v[ 629 ] = 1; // seed length
	values.push( v );

	v = new Uint32Array( 632 ); // >624+7
	v[ 0 ] = 0;   // version
	v[ 1 ] = 3;   // number of sections
	v[ 2 ] = 624; // state length
	v[ 627 ] = 1; // other length
	v[ 628 ] = 1; // value <= 624
	v[ 629 ] = 2; // seed length
	values.push( v );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory({
				'state': value
			});
		};
	}
});

tape( 'if provided a `state` option containing an unsupported number of sections, the factory function throws an error', function test( t ) {
	var values;
	var v;
	var i;

	values = [];

	v = new Uint32Array( 631 ); // 624+7
	v[ 0 ] = 1;   // version
	v[ 1 ] = 9;   // number of sections
	v[ 2 ] = 624; // state length
	v[ 627 ] = 1; // other length
	v[ 628 ] = 1; // value <= 624
	v[ 629 ] = 1; // seed length
	values.push( v );

	v = new Uint32Array( 632 ); // >624+7
	v[ 0 ] = 1;   // version
	v[ 1 ] = 9;   // number of sections
	v[ 2 ] = 624; // state length
	v[ 627 ] = 1; // other length
	v[ 628 ] = 1; // value <= 624
	v[ 629 ] = 2; // seed length
	values.push( v );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory({
				'state': value
			});
		};
	}
});

tape( 'if provided a `state` option containing an unsupported state length, the factory function throws an error', function test( t ) {
	var values;
	var v;
	var i;

	values = [];

	v = new Uint32Array( 632 ); // >624+7
	v[ 0 ] = 1;   // version
	v[ 1 ] = 3;   // number of sections
	v[ 2 ] = 625; // state length
	v[ 628 ] = 1; // other length
	v[ 629 ] = 1; // value <= 624
	v[ 630 ] = 1; // seed length
	values.push( v );

	v = new Uint32Array( 633 ); // >624+7
	v[ 0 ] = 1;   // version
	v[ 1 ] = 3;   // number of sections
	v[ 2 ] = 625; // state length
	v[ 628 ] = 1; // other length
	v[ 629 ] = 1; // value <= 624
	v[ 630 ] = 2; // seed length
	values.push( v );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory({
				'state': value
			});
		};
	}
});

tape( 'if provided a `state` option containing an unsupported section length, the factory function throws an error', function test( t ) {
	var values;
	var v;
	var i;

	values = [];

	v = new Uint32Array( 632 ); // >624+7
	v[ 0 ] = 1;   // version
	v[ 1 ] = 3;   // number of sections
	v[ 2 ] = 624; // state length
	v[ 627 ] = 2; // other length
	v[ 628 ] = 1; // value <= 624
	v[ 630 ] = 1; // seed length
	values.push( v );

	v = new Uint32Array( 633 ); // >624+7
	v[ 0 ] = 1;   // version
	v[ 1 ] = 3;   // number of sections
	v[ 2 ] = 624; // state length
	v[ 627 ] = 2; // other length
	v[ 628 ] = 1; // value <= 624
	v[ 630 ] = 2; // seed length
	values.push( v );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory({
				'state': value
			});
		};
	}
});

tape( 'if provided a `state` option containing an incompatible seed length, the factory function throws an error', function test( t ) {
	var values;
	var v;
	var i;

	values = [];

	v = new Uint32Array( 631 ); // 624+7
	v[ 0 ] = 1;   // version
	v[ 1 ] = 3;   // number of sections
	v[ 2 ] = 624; // state length
	v[ 627 ] = 1; // other length
	v[ 628 ] = 1; // value <= 624
	v[ 629 ] = 9; // seed length
	values.push( v );

	v = new Uint32Array( 632 ); // >624+7
	v[ 0 ] = 1;   // version
	v[ 1 ] = 3;   // number of sections
	v[ 2 ] = 624; // state length
	v[ 627 ] = 1; // other length
	v[ 628 ] = 1; // value <= 624
	v[ 629 ] = 9; // seed length
	values.push( v );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory({
				'state': value
			});
		};
	}
});

tape( 'the function returns a pseudorandom number generator (no options)', function test( t ) {
	var mt19937;
	var v;
	var i;

	mt19937 = factory();
	for ( i = 0; i < 1e3; i++ ) {
		v = mt19937();
		t.equal( typeof v, 'number', 'returns a number' );
		t.equal( isNonNegativeInteger( v ), true, 'returns a nonnegative integer' );
		t.equal( v >= 0 && v <= UINT32_MAX, true, 'returns an integer between 0 and 2^32-1 (inclusive)' );
	}
	t.end();
});

tape( 'the function returns a pseudorandom number generator (options; no seed)', function test( t ) {
	var mt19937;
	var v;
	var i;

	mt19937 = factory( {} );
	for ( i = 0; i < 1e3; i++ ) {
		v = mt19937();
		t.equal( typeof v, 'number', 'returns a number' );
		t.equal( isNonNegativeInteger( v ), true, 'returns a nonnegative integer' );
		t.equal( v >= 0 && v <= UINT32_MAX, true, 'returns an integer between 0 and 2^32-1 (inclusive)' );
	}
	t.end();
});

tape( 'the function returns a seeded pseudorandom number generator (integer seed)', function test( t ) {
	var mt19937a;
	var mt19937b;
	var seed;
	var v1;
	var v2;
	var i;

	seed = minstd();

	mt19937a = factory({
		'seed': seed
	});
	mt19937b = factory({
		'seed': seed
	});

	t.notEqual( mt19937a, mt19937b, 'separate generators' );

	for ( i = 0; i < 1e3; i++ ) {
		v1 = mt19937a();
		v2 = mt19937b();
		t.equal( v1, v2, 'both return same number' );
	}
	t.end();
});

tape( 'the function returns a seeded pseudorandom number generator (array seed; length=1)', function test( t ) {
	var mt19937a;
	var mt19937b;
	var seed;
	var v1;
	var v2;
	var i;

	seed = [ minstd() ];

	mt19937a = factory({
		'seed': seed
	});
	mt19937b = factory({
		'seed': seed
	});

	t.notEqual( mt19937a, mt19937b, 'separate generators' );

	for ( i = 0; i < 1e3; i++ ) {
		v1 = mt19937a();
		v2 = mt19937b();
		t.equal( v1, v2, 'both return same number' );
	}
	t.end();
});

tape( 'the function returns a seeded pseudorandom number generator (array seed; length>1)', function test( t ) {
	var mt19937a;
	var mt19937b;
	var seed;
	var v1;
	var v2;
	var i;

	seed = [ minstd(), minstd(), minstd(), minstd() ];

	mt19937a = factory({
		'seed': seed
	});
	mt19937b = factory({
		'seed': seed
	});

	t.notEqual( mt19937a, mt19937b, 'separate generators' );

	for ( i = 0; i < 1e3; i++ ) {
		v1 = mt19937a();
		v2 = mt19937b();
		t.equal( v1, v2, 'both return same number' );
	}
	t.end();
});

tape( 'attached to the returned function is the generator name', function test( t ) {
	var mt19937 = factory();
	t.equal( mt19937.NAME, 'mt19937', 'has property' );
	t.end();
});

tape( 'attached to the returned function is the minimum possible generated number', function test( t ) {
	var mt19937 = factory();
	t.equal( mt19937.MIN, 0, 'has property' );
	t.end();
});

tape( 'attached to the returned function is the maximum possible generated number', function test( t ) {
	var mt19937 = factory();
	t.equal( mt19937.MAX, UINT32_MAX, 'has property' );
	t.end();
});

tape( 'attached to the returned function is the generator seed (integer seed)', function test( t ) {
	var mt19937;
	var actual;

	mt19937 = factory({
		'seed': 12345
	});
	actual = mt19937.seed;

	t.equal( isUint32Array( actual ), true, 'has property' );
	t.equal( actual.length, 1, 'has expected length' );
	t.equal( actual[ 0 ], 12345, 'equal to provided seed' );
	t.end();
});

tape( 'attached to the returned function is the generator seed (array seed; length=1)', function test( t ) {
	var mt19937;
	var actual;

	mt19937 = factory({
		'seed': [ 12345 ]
	});
	actual = mt19937.seed;

	t.equal( isUint32Array( actual ), true, 'has property' );
	t.equal( actual.length, 1, 'has expected length' );
	t.equal( actual[ 0 ], 12345, 'equal to provided seed' );
	t.end();
});

tape( 'attached to the returned function is the generator seed (array seed; length>1)', function test( t ) {
	var mt19937;
	var actual;
	var seed;
	var i;

	seed = [ minstd(), minstd(), minstd(), minstd(), minstd() ];
	mt19937 = factory({
		'seed': seed
	});

	actual = mt19937.seed;
	t.equal( isUint32Array( actual ), true, 'has property' );
	for ( i = 0; i < seed.length; i++ ) {
		t.equal( actual[ i ], seed[ i ], 'returns expected value for word '+i );
	}
	t.end();
});

tape( 'attached to the returned function is the generator seed length', function test( t ) {
	var mt19937 = factory();
	t.equal( typeof mt19937.seedLength, 'number', 'has property' );
	t.end();
});

tape( 'attached to the returned function is the generator state', function test( t ) {
	var mt19937 = factory();
	t.equal( isUint32Array( mt19937.state ), true, 'has property' );
	t.end();
});

tape( 'attached to the returned function is the generator state length', function test( t ) {
	var mt19937 = factory();
	t.equal( typeof mt19937.stateLength, 'number', 'has property' );
	t.end();
});

tape( 'attached to the returned function is the generator state size', function test( t ) {
	var mt19937 = factory();
	t.equal( typeof mt19937.byteLength, 'number', 'has property' );
	t.end();
});

tape( 'attached to the returned function is a method to serialize the generator as a JSON object', function test( t ) {
	var mt19937;
	var o;

	mt19937 = factory();
	t.equal( typeof mt19937.toJSON, 'function', 'has method' );

	o = mt19937.toJSON();
	t.equal( o.type, 'PRNG', 'has property' );
	t.equal( o.name, mt19937.NAME, 'has property' );
	t.deepEqual( o.state, typedarray2json( mt19937.state ), 'has property' );
	t.deepEqual( o.params, [], 'has property' );

	t.end();
});

tape( 'if the `state` property is set to a value other than a Uint32Array, an error is thrown', function test( t ) {
	var mt19937;
	var values;
	var i;

	mt19937 = factory();

	values = [
		'3',
		3,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when set to '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			mt19937.state = value;
		};
	}
});

tape( 'if the `state` property is set to a Uint32Array having an unexpected length, an error is thrown', function test( t ) {
	var mt19937;
	var values;
	var i;

	mt19937 = factory();

	values = [
		new Uint32Array( 0 ),
		new Uint32Array( 10 ),
		new Uint32Array( 20 )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when set to '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			mt19937.state = value;
		};
	}
});

tape( 'if the `state` property is set to a Uint32Array containing an unsupported version, an error is thrown', function test( t ) {
	var mt19937;
	var values;
	var v;
	var i;

	mt19937 = factory();

	values = [];

	v = new Uint32Array( 631 ); // 624+7
	v[ 0 ] = 0;   // version
	v[ 1 ] = 3;   // number of sections
	v[ 2 ] = 624; // state length
	v[ 627 ] = 1; // other length
	v[ 628 ] = 1; // value <= 624
	v[ 629 ] = 1; // seed length
	values.push( v );

	v = new Uint32Array( 632 ); // >624+7
	v[ 0 ] = 0;   // version
	v[ 1 ] = 3;   // number of sections
	v[ 2 ] = 624; // state length
	v[ 627 ] = 1; // other length
	v[ 628 ] = 1; // value <= 624
	v[ 629 ] = 2; // seed length
	values.push( v );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			mt19937.state = value;
		};
	}
});

tape( 'if the `state` property is set to a Uint32Array containing an unsupported number of sections, an error is thrown', function test( t ) {
	var mt19937;
	var values;
	var v;
	var i;

	mt19937 = factory();

	values = [];

	v = new Uint32Array( 631 ); // 624+7
	v[ 0 ] = 1;   // version
	v[ 1 ] = 9;   // number of sections
	v[ 2 ] = 624; // state length
	v[ 627 ] = 1; // other length
	v[ 628 ] = 1; // value <= 624
	v[ 629 ] = 1; // seed length
	values.push( v );

	v = new Uint32Array( 632 ); // >624+7
	v[ 0 ] = 1;   // version
	v[ 1 ] = 9;   // number of sections
	v[ 2 ] = 624; // state length
	v[ 627 ] = 1; // other length
	v[ 628 ] = 1; // value <= 624
	v[ 629 ] = 2; // seed length
	values.push( v );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			mt19937.state = value;
		};
	}
});

tape( 'if the `state` property is set to a Uint32Array containing an unsupported state length, an error is thrown', function test( t ) {
	var mt19937;
	var values;
	var v;
	var i;

	mt19937 = factory();

	values = [];

	v = new Uint32Array( 632 ); // >624+7
	v[ 0 ] = 1;   // version
	v[ 1 ] = 3;   // number of sections
	v[ 2 ] = 625; // state length
	v[ 628 ] = 1; // other length
	v[ 629 ] = 1; // value <= 624
	v[ 630 ] = 1; // seed length
	values.push( v );

	v = new Uint32Array( 633 ); // >624+7
	v[ 0 ] = 1;   // version
	v[ 1 ] = 3;   // number of sections
	v[ 2 ] = 625; // state length
	v[ 628 ] = 1; // other length
	v[ 629 ] = 1; // value <= 624
	v[ 630 ] = 2; // seed length
	values.push( v );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			mt19937.state = value;
		};
	}
});

tape( 'if the `state` property is set to a Uint32Array containing an unsupported section length, an error is thrown', function test( t ) {
	var mt19937;
	var values;
	var v;
	var i;

	mt19937 = factory();

	values = [];

	v = new Uint32Array( 632 ); // >624+7
	v[ 0 ] = 1;   // version
	v[ 1 ] = 3;   // number of sections
	v[ 2 ] = 624; // state length
	v[ 627 ] = 2; // other length
	v[ 628 ] = 1; // value <= 624
	v[ 630 ] = 1; // seed length
	values.push( v );

	v = new Uint32Array( 633 ); // >624+7
	v[ 0 ] = 1;   // version
	v[ 1 ] = 3;   // number of sections
	v[ 2 ] = 624; // state length
	v[ 627 ] = 2; // other length
	v[ 628 ] = 1; // value <= 624
	v[ 630 ] = 2; // seed length
	values.push( v );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			mt19937.state = value;
		};
	}
});

tape( 'if the `state` property is set to a Uint32Array containing an incompatible seed length, an error is thrown', function test( t ) {
	var mt19937;
	var values;
	var v;
	var i;

	mt19937 = factory();

	values = [];

	v = new Uint32Array( 631 ); // 624+7
	v[ 0 ] = 1;   // version
	v[ 1 ] = 3;   // number of sections
	v[ 2 ] = 624; // state length
	v[ 627 ] = 1; // other length
	v[ 628 ] = 1; // value <= 624
	v[ 629 ] = 9; // seed length
	values.push( v );

	v = new Uint32Array( 632 ); // >624+7
	v[ 0 ] = 1;   // version
	v[ 1 ] = 3;   // number of sections
	v[ 2 ] = 624; // state length
	v[ 627 ] = 1; // other length
	v[ 628 ] = 1; // value <= 624
	v[ 629 ] = 9; // seed length
	values.push( v );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			mt19937.state = value;
		};
	}
});

tape( 'attached to the returned function is a `normalized` method for generating pseudorandom numbers strictly between 0 (inclusive) and 1 (exclusive)', function test( t ) {
	var mt19937;
	var v;
	var i;

	mt19937 = factory();
	for ( i = 0; i < 1e3; i++ ) {
		v = mt19937.normalized();
		t.equal( typeof v, 'number', 'returns a number' );
		t.equal( v >= 0.0 && v < 1.0, true, 'returns a number between 0 (inclusive) and 1 (exclusive)' );
	}
	t.end();
});

tape( 'attached to the `normalized` method is the generator name', function test( t ) {
	var mt19937 = factory();
	t.equal( mt19937.normalized.NAME, 'mt19937', 'has property' );
	t.end();
});

tape( 'attached to the `normalized` method is the minimum possible generated number', function test( t ) {
	var mt19937 = factory();
	t.equal( mt19937.normalized.MIN, 0.0, 'has property' );
	t.end();
});

tape( 'attached to the `normalized` method is the maximum possible generated number', function test( t ) {
	var mt19937 = factory();
	t.equal( mt19937.normalized.MAX, FLOAT64_MAX_SAFE_INTEGER/(FLOAT64_MAX_SAFE_INTEGER+1), 'has property' );
	t.end();
});

tape( 'attached to the `normalized` method is the generator seed (integer seed)', function test( t ) {
	var mt19937;
	var actual;

	mt19937 = factory({
		'seed': 12345
	});
	actual = mt19937.normalized.seed;

	t.equal( isUint32Array( actual ), true, 'has property' );
	t.equal( actual.length, 1, 'has expected length' );
	t.equal( actual[ 0 ], 12345, 'equal to provided seed' );
	t.end();
});

tape( 'attached to the `normalized` method is the generator seed (array seed; length=1)', function test( t ) {
	var mt19937;
	var actual;

	mt19937 = factory({
		'seed': [ 12345 ]
	});
	actual = mt19937.normalized.seed;

	t.equal( isUint32Array( actual ), true, 'has property' );
	t.equal( actual.length, 1, 'has expected length' );
	t.equal( actual[ 0 ], 12345, 'equal to provided seed' );
	t.end();
});

tape( 'attached to the `normalized` method is the generator seed (array seed; length>1)', function test( t ) {
	var mt19937;
	var actual;
	var seed;
	var i;

	seed = [ minstd(), minstd(), minstd(), minstd(), minstd() ];
	mt19937 = factory({
		'seed': seed
	});

	actual = mt19937.normalized.seed;
	t.equal( isUint32Array( actual ), true, 'has property' );
	for ( i = 0; i < seed.length; i++ ) {
		t.equal( actual[ i ], seed[ i ], 'returns expected value for word '+i );
	}
	t.end();
});

tape( 'attached to the `normalized` method is the generator seed length', function test( t ) {
	var mt19937 = factory();
	t.equal( typeof mt19937.normalized.seedLength, 'number', 'has property' );
	t.end();
});

tape( 'attached to the `normalized` method is the generator state', function test( t ) {
	var mt19937 = factory();
	t.equal( isUint32Array( mt19937.normalized.state ), true, 'has property' );
	t.end();
});

tape( 'attached to the `normalized` method is the generator state size', function test( t ) {
	var mt19937 = factory();
	t.equal( typeof mt19937.normalized.byteLength, 'number', 'has property' );
	t.end();
});

tape( 'attached to the `normalized` method is the generator state length', function test( t ) {
	var mt19937 = factory();
	t.equal( typeof mt19937.normalized.stateLength, 'number', 'has property' );
	t.end();
});

tape( 'attached to the `normalized` method is a method to serialize the generator as a JSON object', function test( t ) {
	var mt19937;
	var o;

	mt19937 = factory();
	t.equal( typeof mt19937.normalized.toJSON, 'function', 'has method' );

	o = mt19937.normalized.toJSON();
	t.equal( o.type, 'PRNG', 'has property' );
	t.equal( o.name, mt19937.normalized.NAME, 'has property' );
	t.deepEqual( o.state, typedarray2json( mt19937.normalized.state ), 'has property' );

	t.end();
});

tape( 'if the `state` property is set to a value other than a Uint32Array, an error is thrown (normalized)', function test( t ) {
	var mt19937;
	var values;
	var i;

	mt19937 = factory();

	values = [
		'3',
		3,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when set to '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			mt19937.normalized.state = value;
		};
	}
});

tape( 'if the `state` property is set to a Uint32Array having an unexpected length, an error is thrown (normalized)', function test( t ) {
	var mt19937;
	var values;
	var i;

	mt19937 = factory();

	values = [
		new Uint32Array( 0 ),
		new Uint32Array( 10 ),
		new Uint32Array( 20 )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when set to '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			mt19937.normalized.state = value;
		};
	}
});

tape( 'if the `state` property is set to a Uint32Array containing an unsupported version, an error is thrown (normalized)', function test( t ) {
	var mt19937;
	var values;
	var v;
	var i;

	mt19937 = factory();

	values = [];

	v = new Uint32Array( 631 ); // 624+7
	v[ 0 ] = 0;   // version
	v[ 1 ] = 3;   // number of sections
	v[ 2 ] = 624; // state length
	v[ 627 ] = 1; // other length
	v[ 628 ] = 1; // value <= 624
	v[ 629 ] = 1; // seed length
	values.push( v );

	v = new Uint32Array( 632 ); // >624+7
	v[ 0 ] = 0;   // version
	v[ 1 ] = 3;   // number of sections
	v[ 2 ] = 624; // state length
	v[ 627 ] = 1; // other length
	v[ 628 ] = 1; // value <= 624
	v[ 629 ] = 2; // seed length
	values.push( v );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			mt19937.normalized.state = value;
		};
	}
});

tape( 'if the `state` property is set to a Uint32Array containing an unsupported number of sections, an error is thrown (normalized)', function test( t ) {
	var mt19937;
	var values;
	var v;
	var i;

	mt19937 = factory();

	values = [];

	v = new Uint32Array( 631 ); // 624+7
	v[ 0 ] = 1;   // version
	v[ 1 ] = 9;   // number of sections
	v[ 2 ] = 624; // state length
	v[ 627 ] = 1; // other length
	v[ 628 ] = 1; // value <= 624
	v[ 629 ] = 1; // seed length
	values.push( v );

	v = new Uint32Array( 632 ); // >624+7
	v[ 0 ] = 1;   // version
	v[ 1 ] = 9;   // number of sections
	v[ 2 ] = 624; // state length
	v[ 627 ] = 1; // other length
	v[ 628 ] = 1; // value <= 624
	v[ 629 ] = 2; // seed length
	values.push( v );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			mt19937.normalized.state = value;
		};
	}
});

tape( 'if the `state` property is set to a Uint32Array containing an unsupported state length, an error is thrown (normalized)', function test( t ) {
	var mt19937;
	var values;
	var v;
	var i;

	mt19937 = factory();

	values = [];

	v = new Uint32Array( 632 ); // >624+7
	v[ 0 ] = 1;   // version
	v[ 1 ] = 3;   // number of sections
	v[ 2 ] = 625; // state length
	v[ 628 ] = 1; // other length
	v[ 629 ] = 1; // value <= 624
	v[ 630 ] = 1; // seed length
	values.push( v );

	v = new Uint32Array( 633 ); // >624+7
	v[ 0 ] = 1;   // version
	v[ 1 ] = 3;   // number of sections
	v[ 2 ] = 625; // state length
	v[ 628 ] = 1; // other length
	v[ 629 ] = 1; // value <= 624
	v[ 630 ] = 2; // seed length
	values.push( v );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			mt19937.normalized.state = value;
		};
	}
});

tape( 'if the `state` property is set to a Uint32Array containing an unsupported section length, an error is thrown (normalized)', function test( t ) {
	var mt19937;
	var values;
	var v;
	var i;

	mt19937 = factory();

	values = [];

	v = new Uint32Array( 632 ); // >624+7
	v[ 0 ] = 1;   // version
	v[ 1 ] = 3;   // number of sections
	v[ 2 ] = 624; // state length
	v[ 627 ] = 2; // other length
	v[ 628 ] = 1; // value <= 624
	v[ 630 ] = 1; // seed length
	values.push( v );

	v = new Uint32Array( 633 ); // >624+7
	v[ 0 ] = 1;   // version
	v[ 1 ] = 3;   // number of sections
	v[ 2 ] = 624; // state length
	v[ 627 ] = 2; // other length
	v[ 628 ] = 1; // value <= 624
	v[ 630 ] = 2; // seed length
	values.push( v );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			mt19937.normalized.state = value;
		};
	}
});

tape( 'if the `state` property is set to a Uint32Array containing an incompatible seed length, an error is thrown (normalized)', function test( t ) {
	var mt19937;
	var values;
	var v;
	var i;

	mt19937 = factory();

	values = [];

	v = new Uint32Array( 631 ); // 624+7
	v[ 0 ] = 1;   // version
	v[ 1 ] = 3;   // number of sections
	v[ 2 ] = 624; // state length
	v[ 627 ] = 1; // other length
	v[ 628 ] = 1; // value <= 624
	v[ 629 ] = 9; // seed length
	values.push( v );

	v = new Uint32Array( 632 ); // >624+7
	v[ 0 ] = 1;   // version
	v[ 1 ] = 3;   // number of sections
	v[ 2 ] = 624; // state length
	v[ 627 ] = 1; // other length
	v[ 628 ] = 1; // value <= 624
	v[ 629 ] = 9; // seed length
	values.push( v );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			mt19937.normalized.state = value;
		};
	}
});

tape( 'the `normalized` method returns pseudorandom numbers drawn from a uniform distribution', opts, function test( t ) {
	var threshold;
	var count;
	var npass;
	var N;
	var x;

	threshold = 0.10;

	x = new Array( 1e3 );
	N = 500;

	count = -1;
	npass = 0;

	gof();

	function gof() {
		var rejected;
		var mt19937;
		var pValue;
		var bool;
		var i;
		var j;

		count += 1;
		rejected = 0;
		for ( i = 0; i < N; i++ ) {
			mt19937 = factory();
			t.ok( true, 'seed: '+mt19937.seed );
			for ( j = 0; j < x.length; j++ ) {
				x[ j ] = mt19937.normalized();
				if ( x[ j ] < 0.0 || x[ j ] > 1.0 ) {
					t.ok( false, 'returned a number outside support: '+x[ j ] );
				}
			}
			// Test using Kolmogorov-Smirnov goodness-of-fit test:
			pValue = kstest( x, 'uniform', 0.0, 1.0 ).pValue;
			t.equal( typeof pValue, 'number', 'returns a p-value: '+pValue );
			if ( pValue < 0.05 ) {
				rejected += 1;
			}
		}
		// Account for small sample size and few repeats...
		bool = ( rejected / N < threshold );

		// If we succeed the first time, we are done...
		if ( count === 0 && bool ) {
			return done( bool, rejected );
		}
		// Retry mode...
		if ( bool ) {
			npass += 1;
		}
		// Retry twice...
		if ( count < 2 ) {
			return gof();
		}
		// Both retries must succeed for test to pass:
		bool = ( npass >= 2 );
		return done( bool, rejected );
	}

	function done( bool, rejected ) {
		t.ok( bool, 'null hypothesis (i.e., that numbers are drawn from Uniform(0,1)) is rejected in less than '+(threshold*100)+'% of cases ('+rejected+' of '+N+'). Repeats: '+npass+' of '+count+'.' );
		t.end();
	}
});

tape( 'the function returns pseudorandom numbers from a Mersenne Twister PRNG (integer seed)', function test( t ) {
	var expected;
	var rand;
	var i;

	expected = UINT32_INTEGER_SEED.expected;
	rand = factory({
		'seed': 1234
	});
	for ( i = 0; i < expected.length; i++ ) {
		t.equal( rand(), expected[ i ], 'returns expected value for iteration '+i );
	}
	t.end();
});

tape( 'the function returns pseudorandom numbers from a Mersenne Twister PRNG (array seed; length=1)', function test( t ) {
	var expected;
	var rand;
	var i;

	expected = UINT32_INTEGER_SEED.expected;
	rand = factory({
		'seed': [ 1234 ]
	});
	for ( i = 0; i < expected.length; i++ ) {
		t.equal( rand(), expected[ i ], 'returns expected value for iteration '+i );
	}
	t.end();
});

tape( 'the function returns pseudorandom numbers from a Mersenne Twister PRNG (array seed; length>1)', function test( t ) {
	var expected;
	var rand;
	var i;

	expected = UINT32_ARRAY_SEED.expected;
	rand = factory({
		'seed': [ 291, 564, 837, 1110 ]
	});
	for ( i = 0; i < expected.length; i++ ) {
		t.equal( rand(), expected[ i ], 'returns expected value for iteration '+i );
	}
	t.end();
});

tape( 'the `normalized` method returns pseudorandom double-precision floating-point numbers from a Mersenne Twister PRNG (integer seed)', function test( t ) {
	var expected;
	var opts;
	var rand;
	var i;

	expected = FLOAT64_INTEGER_SEED.expected;

	opts = {
		'seed': 1234
	};
	rand = factory( opts ).normalized;
	for ( i = 0; i < expected.length; i++ ) {
		t.equal( rand(), expected[ i ], 'returns expected value for iteration '+i );
	}
	t.end();
});

tape( 'the `normalized` method returns pseudorandom double-precision floating-point numbers from a Mersenne Twister PRNG (array seed; length=1)', function test( t ) {
	var expected;
	var opts;
	var rand;
	var i;

	expected = FLOAT64_INTEGER_SEED.expected;

	opts = {
		'seed': [ 1234 ]
	};
	rand = factory( opts ).normalized;
	for ( i = 0; i < expected.length; i++ ) {
		t.equal( rand(), expected[ i ], 'returns expected value for iteration '+i );
	}
	t.end();
});

tape( 'the `normalized` method returns pseudorandom double-precision floating-point numbers from a Mersenne Twister PRNG (array seed; length>1)', function test( t ) {
	var expected;
	var opts;
	var rand;
	var i;

	expected = FLOAT64_ARRAY_SEED.expected;

	opts = {
		'seed': [ 291, 564, 837, 1110 ]
	};
	rand = factory( opts ).normalized;
	for ( i = 0; i < expected.length; i++ ) {
		t.equal( rand(), expected[ i ], 'returns expected value for iteration '+i );
	}
	t.end();
});

tape( 'the function supports specifying the generator state', function test( t ) {
	var mt19937;
	var state;
	var arr;
	var i;

	mt19937 = factory();

	// Move to a future state...
	for ( i = 0; i < 100; i++ ) {
		mt19937();
	}
	// Capture the current state:
	state = mt19937.state;

	// Move to a future state...
	arr = [];
	for ( i = 0; i < 100; i++ ) {
		arr.push( mt19937() );
	}

	// Create another PRNG using the captured state:
	mt19937 = factory({
		'state': state
	});

	// Replay previously generated values...
	for ( i = 0; i < 100; i++ ) {
		t.equal( mt19937(), arr[ i ], 'returns expected value. i: '+i+'.' );
	}
	t.end();
});

tape( 'the function supports specifying a shared generator state', function test( t ) {
	var mt19937;
	var shared;
	var state;
	var rand1;
	var rand2;
	var arr;
	var v1;
	var v2;
	var i;
	var j;

	mt19937 = factory();

	// Move to a future state...
	for ( i = 0; i < 100; i++ ) {
		mt19937();
	}
	// Capture the current state:
	state = mt19937.state;

	// Move to a future state...
	arr = [];
	for ( i = 0; i < 100; i++ ) {
		arr.push( mt19937() );
	}

	// Create a copy of the state (to prevent mutation) which will be shared by more than one PRNG:
	shared = new Uint32Array( state );

	// Create PRNGs using the captured state:
	rand1 = factory({
		'state': shared,
		'copy': false
	});
	rand2 = factory({
		'state': shared,
		'copy': false
	});

	// Replay previously generated values...
	j = 0;
	for ( i = 0; i < 50; i++ ) {
		v1 = rand1();
		v2 = rand2();
		t.equal( v1, arr[ j ], 'returns expected value. i: '+j+'.' );
		t.equal( v2, arr[ j+1 ], 'returns expected value. i: '+(j+1)+'.' );
		j += 2; // stride
	}
	t.end();
});

tape( 'the returned function supports setting the generator state', function test( t ) {
	var mt19937;
	var state;
	var arr;
	var i;

	mt19937 = factory();

	// Move to a future state...
	for ( i = 0; i < 100; i++ ) {
		mt19937();
	}
	// Capture the current state:
	state = mt19937.state;

	// Move to a future state...
	arr = [];
	for ( i = 0; i < 100; i++ ) {
		arr.push( mt19937() );
	}
	// Set the state:
	mt19937.state = state;

	// Replay previously generated values...
	for ( i = 0; i < 100; i++ ) {
		t.equal( mt19937(), arr[ i ], 'returns expected value. i: '+i+'.' );
	}
	t.end();
});

tape( 'the returned function supports setting the generator state to a state array having a different length', function test( t ) {
	var mt19937;
	var shared;
	var state;
	var rand1;
	var rand2;
	var arr;
	var v1;
	var v2;
	var i;

	// Seed length: 2
	mt19937 = factory({
		'seed': [ 1234, 5678 ]
	});

	// Move to a future state...
	for ( i = 0; i < 100; i++ ) {
		mt19937();
	}
	// Capture the current state:
	state = mt19937.state;

	// Move to a future state...
	arr = [];
	for ( i = 0; i < 100; i++ ) {
		arr.push( mt19937() );
	}

	// Create a copy of the state (to prevent mutation) which will be shared by more than one PRNG:
	shared = new Uint32Array( state );

	// Create PRNGs having seed lengths equal to 1:
	rand1 = factory({
		'seed': [ 6789 ]
	});
	rand2 = factory({
		'seed': [ 4321 ]
	});

	// Move to future states...
	for ( i = 0; i < 100; i++ ) {
		v1 = rand1();
		v2 = rand2();
	}

	// Reset the PRNG states:
	rand1.state = shared;
	rand2.state = shared;

	// Replay previously generated values...
	for ( i = 0; i < 100; i++ ) {
		v1 = rand1();
		t.equal( v1, arr[ i ], 'returns expected value. i: '+i+'.' );
		v2 = rand2();
		t.equal( v2, arr[ i ], 'returns expected value. i: '+i+'.' );
	}
	t.end();
});

tape( 'the returned function supports setting the generator state (normalized)', function test( t ) {
	var mt19937;
	var state;
	var arr;
	var i;

	mt19937 = factory();

	// Move to a future state...
	for ( i = 0; i < 100; i++ ) {
		mt19937.normalized();
	}
	// Capture the current state:
	state = mt19937.state;

	// Move to a future state...
	arr = [];
	for ( i = 0; i < 100; i++ ) {
		arr.push( mt19937.normalized() );
	}
	// Set the state:
	mt19937.state = state;

	// Replay previously generated values...
	for ( i = 0; i < 100; i++ ) {
		t.equal( mt19937.normalized(), arr[ i ], 'returns expected value. i: '+i+'.' );
	}
	t.end();
});

tape( 'the returned function supports setting the generator state (normalized)', function test( t ) {
	var mt19937;
	var state;
	var arr;
	var i;

	mt19937 = factory();

	// Move to a future state...
	for ( i = 0; i < 100; i++ ) {
		mt19937.normalized();
	}
	// Capture the current state:
	state = mt19937.normalized.state;

	// Move to a future state...
	arr = [];
	for ( i = 0; i < 100; i++ ) {
		arr.push( mt19937.normalized() );
	}
	// Set the state:
	mt19937.normalized.state = state;

	// Replay previously generated values...
	for ( i = 0; i < 100; i++ ) {
		t.equal( mt19937.normalized(), arr[ i ], 'returns expected value. i: '+i+'.' );
	}
	t.end();
});

tape( 'the returned function supports setting a shared generator state (same length)', function test( t ) {
	var mt19937;
	var shared;
	var state;
	var rand1;
	var rand2;
	var arr;
	var v1;
	var v2;
	var i;
	var j;

	mt19937 = factory();

	// Move to a future state...
	for ( i = 0; i < 100; i++ ) {
		mt19937();
	}
	// Capture the current state:
	state = mt19937.state;

	// Move to a future state...
	arr = [];
	for ( i = 0; i < 100; i++ ) {
		arr.push( mt19937() );
	}

	// Create a copy of the state (to prevent mutation) which will be shared by more than one PRNG:
	shared = new Uint32Array( state );

	// Create PRNGs using the captured state:
	rand1 = factory({
		'state': shared,
		'copy': false
	});
	rand2 = factory({
		'state': shared,
		'copy': false
	});

	// Replay previously generated values...
	j = 0;
	for ( i = 0; i < 50; i++ ) {
		v1 = rand1();
		v2 = rand2();
		t.equal( v1, arr[ j ], 'returns expected value. i: '+j+'.' );
		t.equal( v2, arr[ j+1 ], 'returns expected value. i: '+(j+1)+'.' );
		j += 2; // stride
	}

	// Move to a future state...
	for ( i = 0; i < 100; i++ ) {
		v2 = rand2();
	}

	// Reset the (shared) state:
	rand1.state = new Uint32Array( state );

	// Replay previously generated values...
	j = 0;
	for ( i = 0; i < 50; i++ ) {
		v1 = rand1();
		v2 = rand2();
		t.equal( v1, arr[ j ], 'returns expected value. i: '+j+'.' );
		t.equal( v2, arr[ j+1 ], 'returns expected value. i: '+(j+1)+'.' );
		j += 2; // stride
	}
	t.end();
});

tape( 'the returned function supports setting a shared generator state (different length)', function test( t ) {
	var mt19937;
	var shared;
	var state;
	var rand1;
	var rand2;
	var arr;
	var v1;
	var v2;
	var s;
	var i;
	var j;

	mt19937 = factory();

	// Move to a future state...
	for ( i = 0; i < 100; i++ ) {
		mt19937();
	}
	// Capture the current state:
	state = mt19937.state;

	// Move to a future state...
	arr = [];
	for ( i = 0; i < 100; i++ ) {
		arr.push( mt19937() );
	}

	// Create a copy of the state (to prevent mutation) which will be shared by more than one PRNG:
	shared = new Uint32Array( state );

	// Create PRNGs using the captured state:
	rand1 = factory({
		'state': shared,
		'copy': false
	});
	rand2 = factory({
		'state': shared,
		'copy': false
	});

	// Replay previously generated values...
	j = 0;
	for ( i = 0; i < 50; i++ ) {
		v1 = rand1();
		v2 = rand2();
		t.equal( v1, arr[ j ], 'returns expected value. i: '+j+'.' );
		t.equal( v2, arr[ j+1 ], 'returns expected value. i: '+(j+1)+'.' );
		j += 2; // stride
	}

	// Move to a future state...
	for ( i = 0; i < 100; i++ ) {
		v2 = rand2();
	}

	// Reset the (*previously* shared) state:
	s = new Uint32Array( state.length+1 );
	gcopy( state.length, state, 1, s, 1 );
	s[ s.length-3 ] = 2;
	s[ s.length-1 ] = 1234;
	rand1.state = s;

	// Attempt to replay previously generated values...
	j = 0;
	for ( i = 0; i < 50; i++ ) {
		v1 = rand1();
		v2 = rand2();

		// `rand1()` state is not affected by `rand2()`:
		t.equal( v1, arr[ i ], 'returns expected value. i: '+i+'.' );

		// `rand2()` state was never reset:
		t.notEqual( v2, arr[ j+1 ], 'does not return expected value. i: '+(j+1)+'.' );
		j += 2; // stride
	}

	// Reset the (*previously* shared) state:
	rand2.state = s;

	// Reset to a shared state:
	shared = new Uint32Array( state );
	rand1.state = shared;
	rand2.state = shared;

	// Replay previously generated values...
	j = 0;
	for ( i = 0; i < 50; i++ ) {
		v1 = rand1();
		v2 = rand2();
		t.equal( v1, arr[ j ], 'returns expected value. i: '+j+'.' );
		t.equal( v2, arr[ j+1 ], 'returns expected value. i: '+(j+1)+'.' );
		j += 2; // stride
	}
	t.end();
});

tape( 'the returned function supports setting a shared generator state (no initial shared state)', function test( t ) {
	var mt19937;
	var shared;
	var state;
	var rand1;
	var rand2;
	var arr;
	var v1;
	var v2;
	var i;
	var j;

	mt19937 = factory();

	// Move to a future state...
	for ( i = 0; i < 100; i++ ) {
		mt19937();
	}
	// Capture the current state:
	state = mt19937.state;

	// Create a copy of the state (to prevent mutation) which will be shared by more than one PRNG:
	shared = new Uint32Array( state );

	// Move to a future state...
	arr = [];
	for ( i = 0; i < 100; i++ ) {
		arr.push( mt19937() );
	}

	// Create PRNGs using the captured state:
	rand1 = factory({
		'copy': false
	});
	rand2 = factory({
		'copy': false
	});

	// Move to a future state...
	for ( i = 0; i < 100; i++ ) {
		v1 = rand1();
		v2 = rand2();
	}

	// Reset to a shared state:
	rand1.state = shared;
	rand2.state = shared;

	// Replay previously generated values...
	j = 0;
	for ( i = 0; i < 50; i++ ) {
		v1 = rand1();
		v2 = rand2();
		t.equal( v1, arr[ j ], 'returns expected value. i: '+j+'.' );
		t.equal( v2, arr[ j+1 ], 'returns expected value. i: '+(j+1)+'.' );
		j += 2; // stride
	}

	// Create a copy of the state (to prevent mutation) which will be shared by more than one PRNG:
	shared = new Uint32Array( state );

	// Reset the (shared) state:
	rand1.state = shared;
	rand2.state = shared;

	// Replay previously generated values...
	j = 0;
	for ( i = 0; i < 50; i++ ) {
		v1 = rand1();
		v2 = rand2();
		t.equal( v1, arr[ j ], 'returns expected value. i: '+j+'.' );
		t.equal( v2, arr[ j+1 ], 'returns expected value. i: '+(j+1)+'.' );
		j += 2; // stride
	}
	t.end();
});
