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

# reviveBasePRNG

> Revive a JSON-serialized pseudorandom number generator (PRNG).

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var reviveBasePRNG = require( '@stdlib/random/base/reviver' );
```

#### reviveBasePRNG( key, value )

Revives a JSON-serialized pseudorandom number generator (PRNG).

```javascript
var parseJSON = require( '@stdlib/utils/parse-json' );
var randu = require( '@stdlib/random/base/randu' );

var str = JSON.stringify( randu );

var rand = parseJSON( str, reviveBasePRNG );
// returns <Function>
```

For details on the JSON serialization format, see the `.toJSON()` method for, e.g., [`randu()`][@stdlib/random/base/randu].

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var parseJSON = require( '@stdlib/utils/parse-json' );
var reviveBasePRNG = require( '@stdlib/random/base/reviver' );

// Progress the PRNG state...
var r1;
var i;
for ( i = 0; i < 100; i++ ) {
    r1 = randu();
}

// Serialize the PRNG as a JSON string:
var str = JSON.stringify( randu );

// Revive the JSON-serialized PRNG:
var rand = parseJSON( str, reviveBasePRNG );
if ( rand instanceof Error ) {
    console.error( rand.message );
}

// Generate duplicate sequences...
var r2;
for ( i = 0; i < 100; i++ ) {
    r1 = randu();
    r2 = rand();
    console.log( '%d == %d ? %s', r1, r2, ( r1 === r2 ).toString() );
}
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

[@stdlib/random/base/randu]: https://github.com/stdlib-js/random/tree/main/base/randu

</section>

<!-- /.links -->
