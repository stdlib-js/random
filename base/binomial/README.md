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

# Binomial Random Numbers

> [Binomial][binomial] distributed pseudorandom numbers.

<section class="usage">

## Usage

```javascript
var binomial = require( '@stdlib/random/base/binomial' );
```

#### binomial( n, p )

Returns a pseudorandom number drawn from a [binomial][binomial] distribution with number of trials `n` and success probability `p`.

```javascript
var r = binomial( 20, 0.8 );
// returns <number>
```

If `n` is not a positive integer or `p` is not a probability, the function returns `NaN`.

```javascript
var r = binomial( 1.5, 0.5 );
// returns NaN

r = binomial( 2, 1.5 );
// returns NaN
```

If `n` or `p` is `NaN`, the function returns `NaN`.

```javascript
var r = binomial( NaN, 0.4 );
// returns NaN

r = binomial( 20, NaN );
// returns NaN
```

#### binomial.factory( \[n, p, ]\[options] )

Returns a pseudorandom number generator (PRNG) for generating pseudorandom numbers drawn from a [binomial][binomial] distribution.

```javascript
var rand = binomial.factory();

var r = rand( 20, 0.3 );
// returns <number>
```

If provided `n` and `p`, the returned generator returns random variates from the specified distribution.

```javascript
// Draws from binomial( 10, 0.8 ):
var rand = binomial.factory( 10, 0.8 );

var r = rand();
// returns <number>

r = rand();
// returns <number>
```

If not provided `n` and `p`, the returned generator requires that both parameters be provided at each invocation.

```javascript
var rand = binomial.factory();

var r = rand( 20, 0.8 );
// returns <number>

r = rand( 123, 0.21 );
// returns <number>
```

The function accepts the following `options`:

-   **prng**: pseudorandom number generator for generating uniformly distributed pseudorandom numbers on the interval `[0,1)`. If provided, the function **ignores** both the `state` and `seed` options. In order to seed the returned pseudorandom number generator, one must seed the provided `prng` (assuming the provided `prng` is seedable).
-   **seed**: pseudorandom number generator seed.
-   **state**: a [`Uint32Array`][@stdlib/array/uint32] containing pseudorandom number generator state. If provided, the function ignores the `seed` option.
-   **copy**: `boolean` indicating whether to copy a provided pseudorandom number generator state. Setting this option to `false` allows sharing state between two or more pseudorandom number generators. Setting this option to `true` ensures that a returned generator has exclusive control over its internal state. Default: `true`.

To use a custom PRNG as the underlying source of uniformly distributed pseudorandom numbers, set the `prng` option.

```javascript
var minstd = require( '@stdlib/random/base/minstd' );

var rand = binomial.factory({
    'prng': minstd.normalized
});

var r = rand( 8, 0.9 );
// returns <number>
```

To seed a pseudorandom number generator, set the `seed` option.

```javascript
var rand1 = binomial.factory({
    'seed': 12345
});

var r1 = rand1( 8, 0.9 );
// returns <number>

var rand2 = binomial.factory( 8, 0.9, {
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
    r = binomial( 8, 0.9 );
}

// Create a new PRNG initialized to the current state of `binomial`:
rand = binomial.factory({
    'state': binomial.state
});

// Test that the generated pseudorandom numbers are the same:
bool = ( rand( 8, 0.9 ) === binomial( 8, 0.9 ) );
// returns true
```

#### binomial.NAME

The generator name.

```javascript
var str = binomial.NAME;
// returns 'binomial'
```

#### binomial.PRNG

The underlying pseudorandom number generator.

```javascript
var prng = binomial.PRNG;
// returns <Function>
```

#### binomial.seed

The value used to seed `binomial()`.

```javascript
var rand;
var r;
var i;

// Generate pseudorandom values...
for ( i = 0; i < 100; i++ ) {
    r = binomial( 20, 0.5 );
}

// Generate the same pseudorandom values...
rand = binomial.factory( 20, 0.5, {
    'seed': binomial.seed
});
for ( i = 0; i < 100; i++ ) {
    r = rand();
}
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = binomial.factory({
    'prng': Math.random
});

var seed = rand.seed;
// returns null
```

