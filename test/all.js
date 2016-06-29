import test from 'ava';
import Collection from './../src/collection';

// #all
test('should return internal array elements', t => {
    let collection = new Collection([1, 2, 3]);

    t.deepEqual([1, 2, 3], collection.all());
});
