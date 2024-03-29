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

# Negative Binomial Random Numbers

> [Negative binomially][negative-binomial] distributed pseudorandom numbers.

<section class="usage">

## Usage

```javascript
var negativeBinomial = require( '@stdlib/random/base/negative-binomial' );
```

#### negativeBinomial( r, p )

Returns a pseudorandom number drawn from a [negative binomial][negative-binomial] distribution with parameters `r` (number of successes until experiment is stopped) and `p` (success probability).

```javascript
var r = negativeBinomial( 20, 0.8 );
// returns <number>
```

If `r` or `p` is `NaN`, the function returns `NaN`.

```javascript
var r = negativeBinomial( NaN, 0.4 );
// returns NaN

r = negativeBinomial( 20, NaN );
// returns NaN
```

If `p` is not in the interval `(0,1)` (exclusive), the function returns `NaN`.

```javascript
var r = negativeBinomial( 10, 1.1 );
// returns NaN

r = negativeBinomial( 10, 1.0 );
// returns NaN

r = negativeBinomial( 10, 0.0 );
// returns NaN
```

#### negativeBinomial.factory( \[r, p, ]\[options] )

Returns a pseudorandom number generator (PRNG) for generating pseudorandom numbers drawn from a [negative binomial][negative-binomial] distribution.

```javascript
var rand = negativeBinomial.factory();

var r = rand( 20, 0.3 );
// returns <number>
```

If provided `r` and `p`, the returned generator returns random variates from the specified distribution.

```javascript
var rand = negativeBinomial.factory( 10, 0.8 );

var r = rand();
// returns <number>

r = rand();
// returns <number>
```

If not provided `r` and `p`, the returned generator requires that both parameters be provided at each invocation.

```javascript
var rand = negativeBinomial.factory();

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

var rand = negativeBinomial.factory({
    'prng': minstd.normalized
});

var r = rand( 8, 0.9 );
// returns <number>
```

To seed a pseudorandom number generator, set the `seed` option.

```javascript
var rand1 = negativeBinomial.factory({
    'seed': 12345
});

var r1 = rand1( 8, 0.9 );
// returns <number>

var rand2 = negativeBinomial.factory( 8, 0.9, {
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
    r = negativeBinomial( 8, 0.9 );
}

// Create a new PRNG initialized to the current state of `negativeBinomial`:
rand = negativeBinomial.factory({
    'state': negativeBinomial.state
});

// Test that the generated pseudorandom numbers are the same:
bool = ( rand( 8, 0.9 ) === negativeBinomial( 8, 0.9 ) );
// returns true
```

#### negativeBinomial.NAME

The generator name.

```javascript
var str = negativeBinomial.NAME;
// returns 'negative-binomial'
```

#### negativeBinomial.PRNG

The underlying pseudorandom number generator.

```javascript
var prng = negativeBinomial.PRNG;
// returns <Function>
```

#### negativeBinomial.seed

The value used to seed `negativeBinomial()`.

```javascript
var rand;
var r;
var i;

// Generate pseudorandom values...
for ( i = 0; i < 100; i++ ) {
    r = negativeBinomial( 20, 0.5 );
}

// Generate the same pseudorandom values...
rand = negativeBinomial.factory( 20, 0.5, {
    'seed': negativeBinomial.seed
});
for ( i = 0; i < 100; i++ ) {
    r = rand();
}
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = negativeBinomial.factory({
    'prng': Math.random
});

var seed = rand.seed;
// returns null
```

#### negativeBinomial.seedLength

Length of generator seed.

```javascript
var len = negativeBinomial.seedLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = negativeBinomial.factory({
    'prng': Math.random
});

var len = rand.seedLength;
// returns null
```

#### negativeBinomial.state

Writable property for getting and setting the generator state.

