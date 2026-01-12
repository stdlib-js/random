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
* @see {@link module:@stdlib/random/arcsine}
*/
setReadOnly( ns, 'arcsine', require( './../arcsine' ) );

/**
* @name array
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/random/array}
*/
setReadOnly( ns, 'array', require( './../array' ) );

/**
* @name base
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/random/base}
*/
setReadOnly( ns, 'base', require( './../base' ) );

/**
* @name bernoulli
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/bernoulli}
*/
setReadOnly( ns, 'bernoulli', require( './../bernoulli' ) );

/**
* @name beta
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/beta}
*/
setReadOnly( ns, 'beta', require( './../beta' ) );

/**
* @name betaprime
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/betaprime}
*/
setReadOnly( ns, 'betaprime', require( './../betaprime' ) );

/**
* @name binomial
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/binomial}
*/
setReadOnly( ns, 'binomial', require( './../binomial' ) );

/**
* @name cauchy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/cauchy}
*/
setReadOnly( ns, 'cauchy', require( './../cauchy' ) );

/**
* @name chi
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/chi}
*/
setReadOnly( ns, 'chi', require( './../chi' ) );

/**
* @name chisquare
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/chisquare}
*/
setReadOnly( ns, 'chisquare', require( './../chisquare' ) );

/**
* @name cosine
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/cosine}
*/
setReadOnly( ns, 'cosine', require( './../cosine' ) );

/**
* @name discreteUniform
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/discrete-uniform}
*/
setReadOnly( ns, 'discreteUniform', require( './../discrete-uniform' ) );

/**
* @name erlang
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/erlang}
*/
setReadOnly( ns, 'erlang', require( './../erlang' ) );

/**
* @name exponential
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/exponential}
*/
setReadOnly( ns, 'exponential', require( './../exponential' ) );

/**
* @name f
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/f}
*/
setReadOnly( ns, 'f', require( './../f' ) );

/**
* @name frechet
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/frechet}
*/
setReadOnly( ns, 'frechet', require( './../frechet' ) );

/**
* @name gamma
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/gamma}
*/
setReadOnly( ns, 'gamma', require( './../gamma' ) );

/**
* @name geometric
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/geometric}
*/
setReadOnly( ns, 'geometric', require( './../geometric' ) );

/**
* @name gumbel
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/gumbel}
*/
setReadOnly( ns, 'gumbel', require( './../gumbel' ) );

/**
* @name invgamma
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/invgamma}
*/
setReadOnly( ns, 'invgamma', require( './../invgamma' ) );

/**
* @name iterators
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/random/iter}
*/
setReadOnly( ns, 'iterators', require( './../iter' ) );

/**
* @name kumaraswamy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/kumaraswamy}
*/
setReadOnly( ns, 'kumaraswamy', require( './../kumaraswamy' ) );

/**
* @name laplace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/laplace}
*/
setReadOnly( ns, 'laplace', require( './../laplace' ) );

/**
* @name levy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/levy}
*/
setReadOnly( ns, 'levy', require( './../levy' ) );

/**
* @name logistic
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/logistic}
*/
setReadOnly( ns, 'logistic', require( './../logistic' ) );

/**
* @name lognormal
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/lognormal}
*/
setReadOnly( ns, 'lognormal', require( './../lognormal' ) );

/**
* @name negativeBinomial
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/negative-binomial}
*/
setReadOnly( ns, 'negativeBinomial', require( './../negative-binomial' ) );

/**
* @name normal
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/normal}
*/
setReadOnly( ns, 'normal', require( './../normal' ) );

/**
* @name pareto1
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/pareto-type1}
*/
setReadOnly( ns, 'pareto1', require( './../pareto-type1' ) );

/**
* @name poisson
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/poisson}
*/
setReadOnly( ns, 'poisson', require( './../poisson' ) );

/**
* @name rayleigh
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/rayleigh}
*/
setReadOnly( ns, 'rayleigh', require( './../rayleigh' ) );

/**
* @name sample
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/sample}
*/
setReadOnly( ns, 'sample', require( './../sample' ) );

/**
* @name shuffle
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/shuffle}
*/
setReadOnly( ns, 'shuffle', require( './../shuffle' ) );

/**
* @name streams
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/random/streams}
*/
setReadOnly( ns, 'streams', require( './../streams' ) );

/**
* @name strided
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/random/strided}
*/
setReadOnly( ns, 'strided', require( './../strided' ) );

/**
* @name t
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/t}
*/
setReadOnly( ns, 't', require( './../t' ) );

/**
* @name tools
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/random/tools}
*/
setReadOnly( ns, 'tools', require( './../tools' ) );

/**
* @name uniform
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/uniform}
*/
setReadOnly( ns, 'uniform', require( './../uniform' ) );

/**
* @name weibull
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/weibull}
*/
setReadOnly( ns, 'weibull', require( './../weibull' ) );


// EXPORTS //

module.exports = ns;
