import test from 'ava';
import Collection from './../src/collection';

test('should return a collection with mapped items', t => {
    let collection = new Collection([1, 2, 3]).map(item => item + 1);

    t.true(collection instanceof Collection);
    t.deepEqual([2, 3, 4], collection.all());
});
