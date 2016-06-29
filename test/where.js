import test from 'ava';
import Collection from './../src/collection';

test('should return a filtered collection which elements satisfy the callback', t => {
    const collection = new Collection([1, 2, 3]).where(item => item > 2);

    t.is(collection.first(), 3);
});

test('should return a filtered collection which elements object properties equal the value', t => {
    const collection =  new Collection([
        { name: "Arya Stark", age: 9 },
        { name: "Bran Stark", age: 7 },
        { name: "Jon Snow", age: 14 }
    ]).where('age', 14);

    t.deepEqual({ name: "Jon Snow", age: 14 }, collection.first());
});
