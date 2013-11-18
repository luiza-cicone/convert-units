convert-units
=============

A handy utility for converting between quantities in different units.

Usage
-----

`convert-units` has a simple chained API that is easy to read.

Here's how you move between the metric units for volume:

```
var convert = require('convert-units');

convert(1).from('ltr').to('ml')
// 1000
```

Jump from imperial to metric units the same way:

```
convert(1).from('lb').to('kg');
// 0.4536... (tested to 4 significant figures)
```

Just be careful not to ask for an impossible conversion:

```
convert(1).from('oz').to('fl-oz')
// throws -- you can't go from mass to volume!
```

If you ever want to know the possible conversions for a unit, just use `.possibilities`:

```
convert(1).from('ltr').possibilities();
// [ 'ml', 'ltr', 'tsp', 'tbsp', 'fl-oz', 'cup', 'pnt', 'qt', 'gal' ]

convert(1).from('kg').possibilities();
// [ 'mcg', 'mg', 'g', 'kg', 'oz', 'lb' ]
```

License
-------
Copyright (c) 2013 Ben Ng, http://benng.me

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.