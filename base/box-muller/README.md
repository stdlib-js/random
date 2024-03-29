<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# Box-Muller Transform

> Standard normally distributed pseudorandom numbers using the [Box-Muller transform][box-muller].

<section class="usage">

## Usage

```javascript
var randn = require( '@stdlib/random/base/box-muller' );
```

#### randn()

Returns a standard normally distributed pseudorandom number.

```javascript
var r = randn();
// returns <number>
```

#### randn.factory( \[options] )

Returns a pseudorandom number generator (PRNG) for generating standard normally distributed pseudorandom numbers.

```javascript
var rand = randn.factory();
```

The function accepts the following `options`:

-   **prng**: pseudorandom number generator for generating uniformly distributed pseudorandom numbers on the interval `[0,1)`. If provided, the function **ignores** both the `state` and `seed` options. In order to seed the returned pseudorandom number generator, one must seed the provided `prng` (assuming the provided `prng` is seedable).
-   **seed**: pseudorandom number generator seed.
-   **state**: a [`Uint32Array`][@stdlib/array/uint32] containing pseudorandom number generator state. If provided, the function ignores the `seed` option.
-   **copy**: `boolean` indicating whether to copy a provided pseudorandom number generator state. Setting this option to `false` allows sharing state between two or more pseudorandom number generators. Setting this option to `true` ensures that a returned generator has exclusive control over its internal state. Default: `true`.

To use a custom PRNG as the underlying source of uniformly distributed pseudorandom numbers, set the `prng` option.

```javascript
var minstd = require( '@stdlib/random/base/minstd' );

var rand = randn.factory({
    'prng': minstd.normalized
});

var r = rand();
// returns <number>
```

To seed a pseudorandom number generator, set the `seed` option.

```javascript
var rand1 = randn.factory({
    'seed': 12345
});

var r1 = rand1();
// returns <number>

var rand2 = randn.factory({
    'seed': 12345
});

var r2 = rand2();
// returns <number>

var bool = ( r1 === r2 );
// returns true
```

To return a generator having a specific initial state, set the generator `state` option.

```javascript
var rand;
var bool;
var r;
var i;

// Generate pseudorandom numbers, thus progressing the generator state:
for ( i = 0; i < 1000; i++ ) {
    r = randn();
}

// Create a new PRNG initialized to the current state of `randn`:
rand = randn.factory({
    'state': randn.state
});

// Test that the generated pseudorandom numbers are the same:
bool = ( rand() === randn() );
// returns true
```

#### randn.NAME

The generator name.

```javascript
var str = randn.NAME;
// returns 'box-muller'
```

#### randn.PRNG

The underlying pseudorandom number generator for uniformly distributed numbers on the interval `[0,1)`.

```javascript
var prng = randn.PRNG;
// returns <Function>
```

#### randn.MIN

Minimum possible value.

```javascript
var min = randn.MIN;
// returns <number>
```

Note that this value is computed based on the minimum value of the underlying PRNG for uniformly distributed numbers. If the underlying PRNG does not have a `MIN` property, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = randn.factory({
    'prng': Math.random
});

var min = rand.MIN;
// returns null
```

#### randn.MAX

Maximum possible value.

```javascript
var max = randn.MAX;
// returns <number>
```

Note that this value is computed based on the minimum value of the underlying PRNG for uniformly distributed numbers. If the underlying PRNG does not have a `MIN` property, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = randn.factory({
    'prng': Math.random
});

var max = rand.MAX;
// returns null
```

#### randn.seed

The value used to seed `randn()`.

```javascript
var rand;
var r;
var i;

// Generate pseudorandom values...
for ( i = 0; i < 100; i++ ) {
    r = randn();
}

// Generate the same pseudorandom values...
rand = randn.factory({
    'seed': randn.seed
});
for ( i = 0; i < 100; i++ ) {
    r = rand();
}
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = randn.factory({
    'prng': Math.random
});

var seed = rand.seed;
// returns null
```

#### randn.seedLength

Length of generator seed.

```javascript
var len = randn.seedLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = randn.factory({
    'prng': Math.random
});

var len = rand.seedLength;
// returns null
```

#### randn.state

Writable property for getting and setting the generator state.

```javascript
var r = randn();
// returns <number>

r = randn();
// returns <number>

// ...

// Get a copy of the current state:
var state = randn.state;
// returns <Uint32Array>

r = randn();
// returns <number>

r = randn();
// returns <number>

// Reset the state:
randn.state = state;

// Replay the last two pseudorandom numbers:
r = randn();
// returns <number>

r = randn();
// returns <number>

// ...
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = randn.factory({
    'prng': Math.random
});

var state = rand.state;
// returns null
```

#### randn.stateLength

Length of generator state.

