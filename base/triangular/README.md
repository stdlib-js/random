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

# Triangular Random Numbers

> [Triangular][triangular] distributed pseudorandom numbers.

<section class="usage">

## Usage

```javascript
var triangular = require( '@stdlib/random/base/triangular' );
```

#### triangular( a, b, c )

Returns a pseudorandom number drawn from a [triangular][triangular] distribution with parameters `a` (minimum support), `b` (maximum support), and `c` (mode).

```javascript
var r = triangular( 2.0, 5.0, 3.33 );
// returns <number>
```

If either `a`, `b`, or `c` is `NaN`, the function returns `NaN`.

```javascript
var r = triangular( NaN, 1.0, 0.5 );
// returns NaN

r = triangular( 1.0, NaN, 2.42 );
// returns NaN

r = triangular( 1.0, 10.0, NaN );
// returns NaN
```

If the condition `a <= c <= b` is not satisfied, the function returns `NaN`.

```javascript
var r = triangular( 13.0, 9.0, 0.5 );
// returns NaN
```

#### triangular.factory( \[a, b, c, ]\[options] )

Returns a pseudorandom number generator (PRNG) for generating pseudorandom numbers drawn from a [triangular][triangular] distribution.

```javascript
var rand = triangular.factory();

var r = rand( 0.0, 1.0, 0.5 );
// returns <number>
```

If provided `a`, `b`, and `c`, the returned generator returns random variates from the specified distribution.

```javascript
var rand = triangular.factory( -2.0, 2.0, 1.0 );

var r = rand();
// returns <number>

r = rand();
// returns <number>
```

If not provided `a`, `b`, and `c`, the returned generator requires that all three parameters be provided at each invocation.

```javascript
var rand = triangular.factory();

var r = rand( 0.0, 1.0, 0.75 );
// returns <number>

r = rand( -2.0, 2.0, 0.1 );
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

var rand = triangular.factory({
    'prng': minstd.normalized
});

var r = rand( 2.0, 4.0, 3.0 );
// returns <number>
```

To seed a pseudorandom number generator, set the `seed` option.

```javascript
var rand1 = triangular.factory({
    'seed': 12345
});

var r1 = rand1( 2.0, 4.0, 3.0 );
// returns <number>

var rand2 = triangular.factory( 2.0, 4.0, 3.0, {
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
    r = triangular( 0.0, 1.0, 0.5 );
}

// Create a new PRNG initialized to the current state of `triangular`:
rand = triangular.factory({
    'state': triangular.state
});

// Test that the generated pseudorandom numbers are the same:
bool = ( rand( 0.0, 1.0, 0.5 ) === triangular( 0.0, 1.0, 0.5 ) );
// returns true
```

#### triangular.NAME

The generator name.

```javascript
var str = triangular.NAME;
// returns 'triangular'
```

#### triangular.PRNG

The underlying pseudorandom number generator.

```javascript
var prng = triangular.PRNG;
// returns <Function>
```

#### triangular.seed

The value used to seed `triangular()`.

```javascript
var rand;
var r;
var i;

// Generate pseudorandom values...
for ( i = 0; i < 100; i++ ) {
    r = triangular( 0.0, 10.0, 3.0 );
}

// Generate the same pseudorandom values...
rand = triangular.factory( 0.0, 10.0, 3.0, {
    'seed': triangular.seed
});
for ( i = 0; i < 100; i++ ) {
    r = rand();
}
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = triangular.factory({
    'prng': Math.random
});

var seed = rand.seed;
// returns null
```

#### triangular.seedLength

Length of generator seed.

```javascript
var len = triangular.seedLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = triangular.factory({
    'prng': Math.random
});

var len = rand.seedLength;
// returns null
```

#### triangular.state

Writable property for getting and setting the generator state.

```javascript
var r = triangular( 0.0, 1.0, 0.5 );
// returns <number>

r = triangular( 0.0, 1.0, 0.5 );
// returns <number>

// ...

// Get a copy of the current state:
var state = triangular.state;
// returns <Uint32Array>

r = triangular( 0.0, 1.0, 0.5 );
// returns <number>

r = triangular( 0.0, 1.0, 0.5 );
// returns <number>

// Reset the state:
triangular.state = state;

// Replay the last two pseudorandom numbers:
r = triangular( 0.0, 1.0, 0.5 );
// returns <number>

r = triangular( 0.0, 1.0, 0.5 );
// returns <number>

// ...
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = triangular.factory({
    'prng': Math.random
});

var state = rand.state;
// returns null
```

#### triangular.stateLength

Length of generator state.

```javascript
var len = triangular.stateLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = triangular.factory({
    'prng': Math.random
});

var len = rand.stateLength;
// returns null
```

#### triangular.byteLength

Size (in bytes) of generator state.

```javascript
var sz = triangular.byteLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = triangular.factory({
    'prng': Math.random
});

var sz = rand.byteLength;
// returns null
```

#### triangular.toJSON()

Serializes the pseudorandom number generator as a JSON object.

```javascript
var o = triangular.toJSON();
// returns { 'type': 'PRNG', 'name': '...', 'state': {...}, 'params': [] }
```

If provided a PRNG for uniformly distributed numbers, this method returns `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = triangular.factory({
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
var triangular = require( '@stdlib/random/base/triangular' );

var seed;
var rand;
var i;

// Generate pseudorandom numbers...
for ( i = 0; i < 100; i++ ) {
    console.log( triangular( 0.0, 1.0, 0.5 ) );
}

// Create a new pseudorandom number generator...
seed = 1234;
rand = triangular.factory( 2.0, 5.0, 3.0, {
    'seed': seed
});
for ( i = 0; i < 100; i++ ) {
    console.log( rand() );
}

// Create another pseudorandom number generator using a previous seed...
rand = triangular.factory( 0.0, 1.0, 0.5, {
    'seed': triangular.seed
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

-   <span class="package-name">[`@stdlib/random/array/triangular`][@stdlib/random/array/triangular]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a triangular distribution.</span>
-   <span class="package-name">[`@stdlib/random/iter/triangular`][@stdlib/random/iter/triangular]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a triangular distribution.</span>
-   <span class="package-name">[`@stdlib/random/streams/triangular`][@stdlib/random/streams/triangular]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a triangular distribution.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[triangular]: https://en.wikipedia.org/wiki/Triangular_distribution

[@stdlib/array/uint32]: https://github.com/stdlib-js/array-uint32

<!-- <related-links> -->

[@stdlib/random/array/triangular]: https://github.com/stdlib-js/random/tree/main/array/triangular

[@stdlib/random/iter/triangular]: https://github.com/stdlib-js/random/tree/main/iter/triangular

[@stdlib/random/streams/triangular]: https://github.com/stdlib-js/random/tree/main/streams/triangular

<!-- </related-links> -->

</section>

<!-- /.links -->
