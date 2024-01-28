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

# Geometric Random Numbers

> Fill a strided array with pseudorandom numbers drawn from a [geometric][@stdlib/random/base/geometric] distribution.

<section class="usage">

## Usage

```javascript
var geometric = require( '@stdlib/random/strided/geometric' );
```

#### geometric( N, p, sp, out, so )

Fills a strided array with pseudorandom numbers drawn from a [geometric][@stdlib/random/base/geometric] distribution.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

// Create an array:
var out = new Float64Array( 10 );

// Fill the array with pseudorandom numbers:
geometric( out.length, [ 0.01 ], 0, out, 1 );
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **p**: rate parameter.
-   **sp**: index increment for `p`.
-   **out**: output array.
-   **so**: index increment for `out`.

The `N` and stride parameters determine which strided array elements are accessed at runtime. For example, to access every other value in `out`,

```javascript
var out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

geometric( 3, [ 0.01 ], 0, out, 2 );
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );

// Initial array:
var p0 = new Float64Array( [ 0.01, 0.01, 0.01, 0.01, 0.01, 0.01 ] );

// Create offset view:
var p1 = new Float64Array( p0.buffer, p0.BYTES_PER_ELEMENT*3 ); // start at 4th element

// Create an output array:
var out = new Float64Array( 3 );

// Fill the output array:
geometric( out.length, p1, -1, out, 1 );
```

#### geometric.ndarray( N, p, sp, op, out, so, oo )

Fills a strided array with pseudorandom numbers drawn from a [geometric][@stdlib/random/base/geometric] distribution using alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

// Create an array:
var out = new Float64Array( 10 );

// Fill the array with pseudorandom numbers:
geometric.ndarray( out.length, [ 0.01 ], 0, 0, out, 1, 0 );
```

The function has the following additional parameters:

-   **op**: starting index for `p`.
-   **oo**: starting index for `out`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the offset parameters support indexing semantics based on starting indices. For example, to access every other value in `out` starting from the second value,

```javascript
var out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

geometric.ndarray( 3, [ 0.01 ], 0, 0, out, 2, 1 );
```

#### geometric.factory( \[options] )

Returns a function for filling strided arrays with pseudorandom numbers drawn from a [geometric][@stdlib/random/base/geometric] distribution.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var random = geometric.factory();
// returns <Function>

// Create an array:
var out = new Float64Array( 10 );

// Fill the array with pseudorandom numbers:
random( out.length, [ 0.01 ], 0, out, 1 );
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
var random = geometric.factory( opts );

var out = new Float64Array( 10 );
random( out.length, [ 0.01 ], 0, out, 1 );
```

To seed the underlying pseudorandom number generator, set the `seed` option.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var opts = {
    'seed': 12345
};
var random = geometric.factory( opts );

var out = new Float64Array( 10 );
random( out.length, [ 0.01 ], 0, out, 1 );
```

* * *

#### random.PRNG

The underlying pseudorandom number generator.

```javascript
var prng = geometric.PRNG;
// returns <Function>
```

#### geometric.seed

The value used to seed the underlying pseudorandom number generator.

```javascript
var seed = geometric.seed;
// returns <Uint32Array>
```

If the `factory` method is provided a PRNG for uniformly distributed numbers, the associated property value on the returned function is `null`.

```javascript
var minstd = require( '@stdlib/random/base/minstd-shuffle' ).normalized;

var random = geometric.factory({
    'prng': minstd
});
// returns <Function>

var seed = random.seed;
// returns null
```

#### geometric.seedLength

Length of underlying pseudorandom number generator seed.

```javascript
var len = geometric.seedLength;
// returns <number>
```

If the `factory` method is provided a PRNG for uniformly distributed numbers, the associated property value on the returned function is `null`.

```javascript
var minstd = require( '@stdlib/random/base/minstd-shuffle' ).normalized;

var random = geometric.factory({
    'prng': minstd
});
// returns <Function>

var len = random.seedLength;
// returns null
```

#### geometric.state

Writable property for getting and setting the underlying pseudorandom number generator state.

```javascript
var state = geometric.state;
// returns <Uint32Array>
```

If the `factory` method is provided a PRNG for uniformly distributed numbers, the associated property value on the returned function is `null`.

```javascript
var minstd = require( '@stdlib/random/base/minstd-shuffle' ).normalized;

var random = geometric.factory({
    'prng': minstd
});
// returns <Function>

var state = random.state;
// returns null
```

#### geometric.stateLength

Length of underlying pseudorandom number generator state.

```javascript
var len = geometric.stateLength;
// returns <number>
```

If the `factory` method is provided a PRNG for uniformly distributed numbers, the associated property value on the returned function is `null`.

```javascript
var minstd = require( '@stdlib/random/base/minstd-shuffle' ).normalized;

var random = geometric.factory({
    'prng': minstd
});
// returns <Function>

var len = random.stateLength;
// returns null
```

#### geometric.byteLength

Size (in bytes) of underlying pseudorandom number generator state.

```javascript
var sz = geometric.byteLength;
// returns <number>
```

If the `factory` method is provided a PRNG for uniformly distributed numbers, the associated property value on the returned function is `null`.

```javascript
var minstd = require( '@stdlib/random/base/minstd-shuffle' ).normalized;

var random = geometric.factory({
    'prng': minstd
});
// returns <Function>

var sz = random.byteLength;
// returns null
```

</section>

<!-- /.usage -->

<section class="notes">

* * *

## Notes

-   If `N <= 0`, both `geometric` and `geometric.ndarray` leave the output array unchanged.
-   Both `geometric` and `geometric.ndarray` support array-like objects having getter and setter accessors for array element access.

</section>

<!-- /.notes -->

<section class="examples">

* * *

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var zeros = require( '@stdlib/array/zeros' );
var zeroTo = require( '@stdlib/array/zero-to' );
var logEach = require( '@stdlib/console/log-each' );
var geometric = require( '@stdlib/random/strided/geometric' );

// Specify a PRNG seed:
var opts = {
    'seed': 1234
};

// Create a seeded PRNG:
var rand1 = geometric.factory( opts );

// Create an array:
var x1 = zeros( 10, 'float64' );

// Fill the array with pseudorandom numbers:
rand1( x1.length, [ 0.01 ], 0, x1, 1 );

// Create another function for filling strided arrays:
var rand2 = geometric.factory( opts );
// returns <Function>

// Create a second array:
var x2 = zeros( 10, 'generic' );

// Fill the array with the same pseudorandom numbers:
rand2( x2.length, [ 0.01 ], 0, x2, 1 );

// Create a list of indices:
var idx = zeroTo( x1.length, 'generic' );

// Print the array contents:
logEach( 'x1[%d] = %.2f; x2[%d] = %.2f', idx, x1, idx, x2 );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/random/base/geometric]: https://github.com/stdlib-js/random/tree/main/base/geometric

[@stdlib/array/uint32]: https://github.com/stdlib-js/array-uint32

</section>

<!-- /.links -->