const assert = require('chai').assert;
import Collection from './../src/collection';

describe('Collection', () => {

    describe('#add()', () => {
        it('should add an item to the collection', () => {
            const collection = new Collection();
            const item = "Arya";
            collection.add(item);
            assert.equal(item, collection.first());
        });
    });

    describe('#all()', () => {
        it('should return internal array elements', () => {
            let collection = new Collection([1, 2, 3]);
            assert.deepEqual([1, 2, 3], collection.all());
        });
    });

    describe('#average', () => {
        it('should calculate the average of the elements directly', () => {
            let avg = new Collection([1, 2, 3, 4]).average();
            assert.equal(2.5, avg);
        });

        it('should calculate the average of a property in the elements', () => {
            let avg = new Collection([
                { name: "Arya Stark", age: 9 },
                { name: "Bran Stark", age: 7 },
                { name: "Jon Snow", age: 14 }
            ]).average('age');
            assert.equal(10, avg);
        });


        it('should calculate the average of a callback called on all elements', () => {
            let avg = new Collection([
                { name: "Arya Stark", age: 9 },
                { name: "Bran Stark", age: 7 },
                { name: "Jon Snow", age: 14 }
            ]).average((item) => item.age);
            assert.equal(10, avg);
        });
    });

    describe('#concat()', () => {
        it('should concat a collection and an array', () => {
            const collection = new Collection([1, 2, 3]).concat([4, 5]);

            assert.deepEqual([1, 2, 3, 4, 5], collection.all());
        });

        it('should concat two collections', () => {
            const collection = new Collection([1, 2, 3]).concat(
                new Collection([4, 5])
            );

            assert.deepEqual([1, 2, 3, 4, 5], collection.all());
        });
    });

    describe('#count()', () => {
        it('should return collection count', () => {
            const count = new Collection([1, 2, 3, 4, 5]).count();
            assert.equal(5, count);
        });
    });

    describe('#each()', () => {
        it('should iterate over all collection elements', () => {
            const items = [];
            new Collection([1, 2, 3]).each((item) => items.push(item));
            assert.deepEqual([1, 2, 3], items);
        });
    });

    describe('#filter()', () => {
        it('should return a collection with filtered items', () => {
            let collection = new Collection([1, 4, 8, 10, 20]).filter((item) => item >= 5);
            assert.instanceOf(collection, Collection);
            assert.deepEqual([8, 10, 20], collection.all());
        });
    });

    describe('#find()', () => {
        it('should return the element in that index', () => {
            const collection = new Collection(['jon', 'arya', 'martin']);

            assert.equal('arya', collection.find(1));
        });
    });

    describe('#first()', () => {
        it('should return null if the collection is empty', () => {
            const first = new Collection().first();
            assert.isNull(first);
        });

        it('should return first element in a collection', () => {
            const first = new Collection([6, 2, 3, 4, 5]).first();
            assert.equal(6, first);
        });

        it('should return first element that satisifies a predicate/callback', () => {
            const first = new Collection([
                { name: "Bran Stark", age: 7 },
                { name: "Arya Stark", age: 9 },
                { name: "Jon Snow", age: 14 }
            ]).first((item) => item.age > 7);

            assert.deepEqual({ name: "Arya Stark", age: 9 }, first);
        });
    });

    describe('#flatten()', () => {
        it('should flatten the collection elements by one level', () => {
            const collection = new Collection([1, [2, [3, [4]], 5]]).flatten(false);
            assert.deepEqual([1, 2, [3, [4]], 5], collection.all());
        });

        it('should flatten the collection elements deeply', () => {
            const collection = new Collection([1, [2, [3, [4]], 5]]).flatten(true);
            assert.deepEqual([1, 2, 3, 4, 5], collection.all());
        });
    });

    describe('#getItems()', () => {
        it('should return internal array elements', () => {
            let collection = new Collection([1, 2, 3]);
            assert.deepEqual([1, 2, 3], collection.getItems());
        });
    });

    describe('#keys()', () => {
        it('should return a new collection with the object keys', () => {
            const keys = new Collection({
                "arya": 10,
                "john": 20,
                "potato": 30
            }).keys();

            assert.instanceOf(keys, Collection);
            assert.deepEqual(["arya", "john", "potato"], keys.all());
        });

        it('should return a new collection with the array keys', () => {
            const keys = new Collection(["arya", "john", "potato"]).keys();

            assert.instanceOf(keys, Collection);
            assert.deepEqual(['0', '1', '2'], keys.all());
        });
    });

    describe('#last()', () => {
        it('should return null if the collection is empty', () => {
            const last = new Collection().last();
            assert.isNull(last);
        });

        it('should return last element in a collection', () => {
            const last = new Collection([6, 2, 3, 4, 5]).last();
            assert.equal(5, last);
        });

        it('should return the last element that satisifies a predicate/callback', () => {
            const last = new Collection([
                { name: "Arya Stark", age: 9 },
                { name: "Bran Stark", age: 7 },
                { name: "Jon Snow", age: 14 }
            ]).last((item) => item.age <= 10);

            assert.deepEqual({ name: "Bran Stark", age: 7 }, last);
        });
    });

    describe('#map()', () => {
        it('should return a collection with mapped items', () => {
            let collection = new Collection([1, 2, 3]).map((item) => item + 1);
            assert.instanceOf(collection, Collection);
            assert.deepEqual([2, 3, 4], collection.all());
        });
    });

    describe('#pluck()', () => {
        it('should return a mapped collection containg values from objects', () => {
            let collection = new Collection([
                { name: "Arya Stark", age: 9 },
                { name: "Bran Stark", age: 7 },
                { name: "Jon Snow", age: 14 }
            ]).pluck('name');

            assert.instanceOf(collection, Collection);
            assert.deepEqual(["Arya Stark", "Bran Stark", "Jon Snow"], collection.all());
        });
    });

    describe('#push()', () => {
        it('should add an item to the collection', () => {
            const collection = new Collection();
            const item = "Arya";
            collection.push(item);
            assert.equal(item, collection.first());
        });
    });

    describe('#reduce()', () => {
        it('should return a single value from the collection', () => {
            let value = new Collection([1, 2, 3]).reduce(
                (previous, current) => previous + current,
                 0
             );
            assert.equal(6, value);
        });
    });

    describe('#reject()', () => {
        it('should return a collection without rejected items', () => {
            let collection = new Collection([1, 5, 10, 15, 20, 25]).reject((item) => item > 5);
            assert.instanceOf(collection, Collection);
            assert.deepEqual([1, 5], collection.all());
        });
    });

    describe('#reverse()', () => {
        it('should return a collection with reversed element order', () => {
            let collection = new Collection([1, 2, 3]).reverse();

            assert.deepEqual([3, 2, 1], collection.all());
        });
    });

    describe('#sum()', () => {
        it('should return a single value that is the sum of all elements', () => {
            let sum = new Collection([1, 2, 3, 4, 5]).sum();
            assert.equal(15, sum);
        });

        it('should return a single value that is the sum of a property in all elements', () => {
            let sum = new Collection([
                { name: "Arya Stark", age: 9 },
                { name: "Bran Stark", age: 7 },
                { name: "Jon Snow", age: 14 }
            ]).sum('age');

            assert.equal(30, sum);
        });

        it('should return a single value that is the sum of a callback called on each element', () => {
            let sum = new Collection([
                { name: "Arya Stark", age: 9 },
                { name: "Bran Stark", age: 7 },
                { name: "Jon Snow", age: 14 }
            ]).sum((item) => item.age);

            assert.equal(30, sum);
        });
    });

    describe('#take()', () => {
        it('should return empty collection if the count is 0', () => {
            let collection = new Collection([1, 2, 3, 4, 5]).take(0);
            assert.instanceOf(collection, Collection);
            assert.deepEqual([], collection.all());
        });

        it('should retrive elements from the beginning of the collection', () => {
            let collection = new Collection([1, 2, 3, 4, 5]).take(3);
            assert.instanceOf(collection, Collection);
            assert.deepEqual([1, 2, 3], collection.all());
        });

        it('should retrive elements from the end of the collection if a negative count was given', () => {
            let collection = new Collection([1, 2, 3, 4, 5]).take(-3);
            assert.instanceOf(collection, Collection);
            assert.deepEqual([5, 4, 3], collection.all());
        });
    });

    describe('#toJson()', () => {
        it('should stringify the collection contents', () => {
            const collection = new Collection([1, 2, 3]);
            assert.equal(JSON.stringify([1, 2, 3]), collection.toJson());
        });
    });

    describe('#where()', () => {
        it('should return a filtered collection which elements satisfy the callback', () => {
            const collection = new Collection([1, 2, 3]).where((item) => item > 2);

            assert.equal(3, collection.first());
        });

        it('should return a filtered collection which elements object properties equal the value', () => {
            const collection =  new Collection([
                { name: "Arya Stark", age: 9 },
                { name: "Bran Stark", age: 7 },
                { name: "Jon Snow", age: 14 }
            ]).where('age', 14);

            assert.deepEqual({ name: "Jon Snow", age: 14 }, collection.first());
        });
    });

    describe('#zip()', () => {
        it('should return a collection whose elements are pairs of the two arrays', () => {
            const collection = new Collection([1, 2, 3]).zip(['a', 'b', 'c']);

            assert.deepEqual([[1, 'a'], [2, 'b'], [3, 'c']], collection.all());
        });
    });
});
