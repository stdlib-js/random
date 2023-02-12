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

var bench = require( '@stdlib/bench' );
var randu = require( './../../../base/randu' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var EPS = require( '@stdlib/constants/float64/eps' );
var pkg = require( './../package.json' ).name;
var iterator = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var gamma;
	var iter;
	var x0;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x0 = ( randu() * 100.0 ) - 50.0;
		gamma = ( randu()*10.0 ) + EPS;
		iter = iterator( x0, gamma );
		if ( typeof iter !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( typeof iter !== 'object' || typeof iter.next !== 'function' ) {
		b.fail( 'should return an iterator protocol-compliant object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::iteration', function benchmark( b ) {
	var gamma;
	var rand;
	var x0;
	var z;
	var i;

	x0 = -3.0;
	gamma = 2.0;
	rand = iterator( x0, gamma );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		z = rand.next().value;
		if ( isnan( z ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( z ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
