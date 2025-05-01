<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

# createFactory

> Create a function for generating pseudorandom numbers drawn from a single-parameter probability distribution.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var createFactory = require( '@stdlib/random/tools/unary-factory' );
```

#### createFactory( prng, idtypes odtypes, policies\[, options] )

Returns a function for generating pseudorandom numbers drawn from a single-parameter probability distribution.

```javascript
var dtypes = require( '@stdlib/ndarray/dtypes' );
var exponential = require( '@stdlib/random/base/exponential' );

var idt = dtypes( 'real_and_generic' );
var odt = dtypes( 'real_floating_point_and_generic' );

var policies = {
    'output': 'real_floating_point_and_generic'
};
var options = {
    'order': 'row-major'
};

var factory = createFactory( exponential, idt, odt, policies, options );
```

The function has the following parameters:

-   **prng**: unary pseudorandom number generator. This function must have a `factory` method which returns a new unary pseudorandom number generator.

-   **idtypes**: list of supported input data types.

-   **odtypes**: list of supported output data types.

-   **policies**: interface policies. Must have the following properties:

    -   **output**: output data type [policy][@stdlib/ndarray/policies].

-   **options**: function options (_optional_).

The function supports the following options:

-   **order**: default memory layout [order][@stdlib/ndarray/orders].

#### factory( \[options] )

Returns a function for generating pseudorandom numbers drawn from a single-parameter probability distribution.

```javascript
var dtypes = require( '@stdlib/ndarray/dtypes' );
var exponential = require( '@stdlib/random/base/exponential' );

var idt = dtypes( 'real_and_generic' );
var odt = dtypes( 'real_floating_point_and_generic' );

var policies = {
    'output': 'real_floating_point_and_generic'
};
var options = {
    'order': 'row-major'
};

var factory = createFactory( exponential, idt, odt, policies, options );

var random = factory();
// returns <Function>
```

The function supports the following options:

-   **prng**: pseudorandom number generator for generating uniformly distributed pseudorandom numbers on the interval `[0,1)`. If provided, the function **ignores** both the `state` and `seed` options. In order to seed the underlying pseudorandom number generator, one must seed the provided `prng` (assuming the provided `prng` is seedable).
-   **seed**: pseudorandom number generator seed.
-   **state**: a [`Uint32Array`][@stdlib/array/uint32] containing pseudorandom number generator state. If provided, the function ignores the `seed` option.
-   **copy**: boolean indicating whether to copy a provided pseudorandom number generator state. Setting this option to `false` allows sharing state between two or more pseudorandom number generators. Setting this option to `true` ensures that an underlying generator has exclusive control over its internal state. Default: `true`.

#### random( shape, param1\[, options] )

Returns an ndarray filled with pseudorandom numbers drawn from a probability distribution.

```javascript
var dtypes = require( '@stdlib/ndarray/dtypes' );
var exponential = require( '@stdlib/random/base/exponential' );

var idt = dtypes( 'real_and_generic' );
var odt = dtypes( 'real_floating_point_and_generic' );

var policies = {
    'output': 'real_floating_point_and_generic'
};
var options = {
    'order': 'row-major'
};

var factory = createFactory( exponential, idt, odt, policies, options );

var random = factory();
// returns <Function>

var v = random( [ 2, 2 ], 2.0 );
// returns <ndarray>
```

The function has the following parameters:

-   **shape**: output ndarray shape.
-   **param1**: distribution parameter. May be either a scalar or an ndarray. If an ndarray, must be [broadcast compatible][@stdlib/ndarray/base/broadcast-shapes] with the specified output ndarray shape.
-   **options**: function options (_optional_).

The function accepts the following options:

-   **dtype**: output ndarray data type. Setting this option overrides the output data type policy.
-   **order**: memory layout. Setting this option overrides the default memory layout order.
-   **mode**: specifies how to handle indices which exceed ndarray dimensions.
-   **submode**: specifies how to handle subscripts which exceed ndarray dimensions on a per dimension basis.
-   **readonly**: boolean indicating whether an ndarray should be read-only.

By default, the function returns an ndarray having a data type determined by the output data type policy. To override the default behavior, set the `dtype` option.

```javascript
var dtypes = require( '@stdlib/ndarray/dtypes' );
var getDType = require( '@stdlib/ndarray/dtype' );
var exponential = require( '@stdlib/random/base/exponential' );

var idt = dtypes( 'real_and_generic' );
var odt = dtypes( 'real_floating_point_and_generic' );

var policies = {
    'output': 'real_floating_point_and_generic'
};
var options = {
    'order': 'row-major'
};

var factory = createFactory( exponential, idt, odt, policies, options );

var random = factory();
// returns <Function>

var v = random( [ 2, 2 ], 2.0, {
    'dtype': 'generic'
});
// returns <ndarray>

var dt = getDType( v );
// returns 'generic'
```

#### random.assign( param1, out )

Fills an ndarray with pseudorandom numbers drawn from a probability distribution.

```javascript
var dtypes = require( '@stdlib/ndarray/dtypes' );
var ndzeros = require( '@stdlib/ndarray/zeros' );
var exponential = require( '@stdlib/random/base/exponential' );

