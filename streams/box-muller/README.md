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

> Create a [readable stream][readable-stream] for generating pseudorandom numbers drawn from a [standard normal][normal] distribution using the [Box-Muller transform][@stdlib/random/base/box-muller].

<section class="usage">

## Usage

```javascript
var randomStream = require( '@stdlib/random/streams/box-muller' );
```

<a name="random-stream"></a>

#### randomStream( \[options] )

Returns a [readable stream][readable-stream] for generating pseudorandom numbers drawn from a [standard normal][normal] distribution using the [Box-Muller transform][@stdlib/random/base/box-muller].

```javascript
var inspectStream = require( '@stdlib/streams/node/inspect-sink' );

var iStream;
var stream;

function log( chunk, idx ) {
    console.log( chunk.toString() );
    if ( idx === 10 ) {
        stream.destroy();
    }
}

stream = randomStream();
iStream = inspectStream( log );

stream.pipe( iStream );
```

The function accepts the following `options`:

-   **objectMode**: specifies whether a [stream][stream] should operate in [objectMode][object-mode]. Default: `false`.
-   **encoding**: specifies how `Buffer` objects should be decoded to `strings`. Default: `null`.
-   **highWaterMark**: specifies the maximum number of bytes to store in an internal buffer before ceasing to generate additional pseudorandom numbers.
-   **sep**: separator used to join streamed data. This option is only applicable when a stream is **not** in [objectMode][object-mode]. Default: `'\n'`.
-   **iter**: number of iterations.
-   **prng**: pseudorandom number generator for generating uniformly distributed pseudorandom numbers on the interval `[0,1)`. If provided, the function **ignores** both the `state` and `seed` options. In order to seed the returned pseudorandom number generator stream, one must seed the provided `prng` (assuming the provided `prng` is seedable).
-   **seed**: pseudorandom number generator seed.
-   **state**: a [`Uint32Array`][@stdlib/array/uint32] containing pseudorandom number generator state. If provided, the function ignores the `seed` option.
-   **copy**: `boolean` indicating whether to copy a provided pseudorandom number generator state. Setting this option to `false` allows sharing state between two or more pseudorandom number generators and/or streams. Setting this option to `true` ensures that a stream generator has exclusive control over its internal state. Default: `true`.
-   **siter**: number of iterations after which to emit the pseudorandom number generator state. This option is useful when wanting to deterministically capture a stream's underlying PRNG state. Default: `1e308`.

To set [stream][stream] `options`,

```javascript
var opts = {
    'objectMode': true,
    'encoding': 'utf8',
    'highWaterMark': 64
};

var stream = randomStream( opts );
```

By default, the function returns a [stream][stream] which can generate an infinite number of values (i.e., the [stream][stream] will **never** end). To limit the number of generated pseudorandom numbers, set the `iter` option.

```javascript
var inspectStream = require( '@stdlib/streams/node/inspect-sink' );

function log( chunk ) {
    console.log( chunk.toString() );
}

var opts = {
    'iter': 10
};

var stream = randomStream( opts );
var iStream = inspectStream( log );

stream.pipe( iStream );
```

By default, when not operating in [objectMode][object-mode], a returned [stream][stream] delineates generated pseudorandom numbers using a newline character. To specify an alternative separator, set the `sep` option.

```javascript
var inspectStream = require( '@stdlib/streams/node/inspect-sink' );

function log( chunk ) {
    console.log( chunk.toString() );
}

var opts = {
    'iter': 10,
    'sep': ','
};

var stream = randomStream( opts );
var iStream = inspectStream( log );

stream.pipe( iStream );
```

To seed the underlying pseudorandom number generator, set the `seed` option.

```javascript
var inspectStream = require( '@stdlib/streams/node/inspect-sink' );

function log( v ) {
    console.log( v );
}

var opts = {
    'objectMode': true,
    'iter': 10,
    'seed': 1234
};

var stream = randomStream( opts );

opts = {
    'objectMode': true
};
var iStream = inspectStream( opts, log );

stream.pipe( iStream );
```

To return a [readable stream][readable-stream] with an underlying pseudorandom number generator having a specific initial state, set the `state` option.

```javascript
var inspectStream = require( '@stdlib/streams/node/inspect-sink' );

function log( v ) {
    console.log( v );
}

var opts1 = {
    'objectMode': true,
    'iter': 10
};

var stream = randomStream( opts1 );

var opts2 = {
    'objectMode': true
};
var iStream = inspectStream( opts2, log );

// Stream pseudorandom numbers, thus progressing the underlying generator state:
stream.pipe( iStream );

// Create a new PRNG stream initialized to the last state of the previous stream:
var opts3 = {
    'objectMode': true,
    'iter': 10,
    'state': stream.state
};

stream = randomStream( opts3 );
iStream = inspectStream( opts2, log );

// Stream pseudorandom numbers starting from the last state of the previous stream:
stream.pipe( iStream );
```

