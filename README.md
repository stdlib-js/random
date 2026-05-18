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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Random

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Random numbers.



<section class="usage">

## Usage

```javascript
import ns from 'https://cdn.jsdelivr.net/gh/stdlib-js/random@esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { arcsine, array, base, bernoulli, beta, betaprime, binomial, cauchy, chi, chisquare, cosine, discreteUniform, erlang, exponential, f, frechet, gamma, geometric, gumbel, hypergeometric, invgamma, iterators, kumaraswamy, laplace, levy, logistic, lognormal, negativeBinomial, normal, pareto1, poisson, rayleigh, sample, shuffle, streams, strided, t, tools, triangular, uniform, weibull } from 'https://cdn.jsdelivr.net/gh/stdlib-js/random@esm/index.mjs';
```

#### ns

Namespace containing random number functionality.

```javascript
var arr = ns.normal( [ 3, 3 ], 2.0, 5.0 );
// returns <ndarray>
```

The namespace exports the following functions to sample and shuffle elements from an array:

<!-- <toc pattern="+(sample|shuffle)"> -->

<div class="namespace-toc">

-   <span class="signature">[`sample( x[, options] )`][@stdlib/random/sample]</span><span class="delimiter">: </span><span class="description">sample elements from an array-like object.</span>
-   <span class="signature">[`shuffle( arr[, options] )`][@stdlib/random/shuffle]</span><span class="delimiter">: </span><span class="description">shuffle elements of an array-like object.</span>

</div>

<!-- </toc> -->

The namespace contains the following functions for generating pseudorandom values drawn from probability distributions:

<!-- <toc pattern="*" ignore="array" ignore="base" ignore="iter" ignore="streams" ignore="strided" ignore="sample" ignore="shuffle" ignore="tools"> -->

<div class="namespace-toc">

