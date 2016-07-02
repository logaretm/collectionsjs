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

Here is a brief summary, read the docs for different behaviors and usage:

* add(item)
* all()
* average(callback)
* chunk(size)
* concat(Array)
* count()
* each(callback)
* filter(callback)
* find(index)
* first(callback)
* flatten(deep)
* getItems()
* keys()
* last(callback)
* map(callback)
* pluck(callback)
* push(item)
* reduce(callback, initial)
* reject(callback)
* reverse()
* skip(count)
* slice(start, end)
* stringify()
* sum(callback)
* take(count)
* where(callback)
* zip(Array)


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
