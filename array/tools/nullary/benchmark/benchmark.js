/**
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

'use strict';

// MODULES //

var bench = require( '@stdlib/bench' );
var exponential = require( './../../../../base/exponential' );
var geometric = require( './../../../../base/geometric' );
var pkg = require( './../package.json' ).name;
var Random = require( './../lib' );


// MAIN //

bench( pkg+'::new', function benchmark( b ) {
	var values;
	var dtypes;
	var v;
	var i;

	values = [
		exponential.factory( 2.0 ),
		geometric.factory( 0.5 )
	];
	dtypes = [
		'float64',
		'float32'
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = new Random( values[ i%values.length ], dtypes, 'float64' );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !( v instanceof Random ) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::no_new', function benchmark( b ) {
	var values;
	var dtypes;
	var random;
	var v;
	var i;

	values = [
		exponential.factory( 2.0 ),
		geometric.factory( 0.5 )
	];
	dtypes = [
		'float64',
		'float32'
	];

	random = Random;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = random( values[ i%values.length ], dtypes, 'float64' );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !( v instanceof Random ) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
