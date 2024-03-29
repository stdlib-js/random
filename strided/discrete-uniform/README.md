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

# Discrete Uniform Random Numbers

> Fill a strided array with pseudorandom numbers drawn from a [discrete uniform][@stdlib/random/base/uniform] distribution.

<section class="usage">

## Usage

```javascript
var discreteUniform = require( '@stdlib/random/strided/discrete-uniform' );
```

#### discreteUniform( N, a, sa, b, sb, out, so\[, options] )

Fills a strided array with pseudorandom numbers drawn from a [discrete uniform][@stdlib/random/base/uniform] distribution.

```javascript
var Int32Array = require( '@stdlib/array/int32' );

// Create an array:
var out = new Int32Array( 10 );

// Fill the array with pseudorandom numbers:
discreteUniform( out.length, [ -10 ], 0, [ 10 ], 0, out, 1 );
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **a**: minimum support.
-   **sa**: index increment for `a`.
-   **b**: maximum support.
-   **sb**: index increment for `b`.
-   **out**: output array.
-   **so**: index increment for `out`.

The `N` and stride parameters determine which strided array elements are accessed at runtime. For example, to access every other value in `out`,

```javascript
var out = [ 0, 0, 0, 0, 0, 0 ];

discreteUniform( 3, [ -10 ], 0, [ 10 ], 0, out, 2 );
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Int32Array = require( '@stdlib/array/int32' );

// Initial arrays...
var a0 = new Int32Array( [ -10, -10, -10, 0, 0, 0 ] );
var b0 = new Int32Array( [ 10, 10, 10, 10, 10, 10 ] );

// Create offset views...
var a1 = new Int32Array( a0.buffer, a0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var b1 = new Int32Array( b0.buffer, b0.BYTES_PER_ELEMENT*3 ); // start at 4th element

// Create an output array:
var out = new Int32Array( 3 );

// Fill the output array:
discreteUniform( out.length, a1, -2, b1, 1, out, 1 );
```

The function accepts the following `options`:

-   **prng**: pseudorandom number generator for generating uniformly distributed pseudorandom numbers. If provided, the function **ignores** both the `state` and `seed` options. In order to seed the underlying pseudorandom number generator, one must seed the provided `prng` (assuming the provided `prng` is seedable).
-   **seed**: pseudorandom number generator seed.
-   **state**: a [`Uint32Array`][@stdlib/array/uint32] containing pseudorandom number generator state. If provided, the function ignores the `seed` option.
-   **copy**: `boolean` indicating whether to copy a provided pseudorandom number generator state. Setting this option to `false` allows sharing state between two or more pseudorandom number generators. Setting this option to `true` ensures that an underlying generator has exclusive control over its internal state. Default: `true`.

To use a custom PRNG as the underlying source of uniformly distributed pseudorandom numbers, set the `prng` option.

```javascript
var Int32Array = require( '@stdlib/array/int32' );
var minstd = require( '@stdlib/random/base/minstd' );

var opts = {
    'prng': minstd
};

var out = new Int32Array( 10 );
discreteUniform( out.length, [ -10 ], 0, [ 10 ], 0, out, 1, opts );
```

To seed the underlying pseudorandom number generator, set the `seed` option.

```javascript
var Int32Array = require( '@stdlib/array/int32' );

var opts = {
    'seed': 12345
};

var out = new Int32Array( 10 );
discreteUniform( out.length, [ -10 ], 0, [ 10 ], 0, out, 1, opts );
```

#### discreteUniform.ndarray( N, a, sa, oa, b, sb, ob, out, so, oo\[, options] )

Fills a strided array with pseudorandom numbers drawn from a [discrete uniform][@stdlib/random/base/uniform] distribution using alternative indexing semantics.

```javascript
var Int32Array = require( '@stdlib/array/int32' );

// Create an array:
var out = new Int32Array( 10 );

// Fill the array with pseudorandom numbers:
discreteUniform.ndarray( out.length, [ -10 ], 0, 0, [ 10 ], 0, 0, out, 1, 0 );
```

The function has the following additional parameters:

-   **oa**: starting index for `a`.
-   **ob**: starting index for `b`.
-   **oo**: starting index for `out`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the offset parameters support indexing semantics based on starting indices. For example, to access every other value in `out` starting from the second value,

```javascript
var out = [ 0, 0, 0, 0, 0, 0 ];

discreteUniform.ndarray( 3, [ -10 ], 0, 0, [ 10 ], 0, 0, out, 2, 1 );
```

The function accepts the same `options` as documented above for `discreteUniform()`.

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
var discreteUniform = require( '@stdlib/random/strided/discrete-uniform' );

// Specify a PRNG seed:
var opts = {
    'seed': 1234
};

// Create an array:
var x1 = zeros( 10, 'int32' );

// Create a list of indices:
var idx = zeroTo( x1.length );

// Fill the array with pseudorandom numbers:
discreteUniform( x1.length, [ -10 ], 0, [ 10 ], 0, x1, 1, opts );

// Create a second array:
var x2 = zeros( 10, 'generic' );

// Fill the array with the same pseudorandom numbers:
discreteUniform( x2.length, [ -10 ], 0, [ 10 ], 0, x2, 1, opts );

// Print the array contents:
logEach( 'x1[%d] = %d; x2[%d] = %d', idx, x1, idx, x2 );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/random/base/discrete-uniform`][@stdlib/random/base/discrete-uniform]</span><span class="delimiter">: </span><span class="description">discrete uniform distributed pseudorandom numbers.</span>
-   <span class="package-name">[`@stdlib/random/array/discrete-uniform`][@stdlib/random/array/discrete-uniform]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a discrete uniform distribution.</span>
-   <span class="package-name">[`@stdlib/random/strided/uniform`][@stdlib/random/strided/uniform]</span><span class="delimiter">: </span><span class="description">fill a strided array with pseudorandom numbers drawn from a continuous uniform distribution.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/random/base/uniform]: https://github.com/stdlib-js/random/tree/main/base/uniform

[@stdlib/array/uint32]: https://github.com/stdlib-js/array-uint32

<!-- <related-links> -->

[@stdlib/random/base/discrete-uniform]: https://github.com/stdlib-js/random/tree/main/base/discrete-uniform

[@stdlib/random/array/discrete-uniform]: https://github.com/stdlib-js/random/tree/main/array/discrete-uniform

[@stdlib/random/strided/uniform]: https://github.com/stdlib-js/random/tree/main/strided/uniform

<!-- </related-links> -->

</section>

<!-- /.links -->
