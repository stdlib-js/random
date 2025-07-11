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

# Pseudorandom Number Generator Iterators

> Pseudorandom number generator (PRNG) iterators.

<section class="usage">

## Usage

```javascript
var ns = require( '@stdlib/random/iter' );
```

#### ns

Namespace containing pseudorandom number generator (PRNG) iterators.

```javascript
var iterators = ns;
// returns {...}
```

The namespace contains the following functions for creating iterator protocol-compliant iterators:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`arcsine( a, b[, options] )`][@stdlib/random/iter/arcsine]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from an arcsine distribution.</span>
-   <span class="signature">[`bernoulli( p[, options] )`][@stdlib/random/iter/bernoulli]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a Bernoulli distribution.</span>
-   <span class="signature">[`beta( alpha, beta[, options] )`][@stdlib/random/iter/beta]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a beta distribution.</span>
-   <span class="signature">[`betaprime( alpha, beta[, options] )`][@stdlib/random/iter/betaprime]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a beta prime distribution.</span>
-   <span class="signature">[`binomial( n, p[, options] )`][@stdlib/random/iter/binomial]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a binomial distribution.</span>
-   <span class="signature">[`boxMuller( [options] )`][@stdlib/random/iter/box-muller]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a standard normal distribution using the Box-Muller transform.</span>
-   <span class="signature">[`cauchy( x0, gamma[, options] )`][@stdlib/random/iter/cauchy]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a Cauchy distribution.</span>
-   <span class="signature">[`chi( k[, options] )`][@stdlib/random/iter/chi]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a chi distribution.</span>
-   <span class="signature">[`chisquare( k[, options] )`][@stdlib/random/iter/chisquare]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a chi-square distribution.</span>
-   <span class="signature">[`cosine( mu, s[, options] )`][@stdlib/random/iter/cosine]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a raised cosine distribution.</span>
-   <span class="signature">[`discreteUniform( a, b[, options] )`][@stdlib/random/iter/discrete-uniform]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a discrete uniform distribution.</span>
-   <span class="signature">[`erlang( k, lambda[, options] )`][@stdlib/random/iter/erlang]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from an Erlang distribution.</span>
-   <span class="signature">[`exponential( lambda[, options] )`][@stdlib/random/iter/exponential]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from an exponential distribution.</span>
-   <span class="signature">[`f( d1, d2[, options] )`][@stdlib/random/iter/f]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from an F distribution.</span>
-   <span class="signature">[`frechet( alpha, s, m[, options] )`][@stdlib/random/iter/frechet]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a Fréchet distribution.</span>
-   <span class="signature">[`gamma( alpha, beta[, options] )`][@stdlib/random/iter/gamma]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a gamma distribution.</span>
-   <span class="signature">[`geometric( p[, options] )`][@stdlib/random/iter/geometric]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a geometric distribution.</span>
-   <span class="signature">[`gumbel( mu, beta[, options] )`][@stdlib/random/iter/gumbel]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a Gumbel distribution.</span>
-   <span class="signature">[`hypergeometric( N, K, n[, options] )`][@stdlib/random/iter/hypergeometric]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a hypergeometric distribution.</span>
-   <span class="signature">[`improvedZiggurat( [options] )`][@stdlib/random/iter/improved-ziggurat]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a standard normal distribution using the Improved Ziggurat algorithm.</span>
-   <span class="signature">[`invgamma( alpha, beta[, options] )`][@stdlib/random/iter/invgamma]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from an inverse gamma distribution.</span>
-   <span class="signature">[`kumaraswamy( a, b[, options] )`][@stdlib/random/iter/kumaraswamy]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a Kumaraswamy's double bounded distribution.</span>
-   <span class="signature">[`laplace( mu, b[, options] )`][@stdlib/random/iter/laplace]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a Laplace (double exponential) distribution.</span>
-   <span class="signature">[`levy( mu, c[, options] )`][@stdlib/random/iter/levy]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a Lévy distribution.</span>
-   <span class="signature">[`logistic( mu, s[, options] )`][@stdlib/random/iter/logistic]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a logistic distribution.</span>
-   <span class="signature">[`lognormal( mu, sigma[, options] )`][@stdlib/random/iter/lognormal]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a lognormal distribution.</span>
-   <span class="signature">[`minstdShuffle( [options] )`][@stdlib/random/iter/minstd-shuffle]</span><span class="delimiter">: </span><span class="description">create an iterator for a linear congruential pseudorandom number generator (LCG) whose output is shuffled.</span>
-   <span class="signature">[`minstd( [options] )`][@stdlib/random/iter/minstd]</span><span class="delimiter">: </span><span class="description">create an iterator for a linear congruential pseudorandom number generator (LCG) based on Park and Miller.</span>
-   <span class="signature">[`mt19937( [options] )`][@stdlib/random/iter/mt19937]</span><span class="delimiter">: </span><span class="description">create an iterator for a 32-bit Mersenne Twister pseudorandom number generator.</span>
-   <span class="signature">[`negativeBinomial( r, p[, options] )`][@stdlib/random/iter/negative-binomial]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a negative binomial distribution.</span>
-   <span class="signature">[`normal( mu, sigma[, options] )`][@stdlib/random/iter/normal]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a normal distribution.</span>
-   <span class="signature">[`pareto1( alpha, beta[, options] )`][@stdlib/random/iter/pareto-type1]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a Pareto (Type I) distribution.</span>
-   <span class="signature">[`poisson( lambda[, options] )`][@stdlib/random/iter/poisson]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a Poisson distribution.</span>
-   <span class="signature">[`randi( [options] )`][@stdlib/random/iter/randi]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers having integer values.</span>
-   <span class="signature">[`randn( [options] )`][@stdlib/random/iter/randn]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a standard normal distribution.</span>
-   <span class="signature">[`randu( [options] )`][@stdlib/random/iter/randu]</span><span class="delimiter">: </span><span class="description">create an iterator for generating uniformly distributed pseudorandom numbers between `0` and `1`.</span>
-   <span class="signature">[`rayleigh( sigma[, options] )`][@stdlib/random/iter/rayleigh]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a Rayleigh distribution.</span>
-   <span class="signature">[`t( v[, options] )`][@stdlib/random/iter/t]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a Student's t distribution.</span>
-   <span class="signature">[`triangular( a, b, c[, options] )`][@stdlib/random/iter/triangular]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a triangular distribution.</span>
-   <span class="signature">[`uniform( a, b[, options] )`][@stdlib/random/iter/uniform]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a continuous uniform distribution.</span>
-   <span class="signature">[`weibull( k, lambda[, options] )`][@stdlib/random/iter/weibull]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a Weibull distribution.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var roundn = require( '@stdlib/math/base/special/roundn' );
var mean = require( '@stdlib/stats/strided/mean' );
var iter = require( '@stdlib/random/iter' );

