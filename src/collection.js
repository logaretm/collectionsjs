/**
 * The Collection object.
 *
 * @example
 * let collection = new Collection([1, 2, 3]);
 */
export default class Collection
{
    /**
     * The collection constructor.
     *
     * @param  {Array} [items=[]] the array to collect.
     * @return {Collection} A Collection object.
     */
    constructor(items = []) {
        /**
         * The internal array.
         * @type {Array|Object}
         */
        this.items = items;

        /**
         * The length of the array.
         * @type {Number}
         */
        this.length = items.length;
    }

    /**
     * Adds an item to the collection.
     *
     * @param {var} item the item to be added.
     * @return {Collection} the collection object.
     * @example
     * const collection = new Collection();
     * collection.add('Arya');
     * console.log(collection.first()); //outputs 'Arya'
     */
    add(item) {
        this.items.push(item);
        this.length = this.items.length;

        return this;
    }

    /**
     * Gets the collected elements in an array.
     *
     * @return {Array} the internal array.
     * @example
     * const collection = new Collection([1, 2, 3]);
     * console.log(collection.all()); // [1, 2, 3]
     */
    all() {
        return this.items;
    }

    /**
     * Gets the average value of the array or a property or a callback return value.
     * If no property is provided: it will calculate the average value of the array (Numeric array).
     * If property is a string: it will calculate the average value of that property for all
     *  objects in the array.
     * If Property is a callback: the the averaging will use the value returned instead.
     *
     * @param  {Function|String} [property=null] The property name or the callback function.
     * defaults to null.
     * @return {Number} The average value.
     * @example <caption>Averaging elements</caption>
     * const collection = new Collection([1, 2, 3]);
     * console.log(collection.average()); // 2
     * @example <caption>Averaging a property</caption>
     * const collection = new Collection([
     *     { name: 'Arya Stark', age: 9 },
     *     { name: 'Bran Stark', age: 7 },
     *     { name: 'Jon Snow', age: 14 }
     * ]);
     * console.log(collection.average('age')); // 10
     * @example <caption>Averaging using a callback</caption>
     * const collection = new Collection([
     *     { name: 'Arya Stark', age: 9 },
     *     { name: 'Bran Stark', age: 7 },
     *     { name: 'Jon Snow', age: 14 }
     * ]);
     * console.log(collection.average(i => i.age)); // 10
     */
    average(property = null) {
        return this.sum(property) / this.count();
    }

    /**
     * Chunks the collection into a new collection with equal length arrays as its items.
     *
     * @param  {Number} size the size of each chunk.
     * @return {Collection} the new collection.
     * @example
     * const collection = new Collection([1, 2, 3, 4, 5]).chunk(2);
     * console.log(collection.all()); // [[1, 2], [3, 4], [5]]
     */
    chunk(size) {
        if (size <= 0) {
            return new Collection();
        }

        const items = [];

        for (let i = 0; i < this.length; i += size) {
            items.push(this.items.slice(i, i + size));
        }

        return new Collection(items);
    }

    /**
     * Static constructor. Will transform a string to array of strings.
     * cool if you don't like using the 'new' keyword.
     *
     * @param  {Array|String} collectable the array or the string to wrapped in a collection.
     * @return {Collection} A collection that wraps the collectable items.
     * @example
     * const collection = Collection.collect('abcd');
     * console.log(collection.all()); // ['a', 'b', 'c', 'd']
     */
    static collect(collectable) {
        let items = collectable;
        if (typeof collectable === 'string') {
            items = collectable.split('');
        }

        return new Collection(items);
    }

    /**
     * Concatnates the collection with an array or another collection.
     *
     * @param {Array|Collection} collection the array or the collection to be concatenated with.
     * @return {Collection} concatenated collection.
     * @example
     * const collection = new Collection([1, 2, 3]);
     * const array = [4, 5, 6]; // or another collection.
     * const newCollection = collection.concat(array);
     * console.log(newCollection.all()); // [1, 2, 3, 4, 5, 6]
     */
    concat(collection) {
        if (Array.isArray(collection)) {
            return new Collection(this.items.concat(collection));
        }

        return new Collection(this.items.concat(collection.all()));
    }

    /**
     * Gets the number of items in the collection.
     *
     * @return {Number} Number of items in the collection.
     * @example
     * const collection = new Collection([1, 2, 3]);
     * console.log(collection.count()); // 3
     */
    count() {
        return this.length;
    }