-   <span class="signature">[`arcsine( shape, a, b[, options] )`][@stdlib/random/arcsine]</span><span class="delimiter">: </span><span class="description">generate pseudorandom numbers drawn from an arcsine distribution.</span>
-   <span class="signature">[`bernoulli( shape, p[, options] )`][@stdlib/random/bernoulli]</span><span class="delimiter">: </span><span class="description">generate pseudorandom numbers drawn from a Bernoulli distribution.</span>
-   <span class="signature">[`beta( shape, a, b[, options] )`][@stdlib/random/beta]</span><span class="delimiter">: </span><span class="description">generate pseudorandom numbers drawn from a beta distribution.</span>
-   <span class="signature">[`betaprime( shape, alpha, beta[, options] )`][@stdlib/random/betaprime]</span><span class="delimiter">: </span><span class="description">generate pseudorandom numbers drawn from a betaprime distribution.</span>
-   <span class="signature">[`binomial( shape, n, p[, options] )`][@stdlib/random/binomial]</span><span class="delimiter">: </span><span class="description">generate pseudorandom numbers drawn from a binomial distribution.</span>
-   <span class="signature">[`cauchy( shape, x0, gamma[, options] )`][@stdlib/random/cauchy]</span><span class="delimiter">: </span><span class="description">generate pseudorandom numbers drawn from a Cauchy distribution.</span>
-   <span class="signature">[`chi( shape, k[, options] )`][@stdlib/random/chi]</span><span class="delimiter">: </span><span class="description">generate pseudorandom numbers drawn from a chi distribution.</span>
-   <span class="signature">[`chisquare( shape, k[, options] )`][@stdlib/random/chisquare]</span><span class="delimiter">: </span><span class="description">generate pseudorandom numbers drawn from a chi-square distribution.</span>
-   <span class="signature">[`cosine( shape, mu, s[, options] )`][@stdlib/random/cosine]</span><span class="delimiter">: </span><span class="description">generate pseudorandom numbers drawn from a raised cosine distribution.</span>
-   <span class="signature">[`discreteUniform( shape, a, b[, options] )`][@stdlib/random/discrete-uniform]</span><span class="delimiter">: </span><span class="description">generate pseudorandom numbers drawn from a discrete uniform distribution.</span>
-   <span class="signature">[`erlang( shape, k, lambda[, options] )`][@stdlib/random/erlang]</span><span class="delimiter">: </span><span class="description">generate pseudorandom numbers drawn from an Erlang distribution.</span>
-   <span class="signature">[`exponential( shape, lambda[, options] )`][@stdlib/random/exponential]</span><span class="delimiter">: </span><span class="description">generate pseudorandom numbers drawn from an exponential distribution.</span>
-   <span class="signature">[`f( shape, d1, d2[, options] )`][@stdlib/random/f]</span><span class="delimiter">: </span><span class="description">generate pseudorandom numbers drawn from an F distribution.</span>
-   <span class="signature">[`frechet( shape, alpha, s, m[, options] )`][@stdlib/random/frechet]</span><span class="delimiter">: </span><span class="description">generate pseudorandom numbers drawn from a Fréchet distribution.</span>
-   <span class="signature">[`gamma( shape, alpha, beta[, options] )`][@stdlib/random/gamma]</span><span class="delimiter">: </span><span class="description">generate pseudorandom numbers drawn from a gamma distribution.</span>
-   <span class="signature">[`geometric( shape, p[, options] )`][@stdlib/random/geometric]</span><span class="delimiter">: </span><span class="description">generate pseudorandom numbers drawn from a geometric distribution.</span>
-   <span class="signature">[`gumbel( shape, mu, beta[, options] )`][@stdlib/random/gumbel]</span><span class="delimiter">: </span><span class="description">generate pseudorandom numbers drawn from a Gumbel distribution.</span>
-   <span class="signature">[`hypergeometric( shape, N, K, n[, options] )`][@stdlib/random/hypergeometric]</span><span class="delimiter">: </span><span class="description">generate pseudorandom numbers drawn from a hypergeometric distribution.</span>
-   <span class="signature">[`invgamma( shape, alpha, beta[, options] )`][@stdlib/random/invgamma]</span><span class="delimiter">: </span><span class="description">generate pseudorandom numbers drawn from an inverse gamma distribution.</span>
-   <span class="signature">[`kumaraswamy( shape, a, b[, options] )`][@stdlib/random/kumaraswamy]</span><span class="delimiter">: </span><span class="description">generate pseudorandom numbers drawn from a Kumaraswamy distribution.</span>
-   <span class="signature">[`laplace( shape, mu, b[, options] )`][@stdlib/random/laplace]</span><span class="delimiter">: </span><span class="description">generate pseudorandom numbers drawn from a Laplace (double exponential) distribution.</span>
-   <span class="signature">[`levy( shape, mu, c[, options] )`][@stdlib/random/levy]</span><span class="delimiter">: </span><span class="description">generate pseudorandom numbers drawn from a Lévy distribution.</span>
-   <span class="signature">[`logistic( shape, mu, s[, options] )`][@stdlib/random/logistic]</span><span class="delimiter">: </span><span class="description">generate pseudorandom numbers drawn from a logistic distribution.</span>
-   <span class="signature">[`lognormal( shape, mu, sigma[, options] )`][@stdlib/random/lognormal]</span><span class="delimiter">: </span><span class="description">generate pseudorandom numbers drawn from a lognormal distribution.</span>
-   <span class="signature">[`negativeBinomial( shape, r, p[, options] )`][@stdlib/random/negative-binomial]</span><span class="delimiter">: </span><span class="description">generate pseudorandom numbers drawn from a negative binomial distribution.</span>
-   <span class="signature">[`normal( shape, mu, sigma[, options] )`][@stdlib/random/normal]</span><span class="delimiter">: </span><span class="description">generate pseudorandom numbers drawn from a normal distribution.</span>
-   <span class="signature">[`pareto1( shape, alpha, beta[, options] )`][@stdlib/random/pareto-type1]</span><span class="delimiter">: </span><span class="description">generate pseudorandom numbers drawn from a Pareto (Type I) distribution.</span>
-   <span class="signature">[`poisson( shape, lambda[, options] )`][@stdlib/random/poisson]</span><span class="delimiter">: </span><span class="description">generate pseudorandom numbers drawn from a Poisson distribution.</span>
-   <span class="signature">[`rayleigh( shape, sigma[, options] )`][@stdlib/random/rayleigh]</span><span class="delimiter">: </span><span class="description">generate pseudorandom numbers drawn from a Rayleigh distribution.</span>
-   <span class="signature">[`t( shape, v[, options] )`][@stdlib/random/t]</span><span class="delimiter">: </span><span class="description">generate pseudorandom numbers drawn from a Student's t-distribution.</span>
-   <span class="signature">[`triangular( shape, a, b, c[, options] )`][@stdlib/random/triangular]</span><span class="delimiter">: </span><span class="description">generate pseudorandom numbers drawn from a triangular distribution.</span>
-   <span class="signature">[`uniform( shape, a, b[, options] )`][@stdlib/random/uniform]</span><span class="delimiter">: </span><span class="description">generate pseudorandom numbers drawn from a continuous uniform distribution.</span>
-   <span class="signature">[`weibull( shape, k, lambda[, options] )`][@stdlib/random/weibull]</span><span class="delimiter">: </span><span class="description">generate pseudorandom numbers drawn from a Weibull distribution.</span>

