import test from 'ava';
import Collection from './../src/collection';

/** @test {Collection#has} */
test('it checks if a collection has a specific item', t => {
    const collection = new Collection([1, 2, 3, 4]);

    t.true(collection.has(2));
    t.true(collection.has(1));
    t.false(collection.has(5));
});