    /**
     * Executes a callback for each element in the collection.
     *
     * @param  {Function} callback the callback to be excuted for each item.
     * @return {Collection} The collection object.
     * @example
     * const collection = new Collection(['this', 'is', 'collectionjs']);
     * collection.each(t => console.log(t)); // this is collectionjs
     */
    each(callback) {
        this.items.forEach(callback);

        return this;
    }

    /**
     * Filters the collection using a predicate (callback that returns a boolean).
     *
     * @param  {Function} callback A function that returns a boolean expression.
     * @return {Collection} Filtered collection.
     * @example
     * const collection = new Collection([
     *     { name: 'Arya Stark', age: 9 },
     *     { name: 'Bran Stark', age: 7 },
     *     { name: 'Jon Snow', age: 14 }
     * ]).filter(stark => stark.age === 14);
     * console.log(collection.all()); // [{ name: 'Jon Snow', age: 14 }]
     */
    filter(callback) {
        return new Collection(this.items.filter(callback));
    }

    /**
     * Gets an element at a specified index.
     *
     * @param  {Number} index the index of the item.
     * @return {var} the item at that index.
     * @example
     * const collection = new Collection([1, 2, 3]);
     * console.log(collection.find(2)); // 3
     */
    find(index) {
        return this.items[index];
    }

    /**
     * Gets the first element satisfying a critera.
     *
     * @param  {Function} [callback=null] the predicate (callback) that will be applied on items.
     * @return {var} the first item to satisfy the critera.
     * @example <caption>Using a callback</caption>
     * const first = new Collection([
     *     { name: 'Bran Stark', age: 7 },
     *     { name: 'Arya Stark', age: 9 },
     *     { name: 'Jon Snow', age: 14 }
     * ]).first(item => item.age > 7);
     *
     * console.log(first); // { name: 'Arya Stark', age: 9 }
     * @example <caption>No Arguments</caption>
     * const first = new Collection([
     *     { name: 'Bran Stark', age: 7 },
     *     { name: 'Arya Stark', age: 9 },
     *     { name: 'Jon Snow', age: 14 }
     * ]).first();
     *
     * console.log(first); // { name: 'Bran Stark', age: 7 }
     */
    first(callback = null) {
        if (! this.count()) {
            return null;
        }

        if (callback && typeof(callback) === 'function') {
            for (let i = 0; i < this.count(); i++) {
                if (callback(this.items[i])) {
                    return this.items[i];
                }
            }
        }

        return this.items[0];
    }

    /**
     * Flattens the collection elements.
     *
     * @param  {Boolean} [deep=false] recursively flatten the items (multi-level).
     * @return {Collection} the flattened collection.
     * @example <caption>Just one level</caption>
     * const collection = new Collection([1, [2, [3, [4]], 5]]).flatten();
     * console.log(collection.all()); // [1, 2, [3, [4]], 5]
     *
     * @example <caption>Deep</caption>
     * const collection = new Collection([1, [2, [3, [4]], 5]]).flatten(true);
     * console.log(collection.all()); // [1, 2, 3, 4, 5]
     */
    flatten(deep = false) {
        const flattened = new Collection([].concat(...this.items));

        if (deep && flattened.all().some(Array.isArray)) {
            return flattened.flatten(true);
        }

        return flattened;
    }

    /**
     * Gets the collection elements keys in a new collection.
     *
     * @return {Collection} The keys collection.
     * @example <caption>Objects</caption>
     * const keys = new Collection({
     *     arya: 10,
     *     john: 20,
     *     potato: 30
     * }).keys();
     * console.log(keys); // ['arya', 'john', 'potato']
     *
     * @example <caption>Regular Array</caption>
     * const keys = new Collection(['arya', 'john', 'potato']).keys();
     * console.log(keys); // ['0', '1', '2']
     */
    keys() {
        let keys = [];

        if (typeof this.items === 'object') {
            keys = Object.keys(this.items);
        } else {
            keys = [...this.items.keys()];
        }

        return new Collection(keys);
    }

    /**
     * Gets the last element to satisfy a callback.
     *
     * @param  {Function} [callback=null] the predicate to be checked on all elements.
     * @return {var} The last element in the collection that satisfies the predicate.
     * @example <caption>Using a callback</caption>
     * const last = new Collection([
     *     { name: 'Bran Stark', age: 7 },
     *     { name: 'Arya Stark', age: 9 },
     *     { name: 'Jon Snow', age: 14 }
     * ]).last(item => item.age > 7);
     *
     * console.log(last); // { name: 'Jon Snow', age: 14 }
     * @example <caption>No Arguments</caption>
     * const last = new Collection([
     *     { name: 'Bran Stark', age: 7 },
     *     { name: 'Arya Stark', age: 9 },
     *     { name: 'Jon Snow', age: 14 }
     * ]).last();
     *
     * console.log(last); // { name: 'Jon Snow', age: 14 }
     */
    last(callback = null) {
        if (! this.count()) {
            return null;
        }

        if (callback && typeof(callback) === 'function') {
            return this.filter(callback).last();
        }

        return this.items[this.count() - 1];
    }

