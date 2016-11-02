[![NPM](https://nodei.co/npm/express-promise-wrap.png?downloads=false&stars=false)](https://npmjs.org/package/express-promise-wrap) [![NPM](https://nodei.co/npm-dl/express-promise-wrap.png?months=6)](https://npmjs.org/package/express-promise-wrap)


# express-promise-wrap

`express-promise-wrap` is a [Express](http://expressjs.com/) helper that allows the use of async functions as route handlers.


## Installation

    $ npm install express-promise-wrap


## Usage

```js
const wrap = require('express-promise-wrap');
// ...
app.get('/path', wrap(async (req, res) => {...}));
```


## Credits

See the [contributors](https://github.com/pilwon/express-promise-wrap/graphs/contributors).


## License

<pre>
The MIT License (MIT)

Copyright (c) 2016 Pilwon Huh

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
</pre>

[![Analytics](https://ga-beacon.appspot.com/UA-47034562-31/express-promise-wrap/readme?pixel)](https://github.com/pilwon/express-promise-wrap)