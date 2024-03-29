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

# Laplace Random Numbers

> Create an array containing pseudorandom numbers drawn from a [Laplace (double exponential)][@stdlib/random/base/laplace] distribution.

<section class="usage">

## Usage

```javascript
var laplace = require( '@stdlib/random/array/laplace' );
```

#### laplace( len, mu, b\[, options] )

Returns an array containing pseudorandom numbers drawn from a [Laplace (double exponential)][@stdlib/random/base/laplace] distribution.

```javascript
var out = laplace( 10, 2.0, 5.0 );
// returns <Float64Array>
```

The function has the following parameters:

-   **len**: output array length.
-   **mu**: mean.
-   **b**: scale parameter.
-   **options**: function options.

The function accepts the following `options`:

-   **dtype**: output array data type. Must be a [real-valued floating-point data type][@stdlib/array/typed-real-float-dtypes] or "generic". Default: `'float64'`.

By default, the function returns a [`Float64Array`][@stdlib/array/float64]. To return an array having a different data type, set the `dtype` option.

```javascript
var opts = {
    'dtype': 'generic'
};

var out = laplace( 10, 2.0, 5.0, opts );
// returns [...]
```

#### laplace.assign( mu, b, out )

Fills an array with pseudorandom numbers drawn from a [Laplace (double exponential)][@stdlib/random/base/laplace] distribution.

```javascript
var zeros = require( '@stdlib/array/zeros' );

var x = zeros( 10, 'float64' );
// returns <Float64Array>

var out = laplace.assign( 2.0, 5.0, x );
// returns <Float64Array>

var bool = ( out === x );
// returns true
```

The function has the following parameters:

-   **mu**: mean.
-   **b**: scale parameter.
-   **out**: output array.

#### laplace.factory( \[mu, b, ]\[options] )

Returns a function for creating arrays containing pseudorandom numbers drawn from a [Laplace (double exponential)][@stdlib/random/base/laplace] distribution.

```javascript
var random = laplace.factory();

var out = random( 10, 2.0, 5.0 );
// returns <Float64Array>

var len = out.length;
// returns 10
```

If provided distribution parameters, the returned generator returns random variates from the specified distribution.

```javascript
var random = laplace.factory( 2.0, 5.0 );

var out = random( 10 );
// returns <Float64Array>

out = random( 10 );
// returns <Float64Array>
```

If not provided distribution parameters, the returned generator requires that distribution parameters be provided at each invocation.

```javascript
var random = laplace.factory();

var out = random( 10, 2.0, 5.0 );
// returns <Float64Array>

out = random( 10, 2.0, 5.0 );
// returns <Float64Array>
```

The function accepts the following `options`:

-   **prng**: pseudorandom number generator for generating uniformly distributed pseudorandom numbers on the interval `[0,1)`. If provided, the function **ignores** both the `state` and `seed` options. In order to seed the underlying pseudorandom number generator, one must seed the provided `prng` (assuming the provided `prng` is seedable).
-   **seed**: pseudorandom number generator seed.
-   **state**: a [`Uint32Array`][@stdlib/array/uint32] containing pseudorandom number generator state. If provided, the function ignores the `seed` option.
-   **copy**: `boolean` indicating whether to copy a provided pseudorandom number generator state. Setting this option to `false` allows sharing state between two or more pseudorandom number generators. Setting this option to `true` ensures that an underlying generator has exclusive control over its internal state. Default: `true`.
-   **dtype**: default output array data type. Must be a [real-valued floating-point data type][@stdlib/array/typed-real-float-dtypes] or "generic". Default: `'float64'`.

To use a custom PRNG as the underlying source of uniformly distributed pseudorandom numbers, set the `prng` option.

```javascript
var minstd = require( '@stdlib/random/base/minstd' );

var opts = {
    'prng': minstd.normalized
};
var random = laplace.factory( 2.0, 5.0, opts );

var out = random( 10 );
// returns <Float64Array>
```

To seed the underlying pseudorandom number generator, set the `seed` option.

```javascript
var opts = {
    'seed': 12345
};
var random = laplace.factory( 2.0, 5.0, opts );

var out = random( 10, opts );
// returns <Float64Array>
```

The returned function accepts the following `options`:

-   **dtype**: output array data type. Must be a [real-valued floating-point data type][@stdlib/array/typed-real-float-dtypes] or "generic". This overrides the default output array data type.

To override the default output array data type, set the `dtype` option.

```javascript
var random = laplace.factory( 2.0, 5.0 );

var out = random( 10 );
// returns <Float64Array>

var opts = {
    'dtype': 'generic'
};
out = random( 10, opts );
// returns [...]
```

