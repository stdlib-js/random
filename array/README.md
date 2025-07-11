<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

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

# Array

> Pseudorandom number generator (PRNG) array creation functions.

<section class="usage">

## Usage

```javascript
var ns = require( '@stdlib/random/array' );
```

#### ns

Namespace containing array creation pseudorandom number generator (PRNG) functions.

```javascript
var o = ns;
// returns {...}
```

The namespace contains the following:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`arcsine( len, a, b[, options] )`][@stdlib/random/array/arcsine]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from an arcsine distribution.</span>
-   <span class="signature">[`bernoulli( len, p[, options] )`][@stdlib/random/array/bernoulli]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a Bernoulli distribution.</span>
-   <span class="signature">[`beta( len, alpha, beta[, options] )`][@stdlib/random/array/beta]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a beta distribution.</span>
-   <span class="signature">[`betaprime( len, alpha, beta[, options] )`][@stdlib/random/array/betaprime]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a beta prime distribution.</span>
-   <span class="signature">[`binomial( len, n, p[, options] )`][@stdlib/random/array/binomial]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a binomial distribution.</span>
-   <span class="signature">[`cauchy( len, x0, gamma[, options] )`][@stdlib/random/array/cauchy]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a Cauchy distribution.</span>
-   <span class="signature">[`chi( len, k[, options] )`][@stdlib/random/array/chi]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a chi distribution.</span>
-   <span class="signature">[`chisquare( len, k[, options] )`][@stdlib/random/array/chisquare]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a chi-square distribution.</span>
-   <span class="signature">[`cosine( len, mu, s[, options] )`][@stdlib/random/array/cosine]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a raised cosine distribution.</span>
-   <span class="signature">[`discreteUniform( len, a, b[, options] )`][@stdlib/random/array/discrete-uniform]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a discrete uniform distribution.</span>
-   <span class="signature">[`erlang( len, k, lambda[, options] )`][@stdlib/random/array/erlang]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from an Erlang distribution.</span>
-   <span class="signature">[`exponential( len, lambda[, options] )`][@stdlib/random/array/exponential]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from an exponential distribution.</span>
-   <span class="signature">[`f( len, d1, d2[, options] )`][@stdlib/random/array/f]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from an F distribution.</span>
-   <span class="signature">[`frechet( len, alpha, s, m[, options] )`][@stdlib/random/array/frechet]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a Fréchet distribution.</span>
-   <span class="signature">[`gamma( len, alpha, beta[, options] )`][@stdlib/random/array/gamma]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a gamma distribution.</span>
-   <span class="signature">[`geometric( len, p[, options] )`][@stdlib/random/array/geometric]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a geometric distribution.</span>
-   <span class="signature">[`gumbel( len, mu, beta[, options] )`][@stdlib/random/array/gumbel]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a Gumbel distribution.</span>
-   <span class="signature">[`hypergeometric( len, N, K, n[, options] )`][@stdlib/random/array/hypergeometric]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a hypergeometric distribution.</span>
-   <span class="signature">[`invgamma( len, alpha, beta[, options] )`][@stdlib/random/array/invgamma]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a inverse gamma distribution.</span>
-   <span class="signature">[`kumaraswamy( len, a, b[, options] )`][@stdlib/random/array/kumaraswamy]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from Kumaraswamy's double bounded distribution.</span>
-   <span class="signature">[`laplace( len, mu, b[, options] )`][@stdlib/random/array/laplace]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a Laplace (double exponential) distribution.</span>
-   <span class="signature">[`levy( len, mu, c[, options] )`][@stdlib/random/array/levy]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a Lévy distribution.</span>
-   <span class="signature">[`logistic( len, mu, s[, options] )`][@stdlib/random/array/logistic]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a logistic distribution.</span>
-   <span class="signature">[`lognormal( len, mu, sigma[, options] )`][@stdlib/random/array/lognormal]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a lognormal distribution.</span>
-   <span class="signature">[`minstdShuffle( len[, options] )`][@stdlib/random/array/minstd-shuffle]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers generated using a linear congruential pseudorandom number generator (LCG) whose output is shuffled.</span>
-   <span class="signature">[`minstd( len[, options] )`][@stdlib/random/array/minstd]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers generated using a linear congruential pseudorandom number generator (LCG).</span>
-   <span class="signature">[`mt19937( len[, options] )`][@stdlib/random/array/mt19937]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers generated using a 32-bit Mersenne Twister pseudorandom number generator.</span>
-   <span class="signature">[`negativeBinomial( len, r, p[, options] )`][@stdlib/random/array/negative-binomial]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a negative binomial distribution.</span>
-   <span class="signature">[`normal( len, mu, sigma[, options] )`][@stdlib/random/array/normal]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a normal distribution.</span>
-   <span class="signature">[`pareto1( len, alpha, beta[, options] )`][@stdlib/random/array/pareto-type1]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a Pareto (Type I) distribution.</span>
-   <span class="signature">[`poisson( len, lambda[, options] )`][@stdlib/random/array/poisson]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a Poisson distribution.</span>
-   <span class="signature">[`randu( len[, options] )`][@stdlib/random/array/randu]</span><span class="delimiter">: </span><span class="description">create an array containing uniformly distributed pseudorandom numbers between `0` and `1`.</span>
-   <span class="signature">[`rayleigh( len, sigma[, options] )`][@stdlib/random/array/rayleigh]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a Rayleigh distribution.</span>
-   <span class="signature">[`t( len, v[, options] )`][@stdlib/random/array/t]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a Student's t-distribution.</span>
-   <span class="signature">[`tools`][@stdlib/random/array/tools]</span><span class="delimiter">: </span><span class="description">pseudorandom number generator (PRNG) array creation function tools.</span>
-   <span class="signature">[`triangular( len, a, b, c[, options] )`][@stdlib/random/array/triangular]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a triangular distribution.</span>
-   <span class="signature">[`uniform( len, a, b[, options] )`][@stdlib/random/array/uniform]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a continuous uniform distribution.</span>
-   <span class="signature">[`weibull( len, k, lambda[, options] )`][@stdlib/random/array/weibull]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a Weibull distribution.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var ns = require( '@stdlib/random/array' );

