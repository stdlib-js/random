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

# randi

> Pseudorandom numbers having integer values.

<section class="usage">

## Usage

```javascript
var randi = require( '@stdlib/random/base/randi' );
```

#### randi()

Returns a pseudorandom number having an integer value.

```javascript
var v = randi();
// returns <number>
```

#### randi.factory( \[options] )

Returns a pseudorandom number generator (PRNG) for generating random numbers.

```javascript
var rand = randi.factory();
```

The function accepts the following `options`:

-   **name**: name of a supported pseudorandom number generator (PRNG), which will serve as the underlying source of pseudorandom numbers. The following generators are supported:

    -   [`mt19937`][@stdlib/random/base/mt19937]: 32-bit Mersenne Twister.
    -   [`minstd`][@stdlib/random/base/minstd]: linear congruential pseudorandom number generator (LCG) based on Park and Miller.
    -   [`minstd-shuffle`][@stdlib/random/base/minstd-shuffle]: linear congruential pseudorandom number generator (LCG) whose output is shuffled.

    Default: [`'mt19937'`][@stdlib/random/base/mt19937].

-   **seed**: pseudorandom number generator seed. Valid seed values vary according to the underlying PRNG.

-   **state**: pseudorandom number generator state. Valid state values vary according to the underlying PRNG. If provided, the function ignores the `seed` option.

-   **copy**: `boolean` indicating whether to copy a provided pseudorandom number generator state. Setting this option to `false` allows sharing state between two or more pseudorandom number generators. Setting this option to `true` ensures that a returned generator has exclusive control over its internal state. Default: `true`.

By default, the underlying pseudorandom number generator is [`mt19937`][@stdlib/random/base/mt19937]. To use a different PRNG, set the `name` option.

```javascript
var rand = randi.factory({
    'name': 'minstd-shuffle'
});

var v = rand();
// returns <number>
```

To seed a pseudorandom number generator, set the `seed` option.

```javascript
var rand1 = randi.factory({
    'seed': 12345
});

var r1 = rand1();
// returns <number>

var rand2 = randi.factory({
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
    r = randi();
}

// Create a new PRNG initialized to the current state of `randi`:
rand = randi.factory({
    'state': randi.state
});

// Test that the generated pseudorandom numbers are the same:
bool = ( rand() === randi() );
// returns true
```

#### randi.NAME

The generator name.

```javascript
var str = randi.NAME;
// returns 'randi'
```

#### randi.PRNG

The underlying pseudorandom number generator.

```javascript
var prng = randi.PRNG;
// returns <Function>
```

#### randi.MIN

Minimum value lower bound (specific to underlying PRNG).

```javascript
var min = randi.MIN;
// returns <number>
```

#### randi.MAX

Maximum value upper bound (specific to underlying PRNG).

```javascript
var max = randi.MAX;
// returns <number>
```

#### randi.seed

The value used to seed `randi()`.

```javascript
var rand;
var v;
var i;

// Generate pseudorandom values...
for ( i = 0; i < 100; i++ ) {
    v = randi();
}

// Generate the same pseudorandom values...
rand = randi.factory({
    'seed': randi.seed
});
for ( i = 0; i < 100; i++ ) {
    v = rand();
}
```

#### randi.seedLength

Length of generator seed.

```javascript
var len = randi.seedLength;
// returns <number>
```

#### randi.state

Writable property for getting and setting the generator state.

```javascript
var r = randi();
// returns <number>

r = randi();
// returns <number>

// ...

// Get a copy of the current state:
var state = randi.state;

r = randi();
// returns <number>

r = randi();
// returns <number>

// Reset the state:
randi.state = state;

// Replay the last two pseudorandom numbers:
r = randi();
// returns <number>

r = randi();
// returns <number>

// ...
```

#### randi.stateLength

Length of generator state.

```javascript
var len = randi.stateLength;
// returns <number>
```

#### randi.byteLength

Size (in bytes) of generator state.

```javascript
var sz = randi.byteLength;
// returns <number>
```

#### randi.toJSON()

Serializes the pseudorandom number generator as a JSON object.

```javascript
var o = randi.toJSON();
// returns { 'type': 'PRNG', 'name': '...', 'state': {...}, 'params': [] }
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   **Warning**: the default underlying source of pseudorandom numbers may **change** in the future. If exact reproducibility is required, either explicitly specify a PRNG via the `name` option or use an underlying PRNG directly.
-   If PRNG state is "shared" (meaning a state array was provided during PRNG creation and **not** copied) and one sets the generator state to a state array having a different length, the PRNG does **not** update the existing shared state and, instead, points to the newly provided state array. In order to synchronize PRNG output according to the new shared state array, the state array for **each** relevant PRNG must be **explicitly** set.
-   If PRNG state is "shared" and one sets the generator state to a state array of the same length, the PRNG state is updated (along with the state of all other PRNGs sharing the PRNG's state array).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randi = require( '@stdlib/random/base/randi' );

var seed;
var rand;
var i;

// Generate pseudorandom numbers...
for ( i = 0; i < 100; i++ ) {
    console.log( randi() );
}

// Create a new pseudorandom number generator...
seed = 1234;
rand = randi.factory({
    'seed': seed
});
for ( i = 0; i < 100; i++ ) {
    console.log( rand() );
}

// Create another pseudorandom number generator using a previous seed...
rand = randi.factory({
    'seed': randi.seed
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

-   <span class="package-name">[`@stdlib/random/iter/randi`][@stdlib/random/iter/randi]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers having integer values.</span>
-   <span class="package-name">[`@stdlib/random/streams/randi`][@stdlib/random/streams/randi]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers having integer values.</span>
-   <span class="package-name">[`@stdlib/random/base/minstd`][@stdlib/random/base/minstd]</span><span class="delimiter">: </span><span class="description">A linear congruential pseudorandom number generator (LCG) based on Park and Miller.</span>
-   <span class="package-name">[`@stdlib/random/base/minstd-shuffle`][@stdlib/random/base/minstd-shuffle]</span><span class="delimiter">: </span><span class="description">A linear congruential pseudorandom number generator (LCG) whose output is shuffled.</span>
-   <span class="package-name">[`@stdlib/random/base/mt19937`][@stdlib/random/base/mt19937]</span><span class="delimiter">: </span><span class="description">A 32-bit Mersenne Twister pseudorandom number generator.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/random/base/mt19937]: https://github.com/stdlib-js/random/tree/main/base/mt19937

[@stdlib/random/base/minstd]: https://github.com/stdlib-js/random/tree/main/base/minstd

[@stdlib/random/base/minstd-shuffle]: https://github.com/stdlib-js/random/tree/main/base/minstd-shuffle

<!-- <related-links> -->

[@stdlib/random/iter/randi]: https://github.com/stdlib-js/random/tree/main/iter/randi

[@stdlib/random/streams/randi]: https://github.com/stdlib-js/random/tree/main/streams/randi

<!-- </related-links> -->

</section>

<!-- /.links -->
