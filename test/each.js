import test from 'ava';
import Collection from './../src/collection';

/** @test {Collection#each} */
test('should iterate over all collection elements', t => {
    const items = [];
    const collection = new Collection([1, 2, 3]);
    const value = collection.each(item => items.push(item));

    t.deepEqual([1, 2, 3], items);
    t.is(value, collection);
});
