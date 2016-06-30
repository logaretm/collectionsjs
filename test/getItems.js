import test from 'ava';
import Collection from './../src/collection';

test('should return internal array elements', t => {
    const collection = new Collection([1, 2, 3]);

    t.deepEqual([1, 2, 3], collection.getItems());
});