```javascript
var len = randn.stateLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = randn.factory({
    'prng': Math.random
});

var len = rand.stateLength;
// returns null
```

#### randn.byteLength

Size (in bytes) of generator state.

```javascript
var sz = randn.byteLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = randn.factory({
    'prng': Math.random
});

var sz = rand.byteLength;
// returns null
```

#### randn.toJSON()

Serializes the pseudorandom number generator as a JSON object.

```javascript
var o = randn.toJSON();
// returns { 'type': 'PRNG', 'name': '...', 'state': {...}, 'params': [] }
```

If provided a PRNG for uniformly distributed numbers, this method returns `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = randn.factory({
    'prng': Math.random
});

var o = rand.toJSON();
// returns null
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The minimum and maximum values are dependent on the number of bits used by the underlying PRNG. For instance, if a PRNG uses `32` bits, the smallest non-zero uniformly distributed pseudorandom number that can be generated is `2**-32`. Accordingly, the algorithm would be unable to produce random variates more than `6.66` standard deviations from the mean. This corresponds to a `2.74 x 10**-11` loss due to tail truncation.
-   If PRNG state is "shared" (meaning a state array was provided during PRNG creation and **not** copied) and one sets the generator state to a state array having a different length, the PRNG does **not** update the existing shared state and, instead, points to the newly provided state array. In order to synchronize PRNG output according to the new shared state array, the state array for **each** relevant PRNG must be **explicitly** set.
-   If PRNG state is "shared" and one sets the generator state to a state array of the same length, the PRNG state is updated (along with the state of all other PRNGs sharing the PRNG's state array).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randn = require( '@stdlib/random/base/box-muller' );

var seed;
var rand;
var i;

// Generate pseudorandom numbers...
for ( i = 0; i < 100; i++ ) {
    console.log( randn() );
}

// Create a new pseudorandom number generator...
seed = 1234;
rand = randn.factory({
    'seed': seed
});
for ( i = 0; i < 100; i++ ) {
    console.log( rand() );
}

// Create another pseudorandom number generator using a previous seed...
rand = randn.factory({
    'seed': randn.seed
});
for ( i = 0; i < 100; i++ ) {
    console.log( rand() );
}
```

</section>

<!-- /.examples -->

* * *

<section class="references">

## References

-   Box, G. E. P., and Mervin E. Muller. 1958. "A Note on the Generation of Random Normal Deviates." _The Annals of Mathematical Statistics_ 29 (2). The Institute of Mathematical Statistics: 610–11. doi:[10.1214/aoms/1177706645][@box:1958].
-   Bell, James R. 1968. "Algorithm 334: Normal Random Deviates." _Communications of the ACM_ 11 (7). New York, NY, USA: ACM: 498. doi:[10.1145/363397.363547][@bell:1968].
-   Knop, R. 1969. "Remark on Algorithm 334 \[G5]: Normal Random Deviates." _Communications of the ACM_ 12 (5). New York, NY, USA: ACM: 281. doi:[10.1145/362946.362996][@knop:1969].
-   Marsaglia, G., and T. A. Bray. 1964. "A Convenient Method for Generating Normal Variables." _SIAM Review_ 6 (3). Society for Industrial; Applied Mathematics: 260–64. doi:[10.1137/1006063][@marsaglia:1964a].
-   Thomas, David B., Wayne Luk, Philip H.W. Leong, and John D. Villasenor. 2007. "Gaussian Random Number Generators." _ACM Computing Surveys_ 39 (4). New York, NY, USA: ACM. doi:[10.1145/1287620.1287622][@thomas:2007].

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/random/iter/box-muller`][@stdlib/random/iter/box-muller]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a standard normal distribution using the Box-Muller transform.</span>
-   <span class="package-name">[`@stdlib/random/streams/box-muller`][@stdlib/random/streams/box-muller]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a standard normal distribution using the Box-Muller transform.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[box-muller]: https://en.wikipedia.org/wiki/Box%E2%80%93Muller_transform

[@box:1958]: http://dx.doi.org/10.1214/aoms/1177706645

[@bell:1968]: http://dx.doi.org/10.1145/363397.363547

[@knop:1969]: http://dx.doi.org/10.1145/362946.362996

[@marsaglia:1964a]: http://dx.doi.org/10.1137/1006063

[@thomas:2007]: http://dx.doi.org/10.1145/1287620.1287622

[@stdlib/array/uint32]: https://github.com/stdlib-js/array-uint32

<!-- <related-links> -->

[@stdlib/random/iter/box-muller]: https://github.com/stdlib-js/random/tree/main/iter/box-muller

[@stdlib/random/streams/box-muller]: https://github.com/stdlib-js/random/tree/main/streams/box-muller

<!-- </related-links> -->

</section>

<!-- /.links -->
