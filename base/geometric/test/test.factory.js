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

tape( 'the function throws an error if provided a probability argument which is not a probability (no options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		-1.0,
		3.14,
		NaN,
		null,
		true,
		false,
		void 0,
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

tape( 'the function throws an error if provided a probability argument which is not a probability (options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		-1.0,
		3.14,
		NaN,
		null,
		true,
		false,
		void 0,
		[],
		{},
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

tape( 'the function throws an error if provided an options argument which is not an object (no other arguments)', function test( t ) {
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
			factory( 0.3, value );
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
			factory( 0.3, {
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
	var geometric;
	var r;
	var i;

	// When binding distribution parameters...
	geometric = factory( 0.05 );
	for ( i = 0; i < 100; i++ ) {
		r = geometric();
		t.equal( typeof r, 'number', 'returns a number' );
	}

	// Without binding distribution parameters...
	geometric = factory();
	for ( i = 0; i < 100; i++ ) {
		r = geometric( 0.1 );
		t.equal( typeof r, 'number', 'returns a number' );
	}

	t.end();
});

tape( 'the function returns a seeded pseudorandom number generator (integer seed)', function test( t ) {
	var geometric1;
	var geometric2;
	var seed;
	var r1;
	var r2;
	var i;

	seed = now();

	geometric1 = factory( 0.3, {
		'seed': seed
	});
	geometric2 = factory( 0.3, {
		'seed': seed
	});

	t.notEqual( geometric1, geometric2, 'separate generators' );

	for ( i = 0; i < 100; i++ ) {
		r1 = geometric1();
		r2 = geometric2();
		t.equal( r1, r2, 'both return same number' );
	}
	t.end();
});

tape( 'the function returns a seeded pseudorandom number generator (array seed)', function test( t ) {
	var geometric1;
	var geometric2;
	var seed;
	var r1;
	var r2;
	var i;

	seed = [ now()+1, now()+2, now()+3 ];

	geometric1 = factory( 0.3, {
		'seed': seed
	});
	geometric2 = factory( 0.3, {
		'seed': seed
	});

	t.notEqual( geometric1, geometric2, 'separate generators' );

	for ( i = 0; i < 100; i++ ) {
		r1 = geometric1();
		r2 = geometric2();
		t.equal( r1, r2, 'both return same number' );
	}
	t.end();
});

tape( 'attached to the returned function is the generator name', function test( t ) {
	var geometric = factory();
	t.equal( geometric.NAME, 'geometric', 'has property' );
	t.end();
});

tape( 'attached to the returned function is the underlying PRNG', function test( t ) {
	var geometric = factory();
	t.equal( typeof geometric.PRNG, 'function', 'has property' );

	geometric = factory({
		'prng': minstd.normalized
	});
	t.equal( geometric.PRNG, minstd.normalized, 'has property' );
	t.end();
});

tape( 'attached to the returned function is the generator seed (integer seed)', function test( t ) {
	var geometric = factory({
		'seed': 12345
	});
	t.equal( isUint32Array( geometric.seed ), true, 'has property' );
	t.equal( geometric.seed[ 0 ], 12345, 'equal to provided seed' );

	geometric = factory({
		'seed': 12345,
		'prng': minstd.normalized
	});
	t.equal( geometric.seed, null, 'equal to `null`' );
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
	var geometric = factory();
	t.equal( typeof geometric.seedLength, 'number', 'has property' );

	geometric = factory({
		'prng': minstd.normalized
	});
	t.equal( geometric.seedLength, null, 'equal to `null`' );
	t.end();
});

tape( 'attached to the returned function is the generator state', function test( t ) {
	var geometric = factory();
	t.equal( isUint32Array( geometric.state ), true, 'has property' );

	geometric = factory({
		'prng': minstd.normalized
	});
	t.equal( geometric.state, null, 'equal to `null`' );
	t.end();
});

tape( 'attached to the returned function is the generator state length', function test( t ) {
	var geometric = factory();
	t.equal( typeof geometric.stateLength, 'number', 'has property' );

	geometric = factory({
		'prng': minstd.normalized
	});
	t.equal( geometric.stateLength, null, 'equal to `null`' );
	t.end();
});

tape( 'attached to the returned function is the generator state size', function test( t ) {
	var geometric = factory();
	t.equal( typeof geometric.byteLength, 'number', 'has property' );

	geometric = factory({
		'prng': minstd.normalized
	});
	t.equal( geometric.byteLength, null, 'equal to `null`' );
	t.end();
});

tape( 'attached to the returned function is a method to serialize the generator as a JSON object', function test( t ) {
	var geometric;
	var o;

	geometric = factory();
	t.equal( typeof geometric.toJSON, 'function', 'has method' );

	o = geometric.toJSON();
	t.equal( o.type, 'PRNG', 'has property' );
	t.equal( o.name, geometric.NAME, 'has property' );
	t.deepEqual( o.state, typedarray2json( geometric.state ), 'has property' );
	t.deepEqual( o.params, [], 'has property' );

	geometric = factory( 0.5 );
	o = geometric.toJSON();

	t.deepEqual( o.params, [ 0.5 ], 'has property' );

	geometric = factory({
		'prng': minstd.normalized
	});
	t.equal( typeof geometric.toJSON, 'function', 'has method' );
	t.equal( geometric.toJSON(), null, 'returns expected value' );

	t.end();
});

tape( 'when called without arguments, the function returns a PRNG that returns `NaN` when provided a rate equal to `NaN`', function test( t ) {
	var geometric;
	var r;

	geometric = factory();
	r = geometric( NaN );

	t.strictEqual( isnan( r ), true, 'returns NaN' );
	t.end();
});

tape( 'when called without arguments, the function returns a PRNG that returns `NaN` when provided a probability argument which is not a probability', function test( t ) {
	var geometric;
	var r;

	geometric = factory();

	r = geometric( 3.14 );
	t.strictEqual( isnan( r ), true, 'returns NaN' );

	r = geometric( -1.0 );
	t.strictEqual( isnan( r ), true, 'returns NaN' );

	r = geometric( -3.14 );
	t.strictEqual( isnan( r ), true, 'returns NaN' );

	t.end();
});

tape( 'the function supports specifying the underlying PRNG', function test( t ) {
	var geometric;
	var r;
	var i;

	geometric = factory( 0.3, {
		'prng': minstd.normalized
	});

	for ( i = 0; i < 1e2; i++ ) {
		r = geometric();
		t.equal( typeof r, 'number', 'returns a number' );
	}
	t.end();
});

tape( 'the function supports specifying the underlying PRNG (parameters)', function test( t ) {
	var geometric;
	var r;
	var i;

	geometric = factory({
		'prng': minstd.normalized
	});

	for ( i = 0; i < 1e2; i++ ) {
		r = geometric( 0.3 );
		t.equal( typeof r, 'number', 'returns a number' );
	}
	t.end();
});

tape( 'the function supports providing a seeded underlying PRNG', function test( t ) {
	var geometric1;
	var geometric2;
	var randu;
	var seed;
	var r1;
	var r2;
	var i;

	seed = now();

	randu = minstd.factory({
		'seed': seed
	});
	geometric1 = factory( 0.3, {
		'prng': randu.normalized
	});

	randu = minstd.factory({
		'seed': seed
	});
	geometric2 = factory( 0.3, {
		'prng': randu.normalized
	});

	t.notEqual( geometric1, geometric2, 'separate generators' );

	for ( i = 0; i < 1e2; i++ ) {
		r1 = geometric1();
		r2 = geometric2();
		t.equal( r1, r2, 'both return same number' );
	}
	t.end();
});

tape( 'the function supports providing a seeded underlying PRNG (parameters)', function test( t ) {
	var geometric1;
	var geometric2;
	var randu;
	var seed;
	var r1;
	var r2;
	var i;

	seed = now();

	randu = minstd.factory({
		'seed': seed
	});
	geometric1 = factory({
		'prng': randu.normalized
	});

	randu = minstd.factory({
		'seed': seed
	});
	geometric2 = factory({
		'prng': randu.normalized
	});

	t.notEqual( geometric1, geometric2, 'separate generators' );

	for ( i = 0; i < 1e2; i++ ) {
		r1 = geometric1( 0.3 );
		r2 = geometric2( 0.3 );
		t.equal( r1, r2, 'both return same number' );
	}
	t.end();
});

tape( 'the function returns a PRNG for generating random numbers from a geometric distribution', opts, function test( t ) {
	var threshold;
	var repeats;
	var count;
	var npass;
	var freq;
	var N;
	var p;
	var x;

	threshold = 0.12;

	p = 0.67;

	freq = new Array( 30 );
	repeats = 200;
	N = 1e3;

	count = -1;
	npass = 0;

	gof();

	function gof() {
		var geometric;
		var rejected;
		var pValue;
		var bool;
		var i;
		var j;

		count += 1;
		rejected = 0;
		for ( i = 0; i < repeats; i++ ) {
			geometric = factory( p );
			t.ok( true, 'seed: '+geometric.seed );

			// Reset the `freq` array...
			for ( j = 0; j < freq.length; j++ ) {
				freq[ j ] = 0;
			}
			for ( j = 0; j < N; j++ ) {
				x = geometric();
				freq[ x ] += 1;
			}
			// Test using chi-square goodness-of-fit test:
			pValue = chi2gof( freq, 'geometric', p, {
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
		t.ok( bool, 'null hypothesis (i.e., that numbers are drawn from Geometric('+p+') is rejected in less than '+(threshold*100)+'% of cases ('+rejected+' of '+repeats+'). Repeats: '+npass+' of '+count+'.' );
		t.end();
	}
});

tape( 'the function supports specifying the generator state', function test( t ) {
	var geometric;
	var state;
	var arr;
	var i;

	geometric = factory( 0.67 );

	// Move to a future state...
	for ( i = 0; i < 100; i++ ) {
		geometric();
	}
	// Capture the current state:
	state = geometric.state;

	// Move to a future state...
	arr = [];
	for ( i = 0; i < 100; i++ ) {
		arr.push( geometric() );
	}

	// Create another PRNG using the captured state:
	geometric = factory( 0.67, {
		'state': state
	});

	// Replay previously generated values...
	for ( i = 0; i < 100; i++ ) {
		t.equal( geometric(), arr[ i ], 'returns expected value. i: '+i+'.' );
	}
	t.end();
});

tape( 'the function supports specifying a shared generator state', function test( t ) {
	var geometric;
	var shared;
	var state;
	var rand1;
	var rand2;
	var arr;
	var v1;
	var v2;
	var i;
	var j;

	geometric = factory( 0.67 );

	// Move to a future state...
	for ( i = 0; i < 100; i++ ) {
		geometric();
	}
	// Capture the current state:
	state = geometric.state;

	// Move to a future state...
	arr = [];
	for ( i = 0; i < 100; i++ ) {
		arr.push( geometric() );
	}

	// Create a copy of the state (to prevent mutation) which will be shared by more than one PRNG:
	shared = new Uint32Array( state );

	// Create PRNGs using the captured state:
	rand1 = factory( 0.67, {
		'state': shared,
		'copy': false
	});
	rand2 = factory( 0.67, {
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

tape( 'the returned function supports setting the generator state', function test( t ) {
	var geometric;
	var state;
	var arr;
	var i;

	geometric = factory( 0.67 );

	// Move to a future state...
	for ( i = 0; i < 100; i++ ) {
		geometric();
	}
	// Capture the current state:
	state = geometric.state;

	// Move to a future state...
	arr = [];
	for ( i = 0; i < 100; i++ ) {
		arr.push( geometric() );
	}
	// Set the state:
	geometric.state = state;

	// Replay previously generated values...
	for ( i = 0; i < 100; i++ ) {
		t.equal( geometric(), arr[ i ], 'returns expected value. i: '+i+'.' );
	}
	t.end();
});