var initialPrice = 100.0;
var currentPrice = initialPrice;
var numDays = 30;
var volatility = 0.02; // 2% daily volatility

// Create iterator for random price movements:
var priceIter = iter.normal( 0.0, volatility );
var prices = [ initialPrice ];
var dailyReturns = [];

// Simulate price movements:
var change;
var i;
for ( i = 0; i < numDays; i++ ) {
    change = priceIter.next().value;
    currentPrice *= ( 1.0 + change );
    prices.push( roundn( currentPrice, -2 ) );
    dailyReturns.push( change * 100.0 );
}

// Calculate summary statistics:
var totalReturn = ( ( currentPrice - initialPrice ) / initialPrice ) * 100.0;
var avgReturn = mean( numDays, dailyReturns, 1 );

// Print results:
console.log( 'Stock Price Simulation Results:' );
console.log( '-------------------------------' );
console.log( 'Initial Price: $%d', initialPrice );
console.log( 'Final Price: $%d', roundn( currentPrice, -2 ) );
console.log( 'Total Return: %d%', roundn( totalReturn, -2 ) );
console.log( 'Average Daily Return: %d%', roundn( avgReturn, -2 ) );
console.log( '\nPrice History:' );
console.log( prices.join( ' → ' ) );
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

[@stdlib/random/iter/arcsine]: https://github.com/stdlib-js/random/tree/main/iter/arcsine

[@stdlib/random/iter/bernoulli]: https://github.com/stdlib-js/random/tree/main/iter/bernoulli

[@stdlib/random/iter/beta]: https://github.com/stdlib-js/random/tree/main/iter/beta

[@stdlib/random/iter/betaprime]: https://github.com/stdlib-js/random/tree/main/iter/betaprime

