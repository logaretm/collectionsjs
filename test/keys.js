import test from 'ava';
import Collection from './../src/collection';

test('should return a new collection with the object keys', t => {
    const keys = new Collection({
        "arya": 10,
        "john": 20,
        "potato": 30
    }).keys();

    t.true(keys instanceof Collection);
    t.deepEqual(["arya", "john", "potato"], keys.all());
});

test('should return a new collection with the array keys', t => {
    const keys = new Collection(["arya", "john", "potato"]).keys();

    t.true(keys instanceof Collection);
    t.deepEqual(['0', '1', '2'], keys.all());
});
