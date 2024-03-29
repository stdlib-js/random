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

# Bernoulli Random Numbers

> [Bernoulli][bernoulli] distributed pseudorandom numbers.

<section class="usage">

## Usage

```javascript
var bernoulli = require( '@stdlib/random/base/bernoulli' );
```

#### bernoulli( p )

Returns a pseudorandom number drawn from a [Bernoulli][bernoulli] distribution with success probability `p`.

```javascript
var r = bernoulli( 0.8 );
// returns <number>
```

If `p < 0` or `p > 1`, the function returns `NaN`.

```javascript
var r = bernoulli( 3.14 );
// returns NaN

r = bernoulli( -0.5 );
// returns NaN
```

If `p` is `NaN`, the function returns `NaN`.

```javascript
var r = bernoulli( NaN );
// returns NaN
```

#### bernoulli.factory( \[p, ]\[options] )

Returns a pseudorandom number generator (PRNG) for generating pseudorandom numbers drawn from a [Bernoulli][bernoulli] distribution.

```javascript
var rand = bernoulli.factory();

var r = rand( 0.3 );
// returns <number>
```

If provided `p`, the returned generator returns random variates from the specified distribution.

```javascript
var rand = bernoulli.factory( 0.6 );

var r = rand();
// returns <number>

r = rand();
// returns <number>
```

If not provided `p`, the returned generator requires that `p` be provided at each invocation.

```javascript
var rand = bernoulli.factory();

var r = rand( 0.67 );
// returns <number>

r = rand( 0.42 );
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

var rand = bernoulli.factory({
    'prng': minstd.normalized
});

var r = rand( 0.3 );
// returns <number>
```

To seed a pseudorandom number generator, set the `seed` option.

```javascript
var rand1 = bernoulli.factory({
    'seed': 12345
});

var r1 = rand1( 0.2 );
// returns <number>

var rand2 = bernoulli.factory( 0.2, {
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
    r = bernoulli( 0.2 );
}

// Create a new PRNG initialized to the current state of `bernoulli`:
rand = bernoulli.factory({
    'state': bernoulli.state
});

// Test that the generated pseudorandom numbers are the same:
bool = ( rand( 0.2 ) === bernoulli( 0.2 ) );
// returns true
```

#### bernoulli.NAME

The generator name.

```javascript
var str = bernoulli.NAME;
// returns 'bernoulli'
```

#### bernoulli.PRNG

The underlying pseudorandom number generator.

```javascript
var prng = bernoulli.PRNG;
// returns <Function>
```

#### bernoulli.seed

The value used to seed `bernoulli()`.

```javascript
var rand;
var r;
var i;

// Generate pseudorandom values...
for ( i = 0; i < 100; i++ ) {
    r = bernoulli( 0.5 );
}

// Generate the same pseudorandom values...
rand = bernoulli.factory( 0.5, {
    'seed': bernoulli.seed
});
for ( i = 0; i < 100; i++ ) {
    r = rand();
}
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = bernoulli.factory({
    'prng': Math.random
});

var seed = rand.seed;
// returns null
```

#### bernoulli.seedLength

Length of generator seed.

```javascript
var len = bernoulli.seedLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = bernoulli.factory({
    'prng': Math.random
});

var len = rand.seedLength;
// returns null
```

#### bernoulli.state

Writable property for getting and setting the generator state.

```javascript
var r = bernoulli( 0.3 );
// returns <number>

r = bernoulli( 0.3 );
// returns <number>

// ...

// Get a copy of the current state:
var state = bernoulli.state;
// returns <Uint32Array>

r = bernoulli( 0.3 );
// returns <number>

r = bernoulli( 0.3 );
// returns <number>

// Reset the state:
bernoulli.state = state;

// Replay the last two pseudorandom numbers:
r = bernoulli( 0.3 );
// returns <number>

r = bernoulli( 0.3 );
// returns <number>

// ...
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = bernoulli.factory({
    'prng': Math.random
});

var state = rand.state;
// returns null
```

#### bernoulli.stateLength

Length of generator state.

```javascript
var len = bernoulli.stateLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = bernoulli.factory({
    'prng': Math.random
});

var len = rand.stateLength;
// returns null
```

#### bernoulli.byteLength

Size (in bytes) of generator state.

```javascript
var sz = bernoulli.byteLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = bernoulli.factory({
    'prng': Math.random
});

var sz = rand.byteLength;
// returns null
```

#### bernoulli.toJSON()

Serializes the pseudorandom number generator as a JSON object.

```javascript
var o = bernoulli.toJSON();
// returns { 'type': 'PRNG', 'name': '...', 'state': {...}, 'params': [] }
```

If provided a PRNG for uniformly distributed numbers, this method returns `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = bernoulli.factory({
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
var bernoulli = require( '@stdlib/random/base/bernoulli' );

var seed;
var rand;
var i;

// Generate pseudorandom numbers...
for ( i = 0; i < 100; i++ ) {
    console.log( bernoulli( 0.4 ) );
}

// Create a new pseudorandom number generator...
seed = 1234;
rand = bernoulli.factory( 0.4, {
    'seed': seed
});
for ( i = 0; i < 100; i++ ) {
    console.log( rand() );
}

// Create another pseudorandom number generator using a previous seed...
rand = bernoulli.factory( 0.4, {
    'seed': bernoulli.seed
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

-   <span class="package-name">[`@stdlib/random/array/bernoulli`][@stdlib/random/array/bernoulli]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a Bernoulli distribution.</span>
-   <span class="package-name">[`@stdlib/random/iter/bernoulli`][@stdlib/random/iter/bernoulli]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a Bernoulli distribution.</span>
-   <span class="package-name">[`@stdlib/random/streams/bernoulli`][@stdlib/random/streams/bernoulli]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a Bernoulli distribution.</span>
-   <span class="package-name">[`@stdlib/random/base/binomial`][@stdlib/random/base/binomial]</span><span class="delimiter">: </span><span class="description">binomial distributed pseudorandom numbers.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[bernoulli]: https://en.wikipedia.org/wiki/Bernoulli_distribution

[@stdlib/array/uint32]: https://github.com/stdlib-js/array-uint32

<!-- <related-links> -->

[@stdlib/random/array/bernoulli]: https://github.com/stdlib-js/random/tree/main/array/bernoulli

[@stdlib/random/iter/bernoulli]: https://github.com/stdlib-js/random/tree/main/iter/bernoulli

[@stdlib/random/streams/bernoulli]: https://github.com/stdlib-js/random/tree/main/streams/bernoulli

[@stdlib/random/base/binomial]: https://github.com/stdlib-js/random/tree/main/base/binomial

<!-- </related-links> -->

</section>

<!-- /.links -->
