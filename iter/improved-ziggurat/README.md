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

# Standard Normal Random Numbers

> Create an iterator for generating pseudorandom numbers drawn from a [standard normal][normal] distribution using the [Improved Ziggurat][ziggurat-algorithm] algorithm.

<section class="usage">

## Usage

```javascript
var iterator = require( '@stdlib/random/iter/improved-ziggurat' );
```

#### iterator( \[options] )

Returns an iterator for generating pseudorandom numbers drawn from a [standard normal][normal] distribution using the [Improved Ziggurat][ziggurat-algorithm] algorithm.

```javascript
var it = iterator();
// returns <Object>

var r = it.next().value;
// returns <number>

r = it.next().value;
// returns <number>

r = it.next().value;
// returns <number>

// ...
```

The function accepts the following `options`:

-   **prng**: pseudorandom number generator for generating uniformly distributed pseudorandom numbers on the interval `[0,1)`. If provided, the function **ignores** both the `state` and `seed` options. In order to seed the returned iterator, one must seed the provided `prng` (assuming the provided `prng` is seedable).
-   **seed**: pseudorandom number generator seed.
-   **state**: a [`Uint32Array`][@stdlib/array/uint32] containing pseudorandom number generator state. If provided, the function ignores the `seed` option.
-   **copy**: `boolean` indicating whether to copy a provided pseudorandom number generator state. Setting this option to `false` allows sharing state between two or more pseudorandom number generators. Setting this option to `true` ensures that a returned iterator has exclusive control over its internal pseudorandom number generator state. Default: `true`.
-   **iter**: number of iterations.

To use a custom PRNG as the underlying source of uniformly distributed pseudorandom numbers, set the `prng` option.

```javascript
var minstd = require( '@stdlib/random/base/minstd' );

var it = iterator({
    'prng': minstd.normalized
});

var r = it.next().value;
// returns <number>
```

To return an iterator having a specific initial state, set the iterator `state` option.

```javascript
var bool;
var it1;
var it2;
var r;
var i;

it1 = iterator();

// Generate pseudorandom numbers, thus progressing the generator state:
for ( i = 0; i < 1000; i++ ) {
    r = it1.next().value;
}

// Create a new iterator initialized to the current state of `it1`:
it2 = iterator({
    'state': it1.state
});

// Test that the generated pseudorandom numbers are the same:
bool = ( it1.next().value === it2.next().value );
// returns true
```

To seed the iterator, set the `seed` option.

```javascript
var it = iterator({
    'seed': 12345
});

var r = it.next().value;
// returns ~1.789

it = iterator({
    'seed': 12345
});

r = it.next().value;
// returns ~1.789
```

To limit the number of iterations, set the `iter` option.

```javascript
var it = iterator({
    'iter': 2
});

var r = it.next().value;
// returns <number>

r = it.next().value;
// returns <number>

r = it.next().done;
// returns true
```

The returned iterator protocol-compliant object has the following properties:

-   **next**: function which returns an iterator protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the iterator is finished.
-   **return**: function which closes an iterator and returns a single (optional) argument in an iterator protocol-compliant object.
-   **seed**: pseudorandom number generator seed. If provided a `prng` option, the property value is `null`.
-   **seedLength**: length of generator seed. If provided a `prng` option, the property value is `null`.
-   **state**: writable property for getting and setting the generator state. If provided a `prng` option, the property value is `null`.
-   **stateLength**: length of generator state. If provided a `prng` option, the property value is `null`.
-   **byteLength**: size (in bytes) of generator state. If provided a `prng` option, the property value is `null`.
-   **PRNG**: underlying pseudorandom number generator.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
-   If PRNG state is "shared" (meaning a state array was provided during iterator creation and **not** copied) and one sets the underlying generator state to a state array having a different length, the iterator does **not** update the existing shared state and, instead, points to the newly provided state array. In order to synchronize the output of the underlying generator according to the new shared state array, the state array for **each** relevant iterator and/or PRNG must be **explicitly** set.
-   If PRNG state is "shared" and one sets the underlying generator state to a state array of the same length, the PRNG state is updated (along with the state of all other iterator and/or PRNGs sharing the PRNG's state array).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var iterator = require( '@stdlib/random/iter/improved-ziggurat' );

var it;
var r;

// Create a seeded iterator for generating pseudorandom numbers:
it = iterator({
    'seed': 1234,
    'iter': 10
});

// Perform manual iteration...
while ( true ) {
    r = it.next();
    if ( r.done ) {
        break;
    }
    console.log( r.value );
}
```

</section>

<!-- /.examples -->

* * *

<section class="references">

## References

-   Doornik, Jurgen A. 2005. "An Improved Ziggurat Method to Generate Normal Random Samples." [&lt;https://www.doornik.com/research/ziggurat.pdf>][@doornik:2005].
-   Marsaglia, George, and Wai Wan Tsang. 2000. "The Ziggurat Method for Generating Random Variables." _Journal of Statistical Software_ 5 (1): 1–7. doi:[10.18637/jss.v005.i08][@marsaglia:2000b].
-   Marsaglia, George. 1964. "Generating a Variable from the Tail of the Normal Distribution." _Technometrics_ 6 (1): 101–2. doi:[10.1080/00401706.1964.10490150][@marsaglia:1964b].

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/random/base/improved-ziggurat`][@stdlib/random/base/improved-ziggurat]</span><span class="delimiter">: </span><span class="description">normally distributed pseudorandom numbers using the improved Ziggurat method.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[ziggurat-algorithm]: https://en.wikipedia.org/wiki/Ziggurat_algorithm

[normal]: https://en.wikipedia.org/wiki/Normal_distribution

[@doornik:2005]: https://www.doornik.com/research/ziggurat.pdf

[@marsaglia:2000b]: http://dx.doi.org/10.18637/jss.v005.i08

[@marsaglia:1964b]: https://doi.org/10.1080/00401706.1964.10490150

[@stdlib/array/uint32]: https://github.com/stdlib-js/array-uint32

<!-- <related-links> -->

[@stdlib/random/base/improved-ziggurat]: https://github.com/stdlib-js/random/tree/main/base/improved-ziggurat

<!-- </related-links> -->

</section>

<!-- /.links -->
