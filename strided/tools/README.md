<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

> Pseudorandom number generator (PRNG) strided array function tools.

<section class="usage">

## Usage

```javascript
var ns = require( '@stdlib/random/strided/tools' );
```

#### ns

Namespace containing strided array pseudorandom number generator (PRNG) function tools.

```javascript
var o = ns;
// returns {...}
```

The namespace contains the following:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`binaryFactory( prng )`][@stdlib/random/strided/tools/binary-factory]</span><span class="delimiter">: </span><span class="description">create a factory function for filling strided arrays with pseudorandom values drawn from a binary PRNG.</span>
-   <span class="signature">[`ternaryFactory( prng )`][@stdlib/random/strided/tools/ternary-factory]</span><span class="delimiter">: </span><span class="description">create a factory function for filling strided arrays with pseudorandom values drawn from a ternary PRNG.</span>
-   <span class="signature">[`unaryFactory( prng )`][@stdlib/random/strided/tools/unary-factory]</span><span class="delimiter">: </span><span class="description">create a factory function for filling strided arrays with pseudorandom values drawn from a unary PRNG.</span>

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
var ns = require( '@stdlib/random/strided/tools' );

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

[@stdlib/random/strided/tools/binary-factory]: https://github.com/stdlib-js/random/tree/main/strided/tools/binary-factory

[@stdlib/random/strided/tools/ternary-factory]: https://github.com/stdlib-js/random/tree/main/strided/tools/ternary-factory

[@stdlib/random/strided/tools/unary-factory]: https://github.com/stdlib-js/random/tree/main/strided/tools/unary-factory

<!-- </toc-links> -->

</section>

<!-- /.links -->
