# laravel-elixir-sri

[![npm version](http://img.shields.io/npm/v/laravel-elixir-sri.svg)](https://npmjs.org/package/laravel-elixir-sri) [![npm license](http://img.shields.io/npm/l/laravel-elixir-sri.svg)](https://npmjs.org/package/laravel-elixir-sri)

Generate [Subresource Integrity (SRI)](https://www.w3.org/TR/SRI/) hashes in your Laravel Elixir asset pipeline.

## Install

```bash
npm install laravel-elixir-sri --save-dev
```

or

```bash
yarn add laravel-elixir-sri --dev
```

## Usage within Laravel Elixir

### Example Gulpfile:

```javascript
var elixir = require('laravel-elixir');

require('laravel-elixir-sri');

elixir(function (mix) {
    mix.sri([
        'css/app.css',
        'js/app.js'
    ]);
});
```

This will generate hashes for the given files stored in your **public folder** and save them to a `/public/sri.json` file.

### Changing the output folder:

You can specify a different output folder in the second argument:

```javascript
// Save sri.json to /public/assets
mix.sri('css/app.css', '/public/assets');
```

### Parameters:

If you wish to customize more options, you can pass them as an object in the third argument:

```javascript
// Use sha512 algorithm
mix.sri('js/app.js', null, {
    algorithms: ['sha512']
});
```
You can find all the available parameters on `gulp-sri`'s [documentation](https://www.npmjs.com/package/gulp-sri#parameters).

## Usage within Laravel views

First, you need to require the [laravel-sri](https://github.com/sebdesign/laravel-sri) package in your `composer.json`.

To reference the generated hashes from the `sri.json` in your views, you may use the `integrity` helper function with the name of the file you are using in your `elixir` or `asset` function.

As a fallback, if the given file is not found in the `sri.json`, **it will generate the appropriate hashes on the fly** for your convenience. Read more on the [laravel-sri](https://github.com/sebdesign/laravel-sri) repository.

```php
{{-- Use with elixir() function --}}
<link rel="stylesheet" href="{{ elixir('css/app.css') }}" integrity="{{ integrity('css/app.css') }}" crossorigin="anonymous">

{{-- Use with asset() function --}}
<script src="{{ asset('js/app.js') }}" integrity="{{ integrity('js/app.js') }}" crossorigin="anonymous"></script>
```

## Credits

- [Matthew Conlen](https://github.com/mathisonian), author of [gulp-sri](https://github.com/mathisonian/gulp-sri)

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.
