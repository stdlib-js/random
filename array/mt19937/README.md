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

> Create an array containing pseudorandom numbers generated using a 32-bit [Mersenne Twister][@stdlib/random/base/mt19937] pseudorandom number generator.

<section class="usage">

## Usage

```javascript
var mt19937 = require( '@stdlib/random/array/mt19937' );
```

#### mt19937( len\[, options] )

Returns an array containing pseudorandom integers on the interval `[0, 4294967295]`.

```javascript
var out = mt19937( 10 );
// returns <Float64Array>
```

The function has the following parameters:

-   **len**: output array length.
-   **options**: function options.

The function accepts the following `options`:

-   **dtype**: output array data type. Must be a [real-valued data type][@stdlib/array/typed-real-dtypes] or "generic". Default: `'float64'`.

By default, the function returns a [`Float64Array`][@stdlib/array/float64]. To return an array having a different data type, set the `dtype` option.

```javascript
var opts = {
    'dtype': 'generic'
};

var out = mt19937( 10, opts );
// returns [...]
```

#### mt19937.normalized( len\[, options] )

Returns an array containing pseudorandom numbers on the interval `[0, 1)` with 53-bit precision.

```javascript
var out = mt19937.normalized( 10 );
// returns <Float64Array>
```

The function has the following parameters:

-   **len**: output array length.
-   **options**: function options.

The function accepts the following `options`:

-   **dtype**: output array data type. Must be a [real-valued floating-point data type][@stdlib/array/typed-real-float-dtypes] or "generic". Default: `'float64'`.

By default, the function returns a [`Float64Array`][@stdlib/array/float64]. To return an array having a different data type, set the `dtype` option.

```javascript
var opts = {
    'dtype': 'generic'
};

var out = mt19937.normalized( 10, opts );
// returns [...]
```

#### mt19937.factory( \[options] )

Returns a function for creating arrays containing pseudorandom numbers generated using a 32-bit [Mersenne Twister][@stdlib/random/base/mt19937] pseudorandom number generator.

```javascript
var random = mt19937.factory();

var out = random( 10 );
// returns <Float64Array>

var len = out.length;
// returns 10

out = random.normalized( 10 );
// returns <Float64Array>

len = out.length;
// returns 10
```

The function accepts the following `options`:

-   **seed**: pseudorandom number generator seed.
-   **state**: a [`Uint32Array`][@stdlib/array/uint32] containing pseudorandom number generator state. If provided, the function ignores the `seed` option.
-   **copy**: `boolean` indicating whether to copy a provided pseudorandom number generator state. Setting this option to `false` allows sharing state between two or more pseudorandom number generators. Setting this option to `true` ensures that a returned generator has exclusive control over its internal state. Default: `true`.
-   **idtype**: default output array data type when generating integers. Must be a [real-valued data type][@stdlib/array/typed-real-dtypes] or "generic". Default: `'float64'`.
-   **ndtype**: default output array data type when generating normalized numbers. Must be a [real-valued floating-point data type][@stdlib/array/typed-real-float-dtypes] or "generic". Default: `'float64'`.

To seed the underlying pseudorandom number generator, set the `seed` option.

```javascript
var opts = {
    'seed': 12345
};
var random = mt19937.factory( opts );

var out = random( 10, opts );
// returns <Float64Array>
```

The returned function accepts the following `options`:

-   **dtype**: output array data type. Must be a [real-valued data type][@stdlib/array/typed-real-dtypes] or "generic". This overrides the default output array data type.

The returned function has a `normalized` method which accepts the following `options`:

-   **dtype**: output array data type. Must be a [real-valued floating-point data type][@stdlib/array/typed-real-float-dtypes] or "generic". This overrides the default output array data type.

To override the default output array data type, set the `dtype` option.

```javascript
var random = mt19937.factory();

var out = random( 10 );
// returns <Float64Array>

var opts = {
    'dtype': 'generic'
};
out = random( 10, opts );
// returns [...]
```

#### mt19937.PRNG

The underlying pseudorandom number generator.

```javascript
var prng = mt19937.PRNG;
// returns <Function>
```

#### mt19937.seed

The value used to seed the underlying pseudorandom number generator.

```javascript
var seed = mt19937.seed;
// returns <Uint32Array>
```

