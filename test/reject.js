import test from 'ava';
import Collection from './../src/collection';

/** @test {Collection#reject} */
test('should return a collection without rejected items', t => {
    const collection = new Collection([1, 5, 10, 15, 20, 25]).reject(item => item > 5);

    t.true(collection instanceof Collection);
    t.deepEqual([1, 5], collection.all());
});