#### laplace.PRNG

The underlying pseudorandom number generator.

```javascript
var prng = laplace.PRNG;
// returns <Function>
```

#### laplace.seed

The value used to seed the underlying pseudorandom number generator.

```javascript
var seed = laplace.seed;
// returns <Uint32Array>
```

If the `factory` method is provided a PRNG for uniformly distributed numbers, the associated property value on the returned function is `null`.

```javascript
var minstd = require( '@stdlib/random/base/minstd-shuffle' ).normalized;

var random = laplace.factory( 2.0, 5.0, {
    'prng': minstd
});

var seed = random.seed;
// returns null
```

#### laplace.seedLength

Length of underlying pseudorandom number generator seed.

```javascript
var len = laplace.seedLength;
// returns <number>
```

If the `factory` method is provided a PRNG for uniformly distributed numbers, the associated property value on the returned function is `null`.

```javascript
var minstd = require( '@stdlib/random/base/minstd-shuffle' ).normalized;

var random = laplace.factory( 2.0, 5.0, {
    'prng': minstd
});

var len = random.seedLength;
// returns null
```

#### laplace.state

Writable property for getting and setting the underlying pseudorandom number generator state.

```javascript
var state = laplace.state;
// returns <Uint32Array>
```

If the `factory` method is provided a PRNG for uniformly distributed numbers, the associated property value on the returned function is `null`.

```javascript
var minstd = require( '@stdlib/random/base/minstd-shuffle' ).normalized;

var random = laplace.factory( 2.0, 5.0, {
    'prng': minstd
});

var state = random.state;
// returns null
```

#### laplace.stateLength

Length of underlying pseudorandom number generator state.

```javascript
var len = laplace.stateLength;
// returns <number>
```

If the `factory` method is provided a PRNG for uniformly distributed numbers, the associated property value on the returned function is `null`.

```javascript
var minstd = require( '@stdlib/random/base/minstd-shuffle' ).normalized;

var random = laplace.factory( 2.0, 5.0, {
    'prng': minstd
});

var len = random.stateLength;
// returns null
```

#### laplace.byteLength

Size (in bytes) of underlying pseudorandom number generator state.

```javascript
var sz = laplace.byteLength;
// returns <number>
```

If the `factory` method is provided a PRNG for uniformly distributed numbers, the associated property value on the returned function is `null`.

```javascript
var minstd = require( '@stdlib/random/base/minstd-shuffle' ).normalized;

var random = laplace.factory( 2.0, 5.0, {
    'prng': minstd
});

var sz = random.byteLength;
// returns null
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If PRNG state is "shared" (meaning a state array was provided during function creation and **not** copied) and one sets the underlying generator state to a state array having a different length, the function returned by the `factory` method does **not** update the existing shared state and, instead, points to the newly provided state array. In order to synchronize the output of the underlying generator according to the new shared state array, the state array for **each** relevant creation function and/or PRNG must be **explicitly** set.
-   If PRNG state is "shared" and one sets the underlying generator state to a state array of the same length, the PRNG state is updated (along with the state of all other creation functions and/or PRNGs sharing the PRNG's state array).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var logEach = require( '@stdlib/console/log-each' );
var laplace = require( '@stdlib/random/array/laplace' );

// Create a function for generating random arrays originating from the same state:
var random = laplace.factory( 2.0, 5.0, {
    'state': laplace.state,
    'copy': true
});

// Generate 3 arrays:
var x1 = random( 5 );
var x2 = random( 5 );
var x3 = random( 5 );

// Print the contents:
logEach( '%f, %f, %f', x1, x2, x3 );

// Create another function for generating random arrays with the original state:
random = laplace.factory( 2.0, 5.0, {
    'state': laplace.state,
    'copy': true
});

// Generate a single array which replicates the above pseudorandom number generation sequence:
var x4 = random( 15 );

// Print the contents:
logEach( '%f', x4 );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/random/base/laplace`][@stdlib/random/base/laplace]</span><span class="delimiter">: </span><span class="description">Laplace (double exponential) distributed pseudorandom numbers.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/random/base/laplace]: https://github.com/stdlib-js/random/tree/main/base/laplace

[@stdlib/array/typed-real-float-dtypes]: https://github.com/stdlib-js/array-typed-real-float-dtypes

[@stdlib/array/uint32]: https://github.com/stdlib-js/array-uint32

[@stdlib/array/float64]: https://github.com/stdlib-js/array-float64

</section>

<!-- /.links -->
