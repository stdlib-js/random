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

var randu = require( './../../../base/randu' );
var parseJSON = require( '@stdlib/utils/parse-json' );
var reviveBasePRNG = require( './../lib' );

// Progress the PRNG state...
var r1;
var i;
for ( i = 0; i < 100; i++ ) {
	r1 = randu();
}

// Serialize the PRNG as a JSON string:
var str = JSON.stringify( randu );

// Revive the JSON-serialized PRNG:
var rand = parseJSON( str, reviveBasePRNG );
if ( rand instanceof Error ) {
	console.error( rand.message );
}

// Generate duplicate sequences...
var r2;
for ( i = 0; i < 100; i++ ) {
	r1 = randu();
	r2 = rand();
	console.log( '%d == %d ? %s', r1, r2, ( r1 === r2 ).toString() );
}
