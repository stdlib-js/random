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

# Hypergeometric Random Numbers

> [Hypergeometric][hypergeometric] distributed pseudorandom numbers.

<section class="usage">

## Usage

```javascript
var hypergeometric = require( '@stdlib/random/base/hypergeometric' );
```

#### hypergeometric( N, K, n )

Returns a pseudorandom number drawn from a [hypergeometric][hypergeometric] distribution with parameters `N` (population size), `K` (subpopulation size), and `n` (number of draws).

```javascript
var r = hypergeometric( 20, 10, 7 );
// returns <number>
```

`N`, `K`, and `n` must all be nonnegative integers; otherwise, the function returns `NaN`. 

```javascript
var r = hypergeometric( 10.5, 10, 10 );
// returns NaN

r = hypergeometric( 10, 4.4, 2 );
// returns NaN

r = hypergeometric( 10, 5, -1 );
// returns NaN

r = hypergeometric( NaN, NaN, NaN );
// returns NaN
```

If `n > N` or `K > N`, the function returns `NaN`.

```javascript
var r = hypergeometric( 7, 5, 12 );
// returns NaN
```

#### hypergeometric.factory( \[N, K, n, ]\[options] )

Returns a pseudorandom number generator (PRNG) for generating pseudorandom numbers drawn from a [hypergeometric][hypergeometric] distribution.

```javascript
var rand = hypergeometric.factory();

var r = rand( 20, 10, 15 );
// returns <number>
```

If provided `N`, `K`, and `n`, the returned generator returns random variates from the specified distribution.

```javascript
var rand = hypergeometric.factory( 20, 10, 15 );

var r = rand();
// returns <number>

r = rand();
// returns <number>
```

If not provided `N`, `K`, and `n`, the returned generator requires that all three parameters be specified at each invocation.

```javascript
var rand = hypergeometric.factory();

var r = rand( 10, 7, 3 );
// returns <number>

r = rand( 104, 48, 21 );
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

var rand = hypergeometric.factory({
    'prng': minstd.normalized
});

var r = rand( 10, 8, 5 );
// returns <number>
```

To seed a pseudorandom number generator, set the `seed` option.

```javascript
var rand1 = hypergeometric.factory({
    'seed': 12345
});

var r1 = rand1( 10, 8, 5 );
// returns <number>

var rand2 = hypergeometric.factory( 10, 8, 5, {
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
    r = hypergeometric( 10, 8, 5 );
}

// Create a new PRNG initialized to the current state of `hypergeometric`:
rand = hypergeometric.factory({
    'state': hypergeometric.state
});

// Test that the generated pseudorandom numbers are the same:
bool = ( rand( 10, 8, 5 ) === hypergeometric( 10, 8, 5 ) );
// returns true
```

#### hypergeometric.NAME

The generator name.

```javascript
var str = hypergeometric.NAME;
// returns 'hypergeometric'
```

#### hypergeometric.PRNG

The underlying pseudorandom number generator.

```javascript
var prng = hypergeometric.PRNG;
// returns <Function>
```

#### hypergeometric.seed

The value used to seed `hypergeometric()`.

```javascript
var rand;
var r;
var i;

// Generate pseudorandom values...
for ( i = 0; i < 100; i++ ) {
    r = hypergeometric( 20, 10, 15 );
}

// Generate the same pseudorandom values...
rand = hypergeometric.factory( 20, 10, 15, {
    'seed': hypergeometric.seed
});
for ( i = 0; i < 100; i++ ) {
    r = rand();
}
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = hypergeometric.factory({
    'prng': Math.random
});

var seed = rand.seed;
// returns null
```

#### hypergeometric.seedLength

Length of generator seed.

```javascript
var len = hypergeometric.seedLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = hypergeometric.factory({
    'prng': Math.random
});

var len = rand.seedLength;
// returns null
```

#### hypergeometric.state

Writable property for getting and setting the generator state.

```javascript
var r = hypergeometric( 10, 8, 5 );
// returns <number>

r = hypergeometric( 10, 8, 5 );
// returns <number>

// ...

// Get a copy of the current state:
var state = hypergeometric.state;
// returns <Uint32Array>

r = hypergeometric( 10, 8, 5 );
// returns <number>

r = hypergeometric( 10, 8, 5 );
// returns <number>

// Reset the state:
hypergeometric.state = state;

// Replay the last two pseudorandom numbers:
r = hypergeometric( 10, 8, 5 );
// returns <number>

r = hypergeometric( 10, 8, 5 );
// returns <number>

// ...
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = hypergeometric.factory({
    'prng': Math.random
});

var state = rand.state;
// returns null
```

#### hypergeometric.stateLength

Length of generator state.

```javascript
var len = hypergeometric.stateLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = hypergeometric.factory({
    'prng': Math.random
});

var len = rand.stateLength;
// returns null
```

#### hypergeometric.byteLength

Size (in bytes) of generator state.

```javascript
var sz = hypergeometric.byteLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = hypergeometric.factory({
    'prng': Math.random
});

var sz = rand.byteLength;
// returns null
```

#### hypergeometric.toJSON()

Serializes the pseudorandom number generator as a JSON object.

```javascript
var o = hypergeometric.toJSON();
// returns { 'type': 'PRNG', 'name': '...', 'state': {...}, 'params': [] }
```

If provided a PRNG for uniformly distributed numbers, this method returns `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = hypergeometric.factory({
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
var hypergeometric = require( '@stdlib/random/base/hypergeometric' );

var seed;
var rand;
var i;

// Generate pseudorandom numbers...
for ( i = 0; i < 100; i++ ) {
    console.log( hypergeometric( 10, 10, 10 ) );
}

// Create a new pseudorandom number generator...
seed = 1234;
rand = hypergeometric.factory( 5, 3, 2, {
    'seed': seed
});
for ( i = 0; i < 100; i++ ) {
    console.log( rand() );
}

// Create another pseudorandom number generator using a previous seed...
rand = hypergeometric.factory( 10, 10, 10, {
    'seed': hypergeometric.seed
});
for ( i = 0; i < 100; i++ ) {
    console.log( rand() );
}
```

</section>

<!-- /.examples -->

* * *

<section class="references">

## References

-   Kachitvichyanukul, Voratas., and Burce Schmeiser. 1985. "Computer generation of hypergeometric random variates." _Journal of Statistical Computation and Simulation_ 22 (2): 127–45. doi:[10.1080/00949658508810839][@kachitvichyanukul:1985].

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/random/array/hypergeometric`][@stdlib/random/array/hypergeometric]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a hypergeometric distribution.</span>
-   <span class="package-name">[`@stdlib/random/iter/hypergeometric`][@stdlib/random/iter/hypergeometric]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a hypergeometric distribution.</span>
-   <span class="package-name">[`@stdlib/random/streams/hypergeometric`][@stdlib/random/streams/hypergeometric]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a hypergeometric distribution.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[hypergeometric]: https://en.wikipedia.org/wiki/Hypergeometric_distribution

[@kachitvichyanukul:1985]: http://dx.doi.org/10.1080/00949658508810839

[@stdlib/array/uint32]: https://github.com/stdlib-js/array-uint32

<!-- <related-links> -->

[@stdlib/random/array/hypergeometric]: https://github.com/stdlib-js/random/tree/main/array/hypergeometric

[@stdlib/random/iter/hypergeometric]: https://github.com/stdlib-js/random/tree/main/iter/hypergeometric

[@stdlib/random/streams/hypergeometric]: https://github.com/stdlib-js/random/tree/main/streams/hypergeometric

<!-- </related-links> -->

</section>

<!-- /.links -->