// Generate arrays with ten random numbers drawn from the respective distributions:
var out = ns.arcsine( 10, 2.0, 5.0 );
// returns <Float64Array>

out = ns.weibull( 10, 2.0, 5.0 );
// returns <Float64Array>

out = ns.laplace( 10, 2.0, 5.0 );
// returns <Float64Array>

// Factory methods:

// 1. Basic factory usage (no parameters):
var random = ns.arcsine.factory();
out = random( 10, 2.0, 5.0 );
// returns <Float64Array>

// 2. Factory with options (e.g., seed):
random = ns.arcsine.factory({
    'seed': 1234
});
out = random( 10, 2.0, 5.0 );
// returns <Float64Array>

// 3. Factory with distribution parameters:
random = ns.arcsine.factory( 2.0, 5.0 );
out = random( 10 );
// returns <Float64Array>

// 4. Factory with both distribution parameters and options:
random = ns.arcsine.factory( 2.0, 5.0, {
    'dtype': 'float32'
});
out = random( 10 );
// returns <Float32Array>
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

[@stdlib/random/array/arcsine]: https://github.com/stdlib-js/random/tree/main/array/arcsine

[@stdlib/random/array/bernoulli]: https://github.com/stdlib-js/random/tree/main/array/bernoulli

[@stdlib/random/array/beta]: https://github.com/stdlib-js/random/tree/main/array/beta

[@stdlib/random/array/betaprime]: https://github.com/stdlib-js/random/tree/main/array/betaprime

[@stdlib/random/array/binomial]: https://github.com/stdlib-js/random/tree/main/array/binomial

[@stdlib/random/array/cauchy]: https://github.com/stdlib-js/random/tree/main/array/cauchy

[@stdlib/random/array/chi]: https://github.com/stdlib-js/random/tree/main/array/chi

[@stdlib/random/array/chisquare]: https://github.com/stdlib-js/random/tree/main/array/chisquare

[@stdlib/random/array/cosine]: https://github.com/stdlib-js/random/tree/main/array/cosine

[@stdlib/random/array/discrete-uniform]: https://github.com/stdlib-js/random/tree/main/array/discrete-uniform

[@stdlib/random/array/erlang]: https://github.com/stdlib-js/random/tree/main/array/erlang

[@stdlib/random/array/exponential]: https://github.com/stdlib-js/random/tree/main/array/exponential

[@stdlib/random/array/f]: https://github.com/stdlib-js/random/tree/main/array/f

[@stdlib/random/array/frechet]: https://github.com/stdlib-js/random/tree/main/array/frechet

[@stdlib/random/array/gamma]: https://github.com/stdlib-js/random/tree/main/array/gamma

[@stdlib/random/array/geometric]: https://github.com/stdlib-js/random/tree/main/array/geometric

[@stdlib/random/array/gumbel]: https://github.com/stdlib-js/random/tree/main/array/gumbel

[@stdlib/random/array/hypergeometric]: https://github.com/stdlib-js/random/tree/main/array/hypergeometric

[@stdlib/random/array/invgamma]: https://github.com/stdlib-js/random/tree/main/array/invgamma

[@stdlib/random/array/kumaraswamy]: https://github.com/stdlib-js/random/tree/main/array/kumaraswamy

[@stdlib/random/array/laplace]: https://github.com/stdlib-js/random/tree/main/array/laplace

[@stdlib/random/array/levy]: https://github.com/stdlib-js/random/tree/main/array/levy

[@stdlib/random/array/logistic]: https://github.com/stdlib-js/random/tree/main/array/logistic

[@stdlib/random/array/lognormal]: https://github.com/stdlib-js/random/tree/main/array/lognormal

[@stdlib/random/array/minstd-shuffle]: https://github.com/stdlib-js/random/tree/main/array/minstd-shuffle

[@stdlib/random/array/minstd]: https://github.com/stdlib-js/random/tree/main/array/minstd

[@stdlib/random/array/mt19937]: https://github.com/stdlib-js/random/tree/main/array/mt19937

[@stdlib/random/array/negative-binomial]: https://github.com/stdlib-js/random/tree/main/array/negative-binomial

[@stdlib/random/array/normal]: https://github.com/stdlib-js/random/tree/main/array/normal

[@stdlib/random/array/pareto-type1]: https://github.com/stdlib-js/random/tree/main/array/pareto-type1

[@stdlib/random/array/poisson]: https://github.com/stdlib-js/random/tree/main/array/poisson

[@stdlib/random/array/randu]: https://github.com/stdlib-js/random/tree/main/array/randu

[@stdlib/random/array/rayleigh]: https://github.com/stdlib-js/random/tree/main/array/rayleigh

[@stdlib/random/array/t]: https://github.com/stdlib-js/random/tree/main/array/t

[@stdlib/random/array/tools]: https://github.com/stdlib-js/random/tree/main/array/tools

[@stdlib/random/array/triangular]: https://github.com/stdlib-js/random/tree/main/array/triangular

[@stdlib/random/array/uniform]: https://github.com/stdlib-js/random/tree/main/array/uniform

[@stdlib/random/array/weibull]: https://github.com/stdlib-js/random/tree/main/array/weibull

<!-- </toc-links> -->

</section>

<!-- /.links -->