#### binomial.seedLength

Length of generator seed.

```javascript
var len = binomial.seedLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = binomial.factory({
    'prng': Math.random
});

var len = rand.seedLength;
// returns null
```

#### binomial.state

Writable property for getting and setting the generator state.

```javascript
var r = binomial( 20, 0.8 );
// returns <number>

r = binomial( 20, 0.8 );
// returns <number>

// ...

// Get a copy of the current state:
var state = binomial.state;
// returns <Uint32Array>

r = binomial( 20, 0.8 );
// returns <number>

r = binomial( 20, 0.8 );
// returns <number>

// Reset the state:
binomial.state = state;

// Replay the last two pseudorandom numbers:
r = binomial( 20, 0.8 );
// returns <number>

r = binomial( 20, 0.8 );
// returns <number>

// ...
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = binomial.factory({
    'prng': Math.random
});

var state = rand.state;
// returns null
```

#### binomial.stateLength

Length of generator state.

```javascript
var len = binomial.stateLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = binomial.factory({
    'prng': Math.random
});

var len = rand.stateLength;
// returns null
```

#### binomial.byteLength

Size (in bytes) of generator state.

```javascript
var sz = binomial.byteLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = binomial.factory({
    'prng': Math.random
});

var sz = rand.byteLength;
// returns null
```

#### binomial.toJSON()

Serializes the pseudorandom number generator as a JSON object.

```javascript
var o = binomial.toJSON();
// returns { 'type': 'PRNG', 'name': '...', 'state': {...}, 'params': [] }
```

If provided a PRNG for uniformly distributed numbers, this method returns `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = binomial.factory({
    'prng': Math.random
});

var o = rand.toJSON();
// returns null
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If PRNG state is "shared" (meaning a state array was provided during PRNG creation and **not** copied) and one sets the generator state to a state array having a different length, the PRNG does **not** update the existing shared state and, instead, points to the newly provided state array. In order to synchronize PRNG output according to the new shared state array, the state array for **each** relevant PRNG must be **explicitly** set.
-   If PRNG state is "shared" and one sets the generator state to a state array of the same length, the PRNG state is updated (along with the state of all other PRNGs sharing the PRNG's state array).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var binomial = require( '@stdlib/random/base/binomial' );

var seed;
var rand;
var i;

// Generate pseudorandom numbers...
for ( i = 0; i < 100; i++ ) {
    console.log( binomial( 20, 0.5 ) );
}

// Create a new pseudorandom number generator...
seed = 1234;
rand = binomial.factory( 10, 0.8, {
    'seed': seed
});
for ( i = 0; i < 100; i++ ) {
    console.log( rand() );
}

// Create another pseudorandom number generator using a previous seed...
rand = binomial.factory( 20, 0.5, {
    'seed': binomial.seed
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

-   Hörmann, Wolfgang. 1993. "The generation of binomial random variates." _Journal of Statistical Computation and Simulation_ 46 (1-2): 101–10. doi:[10.1080/00949659308811496][@hormann:1993a].

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/random/array/binomial`][@stdlib/random/array/binomial]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a binomial distribution.</span>
-   <span class="package-name">[`@stdlib/random/iter/binomial`][@stdlib/random/iter/binomial]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a binomial distribution.</span>
-   <span class="package-name">[`@stdlib/random/streams/binomial`][@stdlib/random/streams/binomial]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a binomial distribution.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[binomial]: https://en.wikipedia.org/wiki/Binomial_distribution

[@hormann:1993a]: http://dx.doi.org/10.1080/00949659308811496

[@stdlib/array/uint32]: https://github.com/stdlib-js/array-uint32

<!-- <related-links> -->

[@stdlib/random/array/binomial]: https://github.com/stdlib-js/random/tree/main/array/binomial

[@stdlib/random/iter/binomial]: https://github.com/stdlib-js/random/tree/main/iter/binomial

[@stdlib/random/streams/binomial]: https://github.com/stdlib-js/random/tree/main/streams/binomial

<!-- </related-links> -->

</section>

<!-- /.links -->
