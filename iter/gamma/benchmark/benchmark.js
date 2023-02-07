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
	var alpha;
	var beta;
	var iter;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		alpha = ( randu()*100.0 ) + EPS;
		beta = ( randu()*100.0 ) + EPS;
		iter = iterator( alpha, beta );
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
	var alpha;
	var beta;
	var rand;
	var z;
	var i;

	alpha = 2.0;
	beta = 4.0;
	rand = iterator( alpha, beta );

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
