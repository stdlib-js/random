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

# mt19937

> Fill a strided array with pseudorandom numbers generated using a 32-bit [Mersenne Twister][@stdlib/random/base/mt19937] pseudorandom number generator.

<section class="usage">

## Usage

```javascript
var mt19937 = require( '@stdlib/random/strided/mt19937' );
```

#### mt19937( N, out, so\[, options] )

Fills a strided array with pseudorandom integers between `0` and `4294967295`.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

// Create an array:
var out = new Float64Array( 10 );

// Fill the array with pseudorandom numbers:
mt19937( out.length, out, 1 );
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **out**: output array.
-   **so**: index increment for `out`.

The `N` and stride parameters determine which strided array elements are accessed at runtime. For example, to access every other value in `out`,

```javascript
var out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

mt19937( 3, out, 2 );
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );

// Initial array:
var out0 = new Float64Array( 6 );

// Create offset views:
var out1 = new Float64Array( out0.buffer, out0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

// Fill the output array:
mt19937( out1.length, out1, 1 );
```

The function accepts the following `options`:

-   **seed**: pseudorandom number generator seed.
-   **state**: a [`Uint32Array`][@stdlib/array/uint32] containing pseudorandom number generator state. If provided, the function ignores the `seed` option.
-   **copy**: `boolean` indicating whether to copy a provided pseudorandom number generator state. Setting this option to `false` allows sharing state between two or more pseudorandom number generators. Setting this option to `true` ensures that a returned generator has exclusive control over its internal state. Default: `true`.

To seed the underlying pseudorandom number generator, set the `seed` option.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var opts = {
    'seed': 12345
};

var out = new Float64Array( 10 );
mt19937( out.length, out, 1, opts );
```

#### mt19937.ndarray( N, out, so, oo\[, options] )

Fills a strided array with pseudorandom integers between `0` and `4294967295` using alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

// Create an array:
var out = new Float64Array( 10 );

// Fill the array with pseudorandom numbers:
mt19937.ndarray( out.length, out, 1, 0 );
```

The function has the following additional parameters:

-   **oo**: starting index for `out`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the offset parameters support indexing semantics based on starting indices. For example, to access every other value in `out` starting from the second value,

```javascript
var out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

mt19937.ndarray( 3, out, 2, 1 );
```

The function accepts the same `options` as documented above for `mt19937()`.

#### mt19937.normalized( N, out, so\[, options] )

Fills a strided array with pseudorandom numbers between `0` and `1`.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

// Create an array:
var out = new Float64Array( 10 );

// Fill the array with pseudorandom numbers:
mt19937.normalized( out.length, out, 1 );
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **out**: output array.
-   **so**: index increment for `out`.

The function accepts the same `options` as documented above for `mt19937()`.

#### mt19937.normalized.ndarray( N, out, so, oo\[, options] )

Fills a strided array with pseudorandom numbers between `0` and `1` using alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

// Create an array:
var out = new Float64Array( 10 );

// Fill the array with pseudorandom numbers:
mt19937.normalized.ndarray( out.length, out, 1, 0 );
```

The function has the following additional parameters:

-   **oo**: starting index for `out`.

The function accepts the same `options` as documented above for `mt19937()`.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, all functions leave the output array unchanged.
-   All functions support array-like objects having getter and setter accessors for array element access.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var zeros = require( '@stdlib/array/zeros' );
var zeroTo = require( '@stdlib/array/base/zero-to' );
var logEach = require( '@stdlib/console/log-each' );
var mt19937 = require( '@stdlib/random/strided/mt19937' );

// Specify a PRNG seed:
var opts = {
    'seed': 1234
};

// Create an array:
var x1 = zeros( 10, 'float64' );

// Create a list of indices:
var idx = zeroTo( x1.length );

// Fill the array with pseudorandom numbers:
mt19937.normalized( x1.length, x1, 1, opts );

// Create a second array:
var x2 = zeros( 10, 'generic' );

// Fill the array with the same pseudorandom numbers:
mt19937.normalized( x2.length, x2, 1, opts );

// Print the array contents:
logEach( 'x1[%d] = %.2f; x2[%d] = %.2f', idx, x1, idx, x2 );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/random/base/mt19937`][@stdlib/random/base/mt19937]</span><span class="delimiter">: </span><span class="description">A 32-bit Mersenne Twister pseudorandom number generator.</span>
-   <span class="package-name">[`@stdlib/random/array/mt19937`][@stdlib/random/array/mt19937]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers generated using a 32-bit Mersenne Twister pseudorandom number generator.</span>
-   <span class="package-name">[`@stdlib/random/strided/randu`][@stdlib/random/strided/randu]</span><span class="delimiter">: </span><span class="description">fill a strided array with uniformly distributed pseudorandom numbers between 0 and 1.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/random/base/mt19937]: https://github.com/stdlib-js/random/tree/main/base/mt19937

[@stdlib/array/uint32]: https://github.com/stdlib-js/array-uint32

<!-- <related-links> -->

[@stdlib/random/array/mt19937]: https://github.com/stdlib-js/random/tree/main/array/mt19937

[@stdlib/random/strided/randu]: https://github.com/stdlib-js/random/tree/main/strided/randu

<!-- </related-links> -->

</section>

<!-- /.links -->
