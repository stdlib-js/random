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

# Raised Cosine Random Numbers

> Fill a strided array with pseudorandom numbers drawn from a [raised cosine][@stdlib/random/base/cosine] distribution.

<section class="usage">

## Usage

```javascript
var cosine = require( '@stdlib/random/strided/cosine' );
```

#### cosine( N, mu, sm, s, ss, out, so\[, options] )

Fills a strided array with pseudorandom numbers drawn from a [raised cosine][@stdlib/random/base/cosine] distribution.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

// Create an array:
var out = new Float64Array( 10 );

// Fill the array with pseudorandom numbers:
cosine( out.length, [ 2.0 ], 0, [ 5.0 ], 0, out, 1 );
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **mu**: mean.
-   **sm**: index increment for `mu`.
-   **s**: scale parameter.
-   **ss**: index increment for `s`.
-   **out**: output array.
-   **so**: index increment for `out`.

The `N` and stride parameters determine which strided array elements are accessed at runtime. For example, to access every other value in `out`,

```javascript
var out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

cosine( 3, [ 2.0 ], 0, [ 5.0 ], 0, out, 2 );
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );

// Initial arrays...
var mu0 = new Float64Array( [ 0.0, 0.0, 0.0, 2.0, 2.0, 2.0 ] );
var s0 = new Float64Array( [ 5.0, 5.0, 5.0, 5.0, 5.0, 5.0 ] );

// Create offset views...
var mu1 = new Float64Array( mu0.buffer, mu0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var s1 = new Float64Array( s0.buffer, s0.BYTES_PER_ELEMENT*3 ); // start at 4th element

// Create an output array:
var out = new Float64Array( 3 );

// Fill the output array:
cosine( out.length, mu1, -2, s1, 1, out, 1 );
```

The function accepts the following `options`:

-   **prng**: pseudorandom number generator for generating uniformly distributed pseudorandom numbers on the interval `[0,1)`. If provided, the function **ignores** both the `state` and `seed` options. In order to seed the underlying pseudorandom number generator, one must seed the provided `prng` (assuming the provided `prng` is seedable).
-   **seed**: pseudorandom number generator seed.
-   **state**: a [`Uint32Array`][@stdlib/array/uint32] containing pseudorandom number generator state. If provided, the function ignores the `seed` option.
-   **copy**: `boolean` indicating whether to copy a provided pseudorandom number generator state. Setting this option to `false` allows sharing state between two or more pseudorandom number generators. Setting this option to `true` ensures that an underlying generator has exclusive control over its internal state. Default: `true`.

To use a custom PRNG as the underlying source of uniformly distributed pseudorandom numbers, set the `prng` option.

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var minstd = require( '@stdlib/random/base/minstd' );

var opts = {
    'prng': minstd.normalized
};

var out = new Float64Array( 10 );
cosine( out.length, [ 2.0 ], 0, [ 5.0 ], 0, out, 1, opts );
```

To seed the underlying pseudorandom number generator, set the `seed` option.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var opts = {
    'seed': 12345
};

var out = new Float64Array( 10 );
cosine( out.length, [ 2.0 ], 0, [ 5.0 ], 0, out, 1, opts );
```

#### cosine.ndarray( N, mu, sm, om, s, ss, os, out, so, oo\[, options] )

Fills a strided array with pseudorandom numbers drawn from a [raised cosine][@stdlib/random/base/cosine] distribution using alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

// Create an array:
var out = new Float64Array( 10 );

// Fill the array with pseudorandom numbers:
cosine.ndarray( out.length, [ 2.0 ], 0, 0, [ 5.0 ], 0, 0, out, 1, 0 );
```

The function has the following additional parameters:

-   **om**: starting index for `mu`.
-   **os**: starting index for `s`.
-   **oo**: starting index for `out`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the offset parameters support indexing semantics based on starting indices. For example, to access every other value in `out` starting from the second value,

```javascript
var out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

cosine.ndarray( 3, [ 2.0 ], 0, 0, [ 5.0 ], 0, 0, out, 2, 1 );
```

The function accepts the same `options` as documented above for `cosine()`.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions leave the output array unchanged.
-   Both functions support array-like objects having getter and setter accessors for array element access.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var zeros = require( '@stdlib/array/zeros' );
var zeroTo = require( '@stdlib/array/base/zero-to' );
var logEach = require( '@stdlib/console/log-each' );
var cosine = require( '@stdlib/random/strided/cosine' );

// Specify a PRNG seed:
var opts = {
    'seed': 1234
};

// Create an array:
var x1 = zeros( 10, 'float64' );

// Create a list of indices:
var idx = zeroTo( x1.length );

// Fill the array with pseudorandom numbers:
cosine( x1.length, [ 2.0 ], 0, [ 5.0 ], 0, x1, 1, opts );

// Create a second array:
var x2 = zeros( 10, 'generic' );

// Fill the array with the same pseudorandom numbers:
cosine( x2.length, [ 2.0 ], 0, [ 5.0 ], 0, x2, 1, opts );

// Print the array contents:
logEach( 'x1[%d] = %.2f; x2[%d] = %.2f', idx, x1, idx, x2 );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/random/base/cosine`][@stdlib/random/base/cosine]</span><span class="delimiter">: </span><span class="description">raised cosine distributed pseudorandom numbers.</span>
-   <span class="package-name">[`@stdlib/random/array/cosine`][@stdlib/random/array/cosine]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a raised cosine distribution.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/random/base/cosine]: https://github.com/stdlib-js/random/tree/main/base/cosine

[@stdlib/array/uint32]: https://github.com/stdlib-js/array-uint32

<!-- <related-links> -->

[@stdlib/random/array/cosine]: https://github.com/stdlib-js/random/tree/main/array/cosine

<!-- </related-links> -->

</section>

<!-- /.links -->
