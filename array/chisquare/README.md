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

# Chi-square Random Numbers

> Create an array containing pseudorandom numbers drawn from a [chi-square][@stdlib/random/base/chisquare] distribution.

<section class="usage">

## Usage

```javascript
var chisquare = require( '@stdlib/random/array/chisquare' );
```

#### chisquare( len, k\[, options] )

Returns an array containing pseudorandom numbers drawn from a [chi-square][@stdlib/random/base/chisquare] distribution.

```javascript
var out = chisquare( 10, 2.0 );
// returns <Float64Array>
```

The function has the following parameters:

-   **len**: output array length.
-   **k**: degrees of freedom.
-   **options**: function options.

The function accepts the following `options`:

-   **dtype**: output array data type. Must be a [real-valued floating-point data type][@stdlib/array/typed-real-float-dtypes] or "generic". Default: `'float64'`.

By default, the function returns a [`Float64Array`][@stdlib/array/float64]. To return an array having a different data type, set the `dtype` option.

```javascript
var opts = {
    'dtype': 'generic'
};

var out = chisquare( 10, 2.0, opts );
// returns [...]
```

#### chisquare.assign( k, out )

Fills an array with pseudorandom numbers drawn from a [chi-square][@stdlib/random/base/chisquare] distribution.

```javascript
var zeros = require( '@stdlib/array/zeros' );

var x = zeros( 10, 'float64' );
// returns <Float64Array>

var out = chisquare.assign( 2.0, x );
// returns <Float64Array>

var bool = ( out === x );
// returns true
```

The function has the following parameters:

-   **k**: degrees of freedom.
-   **out**: output array.

#### chisquare.factory( \[k, ]\[options] )

Returns a function for creating arrays containing pseudorandom numbers drawn from a [chi-square][@stdlib/random/base/chisquare] distribution.

```javascript
var random = chisquare.factory();

var out = random( 10, 2.0 );
// returns <Float64Array>

var len = out.length;
// returns 10
```

If provided `k`, the returned generator returns random variates from the specified distribution.

```javascript
var random = chisquare.factory( 2.0 );

var out = random( 10 );
// returns <Float64Array>

out = random( 10 );
// returns <Float64Array>
```

If not provided `k`, the returned generator requires that `k` be provided at each invocation.

```javascript
var random = chisquare.factory();

var out = random( 10, 2.0 );
// returns <Float64Array>

out = random( 10, 2.0 );
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
var random = chisquare.factory( 2.0, opts );

var out = random( 10 );
// returns <Float64Array>
```

To seed the underlying pseudorandom number generator, set the `seed` option.

```javascript
var opts = {
    'seed': 12345
};
var random = chisquare.factory( 2.0, opts );

var out = random( 10, opts );
// returns <Float64Array>
```

The returned function accepts the following `options`:

-   **dtype**: output array data type. Must be a [real-valued floating-point data type][@stdlib/array/typed-real-float-dtypes] or "generic". This overrides the default output array data type.

To override the default output array data type, set the `dtype` option.

```javascript
var random = chisquare.factory( 2.0 );

var out = random( 10 );
// returns <Float64Array>

var opts = {
    'dtype': 'generic'
};
out = random( 10, opts );
// returns [...]
```

#### chisquare.PRNG

The underlying pseudorandom number generator.

```javascript
var prng = chisquare.PRNG;
// returns <Function>
```

#### chisquare.seed

The value used to seed the underlying pseudorandom number generator.

```javascript
var seed = chisquare.seed;
// returns <Uint32Array>
```

If the `factory` method is provided a PRNG for uniformly distributed numbers, the associated property value on the returned function is `null`.

```javascript
var minstd = require( '@stdlib/random/base/minstd-shuffle' ).normalized;

var random = chisquare.factory( 2.0, {
    'prng': minstd
});

var seed = random.seed;
// returns null
```

#### chisquare.seedLength

Length of underlying pseudorandom number generator seed.

```javascript
var len = chisquare.seedLength;
// returns <number>
```

If the `factory` method is provided a PRNG for uniformly distributed numbers, the associated property value on the returned function is `null`.

```javascript
var minstd = require( '@stdlib/random/base/minstd-shuffle' ).normalized;

var random = chisquare.factory( 2.0, {
    'prng': minstd
});

var len = random.seedLength;
// returns null
```

#### chisquare.state

Writable property for getting and setting the underlying pseudorandom number generator state.

```javascript
var state = chisquare.state;
// returns <Uint32Array>
```

If the `factory` method is provided a PRNG for uniformly distributed numbers, the associated property value on the returned function is `null`.

```javascript
var minstd = require( '@stdlib/random/base/minstd-shuffle' ).normalized;

var random = chisquare.factory( 2.0, {
    'prng': minstd
});

var state = random.state;
// returns null
```

#### chisquare.stateLength

Length of underlying pseudorandom number generator state.

```javascript
var len = chisquare.stateLength;
// returns <number>
```

If the `factory` method is provided a PRNG for uniformly distributed numbers, the associated property value on the returned function is `null`.

```javascript
var minstd = require( '@stdlib/random/base/minstd-shuffle' ).normalized;

var random = chisquare.factory( 2.0, {
    'prng': minstd
});

var len = random.stateLength;
// returns null
```

#### chisquare.byteLength

Size (in bytes) of underlying pseudorandom number generator state.

```javascript
var sz = chisquare.byteLength;
// returns <number>
```

If the `factory` method is provided a PRNG for uniformly distributed numbers, the associated property value on the returned function is `null`.

```javascript
var minstd = require( '@stdlib/random/base/minstd-shuffle' ).normalized;

var random = chisquare.factory( 2.0, {
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
var chisquare = require( '@stdlib/random/array/chisquare' );

// Create a function for generating random arrays originating from the same state:
var random = chisquare.factory( 2.0, {
    'state': chisquare.state,
    'copy': true
});

// Generate 3 arrays:
var x1 = random( 5 );
var x2 = random( 5 );
var x3 = random( 5 );

// Print the contents:
logEach( '%f, %f, %f', x1, x2, x3 );

// Create another function for generating random arrays with the original state:
random = chisquare.factory( 2.0, {
    'state': chisquare.state,
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

-   <span class="package-name">[`@stdlib/random/base/chisquare`][@stdlib/random/base/chisquare]</span><span class="delimiter">: </span><span class="description">Chi-square distributed pseudorandom numbers.</span>
-   <span class="package-name">[`@stdlib/random/strided/chisquare`][@stdlib/random/strided/chisquare]</span><span class="delimiter">: </span><span class="description">fill a strided array with pseudorandom numbers drawn from a chi-square distribution.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/random/base/chisquare]: https://github.com/stdlib-js/random/tree/main/base/chisquare

[@stdlib/array/typed-real-float-dtypes]: https://github.com/stdlib-js/array-typed-real-float-dtypes

[@stdlib/array/uint32]: https://github.com/stdlib-js/array-uint32

[@stdlib/array/float64]: https://github.com/stdlib-js/array-float64

<!-- <related-links> -->

[@stdlib/random/strided/chisquare]: https://github.com/stdlib-js/random/tree/main/strided/chisquare

<!-- </related-links> -->

</section>

<!-- /.links -->
