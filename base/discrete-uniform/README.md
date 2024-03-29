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

# Discrete Uniform Random Numbers

> [Discrete uniform][discrete-uniform-distribution] distributed pseudorandom numbers.

<section class="usage">

## Usage

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
```

#### discreteUniform( a, b )

Returns a pseudorandom number drawn from a [discrete uniform][discrete-uniform-distribution] distribution with parameters `a` (minimum support) and `b` (maximum support).

```javascript
var r = discreteUniform( 2, 50 );
// returns <number>
```

If either `a` or `b` is not an integer value or `a > b`, the function returns `NaN`.

```javascript
var r = discreteUniform( 20, 10 );
// returns NaN

r = discreteUniform( NaN, 10 );
// returns NaN

r = discreteUniform( 10, NaN );
// returns NaN
```

#### discreteUniform.factory( \[a, b, ]\[options] )

Returns a pseudorandom number generator (PRNG) for generating pseudorandom numbers drawn from a [discrete uniform][discrete-uniform-distribution] distribution.

```javascript
var rand = discreteUniform.factory();

var r = rand( 0, 10 );
// returns <number>
```

If provided `a` and `b`, the returned generator returns random variates from the specified distribution.

```javascript
// Draw from discreteUniform( -20, 20 ) distribution:
var rand = discreteUniform.factory( -20, 20 );

var r = rand();
// returns <number>

r = rand();
// returns <number>
```

If not provided `a` and `b`, the returned generator requires that both parameters be provided at each invocation.

```javascript
var rand = discreteUniform.factory();

var r = rand( 0, 10 );
// returns <number>

r = rand( -20, 20 );
// returns <number>
```

The function accepts the following `options`:

-   **prng**: pseudorandom number generator for generating uniformly distributed pseudorandom integers. If provided, the function **ignores** both the `state` and `seed` options. In order to seed the returned pseudorandom number generator, one must seed the provided `prng` (assuming the provided `prng` is seedable). The provided PRNG **must** have `MIN` and `MAX` properties specifying the minimum and maximum possible pseudorandom integers.
-   **seed**: pseudorandom number generator seed.
-   **state**: a [`Uint32Array`][@stdlib/array/uint32] containing pseudorandom number generator state. If provided, the function ignores the `seed` option.
-   **copy**: `boolean` indicating whether to copy a provided pseudorandom number generator state. Setting this option to `false` allows sharing state between two or more pseudorandom number generators. Setting this option to `true` ensures that a returned generator has exclusive control over its internal state. Default: `true`.

To use a custom PRNG as the underlying source of uniformly distributed pseudorandom integers, set the `prng` option.

```javascript
var minstd = require( '@stdlib/random/base/minstd' );

var rand = discreteUniform.factory({
    'prng': minstd
});

var r = rand( 20, 40 );
// returns <number>
```

To seed a pseudorandom number generator, set the `seed` option.

```javascript
var rand1 = discreteUniform.factory({
    'seed': 12345
});

var r1 = rand1( 20, 40 );
// returns <number>

