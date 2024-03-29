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

# Kumaraswamy's Double Bounded Random Numbers

> [Kumaraswamy's double bounded][kumaraswamy] distributed pseudorandom numbers.

<section class="usage">

## Usage

```javascript
var kumaraswamy = require( '@stdlib/random/base/kumaraswamy' );
```

#### kumaraswamy( a, b )

Returns a pseudorandom number drawn from [Kumaraswamy's double bounded][kumaraswamy] distribution with parameters `a` (first shape parameter) and `b` (second shape parameter).

```javascript
var r = kumaraswamy( 2.0, 5.0 );
// returns <number>
```

If `a <= 0` or `b <= 0`, the function returns `NaN`.

```javascript
var r = kumaraswamy( 2.0, -2.0 );
// returns NaN

r = kumaraswamy( -2.0, 2.0 );
// returns NaN
```

If `a` or `b` is `NaN`, the function returns `NaN`.

```javascript
var r = kumaraswamy( NaN, 5.0 );
// returns NaN

r = kumaraswamy( 2.0, NaN );
// returns NaN
```

#### kumaraswamy.factory( \[a, b, ]\[options] )

Returns a pseudorandom number generator (PRNG) for generating pseudorandom numbers drawn from [Kumaraswamy's double bounded][kumaraswamy] distribution.

```javascript
var rand = kumaraswamy.factory();

var r = rand( 1.5, 1.5 );
// returns <number>
```

If provided `a` and `b`, the returned generator returns random variates from the specified distribution.

```javascript
// Draw from Kumaraswamy( 1.5, 1.5 ) distribution:
var rand = kumaraswamy.factory( 1.5, 1.5 );

var r = rand();
// returns <number>

r = rand();
// returns <number>
```

If not provided `a` and `b`, the returned generator requires that both parameters be provided at each invocation.

```javascript
var rand = kumaraswamy.factory();

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

var rand = kumaraswamy.factory({
    'prng': minstd.normalized
});

var r = rand( 2.0, 3.0 );
// returns <number>
```

To seed a pseudorandom number generator, set the `seed` option.

```javascript
var rand1 = kumaraswamy.factory({
    'seed': 12345
});

var r1 = rand1( 2.0, 3.0 );
// returns <number>

var rand2 = kumaraswamy.factory( 2.0, 3.0, {
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
    r = kumaraswamy( 2.0, 3.0 );
}

// Create a new PRNG initialized to the current state of `kumaraswamy`:
rand = kumaraswamy.factory({
    'state': kumaraswamy.state
});

// Test that the generated pseudorandom numbers are the same:
bool = ( rand( 2.0, 3.0 ) === kumaraswamy( 2.0, 3.0 ) );
// returns true
```

#### kumaraswamy.NAME

The generator name.

```javascript
var str = kumaraswamy.NAME;
// returns 'kumaraswamy'
```

#### kumaraswamy.PRNG

The underlying pseudorandom number generator.

```javascript
var prng = kumaraswamy.PRNG;
// returns <Function>
```

#### kumaraswamy.seed

The value used to seed `kumaraswamy()`.

```javascript
var rand;
var r;
var i;

// Generate pseudorandom values...
for ( i = 0; i < 100; i++ ) {
    r = kumaraswamy( 2.0, 2.0 );
}

// Generate the same pseudorandom values...
rand = kumaraswamy.factory( 2.0, 2.0, {
    'seed': kumaraswamy.seed
});
for ( i = 0; i < 100; i++ ) {
    r = rand();
}
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = kumaraswamy.factory({
    'prng': Math.random
});

var seed = rand.seed;
// returns null
```

#### kumaraswamy.seedLength

Length of generator seed.

```javascript
var len = kumaraswamy.seedLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = kumaraswamy.factory({
    'prng': Math.random
});

var len = rand.seedLength;
// returns null
```

#### kumaraswamy.state

Writable property for getting and setting the generator state.

```javascript
var r = kumaraswamy( 2.0, 5.0 );
// returns <number>

r = kumaraswamy( 2.0, 5.0 );
// returns <number>

// ...

// Get a copy of the current state:
var state = kumaraswamy.state;
// returns <Uint32Array>

r = kumaraswamy( 2.0, 5.0 );
// returns <number>

r = kumaraswamy( 2.0, 5.0 );
// returns <number>

// Reset the state:
kumaraswamy.state = state;

// Replay the last two pseudorandom numbers:
r = kumaraswamy( 2.0, 5.0 );
// returns <number>

r = kumaraswamy( 2.0, 5.0 );
// returns <number>

// ...
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = kumaraswamy.factory({
    'prng': Math.random
});

var state = rand.state;
// returns null
```

#### kumaraswamy.stateLength

Length of generator state.

```javascript
var len = kumaraswamy.stateLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = kumaraswamy.factory({
    'prng': Math.random
});

var len = rand.stateLength;
// returns null
```

#### kumaraswamy.byteLength

Size (in bytes) of generator state.

```javascript
var sz = kumaraswamy.byteLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = kumaraswamy.factory({
    'prng': Math.random
});

var sz = rand.byteLength;
// returns null
```

#### kumaraswamy.toJSON()

Serializes the pseudorandom number generator as a JSON object.

```javascript
var o = kumaraswamy.toJSON();
// returns { 'type': 'PRNG', 'name': '...', 'state': {...}, 'params': [] }
```

If provided a PRNG for uniformly distributed numbers, this method returns `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = kumaraswamy.factory({
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
var kumaraswamy = require( '@stdlib/random/base/kumaraswamy' );

var seed;
var rand;
var i;

// Generate pseudorandom numbers...
for ( i = 0; i < 100; i++ ) {
    console.log( kumaraswamy( 2.0, 2.0 ) );
}

// Create a new pseudorandom number generator...
seed = 1234;
rand = kumaraswamy.factory( 6.0, 2.0, {
    'seed': seed
});
for ( i = 0; i < 100; i++ ) {
    console.log( rand() );
}

// Create another pseudorandom number generator using a previous seed...
rand = kumaraswamy.factory( 2.0, 2.0, {
    'seed': kumaraswamy.seed
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

-   <span class="package-name">[`@stdlib/random/array/kumaraswamy`][@stdlib/random/array/kumaraswamy]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from Kumaraswamy's double bounded distribution.</span>
-   <span class="package-name">[`@stdlib/random/iter/kumaraswamy`][@stdlib/random/iter/kumaraswamy]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a Kumaraswamy's double bounded distribution.</span>
-   <span class="package-name">[`@stdlib/random/streams/kumaraswamy`][@stdlib/random/streams/kumaraswamy]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a Kumaraswamy's double bounded distribution.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[kumaraswamy]: https://en.wikipedia.org/wiki/Kumaraswamy_distribution

[@stdlib/array/uint32]: https://github.com/stdlib-js/array-uint32

<!-- <related-links> -->

[@stdlib/random/array/kumaraswamy]: https://github.com/stdlib-js/random/tree/main/array/kumaraswamy

[@stdlib/random/iter/kumaraswamy]: https://github.com/stdlib-js/random/tree/main/iter/kumaraswamy

[@stdlib/random/streams/kumaraswamy]: https://github.com/stdlib-js/random/tree/main/streams/kumaraswamy

<!-- </related-links> -->

</section>

<!-- /.links -->
