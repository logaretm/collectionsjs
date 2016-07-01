import test from 'ava';
import Collection from './../src/collection';

/** @test {Collection#take} */
test('should return empty collection if the count is 0', t => {
    const collection = new Collection([1, 2, 3, 4, 5]).take(0);

    t.true(collection instanceof Collection);
    t.deepEqual([], collection.all());
});

/** @test {Collection#take} */
test('should retrive elements from the beginning of the collection', t => {
    const collection = new Collection([1, 2, 3, 4, 5]).take(3);

    t.true(collection instanceof Collection);
    t.deepEqual([1, 2, 3], collection.all());
});

/** @test {Collection#take} */
test('should retrive elements from the end of the collection if a negative count was given', t => {
    const collection = new Collection([1, 2, 3, 4, 5]).take(-3);

    t.true(collection instanceof Collection);
    t.deepEqual([5, 4, 3], collection.all());
});
