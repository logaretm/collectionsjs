import test from 'ava';
import Collection from './../src/collection';

/** @test {Collection#filter} */
test('should return a collection with filtered items', t => {
    const collection = new Collection([1, 4, 8, 10, 20]).filter(item => item >= 5);

    t.true(collection instanceof Collection);
    t.deepEqual([8, 10, 20], collection.all());
});
