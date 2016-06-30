import test from 'ava';
import Collection from './../src/collection';


test('it returns a new collection starting from the specified index to the end', t => {
    const collection = new Collection([0, 1, 2, 3, 4, 5, 6]).slice(2);

    t.deepEqual(collection.all(), [2, 3, 4, 5, 6]);
});

test('it returns a new collection starting from the specified index to a specified end', t => {
    const collection = new Collection([0, 1, 2, 3, 4, 5, 6]).slice(2, 4);

    t.deepEqual(collection.all(), [2, 3]);
});
