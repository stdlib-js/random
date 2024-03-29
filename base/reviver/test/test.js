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
var copy = require( '@stdlib/utils/copy' );
var randu = require( './../../../base/randu' );
var randn = require( './../../../base/randn' );
var minstd = require( './../../../base/minstd' );
var randexp = require( './../../../base/exponential' );
var discreteUniform = require( './../../../base/discrete-uniform' );
var parseJSON = require( '@stdlib/utils/parse-json' );
var typedarray2json = require( '@stdlib/array/to-json' );
var isPRNGLike = require( '@stdlib/assert/is-prng-like' );
var reviver = require( './../lib' );


// FUNCTIONS //

function setup( name, state, params ) {
	var json = {};
	json.type = 'PRNG';
	json.name = name || randu.NAME;
	json.state = typedarray2json( state || randu.state );
	json.params = params || [];
	return json;
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof reviver, 'function', 'main export is a function' );
	t.end();
});

tape( 'values which are not recognized as serialized PRNGs are unaffected', function test( t ) {
	var expected;
	var actual;

	expected = {
		'beep': 'boop'
	};
	actual = parseJSON( '{"beep":"boop"}', reviver );

	t.deepEqual( actual, expected, 'deep equal' );

	// Null edge case:
	actual = parseJSON( 'null', reviver );
	t.equal( actual, null, 'equals null' );

	t.end();
});

tape( 'an object must have a recognized "type" field in order to be revived', function test( t ) {
	var expected;
	var actual;
	var json;

	json = setup();
	json.type = 'Boop';

	expected = copy( json );

	actual = parseJSON( JSON.stringify( json ), reviver );
	t.deepEqual( actual, expected, 'deep equal' );

	t.end();
});

tape( 'an object must have a "name" field in order to be revived', function test( t ) {
	var expected;
	var actual;
	var json;

	json = setup();
	delete json.name;

	expected = copy( json );

	actual = parseJSON( JSON.stringify( json ), reviver );
	t.deepEqual( actual, expected, 'deep equal' );

	t.end();
});

tape( 'an object must have a recognized "name" field in order to be revived', function test( t ) {
	var expected;
	var actual;
	var json;

	json = setup( 'beep boop bop', null, null );
	expected = copy( json );

	actual = parseJSON( JSON.stringify( json ), reviver );
	t.deepEqual( actual, expected, 'deep equal' );

	json = setup( 'beep-boop-bop', null, null );
	expected = copy( json );

	actual = parseJSON( JSON.stringify( json ), reviver );
	t.deepEqual( actual, expected, 'deep equal' );

	json = setup( 'randu-beep-boop-bop', null, null );
	expected = copy( json );

	actual = parseJSON( JSON.stringify( json ), reviver );
	t.deepEqual( actual, expected, 'deep equal' );

	t.end();
});

tape( 'an object must have a "state" field in order to be revived', function test( t ) {
	var expected;
	var actual;
	var json;

	json = setup();
	delete json.state;

	expected = copy( json );

	actual = parseJSON( JSON.stringify( json ), reviver );
	t.deepEqual( actual, expected, 'deep equal' );

	t.end();
});

tape( 'an object "state" field must have a "type" field in order to be revived', function test( t ) {
	var expected;
	var actual;
	var json;

	json = setup();
	delete json.state.type;

	expected = copy( json );

	actual = parseJSON( JSON.stringify( json ), reviver );
	t.deepEqual( actual, expected, 'deep equal' );

	t.end();
});

tape( 'an object "state" field must have a recognized "type" field in order to be revived', function test( t ) {
	var expected;
	var actual;
	var json;

	json = setup();
	json.state.type = 'beep boop bop';

	expected = copy( json );

	actual = parseJSON( JSON.stringify( json ), reviver );
	t.deepEqual( actual, expected, 'deep equal' );

	t.end();
});

tape( 'an object "state" field must have a "data" field in order to be revived', function test( t ) {
	var expected;
	var actual;
	var json;

	json = setup();
	delete json.state.data;

	expected = copy( json );

	actual = parseJSON( JSON.stringify( json ), reviver );
	t.deepEqual( actual, expected, 'deep equal' );

	t.end();
});

tape( 'an object must have a "params" field in order to be revived', function test( t ) {
	var expected;
	var actual;
	var json;

	json = setup();
	delete json.params;

	expected = copy( json );

	actual = parseJSON( JSON.stringify( json ), reviver );
	t.deepEqual( actual, expected, 'deep equal' );

	t.end();
});

tape( 'the function will revive a JSON-serialized PRNG', function test( t ) {
	var expected;
	var actual;
	var values;
	var params;
	var rand;
	var json;
	var r;
	var i;
	var j;

	values = [
		randu,
		randn,
		minstd,
		randexp.factory( 10.0 ),
		discreteUniform.factory( 1, 10 )
	];
	params = [
		null,
		null,
		null,
		[ 10.0 ],
		[ 1, 10 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		rand = values[ i ];
		json = setup( rand.NAME, rand.state, params[ i ] );
		r = parseJSON( JSON.stringify( json ), reviver );
		t.equal( isPRNGLike( r ), true, 'returns a PRNG' );
		for ( j = 0; j < 10; j++ ) {
			expected = rand();
			actual = r();
			t.equal( actual, expected, 'returns expected value for PRNG '+rand.NAME );
		}
	}
	t.end();
});

tape( 'the function will revive deeply nested serialized error objects', function test( t ) {
	var expected;
	var actual;
	var values;
	var json;
	var rand;
	var out;
	var r;
	var i;
	var j;

	values = [
		randu,
		randn,
		minstd,
		randexp.factory( 10.0 ),
		discreteUniform.factory( 1, 10 )
	];

	out = parseJSON( JSON.stringify( values ), reviver );

	for ( i = 0; i < values.length; i++ ) {
		rand = values[ i ];
		r = out[ i ];
		t.equal( isPRNGLike( r ), true, 'returns a PRNG' );
		for ( j = 0; j < 10; j++ ) {
			expected = rand();
			actual = r();
			t.equal( actual, expected, 'returns expected value for PRNG '+rand.NAME );
		}
	}

	json = {
		'beep': {
			'boop': setup( randu.NAME, randu.state, null )
		}
	};

	actual = parseJSON( JSON.stringify( json ), reviver );
	t.equal( isPRNGLike( actual.beep.boop ), true, 'returns a PRNG' );

	r = actual.beep.boop;
	for ( i = 0; i < 10; i++ ) {
		expected = randu();
		actual = r();
		t.equal( actual, expected, 'returns expected value' );
	}
	t.end();
});
