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

# Random

> Constructor for creating ndarrays filled with pseudorandom values drawn from a unary PRNG.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var Random = require( '@stdlib/random/tools/unary' );
```

#### Random( prng, idtypes odtypes, policies\[, options] )

Returns an interface for creating ndarrays filled with pseudorandom values drawn from a unary PRNG.

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

var rand = new Random( exponential, idt, odt, policies, options );
```

The constructor has the following parameters:

-   **prng**: unary pseudorandom value generator.

-   **idtypes**: list of supported input data types.

-   **odtypes**: list of supported output data types.

-   **policies**: interface policies. Must have the following properties:

    -   **output**: output data type [policy][@stdlib/ndarray/policies].

-   **options**: function options (_optional_).

The constructor supports the following options:

-   **order**: default [memory layout][@stdlib/ndarray/orders].

#### Random.prototype.generate( shape, param1\[, options] )

Returns an ndarray filled with pseudorandom values drawn from a unary PRNG.

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

var rand = new Random( exponential, idt, odt, policies, options );

var v = rand.generate( [ 2, 2 ], 2.0 );
// returns <ndarray>
```

The method has the following parameters:

-   **shape**: output ndarray shape.
-   **param1**: PRNG parameter. May be either a scalar or an ndarray. If an ndarray, must be [broadcast compatible][@stdlib/ndarray/base/broadcast-shapes] with the specified output ndarray shape.
-   **options**: function options (_optional_).

The method accepts the following options:

-   **dtype**: output ndarray data type. Setting this option overrides the output data type policy.
-   **order**: memory layout. Setting this option overrides the default memory layout.
-   **mode**: specifies how to handle indices which exceed ndarray dimensions.
-   **submode**: specifies how to handle subscripts which exceed ndarray dimensions on a per dimension basis.
-   **readonly**: boolean indicating whether an ndarray should be read-only.

By default, the method returns an ndarray having a data type determined by the output data type policy. To override the default behavior, set the `dtype` option.

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

var rand = new Random( exponential, idt, odt, policies, options );

var v = rand.generate( [ 2, 2 ], 2.0, {
    'dtype': 'generic'
});
// returns <ndarray>

var dt = getDType( v );
// returns 'generic'
```

#### Random.prototype.assign( param1, out )

Fills an ndarray with pseudorandom values drawn from a unary PRNG.

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

var rand = new Random( exponential, idt, odt, policies, options );

var out = ndzeros( [ 2, 2 ] );
var v = rand.assign( 2.0, out );
// returns <ndarray>

var bool = ( v === out );
// returns true
```

The method has the following parameters:

-   **param1**: PRNG parameter. May be either a scalar or an ndarray. If an ndarray, must be [broadcast compatible][@stdlib/ndarray/base/broadcast-shapes] with the output ndarray.
-   **out**: output ndarray.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The output data type policy only applies to the `generate` method. For the `assign` method, the output ndarray is allowed to have any supported output data type.

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
var Random = require( '@stdlib/random/tools/unary' );

// Create a new PRNG instance...
var idt = dtypes( 'real_and_generic' );
var odt = dtypes( 'real_floating_point_and_generic' );
var policies = {
    'output': 'real_floating_point_and_generic'
};
var random = new Random( exponential, idt, odt, policies );

// Generate a 3x3 matrix of pseudorandom numbers:
var x = random.generate( [ 3, 3 ], 2.0 );
console.log( ndarray2array( x ) );

// Generate another matrix with a specified data type:
x = random.generate( [ 3, 3 ], 2.0, {
    'dtype': 'float32'
});
console.log( ndarray2array( x ) );

// Define an array of distribution parameters:
var param = new ndarray( 'generic', [ 2.0, 20.0, 200.0 ], [ 3, 1 ], [ 1, 1 ], 0, 'row-major' );

// Broadcast the parameters to generate another 3x3 matrix of pseudorandom numbers:
x = random.generate( [ 3, 3 ], param );
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

</section>

<!-- /.links -->
