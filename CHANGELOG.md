# CHANGELOG

> Package changelog.

<section class="release" id="unreleased">

## Unreleased (2025-08-12)

<section class="features">

### Features

-   [`8715789`](https://github.com/stdlib-js/stdlib/commit/871578903679cbdfc5445af4fbd21c59399bfb61) - add `uniform` to namespace
-   [`bcf158b`](https://github.com/stdlib-js/stdlib/commit/bcf158b2856967f2afed0a756007bfb797a3839d) - add `exponential` to namespace
-   [`b831e5c`](https://github.com/stdlib-js/stdlib/commit/b831e5cb025fce01c8385d9fdcf4f43bd1f07158) - add `random/uniform`
-   [`ffc0d94`](https://github.com/stdlib-js/stdlib/commit/ffc0d94f0d19a553d2e134cbf985ff8e6863c901) - add `binaryFactory` to namespace
-   [`c1d2b7a`](https://github.com/stdlib-js/stdlib/commit/c1d2b7a1b8b1a692b05c69a137e4b1240653efdc) - add `random/tools/binary-factory`
-   [`fd2532a`](https://github.com/stdlib-js/stdlib/commit/fd2532a6faf2a890bf1fc9659a7d4856ca7366ed) - add `binary` to namespace
-   [`e510ba5`](https://github.com/stdlib-js/stdlib/commit/e510ba559a7ce570c9ae1845b377fff798d56634) - add `random/tools/binary`
-   [`fb571fb`](https://github.com/stdlib-js/stdlib/commit/fb571fb19db616c28378d0c658d6f68e8cb2a0e4) - add `tools` to namespace
-   [`e5c7aa2`](https://github.com/stdlib-js/stdlib/commit/e5c7aa22bfe71828c59e5370499b1e420448ba60) - add `tools` to namespace
-   [`fa668da`](https://github.com/stdlib-js/stdlib/commit/fa668da66016366690a9eaabbefcf3ef4659ef57) - add `random/tools` namespace
-   [`9a53f4a`](https://github.com/stdlib-js/stdlib/commit/9a53f4ad90da183dfd68aa1e6dc9340aad955cca) - add TypeScript declarations
-   [`7d190e7`](https://github.com/stdlib-js/stdlib/commit/7d190e78f824e99bb43ad9c24eafa952386d19b2) - add TypeScript declarations
-   [`3de82ab`](https://github.com/stdlib-js/stdlib/commit/3de82aba142ef3b9c16cd615175031305fa02237) - add `random/tools/unary-factory`
-   [`d7fb715`](https://github.com/stdlib-js/stdlib/commit/d7fb7153413ef9f20b751976d77ae5233a864b7e) - add `random/tools/unary`
-   [`9818fa6`](https://github.com/stdlib-js/stdlib/commit/9818fa6dd8c90e045a147bfd1ba83cb1f693d17b) - update namespace TypeScript declarations [(#3259)](https://github.com/stdlib-js/stdlib/pull/3259)
-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec) - update namespace TypeScript declarations [(#3190)](https://github.com/stdlib-js/stdlib/pull/3190)

</section>

<!-- /.features -->

<section class="bug-fixes">

### Bug Fixes

-   [`2eaea4a`](https://github.com/stdlib-js/stdlib/commit/2eaea4af45fe8ae07759c35d6e8d13636df30637) - add type check to ensure only options objects are passed to factory
-   [`6fcba80`](https://github.com/stdlib-js/stdlib/commit/6fcba8015a623cccab4c4c60152ef680653be786) - ensure support for zero-dimensional ndarray distribution parameters
-   [`b082d29`](https://github.com/stdlib-js/stdlib/commit/b082d299748392a05be50b43351af6ac0cb7d418) - update include paths and reorder includes
-   [`40b01fb`](https://github.com/stdlib-js/stdlib/commit/40b01fbc906831c1948d5287aa2b1fb176df0105) - update include paths and refactor branching logic
-   [`5939fb1`](https://github.com/stdlib-js/stdlib/commit/5939fb1afbdb5288ef65f449e448c77fe56c6dfd) - update include paths and refactor branching logic
-   [`e1296c1`](https://github.com/stdlib-js/stdlib/commit/e1296c1c5634fbcf5e007695391c944fef27e6aa) - update include paths and reorder includes
-   [`7ef177c`](https://github.com/stdlib-js/stdlib/commit/7ef177c87922d543ab59c426c453996a9e51397d) - update include paths and reorder includes
-   [`51ab6ca`](https://github.com/stdlib-js/stdlib/commit/51ab6cac709c2c8a117eac6894b0594ef9184323) - update include paths and reorder includes
-   [`1001ae3`](https://github.com/stdlib-js/stdlib/commit/1001ae384523b707ca5671a8932acccfb4d69a0c) - remove unused imports
-   [`83f2a61`](https://github.com/stdlib-js/stdlib/commit/83f2a613faa1661bdf1aebea1b4723044204f561) - remove unused imports

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`62ed403`](https://github.com/stdlib-js/stdlib/commit/62ed40363834199d5dfabb4968d9f63a6539b198): drop support for default options

    -   Previously, the `factory` method supported providing defaults for
        various ndarray options (e.g., readonly, mode, order, etc). These
        options have been removed. Instead, users should pass them along
        to the main API for generating pseudorandom numbers. To replicate
        previous functionality, create your own wrapper which uses partial
        application to pass a set of \"default\" options for each invocation
        of the PRNG function.

-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec): update namespace declarations

    -   To migrate, users should consult the corresponding packages containing the respective implementations to determine what is breaking. The primary breakages come from the `blas/*` namespace, where we recently refactored how top-level BLAS APIs operate on input arguments.

</section>

<!-- /.breaking-changes -->

<section class="issues">

### Closed Issues

A total of 8 issues were closed in this release:

[#5933](https://github.com/stdlib-js/stdlib/issues/5933), [#6213](https://github.com/stdlib-js/stdlib/issues/6213), [#6236](https://github.com/stdlib-js/stdlib/issues/6236), [#6663](https://github.com/stdlib-js/stdlib/issues/6663), [#6901](https://github.com/stdlib-js/stdlib/issues/6901), [#7148](https://github.com/stdlib-js/stdlib/issues/7148), [#7199](https://github.com/stdlib-js/stdlib/issues/7199), [#7349](https://github.com/stdlib-js/stdlib/issues/7349)

</section>

<!-- /.issues -->

<section class="commits">

### Commits

<details>

-   [`77867ac`](https://github.com/stdlib-js/stdlib/commit/77867ac1767a186023f633dea30ddf860962aaed) - **docs:** remove trailing whitespace _(by Philipp Burckhardt)_
-   [`504a3f1`](https://github.com/stdlib-js/stdlib/commit/504a3f1d1db20b670b48efd1c292d7efbb433b58) - **style:** fix indentation in JSON files _(by Philipp Burckhardt)_
-   [`202df24`](https://github.com/stdlib-js/stdlib/commit/202df24a6e96c50d2b531bd2d86b743be06e7d5c) - **docs:** minor clean-up _(by Philipp Burckhardt)_
-   [`eff9b74`](https://github.com/stdlib-js/stdlib/commit/eff9b74602cd76a308c6518e1de5bd383b24b138) - **chore:** fix EditorConfig lint errors [(#7356)](https://github.com/stdlib-js/stdlib/pull/7356) _(by Lokesh Ranjan)_
-   [`3565318`](https://github.com/stdlib-js/stdlib/commit/3565318e3639b3e44890ed15ccd73560d3cac14c) - **refactor:** update paths _(by Gururaj Gurram)_
-   [`d40eeed`](https://github.com/stdlib-js/stdlib/commit/d40eeedd3e34280593e10be51238e0d80cf2a7cf) - **chore:** fix EditorConfig lint errors [(#7205)](https://github.com/stdlib-js/stdlib/pull/7205) _(by Deepak Singh)_
-   [`45867ff`](https://github.com/stdlib-js/stdlib/commit/45867ff77862afa84e39f529328cd768d78444fe) - **chore:** fix EditorConfig lint errors [(#7179)](https://github.com/stdlib-js/stdlib/pull/7179) _(by Karan Vasudevamurthy, Athan Reines)_
-   [`271c180`](https://github.com/stdlib-js/stdlib/commit/271c180beff04bf162bcc6e4407c0b07defbf15b) - **docs:** update namespace table of contents [(#6999)](https://github.com/stdlib-js/stdlib/pull/6999) _(by stdlib-bot)_
-   [`8715789`](https://github.com/stdlib-js/stdlib/commit/871578903679cbdfc5445af4fbd21c59399bfb61) - **feat:** add `uniform` to namespace _(by Athan Reines)_
-   [`bcf158b`](https://github.com/stdlib-js/stdlib/commit/bcf158b2856967f2afed0a756007bfb797a3839d) - **feat:** add `exponential` to namespace _(by Athan Reines)_
-   [`b831e5c`](https://github.com/stdlib-js/stdlib/commit/b831e5cb025fce01c8385d9fdcf4f43bd1f07158) - **feat:** add `random/uniform` _(by Athan Reines)_
-   [`9b8f3a8`](https://github.com/stdlib-js/stdlib/commit/9b8f3a8e51b449803b683c7bf394d498de479a5f) - **docs:** update namespace table of contents [(#6996)](https://github.com/stdlib-js/stdlib/pull/6996) _(by stdlib-bot)_
-   [`ffc0d94`](https://github.com/stdlib-js/stdlib/commit/ffc0d94f0d19a553d2e134cbf985ff8e6863c901) - **feat:** add `binaryFactory` to namespace _(by Athan Reines)_
-   [`c1d2b7a`](https://github.com/stdlib-js/stdlib/commit/c1d2b7a1b8b1a692b05c69a137e4b1240653efdc) - **feat:** add `random/tools/binary-factory` _(by Athan Reines)_
-   [`81f4209`](https://github.com/stdlib-js/stdlib/commit/81f420992213ea27fa5bf8e2c1930ce3be667e4b) - **docs:** fix documented errors _(by Athan Reines)_
-   [`ac030bd`](https://github.com/stdlib-js/stdlib/commit/ac030bd3dcc70b76129892f94e0347b80469daec) - **style:** fix spacing _(by Athan Reines)_
-   [`fd2532a`](https://github.com/stdlib-js/stdlib/commit/fd2532a6faf2a890bf1fc9659a7d4856ca7366ed) - **feat:** add `binary` to namespace _(by Athan Reines)_
-   [`e510ba5`](https://github.com/stdlib-js/stdlib/commit/e510ba559a7ce570c9ae1845b377fff798d56634) - **feat:** add `random/tools/binary` _(by Athan Reines)_
-   [`1f2dd57`](https://github.com/stdlib-js/stdlib/commit/1f2dd578f43122d0735cb3b6a6168151f7e787c7) - **docs:** update namespace table of contents [(#6928)](https://github.com/stdlib-js/stdlib/pull/6928) _(by stdlib-bot)_
-   [`7423599`](https://github.com/stdlib-js/stdlib/commit/74235999433f4fa850bc842988b53e3f3367d585) - **docs:** update namespace table of contents [(#6917)](https://github.com/stdlib-js/stdlib/pull/6917) _(by stdlib-bot)_
-   [`ac07e90`](https://github.com/stdlib-js/stdlib/commit/ac07e9063a58953875c233620315566bf18b0692) - **docs:** fix signature _(by Athan Reines)_
-   [`ada899e`](https://github.com/stdlib-js/stdlib/commit/ada899e505ef19e01af7a68dbbcca58451607faf) - **docs:** fix signature _(by Athan Reines)_
-   [`fc2fa6d`](https://github.com/stdlib-js/stdlib/commit/fc2fa6d9fd3d3ecdd5264fdb0a9f27973c8bdc7d) - **docs:** fix signature _(by Athan Reines)_
-   [`13f2202`](https://github.com/stdlib-js/stdlib/commit/13f22029c084d4b5af8387a5fc2740be280e9bfc) - **test:** fix comment _(by Athan Reines)_
-   [`4f24995`](https://github.com/stdlib-js/stdlib/commit/4f24995e799d0589bf1edb0c9bd9341d34ef0e9f) - **test:** fix comment _(by Athan Reines)_
-   [`16bbff1`](https://github.com/stdlib-js/stdlib/commit/16bbff17124264210133382c5557b7016d85493a) - **bench:** explicitly set dtype _(by Athan Reines)_
-   [`18e643f`](https://github.com/stdlib-js/stdlib/commit/18e643f8beca349ca4c6a48009cb49c5cb015060) - **bench:** explicitly set dtype _(by Athan Reines)_
-   [`283b1eb`](https://github.com/stdlib-js/stdlib/commit/283b1eb0ae0b7b750185f9d62a678820f937ce34) - **docs:** update copy _(by Athan Reines)_
-   [`b1d7e8d`](https://github.com/stdlib-js/stdlib/commit/b1d7e8d50fc1d123e89d308607c366d96d713d61) - **docs:** update example _(by Athan Reines)_
-   [`b8db168`](https://github.com/stdlib-js/stdlib/commit/b8db1682f82b5c08a2a09627a21804d1739cced4) - **docs:** use attribute accessors in examples _(by Athan Reines)_
-   [`67aa7ca`](https://github.com/stdlib-js/stdlib/commit/67aa7ca9ea5da37363b35c20b79de1a378ed0e27) - **bench:** only test a limited set of dtypes _(by Athan Reines)_
-   [`4bf3aff`](https://github.com/stdlib-js/stdlib/commit/4bf3affb16d7937ab4defb95176717591b09bfcd) - **chore:** update copyright years _(by Athan Reines)_
-   [`85ef704`](https://github.com/stdlib-js/stdlib/commit/85ef7049f33b79c07dab1759a7598621f6487a2b) - **test:** add `factory` tests _(by Athan Reines)_
-   [`2eaea4a`](https://github.com/stdlib-js/stdlib/commit/2eaea4af45fe8ae07759c35d6e8d13636df30637) - **fix:** add type check to ensure only options objects are passed to factory _(by Athan Reines)_
-   [`6fcba80`](https://github.com/stdlib-js/stdlib/commit/6fcba8015a623cccab4c4c60152ef680653be786) - **fix:** ensure support for zero-dimensional ndarray distribution parameters _(by Athan Reines)_
-   [`70c65cc`](https://github.com/stdlib-js/stdlib/commit/70c65ccc932d3c5e6ed7022d9355cd0c17814c26) - **test:** add tests for `assign` method _(by Athan Reines)_
-   [`d446f58`](https://github.com/stdlib-js/stdlib/commit/d446f589c82f39e212a4c0491d1e97e44e2293c8) - **test:** remove `float32` tests _(by Athan Reines)_
-   [`62ed403`](https://github.com/stdlib-js/stdlib/commit/62ed40363834199d5dfabb4968d9f63a6539b198) - **refactor:** migrate to `random/tools/unary-factory` and drop support for default options _(by Athan Reines)_
-   [`fb571fb`](https://github.com/stdlib-js/stdlib/commit/fb571fb19db616c28378d0c658d6f68e8cb2a0e4) - **feat:** add `tools` to namespace _(by Athan Reines)_
-   [`e5c7aa2`](https://github.com/stdlib-js/stdlib/commit/e5c7aa22bfe71828c59e5370499b1e420448ba60) - **feat:** add `tools` to namespace _(by Athan Reines)_
-   [`fa668da`](https://github.com/stdlib-js/stdlib/commit/fa668da66016366690a9eaabbefcf3ef4659ef57) - **feat:** add `random/tools` namespace _(by Athan Reines)_
-   [`fd431ff`](https://github.com/stdlib-js/stdlib/commit/fd431ff0ac7fcdea9de4fab41e441f32dab1868e) - **test:** fix typo _(by Athan Reines)_
-   [`9a53f4a`](https://github.com/stdlib-js/stdlib/commit/9a53f4ad90da183dfd68aa1e6dc9340aad955cca) - **feat:** add TypeScript declarations _(by Athan Reines)_
-   [`ce7c394`](https://github.com/stdlib-js/stdlib/commit/ce7c394d694cafaf6fdc47c55709dac0d677d7ae) - **docs:** update comments _(by Athan Reines)_
-   [`ea82afc`](https://github.com/stdlib-js/stdlib/commit/ea82afcd5597dabb4e9fa25efb81efc84789b690) - **docs:** update description _(by Athan Reines)_
-   [`7d190e7`](https://github.com/stdlib-js/stdlib/commit/7d190e78f824e99bb43ad9c24eafa952386d19b2) - **feat:** add TypeScript declarations _(by Athan Reines)_
-   [`384672f`](https://github.com/stdlib-js/stdlib/commit/384672f535a570ae66d10e24d098a8d12657c9ba) - **chore:** fix EditorConfig lint errors [(#6904)](https://github.com/stdlib-js/stdlib/pull/6904) _(by Dipjyoti Das)_
-   [`99288f7`](https://github.com/stdlib-js/stdlib/commit/99288f71645dbe3209e489e152c7775f86a3052a) - **docs:** update descriptions to be more neutral regarding output values _(by Athan Reines)_
-   [`393c150`](https://github.com/stdlib-js/stdlib/commit/393c150c784d4e0fb903d7633924c18a93a4bedd) - **docs:** update descriptions to be more neutral regarding output values _(by Athan Reines)_
-   [`65f6a65`](https://github.com/stdlib-js/stdlib/commit/65f6a65b799c493d707c6eb2d55574e42f6a0649) - **docs:** add REPL help _(by Athan Reines)_
-   [`b928b26`](https://github.com/stdlib-js/stdlib/commit/b928b2608f992d71684869aaa0cccc457bbfdfb0) - **docs:** add REPL help _(by Athan Reines)_
-   [`58747ab`](https://github.com/stdlib-js/stdlib/commit/58747abd76284c8096b73106b56cd580016d5701) - **docs:** update copy _(by Athan Reines)_
-   [`3de82ab`](https://github.com/stdlib-js/stdlib/commit/3de82aba142ef3b9c16cd615175031305fa02237) - **feat:** add `random/tools/unary-factory` _(by Athan Reines)_
-   [`d7fb715`](https://github.com/stdlib-js/stdlib/commit/d7fb7153413ef9f20b751976d77ae5233a864b7e) - **feat:** add `random/tools/unary` _(by Athan Reines)_
-   [`366925e`](https://github.com/stdlib-js/stdlib/commit/366925e14f08852288d1422041d5613c1aaddb28) - **chore:** minor clean-up _(by Philipp Burckhardt)_
-   [`56e6ec9`](https://github.com/stdlib-js/stdlib/commit/56e6ec9161a910d07dbc2af07164590c601f3351) - **docs:** fix parameter descriptions _(by Athan Reines)_
-   [`9485c2b`](https://github.com/stdlib-js/stdlib/commit/9485c2b14a159557d8d097c2cfbd106db12a2210) - **chore:** fix EditorConfig lint errors (issue #6663) [(#6672)](https://github.com/stdlib-js/stdlib/pull/6672) _(by Dipjyoti Das)_
-   [`a464a60`](https://github.com/stdlib-js/stdlib/commit/a464a60568b819f813aff054ba0c32476192d269) - **chore:** fix EditorConfig lint errors [(#6246)](https://github.com/stdlib-js/stdlib/pull/6246) _(by MANI, Athan Reines)_
-   [`8805742`](https://github.com/stdlib-js/stdlib/commit/8805742fbac8884ef6727b4a177f1a0cc940bdce) - **chore:** resolve lint errors in `random/base/minstd` [(#6498)](https://github.com/stdlib-js/stdlib/pull/6498) _(by Abdul Kaium, Athan Reines)_
-   [`03ee1fb`](https://github.com/stdlib-js/stdlib/commit/03ee1fba12581e0c4bdf79514ae8477d64ffe2fe) - **docs:** fix description _(by Athan Reines)_
-   [`5fc6df0`](https://github.com/stdlib-js/stdlib/commit/5fc6df084a95993c26151ceadb663bcd5dce4d29) - **docs:** fix description _(by Athan Reines)_
-   [`a6dc859`](https://github.com/stdlib-js/stdlib/commit/a6dc8598c42abb4bbd5bbcf25cfc478d777c9a28) - **refactor:** use array base assertion utility _(by Athan Reines)_
-   [`9ecb767`](https://github.com/stdlib-js/stdlib/commit/9ecb7670623af1f28ffcb635d6fdf27a630e37e5) - **chore:** fix EditorConfig lint errors [(#6215)](https://github.com/stdlib-js/stdlib/pull/6215) _(by AlyAbdelmoneim)_
-   [`6010481`](https://github.com/stdlib-js/stdlib/commit/6010481a6f07f206d7b7c491dea4f21c785ea97b) - **chore:** fix EditorConfig lint errors [(#5940)](https://github.com/stdlib-js/stdlib/pull/5940) _(by Pulkit Gupta, Athan Reines)_
-   [`d9c2e28`](https://github.com/stdlib-js/stdlib/commit/d9c2e28c3c0298363e4e846e69d32c49252a14a7) - **docs:** update examples _(by Athan Reines)_
-   [`05cdb8f`](https://github.com/stdlib-js/stdlib/commit/05cdb8f1e70b25fdd7fdaa822d8180fbf9588083) - **docs:** update examples _(by Athan Reines)_
-   [`d2fa5d2`](https://github.com/stdlib-js/stdlib/commit/d2fa5d260975d98ecea0fb9ccd2e8a24756a1f96) - **docs:** update example _(by Athan Reines)_
-   [`3eb6fa4`](https://github.com/stdlib-js/stdlib/commit/3eb6fa42360272e0e664c714766443ed90cb41b6) - **docs:** update examples _(by Athan Reines)_
-   [`5260d13`](https://github.com/stdlib-js/stdlib/commit/5260d1347c8cd3f669d47dabe8cc6f954809bb27) - **refactor:** update paths _(by Gururaj Gurram)_
-   [`08c640b`](https://github.com/stdlib-js/stdlib/commit/08c640bed04914d60a99a6da842e08cb57a0e4b8) - **test:** fix type bug _(by Athan Reines)_
-   [`479c50a`](https://github.com/stdlib-js/stdlib/commit/479c50acd9a8ddaf50fc670f9eb6fa85f8de0bfb) - **test:** fix type bug _(by Athan Reines)_
-   [`8c7dff3`](https://github.com/stdlib-js/stdlib/commit/8c7dff311a96451ecf52d7a08e17fd03bdf4a300) - **refactor:** move variable declaration _(by Athan Reines)_
-   [`b082d29`](https://github.com/stdlib-js/stdlib/commit/b082d299748392a05be50b43351af6ac0cb7d418) - **fix:** update include paths and reorder includes _(by Athan Reines)_
-   [`3c8a4d5`](https://github.com/stdlib-js/stdlib/commit/3c8a4d5c5d97979206090197ca00f39de3d19f06) - **docs:** update note _(by Athan Reines)_
-   [`ee0c409`](https://github.com/stdlib-js/stdlib/commit/ee0c4092ad6995e68d53c384e6ef75d87bf36ac8) - **docs:** update note _(by Athan Reines)_
-   [`40b01fb`](https://github.com/stdlib-js/stdlib/commit/40b01fbc906831c1948d5287aa2b1fb176df0105) - **fix:** update include paths and refactor branching logic _(by Athan Reines)_
-   [`5939fb1`](https://github.com/stdlib-js/stdlib/commit/5939fb1afbdb5288ef65f449e448c77fe56c6dfd) - **fix:** update include paths and refactor branching logic _(by Athan Reines)_
-   [`5be9674`](https://github.com/stdlib-js/stdlib/commit/5be9674b6af6402f9c9f4833e31070574a716144) - **style:** update include order _(by Athan Reines)_
-   [`e1296c1`](https://github.com/stdlib-js/stdlib/commit/e1296c1c5634fbcf5e007695391c944fef27e6aa) - **fix:** update include paths and reorder includes _(by Athan Reines)_
-   [`1467fde`](https://github.com/stdlib-js/stdlib/commit/1467fde6e4523af5030c87ee50b9c0c9ea050668) - **docs:** fix include paths in examples _(by Athan Reines)_
-   [`faa4da3`](https://github.com/stdlib-js/stdlib/commit/faa4da3f2c52be1b422d3b08c7ee6b659d848556) - **docs:** fix include paths in examples _(by Athan Reines)_
-   [`7ef177c`](https://github.com/stdlib-js/stdlib/commit/7ef177c87922d543ab59c426c453996a9e51397d) - **fix:** update include paths and reorder includes _(by Athan Reines)_
-   [`51ab6ca`](https://github.com/stdlib-js/stdlib/commit/51ab6cac709c2c8a117eac6894b0594ef9184323) - **fix:** update include paths and reorder includes _(by Athan Reines)_
-   [`8a15baa`](https://github.com/stdlib-js/stdlib/commit/8a15baa639e8c4f45479821cf7331715e0546e86) - **docs:** update related packages sections [(#4425)](https://github.com/stdlib-js/stdlib/pull/4425) _(by stdlib-bot)_
-   [`d88905f`](https://github.com/stdlib-js/stdlib/commit/d88905fbd9006bf223db7ce4959b46f02cf7d73e) - **docs:** fix parameter descriptions in Weibull distribution packages _(by Philipp Burckhardt)_
-   [`b87254d`](https://github.com/stdlib-js/stdlib/commit/b87254d4535a3b90bf3d0068750ed6e9ca5dbc85) - **docs:** fix parameter descriptions in Weibull distribution packages _(by Philipp Burckhardt)_
-   [`90e96d0`](https://github.com/stdlib-js/stdlib/commit/90e96d01b7a32ec3b71caf3e5f57528338199a8f) - **chore:** minor clean-up _(by Philipp Burckhardt)_
-   [`8553770`](https://github.com/stdlib-js/stdlib/commit/85537708442675d6bc1bf5dad5aaf252cecb82ac) - **chore:** minor clean-up _(by Philipp Burckhardt)_
-   [`32deb11`](https://github.com/stdlib-js/stdlib/commit/32deb11c6a2453748d8db9554b6bb3fdb73a077f) - **docs:** update related packages sections [(#3976)](https://github.com/stdlib-js/stdlib/pull/3976) _(by stdlib-bot)_
-   [`cf7d38a`](https://github.com/stdlib-js/stdlib/commit/cf7d38ae3e7bce92cf47778f7b1c3da731121d77) - **docs:** update related packages sections [(#3527)](https://github.com/stdlib-js/stdlib/pull/3527) _(by stdlib-bot)_
-   [`9818fa6`](https://github.com/stdlib-js/stdlib/commit/9818fa6dd8c90e045a147bfd1ba83cb1f693d17b) - **feat:** update namespace TypeScript declarations [(#3259)](https://github.com/stdlib-js/stdlib/pull/3259) _(by stdlib-bot, Philipp Burckhardt)_
-   [`1001ae3`](https://github.com/stdlib-js/stdlib/commit/1001ae384523b707ca5671a8932acccfb4d69a0c) - **fix:** remove unused imports _(by Athan Reines)_
-   [`83f2a61`](https://github.com/stdlib-js/stdlib/commit/83f2a613faa1661bdf1aebea1b4723044204f561) - **fix:** remove unused imports _(by Athan Reines)_
-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec) - **feat:** update namespace TypeScript declarations [(#3190)](https://github.com/stdlib-js/stdlib/pull/3190) _(by stdlib-bot, Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 11 people contributed to this release. Thank you to the following contributors:

-   Abdul Kaium
-   AlyAbdelmoneim
-   Athan Reines
-   Deepak Singh
-   Dipjyoti Das
-   Gururaj Gurram
-   Karan Vasudevamurthy
-   Lokesh Ranjan
-   MANI
-   Philipp Burckhardt
-   Pulkit Gupta

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.3.3">

## 0.3.3 (2024-11-05)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.3.2">

## 0.3.2 (2024-11-05)

<section class="bug-fixes">

### Bug Fixes

-   [`93560b9`](https://github.com/stdlib-js/stdlib/commit/93560b988c750b47e68cf5a789cc5e9d74b8e2d8) - ensure correct seed validation [(#3007)](https://github.com/stdlib-js/stdlib/pull/3007)

</section>

<!-- /.bug-fixes -->

<section class="issues">

### Closed Issues

A total of 2 issues were closed in this release:

[#1607](https://github.com/stdlib-js/stdlib/issues/1607), [#2952](https://github.com/stdlib-js/stdlib/issues/2952)

</section>

<!-- /.issues -->

<section class="commits">

### Commits

<details>

-   [`80e8e4a`](https://github.com/stdlib-js/stdlib/commit/80e8e4a2866cdd9b906006a4b637c0572bdba256) - **docs:** update examples in `random/iter` [(#1769)](https://github.com/stdlib-js/stdlib/pull/1769) _(by Sai Srikar Dumpeti, Philipp Burckhardt)_
-   [`93560b9`](https://github.com/stdlib-js/stdlib/commit/93560b988c750b47e68cf5a789cc5e9d74b8e2d8) - **fix:** ensure correct seed validation [(#3007)](https://github.com/stdlib-js/stdlib/pull/3007) _(by Rishav)_
-   [`2c4e5d8`](https://github.com/stdlib-js/stdlib/commit/2c4e5d824e0c5dc8fd536bf79ff565cee100ce46) - **build:** disable additional lint rule in TS tests _(by Philipp Burckhardt)_
-   [`aad48ea`](https://github.com/stdlib-js/stdlib/commit/aad48eab1f19217854f4ffbfaed2a8be664b0f47) - **chore:** resolve lint errors _(by Philipp Burckhardt)_
-   [`62bb1e0`](https://github.com/stdlib-js/stdlib/commit/62bb1e0759f54abf61b84bb48ebf74a97128f779) - **docs:** improve examples of `random/array` namespace _(by Tirtadwipa Manunggal, Philipp Burckhardt)_
-   [`8e110d6`](https://github.com/stdlib-js/stdlib/commit/8e110d608afcc21dd633b7f1939f92ef7f3085e1) - **docs:** update examples for `random/array/tools` _(by Jenish Thapa, Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 5 people contributed to this release. Thank you to the following contributors:

-   Jenish Thapa
-   Philipp Burckhardt
-   Rishav
-   Sai Srikar Dumpeti
-   Tirtadwipa Manunggal

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.3.1">

## 0.3.1 (2024-08-18)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.3.0">

## 0.3.0 (2024-08-17)

<section class="features">

### Features

-   [`03d7a3a`](https://github.com/stdlib-js/stdlib/commit/03d7a3a5a3a4e591299993d9fb9ee2d2dafe4263) - add `random/base/shared`
-   [`0adcae5`](https://github.com/stdlib-js/stdlib/commit/0adcae51386086e2ef5fb5d78402389cff776deb) - update namespace TypeScript declarations [(#1340)](https://github.com/stdlib-js/stdlib/pull/1340)

</section>

<!-- /.features -->

<section class="bug-fixes">

### Bug Fixes

-   [`ff528da`](https://github.com/stdlib-js/stdlib/commit/ff528da57f135041fb78f550a9e35cf0cd904b1a) - address lint error
-   [`09483ae`](https://github.com/stdlib-js/stdlib/commit/09483ae5cf6ed8edfce7d64d36a31339bc3e6e06) - update documentation to reflect correct seed range

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`31aff93`](https://github.com/stdlib-js/stdlib/commit/31aff930532b53e34d2c7386684375a079fcf6bb): deprecate C APIs in favor of `random/base/shared`

    -   To migrate, users should explicitly depend on `@stdlib/random/base/shared`
        and update their include paths accordingly.

-   [`0adcae5`](https://github.com/stdlib-js/stdlib/commit/0adcae51386086e2ef5fb5d78402389cff776deb): rename exported aliases

    -   To migrate, users should consult the relevant namespace documentation and associated commits in order to determine which aliases have been renamed.

</section>

<!-- /.breaking-changes -->

<section class="issues">

### Closed Issues

This release closes the following issue:

[#1963](https://github.com/stdlib-js/stdlib/issues/1963)

</section>

<!-- /.issues -->

<section class="commits">

### Commits

<details>

-   [`2777e4b`](https://github.com/stdlib-js/stdlib/commit/2777e4be161869d09406e3b17947d24c64b47af2) - **bench:** resolve lint errors in benchmarks _(by Athan Reines)_
-   [`d04dcbd`](https://github.com/stdlib-js/stdlib/commit/d04dcbd6dc3b0bf4a89bd3947d317fa5ff15bb38) - **docs:** remove private annotations in C comments _(by Philipp Burckhardt)_
-   [`a78f7d1`](https://github.com/stdlib-js/stdlib/commit/a78f7d1b859b6b1d7b0bc0ee4daf76789e3e0910) - **style:** add missing spaces _(by Philipp Burckhardt)_
-   [`53fd65d`](https://github.com/stdlib-js/stdlib/commit/53fd65de03a466f6cf3ca0752c0908a57ef151b1) - **docs:** update related packages sections [(#2240)](https://github.com/stdlib-js/stdlib/pull/2240) _(by stdlib-bot)_
-   [`aaa391a`](https://github.com/stdlib-js/stdlib/commit/aaa391a46214c21dca294506d06ac0b3d59512ce) - **chore:** fix typos _(by Philipp Burckhardt)_
-   [`3be9ed0`](https://github.com/stdlib-js/stdlib/commit/3be9ed0b9f4357cbfc4a92fe0e12f4aedd38a9dc) - **docs:** update related packages sections [(#2221)](https://github.com/stdlib-js/stdlib/pull/2221) _(by stdlib-bot)_
-   [`39e0ba8`](https://github.com/stdlib-js/stdlib/commit/39e0ba8893259fca6e3f8b5d48c4d4bde532a65c) - **docs:** update related packages sections [(#2159)](https://github.com/stdlib-js/stdlib/pull/2159) _(by stdlib-bot)_
-   [`9ed7d0e`](https://github.com/stdlib-js/stdlib/commit/9ed7d0e7d57edb5ad0dfb65c944bed87d475cbf3) - **chore:** add missing trailing newlines _(by Philipp Burckhardt)_
-   [`d302b34`](https://github.com/stdlib-js/stdlib/commit/d302b347c0847bfc4670cafb6c090f06b8c3dd2e) - **docs:** update related packages sections  [(#2028)](https://github.com/stdlib-js/stdlib/pull/2028) _(by stdlib-bot)_
-   [`8a88ec1`](https://github.com/stdlib-js/stdlib/commit/8a88ec1f450ddc7cc4e9004f94299fe864bf7acb) - **docs:** update related packages sections [(#2006)](https://github.com/stdlib-js/stdlib/pull/2006) _(by stdlib-bot)_
-   [`ff528da`](https://github.com/stdlib-js/stdlib/commit/ff528da57f135041fb78f550a9e35cf0cd904b1a) - **fix:** address lint error _(by Athan Reines)_
-   [`09483ae`](https://github.com/stdlib-js/stdlib/commit/09483ae5cf6ed8edfce7d64d36a31339bc3e6e06) - **fix:** update documentation to reflect correct seed range _(by Athan Reines)_
-   [`28433d6`](https://github.com/stdlib-js/stdlib/commit/28433d637a39abec34dddc51d88c59fdc7c38f3a) - **docs:** clean-up C function parameter and return annotations _(by Philipp Burckhardt)_
-   [`9f2bf9c`](https://github.com/stdlib-js/stdlib/commit/9f2bf9c4e7939a4ed706e6dfcf2e4b18abe8900c) - **docs:** update related packages sections  [(#1907)](https://github.com/stdlib-js/stdlib/pull/1907) _(by stdlib-bot)_
-   [`f626157`](https://github.com/stdlib-js/stdlib/commit/f6261578c6f86b707b02059953c433ca5fb01d31) - **docs:** update related packages sections [(#1744)](https://github.com/stdlib-js/stdlib/pull/1744) _(by stdlib-bot)_
-   [`12dcb7a`](https://github.com/stdlib-js/stdlib/commit/12dcb7a46950ebba30902c6a390a6c4244e5b1aa) - **docs:** update related packages sections [(#1421)](https://github.com/stdlib-js/stdlib/pull/1421) _(by stdlib-bot)_
-   [`5daf468`](https://github.com/stdlib-js/stdlib/commit/5daf468cf419bc847ef14d0f56a80936fd175c9c) - **docs:** update related packages sections [(#1380)](https://github.com/stdlib-js/stdlib/pull/1380) _(by stdlib-bot)_
-   [`6236c9f`](https://github.com/stdlib-js/stdlib/commit/6236c9f42238c8e6dd0ae1e7d4f8fc7ff6a1a729) - **chore:** update package meta data [(#1377)](https://github.com/stdlib-js/stdlib/pull/1377) _(by stdlib-bot, Athan Reines)_
-   [`31aff93`](https://github.com/stdlib-js/stdlib/commit/31aff930532b53e34d2c7386684375a079fcf6bb) - **remove:** remove C APIs in favor of `random/base/shared` _(by Athan Reines)_
-   [`3f6ef04`](https://github.com/stdlib-js/stdlib/commit/3f6ef04f5eae399f3293ae98883ed3263ffe2c59) - **refactor:** use shared package _(by Athan Reines)_
-   [`9b5486c`](https://github.com/stdlib-js/stdlib/commit/9b5486ce97624b5462be1fc1d2f54f14cb3b7ada) - **refactor:** use shared package _(by Athan Reines)_
-   [`019b3ce`](https://github.com/stdlib-js/stdlib/commit/019b3ce8c87b3a38625bad1973a57ab36ae8beb7) - **refactor:** use shared package _(by Athan Reines)_
-   [`382c8bb`](https://github.com/stdlib-js/stdlib/commit/382c8bb95f6611f467d0a8159fd5fbb27b73e4f8) - **refactor:** use shared package _(by Athan Reines)_
-   [`748d77d`](https://github.com/stdlib-js/stdlib/commit/748d77d1e18398d92a8d9c7b7d50776e90c4bf6a) - **refactor:** use shared package _(by Athan Reines)_
-   [`00ca7c2`](https://github.com/stdlib-js/stdlib/commit/00ca7c2fd1337ba0e8b35487ed729188d4cdcea7) - **refactor:** use shared package _(by Athan Reines)_
-   [`bc091c6`](https://github.com/stdlib-js/stdlib/commit/bc091c62e4dff04149b0da2b5ba56edbe96e7a91) - **style:** address compiler warnings _(by Athan Reines)_
-   [`03d7a3a`](https://github.com/stdlib-js/stdlib/commit/03d7a3a5a3a4e591299993d9fb9ee2d2dafe4263) - **feat:** add `random/base/shared` _(by Athan Reines)_
-   [`1dc5966`](https://github.com/stdlib-js/stdlib/commit/1dc5966c272972122ca1bf57382deab6c432a37d) - **docs:** update related packages sections [(#1361)](https://github.com/stdlib-js/stdlib/pull/1361) _(by stdlib-bot)_
-   [`0adcae5`](https://github.com/stdlib-js/stdlib/commit/0adcae51386086e2ef5fb5d78402389cff776deb) - **feat:** update namespace TypeScript declarations [(#1340)](https://github.com/stdlib-js/stdlib/pull/1340) _(by stdlib-bot, Athan Reines)_
-   [`4315e33`](https://github.com/stdlib-js/stdlib/commit/4315e33177a67ff0ca097e7dcf91c40f90380e91) - **docs:** update related packages sections  [(#1320)](https://github.com/stdlib-js/stdlib/pull/1320) _(by stdlib-bot)_
-   [`5f66800`](https://github.com/stdlib-js/stdlib/commit/5f66800facbc7d7b173e77ca1273d89d348ba5f1) - **test:** fix function invocations _(by Athan Reines)_
-   [`7137673`](https://github.com/stdlib-js/stdlib/commit/7137673f0798ef13d7c9fd7becf78e557b1d583b) - **docs:** update related packages sections (#1315) _(by stdlib-bot)_
-   [`0b15ebe`](https://github.com/stdlib-js/stdlib/commit/0b15ebe4d724b7aec7f27c47f4886bdac3adb7ae) - **docs:** update related packages sections  [(#1310)](https://github.com/stdlib-js/stdlib/pull/1310) _(by stdlib-bot)_
-   [`d675ecd`](https://github.com/stdlib-js/stdlib/commit/d675ecd88ddfe5f38e484740e951d7440247201a) - **docs:** update related packages sections (#1309) _(by stdlib-bot)_
-   [`6008b22`](https://github.com/stdlib-js/stdlib/commit/6008b22d8a9ccc5a5066241c4d37f9a70af7d8ae) - **docs:** update related packages sections [(#1308)](https://github.com/stdlib-js/stdlib/pull/1308) _(by stdlib-bot)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.1">

## 0.2.1 (2024-02-05)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.2.0">

## 0.2.0 (2024-02-05)

<section class="features">

### Features

-   [`b620e84`](https://github.com/stdlib-js/stdlib/commit/b620e8408594bf5e78e9f40e62fd3dadc5804459) - add `t` to namespace
-   [`9197455`](https://github.com/stdlib-js/stdlib/commit/91974551988d767dd7811f10b3891461a8d85639) - add `random/strided/t`
-   [`b27bb2d`](https://github.com/stdlib-js/stdlib/commit/b27bb2d0f557570756dde2fc371f3e39b0e2fc6d) - add `rayleigh` to namespace
-   [`3bbc5f8`](https://github.com/stdlib-js/stdlib/commit/3bbc5f8cdf8f7299eb293e0e3901d51880ab990f) - add `random/strided/rayleigh`
-   [`8ca6251`](https://github.com/stdlib-js/stdlib/commit/8ca62510bd6be636a0e622c9c27e67afa27b4632) - add `poisson` to namespace
-   [`026c6a4`](https://github.com/stdlib-js/stdlib/commit/026c6a467724ea41b811062e7bb06882b8a96ca6) - add `random/strided/poisson`
-   [`f0038c4`](https://github.com/stdlib-js/stdlib/commit/f0038c48f0f1b34e9712eef3f7b2ece1de2d97d4) - add `geometric` to namespace
-   [`c0e5681`](https://github.com/stdlib-js/stdlib/commit/c0e5681289d5f1fd32043c3a663874668c1f0a4f) - add `random/strided/geometric`
-   [`6c681e9`](https://github.com/stdlib-js/stdlib/commit/6c681e9d7c3940e4925dadef8cebb742a230518a) - add `chisquare` to namespace
-   [`94d1a50`](https://github.com/stdlib-js/stdlib/commit/94d1a50b7a6874fb2d704250dd6d4e2cd4f867db) - add `random/strided/chisquare`
-   [`4504d0e`](https://github.com/stdlib-js/stdlib/commit/4504d0e04c33392b41adaba1b4d338c4b62fe47e) - add `chi` to namespace
-   [`44c6019`](https://github.com/stdlib-js/stdlib/commit/44c6019287905f969fee74dcfd2a001c298b5834) - add `random/strided/chi`
-   [`2afada7`](https://github.com/stdlib-js/stdlib/commit/2afada793d356fd8f19381129571991ce14f687d) - add `bernoulli` to namespace
-   [`33cdaa6`](https://github.com/stdlib-js/stdlib/commit/33cdaa6d5444b196376584311a40f761c7c461b6) - add `random/strided/bernoulli`
-   [`400646c`](https://github.com/stdlib-js/stdlib/commit/400646c1420098c0415ab63b00c14f37bd0163d7) - add `ternaryFactory` to namespace
-   [`6325b6a`](https://github.com/stdlib-js/stdlib/commit/6325b6a830ea4b78780366d6fd2870acb84ea0a5) - add `random/strided/tools/ternary-factory`
-   [`1db2872`](https://github.com/stdlib-js/stdlib/commit/1db2872f8fc0d16b9a0c164605a7ebe3c4a243c2) - add `random/strided/tools` namespace package
-   [`60d37a0`](https://github.com/stdlib-js/stdlib/commit/60d37a0be8a1507fb561267b794b83c14e61f093) - add `random/array/tools` namespace package
-   [`c152cfa`](https://github.com/stdlib-js/stdlib/commit/c152cfa0019ecfd5eb7d2a6052084524b712d376) - add `random/strided/tools/binary-factory`
-   [`2693e3b`](https://github.com/stdlib-js/stdlib/commit/2693e3b3f0382542a51fc57d78e9ab59e2dc0681) - update namespace TypeScript declarations [(#1287)](https://github.com/stdlib-js/stdlib/pull/1287)
-   [`c3079d2`](https://github.com/stdlib-js/stdlib/commit/c3079d227d7ab83141bc51c42bcf7501766baa86) - add `factory` method and remove options support
-   [`dac0583`](https://github.com/stdlib-js/stdlib/commit/dac0583658491ab15878117caca2a3b337d07cc1) - add `random/strided/tools/unary-factory`
-   [`91ec288`](https://github.com/stdlib-js/stdlib/commit/91ec288023c177b2345bd7b2e6b872596001e36a) - add `hypergeometric` to namespace
-   [`253aef6`](https://github.com/stdlib-js/stdlib/commit/253aef6765642f5f28e8cc910541ff52ad99a625) - add `random/array/hypergeometric`
-   [`4d50760`](https://github.com/stdlib-js/stdlib/commit/4d507606ee79a926453e10cdc0af08dc1ffebb02) - add `frechet` to namespace
-   [`acba49b`](https://github.com/stdlib-js/stdlib/commit/acba49bd268f02b41b374b3276572ce2d5ce312c) - add `random/array/frechet`
-   [`f5112de`](https://github.com/stdlib-js/stdlib/commit/f5112de6c2f787a27d80806bc62c9dc92c99ad6b) - add `triangular` to namespace
-   [`e850b8c`](https://github.com/stdlib-js/stdlib/commit/e850b8c3db40b7720024fc3ff1e5a1a897ece3c6) - add `random/array/triangular`
-   [`f0d8be9`](https://github.com/stdlib-js/stdlib/commit/f0d8be9b07692f164dfed420b829ed76fed71562) - add `random/array/tools/ternary-factory`
-   [`292f38d`](https://github.com/stdlib-js/stdlib/commit/292f38dd36220ad0e6aa869e72a79ff6d3715b88) - add `random/array/tools/ternary`
-   [`b53c12e`](https://github.com/stdlib-js/stdlib/commit/b53c12ee85d4999ea9fdfb063acd387de6182b36) - update namespace TypeScript declarations [(#1264)](https://github.com/stdlib-js/stdlib/pull/1264)
-   [`7e702f6`](https://github.com/stdlib-js/stdlib/commit/7e702f6b3cf0324384c1c81deba54fd159086647) - add `negativeBinomial` to namespace
-   [`d5cfbcc`](https://github.com/stdlib-js/stdlib/commit/d5cfbcc96834a584f77db28e47478243b304e625) - add `random/array/negative-binomial`
-   [`4d448e8`](https://github.com/stdlib-js/stdlib/commit/4d448e82f386383e1d4479338c1abe200dccce8a) - add `binomial` to namespace
-   [`009f80f`](https://github.com/stdlib-js/stdlib/commit/009f80fb224a3d0ff2000e41f83ed87c4303ceb1) - add `random/array/binomial`
-   [`7d9d99e`](https://github.com/stdlib-js/stdlib/commit/7d9d99eeea905f82171ab9da8bf3e89133dd9473) - add `kumaraswamy` to namespace
-   [`308bbb2`](https://github.com/stdlib-js/stdlib/commit/308bbb2c1bddd1dd7388c17210cf0c06483301ed) - add `random/array/kumaraswamy`
-   [`d16c977`](https://github.com/stdlib-js/stdlib/commit/d16c977be12cd338b16b5ed37e431ba67b37a58e) - add `pareto1` to namespace
-   [`8d53fdf`](https://github.com/stdlib-js/stdlib/commit/8d53fdf01b4a0e990eefe64de127177dec9cafcd) - add `random/array/pareto-type1`
-   [`887a59b`](https://github.com/stdlib-js/stdlib/commit/887a59b48250609f0d6cc3e8e0ef7a34eb56f5fb) - add `weibull` to namespace
-   [`953c172`](https://github.com/stdlib-js/stdlib/commit/953c1722b2e528e35e74d1ccf01d6baa470bfd45) - add `random/array/weibull`
-   [`a206dd9`](https://github.com/stdlib-js/stdlib/commit/a206dd9253852b0d9331546fdd8256c237c92155) - add `logistic` to namespace
-   [`58f2aa6`](https://github.com/stdlib-js/stdlib/commit/58f2aa6f9cae04842bccdc89e8ef9f8b0f26059c) - add `random/array/logistic`
-   [`3e3acc5`](https://github.com/stdlib-js/stdlib/commit/3e3acc599be974a4137fcf12e9dba1ffdf0c23cc) - add `levy` to namespace
-   [`a611e68`](https://github.com/stdlib-js/stdlib/commit/a611e68b61b381fa903ba5f0d6e5d044c871d7ed) - add `random/array/levy`
-   [`8782a72`](https://github.com/stdlib-js/stdlib/commit/8782a724e046839ac92195abae10d2b117c414f2) - add `levy` to namespace
-   [`348ae61`](https://github.com/stdlib-js/stdlib/commit/348ae6171ade6beff52bbd733858f0cbf7830fce) - add `random/array/laplace`
-   [`ade8a79`](https://github.com/stdlib-js/stdlib/commit/ade8a79f121c39cf3e681bf0d813b3b75140dba0) - add `gumbel` to namespace
-   [`36fcc2c`](https://github.com/stdlib-js/stdlib/commit/36fcc2cf31116531669ab158afb230df133dccb7) - add `random/array/gumbel`
-   [`4b0fd4a`](https://github.com/stdlib-js/stdlib/commit/4b0fd4a6522a19b9ea16d5f65d23e6da332ec1b4) - add `f` to namespace
-   [`908acbf`](https://github.com/stdlib-js/stdlib/commit/908acbfb3eac065957b4220d163f02a79cdbb9fb) - add `random/array/f`
-   [`bc031ff`](https://github.com/stdlib-js/stdlib/commit/bc031ffeb9e8272b3f2300d196e6bb05a379842e) - add `random/array/erlang`
-   [`f471aa8`](https://github.com/stdlib-js/stdlib/commit/f471aa8bd2612f065f76352992a50e5552c3b99c) - add `cauchy` to namespace
-   [`fac73ce`](https://github.com/stdlib-js/stdlib/commit/fac73ce704dd5cef2e6f13f280a05b90e6e79785) - add `random/array/cauchy`
-   [`8195bcf`](https://github.com/stdlib-js/stdlib/commit/8195bcfd98a9b7ba92cbd62089a826327cdaafef) - add `assign` method and refactor implementation
-   [`74c1844`](https://github.com/stdlib-js/stdlib/commit/74c1844fb2d1c0abafdd7e53af4feafafa77f005) - add `assign` method and refactor implementation
-   [`31a0fe5`](https://github.com/stdlib-js/stdlib/commit/31a0fe577c676461cf238f02e45c31191414548c) - add `assign` method and refactor implementation
-   [`460cd4b`](https://github.com/stdlib-js/stdlib/commit/460cd4b900fccc651cf20420d5398923bf005014) - add `assign` method and refactor implementation
-   [`1c9efcd`](https://github.com/stdlib-js/stdlib/commit/1c9efcd64cc926ae60a382b299e3c7b45fa1f614) - add `assign` method and refactor implementation
-   [`d6b2dfd`](https://github.com/stdlib-js/stdlib/commit/d6b2dfdefa617027bfcd14310f2fddc9db49a6c7) - add `assign` method and refactor implementation
-   [`a081381`](https://github.com/stdlib-js/stdlib/commit/a08138142b3e360eb10e0df384aa9c106ccb03da) - add `assign` method and refactor implementation
-   [`aaecfda`](https://github.com/stdlib-js/stdlib/commit/aaecfda9aaec14df020369fcfff24f3e09248fd7) - add `assign` method and refactor implementation
-   [`99b4053`](https://github.com/stdlib-js/stdlib/commit/99b40539862bdea8adc8e75ea23c42130c5234bd) - add `assign` method and refactor implementation
-   [`68413e0`](https://github.com/stdlib-js/stdlib/commit/68413e05376206b18c4ff8662a8568a189dad77e) - update namespace TypeScript declarations [(#1221)](https://github.com/stdlib-js/stdlib/pull/1221)
-   [`2f452f3`](https://github.com/stdlib-js/stdlib/commit/2f452f3d925b8a5645a7871df83e38b837f73d27) - add an `assign` method and refactor implementation
-   [`7a98dfa`](https://github.com/stdlib-js/stdlib/commit/7a98dfa5293d960181b1bf4185aa65d9085e0f6f) - add `random/array/tools/binary-factory`
-   [`84cf136`](https://github.com/stdlib-js/stdlib/commit/84cf13686d9559067a6c2d84ba10fb42a4b206d8) - add `random/array/tools/binary`
-   [`9c7c048`](https://github.com/stdlib-js/stdlib/commit/9c7c0482a77b67977ce71cc6060f53580e58e935) - add `t` to namespace
-   [`8aaf98e`](https://github.com/stdlib-js/stdlib/commit/8aaf98e0623912b99460f211f6b253c56e2ddf42) - add `random/array/t`
-   [`e26c656`](https://github.com/stdlib-js/stdlib/commit/e26c656f1f5b73dccf37c9e6c46d4b59c26829ad) - add `chisquare` to namespace
-   [`611a594`](https://github.com/stdlib-js/stdlib/commit/611a5947270d6e4f8907135a2a8e9fce33380c3d) - add `random/array/chisquare`
-   [`d73025b`](https://github.com/stdlib-js/stdlib/commit/d73025bdc7a4b26ef124113a65eea62ca8b3b749) - add `chi` to namespace
-   [`8ffb082`](https://github.com/stdlib-js/stdlib/commit/8ffb08252555502cc7ce1bec3ed9ec6fdb151c0d) - add `random/array/chi`
-   [`682a096`](https://github.com/stdlib-js/stdlib/commit/682a096690fec6cfb8a860472d7593bff7f038cd) - add `rayleigh` to namespace
-   [`2dc4be8`](https://github.com/stdlib-js/stdlib/commit/2dc4be898dd31d35c294c7bc8f35753313e64332) - add `random/array/rayleigh`
-   [`de69dd0`](https://github.com/stdlib-js/stdlib/commit/de69dd0ec0094842392412048a057230db65adbd) - add `poisson` to namespace
-   [`f4faaae`](https://github.com/stdlib-js/stdlib/commit/f4faaae5b81c94b556e0e96d92a293ee3c0e1a1a) - add `random/array/poisson`
-   [`f989e7d`](https://github.com/stdlib-js/stdlib/commit/f989e7d2f2f2bd7017bd58b254b454982c0ebd5a) - add `bernoulli` to namespace
-   [`6dc58d9`](https://github.com/stdlib-js/stdlib/commit/6dc58d9d193577f80ee2dbc018a000ff2b8eba39) - add `random/array/bernoulli`
-   [`adad88f`](https://github.com/stdlib-js/stdlib/commit/adad88f973ec800c62905d830608aac1903c8774) - refactor to support top-level output array default and currying PRNG parameters
-   [`4ea8f4b`](https://github.com/stdlib-js/stdlib/commit/4ea8f4ba6ed0fee219b0ecc6118b2ff20cd1f047) - add `random/array/tools/nullary`
-   [`a30b64a`](https://github.com/stdlib-js/stdlib/commit/a30b64ab2c2591d0cf662a31807d537ad0f70b05) - add `random/array/tools/unary-factory`
-   [`9f1aad3`](https://github.com/stdlib-js/stdlib/commit/9f1aad375e069268f01e105f4543852e88d1cc25) - add `random/array/tools/unary`
-   [`e25b23b`](https://github.com/stdlib-js/stdlib/commit/e25b23b917ee6e387722db7192d22e4a70222da0) - rename type definitions for array and ndarray data types
-   [`b1e4cca`](https://github.com/stdlib-js/stdlib/commit/b1e4cca30147188064b2275a0242a0334befbcd1) - update namespace exports

</section>

<!-- /.features -->

<section class="bug-fixes">

### Bug Fixes

-   [`c89624e`](https://github.com/stdlib-js/stdlib/commit/c89624e9cf1cf779ac516881e224ddeb1e003f14) - improve type specificity
-   [`80199f6`](https://github.com/stdlib-js/stdlib/commit/80199f66ace06d749d9c736189cb6825ddfbaa56) - update variable name to reflect arity
-   [`76fedac`](https://github.com/stdlib-js/stdlib/commit/76fedac7c077e6c4464fc19c8babf0e51dfda187) - update data type alias
-   [`3baf817`](https://github.com/stdlib-js/stdlib/commit/3baf8170f59557bb8db9100713e5659d1dbb5757) - update keywords

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`c3079d2`](https://github.com/stdlib-js/stdlib/commit/c3079d227d7ab83141bc51c42bcf7501766baa86): use `factory` method for seeding PRNG

    -   To migrate, users should use the `factory` method to create a
        seeded PRNG. Previously, users could provide options directly to
        the main export and `ndarray` method. This capability has been
        replaced with a `factory` method. This change aligns with
        conventions found elsewhere in the project where the main export
        uses an unseeded PRNG, and, in order to create a seeded variant,
        one needs to use a factory function.

-   [`adad88f`](https://github.com/stdlib-js/stdlib/commit/adad88f973ec800c62905d830608aac1903c8774): update signatures to supporting currying

    -   To migrate, users should (1) specify a default output array data
        type when invoking the main export, instead of the returned function,
        and (2) specify a PRNG parameter when invoking the returned function
        in order to curry PRNG parameters.
        Specifying an output array data type can still be done via the
        returned function; however, instead of a positional argument, one
        needs to provide an options object.

-   [`e25b23b`](https://github.com/stdlib-js/stdlib/commit/e25b23b917ee6e387722db7192d22e4a70222da0): rename type definitions for array and ndarray data types

    -   In order to migrate, users should update their implementations to
        use the latest naming conventions. The affected type definitions
        are aliases for individual data type strings, so their should be
        no behavioral changes.

</section>

<!-- /.breaking-changes -->

<section class="issues">

### Closed Issues

A total of 20 issues were closed in this release:

[#870](https://github.com/stdlib-js/stdlib/issues/870), [#880](https://github.com/stdlib-js/stdlib/issues/880), [#882](https://github.com/stdlib-js/stdlib/issues/882), [#883](https://github.com/stdlib-js/stdlib/issues/883), [#884](https://github.com/stdlib-js/stdlib/issues/884), [#885](https://github.com/stdlib-js/stdlib/issues/885), [#886](https://github.com/stdlib-js/stdlib/issues/886), [#887](https://github.com/stdlib-js/stdlib/issues/887), [#888](https://github.com/stdlib-js/stdlib/issues/888), [#889](https://github.com/stdlib-js/stdlib/issues/889), [#890](https://github.com/stdlib-js/stdlib/issues/890), [#932](https://github.com/stdlib-js/stdlib/issues/932), [#935](https://github.com/stdlib-js/stdlib/issues/935), [#937](https://github.com/stdlib-js/stdlib/issues/937), [#939](https://github.com/stdlib-js/stdlib/issues/939), [#941](https://github.com/stdlib-js/stdlib/issues/941), [#943](https://github.com/stdlib-js/stdlib/issues/943), [#945](https://github.com/stdlib-js/stdlib/issues/945), [#947](https://github.com/stdlib-js/stdlib/issues/947), [#949](https://github.com/stdlib-js/stdlib/issues/949)

</section>

<!-- /.issues -->

<section class="commits">

### Commits

<details>

-   [`18c2502`](https://github.com/stdlib-js/stdlib/commit/18c250220e23aa825b05ec5898927ea6b261ca43) - **docs:** update related packages sections [(#1303)](https://github.com/stdlib-js/stdlib/pull/1303) _(by stdlib-bot)_
-   [`97992ab`](https://github.com/stdlib-js/stdlib/commit/97992abedd7d2a3d6daf644c6b12e979642c6783) - **docs:** update related packages sections [(#1301)](https://github.com/stdlib-js/stdlib/pull/1301) _(by stdlib-bot)_
-   [`3ca6b26`](https://github.com/stdlib-js/stdlib/commit/3ca6b26a90ae47fef9303d47b754c8e1af888c0f) - **docs:** update namespace table of contents [(#1297)](https://github.com/stdlib-js/stdlib/pull/1297) _(by stdlib-bot, Philipp Burckhardt)_
-   [`ed8a998`](https://github.com/stdlib-js/stdlib/commit/ed8a998f95cebd180f2a974548379a6335988970) - **docs:** update related packages sections [(#1296)](https://github.com/stdlib-js/stdlib/pull/1296) _(by stdlib-bot)_
-   [`42b1c7e`](https://github.com/stdlib-js/stdlib/commit/42b1c7e18fadf89854f359a3a01cf37c66dd66cc) - **docs:** update related packages sections [(#1290)](https://github.com/stdlib-js/stdlib/pull/1290) _(by stdlib-bot)_
-   [`b620e84`](https://github.com/stdlib-js/stdlib/commit/b620e8408594bf5e78e9f40e62fd3dadc5804459) - **feat:** add `t` to namespace _(by Athan Reines)_
-   [`9197455`](https://github.com/stdlib-js/stdlib/commit/91974551988d767dd7811f10b3891461a8d85639) - **feat:** add `random/strided/t` _(by Athan Reines)_
-   [`b27bb2d`](https://github.com/stdlib-js/stdlib/commit/b27bb2d0f557570756dde2fc371f3e39b0e2fc6d) - **feat:** add `rayleigh` to namespace _(by Athan Reines)_
-   [`3bbc5f8`](https://github.com/stdlib-js/stdlib/commit/3bbc5f8cdf8f7299eb293e0e3901d51880ab990f) - **feat:** add `random/strided/rayleigh` _(by Athan Reines)_
-   [`8ca6251`](https://github.com/stdlib-js/stdlib/commit/8ca62510bd6be636a0e622c9c27e67afa27b4632) - **feat:** add `poisson` to namespace _(by Athan Reines)_
-   [`026c6a4`](https://github.com/stdlib-js/stdlib/commit/026c6a467724ea41b811062e7bb06882b8a96ca6) - **feat:** add `random/strided/poisson` _(by Athan Reines)_
-   [`86ec425`](https://github.com/stdlib-js/stdlib/commit/86ec4256df3db8e101942945ffc43c66972355ef) - **test:** fix strides _(by Athan Reines)_
-   [`3561fb0`](https://github.com/stdlib-js/stdlib/commit/3561fb03b05dcf502b5d98eab06575f26513a48b) - **test:** fix strides _(by Athan Reines)_
-   [`a1c2350`](https://github.com/stdlib-js/stdlib/commit/a1c2350baf325c85fd34e071f234cc1a63519f00) - **test:** fix strides _(by Athan Reines)_
-   [`97c297a`](https://github.com/stdlib-js/stdlib/commit/97c297a0b359f77d79b20ec45bb068f9917cc6a8) - **test:** fix strides _(by Athan Reines)_
-   [`1df0360`](https://github.com/stdlib-js/stdlib/commit/1df03604e59abb35741ba3746a648f6343056e6d) - **test:** fix strides _(by Athan Reines)_
-   [`f0038c4`](https://github.com/stdlib-js/stdlib/commit/f0038c48f0f1b34e9712eef3f7b2ece1de2d97d4) - **feat:** add `geometric` to namespace _(by Athan Reines)_
-   [`c0e5681`](https://github.com/stdlib-js/stdlib/commit/c0e5681289d5f1fd32043c3a663874668c1f0a4f) - **feat:** add `random/strided/geometric` _(by Athan Reines)_
-   [`6c681e9`](https://github.com/stdlib-js/stdlib/commit/6c681e9d7c3940e4925dadef8cebb742a230518a) - **feat:** add `chisquare` to namespace _(by Athan Reines)_
-   [`94d1a50`](https://github.com/stdlib-js/stdlib/commit/94d1a50b7a6874fb2d704250dd6d4e2cd4f867db) - **feat:** add `random/strided/chisquare` _(by Athan Reines)_
-   [`4504d0e`](https://github.com/stdlib-js/stdlib/commit/4504d0e04c33392b41adaba1b4d338c4b62fe47e) - **feat:** add `chi` to namespace _(by Athan Reines)_
-   [`44c6019`](https://github.com/stdlib-js/stdlib/commit/44c6019287905f969fee74dcfd2a001c298b5834) - **feat:** add `random/strided/chi` _(by Athan Reines)_
-   [`2afada7`](https://github.com/stdlib-js/stdlib/commit/2afada793d356fd8f19381129571991ce14f687d) - **feat:** add `bernoulli` to namespace _(by Athan Reines)_
-   [`33cdaa6`](https://github.com/stdlib-js/stdlib/commit/33cdaa6d5444b196376584311a40f761c7c461b6) - **feat:** add `random/strided/bernoulli` _(by Athan Reines)_
-   [`ddaba8a`](https://github.com/stdlib-js/stdlib/commit/ddaba8ad9d4111a87918caf1b9dda196a0b6eedd) - **test:** update parameter values _(by Athan Reines)_
-   [`95699ed`](https://github.com/stdlib-js/stdlib/commit/95699ed0481d885a0b8b3fcf7f95806567ff522e) - **chore:** add keyword _(by Athan Reines)_
-   [`c8c6eb6`](https://github.com/stdlib-js/stdlib/commit/c8c6eb665f758d191b80ec17a7be2adab7db0c26) - **bench:** rename variable and update parameter value _(by Athan Reines)_
-   [`2b9929f`](https://github.com/stdlib-js/stdlib/commit/2b9929f97c18a730f8b5adc540c384c3d9aee54d) - **docs:** update example values _(by Athan Reines)_
-   [`7b91fb7`](https://github.com/stdlib-js/stdlib/commit/7b91fb7b1d39d20e69583b4aa4f83106b719c137) - **docs:** fix description _(by Athan Reines)_
-   [`3e86122`](https://github.com/stdlib-js/stdlib/commit/3e861220f5a44afbd0cdd5edce73052fca43eedd) - **docs:** fix grammar _(by Athan Reines)_
-   [`3a197bd`](https://github.com/stdlib-js/stdlib/commit/3a197bd180d60b60aab185810e5a25f07b2b6e1a) - **test:** fix description _(by Athan Reines)_
-   [`c89624e`](https://github.com/stdlib-js/stdlib/commit/c89624e9cf1cf779ac516881e224ddeb1e003f14) - **fix:** improve type specificity _(by Athan Reines)_
-   [`35a2357`](https://github.com/stdlib-js/stdlib/commit/35a2357a766167d78ad2d5d20bad8c5dd9d605f9) - **docs:** fix description _(by Athan Reines)_
-   [`5d89d4a`](https://github.com/stdlib-js/stdlib/commit/5d89d4a68d4aa3cce4f0d9400f0f8f777bfb69e4) - **test:** add attribute tests _(by Athan Reines)_
-   [`400646c`](https://github.com/stdlib-js/stdlib/commit/400646c1420098c0415ab63b00c14f37bd0163d7) - **feat:** add `ternaryFactory` to namespace _(by Athan Reines)_
-   [`6325b6a`](https://github.com/stdlib-js/stdlib/commit/6325b6a830ea4b78780366d6fd2870acb84ea0a5) - **feat:** add `random/strided/tools/ternary-factory` _(by Athan Reines)_
-   [`1db2872`](https://github.com/stdlib-js/stdlib/commit/1db2872f8fc0d16b9a0c164605a7ebe3c4a243c2) - **feat:** add `random/strided/tools` namespace package _(by Athan Reines)_
-   [`4ee18f5`](https://github.com/stdlib-js/stdlib/commit/4ee18f54a469c3951f41323e6cdce6973c234e0a) - **docs:** fix copyright year _(by Athan Reines)_
-   [`60d37a0`](https://github.com/stdlib-js/stdlib/commit/60d37a0be8a1507fb561267b794b83c14e61f093) - **feat:** add `random/array/tools` namespace package _(by Athan Reines)_
-   [`c152cfa`](https://github.com/stdlib-js/stdlib/commit/c152cfa0019ecfd5eb7d2a6052084524b712d376) - **feat:** add `random/strided/tools/binary-factory` _(by Athan Reines)_
-   [`e568861`](https://github.com/stdlib-js/stdlib/commit/e568861a03141691dbf20f56bcdcfde4f3cca43a) - **docs:** fix parameter name _(by Athan Reines)_
-   [`2693e3b`](https://github.com/stdlib-js/stdlib/commit/2693e3b3f0382542a51fc57d78e9ab59e2dc0681) - **feat:** update namespace TypeScript declarations [(#1287)](https://github.com/stdlib-js/stdlib/pull/1287) _(by stdlib-bot, Athan Reines)_
-   [`08e9376`](https://github.com/stdlib-js/stdlib/commit/08e9376a82d3641f0482a83c7d8ad39ce8a63ae6) - **docs:** update namespace table of contents [(#1288)](https://github.com/stdlib-js/stdlib/pull/1288) _(by stdlib-bot, Athan Reines)_
-   [`c3079d2`](https://github.com/stdlib-js/stdlib/commit/c3079d227d7ab83141bc51c42bcf7501766baa86) - **feat:** add `factory` method and remove options support _(by Athan Reines)_
-   [`dac0583`](https://github.com/stdlib-js/stdlib/commit/dac0583658491ab15878117caca2a3b337d07cc1) - **feat:** add `random/strided/tools/unary-factory` _(by Athan Reines)_
-   [`720902c`](https://github.com/stdlib-js/stdlib/commit/720902cd273cc5d05dc3ce42d23244db765d516b) - **docs:** remove unnecessary `require` statement _(by Athan Reines)_
-   [`322d1ca`](https://github.com/stdlib-js/stdlib/commit/322d1cac1bb150c548b5ad3b3086acd8e74a7bbd) - **docs:** update namespace table of contents [(#1284)](https://github.com/stdlib-js/stdlib/pull/1284) _(by stdlib-bot, Philipp Burckhardt)_
-   [`2786c2e`](https://github.com/stdlib-js/stdlib/commit/2786c2e5c22e189f1d29eabc5a2225f3b728f051) - **docs:** update related packages sections [(#1283)](https://github.com/stdlib-js/stdlib/pull/1283) _(by stdlib-bot)_
-   [`afa953b`](https://github.com/stdlib-js/stdlib/commit/afa953bde057e396e614ea35b7a32fd5b77479ea) - **docs:** update related packages sections [(#1281)](https://github.com/stdlib-js/stdlib/pull/1281) _(by stdlib-bot)_
-   [`20b6f2f`](https://github.com/stdlib-js/stdlib/commit/20b6f2f1e7f623fb7e987fbe648e4def2112dc12) - **docs:** update related packages sections [(#1280)](https://github.com/stdlib-js/stdlib/pull/1280) _(by stdlib-bot)_
-   [`4448d6e`](https://github.com/stdlib-js/stdlib/commit/4448d6eb63a6b693e2140d2b29be54765850c31c) - **docs:** update related packages sections [(#1277)](https://github.com/stdlib-js/stdlib/pull/1277) _(by stdlib-bot)_
-   [`f04074a`](https://github.com/stdlib-js/stdlib/commit/f04074abd0c151f1b92c58b8cd71ecb9279803e0) - **docs:** update related packages sections [(#1276)](https://github.com/stdlib-js/stdlib/pull/1276) _(by stdlib-bot)_
-   [`a2158dd`](https://github.com/stdlib-js/stdlib/commit/a2158dda7817e0cd367300884a6c78fd0dcbf4c0) - **docs:** update related packages sections [(#1275)](https://github.com/stdlib-js/stdlib/pull/1275) _(by stdlib-bot)_
-   [`ebc4ef4`](https://github.com/stdlib-js/stdlib/commit/ebc4ef41984741deef8134ed7fa3003f5a1e2e71) - **docs:** update related packages sections [(#1273)](https://github.com/stdlib-js/stdlib/pull/1273) _(by stdlib-bot)_
-   [`c5ec686`](https://github.com/stdlib-js/stdlib/commit/c5ec686da087534151644c4fe060656dbec0d5c8) - **docs:** update related packages sections [(#1272)](https://github.com/stdlib-js/stdlib/pull/1272) _(by stdlib-bot)_
-   [`1e909db`](https://github.com/stdlib-js/stdlib/commit/1e909dbafa41bfc46d3f5525a73b5f46cd7a5392) - **docs:** update related packages sections [(#1267)](https://github.com/stdlib-js/stdlib/pull/1267) _(by stdlib-bot)_
-   [`91ec288`](https://github.com/stdlib-js/stdlib/commit/91ec288023c177b2345bd7b2e6b872596001e36a) - **feat:** add `hypergeometric` to namespace _(by Athan Reines)_
-   [`253aef6`](https://github.com/stdlib-js/stdlib/commit/253aef6765642f5f28e8cc910541ff52ad99a625) - **feat:** add `random/array/hypergeometric` _(by Athan Reines)_
-   [`4d50760`](https://github.com/stdlib-js/stdlib/commit/4d507606ee79a926453e10cdc0af08dc1ffebb02) - **feat:** add `frechet` to namespace _(by Athan Reines)_
-   [`acba49b`](https://github.com/stdlib-js/stdlib/commit/acba49bd268f02b41b374b3276572ce2d5ce312c) - **feat:** add `random/array/frechet` _(by Athan Reines)_
-   [`f5112de`](https://github.com/stdlib-js/stdlib/commit/f5112de6c2f787a27d80806bc62c9dc92c99ad6b) - **feat:** add `triangular` to namespace _(by Athan Reines)_
-   [`e850b8c`](https://github.com/stdlib-js/stdlib/commit/e850b8c3db40b7720024fc3ff1e5a1a897ece3c6) - **feat:** add `random/array/triangular` _(by Athan Reines)_
-   [`f0d8be9`](https://github.com/stdlib-js/stdlib/commit/f0d8be9b07692f164dfed420b829ed76fed71562) - **feat:** add `random/array/tools/ternary-factory` _(by Athan Reines)_
-   [`292f38d`](https://github.com/stdlib-js/stdlib/commit/292f38dd36220ad0e6aa869e72a79ff6d3715b88) - **feat:** add `random/array/tools/ternary` _(by Athan Reines)_
-   [`80199f6`](https://github.com/stdlib-js/stdlib/commit/80199f66ace06d749d9c736189cb6825ddfbaa56) - **fix:** update variable name to reflect arity _(by Athan Reines)_
-   [`29add29`](https://github.com/stdlib-js/stdlib/commit/29add29d5f1d5dd386e3b79d71772790c4be38cc) - **docs:** fix parameter descriptions and fix tests _(by Athan Reines)_
-   [`250aa76`](https://github.com/stdlib-js/stdlib/commit/250aa76b126ab882b83ac1f2f70e45598fdea9af) - **test:** fix tests to ensure testing intended behavior _(by Athan Reines)_
-   [`ab6ab4f`](https://github.com/stdlib-js/stdlib/commit/ab6ab4fd37f9090e3cbf95bc311668202f7801ae) - **docs:** update namespace table of contents [(#1265)](https://github.com/stdlib-js/stdlib/pull/1265) _(by stdlib-bot, Athan Reines)_
-   [`b53c12e`](https://github.com/stdlib-js/stdlib/commit/b53c12ee85d4999ea9fdfb063acd387de6182b36) - **feat:** update namespace TypeScript declarations [(#1264)](https://github.com/stdlib-js/stdlib/pull/1264) _(by stdlib-bot, Athan Reines)_
-   [`4368c3b`](https://github.com/stdlib-js/stdlib/commit/4368c3b25edf5b315684db874ea81d1812de0adb) - **chore:** fix variable names _(by Philipp Burckhardt)_
-   [`6e77487`](https://github.com/stdlib-js/stdlib/commit/6e774879dec6cc6dfb006b2d153b7b80bfe33dec) - **chore:** fix variable names _(by Philipp Burckhardt)_
-   [`d2d2b70`](https://github.com/stdlib-js/stdlib/commit/d2d2b707e954b400b72b7b9f158164d026d09636) - **docs:** update related packages sections [(#1261)](https://github.com/stdlib-js/stdlib/pull/1261) _(by stdlib-bot)_
-   [`8598798`](https://github.com/stdlib-js/stdlib/commit/8598798063b7962971d48148afd2f0d46393de12) - **docs:** updated related packages _(by Athan Reines)_
-   [`50a54c7`](https://github.com/stdlib-js/stdlib/commit/50a54c7e13d3378343b87959a03ede0b22b5b743) - **docs:** update descriptions _(by Athan Reines)_
-   [`7e702f6`](https://github.com/stdlib-js/stdlib/commit/7e702f6b3cf0324384c1c81deba54fd159086647) - **feat:** add `negativeBinomial` to namespace _(by Athan Reines)_
-   [`d5cfbcc`](https://github.com/stdlib-js/stdlib/commit/d5cfbcc96834a584f77db28e47478243b304e625) - **feat:** add `random/array/negative-binomial` _(by Athan Reines)_
-   [`4d448e8`](https://github.com/stdlib-js/stdlib/commit/4d448e82f386383e1d4479338c1abe200dccce8a) - **feat:** add `binomial` to namespace _(by Athan Reines)_
-   [`009f80f`](https://github.com/stdlib-js/stdlib/commit/009f80fb224a3d0ff2000e41f83ed87c4303ceb1) - **feat:** add `random/array/binomial` _(by Athan Reines)_
-   [`7d9d99e`](https://github.com/stdlib-js/stdlib/commit/7d9d99eeea905f82171ab9da8bf3e89133dd9473) - **feat:** add `kumaraswamy` to namespace _(by Athan Reines)_
-   [`308bbb2`](https://github.com/stdlib-js/stdlib/commit/308bbb2c1bddd1dd7388c17210cf0c06483301ed) - **feat:** add `random/array/kumaraswamy` _(by Athan Reines)_
-   [`d16c977`](https://github.com/stdlib-js/stdlib/commit/d16c977be12cd338b16b5ed37e431ba67b37a58e) - **feat:** add `pareto1` to namespace _(by Athan Reines)_
-   [`8d53fdf`](https://github.com/stdlib-js/stdlib/commit/8d53fdf01b4a0e990eefe64de127177dec9cafcd) - **feat:** add `random/array/pareto-type1` _(by Athan Reines)_
-   [`887a59b`](https://github.com/stdlib-js/stdlib/commit/887a59b48250609f0d6cc3e8e0ef7a34eb56f5fb) - **feat:** add `weibull` to namespace _(by Athan Reines)_
-   [`953c172`](https://github.com/stdlib-js/stdlib/commit/953c1722b2e528e35e74d1ccf01d6baa470bfd45) - **feat:** add `random/array/weibull` _(by Athan Reines)_
-   [`e99e4bc`](https://github.com/stdlib-js/stdlib/commit/e99e4bc77b1f24bf17daa3c4e38240e3ecf4f2ae) - **docs:** update related packages _(by Athan Reines)_
-   [`a206dd9`](https://github.com/stdlib-js/stdlib/commit/a206dd9253852b0d9331546fdd8256c237c92155) - **feat:** add `logistic` to namespace _(by Athan Reines)_
-   [`58f2aa6`](https://github.com/stdlib-js/stdlib/commit/58f2aa6f9cae04842bccdc89e8ef9f8b0f26059c) - **feat:** add `random/array/logistic` _(by Athan Reines)_
-   [`3e3acc5`](https://github.com/stdlib-js/stdlib/commit/3e3acc599be974a4137fcf12e9dba1ffdf0c23cc) - **feat:** add `levy` to namespace _(by Athan Reines)_
-   [`a611e68`](https://github.com/stdlib-js/stdlib/commit/a611e68b61b381fa903ba5f0d6e5d044c871d7ed) - **feat:** add `random/array/levy` _(by Athan Reines)_
-   [`a333a43`](https://github.com/stdlib-js/stdlib/commit/a333a4367cc68ec94dfaa5c327af38f5735bd14b) - **refactor:** rename parameter _(by Athan Reines)_
-   [`d033f3e`](https://github.com/stdlib-js/stdlib/commit/d033f3ede73f369832e0d7d7b85c4a8c6b75c795) - **refactor:** rename parameter _(by Athan Reines)_
-   [`8782a72`](https://github.com/stdlib-js/stdlib/commit/8782a724e046839ac92195abae10d2b117c414f2) - **feat:** add `levy` to namespace _(by Athan Reines)_
-   [`348ae61`](https://github.com/stdlib-js/stdlib/commit/348ae6171ade6beff52bbd733858f0cbf7830fce) - **feat:** add `random/array/laplace` _(by Athan Reines)_
-   [`ade8a79`](https://github.com/stdlib-js/stdlib/commit/ade8a79f121c39cf3e681bf0d813b3b75140dba0) - **feat:** add `gumbel` to namespace _(by Athan Reines)_
-   [`36fcc2c`](https://github.com/stdlib-js/stdlib/commit/36fcc2cf31116531669ab158afb230df133dccb7) - **feat:** add `random/array/gumbel` _(by Athan Reines)_
-   [`4b0fd4a`](https://github.com/stdlib-js/stdlib/commit/4b0fd4a6522a19b9ea16d5f65d23e6da332ec1b4) - **feat:** add `f` to namespace _(by Athan Reines)_
-   [`908acbf`](https://github.com/stdlib-js/stdlib/commit/908acbfb3eac065957b4220d163f02a79cdbb9fb) - **feat:** add `random/array/f` _(by Athan Reines)_
-   [`bc031ff`](https://github.com/stdlib-js/stdlib/commit/bc031ffeb9e8272b3f2300d196e6bb05a379842e) - **feat:** add `random/array/erlang` _(by Athan Reines)_
-   [`f471aa8`](https://github.com/stdlib-js/stdlib/commit/f471aa8bd2612f065f76352992a50e5552c3b99c) - **feat:** add `cauchy` to namespace _(by Athan Reines)_
-   [`fac73ce`](https://github.com/stdlib-js/stdlib/commit/fac73ce704dd5cef2e6f13f280a05b90e6e79785) - **feat:** add `random/array/cauchy` _(by Athan Reines)_
-   [`1205885`](https://github.com/stdlib-js/stdlib/commit/1205885e8d9f427f7b78abfe8f95b5d03cdc180c) - **chore:** remove obsolete files _(by Athan Reines)_
-   [`8195bcf`](https://github.com/stdlib-js/stdlib/commit/8195bcfd98a9b7ba92cbd62089a826327cdaafef) - **feat:** add `assign` method and refactor implementation _(by Athan Reines)_
-   [`74c1844`](https://github.com/stdlib-js/stdlib/commit/74c1844fb2d1c0abafdd7e53af4feafafa77f005) - **feat:** add `assign` method and refactor implementation _(by Athan Reines)_
-   [`31a0fe5`](https://github.com/stdlib-js/stdlib/commit/31a0fe577c676461cf238f02e45c31191414548c) - **feat:** add `assign` method and refactor implementation _(by Athan Reines)_
-   [`460cd4b`](https://github.com/stdlib-js/stdlib/commit/460cd4b900fccc651cf20420d5398923bf005014) - **feat:** add `assign` method and refactor implementation _(by Athan Reines)_
-   [`1c9efcd`](https://github.com/stdlib-js/stdlib/commit/1c9efcd64cc926ae60a382b299e3c7b45fa1f614) - **feat:** add `assign` method and refactor implementation _(by Athan Reines)_
-   [`d6b2dfd`](https://github.com/stdlib-js/stdlib/commit/d6b2dfdefa617027bfcd14310f2fddc9db49a6c7) - **feat:** add `assign` method and refactor implementation _(by Athan Reines)_
-   [`a081381`](https://github.com/stdlib-js/stdlib/commit/a08138142b3e360eb10e0df384aa9c106ccb03da) - **feat:** add `assign` method and refactor implementation _(by Athan Reines)_
-   [`aaecfda`](https://github.com/stdlib-js/stdlib/commit/aaecfda9aaec14df020369fcfff24f3e09248fd7) - **feat:** add `assign` method and refactor implementation _(by Athan Reines)_
-   [`99b4053`](https://github.com/stdlib-js/stdlib/commit/99b40539862bdea8adc8e75ea23c42130c5234bd) - **feat:** add `assign` method and refactor implementation _(by Athan Reines)_
-   [`68413e0`](https://github.com/stdlib-js/stdlib/commit/68413e05376206b18c4ff8662a8568a189dad77e) - **feat:** update namespace TypeScript declarations [(#1221)](https://github.com/stdlib-js/stdlib/pull/1221) _(by stdlib-bot, Philipp Burckhardt)_
-   [`b0e9fff`](https://github.com/stdlib-js/stdlib/commit/b0e9fff07ec1fcf5bc1e9f0e6a7348c44f9f73d6) - **test:** remove non-general tests _(by Athan Reines)_
-   [`227c104`](https://github.com/stdlib-js/stdlib/commit/227c1049f9b0dbb284b2a2333af14df7a67fba5c) - **docs:** update notes and descriptions and add missing import _(by Athan Reines)_
-   [`2f452f3`](https://github.com/stdlib-js/stdlib/commit/2f452f3d925b8a5645a7871df83e38b837f73d27) - **feat:** add an `assign` method and refactor implementation _(by Athan Reines)_
-   [`09fe11b`](https://github.com/stdlib-js/stdlib/commit/09fe11bbcb5b44d1de82917ffa931f8142ac6418) - **bench:** update require path _(by Athan Reines)_
-   [`96489fa`](https://github.com/stdlib-js/stdlib/commit/96489fa603a2920bef92fb38b49ca9468851714d) - **docs:** update namespace table of contents [(#1251)](https://github.com/stdlib-js/stdlib/pull/1251) _(by stdlib-bot, Philipp Burckhardt)_
-   [`7a98dfa`](https://github.com/stdlib-js/stdlib/commit/7a98dfa5293d960181b1bf4185aa65d9085e0f6f) - **feat:** add `random/array/tools/binary-factory` _(by Athan Reines)_
-   [`6b16ced`](https://github.com/stdlib-js/stdlib/commit/6b16cedd5f14dc79efe64575aa4658a01e7f7097) - **docs:** update examples _(by Athan Reines)_
-   [`760edc1`](https://github.com/stdlib-js/stdlib/commit/760edc1cf7205cfc1e1597c594b7f881aa6a273f) - **docs:** update example _(by Athan Reines)_
-   [`84cf136`](https://github.com/stdlib-js/stdlib/commit/84cf13686d9559067a6c2d84ba10fb42a4b206d8) - **feat:** add `random/array/tools/binary` _(by Athan Reines)_
-   [`f7af7f6`](https://github.com/stdlib-js/stdlib/commit/f7af7f61466e6145d34de2b4959a17506f6df6a4) - **docs:** simplify examples _(by Athan Reines)_
-   [`5ca2b6b`](https://github.com/stdlib-js/stdlib/commit/5ca2b6b9388be99dc83bc5dcd1af3d5d0dee3b32) - **docs:** simplify examples _(by Athan Reines)_
-   [`76fedac`](https://github.com/stdlib-js/stdlib/commit/76fedac7c077e6c4464fc19c8babf0e51dfda187) - **fix:** update data type alias _(by Athan Reines)_
-   [`dea49e0`](https://github.com/stdlib-js/stdlib/commit/dea49e03ab5571233e3da26835a6a6d3256d5737) - **docs:** use single quotes in require calls instead of backticks _(by Philipp Burckhardt)_
-   [`b44cd7f`](https://github.com/stdlib-js/stdlib/commit/b44cd7ff67407334e1ba225473a6c774235c2437) - **docs:** fix typo _(by Athan Reines)_
-   [`9c7c048`](https://github.com/stdlib-js/stdlib/commit/9c7c0482a77b67977ce71cc6060f53580e58e935) - **feat:** add `t` to namespace _(by Athan Reines)_
-   [`8aaf98e`](https://github.com/stdlib-js/stdlib/commit/8aaf98e0623912b99460f211f6b253c56e2ddf42) - **feat:** add `random/array/t` _(by Athan Reines)_
-   [`e26c656`](https://github.com/stdlib-js/stdlib/commit/e26c656f1f5b73dccf37c9e6c46d4b59c26829ad) - **feat:** add `chisquare` to namespace _(by Athan Reines)_
-   [`611a594`](https://github.com/stdlib-js/stdlib/commit/611a5947270d6e4f8907135a2a8e9fce33380c3d) - **feat:** add `random/array/chisquare` _(by Athan Reines)_
-   [`59c2959`](https://github.com/stdlib-js/stdlib/commit/59c295931945b701d60d4b7952678f0a0d0e4add) - **docs:** fix JSDoc parameter type regression _(by Athan Reines)_
-   [`afc5695`](https://github.com/stdlib-js/stdlib/commit/afc5695025226656e50d31850ea83c2fbc410f66) - **test:** update tests and documentation _(by Athan Reines)_
-   [`faaf065`](https://github.com/stdlib-js/stdlib/commit/faaf0659a44d7c153dd54e8e917ea2319d1944c1) - **test:** update tests and documentation _(by Athan Reines)_
-   [`4757898`](https://github.com/stdlib-js/stdlib/commit/4757898d19993120c7e1ba5527896a20549597bd) - **test:** update tests and notes _(by Athan Reines)_
-   [`d73025b`](https://github.com/stdlib-js/stdlib/commit/d73025bdc7a4b26ef124113a65eea62ca8b3b749) - **feat:** add `chi` to namespace _(by Athan Reines)_
-   [`8ffb082`](https://github.com/stdlib-js/stdlib/commit/8ffb08252555502cc7ce1bec3ed9ec6fdb151c0d) - **feat:** add `random/array/chi` _(by Athan Reines)_
-   [`ffed11f`](https://github.com/stdlib-js/stdlib/commit/ffed11f964eef17772d0e148bf29feba9b77bea2) - **bench:** rename variable _(by Athan Reines)_
-   [`682a096`](https://github.com/stdlib-js/stdlib/commit/682a096690fec6cfb8a860472d7593bff7f038cd) - **feat:** add `rayleigh` to namespace _(by Athan Reines)_
-   [`2dc4be8`](https://github.com/stdlib-js/stdlib/commit/2dc4be898dd31d35c294c7bc8f35753313e64332) - **feat:** add `random/array/rayleigh` _(by Athan Reines)_
-   [`8e50fd0`](https://github.com/stdlib-js/stdlib/commit/8e50fd09aa36d01bb9c6c2151d4fe71c27518d6c) - **bench:** rename variable _(by Athan Reines)_
-   [`c4b704e`](https://github.com/stdlib-js/stdlib/commit/c4b704e6281c8ea54c2bcf1d2c28d9ced97a9106) - **bench:** rename variable _(by Athan Reines)_
-   [`e66428a`](https://github.com/stdlib-js/stdlib/commit/e66428ac638590db52c8b5bfc33bd879a65e2a76) - **bench:** rename variable _(by Athan Reines)_
-   [`f8b1c49`](https://github.com/stdlib-js/stdlib/commit/f8b1c4934b89447ba6c67eee167b96efc78cd61f) - **test:** update test values _(by Athan Reines)_
-   [`9137a72`](https://github.com/stdlib-js/stdlib/commit/9137a72ea1b7f55b4b6b7a5ba615caec8f2e92d5) - **test:** update test values _(by Athan Reines)_
-   [`3fabb64`](https://github.com/stdlib-js/stdlib/commit/3fabb649a92db19c7b4236022e8fd8a39bdc5e8b) - **test:** update test values _(by Athan Reines)_
-   [`de69dd0`](https://github.com/stdlib-js/stdlib/commit/de69dd0ec0094842392412048a057230db65adbd) - **feat:** add `poisson` to namespace _(by Athan Reines)_
-   [`f4faaae`](https://github.com/stdlib-js/stdlib/commit/f4faaae5b81c94b556e0e96d92a293ee3c0e1a1a) - **feat:** add `random/array/poisson` _(by Athan Reines)_
-   [`3baf817`](https://github.com/stdlib-js/stdlib/commit/3baf8170f59557bb8db9100713e5659d1dbb5757) - **fix:** update keywords _(by Athan Reines)_
-   [`f989e7d`](https://github.com/stdlib-js/stdlib/commit/f989e7d2f2f2bd7017bd58b254b454982c0ebd5a) - **feat:** add `bernoulli` to namespace _(by Athan Reines)_
-   [`6dc58d9`](https://github.com/stdlib-js/stdlib/commit/6dc58d9d193577f80ee2dbc018a000ff2b8eba39) - **feat:** add `random/array/bernoulli` _(by Athan Reines)_
-   [`07ec11c`](https://github.com/stdlib-js/stdlib/commit/07ec11c0cf0bad95717bc16d3623aefa283b7444) - **chore:** update keywords _(by Athan Reines)_
-   [`63ed59b`](https://github.com/stdlib-js/stdlib/commit/63ed59b0cea172c937cead5a8503c2c3d94adeee) - **docs:** fix example and reorder require statements _(by Athan Reines)_
-   [`7600ef8`](https://github.com/stdlib-js/stdlib/commit/7600ef8fd48c1e6799154d8929b37fa3cbcdd797) - **docs:** fix grammar _(by Athan Reines)_
-   [`1ac1ffc`](https://github.com/stdlib-js/stdlib/commit/1ac1ffcb8fe64bf6ecdcc6672f66f849fe9fb1c4) - **docs:** add `assign` documentation _(by Athan Reines)_
-   [`194348a`](https://github.com/stdlib-js/stdlib/commit/194348ab6f3893132079ea588aed08534abd1357) - **test:** add `assign` tests _(by Athan Reines)_
-   [`891c1c3`](https://github.com/stdlib-js/stdlib/commit/891c1c38ee6e4e6fc9eb34caf3eb153b2f4f9294) - **docs:** update descriptions _(by Athan Reines)_
-   [`c61ac91`](https://github.com/stdlib-js/stdlib/commit/c61ac917b2ff55410eab812a987f3a6ee78545ed) - **docs:** update descriptions _(by Athan Reines)_
-   [`f034ad0`](https://github.com/stdlib-js/stdlib/commit/f034ad09238d06d60a42ee3c8468f6015a84e849) - **docs:** add `assign` documentation _(by Athan Reines)_
-   [`89e2b9b`](https://github.com/stdlib-js/stdlib/commit/89e2b9bc09d811b9da1e47eee3f20c51521b84a2) - **docs:** add `assign` documentation and update descriptions _(by Athan Reines)_
-   [`170dda4`](https://github.com/stdlib-js/stdlib/commit/170dda409ab6eb8995dab552c478420977bdeba3) - **test:** fix test case _(by Athan Reines)_
-   [`3dbc688`](https://github.com/stdlib-js/stdlib/commit/3dbc688ba7460aa0779a74eb8a911b248b0af437) - **docs:** update descriptions _(by Athan Reines)_
-   [`1130142`](https://github.com/stdlib-js/stdlib/commit/1130142748596c4b8b59d833f68c3df7e562d182) - **bench:** add `assign` benchmarks _(by Athan Reines)_
-   [`0c7e759`](https://github.com/stdlib-js/stdlib/commit/0c7e75937a85cee97134446936d6ccabf94f1291) - **test:** fix syntax errors _(by Athan Reines)_
-   [`9ed2176`](https://github.com/stdlib-js/stdlib/commit/9ed2176720f20d7c1eea74f0219ac0736967f85f) - **test:** add `assign` tests and benchmarks and update documentation _(by Athan Reines)_
-   [`6929148`](https://github.com/stdlib-js/stdlib/commit/6929148b2b084cfa2fd20db6246d2f79ff093345) - **style:** rename variable _(by Athan Reines)_
-   [`67df9bf`](https://github.com/stdlib-js/stdlib/commit/67df9bfd49fdc1bdcb99d0f39dfc410c3bde1a49) - **refactor:** update implementation to use array tooling and fix documentation _(by Athan Reines)_
-   [`c216348`](https://github.com/stdlib-js/stdlib/commit/c216348dc794db5430890632179b3439181f28ac) - **refactor:** update implementation to use array tooling _(by Athan Reines)_
-   [`a16ad62`](https://github.com/stdlib-js/stdlib/commit/a16ad62256b9468514ae46c416cd2eda6afe2ae0) - **docs:** update examples _(by Athan Reines)_
-   [`9762e88`](https://github.com/stdlib-js/stdlib/commit/9762e8841aee307f50ff01ffdd6c565992316073) - **docs:** update signatures and add partial application docs _(by Athan Reines)_
-   [`d7ca9e4`](https://github.com/stdlib-js/stdlib/commit/d7ca9e49a12bcb562246ef5fd29ee451807da847) - **bench:** update description _(by Athan Reines)_
-   [`8b4cc29`](https://github.com/stdlib-js/stdlib/commit/8b4cc2951cf3b4ab78c8f2b5ad8fa462464ec297) - **docs:** update copy _(by Athan Reines)_
-   [`44f8243`](https://github.com/stdlib-js/stdlib/commit/44f8243d6cab2375a40a9440b6339af7a5857797) - **bench:** fix function invocations _(by Athan Reines)_
-   [`e38a7cc`](https://github.com/stdlib-js/stdlib/commit/e38a7ccea30a70d7766750e8cd4e32f8304a734a) - **docs:** fix signatures _(by Athan Reines)_
-   [`9c2c4eb`](https://github.com/stdlib-js/stdlib/commit/9c2c4eb25d54a82c16aa1c2d9888552eb0a00beb) - **docs:** fix example _(by Athan Reines)_
-   [`db6c048`](https://github.com/stdlib-js/stdlib/commit/db6c04889a4bdbf99bca99837ddf9df0f4ee3628) - **docs:** fix example _(by Athan Reines)_
-   [`adad88f`](https://github.com/stdlib-js/stdlib/commit/adad88f973ec800c62905d830608aac1903c8774) - **feat:** refactor to support top-level output array default and currying PRNG parameters _(by Athan Reines)_
-   [`0c69eee`](https://github.com/stdlib-js/stdlib/commit/0c69eee73fa22499697db72eb994c3a4774aacdc) - **docs:** remove throws annotations _(by Athan Reines)_
-   [`4ea8f4b`](https://github.com/stdlib-js/stdlib/commit/4ea8f4ba6ed0fee219b0ecc6118b2ff20cd1f047) - **feat:** add `random/array/tools/nullary` _(by Athan Reines)_
-   [`c5cadd8`](https://github.com/stdlib-js/stdlib/commit/c5cadd87fc732762fa97de926f973d50659761fe) - **docs:** fix throws tags and update description _(by Athan Reines)_
-   [`2328e56`](https://github.com/stdlib-js/stdlib/commit/2328e56723d719a7a7c6c71065b20bd68abf8e37) - **docs:** update copy _(by Athan Reines)_
-   [`aa40fc7`](https://github.com/stdlib-js/stdlib/commit/aa40fc78e341299778748388db77da4cd6cf1a88) - **docs:** add README and update descriptions _(by Athan Reines)_
-   [`a30b64a`](https://github.com/stdlib-js/stdlib/commit/a30b64ab2c2591d0cf662a31807d537ad0f70b05) - **feat:** add `random/array/tools/unary-factory` _(by Athan Reines)_
-   [`eb30a23`](https://github.com/stdlib-js/stdlib/commit/eb30a230d9474688951d34d09113b9651d9ff22f) - **docs:** add comment _(by Athan Reines)_
-   [`f38a4b0`](https://github.com/stdlib-js/stdlib/commit/f38a4b0fa5c2e3105c2e813189011ec2758e8e59) - **docs:** add comments _(by Athan Reines)_
-   [`9f1aad3`](https://github.com/stdlib-js/stdlib/commit/9f1aad375e069268f01e105f4543852e88d1cc25) - **feat:** add `random/array/tools/unary` _(by Athan Reines)_
-   [`e25b23b`](https://github.com/stdlib-js/stdlib/commit/e25b23b917ee6e387722db7192d22e4a70222da0) - **feat:** rename type definitions for array and ndarray data types _(by Athan Reines)_
-   [`8ef1f9e`](https://github.com/stdlib-js/stdlib/commit/8ef1f9eb45527886ba9b0c341704c8ffe6cffbb3) - **docs:** update related packages sections [(#1233)](https://github.com/stdlib-js/stdlib/pull/1233) _(by stdlib-bot)_
-   [`5184bd0`](https://github.com/stdlib-js/stdlib/commit/5184bd0461e8c78f983d4b619a863d93c52c6396) - **docs:** update namespace table of contents [(#1213)](https://github.com/stdlib-js/stdlib/pull/1213) _(by stdlib-bot, Athan Reines)_
-   [`b1e4cca`](https://github.com/stdlib-js/stdlib/commit/b1e4cca30147188064b2275a0242a0334befbcd1) - **feat:** update namespace exports _(by Philipp Burckhardt)_
-   [`fe1a276`](https://github.com/stdlib-js/stdlib/commit/fe1a2764c983ee7adc61e5f383dd91dd262ddfc2) - **docs:** update related packages sections [(#1220)](https://github.com/stdlib-js/stdlib/pull/1220) _(by stdlib-bot)_
-   [`cf3668f`](https://github.com/stdlib-js/stdlib/commit/cf3668f92234f5b25369001ca6a05a434d577ba1) - **docs:** update related packages sections [(#1210)](https://github.com/stdlib-js/stdlib/pull/1210) _(by stdlib-bot)_
-   [`1879534`](https://github.com/stdlib-js/stdlib/commit/18795348ac0c51d3b13c1b26c0f5921ec5fd010c) - **docs:** update related packages sections [(#1179)](https://github.com/stdlib-js/stdlib/pull/1179) _(by stdlib-bot)_
-   [`4d6b104`](https://github.com/stdlib-js/stdlib/commit/4d6b104a0309b9a016700badd64b137ff384de52) - **docs:** update related packages sections [(#1172)](https://github.com/stdlib-js/stdlib/pull/1172) _(by stdlib-bot, Athan Reines)_
-   [`bf038c4`](https://github.com/stdlib-js/stdlib/commit/bf038c45a43a91dfdcdf5f69240e1ebc782ea8d6) - **docs:** update related packages sections [(#1168)](https://github.com/stdlib-js/stdlib/pull/1168) _(by stdlib-bot)_
-   [`d575e8b`](https://github.com/stdlib-js/stdlib/commit/d575e8b063a37d90c3178fcff7b425314ae73c98) - **docs:** update related packages sections [(#1167)](https://github.com/stdlib-js/stdlib/pull/1167) _(by stdlib-bot)_
-   [`74bf172`](https://github.com/stdlib-js/stdlib/commit/74bf172cde4e19feaf4840c9e03b904bf9819934) - **docs:** update related packages sections [(#1165)](https://github.com/stdlib-js/stdlib/pull/1165) _(by stdlib-bot)_
-   [`26cf434`](https://github.com/stdlib-js/stdlib/commit/26cf4347b243f1f363273481512e1ffebcb27ad5) - **docs:** update related packages sections [(#1156)](https://github.com/stdlib-js/stdlib/pull/1156) _(by stdlib-bot)_
-   [`2f0cb7e`](https://github.com/stdlib-js/stdlib/commit/2f0cb7ed139b763e65205939511c7cc85b947e64) - **docs:** update related packages sections [(#1154)](https://github.com/stdlib-js/stdlib/pull/1154) _(by stdlib-bot)_
-   [`57d81e4`](https://github.com/stdlib-js/stdlib/commit/57d81e4c196065f6680f08f22aeccfdc6e590b8f) - **docs:** update related packages sections [(#1151)](https://github.com/stdlib-js/stdlib/pull/1151) _(by stdlib-bot)_
-   [`73f98e4`](https://github.com/stdlib-js/stdlib/commit/73f98e4e8dea53ece4a617b042f9d817643b4850) - **docs:** update related packages sections [(#1150)](https://github.com/stdlib-js/stdlib/pull/1150) _(by stdlib-bot)_
-   [`78a556e`](https://github.com/stdlib-js/stdlib/commit/78a556efa2f1da29eb9081d393f5768ad1518117) - **docs:** update related packages sections [(#1145)](https://github.com/stdlib-js/stdlib/pull/1145) _(by stdlib-bot)_
-   [`23114c6`](https://github.com/stdlib-js/stdlib/commit/23114c65f67ea8c17fc835e280408c39544dfa76) - **build:** remove tslint directives _(by Philipp Burckhardt)_
-   [`2dba7d6`](https://github.com/stdlib-js/stdlib/commit/2dba7d6b311661724bc7c9451f76e0f73fb0cc40) - **build:** replace tslint directive with eslint equivalent _(by Philipp Burckhardt)_
-   [`8fbd70f`](https://github.com/stdlib-js/stdlib/commit/8fbd70f16653c25dfd2094511555c77d523c1126) - **build:** replace tslint directive with eslint equivalent _(by Philipp Burckhardt)_
-   [`9502ed2`](https://github.com/stdlib-js/stdlib/commit/9502ed27e2853e312c556a48bdd7775095e66709) - **build:** replace tslint directive with eslint equivalent _(by Philipp Burckhardt)_
-   [`3b8d967`](https://github.com/stdlib-js/stdlib/commit/3b8d9678898662986e0978a09b7b164ce2bda143) - **build:** remove tslint directives _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.1.1">

## 0.1.1 (2023-11-08)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2023-11-08)

<section class="features">

### Features

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213) - update minimum TypeScript version
-   [`421e1ae`](https://github.com/stdlib-js/stdlib/commit/421e1ae86e3d7fb31d156af9cd522303a6645220) - update namespace TypeScript declarations [(#1044)](https://github.com/stdlib-js/stdlib/pull/1044)
-   [`50ba55b`](https://github.com/stdlib-js/stdlib/commit/50ba55b207fdd8ee04ca2fdc4c040e8852f335dd) - add `weibull` to namespace
-   [`82f6933`](https://github.com/stdlib-js/stdlib/commit/82f693348f49cba1b1608fdf3303328780eb723d) - refactor declarations to use generics
-   [`d63cef6`](https://github.com/stdlib-js/stdlib/commit/d63cef6465c789ca36b09fa8c3494662caa2562e) - refactor declarations to use generics
-   [`948fb07`](https://github.com/stdlib-js/stdlib/commit/948fb07c08b1015177635a320bfe2ab9a500dbb0) - refactor declarations to use generics
-   [`1faa20f`](https://github.com/stdlib-js/stdlib/commit/1faa20fe537a8864daa8b8df10f0a031526d8b54) - refactor declarations to use generics
-   [`1971510`](https://github.com/stdlib-js/stdlib/commit/197151046e828736cd6467c68eaf5fec5b4ea691) - refactor declarations to use generics
-   [`1f54cce`](https://github.com/stdlib-js/stdlib/commit/1f54cce45b10fa423748c1780df8255ecac02912) - refactor declarations to use generics
-   [`20831a2`](https://github.com/stdlib-js/stdlib/commit/20831a2ea5a99ac147441dd2256ed4ac5ee243ab) - refactor declarations to use generics
-   [`4ae8e28`](https://github.com/stdlib-js/stdlib/commit/4ae8e283ce5ab17166a4951dddb8c2f455db107e) - refactor declarations to use generics
-   [`5cd653f`](https://github.com/stdlib-js/stdlib/commit/5cd653f21708ab5a25a06ca30c479857b426b7ce) - refactor declarations to use generics
-   [`75d73c4`](https://github.com/stdlib-js/stdlib/commit/75d73c48a07d6ed476a4650e2b4835d14dee1976) - refactor declarations to use generics
-   [`4f4c99a`](https://github.com/stdlib-js/stdlib/commit/4f4c99a4f70902820a07ac28faf3bb9ee6fd16a6) - refactor declarations to use generics
-   [`40b1218`](https://github.com/stdlib-js/stdlib/commit/40b121811505243d58b0fddedf25aa146d2a9ed8) - refactor declarations to use generics
-   [`ebac539`](https://github.com/stdlib-js/stdlib/commit/ebac539f0c8f6e3a39d4b6c61104047c234c7728) - refactor declarations to use generics
-   [`41eb26b`](https://github.com/stdlib-js/stdlib/commit/41eb26b06033784dc8d5351545ccd58a8d8ec623) - refactor declarations to use generics
-   [`f1786aa`](https://github.com/stdlib-js/stdlib/commit/f1786aa0519a3e93cde870c972c15be67c2ab9e2) - refactor declarations to use generics
-   [`7373470`](https://github.com/stdlib-js/stdlib/commit/73734702fc361f345475020b24a95952dbe5a33d) - increase minimum TypeScript version
-   [`aff558d`](https://github.com/stdlib-js/stdlib/commit/aff558dd62e730c9705e175e59ac466575f775ef) - refactor declarations to use generics
-   [`f15f90b`](https://github.com/stdlib-js/stdlib/commit/f15f90bf795ee8134dbfa72e736d18a760d6e12f) - refactor declarations to preserve type info
-   [`a5e0df4`](https://github.com/stdlib-js/stdlib/commit/a5e0df4737e6874822b1a9c96823970c9ed03867) - refactor declarations to preserve type info
-   [`9a8e351`](https://github.com/stdlib-js/stdlib/commit/9a8e35121e77aad9f2f41d1a3417759b04ebd761) - refactor declarations to preserve type info
-   [`da0b9de`](https://github.com/stdlib-js/stdlib/commit/da0b9de487089117e972e5f82b56ebe8ff3613dd) - refactor declarations to preserve type info
-   [`613cea4`](https://github.com/stdlib-js/stdlib/commit/613cea4175d77f3793205c2d4bd923f194163a02) - refactor declarations to preserve type info
-   [`3c2eed5`](https://github.com/stdlib-js/stdlib/commit/3c2eed55bd73df6cc90df72b2fe8c008353137f1) - refactor declarations to preserve type info
-   [`0e16a7b`](https://github.com/stdlib-js/stdlib/commit/0e16a7bae331020fcdff87adf7402e5d57887fbb) - refactor declarations to preserve type info
-   [`7785b17`](https://github.com/stdlib-js/stdlib/commit/7785b17c3e884e56ed7aa79212ae6253f3e2b845) - refactor declarations to preserve type info
-   [`59a17ec`](https://github.com/stdlib-js/stdlib/commit/59a17ec06f7df58172b9c7bbe8205f5c1d79102b) - refactor declarations to preserve type info
-   [`d995b3b`](https://github.com/stdlib-js/stdlib/commit/d995b3bf8c70a3faacc6e22d4928b0406e9b1360) - refactor declarations to preserve type info
-   [`4633e6b`](https://github.com/stdlib-js/stdlib/commit/4633e6b4ba220b74a253bcdb11a62eff8850ff5f) - refactor declarations to preserve type info
-   [`4a832d8`](https://github.com/stdlib-js/stdlib/commit/4a832d851babcfda80026820071f6ad2d02e2a2f) - refactor declarations to preserve type info
-   [`6e8d134`](https://github.com/stdlib-js/stdlib/commit/6e8d1340002eff02eb0f25922932b921dad021f1) - refactor declarations to preserve type info
-   [`62ff701`](https://github.com/stdlib-js/stdlib/commit/62ff701f2e780feee406326cf8eab726f0aebd00) - refactor declarations to preserve type info
-   [`a1c7136`](https://github.com/stdlib-js/stdlib/commit/a1c7136e82a91e685f0bec84e3d339edce2aeb1f) - refactor declarations to preserve type info
-   [`5bb4a8e`](https://github.com/stdlib-js/stdlib/commit/5bb4a8e40584a323d588594ebdb8ded4db8481cf) - refactor declarations to preserve type info
-   [`f3f4cc8`](https://github.com/stdlib-js/stdlib/commit/f3f4cc8dd9f5e46c85470e51ed0768f3d311153f) - refactor declarations to preserve type info
-   [`fc71c6e`](https://github.com/stdlib-js/stdlib/commit/fc71c6e6e655f3275ff53770904312695b4623db) - refactor declarations to preserve type info
-   [`d8790e6`](https://github.com/stdlib-js/stdlib/commit/d8790e6a6f199987593d2710a75b2f6a48431c0a) - refactor declarations to preserve type info
-   [`ba99176`](https://github.com/stdlib-js/stdlib/commit/ba99176f6886150ebd26c21cb3146d292dba1519) - refactor declarations to preserve type info
-   [`7527857`](https://github.com/stdlib-js/stdlib/commit/7527857b77dda80db7c7a11efefd79af6b74988c) - refactor declarations to preserve type info
-   [`64ca79d`](https://github.com/stdlib-js/stdlib/commit/64ca79d2e3b6f9be0156028081e0fb74249abd7a) - refactor declarations to preserve type info
-   [`855aa78`](https://github.com/stdlib-js/stdlib/commit/855aa78ade58e1ca57afa95270276e207b4e677c) - refactor declarations to preserve type info
-   [`ec09928`](https://github.com/stdlib-js/stdlib/commit/ec0992817cc0bec780556024e40bf8690f4745e9) - refactor declarations to preserve type info
-   [`8257234`](https://github.com/stdlib-js/stdlib/commit/825723484ecf954768107cdab8b58cc27d233380) - refactor declarations to preserve type info
-   [`9136b78`](https://github.com/stdlib-js/stdlib/commit/9136b78888f718551327ae1f6528b3eace109c7f) - refactor declarations to preserve type info
-   [`6a5896b`](https://github.com/stdlib-js/stdlib/commit/6a5896bfb56db16b7d08e79ff1a66e0dac8ac500) - refactor declarations to preserve type info
-   [`02fbcc3`](https://github.com/stdlib-js/stdlib/commit/02fbcc32fc115172d9bf172adb2b9a5985aca686) - refactor declarations to preserve type info
-   [`e43e02b`](https://github.com/stdlib-js/stdlib/commit/e43e02b17858e89b5c29f7cf4bf8c12248634f1f) - refactor declarations to preserve type info
-   [`1613149`](https://github.com/stdlib-js/stdlib/commit/16131499527ff0fd4812eb9f99435858ed89dd7f) - refactor declarations to preserve type info
-   [`77cd6ce`](https://github.com/stdlib-js/stdlib/commit/77cd6ceb101aa3cf049e1d47f27456daa4b9a194) - refactor declarations to preserve type info
-   [`a4eba9b`](https://github.com/stdlib-js/stdlib/commit/a4eba9be19d13051cfb2ab62875816b9d0cc6520) - refactor declarations to preserve type info
-   [`f96d25e`](https://github.com/stdlib-js/stdlib/commit/f96d25ede7d826d4499791e98545530f3a331252) - refactor declarations to preserve type info
-   [`9d12bad`](https://github.com/stdlib-js/stdlib/commit/9d12bad7b6e19b6ec09e951d663a5d42e09e45af) - refactor declarations to preserve type info
-   [`7adf84c`](https://github.com/stdlib-js/stdlib/commit/7adf84c696f6b281addc17cffb2a7807e5c401bb) - refactor declarations to preserve type info
-   [`3530c55`](https://github.com/stdlib-js/stdlib/commit/3530c557bbb424faac0ce32507ce9a6121d73519) - refactor declarations to preserve type info
-   [`8d6ee73`](https://github.com/stdlib-js/stdlib/commit/8d6ee730ee78dadad28a59cf479e47b4f3d2c717) - refactor declarations to preserve type info
-   [`9ac5b91`](https://github.com/stdlib-js/stdlib/commit/9ac5b91afb3d62e9c2b7004fd39a3800be6e8bee) - refactor declarations to preserve type info
-   [`5b12c1f`](https://github.com/stdlib-js/stdlib/commit/5b12c1f6248c023c9220eafc4f88d0ceacbfa667) - refactor declarations to preserve type info
-   [`72ac2e6`](https://github.com/stdlib-js/stdlib/commit/72ac2e6e3f3f96d844799729c439c4a344e69e19) - refactor declarations to preserve type info
-   [`8b22739`](https://github.com/stdlib-js/stdlib/commit/8b2273980e4199faf0b68c955f425c4fdcf27693) - refactor declarations to preserve type info
-   [`0b1ec25`](https://github.com/stdlib-js/stdlib/commit/0b1ec25a7543f9954826ae870f5e8979258360e7) - add package for creating an array of geometric pseudorandom numbers [(#971)](https://github.com/stdlib-js/stdlib/pull/971)
-   [`ca77f96`](https://github.com/stdlib-js/stdlib/commit/ca77f9674caf1c7c40da1dcff656f8ded55d927d) - add strided interface for Weibull distribution [(#1012)](https://github.com/stdlib-js/stdlib/pull/1012)
-   [`e44f8c0`](https://github.com/stdlib-js/stdlib/commit/e44f8c04cf659116ff94957106a66c415ff31b8a) - add `random/exponential`
-   [`e8775fc`](https://github.com/stdlib-js/stdlib/commit/e8775fcbe3617b9013bd1cea74d7f70aa2669ab4) - update namespace TypeScript declarations [(#951)](https://github.com/stdlib-js/stdlib/pull/951)
-   [`d115362`](https://github.com/stdlib-js/stdlib/commit/d115362a80635761a217131b678abc7c21d32f49) - update namespace table of contents [(#933)](https://github.com/stdlib-js/stdlib/pull/933)
-   [`154b37b`](https://github.com/stdlib-js/stdlib/commit/154b37be8e4850cc50713870207c62e305a62279) - add `gamma`, `invgamma`, and `cosine` to namespace
-   [`907145e`](https://github.com/stdlib-js/stdlib/commit/907145e28f12acf8d027cc60ce87a5d1d61474e7) - add `cosine` to namespace
-   [`d315362`](https://github.com/stdlib-js/stdlib/commit/d315362c4d6041f60641d6130ecf2143013dc911) - add interface for filling strided array with cosine random numbers
-   [`e2f8adb`](https://github.com/stdlib-js/stdlib/commit/e2f8adb21e5a0513cd913684e83aba7d791cab63) - add interface for filling array with cosine random numbers
-   [`a2e039c`](https://github.com/stdlib-js/stdlib/commit/a2e039c465b5bab7aab4a6b8d69bb1207c6fd519) - add interface for filling strided array with inverse gamma random numbers
-   [`ddf4788`](https://github.com/stdlib-js/stdlib/commit/ddf47885bf11fa06a123d57f425c81aebe3a329d) - add interface for filling strided array with gamma random numbers
-   [`0b8e8d9`](https://github.com/stdlib-js/stdlib/commit/0b8e8d96449b3c5fd2400942107d511b6462e78b) - add `minstdShuffle` to namespace
-   [`8bf72f5`](https://github.com/stdlib-js/stdlib/commit/8bf72f5c0544ec4caf449ecd8acfe50776048d13) - add strided interface to fill an array with pseudorandom numbers using an LCG whose output is shuffled
-   [`c5cc648`](https://github.com/stdlib-js/stdlib/commit/c5cc648a6927beeb56525343efaa30c718fdc5b3) - add `minstdShuffle` to namespace
-   [`2c2aa4e`](https://github.com/stdlib-js/stdlib/commit/2c2aa4e06184979f0f33133812b8a1eb8fe550d9) - add support for creating an array of pseudorandom numbers using an LCG whose output is shuffled
-   [`90c53b0`](https://github.com/stdlib-js/stdlib/commit/90c53b0fb40495de722daba3d8d9ea4412fa51fe) - update namespace TypeScript declarations [(#923)](https://github.com/stdlib-js/stdlib/pull/923)
-   [`a1fd583`](https://github.com/stdlib-js/stdlib/commit/a1fd5839885672378e0a2774019b2710ae7b5fcf) - add `betaprime` to namespace
-   [`06425a7`](https://github.com/stdlib-js/stdlib/commit/06425a750ca083836efe74864dfd0eacb41318ff) - add `invgamma` and `betaprime` to namespace
-   [`059038f`](https://github.com/stdlib-js/stdlib/commit/059038feb604c84bc518ff4063d69c32e3975bb7) - add strided interface for filling a strided array with pseudorandom numbers drawn from a beta prime distribution [(#918)](https://github.com/stdlib-js/stdlib/pull/918)
-   [`266804a`](https://github.com/stdlib-js/stdlib/commit/266804a567b619f72e0012311f05557d4b810def) - add support for creating an array of pseudorandom numbers drawn from an inverse gamma distribution [(#915)](https://github.com/stdlib-js/stdlib/pull/915)
-   [`9bc8935`](https://github.com/stdlib-js/stdlib/commit/9bc893578fd02ebda8067ab191efd74dcbbcdb7d) - add `betaprime` to namespace
-   [`5cb61c4`](https://github.com/stdlib-js/stdlib/commit/5cb61c418a58fc1559474dd5e59c60a5d36bf06a) - add support for creating an array of pseudorandom numbers drawn from a beta prime distribution [(#917)](https://github.com/stdlib-js/stdlib/pull/917)
-   [`1e82c3b`](https://github.com/stdlib-js/stdlib/commit/1e82c3b3f340f4c4b6634b57e02c47a271187c25) - add `gamma` to namespace
-   [`00e8da0`](https://github.com/stdlib-js/stdlib/commit/00e8da0854d472abef0c22be7828084845f90343) - update namespace TypeScript declarations [(#919)](https://github.com/stdlib-js/stdlib/pull/919)
-   [`720e367`](https://github.com/stdlib-js/stdlib/commit/720e367ed057bf75c6ae4fce8b62f606b99a94c0) - add support for creating an array of pseudorandom numbers drawn from a gamma distribution [(#914)](https://github.com/stdlib-js/stdlib/pull/914)

</section>

<!-- /.features -->

<section class="bug-fixes">

### Bug Fixes

-   [`c992ceb`](https://github.com/stdlib-js/stdlib/commit/c992cebaa3be5d820f9be8d276d9618b32709dca) - update import path for `Collection` type definition
-   [`b35af1c`](https://github.com/stdlib-js/stdlib/commit/b35af1cf2d8ade5b45394c9a1eaf583c90a031d7) - add plain object checks
-   [`7118ce2`](https://github.com/stdlib-js/stdlib/commit/7118ce2be998805e028aff506afa4df4bf037eff) - add plain object checks
-   [`91a3e28`](https://github.com/stdlib-js/stdlib/commit/91a3e28e32ea4002878ea5f6c542e40c2cbd3706) - add plain object checks
-   [`cc317e1`](https://github.com/stdlib-js/stdlib/commit/cc317e13ac1889cfa66ed7a9b32ba3b7895b4cc5) - add plain object checks
-   [`6be08e2`](https://github.com/stdlib-js/stdlib/commit/6be08e2d408afd4579e3f3fdd2a02b8a3d0d6a74) - add plain object checks
-   [`d59560c`](https://github.com/stdlib-js/stdlib/commit/d59560ca7fe013da7abc3e668fb4ffd4c215a9ba) - add missing default type
-   [`a55ea84`](https://github.com/stdlib-js/stdlib/commit/a55ea84c29eb7a2a846204d66f49ed72237a9f39) - add missing default type
-   [`2b4e703`](https://github.com/stdlib-js/stdlib/commit/2b4e70368f6e660231aea893f149fd5368c29a5a) - add missing argument to function invocation

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

-   [`82f6933`](https://github.com/stdlib-js/stdlib/commit/82f693348f49cba1b1608fdf3303328780eb723d): refactor declarations to use generics
-   [`d63cef6`](https://github.com/stdlib-js/stdlib/commit/d63cef6465c789ca36b09fa8c3494662caa2562e): refactor declarations to use generics
-   [`948fb07`](https://github.com/stdlib-js/stdlib/commit/948fb07c08b1015177635a320bfe2ab9a500dbb0): refactor declarations to use generics
-   [`1faa20f`](https://github.com/stdlib-js/stdlib/commit/1faa20fe537a8864daa8b8df10f0a031526d8b54): refactor declarations to use generics
-   [`1971510`](https://github.com/stdlib-js/stdlib/commit/197151046e828736cd6467c68eaf5fec5b4ea691): refactor declarations to use generics
-   [`1f54cce`](https://github.com/stdlib-js/stdlib/commit/1f54cce45b10fa423748c1780df8255ecac02912): refactor declarations to use generics
-   [`20831a2`](https://github.com/stdlib-js/stdlib/commit/20831a2ea5a99ac147441dd2256ed4ac5ee243ab): refactor declarations to use generics
-   [`4ae8e28`](https://github.com/stdlib-js/stdlib/commit/4ae8e283ce5ab17166a4951dddb8c2f455db107e): refactor declarations to use generics
-   [`5cd653f`](https://github.com/stdlib-js/stdlib/commit/5cd653f21708ab5a25a06ca30c479857b426b7ce): refactor declarations to use generics
-   [`75d73c4`](https://github.com/stdlib-js/stdlib/commit/75d73c48a07d6ed476a4650e2b4835d14dee1976): refactor declarations to use generics
-   [`4f4c99a`](https://github.com/stdlib-js/stdlib/commit/4f4c99a4f70902820a07ac28faf3bb9ee6fd16a6): refactor declarations to use generics
-   [`40b1218`](https://github.com/stdlib-js/stdlib/commit/40b121811505243d58b0fddedf25aa146d2a9ed8): refactor declarations to use generics
-   [`ebac539`](https://github.com/stdlib-js/stdlib/commit/ebac539f0c8f6e3a39d4b6c61104047c234c7728): refactor declarations to use generics
-   [`41eb26b`](https://github.com/stdlib-js/stdlib/commit/41eb26b06033784dc8d5351545ccd58a8d8ec623): refactor declarations to use generics
-   [`f1786aa`](https://github.com/stdlib-js/stdlib/commit/f1786aa0519a3e93cde870c972c15be67c2ab9e2): refactor declarations to use generics
-   [`7373470`](https://github.com/stdlib-js/stdlib/commit/73734702fc361f345475020b24a95952dbe5a33d): increase minimum TypeScript version
-   [`aff558d`](https://github.com/stdlib-js/stdlib/commit/aff558dd62e730c9705e175e59ac466575f775ef): refactor declarations to use generics
-   [`f15f90b`](https://github.com/stdlib-js/stdlib/commit/f15f90bf795ee8134dbfa72e736d18a760d6e12f): refactor declarations to preserve type info
-   [`a5e0df4`](https://github.com/stdlib-js/stdlib/commit/a5e0df4737e6874822b1a9c96823970c9ed03867): refactor declarations to preserve type info
-   [`9a8e351`](https://github.com/stdlib-js/stdlib/commit/9a8e35121e77aad9f2f41d1a3417759b04ebd761): refactor declarations to preserve type info
-   [`da0b9de`](https://github.com/stdlib-js/stdlib/commit/da0b9de487089117e972e5f82b56ebe8ff3613dd): refactor declarations to preserve type info
-   [`613cea4`](https://github.com/stdlib-js/stdlib/commit/613cea4175d77f3793205c2d4bd923f194163a02): refactor declarations to preserve type info
-   [`3c2eed5`](https://github.com/stdlib-js/stdlib/commit/3c2eed55bd73df6cc90df72b2fe8c008353137f1): refactor declarations to preserve type info
-   [`0e16a7b`](https://github.com/stdlib-js/stdlib/commit/0e16a7bae331020fcdff87adf7402e5d57887fbb): refactor declarations to preserve type info
-   [`7785b17`](https://github.com/stdlib-js/stdlib/commit/7785b17c3e884e56ed7aa79212ae6253f3e2b845): refactor declarations to preserve type info
-   [`59a17ec`](https://github.com/stdlib-js/stdlib/commit/59a17ec06f7df58172b9c7bbe8205f5c1d79102b): refactor declarations to preserve type info
-   [`d995b3b`](https://github.com/stdlib-js/stdlib/commit/d995b3bf8c70a3faacc6e22d4928b0406e9b1360): refactor declarations to preserve type info
-   [`4633e6b`](https://github.com/stdlib-js/stdlib/commit/4633e6b4ba220b74a253bcdb11a62eff8850ff5f): refactor declarations to preserve type info
-   [`4a832d8`](https://github.com/stdlib-js/stdlib/commit/4a832d851babcfda80026820071f6ad2d02e2a2f): refactor declarations to preserve type info
-   [`6e8d134`](https://github.com/stdlib-js/stdlib/commit/6e8d1340002eff02eb0f25922932b921dad021f1): refactor declarations to preserve type info
-   [`62ff701`](https://github.com/stdlib-js/stdlib/commit/62ff701f2e780feee406326cf8eab726f0aebd00): refactor declarations to preserve type info
-   [`a1c7136`](https://github.com/stdlib-js/stdlib/commit/a1c7136e82a91e685f0bec84e3d339edce2aeb1f): refactor declarations to preserve type info
-   [`5bb4a8e`](https://github.com/stdlib-js/stdlib/commit/5bb4a8e40584a323d588594ebdb8ded4db8481cf): refactor declarations to preserve type info
-   [`f3f4cc8`](https://github.com/stdlib-js/stdlib/commit/f3f4cc8dd9f5e46c85470e51ed0768f3d311153f): refactor declarations to preserve type info
-   [`fc71c6e`](https://github.com/stdlib-js/stdlib/commit/fc71c6e6e655f3275ff53770904312695b4623db): refactor declarations to preserve type info
-   [`d8790e6`](https://github.com/stdlib-js/stdlib/commit/d8790e6a6f199987593d2710a75b2f6a48431c0a): refactor declarations to preserve type info
-   [`ba99176`](https://github.com/stdlib-js/stdlib/commit/ba99176f6886150ebd26c21cb3146d292dba1519): refactor declarations to preserve type info
-   [`7527857`](https://github.com/stdlib-js/stdlib/commit/7527857b77dda80db7c7a11efefd79af6b74988c): refactor declarations to preserve type info
-   [`64ca79d`](https://github.com/stdlib-js/stdlib/commit/64ca79d2e3b6f9be0156028081e0fb74249abd7a): refactor declarations to preserve type info
-   [`855aa78`](https://github.com/stdlib-js/stdlib/commit/855aa78ade58e1ca57afa95270276e207b4e677c): refactor declarations to preserve type info
-   [`ec09928`](https://github.com/stdlib-js/stdlib/commit/ec0992817cc0bec780556024e40bf8690f4745e9): refactor declarations to preserve type info
-   [`8257234`](https://github.com/stdlib-js/stdlib/commit/825723484ecf954768107cdab8b58cc27d233380): refactor declarations to preserve type info
-   [`9136b78`](https://github.com/stdlib-js/stdlib/commit/9136b78888f718551327ae1f6528b3eace109c7f): refactor declarations to preserve type info
-   [`6a5896b`](https://github.com/stdlib-js/stdlib/commit/6a5896bfb56db16b7d08e79ff1a66e0dac8ac500): refactor declarations to preserve type info
-   [`02fbcc3`](https://github.com/stdlib-js/stdlib/commit/02fbcc32fc115172d9bf172adb2b9a5985aca686): refactor declarations to preserve type info
-   [`e43e02b`](https://github.com/stdlib-js/stdlib/commit/e43e02b17858e89b5c29f7cf4bf8c12248634f1f): refactor declarations to preserve type info
-   [`1613149`](https://github.com/stdlib-js/stdlib/commit/16131499527ff0fd4812eb9f99435858ed89dd7f): refactor declarations to preserve type info
-   [`77cd6ce`](https://github.com/stdlib-js/stdlib/commit/77cd6ceb101aa3cf049e1d47f27456daa4b9a194): refactor declarations to preserve type info
-   [`a4eba9b`](https://github.com/stdlib-js/stdlib/commit/a4eba9be19d13051cfb2ab62875816b9d0cc6520): refactor declarations to preserve type info
-   [`f96d25e`](https://github.com/stdlib-js/stdlib/commit/f96d25ede7d826d4499791e98545530f3a331252): refactor declarations to preserve type info
-   [`9d12bad`](https://github.com/stdlib-js/stdlib/commit/9d12bad7b6e19b6ec09e951d663a5d42e09e45af): refactor declarations to preserve type info
-   [`7adf84c`](https://github.com/stdlib-js/stdlib/commit/7adf84c696f6b281addc17cffb2a7807e5c401bb): refactor declarations to preserve type info
-   [`3530c55`](https://github.com/stdlib-js/stdlib/commit/3530c557bbb424faac0ce32507ce9a6121d73519): refactor declarations to preserve type info
-   [`8d6ee73`](https://github.com/stdlib-js/stdlib/commit/8d6ee730ee78dadad28a59cf479e47b4f3d2c717): refactor declarations to preserve type info
-   [`9ac5b91`](https://github.com/stdlib-js/stdlib/commit/9ac5b91afb3d62e9c2b7004fd39a3800be6e8bee): refactor declarations to preserve type info
-   [`5b12c1f`](https://github.com/stdlib-js/stdlib/commit/5b12c1f6248c023c9220eafc4f88d0ceacbfa667): refactor declarations to preserve type info
-   [`72ac2e6`](https://github.com/stdlib-js/stdlib/commit/72ac2e6e3f3f96d844799729c439c4a344e69e19): refactor declarations to preserve type info
-   [`8b22739`](https://github.com/stdlib-js/stdlib/commit/8b2273980e4199faf0b68c955f425c4fdcf27693): refactor declarations to preserve type info

</section>

<!-- /.breaking-changes -->

<section class="issues">

### Closed Issues

A total of 5 issues were closed in this release:

[#868](https://github.com/stdlib-js/stdlib/issues/868), [#871](https://github.com/stdlib-js/stdlib/issues/871), [#872](https://github.com/stdlib-js/stdlib/issues/872), [#877](https://github.com/stdlib-js/stdlib/issues/877), [#879](https://github.com/stdlib-js/stdlib/issues/879)

</section>

<!-- /.issues -->

<section class="commits">

### Commits

<details>

-   [`d73bbf4`](https://github.com/stdlib-js/stdlib/commit/d73bbf43d222f935085f8ecf7526e5f57835f74e) - **build:** replace lint directives _(by Philipp Burckhardt)_
-   [`3653808`](https://github.com/stdlib-js/stdlib/commit/3653808823106dcfc1b033a8bd054f4250b12e11) - **build:** remove tslint directives _(by Philipp Burckhardt)_
-   [`bf2cf8b`](https://github.com/stdlib-js/stdlib/commit/bf2cf8b0424e608a4e3abb6d18a8b44d790aa99c) - **build:** remove tslint directives _(by Philipp Burckhardt)_
-   [`453dd85`](https://github.com/stdlib-js/stdlib/commit/453dd85b5dd186d2b4d458256fe84906e1503fe2) - **build:** remove tslint directives _(by Philipp Burckhardt)_
-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213) - **feat:** update minimum TypeScript version _(by Philipp Burckhardt)_
-   [`c992ceb`](https://github.com/stdlib-js/stdlib/commit/c992cebaa3be5d820f9be8d276d9618b32709dca) - **fix:** update import path for `Collection` type definition _(by Athan Reines)_
-   [`f816a7a`](https://github.com/stdlib-js/stdlib/commit/f816a7aa9cba1a72974c86861e3db8e06bf0faa4) - **build:** add backslashes and always include a sign _(by Philipp Burckhardt)_
-   [`fd84d3b`](https://github.com/stdlib-js/stdlib/commit/fd84d3b81c150897efba1a370ec9a128fca289bc) - **build:** swallow curl errors _(by Philipp Burckhardt)_
-   [`fab1183`](https://github.com/stdlib-js/stdlib/commit/fab118374312427108eaf6bf52af53f1b24a3eb3) - **docs:** remove empty lines _(by Philipp Burckhardt)_
-   [`41ffb52`](https://github.com/stdlib-js/stdlib/commit/41ffb5217c9b2473d83840caf79522d653468e09) - **build:** include change in coverage _(by Philipp Burckhardt)_
-   [`64c8e5a`](https://github.com/stdlib-js/stdlib/commit/64c8e5aefe34bda02258ebae3ee4be8e83e6a040) - **build:** add further backslashes and remove blank comments _(by Philipp Burckhardt)_
-   [`33a5bc7`](https://github.com/stdlib-js/stdlib/commit/33a5bc7c5bb29d2b41746bc2cb7b7eb28a7156f0) - **build:** color by whether full code coverage has been achieved _(by Philipp Burckhardt)_
-   [`3ac92a3`](https://github.com/stdlib-js/stdlib/commit/3ac92a3546f3ca51c15bc511548fcbed92e17bb1) - **build:** set user name and token _(by Philipp Burckhardt)_
-   [`238c3f8`](https://github.com/stdlib-js/stdlib/commit/238c3f8ef2d03b010e8d3b4a18be183a3899c7c0) - **build:** update checkout settings and push URL _(by Philipp Burckhardt)_
-   [`8bd8737`](https://github.com/stdlib-js/stdlib/commit/8bd87377b3b19869c39f1b4b2ed2588c8bc8de7d) - **build:** upload coverage reports _(by Philipp Burckhardt)_
-   [`b35af1c`](https://github.com/stdlib-js/stdlib/commit/b35af1cf2d8ade5b45394c9a1eaf583c90a031d7) - **fix:** add plain object checks _(by Philipp Burckhardt)_
-   [`7118ce2`](https://github.com/stdlib-js/stdlib/commit/7118ce2be998805e028aff506afa4df4bf037eff) - **fix:** add plain object checks _(by Philipp Burckhardt)_
-   [`91a3e28`](https://github.com/stdlib-js/stdlib/commit/91a3e28e32ea4002878ea5f6c542e40c2cbd3706) - **fix:** add plain object checks _(by Philipp Burckhardt)_
-   [`cc317e1`](https://github.com/stdlib-js/stdlib/commit/cc317e13ac1889cfa66ed7a9b32ba3b7895b4cc5) - **fix:** add plain object checks _(by Philipp Burckhardt)_
-   [`6be08e2`](https://github.com/stdlib-js/stdlib/commit/6be08e2d408afd4579e3f3fdd2a02b8a3d0d6a74) - **fix:** add plain object checks _(by Philipp Burckhardt)_
-   [`55866ea`](https://github.com/stdlib-js/stdlib/commit/55866ea8ef1282528b839fd9ce9c43c6a80056f8) - **test:** use strictEqual checks _(by Philipp Burckhardt)_
-   [`2e197bc`](https://github.com/stdlib-js/stdlib/commit/2e197bc4bab1c252c283ff512d82610648368598) - **test:** use strictEqual checks _(by Philipp Burckhardt)_
-   [`10c6209`](https://github.com/stdlib-js/stdlib/commit/10c6209e72680534f86acca37ec35ab3a42f81c3) - **test:** use strictEqual checks _(by Philipp Burckhardt)_
-   [`d5fa8e8`](https://github.com/stdlib-js/stdlib/commit/d5fa8e8a6267a837a25a7027e9fe3e847bc2d1c5) - **test:** use strictEqual checks _(by Philipp Burckhardt)_
-   [`37bc73b`](https://github.com/stdlib-js/stdlib/commit/37bc73bb51a701a51d254ec7b9cfb0ea202090b6) - **style:** remove empty lines _(by Philipp Burckhardt)_
-   [`3300a8d`](https://github.com/stdlib-js/stdlib/commit/3300a8d07089ec6fc055a8455cdcc432ff9cd093) - **style:** remove empty lines _(by Philipp Burckhardt)_
-   [`408d8ce`](https://github.com/stdlib-js/stdlib/commit/408d8ce266987c519d2b5ba2c46a179539e55fef) - **refactor:** swap out copy for assign in random streams packages _(by Philipp Burckhardt)_
-   [`dd9bd7c`](https://github.com/stdlib-js/stdlib/commit/dd9bd7cc45a8fc47f859f18140d740a510c84dee) - **refactor:** swap out copy for assign in random streams packages _(by Philipp Burckhardt)_
-   [`6df4112`](https://github.com/stdlib-js/stdlib/commit/6df41120f5fb56b233ce6b37ac729ec0b6d27bb5) - **refactor:** swap out copy for assign in random streams packages _(by Philipp Burckhardt)_
-   [`e5293c8`](https://github.com/stdlib-js/stdlib/commit/e5293c8bc349c9a0e4da11f5db20af14f3d2af3c) - **refactor:** swap out copy for assign in random streams packages _(by Philipp Burckhardt)_
-   [`2377b27`](https://github.com/stdlib-js/stdlib/commit/2377b2769d8122ce450c2d1630e1d34f1a877820) - **refactor:** swap out copy for assign in random streams packages _(by Philipp Burckhardt)_
-   [`e7f78f9`](https://github.com/stdlib-js/stdlib/commit/e7f78f9b116a69fd0cac2ab4a0a73c152526930a) - **refactor:** swap out copy for assign in base random packages _(by Philipp Burckhardt)_
-   [`ca17d38`](https://github.com/stdlib-js/stdlib/commit/ca17d384c32707458cbdeca74d28f65336ca7885) - **refactor:** swap out copy for assign in iter packages _(by Philipp Burckhardt)_
-   [`efef313`](https://github.com/stdlib-js/stdlib/commit/efef313d4ab609f887bdb93083e244fd32a45290) - **docs:** update namespace table of contents [(#1045)](https://github.com/stdlib-js/stdlib/pull/1045) _(by stdlib-bot, Athan Reines)_
-   [`421e1ae`](https://github.com/stdlib-js/stdlib/commit/421e1ae86e3d7fb31d156af9cd522303a6645220) - **feat:** update namespace TypeScript declarations [(#1044)](https://github.com/stdlib-js/stdlib/pull/1044) _(by stdlib-bot, Athan Reines)_
-   [`f31a231`](https://github.com/stdlib-js/stdlib/commit/f31a2314107978b6852fc4348097d30ba990dd95) - **docs:** fix method name _(by Athan Reines)_
-   [`50ba55b`](https://github.com/stdlib-js/stdlib/commit/50ba55b207fdd8ee04ca2fdc4c040e8852f335dd) - **feat:** add `weibull` to namespace _(by Athan Reines)_
-   [`dd140ad`](https://github.com/stdlib-js/stdlib/commit/dd140ad7d2206167d3a72ac2095e2a3dfca3a553) - **docs:** fix method name _(by Athan Reines)_
-   [`dd011c4`](https://github.com/stdlib-js/stdlib/commit/dd011c43d075178991c08da14134b4c50f00593d) - **docs:** fix capitalization _(by Athan Reines)_
-   [`b5e2ec2`](https://github.com/stdlib-js/stdlib/commit/b5e2ec2f549eabb521254b845a28ed9979e749ed) - **docs:** fix missing space _(by Athan Reines)_
-   [`0dc81cc`](https://github.com/stdlib-js/stdlib/commit/0dc81cc180c5445ddfe90931d9f6e255ae855a36) - **bench:** fix variable names _(by Athan Reines)_
-   [`82f6933`](https://github.com/stdlib-js/stdlib/commit/82f693348f49cba1b1608fdf3303328780eb723d) - **feat:** refactor declarations to use generics _(by Athan Reines)_
-   [`d63cef6`](https://github.com/stdlib-js/stdlib/commit/d63cef6465c789ca36b09fa8c3494662caa2562e) - **feat:** refactor declarations to use generics _(by Athan Reines)_
-   [`948fb07`](https://github.com/stdlib-js/stdlib/commit/948fb07c08b1015177635a320bfe2ab9a500dbb0) - **feat:** refactor declarations to use generics _(by Athan Reines)_
-   [`1faa20f`](https://github.com/stdlib-js/stdlib/commit/1faa20fe537a8864daa8b8df10f0a031526d8b54) - **feat:** refactor declarations to use generics _(by Athan Reines)_
-   [`1971510`](https://github.com/stdlib-js/stdlib/commit/197151046e828736cd6467c68eaf5fec5b4ea691) - **feat:** refactor declarations to use generics _(by Athan Reines)_
-   [`1f54cce`](https://github.com/stdlib-js/stdlib/commit/1f54cce45b10fa423748c1780df8255ecac02912) - **feat:** refactor declarations to use generics _(by Athan Reines)_
-   [`20831a2`](https://github.com/stdlib-js/stdlib/commit/20831a2ea5a99ac147441dd2256ed4ac5ee243ab) - **feat:** refactor declarations to use generics _(by Athan Reines)_
-   [`4ae8e28`](https://github.com/stdlib-js/stdlib/commit/4ae8e283ce5ab17166a4951dddb8c2f455db107e) - **feat:** refactor declarations to use generics _(by Athan Reines)_
-   [`5cd653f`](https://github.com/stdlib-js/stdlib/commit/5cd653f21708ab5a25a06ca30c479857b426b7ce) - **feat:** refactor declarations to use generics _(by Athan Reines)_
-   [`75d73c4`](https://github.com/stdlib-js/stdlib/commit/75d73c48a07d6ed476a4650e2b4835d14dee1976) - **feat:** refactor declarations to use generics _(by Athan Reines)_
-   [`4f4c99a`](https://github.com/stdlib-js/stdlib/commit/4f4c99a4f70902820a07ac28faf3bb9ee6fd16a6) - **feat:** refactor declarations to use generics _(by Athan Reines)_
-   [`40b1218`](https://github.com/stdlib-js/stdlib/commit/40b121811505243d58b0fddedf25aa146d2a9ed8) - **feat:** refactor declarations to use generics _(by Athan Reines)_
-   [`ebac539`](https://github.com/stdlib-js/stdlib/commit/ebac539f0c8f6e3a39d4b6c61104047c234c7728) - **feat:** refactor declarations to use generics _(by Athan Reines)_
-   [`41eb26b`](https://github.com/stdlib-js/stdlib/commit/41eb26b06033784dc8d5351545ccd58a8d8ec623) - **feat:** refactor declarations to use generics _(by Athan Reines)_
-   [`d59560c`](https://github.com/stdlib-js/stdlib/commit/d59560ca7fe013da7abc3e668fb4ffd4c215a9ba) - **fix:** add missing default type _(by Athan Reines)_
-   [`a55ea84`](https://github.com/stdlib-js/stdlib/commit/a55ea84c29eb7a2a846204d66f49ed72237a9f39) - **fix:** add missing default type _(by Athan Reines)_
-   [`f1786aa`](https://github.com/stdlib-js/stdlib/commit/f1786aa0519a3e93cde870c972c15be67c2ab9e2) - **feat:** refactor declarations to use generics _(by Athan Reines)_
-   [`7373470`](https://github.com/stdlib-js/stdlib/commit/73734702fc361f345475020b24a95952dbe5a33d) - **feat:** increase minimum TypeScript version _(by Athan Reines)_
-   [`aff558d`](https://github.com/stdlib-js/stdlib/commit/aff558dd62e730c9705e175e59ac466575f775ef) - **feat:** refactor declarations to use generics _(by Athan Reines)_
-   [`f15f90b`](https://github.com/stdlib-js/stdlib/commit/f15f90bf795ee8134dbfa72e736d18a760d6e12f) - **feat:** refactor declarations to preserve type info _(by Athan Reines)_
-   [`a5e0df4`](https://github.com/stdlib-js/stdlib/commit/a5e0df4737e6874822b1a9c96823970c9ed03867) - **feat:** refactor declarations to preserve type info _(by Athan Reines)_
-   [`9a8e351`](https://github.com/stdlib-js/stdlib/commit/9a8e35121e77aad9f2f41d1a3417759b04ebd761) - **feat:** refactor declarations to preserve type info _(by Athan Reines)_
-   [`da0b9de`](https://github.com/stdlib-js/stdlib/commit/da0b9de487089117e972e5f82b56ebe8ff3613dd) - **feat:** refactor declarations to preserve type info _(by Athan Reines)_
-   [`613cea4`](https://github.com/stdlib-js/stdlib/commit/613cea4175d77f3793205c2d4bd923f194163a02) - **feat:** refactor declarations to preserve type info _(by Athan Reines)_
-   [`3c2eed5`](https://github.com/stdlib-js/stdlib/commit/3c2eed55bd73df6cc90df72b2fe8c008353137f1) - **feat:** refactor declarations to preserve type info _(by Athan Reines)_
-   [`0e16a7b`](https://github.com/stdlib-js/stdlib/commit/0e16a7bae331020fcdff87adf7402e5d57887fbb) - **feat:** refactor declarations to preserve type info _(by Athan Reines)_
-   [`7785b17`](https://github.com/stdlib-js/stdlib/commit/7785b17c3e884e56ed7aa79212ae6253f3e2b845) - **feat:** refactor declarations to preserve type info _(by Athan Reines)_
-   [`59a17ec`](https://github.com/stdlib-js/stdlib/commit/59a17ec06f7df58172b9c7bbe8205f5c1d79102b) - **feat:** refactor declarations to preserve type info _(by Athan Reines)_
-   [`d995b3b`](https://github.com/stdlib-js/stdlib/commit/d995b3bf8c70a3faacc6e22d4928b0406e9b1360) - **feat:** refactor declarations to preserve type info _(by Athan Reines)_
-   [`4633e6b`](https://github.com/stdlib-js/stdlib/commit/4633e6b4ba220b74a253bcdb11a62eff8850ff5f) - **feat:** refactor declarations to preserve type info _(by Athan Reines)_
-   [`4a832d8`](https://github.com/stdlib-js/stdlib/commit/4a832d851babcfda80026820071f6ad2d02e2a2f) - **feat:** refactor declarations to preserve type info _(by Athan Reines)_
-   [`6e8d134`](https://github.com/stdlib-js/stdlib/commit/6e8d1340002eff02eb0f25922932b921dad021f1) - **feat:** refactor declarations to preserve type info _(by Athan Reines)_
-   [`62ff701`](https://github.com/stdlib-js/stdlib/commit/62ff701f2e780feee406326cf8eab726f0aebd00) - **feat:** refactor declarations to preserve type info _(by Athan Reines)_
-   [`a1c7136`](https://github.com/stdlib-js/stdlib/commit/a1c7136e82a91e685f0bec84e3d339edce2aeb1f) - **feat:** refactor declarations to preserve type info _(by Athan Reines)_
-   [`5bb4a8e`](https://github.com/stdlib-js/stdlib/commit/5bb4a8e40584a323d588594ebdb8ded4db8481cf) - **feat:** refactor declarations to preserve type info _(by Athan Reines)_
-   [`f3f4cc8`](https://github.com/stdlib-js/stdlib/commit/f3f4cc8dd9f5e46c85470e51ed0768f3d311153f) - **feat:** refactor declarations to preserve type info _(by Athan Reines)_
-   [`fc71c6e`](https://github.com/stdlib-js/stdlib/commit/fc71c6e6e655f3275ff53770904312695b4623db) - **feat:** refactor declarations to preserve type info _(by Athan Reines)_
-   [`d8790e6`](https://github.com/stdlib-js/stdlib/commit/d8790e6a6f199987593d2710a75b2f6a48431c0a) - **feat:** refactor declarations to preserve type info _(by Athan Reines)_
-   [`ba99176`](https://github.com/stdlib-js/stdlib/commit/ba99176f6886150ebd26c21cb3146d292dba1519) - **feat:** refactor declarations to preserve type info _(by Athan Reines)_
-   [`7527857`](https://github.com/stdlib-js/stdlib/commit/7527857b77dda80db7c7a11efefd79af6b74988c) - **feat:** refactor declarations to preserve type info _(by Athan Reines)_
-   [`64ca79d`](https://github.com/stdlib-js/stdlib/commit/64ca79d2e3b6f9be0156028081e0fb74249abd7a) - **feat:** refactor declarations to preserve type info _(by Athan Reines)_
-   [`855aa78`](https://github.com/stdlib-js/stdlib/commit/855aa78ade58e1ca57afa95270276e207b4e677c) - **feat:** refactor declarations to preserve type info _(by Athan Reines)_
-   [`ec09928`](https://github.com/stdlib-js/stdlib/commit/ec0992817cc0bec780556024e40bf8690f4745e9) - **feat:** refactor declarations to preserve type info _(by Athan Reines)_
-   [`8257234`](https://github.com/stdlib-js/stdlib/commit/825723484ecf954768107cdab8b58cc27d233380) - **feat:** refactor declarations to preserve type info _(by Athan Reines)_
-   [`9136b78`](https://github.com/stdlib-js/stdlib/commit/9136b78888f718551327ae1f6528b3eace109c7f) - **feat:** refactor declarations to preserve type info _(by Athan Reines)_
-   [`6a5896b`](https://github.com/stdlib-js/stdlib/commit/6a5896bfb56db16b7d08e79ff1a66e0dac8ac500) - **feat:** refactor declarations to preserve type info _(by Athan Reines)_
-   [`02fbcc3`](https://github.com/stdlib-js/stdlib/commit/02fbcc32fc115172d9bf172adb2b9a5985aca686) - **feat:** refactor declarations to preserve type info _(by Athan Reines)_
-   [`e43e02b`](https://github.com/stdlib-js/stdlib/commit/e43e02b17858e89b5c29f7cf4bf8c12248634f1f) - **feat:** refactor declarations to preserve type info _(by Athan Reines)_
-   [`1613149`](https://github.com/stdlib-js/stdlib/commit/16131499527ff0fd4812eb9f99435858ed89dd7f) - **feat:** refactor declarations to preserve type info _(by Athan Reines)_
-   [`77cd6ce`](https://github.com/stdlib-js/stdlib/commit/77cd6ceb101aa3cf049e1d47f27456daa4b9a194) - **feat:** refactor declarations to preserve type info _(by Athan Reines)_
-   [`a4eba9b`](https://github.com/stdlib-js/stdlib/commit/a4eba9be19d13051cfb2ab62875816b9d0cc6520) - **feat:** refactor declarations to preserve type info _(by Athan Reines)_
-   [`f96d25e`](https://github.com/stdlib-js/stdlib/commit/f96d25ede7d826d4499791e98545530f3a331252) - **feat:** refactor declarations to preserve type info _(by Athan Reines)_
-   [`9d12bad`](https://github.com/stdlib-js/stdlib/commit/9d12bad7b6e19b6ec09e951d663a5d42e09e45af) - **feat:** refactor declarations to preserve type info _(by Athan Reines)_
-   [`7adf84c`](https://github.com/stdlib-js/stdlib/commit/7adf84c696f6b281addc17cffb2a7807e5c401bb) - **feat:** refactor declarations to preserve type info _(by Athan Reines)_
-   [`3530c55`](https://github.com/stdlib-js/stdlib/commit/3530c557bbb424faac0ce32507ce9a6121d73519) - **feat:** refactor declarations to preserve type info _(by Athan Reines)_
-   [`8d6ee73`](https://github.com/stdlib-js/stdlib/commit/8d6ee730ee78dadad28a59cf479e47b4f3d2c717) - **feat:** refactor declarations to preserve type info _(by Athan Reines)_
-   [`9ac5b91`](https://github.com/stdlib-js/stdlib/commit/9ac5b91afb3d62e9c2b7004fd39a3800be6e8bee) - **feat:** refactor declarations to preserve type info _(by Athan Reines)_
-   [`5b12c1f`](https://github.com/stdlib-js/stdlib/commit/5b12c1f6248c023c9220eafc4f88d0ceacbfa667) - **feat:** refactor declarations to preserve type info _(by Athan Reines)_
-   [`6ae0ee2`](https://github.com/stdlib-js/stdlib/commit/6ae0ee271a7aa4c5d8c195d69b18c76978c827f6) - **chore:** remove comment _(by Athan Reines)_
-   [`72ac2e6`](https://github.com/stdlib-js/stdlib/commit/72ac2e6e3f3f96d844799729c439c4a344e69e19) - **feat:** refactor declarations to preserve type info _(by Athan Reines)_
-   [`8b22739`](https://github.com/stdlib-js/stdlib/commit/8b2273980e4199faf0b68c955f425c4fdcf27693) - **feat:** refactor declarations to preserve type info _(by Athan Reines)_
-   [`55e5756`](https://github.com/stdlib-js/stdlib/commit/55e57561273881a0e5bb1b35489a4801f0d059b6) - **chore:** fix package meta data indentation [(#1033)](https://github.com/stdlib-js/stdlib/pull/1033) _(by stdlib-bot, Athan Reines)_
-   [`0b1ec25`](https://github.com/stdlib-js/stdlib/commit/0b1ec25a7543f9954826ae870f5e8979258360e7) - **feat:** add package for creating an array of geometric pseudorandom numbers [(#971)](https://github.com/stdlib-js/stdlib/pull/971) _(by Yernar Yergaziyev, Philipp Burckhardt)_
-   [`ca77f96`](https://github.com/stdlib-js/stdlib/commit/ca77f9674caf1c7c40da1dcff656f8ded55d927d) - **feat:** add strided interface for Weibull distribution [(#1012)](https://github.com/stdlib-js/stdlib/pull/1012) _(by Amit Jimiwal, Philupp Burckhardt)_
-   [`28e1c84`](https://github.com/stdlib-js/stdlib/commit/28e1c84390d88044883c9ef940a12f38d66ea3ef) - **docs:** resolve C lint errors _(by Athan Reines)_
-   [`307c8e6`](https://github.com/stdlib-js/stdlib/commit/307c8e635fbfd9fddff508b8aa38372001a495a9) - **docs:** fix grammar _(by Athan Reines)_
-   [`dd64c1f`](https://github.com/stdlib-js/stdlib/commit/dd64c1f8adecb90cf7fcde7f86aab19526c4f000) - **docs:** update option description _(by Athan Reines)_
-   [`722eb30`](https://github.com/stdlib-js/stdlib/commit/722eb308a795baca6ac308ecb41b8245f8ab21d4) - **docs:** update option description _(by Athan Reines)_
-   [`bfd5970`](https://github.com/stdlib-js/stdlib/commit/bfd597009a78c34821300c9da74dd4eb297ad87a) - **docs:** update description for `submode` option _(by Athan Reines)_
-   [`f0945c7`](https://github.com/stdlib-js/stdlib/commit/f0945c79fd8370bb80fb4ec020c2471b7ca313b0) - **test:** add tests for the main export _(by Athan Reines)_
-   [`2b4e703`](https://github.com/stdlib-js/stdlib/commit/2b4e70368f6e660231aea893f149fd5368c29a5a) - **fix:** add missing argument to function invocation _(by Athan Reines)_
-   [`b9b4847`](https://github.com/stdlib-js/stdlib/commit/b9b48479cd3e74b76aaa360252d036d1365bb8b2) - **docs:** update copy _(by Athan Reines)_
-   [`e44f8c0`](https://github.com/stdlib-js/stdlib/commit/e44f8c04cf659116ff94957106a66c415ff31b8a) - **feat:** add `random/exponential` _(by Athan Reines)_
-   [`bbce08b`](https://github.com/stdlib-js/stdlib/commit/bbce08b3af5c31a152f872ed9254b7d68fefd01c) - **docs:** remove extraneous parameter description _(by Athan Reines)_
-   [`2b7294c`](https://github.com/stdlib-js/stdlib/commit/2b7294cfb85eae2efedc868fecc3a86316825f44) - **docs:** remove unsupported options _(by Athan Reines)_
-   [`e8775fc`](https://github.com/stdlib-js/stdlib/commit/e8775fcbe3617b9013bd1cea74d7f70aa2669ab4) - **feat:** update namespace TypeScript declarations [(#951)](https://github.com/stdlib-js/stdlib/pull/951) _(by stdlib-bot, Athan Reines)_
-   [`d115362`](https://github.com/stdlib-js/stdlib/commit/d115362a80635761a217131b678abc7c21d32f49) - **feat:** update namespace table of contents [(#933)](https://github.com/stdlib-js/stdlib/pull/933) _(by stdlib-bot, Athan Reines)_
-   [`a6aafba`](https://github.com/stdlib-js/stdlib/commit/a6aafba4ff5ee16ff039777addcea4af3b9f9412) - **docs:** remove extra empty lines and fix indent _(by Philipp Burckhardt)_
-   [`154b37b`](https://github.com/stdlib-js/stdlib/commit/154b37be8e4850cc50713870207c62e305a62279) - **feat:** add `gamma`, `invgamma`, and `cosine` to namespace _(by Athan Reines)_
-   [`907145e`](https://github.com/stdlib-js/stdlib/commit/907145e28f12acf8d027cc60ce87a5d1d61474e7) - **feat:** add `cosine` to namespace _(by Athan Reines)_
-   [`d315362`](https://github.com/stdlib-js/stdlib/commit/d315362c4d6041f60641d6130ecf2143013dc911) - **feat:** add interface for filling strided array with cosine random numbers _(by Philipp Burckhardt)_
-   [`e2f8adb`](https://github.com/stdlib-js/stdlib/commit/e2f8adb21e5a0513cd913684e83aba7d791cab63) - **feat:** add interface for filling array with cosine random numbers _(by Philipp Burckhardt)_
-   [`a2e039c`](https://github.com/stdlib-js/stdlib/commit/a2e039c465b5bab7aab4a6b8d69bb1207c6fd519) - **feat:** add interface for filling strided array with inverse gamma random numbers _(by Philipp Burckhardt)_
-   [`ddf4788`](https://github.com/stdlib-js/stdlib/commit/ddf47885bf11fa06a123d57f425c81aebe3a329d) - **feat:** add interface for filling strided array with gamma random numbers _(by Philipp Burckhardt)_
-   [`d60f27b`](https://github.com/stdlib-js/stdlib/commit/d60f27bfaaf3d9d2ee406a8bea9436a00809f699) - **docs:** update namespace table of contents [(#930)](https://github.com/stdlib-js/stdlib/pull/930) _(by stdlib-bot, Athan Reines)_
-   [`0b8e8d9`](https://github.com/stdlib-js/stdlib/commit/0b8e8d96449b3c5fd2400942107d511b6462e78b) - **feat:** add `minstdShuffle` to namespace _(by Athan Reines)_
-   [`8bf72f5`](https://github.com/stdlib-js/stdlib/commit/8bf72f5c0544ec4caf449ecd8acfe50776048d13) - **feat:** add strided interface to fill an array with pseudorandom numbers using an LCG whose output is shuffled _(by Athan Reines)_
-   [`c5cc648`](https://github.com/stdlib-js/stdlib/commit/c5cc648a6927beeb56525343efaa30c718fdc5b3) - **feat:** add `minstdShuffle` to namespace _(by Athan Reines)_
-   [`2c2aa4e`](https://github.com/stdlib-js/stdlib/commit/2c2aa4e06184979f0f33133812b8a1eb8fe550d9) - **feat:** add support for creating an array of pseudorandom numbers using an LCG whose output is shuffled _(by Athan Reines)_
-   [`e0bbc51`](https://github.com/stdlib-js/stdlib/commit/e0bbc51b18b5bf6aba43f8b4f3578656da6b580e) - **docs:** update namespace table of contents [(#927)](https://github.com/stdlib-js/stdlib/pull/927) _(by stdlib-bot, Athan Reines)_
-   [`90c53b0`](https://github.com/stdlib-js/stdlib/commit/90c53b0fb40495de722daba3d8d9ea4412fa51fe) - **feat:** update namespace TypeScript declarations [(#923)](https://github.com/stdlib-js/stdlib/pull/923) _(by stdlib-bot, Athan Reines)_
-   [`a1fd583`](https://github.com/stdlib-js/stdlib/commit/a1fd5839885672378e0a2774019b2710ae7b5fcf) - **feat:** add `betaprime` to namespace _(by Athan Reines)_
-   [`06425a7`](https://github.com/stdlib-js/stdlib/commit/06425a750ca083836efe74864dfd0eacb41318ff) - **feat:** add `invgamma` and `betaprime` to namespace _(by Athan Reines)_
-   [`059038f`](https://github.com/stdlib-js/stdlib/commit/059038feb604c84bc518ff4063d69c32e3975bb7) - **feat:** add strided interface for filling a strided array with pseudorandom numbers drawn from a beta prime distribution [(#918)](https://github.com/stdlib-js/stdlib/pull/918) _(by Philipp Burckhardt, Athan Reines)_
-   [`266804a`](https://github.com/stdlib-js/stdlib/commit/266804a567b619f72e0012311f05557d4b810def) - **feat:** add support for creating an array of pseudorandom numbers drawn from an inverse gamma distribution [(#915)](https://github.com/stdlib-js/stdlib/pull/915) _(by Philipp Burckhardt)_
-   [`9bc8935`](https://github.com/stdlib-js/stdlib/commit/9bc893578fd02ebda8067ab191efd74dcbbcdb7d) - **feat:** add `betaprime` to namespace _(by Athan Reines)_
-   [`5cb61c4`](https://github.com/stdlib-js/stdlib/commit/5cb61c418a58fc1559474dd5e59c60a5d36bf06a) - **feat:** add support for creating an array of pseudorandom numbers drawn from a beta prime distribution [(#917)](https://github.com/stdlib-js/stdlib/pull/917) _(by Philipp Burckhardt)_
-   [`1e82c3b`](https://github.com/stdlib-js/stdlib/commit/1e82c3b3f340f4c4b6634b57e02c47a271187c25) - **feat:** add `gamma` to namespace _(by Athan Reines)_
-   [`00e8da0`](https://github.com/stdlib-js/stdlib/commit/00e8da0854d472abef0c22be7828084845f90343) - **feat:** update namespace TypeScript declarations [(#919)](https://github.com/stdlib-js/stdlib/pull/919) _(by stdlib-bot, Athan Reines)_
-   [`720e367`](https://github.com/stdlib-js/stdlib/commit/720e367ed057bf75c6ae4fce8b62f606b99a94c0) - **feat:** add support for creating an array of pseudorandom numbers drawn from a gamma distribution [(#914)](https://github.com/stdlib-js/stdlib/pull/914) _(by Philipp Burckhardt)_
-   [`16a31f3`](https://github.com/stdlib-js/stdlib/commit/16a31f3cb9f72570d07af68b7656a008ca341e26) - **docs:** update namespace table of contents [(#909)](https://github.com/stdlib-js/stdlib/pull/909) _(by stdlib-bot, Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 4 people contributed to this release. Thank you to the following contributors:

-   Amit Jimiwal
-   Athan Reines
-   Philipp Burckhardt
-   Yernar Yergaziyev

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.0.12">

## 0.0.12 (2021-08-23)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.11">

## 0.0.11 (2021-07-10)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.10">

## 0.0.10 (2021-07-07)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.9">

## 0.0.9 (2021-06-27)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.8">

## 0.0.8 (2021-06-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.7">

## 0.0.7 (2021-06-15)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.6">

## 0.0.6 (2021-06-14)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.5">

## 0.0.5 (2021-06-13)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.4">

## 0.0.4 (2021-06-12)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.3">

## 0.0.3 (2021-06-12)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.2">

## 0.0.2 (2021-06-10)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.1">

## 0.0.1 (2021-06-10)

No changes reported for this release.

</section>

<!-- /.release -->