    /**
     * Maps each element using a mapping function and collects the mapped items.
     * @param  {Function} callback the mapping function.
     * @return {Collection} collection containing the mapped items.
     * @example
     * const collection = new Collection([
     *     { name: 'Bran Stark', age: 7 },
     *     { name: 'Arya Stark', age: 9 },
     *     { name: 'Jon Snow', age: 14 }
     * ]).map(stark => stark.name);
     * console.log(collection.all()); ['Bran Stark', 'Arya Stark', 'Jon Snow']
     */
    map(callback) {
        return new Collection(this.items.map(callback));
    }

    /**
     * Extracts a property from the objects in the collection.
     *
     * @param  {String} property the name of the property to be extracted.
     * @return {Collection} A collection with the extracted items.
     * @example
     * const collection = new Collection([
     *     { name: 'Bran Stark', age: 7 },
     *     { name: 'Arya Stark', age: 9 },
     *     { name: 'Jon Snow', age: 14 }
     * ]).pluck('name');
     * console.log(collection.all()); ['Bran Stark', 'Arya Stark', 'Jon Snow']
     */
    pluck(property) {
        return this.map((item) => item[property]);
    }

    /**
     * Adds an element to the collection.
     *
     * @param  {var} item the item to be added.
     * @return {Collection} The collection object.
     * @example
     * const collection = new Collection().push('First');
     * console.log(collection.first()); // "First"
     */
    push(item) {
        return this.add(item);
    }

    /**
     * Reduces the collection to a single value using a reducing function.
     *
     * @param  {Function} callback the reducing function.
     * @param  {var} initial  initial value.
     * @return {var} The reduced results.
     * @example
     * const value = new Collection([1, 2, 3]).reduce(
     *     (previous, current) => previous + current,
     *      0
     *  );
     *  console.log(value); // 6
     */
    reduce(callback, initial) {
        return this.items.reduce(callback, initial);
    }

    /**
     * Removes the elements that do not satisfy the predicate.
     *
     * @param  {Function} callback the predicate used on each item.
     * @return {Collection} A collection without the rejected elements.
     * @example
     * const collection = new Collection([
     *     { name: 'Arya Stark', age: 9 },
     *     { name: 'Bran Stark', age: 7 },
     *     { name: 'Jon Snow', age: 14 }
     * ]).reject(stark => stark.age < 14);
     * console.log(collection.all()); // [{ name: 'Jon Snow', age: 14 }]
     */
    reject(callback) {
        const items = [];
        this.items.forEach((item) => {
            if (! callback(item)) {
                items.push(item);
            }
        });

        return new Collection(items);
    }

    /**
     * Reverses the collection order.
     *
     * @return {Collection} A new collection with the reversed order.
     * @example
     * const collection = new Collection(['one', 'two', 'three']).reverse();
     * console.log(collection.all()); // ['three', 'two', 'one']
     */
    reverse() {
        return new Collection(this.items.reverse());
    }

    /**
     * Skips a specified number of elements.
     *
     * @param  {Number} count the number of items to be skipped.
     * @return {Collection} A collection without the skipped items.
     * @example
     * const collection = new Collection(['John', 'Arya', 'Bran', 'Sansa']).skip(2);
     * console.log(collection.all()); // ['Bran', 'Sansa']
     */
    skip(count) {
        return this.slice(count);
    }

    /**
     * Slices the collection starting from a specific index and ending at a specified index.
     *
     * @param  {Number} start The zero-based starting index.
     * @param  {Number} [end=length] The zero-based ending index.
     * @return {Collection} A collection with the sliced items.
     * @example <caption>start and end are specified</caption>
     * const collection = new Collection([0, 1, 2, 3, 4, 5, 6]).slice(2, 4);
     * console.log(collection.all()); // [2, 3]
     *
     * @example <caption>only start is specified</caption>
     * const collection = new Collection([0, 1, 2, 3, 4, 5, 6]).slice(2);
     * console.log(collection.all()); // [2, 3, 4, 5, 6]
     */
    slice(start, end = this.length) {
        return new Collection(this.items.slice(start, end));
    }

