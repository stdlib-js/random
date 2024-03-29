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

# Raised Cosine Random Numbers

> [Raised cosine][cosine] distributed pseudorandom numbers.

<section class="usage">

## Usage

```javascript
var cosine = require( '@stdlib/random/base/cosine' );
```

#### cosine( mu, s )

Returns a pseudorandom number drawn from a [raised cosine][cosine] distribution with parameters `mu` (mean) and `s` (scale parameter).

```javascript
var r = cosine( 2.0, 5.0 );
// returns <number>
```

If `mu` or `s` is `NaN` or `s <= 0`, the function returns `NaN`.

```javascript
var r = cosine( 2.0, -2.0 );
// returns NaN

r = cosine( NaN, 5.0 );
// returns NaN

r = cosine( 2.0, NaN );
// returns NaN
```

#### cosine.factory( \[mu, s, ]\[options] )

Returns a pseudorandom number generator (PRNG) for generating pseudorandom numbers drawn from a [raised cosine][cosine] distribution.

```javascript
var rand = cosine.factory();

var r = rand( 0.1, 1.5 );
// returns <number>
```

If provided `mu` and `s`, the returned generator returns random variates from the specified distribution.

```javascript
var rand = cosine.factory( 10.0, 2.0 );

var r = rand();
// returns <number>

r = rand();
// returns <number>
```

If not provided `mu` and `s`, the returned generator requires that both parameters be provided at each invocation.

```javascript
var rand = cosine.factory();

var r = rand( 0.0, 1.0 );
// returns <number>

r = rand( -2.0, 2.0 );
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

var rand = cosine.factory({
    'prng': minstd.normalized
});

var r = rand( 1.0, 2.0 );
// returns <number>
```

To seed a pseudorandom number generator, set the `seed` option.

```javascript
var rand1 = cosine.factory({
    'seed': 12345
});

var r1 = rand1( 1.0, 2.0 );
// returns <number>

var rand2 = cosine.factory( 1.0, 2.0, {
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
    r = cosine( 1.0, 2.0 );
}

// Create a new PRNG initialized to the current state of `cosine`:
rand = cosine.factory({
    'state': cosine.state
});

// Test that the generated pseudorandom numbers are the same:
bool = ( rand( 1.0, 2.0 ) === cosine( 1.0, 2.0 ) );
// returns true
```

#### cosine.NAME

The generator name.

```javascript
var str = cosine.NAME;
// returns 'cosine'
```

#### cosine.PRNG

The underlying pseudorandom number generator.

```javascript
var prng = cosine.PRNG;
// returns <Function>
```

#### cosine.seed

The value used to seed `cosine()`.

```javascript
var rand;
var r;
var i;

// Generate pseudorandom values...
for ( i = 0; i < 100; i++ ) {
    r = cosine( 2.0, 2.0 );
}

// Generate the same pseudorandom values...
rand = cosine.factory( 2.0, 2.0, {
    'seed': cosine.seed
});
for ( i = 0; i < 100; i++ ) {
    r = rand();
}
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = cosine.factory({
    'prng': Math.random
});

var seed = rand.seed;
// returns null
```

#### cosine.seedLength

Length of generator seed.

```javascript
var len = cosine.seedLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = cosine.factory({
    'prng': Math.random
});

var len = rand.seedLength;
// returns null
```

#### cosine.state

Writable property for getting and setting the generator state.

```javascript
var r = cosine( 2.0, 5.0 );
// returns <number>

r = cosine( 2.0, 5.0 );
// returns <number>

// ...

// Get a copy of the current state:
var state = cosine.state;
// returns <Uint32Array>

r = cosine( 2.0, 5.0 );
// returns <number>

r = cosine( 2.0, 5.0 );
// returns <number>

// Reset the state:
cosine.state = state;

// Replay the last two pseudorandom numbers:
r = cosine( 2.0, 5.0 );
// returns <number>

r = cosine( 2.0, 5.0 );
// returns <number>

// ...
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = cosine.factory({
    'prng': Math.random
});

var state = rand.state;
// returns null
```

#### cosine.stateLength

Length of generator state.

```javascript
var len = cosine.stateLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = cosine.factory({
    'prng': Math.random
});

var len = rand.stateLength;
// returns null
```

#### cosine.byteLength

Size (in bytes) of generator state.

```javascript
var sz = cosine.byteLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = cosine.factory({
    'prng': Math.random
});

var sz = rand.byteLength;
// returns null
```

#### cosine.toJSON()

Serializes the pseudorandom number generator as a JSON object.

```javascript
var o = cosine.toJSON();
// returns { 'type': 'PRNG', 'name': '...', 'state': {...}, 'params': [] }
```

If provided a PRNG for uniformly distributed numbers, this method returns `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = cosine.factory({
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
var cosine = require( '@stdlib/random/base/cosine' );

var seed;
var rand;
var i;

// Generate pseudorandom numbers...
for ( i = 0; i < 100; i++ ) {
    console.log( cosine( 0.0, 1.0 ) );
}

// Create a new pseudorandom number generator...
seed = 1234;
rand = cosine.factory( 5.0, 2.0, {
    'seed': seed
});
for ( i = 0; i < 100; i++ ) {
    console.log( rand() );
}

// Create another pseudorandom number generator using a previous seed...
rand = cosine.factory( 0.0, 1.0, {
    'seed': cosine.seed
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

-   <span class="package-name">[`@stdlib/random/array/cosine`][@stdlib/random/array/cosine]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a raised cosine distribution.</span>
-   <span class="package-name">[`@stdlib/random/iter/cosine`][@stdlib/random/iter/cosine]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a raised cosine distribution.</span>
-   <span class="package-name">[`@stdlib/random/streams/cosine`][@stdlib/random/streams/cosine]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a raised cosine distribution.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[cosine]: https://en.wikipedia.org/wiki/Raised_cosine_distribution

[@stdlib/array/uint32]: https://github.com/stdlib-js/array-uint32

<!-- <related-links> -->

[@stdlib/random/array/cosine]: https://github.com/stdlib-js/random/tree/main/array/cosine

[@stdlib/random/iter/cosine]: https://github.com/stdlib-js/random/tree/main/iter/cosine

[@stdlib/random/streams/cosine]: https://github.com/stdlib-js/random/tree/main/streams/cosine

<!-- </related-links> -->

</section>

<!-- /.links -->
