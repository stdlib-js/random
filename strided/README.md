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

# Strided

> Pseudorandom number generator (PRNG) strided array functions.

<section class="usage">

## Usage

```javascript
var ns = require( '@stdlib/random/strided' );
```

#### ns

Namespace containing strided array pseudorandom number generator (PRNG) functions.

```javascript
var o = ns;
// returns {...}
```

The namespace contains the following:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`arcsine( N, a, sa, b, sb, out, so[, options] )`][@stdlib/random/strided/arcsine]</span><span class="delimiter">: </span><span class="description">fill a strided array with pseudorandom numbers drawn from an arcsine distribution.</span>
-   <span class="signature">[`bernoulli( N, p, sp, out, so )`][@stdlib/random/strided/bernoulli]</span><span class="delimiter">: </span><span class="description">fill a strided array with pseudorandom numbers drawn from a Bernoulli distribution.</span>
-   <span class="signature">[`beta( N, alpha, sa, beta, sb, out, so[, options] )`][@stdlib/random/strided/beta]</span><span class="delimiter">: </span><span class="description">fill a strided array with pseudorandom numbers drawn from a beta distribution.</span>
-   <span class="signature">[`betaprime( N, alpha, sa, beta, sb, out, so[, options] )`][@stdlib/random/strided/betaprime]</span><span class="delimiter">: </span><span class="description">fill a strided array with pseudorandom numbers drawn from a beta prime distribution.</span>
-   <span class="signature">[`chi( N, k, sk, out, so )`][@stdlib/random/strided/chi]</span><span class="delimiter">: </span><span class="description">fill a strided array with pseudorandom numbers drawn from a chi distribution.</span>
-   <span class="signature">[`chisquare( N, k, sk, out, so )`][@stdlib/random/strided/chisquare]</span><span class="delimiter">: </span><span class="description">fill a strided array with pseudorandom numbers drawn from a chi-square distribution.</span>
-   <span class="signature">[`cosine( N, mu, sm, s, ss, out, so[, options] )`][@stdlib/random/strided/cosine]</span><span class="delimiter">: </span><span class="description">fill a strided array with pseudorandom numbers drawn from a raised cosine distribution.</span>
-   <span class="signature">[`discreteUniform( N, a, sa, b, sb, out, so[, options] )`][@stdlib/random/strided/discrete-uniform]</span><span class="delimiter">: </span><span class="description">fill a strided array with pseudorandom numbers drawn from a discrete uniform distribution.</span>
-   <span class="signature">[`exponential( N, lambda, sl, out, so )`][@stdlib/random/strided/exponential]</span><span class="delimiter">: </span><span class="description">fill a strided array with pseudorandom numbers drawn from an exponential distribution.</span>
-   <span class="signature">[`gamma( N, alpha, sa, beta, sb, out, so[, options] )`][@stdlib/random/strided/gamma]</span><span class="delimiter">: </span><span class="description">fill a strided array with pseudorandom numbers drawn from a gamma distribution.</span>
-   <span class="signature">[`geometric( N, p, sp, out, so )`][@stdlib/random/strided/geometric]</span><span class="delimiter">: </span><span class="description">fill a strided array with pseudorandom numbers drawn from a geometric distribution.</span>
-   <span class="signature">[`invgamma( N, alpha, sa, beta, sb, out, so[, options] )`][@stdlib/random/strided/invgamma]</span><span class="delimiter">: </span><span class="description">fill a strided array with pseudorandom numbers drawn from an inverse gamma distribution.</span>
-   <span class="signature">[`lognormal( N, mu, sm, sigma, ss, out, so[, options] )`][@stdlib/random/strided/lognormal]</span><span class="delimiter">: </span><span class="description">fill a strided array with pseudorandom numbers drawn from a lognormal distribution.</span>
-   <span class="signature">[`minstdShuffle( N, out, so[, options] )`][@stdlib/random/strided/minstd-shuffle]</span><span class="delimiter">: </span><span class="description">fill a strided array with pseudorandom numbers generated using a linear congruential pseudorandom number generator (LCG) whose output is shuffled.</span>
-   <span class="signature">[`minstd( N, out, so[, options] )`][@stdlib/random/strided/minstd]</span><span class="delimiter">: </span><span class="description">fill a strided array with pseudorandom numbers generated using a linear congruential pseudorandom number generator (LCG).</span>
-   <span class="signature">[`mt19937( N, out, so[, options] )`][@stdlib/random/strided/mt19937]</span><span class="delimiter">: </span><span class="description">fill a strided array with pseudorandom numbers generated using a 32-bit Mersenne Twister pseudorandom number generator.</span>
-   <span class="signature">[`normal( N, mu, sm, sigma, ss, out, so[, options] )`][@stdlib/random/strided/normal]</span><span class="delimiter">: </span><span class="description">fill a strided array with pseudorandom numbers drawn from a normal distribution.</span>
-   <span class="signature">[`poisson( N, lambda, sl, out, so )`][@stdlib/random/strided/poisson]</span><span class="delimiter">: </span><span class="description">fill a strided array with pseudorandom numbers drawn from a Poisson distribution.</span>
-   <span class="signature">[`randu( N, out, so[, options] )`][@stdlib/random/strided/randu]</span><span class="delimiter">: </span><span class="description">fill a strided array with uniformly distributed pseudorandom numbers between `0` and `1`.</span>
-   <span class="signature">[`rayleigh( N, sigma, ss, out, so )`][@stdlib/random/strided/rayleigh]</span><span class="delimiter">: </span><span class="description">fill a strided array with pseudorandom numbers drawn from a Rayleigh distribution.</span>
-   <span class="signature">[`t( N, v, sv, out, so )`][@stdlib/random/strided/t]</span><span class="delimiter">: </span><span class="description">fill a strided array with pseudorandom numbers drawn from a Student's t-distribution.</span>
-   <span class="signature">[`uniform( N, a, sa, b, sb, out, so[, options] )`][@stdlib/random/strided/uniform]</span><span class="delimiter">: </span><span class="description">fill a strided array with pseudorandom numbers drawn from a continuous uniform distribution.</span>
-   <span class="signature">[`weibull( N, k, sk, lambda, sl, out, so[, options] )`][@stdlib/random/strided/weibull]</span><span class="delimiter">: </span><span class="description">fill a strided array with pseudorandom numbers drawn from a Weibull distribution.</span>

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
var ns = require( '@stdlib/random/strided' );

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

