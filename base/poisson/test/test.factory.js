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
var chi2gof = require( '@stdlib/stats/chi2gof' );
var now = require( '@stdlib/time/now' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var isUint32Array = require( '@stdlib/assert/is-uint32array' );
var UINT32_MAX = require( '@stdlib/constants/uint32/max' );
var Uint32Array = require( '@stdlib/array/uint32' );
var typedarray2json = require( '@stdlib/array/to-json' );
var minstd = require( './../../../base/minstd' );
var factory = require( './../lib/factory.js' );


// VARIABLES //

var opts = {
	'skip': ( ENV.TEST_MODE === 'coverage' )
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof factory, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a mean which is not a positive number (no options)', function test( t ) {
	var values;
	var i;

	values = [
		-2.0,
		0.0,
		'5',
		null,
		true,
		false,
		void 0,
		NaN,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory( value );
		};
	}
});

tape( 'the function throws an error if provided a mean which is not a positive number (options)', function test( t ) {
	var values;
	var i;

	values = [
		-2.0,
		0.0,
		'5',
		null,
		true,
		false,
		void 0,
		NaN,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory( value, {} );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not object (no other arguments)', function test( t ) {
	var values;
	var i;

	values = [
		'abc',
		null,
		true,
		false,
		void 0,
		NaN,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory( value );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object (other arguments)', function test( t ) {
	var values;
	var i;

	values = [
		'abc',
		5,
		null,
		true,
		false,
		void 0,
		NaN,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory( 10.0, value );
		};
	}
});

tape( 'if provided a `prng` option which is not a function, the function throws an error', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory({
				'prng': value
			});
		};
	}
});

tape( 'if provided a `prng` option which is not a function, the function throws an error (other arguments)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory( 10.0, {
				'prng': value
			});
		};
	}
});

