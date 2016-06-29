import test from 'ava';
import Collection from './../src/collection';

test('should flatten the collection elements by one level', t => {
    const collection = new Collection([1, [2, [3, [4]], 5]]).flatten(false);

    t.deepEqual([1, 2, [3, [4]], 5], collection.all());
});

test('should flatten the collection elements deeply', t => {
    const collection = new Collection([1, [2, [3, [4]], 5]]).flatten(true);

    t.deepEqual([1, 2, 3, 4, 5], collection.all());
});