</div>

<!-- </toc> -->

The namespace contains the following sub-namespaces:

<!-- <toc pattern="+(array|base|iter|streams|strided)" > -->

<div class="namespace-toc">

-   <span class="signature">[`array`][@stdlib/random/array]</span><span class="delimiter">: </span><span class="description">pseudorandom number generator (PRNG) array creation functions.</span>
-   <span class="signature">[`base`][@stdlib/random/base]</span><span class="delimiter">: </span><span class="description">base (i.e., lower-level) pseudorandom number generators (PRNGs).</span>
-   <span class="signature">[`iterators`][@stdlib/random/iter]</span><span class="delimiter">: </span><span class="description">pseudorandom number generator (PRNG) iterators.</span>
-   <span class="signature">[`streams`][@stdlib/random/streams]</span><span class="delimiter">: </span><span class="description">pseudorandom number generator (PRNG) streams.</span>
-   <span class="signature">[`strided`][@stdlib/random/strided]</span><span class="delimiter">: </span><span class="description">pseudorandom number generator (PRNG) strided array functions.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import logEach from 'https://cdn.jsdelivr.net/gh/stdlib-js/console/log-each@esm/index.mjs';
import ndarray2array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray/to-array@esm/index.mjs';
import ns from 'https://cdn.jsdelivr.net/gh/stdlib-js/random@esm/index.mjs';

// Create a function for generating arrays originating from the same state:
var random = ns.normal.factory({
    'state': ns.normal.state,
    'copy': true
});

// Generate 3 one-dimensional arrays:
var x1 = random( [ 5 ], 2.0, 5.0 );
var x2 = random( [ 5 ], 2.0, 5.0 );
var x3 = random( [ 5 ], 2.0, 5.0 );

// Print the contents:
logEach( '%f, %f, %f', ndarray2array( x1 ), ndarray2array( x2 ), ndarray2array( x3 ) );

// Create another function for generating random arrays with the original state:
random = ns.normal.factory({
    'state': ns.normal.state,
    'copy': true
});

// Generate a two-dimensional array which replicates the above pseudorandom number generation sequence:
var x4 = random( [ 3, 5 ], 2.0, 5.0 );

// Convert to a list of nested arrays:
var arr = ndarray2array( x4 );

// Print the contents:
console.log( '' );
logEach( '%f, %f, %f', arr[ 0 ], arr[ 1 ], arr[ 2 ] );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/random.svg
[npm-url]: https://npmjs.org/package/@stdlib/random

[test-image]: https://github.com/stdlib-js/random/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/random/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/random/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/random?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/random.svg
[dependencies-url]: https://david-dm.org/stdlib-js/random/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/random/tree/deno
[deno-readme]: https://github.com/stdlib-js/random/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/random/tree/umd
[umd-readme]: https://github.com/stdlib-js/random/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/random/tree/esm
[esm-readme]: https://github.com/stdlib-js/random/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/random/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/random/main/LICENSE