var idt = dtypes( 'real_and_generic' );
var odt = dtypes( 'real_floating_point_and_generic' );

var policies = {
    'output': 'real_floating_point_and_generic'
};
var options = {
    'order': 'row-major'
};

var factory = createFactory( exponential, idt, odt, policies, options );

var random = factory();
// returns <Function>

var out = ndzeros( [ 2, 2 ] );
var v = random.assign( 2.0, out );
// returns <ndarray>

var bool = ( v === out );
// returns true
```

The method has the following parameters:

-   **param1**: distribution parameter. May be either a scalar or an ndarray. If an ndarray, must be [broadcast compatible][@stdlib/ndarray/base/broadcast-shapes] with the output ndarray.
-   **out**: output ndarray.

#### random.PRNG

The underlying pseudorandom number generator.

```javascript
var dtypes = require( '@stdlib/ndarray/dtypes' );
var exponential = require( '@stdlib/random/base/exponential' );

var idt = dtypes( 'real_and_generic' );
var odt = dtypes( 'real_floating_point_and_generic' );

var policies = {
    'output': 'real_floating_point_and_generic'
};
var options = {
    'order': 'row-major'
};

var factory = createFactory( exponential, idt, odt, policies, options );

var random = factory();
// returns <Function>

var prng = random.PRNG;
// returns <Function>
```

#### random.seed

The value used to seed the underlying pseudorandom number generator.

```javascript
var dtypes = require( '@stdlib/ndarray/dtypes' );
var exponential = require( '@stdlib/random/base/exponential' );

var idt = dtypes( 'real_and_generic' );
var odt = dtypes( 'real_floating_point_and_generic' );

var policies = {
    'output': 'real_floating_point_and_generic'
};
var options = {
    'order': 'row-major'
};

var factory = createFactory( exponential, idt, odt, policies, options );

var random = factory();
// returns <Function>

var seed = random.seed;
// returns <Uint32Array>
```

If the factory function is provided a PRNG for uniformly distributed numbers, the associated property value on the returned function is `null`.

```javascript
var dtypes = require( '@stdlib/ndarray/dtypes' );
var minstd = require( '@stdlib/random/base/minstd-shuffle' ).normalized;
var exponential = require( '@stdlib/random/base/exponential' );

var idt = dtypes( 'real_and_generic' );
var odt = dtypes( 'real_floating_point_and_generic' );

var policies = {
    'output': 'real_floating_point_and_generic'
};
var options = {
    'order': 'row-major'
};

var factory = createFactory( exponential, idt, odt, policies, options );

var random = factory({
    'prng': minstd
});
// returns <Function>

var seed = random.seed;
// returns null
```

#### random.seedLength

Length of the underlying pseudorandom number generator seed.

```javascript
var dtypes = require( '@stdlib/ndarray/dtypes' );
var exponential = require( '@stdlib/random/base/exponential' );

var idt = dtypes( 'real_and_generic' );
var odt = dtypes( 'real_floating_point_and_generic' );

var policies = {
    'output': 'real_floating_point_and_generic'
};
var options = {
    'order': 'row-major'
};

var factory = createFactory( exponential, idt, odt, policies, options );

var random = factory();
// returns <Function>

var len = random.seedLength;
// returns <number>
```

If the factory function is provided a PRNG for uniformly distributed numbers, the associated property value on the returned function is `null`.

```javascript
var dtypes = require( '@stdlib/ndarray/dtypes' );
var minstd = require( '@stdlib/random/base/minstd-shuffle' ).normalized;
var exponential = require( '@stdlib/random/base/exponential' );

var idt = dtypes( 'real_and_generic' );
var odt = dtypes( 'real_floating_point_and_generic' );

var policies = {
    'output': 'real_floating_point_and_generic'
};
var options = {
    'order': 'row-major'
};

var factory = createFactory( exponential, idt, odt, policies, options );

var random = factory({
    'prng': minstd
});
// returns <Function>

var len = random.seedLength;
// returns null
```

#### random.state

Writable property for getting and setting the underlying pseudorandom number generator state.

```javascript
var dtypes = require( '@stdlib/ndarray/dtypes' );
var exponential = require( '@stdlib/random/base/exponential' );

var idt = dtypes( 'real_and_generic' );
var odt = dtypes( 'real_floating_point_and_generic' );

var policies = {
    'output': 'real_floating_point_and_generic'
};
var options = {
    'order': 'row-major'
};

var factory = createFactory( exponential, idt, odt, policies, options );

var random = factory();
// returns <Function>

var state = random.state;
// returns <Uint32Array>
```

If the factory function is provided a PRNG for uniformly distributed numbers, the associated property value on the returned function is `null`.

```javascript
var dtypes = require( '@stdlib/ndarray/dtypes' );
var minstd = require( '@stdlib/random/base/minstd-shuffle' ).normalized;
var exponential = require( '@stdlib/random/base/exponential' );

var idt = dtypes( 'real_and_generic' );
var odt = dtypes( 'real_floating_point_and_generic' );

var policies = {
    'output': 'real_floating_point_and_generic'
};
var options = {
    'order': 'row-major'
};

