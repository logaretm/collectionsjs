export default class Collection
{
    constructor(items = []) {
        this.items = items;
    }

    all() {
        return this.getItems();
    }

    getItems() {
        return this.items;
    }

    each(callback) {
        if (! callback || typeof callback !== 'function') {
            return;
        }

        this.items.forEach(callback);
    }

    count() {
        return this.items.length;
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

    filter(callback) {
        return new Collection(this.items.filter(callback));
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

    keys() {
        let keys = [];

        if (typeof this.items === 'object') {
            keys = Object.keys(this.items);
        } else {
            keys = [...this.items.keys()];
        }

        return new Collection(keys);
    }

    reduce(callback, initial) {
        return this.items.reduce(callback, initial);
    }

    pluck(property) {
        return this.map((item) => item[property]);
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

    average(property = null) {
        return this.sum(property) / this.count();
    }

    toJson() {
        return JSON.stringify(this.items);
    }

    add(item) {
        this.items.push(item);
    }

    push(item) {
        this.add(item);
    }

    flatten(deep = false) {
        const flattened = new Collection([].concat(...this.items));

        if (deep && flattened.all().some(Array.isArray)) {
            return flattened.flatten(true);
        }

        return flattened;
    }

    reverse() {
        return new Collection(this.items.reverse());
    }
}
