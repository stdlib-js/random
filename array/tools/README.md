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

> Pseudorandom number generator (PRNG) array creation function tools.

<section class="usage">

## Usage

```javascript
var ns = require( '@stdlib/random/array/tools' );
```

#### ns

Namespace containing array creation pseudorandom number generator (PRNG) function tools.

```javascript
var o = ns;
// returns {...}
```

The namespace contains the following:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`binaryFactory( prng, dtypes, dtype )`][@stdlib/random/array/tools/binary-factory]</span><span class="delimiter">: </span><span class="description">create a factory function for generating pseudorandom values drawn from a binary PRNG.</span>
-   <span class="signature">[`binary( prng, dtypes, dtype )`][@stdlib/random/array/tools/binary]</span><span class="delimiter">: </span><span class="description">constructor for creating arrays filled with pseudorandom values drawn from a binary PRNG.</span>
-   <span class="signature">[`nullary( prng, dtypes, dtype )`][@stdlib/random/array/tools/nullary]</span><span class="delimiter">: </span><span class="description">constructor for creating arrays filled with pseudorandom values drawn from a nullary PRNG.</span>
-   <span class="signature">[`ternaryFactory( prng, dtypes, dtype )`][@stdlib/random/array/tools/ternary-factory]</span><span class="delimiter">: </span><span class="description">create a factory function for generating pseudorandom values drawn from a ternary PRNG.</span>
-   <span class="signature">[`ternary( prng, dtypes, dtype )`][@stdlib/random/array/tools/ternary]</span><span class="delimiter">: </span><span class="description">constructor for creating arrays filled with pseudorandom values drawn from a ternary PRNG.</span>
-   <span class="signature">[`unaryFactory( prng, dtypes, dtype )`][@stdlib/random/array/tools/unary-factory]</span><span class="delimiter">: </span><span class="description">create a factory function for generating pseudorandom values drawn from a unary PRNG.</span>
-   <span class="signature">[`unary( prng, dtypes, dtype )`][@stdlib/random/array/tools/unary]</span><span class="delimiter">: </span><span class="description">constructor for creating arrays filled with pseudorandom values drawn from a unary PRNG.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var exponential = require( '@stdlib/random/base/exponential' );
var arcsine = require( '@stdlib/random/base/arcsine' );
var randn = require( '@stdlib/random/base/improved-ziggurat' );
var ns = require( '@stdlib/random/array/tools' );

// Create a binary PRNG array:
var dtypes = [ 'float64', 'float32', 'generic' ];
var defaultDType = 'float64';

var rand = new ns.binary( arcsine, dtypes, defaultDType );
var x = rand.generate( 10, 2.0, 5.0 );
// e.g., returns <Float64Array>[ ~3.65, ~4.34, ~3.52, ~4.68, ~2.62, ... ]

// Create a unary PRNG array:
rand = new ns.unary( exponential, dtypes, defaultDType );
x = rand.generate( 10, 0.5 );
// e.g., returns <Float64Array>[ ~0.22, ~2.89, ~0.69, ~2.48, ~0.82, ... ]

// Create a nullary PRNG array:
rand = new ns.nullary( randn, dtypes, defaultDType );
x = rand.generate( 10 );
// e.g., returns <Float64Array>[ ~-0.22, ~1.89, ~-0.69, ~0.48, ~-0.82, ... ]
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

[@stdlib/random/array/tools/binary-factory]: https://github.com/stdlib-js/random/tree/main/array/tools/binary-factory

[@stdlib/random/array/tools/binary]: https://github.com/stdlib-js/random/tree/main/array/tools/binary

[@stdlib/random/array/tools/nullary]: https://github.com/stdlib-js/random/tree/main/array/tools/nullary

[@stdlib/random/array/tools/ternary-factory]: https://github.com/stdlib-js/random/tree/main/array/tools/ternary-factory

[@stdlib/random/array/tools/ternary]: https://github.com/stdlib-js/random/tree/main/array/tools/ternary

[@stdlib/random/array/tools/unary-factory]: https://github.com/stdlib-js/random/tree/main/array/tools/unary-factory

[@stdlib/random/array/tools/unary]: https://github.com/stdlib-js/random/tree/main/array/tools/unary

<!-- </toc-links> -->

</section>

<!-- /.links -->
