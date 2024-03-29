<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Pseudorandom Number Generator Streams

> Pseudorandom number generator (PRNG) streams.

<section class="usage">

## Usage

```javascript
var ns = require( '@stdlib/random/streams' );
```

#### ns

Namespace containing pseudorandom number generator (PRNG) streams.

```javascript
var streams = ns;
// returns {...}
```

The namespace contains the following functions for creating readable pseudorandom number generator streams:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`arcsine( a, b[, options] )`][@stdlib/random/streams/arcsine]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from an arcsine distribution.</span>
-   <span class="signature">[`bernoulli( p[, options] )`][@stdlib/random/streams/bernoulli]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a Bernoulli distribution.</span>
-   <span class="signature">[`beta( alpha, beta[, options] )`][@stdlib/random/streams/beta]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a beta distribution.</span>
-   <span class="signature">[`betaprime( alpha, beta[, options] )`][@stdlib/random/streams/betaprime]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a beta prime distribution.</span>
-   <span class="signature">[`binomial( n, p[, options] )`][@stdlib/random/streams/binomial]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a binomial distribution.</span>
-   <span class="signature">[`boxMuller( [options] )`][@stdlib/random/streams/box-muller]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a standard normal distribution using the Box-Muller transform.</span>
-   <span class="signature">[`cauchy( x0, gamma[, options] )`][@stdlib/random/streams/cauchy]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a Cauchy distribution.</span>
-   <span class="signature">[`chi( k[, options] )`][@stdlib/random/streams/chi]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a chi distribution.</span>
-   <span class="signature">[`chisquare( k[, options] )`][@stdlib/random/streams/chisquare]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a chi-square distribution.</span>
-   <span class="signature">[`cosine( mu, s[, options] )`][@stdlib/random/streams/cosine]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a raised cosine distribution.</span>
-   <span class="signature">[`discreteUniform( a, b[, options] )`][@stdlib/random/streams/discrete-uniform]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a discrete uniform distribution.</span>
-   <span class="signature">[`erlang( k, lambda[, options] )`][@stdlib/random/streams/erlang]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from an Erlang distribution.</span>
-   <span class="signature">[`exponential( lambda[, options] )`][@stdlib/random/streams/exponential]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from an exponential distribution.</span>
-   <span class="signature">[`f( d1, d2[, options] )`][@stdlib/random/streams/f]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from an F distribution.</span>
-   <span class="signature">[`frechet( alpha, s, m[, options] )`][@stdlib/random/streams/frechet]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a Fréchet distribution.</span>
-   <span class="signature">[`gamma( alpha, beta[, options] )`][@stdlib/random/streams/gamma]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a gamma distribution.</span>
-   <span class="signature">[`geometric( p[, options] )`][@stdlib/random/streams/geometric]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a geometric distribution.</span>
-   <span class="signature">[`gumbel( mu, beta[, options] )`][@stdlib/random/streams/gumbel]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a Gumbel distribution.</span>
-   <span class="signature">[`hypergeometric( N, K, n[, options] )`][@stdlib/random/streams/hypergeometric]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a hypergeometric distribution.</span>
-   <span class="signature">[`improvedZiggurat( [options] )`][@stdlib/random/streams/improved-ziggurat]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a standard normal distribution using the Improved Ziggurat algorithm.</span>
-   <span class="signature">[`invgamma( alpha, beta[, options] )`][@stdlib/random/streams/invgamma]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from an inverse gamma distribution.</span>
-   <span class="signature">[`kumaraswamy( a, b[, options] )`][@stdlib/random/streams/kumaraswamy]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a Kumaraswamy's double bounded distribution.</span>
-   <span class="signature">[`laplace( mu, b[, options] )`][@stdlib/random/streams/laplace]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a Laplace (double exponential) distribution.</span>
-   <span class="signature">[`levy( mu, c[, options] )`][@stdlib/random/streams/levy]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a Lévy distribution.</span>
-   <span class="signature">[`logistic( mu, s[, options] )`][@stdlib/random/streams/logistic]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a logistic distribution.</span>
-   <span class="signature">[`lognormal( mu, sigma[, options] )`][@stdlib/random/streams/lognormal]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a lognormal distribution.</span>
-   <span class="signature">[`minstdShuffle( [options] )`][@stdlib/random/streams/minstd-shuffle]</span><span class="delimiter">: </span><span class="description">create a readable stream for a linear congruential pseudorandom number generator (LCG) whose output is shuffled.</span>
-   <span class="signature">[`minstd( [options] )`][@stdlib/random/streams/minstd]</span><span class="delimiter">: </span><span class="description">create a readable stream for a linear congruential pseudorandom number generator (LCG) based on Park and Miller.</span>
-   <span class="signature">[`mt19937( [options] )`][@stdlib/random/streams/mt19937]</span><span class="delimiter">: </span><span class="description">create a readable stream for a 32-bit Mersenne Twister pseudorandom number generator.</span>
-   <span class="signature">[`negativeBinomial( r, p[, options] )`][@stdlib/random/streams/negative-binomial]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a negative binomial distribution.</span>
-   <span class="signature">[`normal( mu, sigma[, options] )`][@stdlib/random/streams/normal]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a normal distribution.</span>
-   <span class="signature">[`pareto1( alpha, beta[, options] )`][@stdlib/random/streams/pareto-type1]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a Pareto (Type I) distribution.</span>
-   <span class="signature">[`poisson( lambda[, options] )`][@stdlib/random/streams/poisson]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a Poisson distribution.</span>
-   <span class="signature">[`randi( [options] )`][@stdlib/random/streams/randi]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers having integer values.</span>
-   <span class="signature">[`randn( [options] )`][@stdlib/random/streams/randn]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a standard normal distribution.</span>
-   <span class="signature">[`randu( [options] )`][@stdlib/random/streams/randu]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating uniformly distributed pseudorandom numbers between `0` and `1`.</span>
-   <span class="signature">[`rayleigh( sigma[, options] )`][@stdlib/random/streams/rayleigh]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a Rayleigh distribution.</span>
-   <span class="signature">[`t( v[, options] )`][@stdlib/random/streams/t]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a Student's t distribution.</span>
-   <span class="signature">[`triangular( a, b, c[, options] )`][@stdlib/random/streams/triangular]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a triangular distribution.</span>
-   <span class="signature">[`uniform( a, b[, options] )`][@stdlib/random/streams/uniform]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a uniform distribution.</span>
-   <span class="signature">[`weibull( k, lambda[, options] )`][@stdlib/random/streams/weibull]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a Weibull distribution.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils/keys' );
var ns = require( '@stdlib/random/streams' );

