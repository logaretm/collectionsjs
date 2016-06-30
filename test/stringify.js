import test from 'ava';
import Collection from './../src/collection';

test('should stringify the collection contents', t => {
    const collection = new Collection([1, 2, 3]);

    t.is(JSON.stringify([1, 2, 3]), collection.stringify());
});
