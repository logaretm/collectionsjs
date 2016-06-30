import test from 'ava';
import Collection from './../src/collection';

test('should return a single value from the collection', t => {
    const value = new Collection([1, 2, 3]).reduce(
        (previous, current) => previous + current,
         0
     );

    t.is(6, value);
});