console.log( objectKeys( ns ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <toc-links> -->

[@stdlib/random/streams/arcsine]: https://github.com/stdlib-js/random/tree/main/streams/arcsine

[@stdlib/random/streams/bernoulli]: https://github.com/stdlib-js/random/tree/main/streams/bernoulli

[@stdlib/random/streams/beta]: https://github.com/stdlib-js/random/tree/main/streams/beta

[@stdlib/random/streams/betaprime]: https://github.com/stdlib-js/random/tree/main/streams/betaprime

[@stdlib/random/streams/binomial]: https://github.com/stdlib-js/random/tree/main/streams/binomial

[@stdlib/random/streams/box-muller]: https://github.com/stdlib-js/random/tree/main/streams/box-muller

[@stdlib/random/streams/cauchy]: https://github.com/stdlib-js/random/tree/main/streams/cauchy

[@stdlib/random/streams/chi]: https://github.com/stdlib-js/random/tree/main/streams/chi

[@stdlib/random/streams/chisquare]: https://github.com/stdlib-js/random/tree/main/streams/chisquare

[@stdlib/random/streams/cosine]: https://github.com/stdlib-js/random/tree/main/streams/cosine

[@stdlib/random/streams/discrete-uniform]: https://github.com/stdlib-js/random/tree/main/streams/discrete-uniform

[@stdlib/random/streams/erlang]: https://github.com/stdlib-js/random/tree/main/streams/erlang

[@stdlib/random/streams/exponential]: https://github.com/stdlib-js/random/tree/main/streams/exponential

[@stdlib/random/streams/f]: https://github.com/stdlib-js/random/tree/main/streams/f

[@stdlib/random/streams/frechet]: https://github.com/stdlib-js/random/tree/main/streams/frechet

[@stdlib/random/streams/gamma]: https://github.com/stdlib-js/random/tree/main/streams/gamma

[@stdlib/random/streams/geometric]: https://github.com/stdlib-js/random/tree/main/streams/geometric

[@stdlib/random/streams/gumbel]: https://github.com/stdlib-js/random/tree/main/streams/gumbel

[@stdlib/random/streams/hypergeometric]: https://github.com/stdlib-js/random/tree/main/streams/hypergeometric

[@stdlib/random/streams/improved-ziggurat]: https://github.com/stdlib-js/random/tree/main/streams/improved-ziggurat

[@stdlib/random/streams/invgamma]: https://github.com/stdlib-js/random/tree/main/streams/invgamma

[@stdlib/random/streams/kumaraswamy]: https://github.com/stdlib-js/random/tree/main/streams/kumaraswamy

[@stdlib/random/streams/laplace]: https://github.com/stdlib-js/random/tree/main/streams/laplace

[@stdlib/random/streams/levy]: https://github.com/stdlib-js/random/tree/main/streams/levy

[@stdlib/random/streams/logistic]: https://github.com/stdlib-js/random/tree/main/streams/logistic

[@stdlib/random/streams/lognormal]: https://github.com/stdlib-js/random/tree/main/streams/lognormal

[@stdlib/random/streams/minstd-shuffle]: https://github.com/stdlib-js/random/tree/main/streams/minstd-shuffle

[@stdlib/random/streams/minstd]: https://github.com/stdlib-js/random/tree/main/streams/minstd

[@stdlib/random/streams/mt19937]: https://github.com/stdlib-js/random/tree/main/streams/mt19937

[@stdlib/random/streams/negative-binomial]: https://github.com/stdlib-js/random/tree/main/streams/negative-binomial

[@stdlib/random/streams/normal]: https://github.com/stdlib-js/random/tree/main/streams/normal

[@stdlib/random/streams/pareto-type1]: https://github.com/stdlib-js/random/tree/main/streams/pareto-type1

[@stdlib/random/streams/poisson]: https://github.com/stdlib-js/random/tree/main/streams/poisson

[@stdlib/random/streams/randi]: https://github.com/stdlib-js/random/tree/main/streams/randi

[@stdlib/random/streams/randn]: https://github.com/stdlib-js/random/tree/main/streams/randn

[@stdlib/random/streams/randu]: https://github.com/stdlib-js/random/tree/main/streams/randu

[@stdlib/random/streams/rayleigh]: https://github.com/stdlib-js/random/tree/main/streams/rayleigh

[@stdlib/random/streams/t]: https://github.com/stdlib-js/random/tree/main/streams/t

[@stdlib/random/streams/triangular]: https://github.com/stdlib-js/random/tree/main/streams/triangular

[@stdlib/random/streams/uniform]: https://github.com/stdlib-js/random/tree/main/streams/uniform

[@stdlib/random/streams/weibull]: https://github.com/stdlib-js/random/tree/main/streams/weibull

<!-- </toc-links> -->

</section>

<!-- /.links -->