##### stream.PRNG

The underlying pseudorandom number generator.

```javascript
var stream = randomStream();

var prng = stream.PRNG;
// returns <Function>
```

##### stream.seed

The value used to seed the underlying pseudorandom number generator.

```javascript
var stream = randomStream();

var seed = stream.seed;
// returns <Uint32Array>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

```javascript
var minstd = require( '@stdlib/random/base/minstd-shuffle' ).normalized;

var stream = randomStream({
    'prng': minstd
});

var seed = stream.seed;
// returns null
```

##### stream.seedLength

Length of underlying pseudorandom number generator seed.

```javascript
var stream = randomStream();

var len = stream.seedLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

```javascript
var minstd = require( '@stdlib/random/base/minstd-shuffle' ).normalized;

var stream = randomStream({
    'prng': minstd
});

var len = stream.seedLength;
// returns null
```

##### stream.state

Writable property for getting and setting the underlying pseudorandom number generator state.

```javascript
var stream = randomStream();

var state = stream.state;
// returns <Uint32Array>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

```javascript
var minstd = require( '@stdlib/random/base/minstd-shuffle' ).normalized;

var stream = randomStream({
    'prng': minstd
});

var state = stream.state;
// returns null
```

##### stream.stateLength

Length of underlying pseudorandom number generator state.

```javascript
var stream = randomStream();

var len = stream.stateLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

```javascript
var minstd = require( '@stdlib/random/base/minstd-shuffle' ).normalized;

var stream = randomStream({
    'prng': minstd
});

var len = stream.stateLength;
// returns null
```

##### stream.byteLength

Size (in bytes) of underlying pseudorandom number generator state.

```javascript
var stream = randomStream();

var sz = stream.byteLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

```javascript
var minstd = require( '@stdlib/random/base/minstd-shuffle' ).normalized;

var stream = randomStream({
    'prng': minstd
});

var sz = stream.byteLength;
// returns null
```

* * *

#### randomStream.factory( \[options] )

Returns a `function` for creating [readable streams][readable-stream] which generate pseudorandom numbers drawn from a [standard normal][normal] distribution using the [Box-Muller transform][@stdlib/random/base/box-muller].

```javascript
var opts = {
    'objectMode': true,
    'encoding': 'utf8',
    'highWaterMark': 64
};

var createStream = randomStream.factory( opts );
```

The method accepts the same `options` as [`randomStream()`](#random-stream).

* * *

#### randomStream.objectMode( \[options] )

This method is a convenience function to create [streams][stream] which **always** operate in [objectMode][object-mode].

```javascript
var inspectStream = require( '@stdlib/streams/node/inspect-sink' );

function log( v ) {
    console.log( v );
}

var opts = {
    'iter': 10
};
var stream = randomStream.objectMode( opts );

opts = {
    'objectMode': true
};
var iStream = inspectStream( opts, log );

stream.pipe( iStream );
```

This method accepts the same `options` as [`randomStream()`](#random-stream); however, the method will **always** override the [`objectMode`][object-mode] option in `options`.

* * *

### Events

In addition to the standard [readable stream][readable-stream] events, the following events are supported...

#### 'state'

Emitted after internally generating `siter` pseudorandom numbers.

```javascript
var opts = {
    'siter': 10 // emit the PRNG state every 10 pseudorandom numbers
};

var stream = randomStream( opts );

stream.on( 'state', onState );

function onState( state ) {
    // Do something with the emitted state, such as save to file...
}
```

</section>

<!-- /.usage -->

* * *

<section class="notes">

## Notes

-   If PRNG state is "shared" (meaning a state array was provided during stream creation and **not** copied) and one sets the generator state to a state array having a different length, the underlying PRNG does **not** update the existing shared state and, instead, points to the newly provided state array. In order to synchronize PRNG output according to the new shared state array, the state array for **each** relevant PRNG must be **explicitly** set.
-   If PRNG state is "shared" and one sets the generator state to a state array of the same length, the PRNG state is updated (along with the state of all other PRNGs sharing the PRNG's state array).
-   In order to capture the PRNG state after a specific number of generated pseudorandom numbers, regardless of internal stream buffering, use the `siter` option in conjunction with a `state` event listener. Attempting to capture the underlying PRNG state after **reading** generated numbers is **not** likely to give expected results, as internal stream buffering will mean more values have been generated than have been read. Thus, the state returned by the `state` property will likely reflect a future PRNG state from the perspective of downstream consumers.

</section>

<!-- /.notes -->

* * *

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var inspectStream = require( '@stdlib/streams/node/inspect-sink' );
var randomStream = require( '@stdlib/random/streams/box-muller' );

function log( v ) {
    console.log( v.toString() );
}

var opts = {
    'objectMode': true,
    'iter': 10
};

var stream = randomStream( opts );

opts = {
    'objectMode': true
};
var iStream = inspectStream( opts, log );

stream.pipe( iStream );
```

</section>

