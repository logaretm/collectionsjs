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
         * @type {number}
         */
        this.length = items.length;
    }

    /**
     * Adds an item to the collection.
     *
     * @param {*} item the item to be added.
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
     * @param  {function|string} [property=null] The property name or the callback function.
     * defaults to null.
     * @return {number} The average value.
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
     * @param  {number} size the size of each chunk.
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
     * @param  {Array|string} collectable the array or the string to wrapped in a collection.
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
     * @return {number} Number of items in the collection.
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
     * @param  {function} callback the callback to be excuted for each item.
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
     * @param  {function} callback A function that returns a boolean expression.
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
     * @param  {number} index the index of the item.
     * @return {*} the item at that index.
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
     * @param  {function} [callback=null] the predicate (callback) that will be applied on items.
     * @return {*} the first item to satisfy the critera.
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
     * Joins the collection elements into a string.
     *
     * @param  {string} [seperator=','] The seperator between each element and the next.
     * @return {string} The joined string.
     *
     * @example
     * const collection = new Collection(['Wind', 'Rain', 'Fire']);
     * console.log(collection.join()); // 'Wind,Rain,Fire'
     * console.log(collection.join(', ')); 'Wind, Rain, Fire'
     */
    join(seperator = ',') {
        return this.items.join(seperator);
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
     * @param  {function} [callback=null] the predicate to be checked on all elements.
     * @return {*} The last element in the collection that satisfies the predicate.
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
     * @param  {function} callback the mapping function.
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
     * @param  {string} property the name of the property to be extracted.
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
     * @param  {*} item the item to be added.
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
     * @param  {function} callback the reducing function.
     * @param  {*} initial  initial value.
     * @return {*} The reduced results.
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
     * @param  {function} callback the predicate used on each item.
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
     * @param  {number} count the number of items to be skipped.
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
     * @param  {number} start The zero-based starting index.
     * @param  {number} [end=length] The zero-based ending index.
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
     * Sorts the elements of a collection and returns a new sorted collection.
     * note that it doesn't change the orignal collection and it creates a
     * shallow copy.
     *
     * @param  {function} [compare=null] the compare function.
     * @return {Collection} A new collection with the sorted items.
     *
     * @example
     * const collection = new Collection([5, 3, 4, 1, 2]);
     * const sorted = collection.sort();
     * // original collection is intact.
     * console.log(collection.all()); // [5, 3, 4, 1, 2]
     * console.log(sorted.all()); // [1, 2, 3, 4, 5]
     */
    sort(compare = null) {
        return new Collection(this.items.slice().sort(compare));
    }

    /**
     * Sorts the collection by key value comaprison, given that the items are objects.
     * It creates a shallow copy and retains the order of the orignal collection.
     *
     * @param  {string} property the key or the property to be compared.
     * @param  {string} [order='asc'] The sorting order.
     * use 'asc' for ascending or 'desc' for descending, case insensitive.
     * @return {Collection} A new Collection with the sorted items.
     *
     * @example
     * const collection = new Collection([
     *     { name: 'Jon Snow', age: 14 },
     *     { name: 'Arya Stark', age: 9 },
     *     { name: 'Bran Stark', age: 7 },
     * ]).sortBy('age');
     *
     * console.log(collection.pluck('name').all()); // ['Brand Stark', 'Arya Stark', 'Jon Snow']
     */
    sortBy(property, order = 'asc') {
        const isAscending = order.toLowerCase() === 'asc';

        return this.sort((a, b) => {
            if (a[property] > b[property]) {
                return isAscending ? 1 : -1;
            }

            if (a[property] < b[property]) {
                return isAscending ? -1 : 1;
            }

            return 0;
        });
    }

    /**
     * {stringifies the collection using JSON.stringify API.
     *
     * @return {string} The stringified value.
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
     * @param  {undefined|string|function} [property=null] the property to be summed.
     * @return {*} The sum of values used in the summation.
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
     * @param  {number} count the number of items to take. Takes from end if negative.
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
     * Registers a new method on the collection prototype for future use.
     * The closure gets the collection object passed as the first parameter then
     * other parameters gets passed after.
     *
     * @todo Throw exception if method already defined.
     * @param  {string} name The name of the macro function.
     * @param  {function} callback A closure containing the behavior of the macro.
     * @return {*} returns your callback result.
     *
     * @example
     * Collection.macro('addToMembers', (collection, n) => collection.map(item => item + n));
     * const col2 = new Collection([1, 2, 3, 4]).addToMembers(3);
     * console.log(col2.all()); // [4, 5, 6, 7]
     */
    static macro(name, callback) {
        if (Collection.prototype[name] !== undefined) {
            throw new Error('Collection.macro(): This macro name is already defined.');
        }

        Collection.prototype[name] = function collectionMacroWrapper(...args) {
            const collection = this;

            return callback(collection, ...args);
        };
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
     * @param  {function|string} callback The callback to be used to filter the collection.
     * @param  {*} [value=null] The value to be compared.
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