var rand2 = discreteUniform.factory( 20, 40, {
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
    r = discreteUniform( 20, 40 );
}

// Create a new PRNG initialized to the current state of `discreteUniform`:
rand = discreteUniform.factory({
    'state': discreteUniform.state
});

// Test that the generated pseudorandom numbers are the same:
bool = ( rand( 20, 40 ) === discreteUniform( 20, 40 ) );
// returns true
```

#### discreteUniform.NAME

The generator name.

```javascript
var str = discreteUniform.NAME;
// returns 'discrete-uniform'
```

#### discreteUniform.PRNG

The underlying pseudorandom number generator.

```javascript
var prng = discreteUniform.PRNG;
// returns <Function>
```

#### discreteUniform.seed

The value used to seed `discreteUniform()`.

```javascript
var rand;
var r;
var i;

// Generate pseudorandom values...
for ( i = 0; i < 100; i++ ) {
    r = discreteUniform( 0, 10 );
}

// Generate the same pseudorandom values...
rand = discreteUniform.factory( 0, 10, {
    'seed': discreteUniform.seed
});
for ( i = 0; i < 100; i++ ) {
    r = rand();
}
```

If provided a PRNG for uniformly distributed integers, this value is `null`.

```javascript
var minstd = require( '@stdlib/random/base/minstd' );

var rand = discreteUniform.factory({
    'prng': minstd
});

var seed = rand.seed;
// returns null
```

#### discreteUniform.seedLength

Length of generator seed.

```javascript
var len = discreteUniform.seedLength;
// returns <number>
```

If provided a PRNG for uniformly distributed integers, this value is `null`.

```javascript
var minstd = require( '@stdlib/random/base/minstd' );

var rand = discreteUniform.factory({
    'prng': minstd
});

var len = rand.seedLength;
// returns null
```

#### discreteUniform.state

Writable property for getting and setting the generator state.

```javascript
var r = discreteUniform( -10, 10 );
// returns <number>

r = discreteUniform( -10, 10 );
// returns <number>

// ...

// Get a copy of the current state:
var state = discreteUniform.state;
// returns <Uint32Array>

r = discreteUniform( -10, 10 );
// returns <number>

r = discreteUniform( -10, 10 );
// returns <number>

// Reset the state:
discreteUniform.state = state;

// Replay the last two pseudorandom numbers:
r = discreteUniform( -10, 10 );
// returns <number>

r = discreteUniform( -10, 10 );
// returns <number>

// ...
```

If provided a PRNG for uniformly distributed integers, this value is `null`.

```javascript
var minstd = require( '@stdlib/random/base/minstd' );

var rand = discreteUniform.factory({
    'prng': minstd
});

var state = rand.state;
// returns null
```

#### discreteUniform.stateLength

Length of generator state.

```javascript
var len = discreteUniform.stateLength;
// returns <number>
```

If provided a PRNG for uniformly distributed integers, this value is `null`.

```javascript
var minstd = require( '@stdlib/random/base/minstd' );

var rand = discreteUniform.factory({
    'prng': minstd
});

var len = rand.stateLength;
// returns null
```

#### discreteUniform.byteLength

Size (in bytes) of generator state.

```javascript
var sz = discreteUniform.byteLength;
// returns <number>
```

If provided a PRNG for uniformly distributed integers, this value is `null`.

```javascript
var minstd = require( '@stdlib/random/base/minstd' );

var rand = discreteUniform.factory({
    'prng': minstd
});

var sz = rand.byteLength;
// returns null
```

#### discreteUniform.toJSON()

Serializes the pseudorandom number generator as a JSON object.

```javascript
var o = discreteUniform.toJSON();
// returns { 'type': 'PRNG', 'name': '...', 'state': {...}, 'params': [] }
```

If provided a PRNG for uniformly distributed numbers, this method returns `null`.

```javascript
var minstd = require( '@stdlib/random/base/minstd' );

var rand = discreteUniform.factory({
    'prng': minstd
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
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );

var seed;
var rand;
var i;

// Generate pseudorandom numbers...
for ( i = 0; i < 100; i++ ) {
    console.log( discreteUniform( 0, 100 ) );
}

// Create a new pseudorandom number generator...
seed = 1234;
rand = discreteUniform.factory( -20, 20, {
    'seed': seed
});
for ( i = 0; i < 100; i++ ) {
    console.log( rand() );
}

// Create another pseudorandom number generator using a previous seed...
rand = discreteUniform.factory( -20, 20, {
    'seed': discreteUniform.seed
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

-   <span class="package-name">[`@stdlib/random/array/discrete-uniform`][@stdlib/random/array/discrete-uniform]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a discrete uniform distribution.</span>
-   <span class="package-name">[`@stdlib/random/iter/discrete-uniform`][@stdlib/random/iter/discrete-uniform]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a discrete uniform distribution.</span>
-   <span class="package-name">[`@stdlib/random/streams/discrete-uniform`][@stdlib/random/streams/discrete-uniform]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a discrete uniform distribution.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[discrete-uniform-distribution]: https://en.wikipedia.org/wiki/Discrete_uniform_distribution

[@stdlib/array/uint32]: https://github.com/stdlib-js/array-uint32

<!-- <related-links> -->

[@stdlib/random/array/discrete-uniform]: https://github.com/stdlib-js/random/tree/main/array/discrete-uniform

[@stdlib/random/iter/discrete-uniform]: https://github.com/stdlib-js/random/tree/main/iter/discrete-uniform

[@stdlib/random/streams/discrete-uniform]: https://github.com/stdlib-js/random/tree/main/streams/discrete-uniform

<!-- </related-links> -->

</section>

<!-- /.links -->
