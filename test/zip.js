import test from 'ava';
import Collection from './../src/collection';

/** @test {Collection#zip} */
test('should return a collection whose elements are pairs of the two arrays', t => {
    const collection = new Collection([1, 2, 3]).zip(['a', 'b', 'c']);

    t.deepEqual([[1, 'a'], [2, 'b'], [3, 'c']], collection.all());
});

/** @test {Collection#zip} */
test('should return a collection whose elements are pairs of the two collections', t => {
    const collection = new Collection([1, 2, 3]).zip(new Collection(['a', 'b', 'c']));

    t.deepEqual([[1, 'a'], [2, 'b'], [3, 'c']], collection.all());
});
