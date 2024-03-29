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

# Cauchy Random Numbers

> [Cauchy][cauchy] distributed pseudorandom numbers.

<section class="usage">

## Usage

```javascript
var cauchy = require( '@stdlib/random/base/cauchy' );
```

#### cauchy( x0, gamma )

Returns a pseudorandom number drawn from a [Cauchy][cauchy] distribution with parameters `x0` (location parameter) and `gamma > 0` (scale parameter).

```javascript
var r = cauchy( 2.0, 5.0 );
// returns <number>
```

If `x0` or `gamma` is `NaN` or `gamma <= 0`, the function returns `NaN`.

```javascript
var r = cauchy( 2.0, -2.0 );
// returns NaN

r = cauchy( NaN, 5.0 );
// returns NaN

r = cauchy( 2.0, NaN );
// returns NaN
```

#### cauchy.factory( \[x0, gamma, ]\[options] )

Returns a pseudorandom number generator (PRNG) for generating pseudorandom numbers drawn from a [Cauchy][cauchy] distribution.

```javascript
var rand = cauchy.factory();

var r = rand( 0.0, 1.5 );
// returns <number>
```

If provided `x0` and `gamma`, the returned generator returns random variates from the specified distribution.

```javascript
// Draw from Cauchy( 0.0, 1.5 ) distribution:
var rand = cauchy.factory( 0.0, 1.5 );

var r = rand();
// returns <number>

r = rand();
// returns <number>
```

If not provided `x0` and `gamma`, the returned generator requires that both parameters be provided at each invocation.

```javascript
var rand = cauchy.factory();

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

var rand = cauchy.factory({
    'prng': minstd.normalized
});

var r = rand( 2.0, 3.0 );
// returns <number>
```

To seed a pseudorandom number generator, set the `seed` option.

```javascript
var rand1 = cauchy.factory({
    'seed': 12345
});

var r1 = rand1( 2.0, 3.0 );
// returns <number>

var rand2 = cauchy.factory( 2.0, 3.0, {
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
    r = cauchy( 2.0, 3.0 );
}

// Create a new PRNG initialized to the current state of `cauchy`:
rand = cauchy.factory({
    'state': cauchy.state
});

// Test that the generated pseudorandom numbers are the same:
bool = ( rand( 2.0, 3.0 ) === cauchy( 2.0, 3.0 ) );
// returns true
```

#### cauchy.NAME

The generator name.

```javascript
var str = cauchy.NAME;
// returns 'cauchy'
```

#### cauchy.PRNG

The underlying pseudorandom number generator.

```javascript
var prng = cauchy.PRNG;
// returns <Function>
```

#### cauchy.seed

The value used to seed `cauchy()`.

```javascript
var rand;
var r;
var i;

// Generate pseudorandom values...
for ( i = 0; i < 100; i++ ) {
    r = cauchy( 0.0, 2.0 );
}

// Generate the same pseudorandom values...
rand = cauchy.factory( 0.0, 2.0, {
    'seed': cauchy.seed
});
for ( i = 0; i < 100; i++ ) {
    r = rand();
}
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = cauchy.factory({
    'prng': Math.random
});

var seed = rand.seed;
// returns null
```

#### cauchy.seedLength

Length of generator seed.

```javascript
var len = cauchy.seedLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = cauchy.factory({
    'prng': Math.random
});

var len = rand.seedLength;
// returns null
```

#### cauchy.state

Writable property for getting and setting the generator state.

```javascript
var r = cauchy( 2.0, 5.0 );
// returns <number>

r = cauchy( 2.0, 5.0 );
// returns <number>

// ...

// Get a copy of the current state:
var state = cauchy.state;
// returns <Uint32Array>

r = cauchy( 2.0, 5.0 );
// returns <number>

r = cauchy( 2.0, 5.0 );
// returns <number>

// Reset the state:
cauchy.state = state;

// Replay the last two pseudorandom numbers:
r = cauchy( 2.0, 5.0 );
// returns <number>

r = cauchy( 2.0, 5.0 );
// returns <number>

// ...
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = cauchy.factory({
    'prng': Math.random
});

var state = rand.state;
// returns null
```

#### cauchy.stateLength

Length of generator state.

```javascript
var len = cauchy.stateLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = cauchy.factory({
    'prng': Math.random
});

var len = rand.stateLength;
// returns null
```

#### cauchy.byteLength

Size (in bytes) of generator state.

```javascript
var sz = cauchy.byteLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = cauchy.factory({
    'prng': Math.random
});

var sz = rand.byteLength;
// returns null
```

#### cauchy.toJSON()

Serializes the pseudorandom number generator as a JSON object.

```javascript
var o = cauchy.toJSON();
// returns { 'type': 'PRNG', 'name': '...', 'state': {...}, 'params': [] }
```

If provided a PRNG for uniformly distributed numbers, this method returns `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = cauchy.factory({
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
var cauchy = require( '@stdlib/random/base/cauchy' );

var seed;
var rand;
var i;

// Generate pseudorandom numbers...
for ( i = 0; i < 100; i++ ) {
    console.log( cauchy( 2.0, 2.0 ) );
}

// Create a new pseudorandom number generator...
seed = 1234;
rand = cauchy.factory( -6.0, 2.0, {
    'seed': seed
});
for ( i = 0; i < 100; i++ ) {
    console.log( rand() );
}

// Create another pseudorandom number generator using a previous seed...
rand = cauchy.factory( 2.0, 2.0, {
    'seed': cauchy.seed
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

-   <span class="package-name">[`@stdlib/random/array/cauchy`][@stdlib/random/array/cauchy]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a Cauchy distribution.</span>
-   <span class="package-name">[`@stdlib/random/iter/cauchy`][@stdlib/random/iter/cauchy]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a Cauchy distribution.</span>
-   <span class="package-name">[`@stdlib/random/streams/cauchy`][@stdlib/random/streams/cauchy]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a Cauchy distribution.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[cauchy]: https://en.wikipedia.org/wiki/Cauchy_distribution

[@stdlib/array/uint32]: https://github.com/stdlib-js/array-uint32

<!-- <related-links> -->

[@stdlib/random/array/cauchy]: https://github.com/stdlib-js/random/tree/main/array/cauchy

[@stdlib/random/iter/cauchy]: https://github.com/stdlib-js/random/tree/main/iter/cauchy

[@stdlib/random/streams/cauchy]: https://github.com/stdlib-js/random/tree/main/streams/cauchy

<!-- </related-links> -->

</section>

<!-- /.links -->
