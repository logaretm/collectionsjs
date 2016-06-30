import test from 'ava';
import Collection from './../src/collection';

test('should return collection count', t => {
    const count = new Collection([1, 2, 3, 4, 5]).count();

    t.is(5, count);
});