[@stdlib/random/strided/arcsine]: https://github.com/stdlib-js/random/tree/main/strided/arcsine

[@stdlib/random/strided/bernoulli]: https://github.com/stdlib-js/random/tree/main/strided/bernoulli

[@stdlib/random/strided/beta]: https://github.com/stdlib-js/random/tree/main/strided/beta

[@stdlib/random/strided/betaprime]: https://github.com/stdlib-js/random/tree/main/strided/betaprime

[@stdlib/random/strided/chi]: https://github.com/stdlib-js/random/tree/main/strided/chi

[@stdlib/random/strided/chisquare]: https://github.com/stdlib-js/random/tree/main/strided/chisquare

[@stdlib/random/strided/cosine]: https://github.com/stdlib-js/random/tree/main/strided/cosine

[@stdlib/random/strided/discrete-uniform]: https://github.com/stdlib-js/random/tree/main/strided/discrete-uniform

[@stdlib/random/strided/exponential]: https://github.com/stdlib-js/random/tree/main/strided/exponential

[@stdlib/random/strided/gamma]: https://github.com/stdlib-js/random/tree/main/strided/gamma

[@stdlib/random/strided/geometric]: https://github.com/stdlib-js/random/tree/main/strided/geometric

[@stdlib/random/strided/invgamma]: https://github.com/stdlib-js/random/tree/main/strided/invgamma

[@stdlib/random/strided/lognormal]: https://github.com/stdlib-js/random/tree/main/strided/lognormal

[@stdlib/random/strided/minstd-shuffle]: https://github.com/stdlib-js/random/tree/main/strided/minstd-shuffle

[@stdlib/random/strided/minstd]: https://github.com/stdlib-js/random/tree/main/strided/minstd

[@stdlib/random/strided/mt19937]: https://github.com/stdlib-js/random/tree/main/strided/mt19937

[@stdlib/random/strided/normal]: https://github.com/stdlib-js/random/tree/main/strided/normal

[@stdlib/random/strided/poisson]: https://github.com/stdlib-js/random/tree/main/strided/poisson

[@stdlib/random/strided/randu]: https://github.com/stdlib-js/random/tree/main/strided/randu

[@stdlib/random/strided/rayleigh]: https://github.com/stdlib-js/random/tree/main/strided/rayleigh

[@stdlib/random/strided/t]: https://github.com/stdlib-js/random/tree/main/strided/t

[@stdlib/random/strided/uniform]: https://github.com/stdlib-js/random/tree/main/strided/uniform

[@stdlib/random/strided/weibull]: https://github.com/stdlib-js/random/tree/main/strided/weibull

<!-- </toc-links> -->

</section>

<!-- /.links -->