```javascript
var r = negativeBinomial( 20, 0.5 );
// returns <number>

r = negativeBinomial( 20, 0.5 );
// returns <number>

// ...

// Get a copy of the current state:
var state = negativeBinomial.state;
// returns <Uint32Array>

r = negativeBinomial( 20, 0.5 );
// returns <number>

r = negativeBinomial( 20, 0.5 );
// returns <number>

// Reset the state:
negativeBinomial.state = state;

// Replay the last two pseudorandom numbers:
r = negativeBinomial( 20, 0.5 );
// returns <number>

r = negativeBinomial( 20, 0.5 );
// returns <number>

// ...
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = negativeBinomial.factory({
    'prng': Math.random
});

var state = rand.state;
// returns null
```

#### negativeBinomial.stateLength

Length of generator state.

```javascript
var len = negativeBinomial.stateLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = negativeBinomial.factory({
    'prng': Math.random
});

var len = rand.stateLength;
// returns null
```

#### negativeBinomial.byteLength

Size (in bytes) of generator state.

```javascript
var sz = negativeBinomial.byteLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = negativeBinomial.factory({
    'prng': Math.random
});

var sz = rand.byteLength;
// returns null
```

#### negativeBinomial.toJSON()

Serializes the pseudorandom number generator as a JSON object.

```javascript
var o = negativeBinomial.toJSON();
// returns { 'type': 'PRNG', 'name': '...', 'state': {...}, 'params': [] }
```

If provided a PRNG for uniformly distributed numbers, this method returns `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = negativeBinomial.factory({
    'prng': Math.random
});

var o = rand.toJSON();
// returns null
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The `r` parameter is the shape parameter of the gamma mixing distribution when expressing the negative binomial distribution as a Gamma–Poisson mixture. Accordingly, `r` is **not** required to be an integer value.
-   If PRNG state is "shared" (meaning a state array was provided during PRNG creation and **not** copied) and one sets the generator state to a state array having a different length, the PRNG does **not** update the existing shared state and, instead, points to the newly provided state array. In order to synchronize PRNG output according to the new shared state array, the state array for **each** relevant PRNG must be **explicitly** set.
-   If PRNG state is "shared" and one sets the generator state to a state array of the same length, the PRNG state is updated (along with the state of all other PRNGs sharing the PRNG's state array).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var negativeBinomial = require( '@stdlib/random/base/negative-binomial' );

var seed;
var rand;
var i;

// Generate pseudorandom numbers...
for ( i = 0; i < 100; i++ ) {
    console.log( negativeBinomial( 10, 0.5 ) );
}

// Create a new pseudorandom number generator...
seed = 1234;
rand = negativeBinomial.factory( 8, 0.8, {
    'seed': seed
});
for ( i = 0; i < 100; i++ ) {
    console.log( rand() );
}

// Create another pseudorandom number generator using a previous seed...
rand = negativeBinomial.factory( 10, 0.5, {
    'seed': negativeBinomial.seed
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

-   <span class="package-name">[`@stdlib/random/array/negative-binomial`][@stdlib/random/array/negative-binomial]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a negative binomial distribution.</span>
-   <span class="package-name">[`@stdlib/random/iter/negative-binomial`][@stdlib/random/iter/negative-binomial]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a negative binomial distribution.</span>
-   <span class="package-name">[`@stdlib/random/streams/negative-binomial`][@stdlib/random/streams/negative-binomial]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a negative binomial distribution.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[negative-binomial]: https://en.wikipedia.org/wiki/Negative_binomial_distribution

[@stdlib/array/uint32]: https://github.com/stdlib-js/array-uint32

<!-- <related-links> -->

[@stdlib/random/array/negative-binomial]: https://github.com/stdlib-js/random/tree/main/array/negative-binomial

[@stdlib/random/iter/negative-binomial]: https://github.com/stdlib-js/random/tree/main/iter/negative-binomial

[@stdlib/random/streams/negative-binomial]: https://github.com/stdlib-js/random/tree/main/streams/negative-binomial

<!-- </related-links> -->

</section>

<!-- /.links -->
