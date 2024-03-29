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
var proxyquire = require( 'proxyquire' );
var floor = require( '@stdlib/math/base/special/floor' );
var randi = require( './../../../base/minstd-shuffle' );
var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
var rand = require( './../lib/discrete_uniform.js' );


// FIXTURES //

// A non-random PRNG...
function randint() {
	var N;
	var v;
	var i;

	v = [ 1, 2, 3, 4, 5 ];
	N = v.length;
	i = -1;

	function rand() {
		i = (i+1)%N;
		return v[ i ];
	}
	rand.MIN = 1;
	rand.MAX = 5;
	return rand;
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof rand, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns pseudorandom numbers (smaller range)', function test( t ) {
	var r;
	var a;
	var b;
	var i;

	a = 20;
	b = 40;
	for ( i = 0; i < 1e2; i++ ) {
		r = rand( randi, a, b );
		t.equal( typeof r, 'number', 'returns a number' );
		t.equal( isInteger( r ), true, 'returns an integer' );
		t.equal( r >= a && r <= b, true, 'within support: '+r );
	}
	t.end();
});

tape( 'the function returns pseudorandom numbers (smaller range)', function test( t ) {
	var rand;
	var r;
	var a;
	var b;
	var i;

	rand = proxyquire( './../lib/discrete_uniform.js', {
		'@stdlib/constants/float64/max-safe-integer': randi.MAX-randi.MIN
	});

	a = 20;
	b = 40;
	for ( i = 0; i < 1e2; i++ ) {
		r = rand( randi, a, b );
		t.equal( typeof r, 'number', 'returns a number' );
		t.equal( isInteger( r ), true, 'returns an integer' );
		t.equal( r >= a && r <= b, true, 'within support: '+r );
	}
	t.end();
});

tape( 'the function returns pseudorandom numbers (smaller range)', function test( t ) {
	var randi;
	var rand;
	var r;
	var a;
	var b;
	var i;

	randi = randint();
	rand = proxyquire( './../lib/discrete_uniform.js', {
		'@stdlib/constants/float64/max-safe-integer': randi.MAX-randi.MIN
	});

	a = 0;
	b = 3;
	for ( i = 0; i < 1e2; i++ ) {
		r = rand( randi, a, b );
		t.equal( typeof r, 'number', 'returns a number' );
		t.equal( isInteger( r ), true, 'returns an integer' );
		t.equal( r >= a && r <= b, true, 'within support: '+r );
	}
	t.end();
});

tape( 'the function returns pseudorandom numbers (smaller range)', function test( t ) {
	var r;
	var a;
	var b;
	var i;

	a = 0;
	b = floor( randi.MAX/2 ) + 1; // high likelihood of sampling rejection
	for ( i = 0; i < 1e3; i++ ) {
		r = rand( randi, a, b );
		t.equal( typeof r, 'number', 'returns a number' );
		t.equal( isInteger( r ), true, 'returns an integer' );
		t.equal( r >= a && r <= b, true, 'within support: '+r );
	}
	t.end();
});

tape( 'the function returns pseudorandom numbers (equal range)', function test( t ) {
	var r;
	var a;
	var b;
	var i;

	a = randi.MIN + 101;
	b = randi.MAX + 101;
	for ( i = 0; i < 1e2; i++ ) {
		r = rand( randi, a, b );
		t.equal( typeof r, 'number', 'returns a number' );
		t.equal( isInteger( r ), true, 'returns an integer' );
		t.equal( r >= a && r <= b, true, 'within support: '+r );
	}
	t.end();
});

tape( 'the function returns pseudorandom numbers (bigger range)', function test( t ) {
	var randi;
	var r;
	var a;
	var b;
	var i;

	randi = randint();

	a = 0;
	b = 10;
	for ( i = 0; i < 1e2; i++ ) {
		r = rand( randi, a, b );
		t.equal( typeof r, 'number', 'returns a number' );
		t.equal( isInteger( r ), true, 'returns an integer' );
		t.equal( r >= a && r <= b, true, 'within support: '+r );
	}
	t.end();
});

tape( 'the function returns pseudorandom numbers (bigger range)', function test( t ) {
	var randi;
	var rand;
	var r;
	var a;
	var b;
	var i;

	randi = randint();
	a = 0;
	b = 10;

	rand = proxyquire( './../lib/discrete_uniform.js', {
		'@stdlib/constants/float64/max-safe-integer': b - a
	});

	for ( i = 0; i < 1e2; i++ ) {
		r = rand( randi, a, b );
		t.equal( typeof r, 'number', 'returns a number' );
		t.equal( isInteger( r ), true, 'returns an integer' );
		t.equal( r >= a && r <= b, true, 'within support: '+r );
	}
	t.end();
});

tape( 'the function returns pseudorandom numbers (bigger range)', function test( t ) {
	var randi;
	var rand;
	var r;
	var a;
	var b;
	var i;

	randi = randint();
	a = 0;
	b = 9;

	rand = proxyquire( './../lib/discrete_uniform.js', {
		'@stdlib/constants/float64/max-safe-integer': b - a
	});

	for ( i = 0; i < 1e2; i++ ) {
		r = rand( randi, a, b );
		t.equal( typeof r, 'number', 'returns a number' );
		t.equal( isInteger( r ), true, 'returns an integer' );
		t.equal( r >= a && r <= b, true, 'within support: '+r );
	}
	t.end();
});

tape( 'the function returns pseudorandom numbers (bigger range)', function test( t ) {
	var randi;
	var r;
	var a;
	var b;
	var i;

	randi = randint();

	a = 0;
	b = 1e2 + 3;
	for ( i = 0; i < 1e2; i++ ) {
		r = rand( randi, a, b );
		t.equal( typeof r, 'number', 'returns a number' );
		t.equal( isInteger( r ), true, 'returns an integer' );
		t.equal( r >= a && r <= b, true, 'within support: '+r );
	}
	t.end();
});

tape( 'the function returns pseudorandom numbers (bigger range)', function test( t ) {
	var randi;
	var r;
	var a;
	var b;
	var i;

	randi = randint();
	a = 0;
	b = randi.MAX - randi.MIN;
	b *= b; // integer power

	for ( i = 0; i < 1e2; i++ ) {
		r = rand( randi, a, b );
		t.equal( typeof r, 'number', 'returns a number' );
		t.equal( isInteger( r ), true, 'returns an integer' );
		t.equal( r >= a && r <= b, true, 'within support: '+r );
	}
	t.end();
});

tape( 'the function returns pseudorandom numbers (bigger range)', function test( t ) {
	var rand;
	var r;
	var a;
	var b;
	var i;

	// NOTE: this is an unlikely scenario and suggests a defective PRNG; i.e., a PRNG whose range exceeds overflow limits is probably not a good PRNG. Nevertheless, we consider the edge case.

	a = 0;
	b = randi.MAX * 2;

	rand = proxyquire( './../lib/discrete_uniform.js', {
		'@stdlib/constants/float64/max-safe-integer': floor( randi.MAX * 0.75 )
	});

	for ( i = 0; i < 1e2; i++ ) {
		r = rand( randi, a, b );
		t.equal( typeof r, 'number', 'returns a number' );
		t.equal( isInteger( r ), true, 'returns an integer' );
		t.equal( r >= a && r <= b, true, 'within support: '+r );
	}
	t.end();
});