<!-- /.examples -->

<!-- Section for describing a command-line interface. -->

* * *

<section class="cli">

## CLI

<!-- CLI usage documentation. -->

<section class="usage">

### Usage

```text
Usage: random-box-muller [options]

Options:

  -h,  --help               Print this message.
  -V,  --version            Print the package version.
       --sep sep            Separator used to join streamed data. Default: '\n'.
  -n,  --iter iterations    Number of pseudorandom numbers.
       --seed seed          Pseudorandom number generator seed.
       --state filepath     Path to a file containing the pseudorandom number
                            generator state.
       --snapshot filepath  Output file path for saving the pseudorandom number
                            generator state upon exit.
```

</section>

<!-- /.usage -->

<!-- CLI usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

### Notes

-   In accordance with POSIX convention, a trailing newline is **always** appended to generated output prior to exit.
-   Specifying a "snapshot" file path is useful when wanting to resume pseudorandom number generation due to, e.g., a downstream failure in an analysis pipeline. Before exiting, the process will store the pseudorandom number generator state in a file specified according to a provided file path. Upon loading a snapshot (state), the process will generate pseudorandom numbers starting from the loaded state, thus avoiding having to seed and replay an entire analysis.

</section>

<!-- /.notes -->

<!-- CLI usage examples. -->

<section class="examples">

### Examples

```bash
$ random-box-muller -n 10 --seed 1234
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

* * *

<section class="references">

## References

-   Box, G. E. P., and Mervin E. Muller. 1958. "A Note on the Generation of Random Normal Deviates." _The Annals of Mathematical Statistics_ 29 (2). The Institute of Mathematical Statistics: 610–11. doi:[10.1214/aoms/1177706645][@box:1958].
-   Bell, James R. 1968. "Algorithm 334: Normal Random Deviates." _Communications of the ACM_ 11 (7). New York, NY, USA: ACM: 498. doi:[10.1145/363397.363547][@bell:1968].
-   Knop, R. 1969. "Remark on Algorithm 334 \[G5]: Normal Random Deviates." _Communications of the ACM_ 12 (5). New York, NY, USA: ACM: 281. doi:[10.1145/362946.362996][@knop:1969].
-   Marsaglia, G., and T. A. Bray. 1964. "A Convenient Method for Generating Normal Variables." _SIAM Review_ 6 (3). Society for Industrial; Applied Mathematics: 260–64. doi:[10.1137/1006063][@marsaglia:1964a].
-   Thomas, David B., Wayne Luk, Philip H.W. Leong, and John D. Villasenor. 2007. "Gaussian Random Number Generators." _ACM Computing Surveys_ 39 (4). New York, NY, USA: ACM. doi:[10.1145/1287620.1287622][@thomas:2007].

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/random/base/box-muller`][@stdlib/random/base/box-muller]</span><span class="delimiter">: </span><span class="description">normally distributed pseudorandom numbers using the Box-Muller transform.</span>
-   <span class="package-name">[`@stdlib/random/iter/box-muller`][@stdlib/random/iter/box-muller]</span><span class="delimiter">: </span><span class="description">create an iterator for generating pseudorandom numbers drawn from a standard normal distribution using the Box-Muller transform.</span>
-   <span class="package-name">[`@stdlib/random/streams/improved-ziggurat`][@stdlib/random/streams/improved-ziggurat]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a standard normal distribution using the Improved Ziggurat algorithm.</span>
-   <span class="package-name">[`@stdlib/random/streams/randn`][@stdlib/random/streams/randn]</span><span class="delimiter">: </span><span class="description">create a readable stream for generating pseudorandom numbers drawn from a standard normal distribution.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[stream]: https://nodejs.org/api/stream.html

[object-mode]: https://nodejs.org/api/stream.html#stream_object_mode

[readable-stream]: https://nodejs.org/api/stream.html

[normal]: https://en.wikipedia.org/wiki/Normal_distribution

[@stdlib/array/uint32]: https://github.com/stdlib-js/array-uint32

[@box:1958]: http://dx.doi.org/10.1214/aoms/1177706645

[@bell:1968]: http://dx.doi.org/10.1145/363397.363547

[@knop:1969]: http://dx.doi.org/10.1145/362946.362996

[@marsaglia:1964a]: http://dx.doi.org/10.1137/1006063

[@thomas:2007]: http://dx.doi.org/10.1145/1287620.128762

<!-- <related-links> -->

[@stdlib/random/base/box-muller]: https://github.com/stdlib-js/random/tree/main/base/box-muller

[@stdlib/random/iter/box-muller]: https://github.com/stdlib-js/random/tree/main/iter/box-muller

[@stdlib/random/streams/improved-ziggurat]: https://github.com/stdlib-js/random/tree/main/streams/improved-ziggurat

[@stdlib/random/streams/randn]: https://github.com/stdlib-js/random/tree/main/streams/randn

<!-- </related-links> -->

</section>

<!-- /.links -->
