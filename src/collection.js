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
        if (typeof index === 'function') {
            return new Collection(this.items).where(index).first();
        }

        return this.items[index];
    }

    first() {
        if (! this.items.length) {
            return null;
        }

        return this.items[0];
    }

    last() {
        if (! this.items.length) {
            return null;
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
        return new Collection(...this.items.keys());
    }

    reduce(callback, initial) {
        return this.items.reduce(callback, initial);
    }

    pluck(property) {
        return this.map((item) => item[property]);
    }

    sum(property = null) {
        return this.reduce((previous, current) =>
            previous + ((typeof current === 'object') ? current[property] : current)
        , 0);
    }


    take(count) {
        if (! count) {
            return new Collection([]);
        }

        return new Collection(this.items.slice(0, count - 1));
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

    flatten() {
        return new Collection(this.items.concat.apply([], this.items));
    }
}
