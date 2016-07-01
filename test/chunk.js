import test from 'ava';
import Collection from './../src/collection';

/** @test {Collection#chunk} */
test('it should return empty collection if a non-positive size was passed', t => {
    let collection = new Collection([1, 2, 3, 4, 5, 6]).chunk(0);
    t.true(collection instanceof Collection);
    t.deepEqual([], collection.all());

    collection = new Collection([1, 2, 3, 4, 5, 6]).chunk(-1);
    t.true(collection instanceof Collection);
    t.deepEqual([], collection.all());
});

/** @test {Collection#chunk} */
test('it should chunk the collection elements into equal arrays', t => {
    const collection = new Collection([1, 2, 3, 4, 5]).chunk(2);
    t.true(collection instanceof Collection);
    t.deepEqual([[1, 2], [3, 4], [5]], collection.all());
});
