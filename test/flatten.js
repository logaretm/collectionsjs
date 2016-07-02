import test from 'ava';
import Collection from './../src/collection';

/** @test {Collection#flatten} */
test('should flatten the collection elements by one level', t => {
    const collection = new Collection([1, [2, [3, [4]], 5]]).flatten();

    t.deepEqual([1, 2, [3, [4]], 5], collection.all());
});

/** @test {Collection#flatten} */
test('should flatten the collection elements deeply', t => {
    const collection = new Collection([1, [2, [3, [4]], 5]]).flatten(true);

    t.deepEqual([1, 2, 3, 4, 5], collection.all());
});
