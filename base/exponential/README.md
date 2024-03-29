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

# Exponential Random Numbers

> [Exponentially][exponential] distributed pseudorandom numbers.

<section class="usage">

## Usage

```javascript
var exponential = require( '@stdlib/random/base/exponential' );
```

#### exponential( lambda )

Returns a pseudorandom number drawn from an [exponential][exponential] distribution with rate parameter `lambda`.

```javascript
var r = exponential( 7.9 );
// returns <number>
```

If `lambda <= 0` or `lambda` is `NaN`, the function returns `NaN`.

```javascript
var r = exponential( -2.0 );
// returns NaN

r = exponential( NaN );
// returns NaN
```

#### exponential.factory( \[lambda, ]\[options] )

Returns a pseudorandom number generator (PRNG) for generating pseudorandom numbers drawn from an [exponential][exponential] distribution.

```javascript
var rand = exponential.factory();

var r = rand( 5.0 );
// returns <number>
```

If provided `lambda`, the returned generator returns random variates from the specified distribution.

```javascript
var rand = exponential.factory( 10.0 );

var r = rand();
// returns <number>

r = rand();
// returns <number>
```

If not provided `lambda`, the returned generator requires that `lambda` be provided at each invocation.

```javascript
var rand = exponential.factory();

var r = rand( 4.0 );
// returns <number>

r = rand( 3.14 );
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

var rand = exponential.factory({
    'prng': minstd.normalized
});

var r = rand( 3.0 );
// returns <number>
```

To seed a pseudorandom number generator, set the `seed` option.

```javascript
var rand1 = exponential.factory({
    'seed': 12345
});

var r1 = rand1( 3.0 );
// returns <number>

var rand2 = exponential.factory( 3.0, {
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
    r = exponential( 3.0 );
}

// Create a new PRNG initialized to the current state of `exponential`:
rand = exponential.factory({
    'state': exponential.state
});

// Test that the generated pseudorandom numbers are the same:
bool = ( rand( 3.0 ) === exponential( 3.0 ) );
// returns true
```

#### exponential.NAME

The generator name.

```javascript
var str = exponential.NAME;
// returns 'exponential'
```

#### exponential.PRNG

The underlying pseudorandom number generator.

```javascript
var prng = exponential.PRNG;
// returns <Function>
```

#### exponential.seed

The value used to seed `exponential()`.

```javascript
var rand;
var r;
var i;

// Generate pseudorandom values...
for ( i = 0; i < 100; i++ ) {
    r = exponential( 2.0 );
}

// Generate the same pseudorandom values...
rand = exponential.factory( 2.0, {
    'seed': exponential.seed
});
for ( i = 0; i < 100; i++ ) {
    r = rand();
}
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = exponential.factory({
    'prng': Math.random
});

var seed = rand.seed;
// returns null
```

#### exponential.seedLength

Length of generator seed.

```javascript
var len = exponential.seedLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = exponential.factory({
    'prng': Math.random
});

var len = rand.seedLength;
// returns null
```

#### exponential.state

Writable property for getting and setting the generator state.

```javascript
var r = exponential( 7.9 );
// returns <number>

r = exponential( 7.9 );
// returns <number>

// ...

// Get a copy of the current state:
var state = exponential.state;
// returns <Uint32Array>

r = exponential( 7.9 );
// returns <number>

r = exponential( 7.9 );
// returns <number>

// Reset the state:
exponential.state = state;

// Replay the last two pseudorandom numbers:
r = exponential( 7.9 );
// returns <number>

r = exponential( 7.9 );
// returns <number>

// ...
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = exponential.factory({
    'prng': Math.random
});

var state = rand.state;
// returns null
```

#### exponential.stateLength

Length of generator state.

```javascript
var len = exponential.stateLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = exponential.factory({
    'prng': Math.random
});

var len = rand.stateLength;
// returns null
```

#### exponential.byteLength

Size (in bytes) of generator state.

```javascript
var sz = exponential.byteLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = exponential.factory({
    'prng': Math.random
});

var sz = rand.byteLength;
// returns null
```

#### exponential.toJSON()

Serializes the pseudorandom number generator as a JSON object.

```javascript
var o = exponential.toJSON();
// returns { 'type': 'PRNG', 'name': '...', 'state': {...}, 'params': [] }
```

If provided a PRNG for uniformly distributed numbers, this method returns `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = exponential.factory({
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
var exponential = require( '@stdlib/random/base/exponential' );

var seed;
var rand;
var i;

// Generate pseudorandom numbers...
for ( i = 0; i < 100; i++ ) {
    console.log( exponential( 0.5 ) );
}

// Create a new pseudorandom number generator...
seed = 1234;
rand = exponential.factory( 0.8, {
    'seed': seed
});
for ( i = 0; i < 100; i++ ) {
    console.log( rand() );
}

// Create another pseudorandom number generator using a previous seed...
rand = exponential.factory( 0.5, {
    'seed': exponential.seed
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

-   <span class="package-name">[`@stdlib/random/array/exponential`][@stdlib/random/array/exponential]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from an exponential distribution.</span>
-   <span class="package-name">[`@stdlib/random/iter/exponential`][@stdlib/random/iter/exponential]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from an exponential distribution.</span>
-   <span class="package-name">[`@stdlib/random/streams/exponential`][@stdlib/random/streams/exponential]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from an exponential distribution.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[exponential]: https://en.wikipedia.org/wiki/Exponential_distribution

[@stdlib/array/uint32]: https://github.com/stdlib-js/array-uint32

<!-- <related-links> -->

[@stdlib/random/array/exponential]: https://github.com/stdlib-js/random/tree/main/array/exponential

[@stdlib/random/iter/exponential]: https://github.com/stdlib-js/random/tree/main/iter/exponential

[@stdlib/random/streams/exponential]: https://github.com/stdlib-js/random/tree/main/streams/exponential

<!-- </related-links> -->

</section>

<!-- /.links -->
