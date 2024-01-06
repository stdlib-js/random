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

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-read-only-property' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace ns
*/
var ns = {};

/**
* @name arcsine
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/arcsine}
*/
setReadOnly( ns, 'arcsine', require( './../../array/arcsine' ) );

/**
* @name bernoulli
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/bernoulli}
*/
setReadOnly( ns, 'bernoulli', require( './../../array/bernoulli' ) );

/**
* @name beta
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/beta}
*/
setReadOnly( ns, 'beta', require( './../../array/beta' ) );

/**
* @name betaprime
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/betaprime}
*/
setReadOnly( ns, 'betaprime', require( './../../array/betaprime' ) );

/**
* @name chi
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/chi}
*/
setReadOnly( ns, 'chi', require( './../../array/chi' ) );

/**
* @name cosine
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/cosine}
*/
setReadOnly( ns, 'cosine', require( './../../array/cosine' ) );

/**
* @name discreteUniform
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/discrete-uniform}
*/
setReadOnly( ns, 'discreteUniform', require( './../../array/discrete-uniform' ) );

/**
* @name exponential
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/exponential}
*/
setReadOnly( ns, 'exponential', require( './../../array/exponential' ) );

/**
* @name gamma
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/gamma}
*/
setReadOnly( ns, 'gamma', require( './../../array/gamma' ) );

/**
* @name geometric
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/geometric}
*/
setReadOnly( ns, 'geometric', require( './../../array/geometric' ) );

/**
* @name invgamma
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/invgamma}
*/
setReadOnly( ns, 'invgamma', require( './../../array/invgamma' ) );

/**
* @name lognormal
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/lognormal}
*/
setReadOnly( ns, 'lognormal', require( './../../array/lognormal' ) );

/**
* @name minstd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/minstd}
*/
setReadOnly( ns, 'minstd', require( './../../array/minstd' ) );

/**
* @name minstdShuffle
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/minstd-shuffle}
*/
setReadOnly( ns, 'minstdShuffle', require( './../../array/minstd-shuffle' ) );

/**
* @name mt19937
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/mt19937}
*/
setReadOnly( ns, 'mt19937', require( './../../array/mt19937' ) );

/**
* @name normal
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/normal}
*/
setReadOnly( ns, 'normal', require( './../../array/normal' ) );

/**
* @name poisson
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/poisson}
*/
setReadOnly( ns, 'poisson', require( './../../array/poisson' ) );

/**
* @name randu
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/randu}
*/
setReadOnly( ns, 'randu', require( './../../array/randu' ) );

/**
* @name rayleigh
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/rayleigh}
*/
setReadOnly( ns, 'rayleigh', require( './../../array/rayleigh' ) );

/**
* @name uniform
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/uniform}
*/
setReadOnly( ns, 'uniform', require( './../../array/uniform' ) );


// EXPORTS //

module.exports = ns;
