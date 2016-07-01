import test from 'ava';
import Collection from './../src/collection';

/** @test {Collection#each} */
test('should iterate over all collection elements', t => {
    const items = [];
    new Collection([1, 2, 3]).each(item => items.push(item));

    t.deepEqual([1, 2, 3], items);
});