tape( 'if provided a `copy` option which is not a boolean, the function throws an error', function test( t ) {
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

tape( 'if provided a `seed` which is not a positive integer or a non-empty array-like object, the function throws an error', function test( t ) {
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

tape( 'the function throws a range error if provided a `seed` which is an integer greater than the maximum unsigned 32-bit integer', function test( t ) {
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

tape( 'if provided a `state` option which is not a Uint32Array, the function throws an error', function test( t ) {
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

tape( 'if provided an invalid `state` option, the function throws an error', function test( t ) {
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

tape( 'the function returns a pseudorandom number generator (no seed)', function test( t ) {
	var poisson;
	var r;
	var i;

	// When binding distribution parameters...
	poisson = factory( 2.0 );
	for ( i = 0; i < 100; i++ ) {
		r = poisson();
		t.equal( typeof r, 'number', 'returns a number' );
	}

	// Without binding distribution parameters...
	poisson = factory();
	for ( i = 0; i < 100; i++ ) {
		r = poisson( 100.0 );
		t.equal( typeof r, 'number', 'returns a number' );
	}

	t.end();
});

tape( 'the function returns a seeded pseudorandom number generator (integer seed)', function test( t ) {
	var poisson1;
	var poisson2;
	var seed;
	var r1;
	var r2;
	var i;

	seed = now();

	poisson1 = factory( 35.0, {
		'seed': seed
	});
	poisson2 = factory( 35.0, {
		'seed': seed
	});

	t.notEqual( poisson1, poisson2, 'separate generators' );

	for ( i = 0; i < 100; i++ ) {
		r1 = poisson1();
		r2 = poisson2();
		t.equal( r1, r2, 'both return same number' );
	}
	t.end();
});

tape( 'the function returns a seeded pseudorandom number generator (array seed)', function test( t ) {
	var poisson1;
	var poisson2;
	var seed;
	var r1;
	var r2;
	var i;

	seed = [ now()+1, now()+2, now()+3 ];

	poisson1 = factory( 35.0, {
		'seed': seed
	});
	poisson2 = factory( 35.0, {
		'seed': seed
	});

	t.notEqual( poisson1, poisson2, 'separate generators' );

	for ( i = 0; i < 100; i++ ) {
		r1 = poisson1();
		r2 = poisson2();
		t.equal( r1, r2, 'both return same number' );
	}
	t.end();
});

tape( 'attached to the returned function is the generator name', function test( t ) {
	var poisson = factory();
	t.equal( poisson.NAME, 'poisson', 'has property' );
	t.end();
});

tape( 'attached to the returned function is the underlying PRNG', function test( t ) {
	var poisson = factory();
	t.equal( typeof poisson.PRNG, 'function', 'has property' );

	poisson = factory({
		'prng': minstd.normalized
	});
	t.equal( poisson.PRNG, minstd.normalized, 'has property' );
	t.end();
});

tape( 'attached to the returned function is the generator seed (integer seed)', function test( t ) {
	var poisson = factory({
		'seed': 12345
	});
	t.equal( isUint32Array( poisson.seed ), true, 'has property' );
	t.equal( poisson.seed[ 0 ], 12345, 'equal to provided seed' );

	poisson = factory({
		'seed': 12345,
		'prng': minstd.normalized
	});
	t.equal( poisson.seed, null, 'equal to `null`' );
	t.end();
});

tape( 'attached to the returned function is the generator seed (array seed)', function test( t ) {
	var actual;
	var rand;
	var seed;
	var i;

	seed = [ 1234, 5678 ];
	rand = factory({
		'seed': seed
	});

	actual = rand.seed;
	t.equal( isUint32Array( actual ), true, 'has property' );
	for ( i = 0; i < seed.length; i++ ) {
		t.equal( actual[ i ], seed[ i ], 'returns expected value for word '+i );
	}
	t.end();
});

tape( 'attached to the returned function is the generator seed length', function test( t ) {
	var poisson = factory();
	t.equal( typeof poisson.seedLength, 'number', 'has property' );

	poisson = factory({
		'prng': minstd.normalized
	});
	t.equal( poisson.seedLength, null, 'equal to `null`' );
	t.end();
});

tape( 'attached to the returned function is the generator state', function test( t ) {
	var poisson = factory();
	t.equal( isUint32Array( poisson.state ), true, 'has property' );

	poisson = factory({
		'prng': minstd.normalized
	});
	t.equal( poisson.state, null, 'equal to `null`' );
	t.end();
});

tape( 'attached to the returned function is the generator state length', function test( t ) {
	var poisson = factory();
	t.equal( typeof poisson.stateLength, 'number', 'has property' );

	poisson = factory({
		'prng': minstd.normalized
	});
	t.equal( poisson.stateLength, null, 'equal to `null`' );
	t.end();
});

tape( 'attached to the returned function is the generator state size', function test( t ) {
	var poisson = factory();
	t.equal( typeof poisson.byteLength, 'number', 'has property' );

	poisson = factory({
		'prng': minstd.normalized
	});
	t.equal( poisson.byteLength, null, 'equal to `null`' );
	t.end();
});

tape( 'attached to the returned function is a method to serialize the generator as a JSON object', function test( t ) {
	var poisson;
	var o;

	poisson = factory();
	t.equal( typeof poisson.toJSON, 'function', 'has method' );

	o = poisson.toJSON();
	t.equal( o.type, 'PRNG', 'has property' );
	t.equal( o.name, poisson.NAME, 'has property' );
	t.deepEqual( o.state, typedarray2json( poisson.state ), 'has property' );
	t.deepEqual( o.params, [], 'has property' );

	poisson = factory( 10.0 );
	o = poisson.toJSON();

	t.deepEqual( o.params, [ 10.0 ], 'has property' );

	poisson = factory({
		'prng': minstd.normalized
	});
	t.equal( typeof poisson.toJSON, 'function', 'has method' );
	t.equal( poisson.toJSON(), null, 'returns expected value' );

	t.end();
});

tape( 'when called without arguments, the function returns a PRNG that returns `NaN` when provided a mean equal to `NaN`', function test( t ) {
	var poisson;
	var r;

	poisson = factory();
	r = poisson( NaN );

	t.strictEqual( isnan( r ), true, 'returns NaN' );
	t.end();
});

tape( 'when called without arguments, the function returns a PRNG that returns `NaN` when provided a mean which is not a positive number', function test( t ) {
	var poisson;
	var r;

	poisson = factory();

	r = poisson( 0 );
	t.strictEqual( isnan( r ), true, 'returns NaN' );

	r = poisson( -1 );
	t.strictEqual( isnan( r ), true, 'returns NaN' );

	r = poisson( -3.14 );
	t.strictEqual( isnan( r ), true, 'returns NaN' );

	t.end();
});

tape( 'the function supports specifying the underlying PRNG', function test( t ) {
	var poisson;
	var r;
	var i;

	poisson = factory( 100.0, {
		'prng': minstd.normalized
	});

	for ( i = 0; i < 1e2; i++ ) {
		r = poisson();
		t.equal( typeof r, 'number', 'returns a number' );
	}
	t.end();
});

tape( 'the function supports specifying the underlying PRNG (parameters)', function test( t ) {
	var poisson;
	var r;
	var i;

	poisson = factory({
		'prng': minstd.normalized
	});

	for ( i = 0; i < 1e2; i++ ) {
		r = poisson( 10.0 );
		t.equal( typeof r, 'number', 'returns a number' );
	}
	t.end();
});

tape( 'the function supports providing a seeded underlying PRNG', function test( t ) {
	var poisson1;
	var poisson2;
	var randu;
	var seed;
	var r1;
	var r2;
	var i;

	seed = now();

	randu = minstd.factory({
		'seed': seed
	});
	poisson1 = factory( 100.0, {
		'prng': randu.normalized
	});

	randu = minstd.factory({
		'seed': seed
	});
	poisson2 = factory( 100.0, {
		'prng': randu.normalized
	});

	t.notEqual( poisson1, poisson2, 'separate generators' );

	for ( i = 0; i < 1e2; i++ ) {
		r1 = poisson1();
		r2 = poisson2();
		t.equal( r1, r2, 'both return same number' );
	}
	t.end();
});

tape( 'the function supports providing a seeded underlying PRNG (parameters)', function test( t ) {
	var poisson1;
	var poisson2;
	var randu;
	var seed;
	var r1;
	var r2;
	var i;

	seed = now();

	randu = minstd.factory({
		'seed': seed
	});
	poisson1 = factory({
		'prng': randu.normalized
	});

	randu = minstd.factory({
		'seed': seed
	});
	poisson2 = factory({
		'prng': randu.normalized
	});

	t.notEqual( poisson1, poisson2, 'separate generators' );

	for ( i = 0; i < 1e2; i++ ) {
		r1 = poisson1( 10.0 );
		r2 = poisson2( 10.0 );
		t.equal( r1, r2, 'both return same number' );
	}
	t.end();
});

tape( 'the function returns a PRNG for generating random numbers from a Poisson distribution (lambda < 30)', opts, function test( t ) {
	var threshold;
	var repeats;
	var lambda;
	var count;
	var npass;
	var freq;
	var N;
	var x;

	threshold = 0.15;

	lambda = 0.73;

	freq = new Array( 30 );
	repeats = 200;
	N = 1e3;

	count = -1;
	npass = 0;

	gof();

	function gof() {
		var rejected;
		var poisson;
		var pValue;
		var bool;
		var i;
		var j;

		count += 1;
		rejected = 0;
		for ( i = 0; i < repeats; i++ ) {
			poisson = factory( lambda );
			t.ok( true, 'seed: '+poisson.seed );

			// Reset the `freq` array...
			for ( j = 0; j < freq.length; j++ ) {
				freq[ j ] = 0;
			}
			for ( j = 0; j < N; j++ ) {
				x = poisson();
				freq[ x ] += 1;
			}
			// Test using chi-square goodness-of-fit test:
			pValue = chi2gof( freq, 'poisson', lambda, {
				'simulate': true,
				'iterations': 500
			}).pValue;
			t.equal( typeof pValue, 'number', 'returns a p-value: '+pValue );
			if ( pValue < 0.05 ) {
				rejected += 1;
			}
		}
		// Account for small sample sizes and few repeats...
		bool = ( rejected / repeats < threshold );

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
		t.ok( bool, 'null hypothesis (i.e., that numbers are drawn from Poisson('+lambda+') is rejected in less than '+(threshold*100)+'% of cases ('+rejected+' of '+repeats+'). Repeats: '+npass+' of '+count+'.' );
		t.end();
	}
});

tape( 'the function returns a PRNG for generating random numbers from a Poisson distribution (lambda > 30)', opts, function test( t ) {
	var threshold;
	var repeats;
	var lambda;
	var count;
	var npass;
	var freq;
	var N;
	var x;

	threshold = 0.15;

	lambda = 35.7;

	freq = new Array( 300 );
	repeats = 100;
	N = 1e3;

	count = -1;
	npass = 0;

	gof();

	function gof() {
		var rejected;
		var poisson;
		var pValue;
		var bool;
		var i;
		var j;

		count += 1;
		rejected = 0;
		for ( i = 0; i < repeats; i++ ) {
			poisson = factory( lambda );
			t.ok( true, 'seed: '+poisson.seed );

			// Reset the `freq` array...
			for ( j = 0; j < freq.length; j++ ) {
				freq[ j ] = 0;
			}
			for ( j = 0; j < N; j++ ) {
				x = poisson();
				freq[ x ] += 1;
			}
			// Test using chi-square goodness-of-fit test:
			pValue = chi2gof( freq, 'poisson', lambda, {
				'simulate': true,
				'iterations': 500
			}).pValue;
			t.equal( typeof pValue, 'number', 'returns a p-value: '+pValue );
			if ( pValue < 0.05 ) {
				rejected += 1;
			}
		}
		// Account for small sample sizes and few repeats...
		bool = ( rejected / repeats < threshold );

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
		t.ok( bool, 'null hypothesis (i.e., that numbers are drawn from Poisson('+lambda+') is rejected in less than '+(threshold*100)+'% of cases ('+rejected+' of '+repeats+'). Repeats: '+npass+' of '+count+'.' );
		t.end();
	}
});

tape( 'the function supports specifying the generator state (lambda < 30)', function test( t ) {
	var poisson;
	var state;
	var arr;
	var i;

	poisson = factory( 10.0 );

	// Move to a future state...
	for ( i = 0; i < 100; i++ ) {
		poisson();
	}
	// Capture the current state:
	state = poisson.state;

	// Move to a future state...
	arr = [];
	for ( i = 0; i < 100; i++ ) {
		arr.push( poisson() );
	}

	// Create another PRNG using the captured state:
	poisson = factory( 10.0, {
		'state': state
	});

	// Replay previously generated values...
	for ( i = 0; i < 100; i++ ) {
		t.equal( poisson(), arr[ i ], 'returns expected value. i: '+i+'.' );
	}
	t.end();
});

tape( 'the function supports specifying the generator state (lambda > 30)', function test( t ) {
	var poisson;
	var state;
	var arr;
	var i;

	poisson = factory( 40.0 );

	// Move to a future state...
	for ( i = 0; i < 100; i++ ) {
		poisson();
	}
	// Capture the current state:
	state = poisson.state;

	// Move to a future state...
	arr = [];
	for ( i = 0; i < 100; i++ ) {
		arr.push( poisson() );
	}

	// Create another PRNG using the captured state:
	poisson = factory( 40.0, {
		'state': state
	});

	// Replay previously generated values...
	for ( i = 0; i < 100; i++ ) {
		t.equal( poisson(), arr[ i ], 'returns expected value. i: '+i+'.' );
	}
	t.end();
});

tape( 'the function supports specifying a shared generator state (lambda < 30)', function test( t ) {
	var poisson;
	var shared;
	var state;
	var rand1;
	var rand2;
	var arr;
	var v1;
	var v2;
	var i;
	var j;

	poisson = factory( 10.0 );

	// Move to a future state...
	for ( i = 0; i < 100; i++ ) {
		poisson();
	}
	// Capture the current state:
	state = poisson.state;

	// Move to a future state...
	arr = [];
	for ( i = 0; i < 100; i++ ) {
		arr.push( poisson() );
	}

	// Create a copy of the state (to prevent mutation) which will be shared by more than one PRNG:
	shared = new Uint32Array( state );

	// Create PRNGs using the captured state:
	rand1 = factory( 10.0, {
		'state': shared,
		'copy': false
	});
	rand2 = factory( 10.0, {
		'state': shared,
		'copy': false
	});

	// Replay previously generated values...
	j = 0;
	for ( i = 0; i < 25; i++ ) {
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
	rand1.state = state;

	// Replay previously generated values...
	j = 0;
	for ( i = 0; i < 25; i++ ) {
		v1 = rand1();
		v2 = rand2();
		t.equal( v1, arr[ j ], 'returns expected value. i: '+j+'.' );
		t.equal( v2, arr[ j+1 ], 'returns expected value. i: '+(j+1)+'.' );
		j += 2; // stride
	}
	t.end();
});

tape( 'the function supports specifying a shared generator state (lambda > 30)', function test( t ) {
	var poisson;
	var shared;
	var state;
	var rand1;
	var rand2;
	var arr;
	var v1;
	var v2;
	var i;
	var j;

	poisson = factory( 40.0 );

	// Move to a future state...
	for ( i = 0; i < 100; i++ ) {
		poisson();
	}
	// Capture the current state:
	state = poisson.state;

	// Move to a future state...
	arr = [];
	for ( i = 0; i < 100; i++ ) {
		arr.push( poisson() );
	}

	// Create a copy of the state (to prevent mutation) which will be shared by more than one PRNG:
	shared = new Uint32Array( state );

	// Create PRNGs using the captured state:
	rand1 = factory( 40.0, {
		'state': shared,
		'copy': false
	});
	rand2 = factory( 40.0, {
		'state': shared,
		'copy': false
	});

	// Replay previously generated values...
	j = 0;
	for ( i = 0; i < 25; i++ ) {
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
	rand1.state = state;

	// Replay previously generated values...
	j = 0;
	for ( i = 0; i < 25; i++ ) {
		v1 = rand1();
		v2 = rand2();
		t.equal( v1, arr[ j ], 'returns expected value. i: '+j+'.' );
		t.equal( v2, arr[ j+1 ], 'returns expected value. i: '+(j+1)+'.' );
		j += 2; // stride
	}
	t.end();
});

tape( 'the returned function supports setting the generator state (lambda < 30)', function test( t ) {
	var poisson;
	var state;
	var arr;
	var i;

	poisson = factory( 10.0 );

	// Move to a future state...
	for ( i = 0; i < 100; i++ ) {
		poisson();
	}
	// Capture the current state:
	state = poisson.state;

	// Move to a future state...
	arr = [];
	for ( i = 0; i < 100; i++ ) {
		arr.push( poisson() );
	}
	// Set the state:
	poisson.state = state;

	// Replay previously generated values...
	for ( i = 0; i < 100; i++ ) {
		t.equal( poisson(), arr[ i ], 'returns expected value. i: '+i+'.' );
	}
	t.end();
});

tape( 'the returned function supports setting the generator state (lambda > 30)', function test( t ) {
	var poisson;
	var state;
	var arr;
	var i;

	poisson = factory( 40.0 );

	// Move to a future state...
	for ( i = 0; i < 100; i++ ) {
		poisson();
	}
	// Capture the current state:
	state = poisson.state;

	// Move to a future state...
	arr = [];
	for ( i = 0; i < 100; i++ ) {
		arr.push( poisson() );
	}
	// Set the state:
	poisson.state = state;

	// Replay previously generated values...
	for ( i = 0; i < 100; i++ ) {
		t.equal( poisson(), arr[ i ], 'returns expected value. i: '+i+'.' );
	}
	t.end();
});
