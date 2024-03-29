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
var randu = require( './../../base/randu' );
var floor = require( '@stdlib/math/base/special/floor' );
var isArray = require( '@stdlib/assert/is-array' );
var pkg = require( './../package.json' ).name;
var sample = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var result;
	var arr;
	var len;
	var i;

	arr = new Array( 100 );
	len = arr.length;
	for ( i = 0; i < len; i++ ) {
		arr[ i ] = floor( randu()*100.0 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		result = sample( arr );
		if ( typeof result !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isArray( result ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::custom_probs', function benchmark( b ) {
	var result;
	var probs;
	var arr;
	var len;
	var i;

	arr = [ 1, 2, 3, 4, 5, 6 ];
	probs = [ 0.2, 0.1, 0.1, 0.1, 0.2, 0.3 ];
	len = arr.length;
	for ( i = 0; i < len; i++ ) {
		arr[ i ] = floor( randu()*100.0 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		result = sample( arr, {
			'probs': probs,
			'size': 100
		});
		if ( typeof result !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isArray( result ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::size=1000', function benchmark( b ) {
	var result;
	var arr;
	var len;
	var i;

	arr = new Array( 100 );
	len = arr.length;
	for ( i = 0; i < len; i++ ) {
		arr[ i ] = floor( randu()*100.0 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		result = sample( arr, {
			'size': 1000
		});
		if ( typeof result !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isArray( result ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::replace=true', function benchmark( b ) {
	var result;
	var arr;
	var len;
	var i;

	arr = new Array( 100 );
	len = arr.length;
	for ( i = 0; i < len; i++ ) {
		arr[ i ] = floor( randu()*100.0 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		result = sample( arr, {
			'replace': true
		});
		if ( typeof result !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isArray( result ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::replace=true,size=1000', function benchmark( b ) {
	var result;
	var arr;
	var len;
	var i;

	arr = new Array( 100 );
	len = arr.length;
	for ( i = 0; i < len; i++ ) {
		arr[ i ] = floor( randu()*100.0 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		result = sample( arr, {
			'replace': true,
			'size': 1000
		});
		if ( typeof result !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isArray( result ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':factory', function benchmark( b ) {
	var mysample;
	var result;
	var arr;
	var len;
	var i;

	mysample = sample.factory();

	arr = new Array( 100 );
	len = arr.length;
	for ( i = 0; i < len; i++ ) {
		arr[ i ] = floor( randu()*100.0 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		result = mysample( arr );
		if ( typeof result !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isArray( result ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