    /**
     * Stringifies the collection using JSON.stringify API.
     *
     * @return {String} The stringified value.
     * @example
     * const collection = new Collection([1, 2, 3]);
     * console.log(collection.stringify()); // "[1,2,3]"
     */
    stringify() {
        return JSON.stringify(this.items);
    }

    /**
     * Sums the values of the array, or the properties, or the result of the callback.
     *
     * @param  {undefined|String|Function} [property=null] the property to be summed.
     * @return {var} The sum of values used in the summation.
     * @example <caption>Summing elements</caption>
     * const collection = new Collection([1, 2, 3]);
     * console.log(collection.sum()); // 6
     *
     * @example <caption>Summing a property</caption>
     * const collection = new Collection([
     *     { name: 'Arya Stark', age: 9 },
     *     { name: 'Bran Stark', age: 7 },
     *     { name: 'Jon Snow', age: 14 }
     * ]);
     * console.log(collection.sum('age')); // 30
     *
     * @example <caption>Summing using a callback</caption>
     * const collection = new Collection([
     *     { name: 'Arya Stark', age: 9 },
     *     { name: 'Bran Stark', age: 7 },
     *     { name: 'Jon Snow', age: 14 }
     * ]);
     * console.log(collection.sum(i => i.age + 1)); // 33
     */
    sum(property = null) {
        if (typeof property === 'string') {
            return this.reduce((previous, current) =>
                previous + current[property]
            , 0);
        }

        if (typeof property === 'function') {
            return this.reduce((previous, current) =>
                previous + property(current)
            , 0);
        }

        return this.reduce((previous, current) =>
            previous + current
        , 0);
    }

    /**
     * Gets a new collection with the number of specified items from the begining or the end.
     *
     * @param  {Number} count the number of items to take. Takes from end if negative.
     * @return {Collection} A collection with the taken items.
     * @example <caption>From the beginning</caption>
     * const collection = new Collection([1, 2, 3, 4, 5]).take(3);
     * console.log(collection.all()); // [1, 2, 3]
     *
     * @example <caption>From the end</caption>
     * const collection = new Collection([1, 2, 3, 4, 5]).take(-3);
     * console.log(collection.all()); // [5, 4 ,3]
     */
    take(count) {
        if (! count) {
            return new Collection([]);
        }

        if (count < 0) {
            return new Collection(this.items.reverse()).take(-count);
        }

        return new Collection(this.items.slice(0, count));
    }

    /**
     * Gets the values without preserving the keys.
     *
     * @return {Collection} A Collection containing the values.
     * @example
     * const collection = new Collection({
     *     1: 2,
     *     2: 3,
     *     4: 5
     * }).values();
     *
     * console.log(collection.all()); / /[2, 3, 5]
     */
    values() {
        return this.keys().map(key => this.items[key]);
    }

    /**
     * Filters the collection using a callback or equality comparison to a property in each item.
     *
     * @param  {Function|String} callback The callback to be used to filter the collection.
     * @param  {var} [value=null] The value to be compared.
     * @return {Collection} A collection with the filtered items.
     * @example <caption>Using a property name</caption>
     * const collection = new Collection([
     *     { name: 'Arya Stark', age: 9 },
     *     { name: 'Bran Stark', age: 7 },
     *     { name: 'Jon Snow', age: 14 }
     * ]).where('age', 14);
     * console.log(collection.all()); // [{ name: 'Jon Snow', age: 14 }]
     *
     * @example <caption>Using a callback</caption>
     * const collection = new Collection([
     *     { name: 'Arya Stark', age: 9 },
     *     { name: 'Bran Stark', age: 7 },
     *     { name: 'Jon Snow', age: 14 }
     * ]).where(stark => stark.age === 14);
     * console.log(collection.all()); // [{ name: 'Jon Snow', age: 14 }]
     */
    where(callback, value = null) {
        if (typeof(callback) === 'string') {
            return this.filter(item => item[callback] === value);
        }

        return this.filter(callback);
    }

    /**
     * Pairs each item in the collection with another array item in the same index.
     *
     * @param  {Array|Collection} array the array to be paired with.
     * @return {Collection} A collection with the paired items.
     * @example
     * const array = ['a', 'b', 'c']; // or a collection.
     * const collection = new Collection([1, 2, 3]).zip(array);
     * console.log(collection.all()); // [[1, 'a'], [2, 'b'], [3, 'c']]
     */
    zip(array) {
        if (array instanceof Collection) {
            return this.map((item, index) => [item, array.find(index)]);
        }

        return this.map((item, index) => [item, array[index]]);
    }
}