<!-- <toc-links> -->

[@stdlib/random/array]: https://github.com/stdlib-js/random/tree/main/array

[@stdlib/random/base]: https://github.com/stdlib-js/random/tree/main/base

[@stdlib/random/iter]: https://github.com/stdlib-js/random/tree/main/iter

[@stdlib/random/streams]: https://github.com/stdlib-js/random/tree/main/streams

[@stdlib/random/strided]: https://github.com/stdlib-js/random/tree/main/strided

[@stdlib/random/arcsine]: https://github.com/stdlib-js/random/tree/main/arcsine

[@stdlib/random/bernoulli]: https://github.com/stdlib-js/random/tree/main/bernoulli

[@stdlib/random/beta]: https://github.com/stdlib-js/random/tree/main/beta

[@stdlib/random/betaprime]: https://github.com/stdlib-js/random/tree/main/betaprime

[@stdlib/random/binomial]: https://github.com/stdlib-js/random/tree/main/binomial

[@stdlib/random/cauchy]: https://github.com/stdlib-js/random/tree/main/cauchy

[@stdlib/random/chi]: https://github.com/stdlib-js/random/tree/main/chi

[@stdlib/random/chisquare]: https://github.com/stdlib-js/random/tree/main/chisquare

[@stdlib/random/cosine]: https://github.com/stdlib-js/random/tree/main/cosine

[@stdlib/random/discrete-uniform]: https://github.com/stdlib-js/random/tree/main/discrete-uniform

[@stdlib/random/erlang]: https://github.com/stdlib-js/random/tree/main/erlang

[@stdlib/random/exponential]: https://github.com/stdlib-js/random/tree/main/exponential

[@stdlib/random/f]: https://github.com/stdlib-js/random/tree/main/f

[@stdlib/random/frechet]: https://github.com/stdlib-js/random/tree/main/frechet

[@stdlib/random/gamma]: https://github.com/stdlib-js/random/tree/main/gamma

[@stdlib/random/geometric]: https://github.com/stdlib-js/random/tree/main/geometric

[@stdlib/random/gumbel]: https://github.com/stdlib-js/random/tree/main/gumbel

[@stdlib/random/hypergeometric]: https://github.com/stdlib-js/random/tree/main/hypergeometric

[@stdlib/random/invgamma]: https://github.com/stdlib-js/random/tree/main/invgamma

[@stdlib/random/kumaraswamy]: https://github.com/stdlib-js/random/tree/main/kumaraswamy

[@stdlib/random/laplace]: https://github.com/stdlib-js/random/tree/main/laplace

[@stdlib/random/levy]: https://github.com/stdlib-js/random/tree/main/levy

[@stdlib/random/logistic]: https://github.com/stdlib-js/random/tree/main/logistic

[@stdlib/random/lognormal]: https://github.com/stdlib-js/random/tree/main/lognormal

[@stdlib/random/negative-binomial]: https://github.com/stdlib-js/random/tree/main/negative-binomial

[@stdlib/random/normal]: https://github.com/stdlib-js/random/tree/main/normal

[@stdlib/random/pareto-type1]: https://github.com/stdlib-js/random/tree/main/pareto-type1

[@stdlib/random/poisson]: https://github.com/stdlib-js/random/tree/main/poisson

[@stdlib/random/rayleigh]: https://github.com/stdlib-js/random/tree/main/rayleigh

[@stdlib/random/t]: https://github.com/stdlib-js/random/tree/main/t

[@stdlib/random/triangular]: https://github.com/stdlib-js/random/tree/main/triangular

[@stdlib/random/uniform]: https://github.com/stdlib-js/random/tree/main/uniform

[@stdlib/random/weibull]: https://github.com/stdlib-js/random/tree/main/weibull

[@stdlib/random/sample]: https://github.com/stdlib-js/random/tree/main/sample

[@stdlib/random/shuffle]: https://github.com/stdlib-js/random/tree/main/shuffle

<!-- </toc-links> -->

</section>

<!-- /.links -->