var factory = createFactory( exponential, idt, odt, policies, options );

var random = factory({
    'prng': minstd
});
// returns <Function>

var state = random.state;
// returns null
```

#### random.stateLength

Length of the underlying pseudorandom number generator state.

```javascript
var dtypes = require( '@stdlib/ndarray/dtypes' );
var exponential = require( '@stdlib/random/base/exponential' );

var idt = dtypes( 'real_and_generic' );
var odt = dtypes( 'real_floating_point_and_generic' );

var policies = {
    'output': 'real_floating_point_and_generic'
};
var options = {
    'order': 'row-major'
};

var factory = createFactory( exponential, idt, odt, policies, options );

var random = factory();
// returns <Function>

var len = random.stateLength;
// returns <number>
```

If the factory function is provided a PRNG for uniformly distributed numbers, the associated property value on the returned function is `null`.

```javascript
var dtypes = require( '@stdlib/ndarray/dtypes' );
var minstd = require( '@stdlib/random/base/minstd-shuffle' ).normalized;
var exponential = require( '@stdlib/random/base/exponential' );

var idt = dtypes( 'real_and_generic' );
var odt = dtypes( 'real_floating_point_and_generic' );

var policies = {
    'output': 'real_floating_point_and_generic'
};
var options = {
    'order': 'row-major'
};

var factory = createFactory( exponential, idt, odt, policies, options );

var random = factory({
    'prng': minstd
});
// returns <Function>

var len = random.stateLength;
// returns null
```

#### random.byteLength

Size (in bytes) of underlying pseudorandom number generator state.

```javascript
var dtypes = require( '@stdlib/ndarray/dtypes' );
var exponential = require( '@stdlib/random/base/exponential' );

var idt = dtypes( 'real_and_generic' );
var odt = dtypes( 'real_floating_point_and_generic' );

var policies = {
    'output': 'real_floating_point_and_generic'
};
var options = {
    'order': 'row-major'
};

var factory = createFactory( exponential, idt, odt, policies, options );

var random = factory();
// returns <Function>

var len = random.byteLength;
// returns <number>
```

If the factory function is provided a PRNG for uniformly distributed numbers, the associated property value on the returned function is `null`.

```javascript
var dtypes = require( '@stdlib/ndarray/dtypes' );
var minstd = require( '@stdlib/random/base/minstd-shuffle' ).normalized;
var exponential = require( '@stdlib/random/base/exponential' );

var idt = dtypes( 'real_and_generic' );
var odt = dtypes( 'real_floating_point_and_generic' );

var policies = {
    'output': 'real_floating_point_and_generic'
};
var options = {
    'order': 'row-major'
};

var factory = createFactory( exponential, idt, odt, policies, options );

var random = factory({
    'prng': minstd
});
// returns <Function>

var len = random.byteLength;
// returns null
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The output data type policy only applies to the function which returns a new ndarray. For the `assign` method, the output ndarray is allowed to have any supported output data type.
-   If PRNG state is "shared" (meaning a state array was provided during function creation and **not** copied) and one sets the underlying generator state to a state array having a different length, the function returned by the factory function does **not** update the existing shared state and, instead, points to the newly provided state array. In order to synchronize the output of the underlying generator according to the new shared state array, the state array for **each** relevant creation function and/or PRNG must be **explicitly** set.
-   If PRNG state is "shared" and one sets the underlying generator state to a state array of the same length, the PRNG state is updated (along with the state of all other creation functions and/or PRNGs sharing the PRNG's state array).

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var exponential = require( '@stdlib/random/base/exponential' );
var dtypes = require( '@stdlib/ndarray/dtypes' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var createFactory = require( '@stdlib/random/tools/unary-factory' );

// Create a new PRNG factory...
var idt = dtypes( 'real_and_generic' );
var odt = dtypes( 'real_floating_point_and_generic' );
var policies = {
    'output': 'real_floating_point_and_generic'
};
var factory = createFactory( exponential, idt, odt, policies );

// Create a function for generating pseudorandom numbers:
var random = factory();

// Generate a 3x3 matrix of pseudorandom numbers:
var x = random( [ 3, 3 ], 2.0 );
console.log( ndarray2array( x ) );

// Generate another matrix with a specified data type:
x = random( [ 3, 3 ], 2.0, {
    'dtype': 'float32'
});
console.log( ndarray2array( x ) );

// Define an array of distribution parameters:
var param = new ndarray( 'generic', [ 2.0, 20.0, 200.0 ], [ 3, 1 ], [ 1, 1 ], 0, 'row-major' );

// Broadcast the parameters to generate another 3x3 matrix of pseudorandom numbers:
x = random( [ 3, 3 ], param );
console.log( ndarray2array( x ) );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/ndarray/policies]: https://github.com/stdlib-js/ndarray-policies

[@stdlib/ndarray/orders]: https://github.com/stdlib-js/ndarray-orders

[@stdlib/ndarray/base/broadcast-shapes]: https://github.com/stdlib-js/ndarray-base-broadcast-shapes

[@stdlib/array/uint32]: https://github.com/stdlib-js/array-uint32

</section>

<!-- /.links -->
