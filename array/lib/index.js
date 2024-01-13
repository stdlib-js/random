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
* @name binomial
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/binomial}
*/
setReadOnly( ns, 'binomial', require( './../../array/binomial' ) );

/**
* @name cauchy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/cauchy}
*/
setReadOnly( ns, 'cauchy', require( './../../array/cauchy' ) );

/**
* @name chi
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/chi}
*/
setReadOnly( ns, 'chi', require( './../../array/chi' ) );

/**
* @name chisquare
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/chisquare}
*/
setReadOnly( ns, 'chisquare', require( './../../array/chisquare' ) );

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
* @name erlang
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/erlang}
*/
setReadOnly( ns, 'erlang', require( './../../array/erlang' ) );

/**
* @name exponential
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/exponential}
*/
setReadOnly( ns, 'exponential', require( './../../array/exponential' ) );

/**
* @name f
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/f}
*/
setReadOnly( ns, 'f', require( './../../array/f' ) );

/**
* @name frechet
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/frechet}
*/
setReadOnly( ns, 'frechet', require( './../../array/frechet' ) );

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
* @name gumbel
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/gumbel}
*/
setReadOnly( ns, 'gumbel', require( './../../array/gumbel' ) );

/**
* @name hypergeometric
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/hypergeometric}
*/
setReadOnly( ns, 'hypergeometric', require( './../../array/hypergeometric' ) );

/**
* @name invgamma
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/invgamma}
*/
setReadOnly( ns, 'invgamma', require( './../../array/invgamma' ) );

/**
* @name kumaraswamy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/kumaraswamy}
*/
setReadOnly( ns, 'kumaraswamy', require( './../../array/kumaraswamy' ) );

/**
* @name laplace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/laplace}
*/
setReadOnly( ns, 'laplace', require( './../../array/laplace' ) );

/**
* @name levy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/levy}
*/
setReadOnly( ns, 'levy', require( './../../array/levy' ) );

/**
* @name logistic
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/logistic}
*/
setReadOnly( ns, 'logistic', require( './../../array/logistic' ) );

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
* @name negativeBinomial
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/negative-binomial}
*/
setReadOnly( ns, 'negativeBinomial', require( './../../array/negative-binomial' ) );

/**
* @name normal
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/normal}
*/
setReadOnly( ns, 'normal', require( './../../array/normal' ) );

/**
* @name pareto1
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/pareto-type1}
*/
setReadOnly( ns, 'pareto1', require( './../../array/pareto-type1' ) );

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
* @name t
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/t}
*/
setReadOnly( ns, 't', require( './../../array/t' ) );

/**
* @name triangular
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/triangular}
*/
setReadOnly( ns, 'triangular', require( './../../array/triangular' ) );

/**
* @name uniform
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/uniform}
*/
setReadOnly( ns, 'uniform', require( './../../array/uniform' ) );

/**
* @name weibull
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/weibull}
*/
setReadOnly( ns, 'weibull', require( './../../array/weibull' ) );


// EXPORTS //

module.exports = ns;
