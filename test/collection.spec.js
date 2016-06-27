var assert = require('chai').assert;
var Collection = require('./../dist/collection');

describe('Collection', function () {

    describe('#map()', function () {
        it('should return a collection with mapped items', function () {
            var collection = new Collection([1, 2, 3]).map((item) => item + 1);
            assert.instanceOf(collection, Collection);
            assert.deepEqual([2, 3, 4], collection.all());
        });
    });

    describe('#pluck()', function () {
        it('should return a mapped collection containg values from objects', function () {
            var collection = new Collection([
                { name: "Arya Stark", age: 9 },
                { name: "Bran Stark", age: 7 },
                { name: "Jon Snow", age: 14 }
            ]).pluck('name');

            assert.instanceOf(collection, Collection);
            assert.deepEqual(["Arya Stark", "Bran Stark", "Jon Snow"], collection.all());
        });
    });

    describe('#filter()', function () {
        it('should return a collection with filtered items', function () {
            var collection = new Collection([1, 4, 8, 10, 20]).filter((item) => item >= 5);
            assert.instanceOf(collection, Collection);
            assert.deepEqual([8, 10, 20], collection.all());
        });
    });

    describe('#reject()', function () {
        it('should return a collection without rejected items', function () {
            var collection = new Collection([1, 5, 10, 15, 20, 25]).reject((item) => item > 5);
            assert.instanceOf(collection, Collection);
            assert.deepEqual([1, 5], collection.all());
        });
    });

    describe('#sum()', function () {
        it('should return a single value that is the sum of all elements', function () {
            var sum = new Collection([1, 2, 3, 4, 5]).sum();
            assert.equal(15, sum);
        });

        it('should return a single value that is the sum of a property in all elements', function () {
            var sum = new Collection([
                { name: "Arya Stark", age: 9 },
                { name: "Bran Stark", age: 7 },
                { name: "Jon Snow", age: 14 }
            ]).sum('age');

            assert.equal(30, sum);
        });

        it('should return a single value that is the sum of a callback called on each element', function () {
            var sum = new Collection([
                { name: "Arya Stark", age: 9 },
                { name: "Bran Stark", age: 7 },
                { name: "Jon Snow", age: 14 }
            ]).sum((item) => item.age);

            assert.equal(30, sum);
        });
    });

    describe('#average', function () {
        it('should calculate the average of the elements directly', function () {
            var avg = new Collection([1, 2, 3, 4]).average();
            assert.equal(2.5, avg);
        });

        it('should calculate the average of a property in the elements', function () {
            var avg = new Collection([
                { name: "Arya Stark", age: 9 },
                { name: "Bran Stark", age: 7 },
                { name: "Jon Snow", age: 14 }
            ]).average('age');
            assert.equal(10, avg);
        });


        it('should calculate the average of a callback called on all elements', function () {
            var avg = new Collection([
                { name: "Arya Stark", age: 9 },
                { name: "Bran Stark", age: 7 },
                { name: "Jon Snow", age: 14 }
            ]).average((item) => item.age);
            assert.equal(10, avg);
        });
    });

    describe('#reduce()', function () {
        it('should return a single value from the collection', function () {
            var value = new Collection([1, 2, 3]).reduce(
                (previous, current) => previous + current,
                 0
             );
            assert.equal(6, value);
        });
    });

    describe('#take()', function () {
        it('should return empty collection if the count is 0', function () {
            var collection = new Collection([1, 2, 3, 4, 5]).take(0);
            assert.instanceOf(collection, Collection);
            assert.deepEqual([], collection.all());
        });

        it('should retrive elements from the beginning of the collection', function () {
            var collection = new Collection([1, 2, 3, 4, 5]).take(3);
            assert.instanceOf(collection, Collection);
            assert.deepEqual([1, 2, 3], collection.all());
        });

        it('should retrive elements from the end of the collection if a negative count was given', function () {
            var collection = new Collection([1, 2, 3, 4, 5]).take(-3);
            assert.instanceOf(collection, Collection);
            assert.deepEqual([5, 4, 3], collection.all());
        });
    })
});
