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

# Beta Prime Random Numbers

> [Beta prime][betaprime] distributed pseudorandom numbers.

<section class="usage">

## Usage

```javascript
var betaprime = require( '@stdlib/random/base/betaprime' );
```

#### betaprime( alpha, beta )

Returns a pseudorandom number drawn from a [beta prime][betaprime] distribution with parameters `alpha` (first shape parameter) and `beta` (second shape parameter).

```javascript
var r = betaprime( 2.0, 5.0 );
// returns <number>
```

If `alpha <= 0` or `beta <= 0`, the function returns `NaN`.

```javascript
var r = betaprime( 2.0, -2.0 );
// returns NaN

r = betaprime( -2.0, 2.0 );
// returns NaN
```

If `alpha` or `beta` is `NaN`, the function returns `NaN`.

```javascript
var r = betaprime( NaN, 5.0 );
// returns NaN

r = betaprime( 2.0, NaN );
// returns NaN
```

#### betaprime.factory( \[alpha, beta, ]\[options] )

Returns a pseudorandom number generator (PRNG) for generating pseudorandom numbers drawn from a [beta prime][betaprime] distribution.

```javascript
var rand = betaprime.factory();

var r = rand( 1.5, 1.5 );
// returns <number>
```

If provided `alpha` and `beta`, the returned generator returns random variates from the specified distribution.

```javascript
// Draw from BetaPrime( 1.5, 1.5 ) distribution:
var rand = betaprime.factory( 1.5, 1.5 );

var r = rand();
// returns <number>

r = rand();
// returns <number>
```

If not provided `alpha` and `beta`, the returned generator requires that both parameters be provided at each invocation.

```javascript
var rand = betaprime.factory();

var r = rand( 1.0, 1.0 );
// returns <number>

r = rand( 3.14, 2.25 );
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

var rand = betaprime.factory({
    'prng': minstd.normalized
});

var r = rand( 2.0, 3.0 );
// returns <number>
```

To seed a pseudorandom number generator, set the `seed` option.

```javascript
var rand1 = betaprime.factory({
    'seed': 12345
});

var r1 = rand1( 2.0, 3.0 );
// returns <number>

var rand2 = betaprime.factory( 2.0, 3.0, {
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
    r = betaprime( 2.0, 3.0 );
}

// Create a new PRNG initialized to the current state of `betaprime`:
rand = betaprime.factory({
    'state': betaprime.state
});

// Test that the generated pseudorandom numbers are the same:
bool = ( rand( 2.0, 3.0 ) === betaprime( 2.0, 3.0 ) );
// returns true
```

#### betaprime.NAME

The generator name.

```javascript
var str = betaprime.NAME;
// returns 'betaprime'
```

#### betaprime.PRNG

The underlying pseudorandom number generator.

```javascript
var prng = betaprime.PRNG;
// returns <Function>
```

#### betaprime.seed

The value used to seed `betaprime()`.

```javascript
var rand;
var r;
var i;

// Generate pseudorandom values...
for ( i = 0; i < 100; i++ ) {
    r = betaprime( 2.0, 2.0 );
}

// Generate the same pseudorandom values...
rand = betaprime.factory( 2.0, 2.0, {
    'seed': betaprime.seed
});
for ( i = 0; i < 100; i++ ) {
    r = rand();
}
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = betaprime.factory({
    'prng': Math.random
});

var seed = rand.seed;
// returns null
```

#### betaprime.seedLength

Length of generator seed.

```javascript
var len = betaprime.seedLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = betaprime.factory({
    'prng': Math.random
});

var len = rand.seedLength;
// returns null
```

#### betaprime.state

Writable property for getting and setting the generator state.

```javascript
var r = betaprime( 2.0, 5.0 );
// returns <number>

r = betaprime( 2.0, 5.0 );
// returns <number>

// ...

// Get a copy of the current state:
var state = betaprime.state;
// returns <Uint32Array>

r = betaprime( 2.0, 5.0 );
// returns <number>

r = betaprime( 2.0, 5.0 );
// returns <number>

// Reset the state:
betaprime.state = state;

// Replay the last two pseudorandom numbers:
r = betaprime( 2.0, 5.0 );
// returns <number>

r = betaprime( 2.0, 5.0 );
// returns <number>

// ...
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = betaprime.factory({
    'prng': Math.random
});

var state = rand.state;
// returns null
```

#### betaprime.stateLength

Length of generator state.

```javascript
var len = betaprime.stateLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = betaprime.factory({
    'prng': Math.random
});

var len = rand.stateLength;
// returns null
```

#### betaprime.byteLength

Size of generator state.

```javascript
var sz = betaprime.byteLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = betaprime.factory({
    'prng': Math.random
});

var sz = rand.byteLength;
// returns null
```

#### betaprime.toJSON()

Serializes the pseudorandom number generator as a JSON object.

```javascript
var o = betaprime.toJSON();
// returns { 'type': 'PRNG', 'name': '...', 'state': {...}, 'params': [] }
```

If provided a PRNG for uniformly distributed numbers, this method returns `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = betaprime.factory({
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
var betaprime = require( '@stdlib/random/base/betaprime' );

var seed;
var rand;
var i;

// Generate pseudorandom numbers...
for ( i = 0; i < 100; i++ ) {
    console.log( betaprime( 2.0, 2.0 ) );
}

// Create a new pseudorandom number generator...
seed = 1234;
rand = betaprime.factory( 6.0, 2.0, {
    'seed': seed
});
for ( i = 0; i < 100; i++ ) {
    console.log( rand() );
}

// Create another pseudorandom number generator using a previous seed...
rand = betaprime.factory( 2.0, 2.0, {
    'seed': betaprime.seed
});
for ( i = 0; i < 100; i++ ) {
    console.log( rand() );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/random/array/betaprime`][@stdlib/random/array/betaprime]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a beta prime distribution.</span>
-   <span class="package-name">[`@stdlib/random/iter/betaprime`][@stdlib/random/iter/betaprime]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a beta prime distribution.</span>
-   <span class="package-name">[`@stdlib/random/streams/betaprime`][@stdlib/random/streams/betaprime]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a beta prime distribution.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[betaprime]: https://en.wikipedia.org/wiki/Beta_prime_distribution

[@stdlib/array/uint32]: https://github.com/stdlib-js/array-uint32

<!-- <related-links> -->

[@stdlib/random/array/betaprime]: https://github.com/stdlib-js/random/tree/main/array/betaprime

[@stdlib/random/iter/betaprime]: https://github.com/stdlib-js/random/tree/main/iter/betaprime

[@stdlib/random/streams/betaprime]: https://github.com/stdlib-js/random/tree/main/streams/betaprime

<!-- </related-links> -->

</section>

<!-- /.links -->
