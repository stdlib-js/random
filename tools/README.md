<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

# Tools

> Pseudorandom number generator ndarray creation function tools.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var ns = require( '@stdlib/random/tools' );
```

#### ns

Pseudorandom number generator ndarray creation function tools.

```javascript
var o = ns;
// returns {...}
```

The namespace exports the following:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`binaryFactory( prng, idtypes, odtypes, policies[, options] )`][@stdlib/random/tools/binary-factory]</span><span class="delimiter">: </span><span class="description">create a function for generating pseudorandom values drawn from a binary PRNG.</span>
-   <span class="signature">[`binary( prng, idtypes, odtypes, policies[, options] )`][@stdlib/random/tools/binary]</span><span class="delimiter">: </span><span class="description">constructor for creating ndarrays filled with pseudorandom values drawn from a binary PRNG.</span>
-   <span class="signature">[`unaryFactory( prng, idtypes, odtypes, policies[, options] )`][@stdlib/random/tools/unary-factory]</span><span class="delimiter">: </span><span class="description">create a function for generating pseudorandom values drawn from a unary PRNG.</span>
-   <span class="signature">[`unary( prng, idtypes, odtypes, policies[, options] )`][@stdlib/random/tools/unary]</span><span class="delimiter">: </span><span class="description">constructor for creating ndarrays filled with pseudorandom values drawn from a unary PRNG.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils/keys' );
var ns = require( '@stdlib/random/tools' );

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

[@stdlib/random/tools/binary-factory]: https://github.com/stdlib-js/random/tree/main/tools/binary-factory

[@stdlib/random/tools/binary]: https://github.com/stdlib-js/random/tree/main/tools/binary

[@stdlib/random/tools/unary-factory]: https://github.com/stdlib-js/random/tree/main/tools/unary-factory

[@stdlib/random/tools/unary]: https://github.com/stdlib-js/random/tree/main/tools/unary

<!-- </toc-links> -->

</section>

<!-- /.links -->
