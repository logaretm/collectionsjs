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
     */
    add(item) {
        this.items.push(item);
        this.length = this.items.length;
    }

    /**
     * Gets the collected elements in an array.
     *
     * @return {Array} the internal array.
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
     */
    average(property = null) {
        return this.sum(property) / this.count();
    }

    /**
     * Chunks the collection into a new collection with equal length arrays as its items.
     *
     * @param  {Number} size the size of each chunk.
     * @return {Collection} the new collection.
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
     *
     * @param  {Array|String} collectable the array or the string to wrapped in a collection.
     * @return {Collection} A collection that wraps the collectable items.
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
     */
    count() {
        return this.length;
    }


    /**
     * Executes a callback for each element in the collection.
     *
     * @param  {Function} callback the callback to be excuted for each item.
     */
    each(callback) {
        this.items.forEach(callback);
    }

    /**
     * Filters the collection using a predicate (callback that returns a boolean).
     *
     * @param  {Function} callback A function that returns a boolean expression.
     * @return {Collection} Filtered collection.
     */
    filter(callback) {
        return new Collection(this.items.filter(callback));
    }

    /**
     * Gets an element at a specified index.
     *
     * @param  {Number} index the index of the item.
     * @return {var} the item at that index.
     */
    find(index) {
        return this.items[index];
    }

    /**
     * Gets the first element satisfying a critera.
     *
     * @param  {Function} [callback=null] the predicate (callback) that will be applied on items.
     * @return {var} the first item to satisfy the critera.
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
     */
    map(callback) {
        return new Collection(this.items.map(callback));
    }

    /**
     * Extracts a property from the objects in the collection.
     *
     * @param  {String} property the name of the property to be extracted.
     * @return {Collection} A collection with the extracted items.
     */
    pluck(property) {
        return this.map((item) => item[property]);
    }

    /**
     * Adds an element to the collection.
     *
     * @param  {var} item the item to be added.
     */
    push(item) {
        this.add(item);
    }

    /**
     * Reduces the collection to a single value using a reducing function.
     *
     * @param  {Function} callback the reducing function.
     * @param  {var} initial  initial value.
     * @return {var} The reduced results.
     */
    reduce(callback, initial) {
        return this.items.reduce(callback, initial);
    }

    /**
     * Removes the elements that do not satisfy the predicate.
     *
     * @param  {Function} callback the predicate used on each item.
     * @return {Collection} A collection without the rejected elements.
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
     */
    reverse() {
        return new Collection(this.items.reverse());
    }

    /**
     * Skips a specified number of elements.
     *
     * @param  {Number} count the number of items to be skipped.
     * @return {Collection} A collection without the skipped items.
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
     */
    slice(start, end = this.length) {
        return new Collection(this.items.slice(start, end));
    }

    /**
     * Stringifies the collection using JSON.stringify API.
     *
     * @return {String} The stringified value.
     */
    stringify() {
        return JSON.stringify(this.items);
    }

    /**
     * Sums the values of the array, or the properties, or the result of the callback.
     *
     * @param  {undefined|String|Function} [property=null] the property to be summed.
     * @return {var} The sum of values used in the summation.
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
     * Filters the collection using a callback or equality comparison to a property in each item.
     *
     * @param  {Function|String} callback The callback to be used to filter the collection.
     * @param  {var} [value=null] The value to be compared.
     * @return {Collection} A collection with the filtered items.
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
     */
    zip(array) {
        if (array instanceof Collection) {
            return this.map((item, index) => [item, array.find(index)]);
        }

        return this.map((item, index) => [item, array[index]]);
    }
}
