(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Collection"] = factory();
	else
		root["Collection"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol ? \"symbol\" : typeof obj; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/**\n * The Collection object.\n *\n * @example\n * let collection = new Collection([1, 2, 3]);\n */\n\nvar Collection = function () {\n    /**\n     * The collection constructor.\n     *\n     * @param  {Array} [items=[]] the array to collect.\n     * @return {Collection} A Collection object.\n     */\n\n    function Collection() {\n        var items = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];\n\n        _classCallCheck(this, Collection);\n\n        /**\n         * The internal array.\n         * @type {Array|Object}\n         */\n        this.items = items;\n    }\n\n    /**\n     * Adds an item to the collection.\n     *\n     * @param {*} item the item to be added.\n     * @return {Collection} the collection object.\n     * @example\n     * const collection = new Collection();\n     * collection.add('Arya');\n     * console.log(collection.first()); //outputs 'Arya'\n     */\n\n\n    _createClass(Collection, [{\n        key: 'add',\n        value: function add(item) {\n            this.items.push(item);\n\n            return this;\n        }\n\n        /**\n         * Gets the collected elements in an array.\n         *\n         * @return {Array} the internal array.\n         * @example\n         * const collection = new Collection([1, 2, 3]);\n         * console.log(collection.all()); // [1, 2, 3]\n         */\n\n    }, {\n        key: 'all',\n        value: function all() {\n            return this.items;\n        }\n\n        /**\n         * Gets the average value of the array or a property or a callback return value.\n         * If no property is provided: it will calculate the average value of the array (Numeric array).\n         * If property is a string: it will calculate the average value of that property for all\n         *  objects in the array.\n         * If Property is a callback: the the averaging will use the value returned instead.\n         *\n         * @param  {function|string} [property=null] The property name or the callback function.\n         * defaults to null.\n         * @return {number} The average value.\n         * @example <caption>Averaging elements</caption>\n         * const collection = new Collection([1, 2, 3]);\n         * console.log(collection.average()); // 2\n         * @example <caption>Averaging a property</caption>\n         * const collection = new Collection([\n         *     { name: 'Arya Stark', age: 9 },\n         *     { name: 'Bran Stark', age: 7 },\n         *     { name: 'Jon Snow', age: 14 }\n         * ]);\n         * console.log(collection.average('age')); // 10\n         * @example <caption>Averaging using a callback</caption>\n         * const collection = new Collection([\n         *     { name: 'Arya Stark', age: 9 },\n         *     { name: 'Bran Stark', age: 7 },\n         *     { name: 'Jon Snow', age: 14 }\n         * ]);\n         * console.log(collection.average(i => i.age)); // 10\n         */\n\n    }, {\n        key: 'average',\n        value: function average() {\n            var property = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];\n\n            return this.sum(property) / this.count();\n        }\n\n        /**\n         * Chunks the collection into a new collection with equal length arrays as its items.\n         *\n         * @param  {number} size the size of each chunk.\n         * @return {Collection} the new collection.\n         * @example\n         * const collection = new Collection([1, 2, 3, 4, 5]).chunk(2);\n         * console.log(collection.all()); // [[1, 2], [3, 4], [5]]\n         */\n\n    }, {\n        key: 'chunk',\n        value: function chunk(size) {\n            if (size <= 0) {\n                return new Collection();\n            }\n\n            var items = [];\n\n            for (var i = 0; i < this.count(); i += size) {\n                items.push(this.items.slice(i, i + size));\n            }\n\n            return new Collection(items);\n        }\n\n        /**\n         * Static constructor.\n         * cool if you don't like using the 'new' keyword.\n         *\n         * @param  {Array} collectable the array or the string to wrapped in a collection.\n         * @return {Collection} A collection that wraps the collectable items.\n         * @example\n         * const collection = Collection.collect([1, 2, 3]);\n         * console.log(collection.all()); // [1, 2, 3]\n         */\n\n    }, {\n        key: 'concat',\n\n\n        /**\n         * Concatnates the collection with an array or another collection.\n         *\n         * @param {Array|Collection} collection the array or the collection to be concatenated with.\n         * @return {Collection} concatenated collection.\n         * @example\n         * const collection = new Collection([1, 2, 3]);\n         * const array = [4, 5, 6]; // or another collection.\n         * const newCollection = collection.concat(array);\n         * console.log(newCollection.all()); // [1, 2, 3, 4, 5, 6]\n         */\n        value: function concat(collection) {\n            if (Array.isArray(collection)) {\n                return new Collection(this.items.concat(collection));\n            }\n\n            return new Collection(this.items.concat(collection.all()));\n        }\n\n        /**\n         * Checks if there is at least one occurance of an element using a closure.\n         * @param  {function} closure The closure the be used on each element.\n         * @return {boolean} true if at least one occurance exist, false otherwise.\n         * @example\n         * const collection = new Collection([\n         *     { name: 'John Snow', age: 14 },\n         *     { name: 'Bran Stark', age: 7 },\n         *     { name: 'Arya Stark', age: 9 }\n         * ]);\n         *\n         * collection.contains(stark => stark.name === 'John Snow'); // true\n         * collection.contains(stark => stark.name === 'Eddard Stark'); // false\n         */\n\n    }, {\n        key: 'contains',\n        value: function contains(closure) {\n            return !!this.first(closure);\n        }\n\n        /**\n         * Gets the number of items in the collection.\n         *\n         * @return {number} Number of items in the collection.\n         * @example\n         * const collection = new Collection([1, 2, 3]);\n         * console.log(collection.count()); // 3\n         */\n\n    }, {\n        key: 'count',\n        value: function count() {\n            return this.items.length;\n        }\n\n        /**\n         * Executes a callback for each element in the collection.\n         *\n         * @param  {function} callback the callback to be excuted for each item.\n         * @return {Collection} The collection object.\n         * @example\n         * const collection = new Collection(['this', 'is', 'collectionjs']);\n         * collection.each(t => console.log(t)); // this is collectionjs\n         */\n\n    }, {\n        key: 'each',\n        value: function each(callback) {\n            this.items.forEach(callback);\n\n            return this;\n        }\n\n        /**\n         * Filters the collection using a predicate (callback that returns a boolean).\n         *\n         * @param  {function} callback A function that returns a boolean expression.\n         * @return {Collection} Filtered collection.\n         * @example\n         * const collection = new Collection([\n         *     { name: 'Arya Stark', age: 9 },\n         *     { name: 'Bran Stark', age: 7 },\n         *     { name: 'Jon Snow', age: 14 }\n         * ]).filter(stark => stark.age === 14);\n         * console.log(collection.all()); // [{ name: 'Jon Snow', age: 14 }]\n         */\n\n    }, {\n        key: 'filter',\n        value: function filter(callback) {\n            return new Collection(this.items.filter(callback));\n        }\n\n        /**\n         * Returns the index of an element.\n         *\n         * @param  {*} item The item to be searched.\n         * @return {number} The index of the item. -1 means it wasn't found.\n         * @example\n         * const collection = new Collection(['jon', 'arya', 'bran']);\n         * console.log(collection.find('bran')); // 2\n         * console.log(collection.find('ed')); // -1\n         */\n\n    }, {\n        key: 'find',\n        value: function find(item) {\n            return this.items.indexOf(item);\n        }\n\n        /**\n         * Gets the first element satisfying a critera.\n         *\n         * @param  {function} [callback=null] the predicate (callback) that will be applied on items.\n         * @return {*} the first item to satisfy the critera.\n         * @example <caption>Using a callback</caption>\n         * const first = new Collection([\n         *     { name: 'Bran Stark', age: 7 },\n         *     { name: 'Arya Stark', age: 9 },\n         *     { name: 'Jon Snow', age: 14 }\n         * ]).first(item => item.age > 7);\n         *\n         * console.log(first); // { name: 'Arya Stark', age: 9 }\n         * @example <caption>No Arguments</caption>\n         * const first = new Collection([\n         *     { name: 'Bran Stark', age: 7 },\n         *     { name: 'Arya Stark', age: 9 },\n         *     { name: 'Jon Snow', age: 14 }\n         * ]).first();\n         *\n         * console.log(first); // { name: 'Bran Stark', age: 7 }\n         */\n\n    }, {\n        key: 'first',\n        value: function first() {\n            var callback = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];\n\n            if (!this.count()) {\n                return null;\n            }\n\n            if (callback && typeof callback === 'function') {\n                for (var i = 0; i < this.count(); i++) {\n                    if (callback(this.items[i])) {\n                        return this.items[i];\n                    }\n                }\n\n                return null;\n            }\n\n            return this.items[0];\n        }\n\n        /**\n         * Flattens the collection elements.\n         *\n         * @param  {Boolean} [deep=false] recursively flatten the items (multi-level).\n         * @return {Collection} the flattened collection.\n         * @example <caption>Just one level</caption>\n         * const collection = new Collection([1, [2, [3, [4]], 5]]).flatten();\n         * console.log(collection.all()); // [1, 2, [3, [4]], 5]\n         *\n         * @example <caption>Deep</caption>\n         * const collection = new Collection([1, [2, [3, [4]], 5]]).flatten(true);\n         * console.log(collection.all()); // [1, 2, 3, 4, 5]\n         */\n\n    }, {\n        key: 'flatten',\n        value: function flatten() {\n            var _ref;\n\n            var deep = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];\n\n            var flattened = new Collection((_ref = []).concat.apply(_ref, _toConsumableArray(this.items)));\n\n            if (!deep || !flattened.contains(Array.isArray)) {\n                return flattened;\n            }\n\n            return flattened.flatten(true);\n        }\n\n        /**\n         * Gets an element at a specified index.\n         *\n         * @param  {number} index the index of the item.\n         * @return {*} the item at that index.\n         * @example\n         * const collection = new Collection([1, 2, 3]);\n         * console.log(collection.get(2)); // 3\n         */\n\n    }, {\n        key: 'get',\n        value: function get(index) {\n            return this.items[index];\n        }\n\n        /**\n         * Checks if a collection has a specific item.\n         *\n         * @param  {*}  item The item to be searched.\n         * @return {boolean} true if exists, false otherwise.\n         * @example\n         * const collection = new Collection([1, 2, 3, 4]);\n         *\n         * console.log(collection.has(2)); // true\n         * console.log(collection.has(5)); // false\n         */\n\n    }, {\n        key: 'has',\n        value: function has(item) {\n            return !!~this.find(item);\n        }\n\n        /**\n         * Joins the collection elements into a string.\n         *\n         * @param  {string} [seperator=','] The seperator between each element and the next.\n         * @return {string} The joined string.\n         *\n         * @example\n         * const collection = new Collection(['Wind', 'Rain', 'Fire']);\n         * console.log(collection.join()); // 'Wind,Rain,Fire'\n         * console.log(collection.join(', ')); 'Wind, Rain, Fire'\n         */\n\n    }, {\n        key: 'join',\n        value: function join() {\n            var seperator = arguments.length <= 0 || arguments[0] === undefined ? ',' : arguments[0];\n\n            return this.items.join(seperator);\n        }\n\n        /**\n         * Gets the collection elements keys in a new collection.\n         *\n         * @return {Collection} The keys collection.\n         * @example <caption>Objects</caption>\n         * const keys = new Collection({\n         *     arya: 10,\n         *     john: 20,\n         *     potato: 30\n         * }).keys();\n         * console.log(keys); // ['arya', 'john', 'potato']\n         *\n         * @example <caption>Regular Array</caption>\n         * const keys = new Collection(['arya', 'john', 'potato']).keys();\n         * console.log(keys); // ['0', '1', '2']\n         */\n\n    }, {\n        key: 'keys',\n        value: function keys() {\n            var keys = [];\n\n            if (_typeof(this.items) === 'object') {\n                keys = Object.keys(this.items);\n            } else {\n                keys = [].concat(_toConsumableArray(this.items.keys()));\n            }\n\n            return new Collection(keys);\n        }\n\n        /**\n         * Gets the last element to satisfy a callback.\n         *\n         * @param  {function} [callback=null] the predicate to be checked on all elements.\n         * @return {*} The last element in the collection that satisfies the predicate.\n         * @example <caption>Using a callback</caption>\n         * const last = new Collection([\n         *     { name: 'Bran Stark', age: 7 },\n         *     { name: 'Arya Stark', age: 9 },\n         *     { name: 'Jon Snow', age: 14 }\n         * ]).last(item => item.age > 7);\n         *\n         * console.log(last); // { name: 'Jon Snow', age: 14 }\n         * @example <caption>No Arguments</caption>\n         * const last = new Collection([\n         *     { name: 'Bran Stark', age: 7 },\n         *     { name: 'Arya Stark', age: 9 },\n         *     { name: 'Jon Snow', age: 14 }\n         * ]).last();\n         *\n         * console.log(last); // { name: 'Jon Snow', age: 14 }\n         */\n\n    }, {\n        key: 'last',\n        value: function last() {\n            var callback = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];\n\n            if (!this.count()) {\n                return null;\n            }\n\n            if (callback && typeof callback === 'function') {\n                return this.filter(callback).last();\n            }\n\n            return this.items[this.count() - 1];\n        }\n\n        /**\n         * Maps each element using a mapping function and collects the mapped items.\n         * @param  {function} callback the mapping function.\n         * @return {Collection} collection containing the mapped items.\n         * @example\n         * const collection = new Collection([\n         *     { name: 'Bran Stark', age: 7 },\n         *     { name: 'Arya Stark', age: 9 },\n         *     { name: 'Jon Snow', age: 14 }\n         * ]).map(stark => stark.name);\n         * console.log(collection.all()); ['Bran Stark', 'Arya Stark', 'Jon Snow']\n         */\n\n    }, {\n        key: 'map',\n        value: function map(callback) {\n            return new Collection(this.items.map(callback));\n        }\n\n        /**\n         * Extracts a property from the objects in the collection.\n         *\n         * @param  {string} property the name of the property to be extracted.\n         * @return {Collection} A collection with the extracted items.\n         * @example\n         * const collection = new Collection([\n         *     { name: 'Bran Stark', age: 7 },\n         *     { name: 'Arya Stark', age: 9 },\n         *     { name: 'Jon Snow', age: 14 }\n         * ]).pluck('name');\n         * console.log(collection.all()); ['Bran Stark', 'Arya Stark', 'Jon Snow']\n         */\n\n    }, {\n        key: 'pluck',\n        value: function pluck(property) {\n            return this.map(function (item) {\n                return item[property];\n            });\n        }\n\n        /**\n         * Adds an element to the collection.\n         *\n         * @param  {*} item the item to be added.\n         * @return {Collection} The collection object.\n         * @example\n         * const collection = new Collection().push('First');\n         * console.log(collection.first()); // \"First\"\n         */\n\n    }, {\n        key: 'push',\n        value: function push(item) {\n            return this.add(item);\n        }\n\n        /**\n         * Reduces the collection to a single value using a reducing function.\n         *\n         * @param  {function} callback the reducing function.\n         * @param  {*} initial  initial value.\n         * @return {*} The reduced results.\n         * @example\n         * const value = new Collection([1, 2, 3]).reduce(\n         *     (previous, current) => previous + current,\n         *      0\n         *  );\n         *  console.log(value); // 6\n         */\n\n    }, {\n        key: 'reduce',\n        value: function reduce(callback, initial) {\n            return this.items.reduce(callback, initial);\n        }\n\n        /**\n         * Removes the elements that do not satisfy the predicate.\n         *\n         * @param  {function} callback the predicate used on each item.\n         * @return {Collection} A collection without the rejected elements.\n         * @example\n         * const collection = new Collection([\n         *     { name: 'Arya Stark', age: 9 },\n         *     { name: 'Bran Stark', age: 7 },\n         *     { name: 'Jon Snow', age: 14 }\n         * ]).reject(stark => stark.age < 14);\n         * console.log(collection.all()); // [{ name: 'Jon Snow', age: 14 }]\n         */\n\n    }, {\n        key: 'reject',\n        value: function reject(callback) {\n            var items = [];\n            this.items.forEach(function (item) {\n                if (!callback(item)) {\n                    items.push(item);\n                }\n            });\n\n            return new Collection(items);\n        }\n\n        /**\n         * Removes an item from the collection.\n         *\n         * @param  {*} item the item to be searched and removed, first occurance will be removed.\n         * @return {boolean} True if the element was removed, false otherwise.\n         * @example\n         * const collection = new Collection(['john', 'arya', 'bran']);\n         * collection.remove('john');\n         * console.log(collection.all()); // ['arya', 'bran']\n         */\n\n    }, {\n        key: 'remove',\n        value: function remove(item) {\n            var index = this.find(item);\n            if (~index) {\n                this.items.splice(index, 1);\n\n                return true;\n            }\n\n            return false;\n        }\n\n        /**\n         * Reverses the collection order.\n         *\n         * @return {Collection} A new collection with the reversed order.\n         * @example\n         * const collection = new Collection(['one', 'two', 'three']).reverse();\n         * console.log(collection.all()); // ['three', 'two', 'one']\n         */\n\n    }, {\n        key: 'reverse',\n        value: function reverse() {\n            return new Collection(this.items.reverse());\n        }\n\n        /**\n         * Skips a specified number of elements.\n         *\n         * @param  {number} count the number of items to be skipped.\n         * @return {Collection} A collection without the skipped items.\n         * @example\n         * const collection = new Collection(['John', 'Arya', 'Bran', 'Sansa']).skip(2);\n         * console.log(collection.all()); // ['Bran', 'Sansa']\n         */\n\n    }, {\n        key: 'skip',\n        value: function skip(count) {\n            return this.slice(count);\n        }\n\n        /**\n         * Slices the collection starting from a specific index and ending at a specified index.\n         *\n         * @param  {number} start The zero-based starting index.\n         * @param  {number} [end=length] The zero-based ending index.\n         * @return {Collection} A collection with the sliced items.\n         * @example <caption>start and end are specified</caption>\n         * const collection = new Collection([0, 1, 2, 3, 4, 5, 6]).slice(2, 4);\n         * console.log(collection.all()); // [2, 3]\n         *\n         * @example <caption>only start is specified</caption>\n         * const collection = new Collection([0, 1, 2, 3, 4, 5, 6]).slice(2);\n         * console.log(collection.all()); // [2, 3, 4, 5, 6]\n         */\n\n    }, {\n        key: 'slice',\n        value: function slice(start) {\n            var end = arguments.length <= 1 || arguments[1] === undefined ? this.items.length : arguments[1];\n\n            return new Collection(this.items.slice(start, end));\n        }\n\n        /**\n         * Sorts the elements of a collection and returns a new sorted collection.\n         * note that it doesn't change the orignal collection and it creates a\n         * shallow copy.\n         *\n         * @param  {function} [compare=null] the compare function.\n         * @return {Collection} A new collection with the sorted items.\n         *\n         * @example\n         * const collection = new Collection([5, 3, 4, 1, 2]);\n         * const sorted = collection.sort();\n         * // original collection is intact.\n         * console.log(collection.all()); // [5, 3, 4, 1, 2]\n         * console.log(sorted.all()); // [1, 2, 3, 4, 5]\n         */\n\n    }, {\n        key: 'sort',\n        value: function sort() {\n            var compare = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];\n\n            return new Collection(this.items.slice().sort(compare));\n        }\n\n        /**\n         * Sorts the collection by key value comaprison, given that the items are objects.\n         * It creates a shallow copy and retains the order of the orignal collection.\n         *\n         * @param  {string} property the key or the property to be compared.\n         * @param  {string} [order='asc'] The sorting order.\n         * use 'asc' for ascending or 'desc' for descending, case insensitive.\n         * @return {Collection} A new Collection with the sorted items.\n         *\n         * @example\n         * const collection = new Collection([\n         *     { name: 'Jon Snow', age: 14 },\n         *     { name: 'Arya Stark', age: 9 },\n         *     { name: 'Bran Stark', age: 7 },\n         * ]).sortBy('age');\n         *\n         * console.log(collection.pluck('name').all()); // ['Brand Stark', 'Arya Stark', 'Jon Snow']\n         */\n\n    }, {\n        key: 'sortBy',\n        value: function sortBy(property) {\n            var order = arguments.length <= 1 || arguments[1] === undefined ? 'asc' : arguments[1];\n\n            var isAscending = order.toLowerCase() === 'asc';\n\n            return this.sort(function (a, b) {\n                if (a[property] > b[property]) {\n                    return isAscending ? 1 : -1;\n                }\n\n                if (a[property] < b[property]) {\n                    return isAscending ? -1 : 1;\n                }\n\n                return 0;\n            });\n        }\n\n        /**\n         * {stringifies the collection using JSON.stringify API.\n         *\n         * @return {string} The stringified value.\n         * @example\n         * const collection = new Collection([1, 2, 3]);\n         * console.log(collection.stringify()); // \"[1,2,3]\"\n         */\n\n    }, {\n        key: 'stringify',\n        value: function stringify() {\n            return JSON.stringify(this.items);\n        }\n\n        /**\n         * Sums the values of the array, or the properties, or the result of the callback.\n         *\n         * @param  {undefined|string|function} [property=null] the property to be summed.\n         * @return {*} The sum of values used in the summation.\n         * @example <caption>Summing elements</caption>\n         * const collection = new Collection([1, 2, 3]);\n         * console.log(collection.sum()); // 6\n         *\n         * @example <caption>Summing a property</caption>\n         * const collection = new Collection([\n         *     { name: 'Arya Stark', age: 9 },\n         *     { name: 'Bran Stark', age: 7 },\n         *     { name: 'Jon Snow', age: 14 }\n         * ]);\n         * console.log(collection.sum('age')); // 30\n         *\n         * @example <caption>Summing using a callback</caption>\n         * const collection = new Collection([\n         *     { name: 'Arya Stark', age: 9 },\n         *     { name: 'Bran Stark', age: 7 },\n         *     { name: 'Jon Snow', age: 14 }\n         * ]);\n         * console.log(collection.sum(i => i.age + 1)); // 33\n         */\n\n    }, {\n        key: 'sum',\n        value: function sum() {\n            var property = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];\n\n            if (typeof property === 'string') {\n                return this.reduce(function (previous, current) {\n                    return previous + current[property];\n                }, 0);\n            }\n\n            if (typeof property === 'function') {\n                return this.reduce(function (previous, current) {\n                    return previous + property(current);\n                }, 0);\n            }\n\n            return this.reduce(function (previous, current) {\n                return previous + current;\n            }, 0);\n        }\n\n        /**\n         * Gets a new collection with the number of specified items from the begining or the end.\n         *\n         * @param  {number} count the number of items to take. Takes from end if negative.\n         * @return {Collection} A collection with the taken items.\n         * @example <caption>From the beginning</caption>\n         * const collection = new Collection([1, 2, 3, 4, 5]).take(3);\n         * console.log(collection.all()); // [1, 2, 3]\n         *\n         * @example <caption>From the end</caption>\n         * const collection = new Collection([1, 2, 3, 4, 5]).take(-3);\n         * console.log(collection.all()); // [5, 4 ,3]\n         */\n\n    }, {\n        key: 'take',\n        value: function take(count) {\n            if (!count) {\n                return new Collection([]);\n            }\n\n            if (count < 0) {\n                return new Collection(this.items.reverse()).take(-count);\n            }\n\n            return new Collection(this.items.slice(0, count));\n        }\n\n        /**\n         * Registers a new method on the collection prototype for future use.\n         * The closure gets the collection object passed as the first parameter then\n         * other parameters gets passed after.\n         *\n         * @param  {string} name The name of the macro function.\n         * @param  {function} callback A closure containing the behavior of the macro.\n         * @return {*} returns your callback result.\n         *\n         * @example\n         * Collection.macro('addToMembers', (collection, n) => collection.map(item => item + n));\n         * const col2 = new Collection([1, 2, 3, 4]).addToMembers(3);\n         * console.log(col2.all()); // [4, 5, 6, 7]\n         */\n\n    }, {\n        key: 'unique',\n\n\n        /**\n         * Remove duplicate values from the collection.\n         *\n         * @param {function|string} [callback=null] The predicate that returns a value\n         * which will be checked for uniqueness, or a string that has the name of the property.\n         * @return {Collection} A collection containing ue values.\n         * @example <caption>No Arguments</caption>\n         * const unique = new Collection([2, 1, 2, 3, 3, 4, 5, 1, 2]).unique();\n         * console.log(unique); // [2, 1, 3, 4, 5]\n         * @example <caption>Property Name</caption>\n         * const students = new Collection([\n         * \t\t{ name: 'Rick', grade: 'A'},\n         * \t\t{ name: 'Mick', grade: 'B'},\n         * \t\t{ name: 'Richard', grade: 'A'},\n         * ]);\n         * // Students with unique grades.\n         * students.unique('grade'); // [{ name: 'Rick', grade: 'A'}, { name: 'Mick', grade: 'B'}]\n         * @example <caption>With Callback</caption>\n         * const students = new Collection([\n         * \t\t{ name: 'Rick', grade: 'A'},\n         * \t\t{ name: 'Mick', grade: 'B'},\n         * \t\t{ name: 'Richard', grade: 'A'},\n         * ]);\n         * // Students with unique grades.\n         * students.unique(s => s.grade); // [{ name: 'Rick', grade: 'A'}, { name: 'Mick', grade: 'B'}]\n         */\n        value: function unique() {\n            var _this = this;\n\n            var callback = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];\n\n            if (typeof callback === 'string') {\n                return this.unique(function (item) {\n                    return item[callback];\n                });\n            }\n\n            if (callback) {\n                var _ret = function () {\n                    var mappedCollection = new Collection();\n\n                    return {\n                        v: _this.reduce(function (collection, item) {\n                            var mappedItem = callback(item);\n                            if (!mappedCollection.has(mappedItem)) {\n                                collection.add(item);\n                                mappedCollection.add(mappedItem);\n                            }\n\n                            return collection;\n                        }, new Collection())\n                    };\n                }();\n\n                if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === \"object\") return _ret.v;\n            }\n\n            return this.reduce(function (collection, item) {\n                if (!collection.has(item)) {\n                    collection.add(item);\n                }\n\n                return collection;\n            }, new Collection());\n        }\n\n        /**\n         * Gets the values without preserving the keys.\n         *\n         * @return {Collection} A Collection containing the values.\n         * @example\n         * const collection = new Collection({\n         *     1: 2,\n         *     2: 3,\n         *     4: 5\n         * }).values();\n         *\n         * console.log(collection.all()); / /[2, 3, 5]\n         */\n\n    }, {\n        key: 'values',\n        value: function values() {\n            var _this2 = this;\n\n            return this.keys().map(function (key) {\n                return _this2.items[key];\n            });\n        }\n\n        /**\n         * Filters the collection using a callback or equality comparison to a property in each item.\n         *\n         * @param  {function|string} callback The callback to be used to filter the collection.\n         * @param  {*} [value=null] The value to be compared.\n         * @return {Collection} A collection with the filtered items.\n         * @example <caption>Using a property name</caption>\n         * const collection = new Collection([\n         *     { name: 'Arya Stark', age: 9 },\n         *     { name: 'Bran Stark', age: 7 },\n         *     { name: 'Jon Snow', age: 14 }\n         * ]).where('age', 14);\n         * console.log(collection.all()); // [{ name: 'Jon Snow', age: 14 }]\n         *\n         * @example <caption>Using a callback</caption>\n         * const collection = new Collection([\n         *     { name: 'Arya Stark', age: 9 },\n         *     { name: 'Bran Stark', age: 7 },\n         *     { name: 'Jon Snow', age: 14 }\n         * ]).where(stark => stark.age === 14);\n         * console.log(collection.all()); // [{ name: 'Jon Snow', age: 14 }]\n         */\n\n    }, {\n        key: 'where',\n        value: function where(callback) {\n            var value = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];\n\n            if (typeof callback === 'string') {\n                return this.filter(function (item) {\n                    return item[callback] === value;\n                });\n            }\n\n            return this.filter(callback);\n        }\n\n        /**\n         * Pairs each item in the collection with another array item in the same index.\n         *\n         * @param  {Array|Collection} array the array to be paired with.\n         * @return {Collection} A collection with the paired items.\n         * @example\n         * const array = ['a', 'b', 'c']; // or a collection.\n         * const collection = new Collection([1, 2, 3]).zip(array);\n         * console.log(collection.all()); // [[1, 'a'], [2, 'b'], [3, 'c']]\n         */\n\n    }, {\n        key: 'zip',\n        value: function zip(array) {\n            if (array instanceof Collection) {\n                return this.map(function (item, index) {\n                    return [item, array.get(index)];\n                });\n            }\n\n            return this.map(function (item, index) {\n                return [item, array[index]];\n            });\n        }\n    }], [{\n        key: 'collect',\n        value: function collect(collectable) {\n            return new Collection(collectable);\n        }\n    }, {\n        key: 'macro',\n        value: function macro(name, callback) {\n            if (Collection.prototype[name] !== undefined) {\n                throw new Error('Collection.macro(): This macro name is already defined.');\n            }\n\n            Collection.prototype[name] = function collectionMacroWrapper() {\n                var collection = this;\n\n                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n                    args[_key] = arguments[_key];\n                }\n\n                return callback.apply(undefined, [collection].concat(args));\n            };\n        }\n    }]);\n\n    return Collection;\n}();\n\nexports.default = Collection;\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/collection.js\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/collection.js?");

/***/ }
/******/ ])
});
;