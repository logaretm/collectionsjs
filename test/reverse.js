import test from 'ava';
import Collection from './../src/collection';

test('should return a collection with reversed element order', t => {
    let collection = new Collection([1, 2, 3]).reverse();

    t.deepEqual([3, 2, 1], collection.all());
});