#### mt19937.seedLength

Length of underlying pseudorandom number generator seed.

```javascript
var len = mt19937.seedLength;
// returns <number>
```

#### mt19937.state

Writable property for getting and setting the underlying pseudorandom number generator state.

```javascript
var state = mt19937.state;
// returns <Uint32Array>
```

#### mt19937.stateLength

Length of underlying pseudorandom number generator state.

```javascript
var len = mt19937.stateLength;
// returns <number>
```

#### mt19937.byteLength

Size (in bytes) of underlying pseudorandom number generator state.

```javascript
var sz = mt19937.byteLength;
// returns <number>
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   [Mersenne Twister][@stdlib/random/base/mt19937] is **not** a cryptographically secure PRNG, as the PRNG is based on a linear recursion. Any pseudorandom number sequence generated by a linear recursion is **insecure**, due to the fact that one can predict future generated outputs by observing a sufficiently long subsequence of generated values.
-   Compared to other PRNGs, [Mersenne Twister][@stdlib/random/base/mt19937] has a large state size (`~2.5kB`). Because of the large state size, beware of increased memory consumption when using the `factory()` method to create many [Mersenne Twister][@stdlib/random/base/mt19937] PRNGs. When appropriate (e.g., when external state mutation is not a concern), consider sharing PRNG state.
-   A seed array of length `1` is considered **equivalent** to an integer seed equal to the lone seed array element and vice versa.
-   If PRNG state is "shared" (meaning a state array was provided during function creation and **not** copied) and one sets the underlying generator state to a state array having a different length, the function returned by the `factory` method does **not** update the existing shared state and, instead, points to the newly provided state array. In order to synchronize the output of the underlying generator according to the new shared state array, the state array for **each** relevant creation function and/or PRNG must be **explicitly** set.
-   If PRNG state is "shared" and one sets the underlying generator state to a state array of the same length, the PRNG state is updated (along with the state of all other creation functions and/or PRNGs sharing the PRNG's state array).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var logEach = require( '@stdlib/console/log-each' );
var mt19937 = require( '@stdlib/random/array/mt19937' );

// Create a function for generating random arrays originating from the same state:
var random = mt19937.factory({
    'state': mt19937.state,
    'copy': true
});

// Generate 3 arrays:
var x1 = random.normalized( 5 );
var x2 = random.normalized( 5 );
var x3 = random.normalized( 5 );

// Print the contents:
logEach( '%f, %f, %f', x1, x2, x3 );

// Create another function for generating random arrays with the original state:
random = mt19937.factory({
    'state': mt19937.state,
    'copy': true
});

// Generate a single array which replicates the above pseudorandom number generation sequence:
var x4 = random.normalized( 15 );

// Print the contents:
logEach( '%f', x4 );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/random/array/randu`][@stdlib/random/array/randu]</span><span class="delimiter">: </span><span class="description">create an array containing uniformly distributed pseudorandom numbers between 0 and 1.</span>
-   <span class="package-name">[`@stdlib/random/base/mt19937`][@stdlib/random/base/mt19937]</span><span class="delimiter">: </span><span class="description">A 32-bit Mersenne Twister pseudorandom number generator.</span>
-   <span class="package-name">[`@stdlib/random/strided/mt19937`][@stdlib/random/strided/mt19937]</span><span class="delimiter">: </span><span class="description">fill a strided array with pseudorandom numbers generated using a 32-bit Mersenne Twister pseudorandom number generator.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/random/base/mt19937]: https://github.com/stdlib-js/random/tree/main/base/mt19937

[@stdlib/array/typed-real-float-dtypes]: https://github.com/stdlib-js/array-typed-real-float-dtypes

[@stdlib/array/typed-real-dtypes]: https://github.com/stdlib-js/array-typed-real-dtypes

[@stdlib/array/float64]: https://github.com/stdlib-js/array-float64

[@stdlib/array/uint32]: https://github.com/stdlib-js/array-uint32

<!-- <related-links> -->

[@stdlib/random/array/randu]: https://github.com/stdlib-js/random/tree/main/array/randu

[@stdlib/random/strided/mt19937]: https://github.com/stdlib-js/random/tree/main/strided/mt19937

<!-- </related-links> -->

</section>

<!-- /.links -->
