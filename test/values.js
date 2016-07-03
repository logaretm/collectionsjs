import test from 'ava';
import Collection from './../src/collection.js';

/** @test {Collection#values} */
test('it should get the values in the object', t => {
    const collection = new Collection({
        1: 2,
        2: 3,
        4: 5
    }).values();

    t.true(collection instanceof Collection);
    t.deepEqual(collection.all(), [2, 3, 5]);
});
