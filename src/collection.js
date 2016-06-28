export default class Collection
{
    constructor(items = []) {
        this.items = items;
    }

    add(item) {
        this.items.push(item);
    }

    all() {
        return this.getItems();
    }

    average(property = null) {
        return this.sum(property) / this.count();
    }

    concat(collection) {
        if (Array.isArray(collection)) {
            return new Collection(this.items.concat(collection));
        }

        return new Collection(this.items.concat(collection.all()));
    }

    count() {
        return this.items.length;
    }


    each(callback) {
        this.items.forEach(callback);
    }

    filter(callback) {
        return new Collection(this.items.filter(callback));
    }

    find(index) {
        return this.items[index];
    }

    first(callback = null) {
        if (! this.items.length) {
            return null;
        }

        if (callback && typeof(callback) === 'function') {
            return this.filter(callback).first();
        }

        return this.items[0];
    }

    flatten(deep = false) {
        const flattened = new Collection([].concat(...this.items));

        if (deep && flattened.all().some(Array.isArray)) {
            return flattened.flatten(true);
        }

        return flattened;
    }

    getItems() {
        return this.items;
    }

    keys() {
        let keys = [];

        if (typeof this.items === 'object') {
            keys = Object.keys(this.items);
        } else {
            keys = [...this.items.keys()];
        }

        return new Collection(keys);
    }

    last(callback = null) {
        if (! this.items.length) {
            return null;
        }

        if (callback && typeof(callback) === 'function') {
            return this.filter(callback).last();
        }

        return this.items[this.items.length - 1];
    }

    map(callback) {
        return new Collection(this.items.map(callback));
    }

    pluck(property) {
        return this.map((item) => item[property]);
    }

    push(item) {
        this.add(item);
    }

    reduce(callback, initial) {
        return this.items.reduce(callback, initial);
    }

    reject(callback) {
        const items = [];
        this.items.forEach((item) => {
            if (! callback(item)) {
                items.push(item);
            }
        });

        return new Collection(items);
    }

    reverse() {
        return new Collection(this.items.reverse());
    }

    sum(property = undefined) {
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

    take(count) {
        if (! count) {
            return new Collection([]);
        }

        if (count < 0) {
            return new Collection(this.items.reverse()).take(-count);
        }

        return new Collection(this.items.slice(0, count));
    }

    toJson() {
        return JSON.stringify(this.items);
    }

    where(callback, value = null) {
        if (typeof(callback) === 'string') {
            return this.filter(item => item[callback] === value);
        }

        return this.filter(callback);
    }

    zip(array) {
        return this.map((item, index) => [item, array[index]]);
    }
}
