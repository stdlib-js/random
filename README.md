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

# Random

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Random numbers.



<section class="usage">

## Usage

```javascript
import random from 'https://cdn.jsdelivr.net/gh/stdlib-js/random@deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { array, base, iterators, sample, shuffle, streams, strided } from 'https://cdn.jsdelivr.net/gh/stdlib-js/random@deno/mod.js';
```

#### random

Namespace containing random number functionality.

```javascript
var rand = random;
// returns {...}
```

The namespace exports the following functions to sample and shuffle elements from an array:

<!-- <toc pattern="+(sample|shuffle)"> -->

<div class="namespace-toc">

-   <span class="signature">[`sample( x[, options] )`][@stdlib/random/sample]</span><span class="delimiter">: </span><span class="description">sample elements from an array-like object.</span>
-   <span class="signature">[`shuffle( arr[, options] )`][@stdlib/random/shuffle]</span><span class="delimiter">: </span><span class="description">shuffle elements of an array-like object.</span>

</div>

<!-- </toc> -->

It also contains the following sub-namespaces:

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

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
import objectKeys from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils/keys@deno/mod.js';
import ns from 'https://cdn.jsdelivr.net/gh/stdlib-js/random@deno/mod.js';

console.log( objectKeys( ns ) );
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

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

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

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/random/tree/deno
[umd-url]: https://github.com/stdlib-js/random/tree/umd
[esm-url]: https://github.com/stdlib-js/random/tree/esm
[branches-url]: https://github.com/stdlib-js/random/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/random/main/LICENSE

<!-- <toc-links> -->

[@stdlib/random/array]: https://github.com/stdlib-js/random/tree/main/array

[@stdlib/random/base]: https://github.com/stdlib-js/random/tree/main/base

[@stdlib/random/iter]: https://github.com/stdlib-js/random/tree/main/iter

[@stdlib/random/streams]: https://github.com/stdlib-js/random/tree/main/streams

[@stdlib/random/strided]: https://github.com/stdlib-js/random/tree/main/strided

[@stdlib/random/sample]: https://github.com/stdlib-js/random/tree/main/sample

[@stdlib/random/shuffle]: https://github.com/stdlib-js/random/tree/main/shuffle

<!-- </toc-links> -->

</section>

<!-- /.links -->
