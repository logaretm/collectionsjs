import test from 'ava';
import Collection from './../src/collection';

test('it skips a number of elements', t => {
    const collection = new Collection([1, 2, 3, 4]).skip(2);

    t.deepEqual(collection.all(), [3, 4]);
});
