# commander.js-error
A tiny module for formatting error output to match commander.js default errors.

[![npm package](https://badge.fury.io/js/commander.js-error.svg)](https://www.npmjs.com/package/commander.js-error)
[![node version](https://img.shields.io/node/v/commander.js-error.svg?style=flat)](http://nodejs.org/download/)
[![dependency status](https://david-dm.org/justinhelmer/commander.js-error.svg)](https://github.com/justinhelmer/commander.js-error)
[![devDependency status](https://david-dm.org/justinhelmer/commander.js-error/dev-status.svg)](https://github.com/justinhelmer/commander.js-error#info=devDependencies)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/justinhelmer/commander.js-error/issues)

Intended to be used in conjunction with [commander.js](https://github.com/tj/commander.js).

Does just what it says; nothing more, nothing less.

Instead of this:

```bash
$ node script.js
unknown [foo]: foo must be of type bar
$ <prompt>
```

you get this:

```bash
$ node script.js

  error: unknown [foo]: foo must be of type bar
  
$ <prompt>
```

That is all.

## Installation

```bash
$ npm install --save commander.js-error 
```

## Usage

```js
const error = require('commander.js-error');
error(new Error('unknown [foo]: foo must be of type bar'));
```

Follows the same syntax as [console.error](https://nodejs.org/api/console.html#console_console_error_data):

```js
const foo = 'bar';
error('unknown [foo]:', 'foo must be of type', foo);
```

## Options

`commander.js-error` accepts options, but they **must** be at the _first_ position in the arguments list, i.e.:

```js
const error = require('commander.js-error');

error(options, message1, ...);             // WILL work
error(options, new Error('oops!'));        // WILL work

error(message1, ..., options);             // WILL NOT work
error(new Error('oops!'), options);        // WILL NOT work
```

`options` should be an object and can contain any of the following:

- `exit` _{mixed}_ - Whether or not to exit. Possible values:
    - `false` - do not exit
    - `true` - exit with a status of `1` (default)
    - `[0...255]` - exit with a status of `exit`
- `verbose` _{boolean}_ - Log the full `stack trace` (if an `Error` object is supplied) and `exit status`.

## Contributing

[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/justinhelmer/commander.js-error/issues)
[![devDependency status](https://david-dm.org/justinhelmer/commander.js-error/dev-status.svg)](https://github.com/justinhelmer/commander.js-error#info=devDependencies)

## License

The MIT License (MIT)

Copyright (c) 2016 Justin Helmer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
