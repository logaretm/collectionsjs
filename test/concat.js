import test from 'ava';
import Collection from './../src/collection';

/** @test {Collection#concat} */
test('should concat a collection and an array', t => {
    const collection = new Collection([1, 2, 3]).concat([4, 5]);

    t.deepEqual([1, 2, 3, 4, 5], collection.all());
});

/** @test {Collection#concat} */
test('should concat two collections', t => {
    const collection = new Collection([1, 2, 3]).concat(
        new Collection([4, 5])
    );

    t.deepEqual([1, 2, 3, 4, 5], collection.all());
});
