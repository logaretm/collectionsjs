import test from 'ava';
import Collection from './../src/collection.js';

/** @test {Collection#collect} */
test('it returns a collection from an array', t => {
    const collection = Collection.collect([1, 2, 3]);

    t.deepEqual(collection.all(), [1, 2, 3]);
});

/** @test {Collection#collect} */
test('it returns a collection of strings from a string', t => {
    const collection = Collection.collect('abcdef');

    t.deepEqual(collection.all(), ['a', 'b', 'c', 'd', 'e', 'f']);
});
