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

# Gumbel Random Numbers

> [Gumbel][gumbel] distributed pseudorandom numbers.

<section class="usage">

## Usage

```javascript
var gumbel = require( '@stdlib/random/base/gumbel' );
```

#### gumbel( mu, beta )

Returns a pseudorandom number drawn from a [Gumbel][gumbel] distribution with parameters `mu` (mean) and `beta` (scale parameter).

```javascript
var r = gumbel( 2.0, 5.0 );
// returns <number>
```

If `mu` or `beta` is `NaN` or `beta <= 0`, the function returns `NaN`.

```javascript
var r = gumbel( 2.0, -2.0 );
// returns NaN

r = gumbel( NaN, 5.0 );
// returns NaN

r = gumbel( 2.0, NaN );
// returns NaN
```

#### gumbel.factory( \[mu, beta, ]\[options] )

Returns a pseudorandom number generator (PRNG) for generating pseudorandom numbers drawn from a [Gumbel][gumbel] distribution.

```javascript
var rand = gumbel.factory();

var r = rand( 0.1, 1.5 );
// returns <number>
```

If provided `mu` and `beta`, the returned generator returns random variates from the specified distribution.

```javascript
var rand = gumbel.factory( 10.0, 2.0 );

var r = rand();
// returns <number>

r = rand();
// returns <number>
```

If not provided `mu` and `beta`, the returned generator requires that both parameters be provided at each invocation.

```javascript
var rand = gumbel.factory();

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

var rand = gumbel.factory({
    'prng': minstd.normalized
});

var r = rand( 1.0, 2.0 );
// returns <number>
```

To seed a pseudorandom number generator, set the `seed` option.

```javascript
var rand1 = gumbel.factory({
    'seed': 12345
});

var r1 = rand1( 1.0, 2.0 );
// returns <number>

var rand2 = gumbel.factory( 1.0, 2.0, {
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
    r = gumbel( 1.0, 2.0 );
}

// Create a new PRNG initialized to the current state of `gumbel`:
rand = gumbel.factory({
    'state': gumbel.state
});

// Test that the generated pseudorandom numbers are the same:
bool = ( rand( 1.0, 2.0 ) === gumbel( 1.0, 2.0 ) );
// returns true
```

#### gumbel.NAME

The generator name.

```javascript
var str = gumbel.NAME;
// returns 'gumbel'
```

#### gumbel.PRNG

The underlying pseudorandom number generator.

```javascript
var prng = gumbel.PRNG;
// returns <Function>
```

#### gumbel.seed

The value used to seed `gumbel()`.

```javascript
var rand;
var r;
var i;

// Generate pseudorandom values...
for ( i = 0; i < 100; i++ ) {
    r = gumbel( 2.0, 2.0 );
}

// Generate the same pseudorandom values...
rand = gumbel.factory( 2.0, 2.0, {
    'seed': gumbel.seed
});
for ( i = 0; i < 100; i++ ) {
    r = rand();
}
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = gumbel.factory({
    'prng': Math.random
});

var seed = rand.seed;
// returns null
```

#### gumbel.seedLength

Length of generator seed.

```javascript
var len = gumbel.seedLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = gumbel.factory({
    'prng': Math.random
});

var len = rand.seedLength;
// returns null
```

#### gumbel.state

Writable property for getting and setting the generator state.

```javascript
var r = gumbel( 2.0, 5.0 );
// returns <number>

r = gumbel( 2.0, 5.0 );
// returns <number>

// ...

// Get a copy of the current state:
var state = gumbel.state;
// returns <Uint32Array>

r = gumbel( 2.0, 5.0 );
// returns <number>

r = gumbel( 2.0, 5.0 );
// returns <number>

// Reset the state:
gumbel.state = state;

// Replay the last two pseudorandom numbers:
r = gumbel( 2.0, 5.0 );
// returns <number>

r = gumbel( 2.0, 5.0 );
// returns <number>

// ...
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = gumbel.factory({
    'prng': Math.random
});

var state = rand.state;
// returns null
```

#### gumbel.stateLength

Length of generator state.

```javascript
var len = gumbel.stateLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = gumbel.factory({
    'prng': Math.random
});

var len = rand.stateLength;
// returns null
```

#### gumbel.byteLength

Size (in bytes) of generator state.

```javascript
var sz = gumbel.byteLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = gumbel.factory({
    'prng': Math.random
});

var sz = rand.byteLength;
// returns null
```

#### gumbel.toJSON()

Serializes the pseudorandom number generator as a JSON object.

```javascript
var o = gumbel.toJSON();
// returns { 'type': 'PRNG', 'name': '...', 'state': {...}, 'params': [] }
```

If provided a PRNG for uniformly distributed numbers, this method returns `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = gumbel.factory({
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
var gumbel = require( '@stdlib/random/base/gumbel' );

var seed;
var rand;
var i;

// Generate pseudorandom numbers...
for ( i = 0; i < 100; i++ ) {
    console.log( gumbel( 0.0, 1.0 ) );
}

// Create a new pseudorandom number generator...
seed = 1234;
rand = gumbel.factory( 5.0, 2.0, {
    'seed': seed
});
for ( i = 0; i < 100; i++ ) {
    console.log( rand() );
}

// Create another pseudorandom number generator using a previous seed...
rand = gumbel.factory( 0.0, 1.0, {
    'seed': gumbel.seed
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

-   <span class="package-name">[`@stdlib/random/array/gumbel`][@stdlib/random/array/gumbel]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a Gumbel distribution.</span>
-   <span class="package-name">[`@stdlib/random/iter/gumbel`][@stdlib/random/iter/gumbel]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a Gumbel distribution.</span>
-   <span class="package-name">[`@stdlib/random/streams/gumbel`][@stdlib/random/streams/gumbel]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a Gumbel distribution.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[gumbel]: https://en.wikipedia.org/wiki/Gumbel_distribution

[@stdlib/array/uint32]: https://github.com/stdlib-js/array-uint32

<!-- <related-links> -->

[@stdlib/random/array/gumbel]: https://github.com/stdlib-js/random/tree/main/array/gumbel

[@stdlib/random/iter/gumbel]: https://github.com/stdlib-js/random/tree/main/iter/gumbel

[@stdlib/random/streams/gumbel]: https://github.com/stdlib-js/random/tree/main/streams/gumbel

<!-- </related-links> -->

</section>

<!-- /.links -->