[@stdlib/random/iter/binomial]: https://github.com/stdlib-js/random/tree/main/iter/binomial

[@stdlib/random/iter/box-muller]: https://github.com/stdlib-js/random/tree/main/iter/box-muller

[@stdlib/random/iter/cauchy]: https://github.com/stdlib-js/random/tree/main/iter/cauchy

[@stdlib/random/iter/chi]: https://github.com/stdlib-js/random/tree/main/iter/chi

[@stdlib/random/iter/chisquare]: https://github.com/stdlib-js/random/tree/main/iter/chisquare

[@stdlib/random/iter/cosine]: https://github.com/stdlib-js/random/tree/main/iter/cosine

[@stdlib/random/iter/discrete-uniform]: https://github.com/stdlib-js/random/tree/main/iter/discrete-uniform

[@stdlib/random/iter/erlang]: https://github.com/stdlib-js/random/tree/main/iter/erlang

[@stdlib/random/iter/exponential]: https://github.com/stdlib-js/random/tree/main/iter/exponential

[@stdlib/random/iter/f]: https://github.com/stdlib-js/random/tree/main/iter/f

[@stdlib/random/iter/frechet]: https://github.com/stdlib-js/random/tree/main/iter/frechet

[@stdlib/random/iter/gamma]: https://github.com/stdlib-js/random/tree/main/iter/gamma

[@stdlib/random/iter/geometric]: https://github.com/stdlib-js/random/tree/main/iter/geometric

[@stdlib/random/iter/gumbel]: https://github.com/stdlib-js/random/tree/main/iter/gumbel

[@stdlib/random/iter/hypergeometric]: https://github.com/stdlib-js/random/tree/main/iter/hypergeometric

[@stdlib/random/iter/improved-ziggurat]: https://github.com/stdlib-js/random/tree/main/iter/improved-ziggurat

[@stdlib/random/iter/invgamma]: https://github.com/stdlib-js/random/tree/main/iter/invgamma

[@stdlib/random/iter/kumaraswamy]: https://github.com/stdlib-js/random/tree/main/iter/kumaraswamy

[@stdlib/random/iter/laplace]: https://github.com/stdlib-js/random/tree/main/iter/laplace

[@stdlib/random/iter/levy]: https://github.com/stdlib-js/random/tree/main/iter/levy

[@stdlib/random/iter/logistic]: https://github.com/stdlib-js/random/tree/main/iter/logistic

[@stdlib/random/iter/lognormal]: https://github.com/stdlib-js/random/tree/main/iter/lognormal

[@stdlib/random/iter/minstd-shuffle]: https://github.com/stdlib-js/random/tree/main/iter/minstd-shuffle

[@stdlib/random/iter/minstd]: https://github.com/stdlib-js/random/tree/main/iter/minstd

[@stdlib/random/iter/mt19937]: https://github.com/stdlib-js/random/tree/main/iter/mt19937

[@stdlib/random/iter/negative-binomial]: https://github.com/stdlib-js/random/tree/main/iter/negative-binomial

[@stdlib/random/iter/normal]: https://github.com/stdlib-js/random/tree/main/iter/normal

[@stdlib/random/iter/pareto-type1]: https://github.com/stdlib-js/random/tree/main/iter/pareto-type1

[@stdlib/random/iter/poisson]: https://github.com/stdlib-js/random/tree/main/iter/poisson

[@stdlib/random/iter/randi]: https://github.com/stdlib-js/random/tree/main/iter/randi

[@stdlib/random/iter/randn]: https://github.com/stdlib-js/random/tree/main/iter/randn

[@stdlib/random/iter/randu]: https://github.com/stdlib-js/random/tree/main/iter/randu

[@stdlib/random/iter/rayleigh]: https://github.com/stdlib-js/random/tree/main/iter/rayleigh

[@stdlib/random/iter/t]: https://github.com/stdlib-js/random/tree/main/iter/t

[@stdlib/random/iter/triangular]: https://github.com/stdlib-js/random/tree/main/iter/triangular

[@stdlib/random/iter/uniform]: https://github.com/stdlib-js/random/tree/main/iter/uniform

[@stdlib/random/iter/weibull]: https://github.com/stdlib-js/random/tree/main/iter/weibull

<!-- </toc-links> -->

</section>

<!-- /.links -->
