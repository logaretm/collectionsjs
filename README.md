# CollectionJS

A lightweight object for array pipelining operations.

Arrays are awesome in JavaScript and now are easier to use and manipulate using the ES5 functions like map and filter, which enables you to chain some operations like:

```JavaScript
var array = [1, 2, 3];
array.map(i => i + 1).filter(i => i > 2);
```
which can be thought of as a pipeline of operations. however there are some functions that do not exist or considered as an edge case which can be fairly simple to implement, but annoying to reuse.

CollectionJS is an object that acts as a wrapper around the Array object, exposing the same Array API and some extra methods and utilities, and simplifying their use. and it always returns a Collection (except for some examples) meaning you will be able to keep chaining until you get the collection you want to work with.

### Why (Inspiration)?
I'm not an expert JavaScript developer, but I run into enough situations where I needed some complex operations, great libraries like lodash are amazing and offer a whole lot to do with arrays, but most methods return an array. so doing multiple operations wasn't as great.

Working with The PHP framework Laravel, I came across the collection object. I didn't realize how powerful the combination of immutable objects are until I read the 'Refactoring to collections book' which is a great read for any developer.

And I had a free week at the time.

### Install

npm

```bash
npm install collectionjs --save
```

bower

```bash
bower install collectionjs --save
```

### Usage

Download it manually and add the script tag at the bottom of your body, it doesn't matter in which order because there are no dependencies.
```html
<script src="/path/to/collection.min.js"></script>
```

However if you have a more complex setup, Then in your code you can do:

```JavaScript
// ES6
import Collection from 'collectionjs';
```

or

```JavaScript
var Collection = require('collectionjs');
```

### Behaviors
I have chosen to allow different types to be used for the same parameter, some may see this as some violation of some pattern out there or something, while I like to respect all best practices I think the trade of having less methods to memorize and the versatility of one method is better than writing over 2x the same amount of functions for slightly different behaviors.

* Most of the methods just defer to the existing array functions like filter and map.
* Many methods accept a different argument types for the same parameter, which will dictate its behavior like `where()` and `first()`.
* Few methods are just an alias.


### API
There are just over 25+ unique methods for most of your needs I will be adding more useful ones in time.

Here is a brief summary, read the [docs](https://logaretm.github.io/collectionjs/) for different behaviors and usage:

* [add(item)](https://logaretm.github.io/collectionjs/class/src/collection.js~Collection.html#instance-method-add)
* [all()](https://logaretm.github.io/collectionjs/class/src/collection.js~Collection.html#instance-method-all)
* [average(callback)](https://logaretm.github.io/collectionjs/class/src/collection.js~Collection.html#instance-method-average)
* [chunk(size)](https://logaretm.github.io/collectionjs/class/src/collection.js~Collection.html#instance-method-chunk)
* [concat(Array)](https://logaretm.github.io/collectionjs/class/src/collection.js~Collection.html#instance-method-concat)
* [count()](https://logaretm.github.io/collectionjs/class/src/collection.js~Collection.html#instance-method-count)
* [each(callback)](https://logaretm.github.io/collectionjs/class/src/collection.js~Collection.html#instance-method-each)
* [filter(callback)](https://logaretm.github.io/collectionjs/class/src/collection.js~Collection.html#instance-method-filter)
* [find(index)](https://logaretm.github.io/collectionjs/class/src/collection.js~Collection.html#instance-method-find)
* [first(callback)](https://logaretm.github.io/collectionjs/class/src/collection.js~Collection.html#instance-method-first)
* [flatten(deep)](https://logaretm.github.io/collectionjs/class/src/collection.js~Collection.html#instance-method-flatten)
* [keys()](https://logaretm.github.io/collectionjs/class/src/collection.js~Collection.html#instance-method-keys)
* [last(callback)](https://logaretm.github.io/collectionjs/class/src/collection.js~Collection.html#instance-method-last)
* [map(callback)](https://logaretm.github.io/collectionjs/class/src/collection.js~Collection.html#instance-method-map)
* [pluck(callback)](https://logaretm.github.io/collectionjs/class/src/collection.js~Collection.html#instance-method-pluck)
* [push(item)](https://logaretm.github.io/collectionjs/class/src/collection.js~Collection.html#instance-method-push)
* [reduce(callback, initial)](https://logaretm.github.io/collectionjs/class/src/collection.js~Collection.html#instance-method-reduce)
* [reject(callback)](https://logaretm.github.io/collectionjs/class/src/collection.js~Collection.html#instance-method-reject)
* [reverse()](https://logaretm.github.io/collectionjs/class/src/collection.js~Collection.html#instance-method-reverse)
* [skip(count)](https://logaretm.github.io/collectionjs/class/src/collection.js~Collection.html#instance-method-skip)
* [slice(start, end)](https://logaretm.github.io/collectionjs/class/src/collection.js~Collection.html#instance-method-slice)
* [stringify()](https://logaretm.github.io/collectionjs/class/src/collection.js~Collection.html#instance-method-stringify)
* [sum(callback)](https://logaretm.github.io/collectionjs/class/src/collection.js~Collection.html#instance-method-sum)
* [take(count)](https://logaretm.github.io/collectionjs/class/src/collection.js~Collection.html#instance-method-take)
* [values(count)](https://logaretm.github.io/collectionjs/class/src/collection.js~Collection.html#instance-method-values)
* [where(callback)](https://logaretm.github.io/collectionjs/class/src/collection.js~Collection.html#instance-method-where)
* [zip(Array)](https://logaretm.github.io/collectionjs/class/src/collection.js~Collection.html#instance-method-zip)

### Testing

I use `ava` for testing which is an amazing test runner. With `nyc` for coverage.

`npm run test`

and you can lint with

`npm run lint`

### Contribution

Go a head and you will be fully credited.
Don't forget to follow the code style and always add a test file for any additions.

### Build

* Clone the repo.
* `npm install`
* Write code better than mine.
* `npm run build` which will build both minified and unminified versions.


### So...Performance?

I don't think its very performant at the moment not very slow either, I can always use some help with optimizing things.


### MIT
