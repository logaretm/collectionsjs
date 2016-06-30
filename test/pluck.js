import test from 'ava';
import Collection from './../src/collection';

test('should return a mapped collection containg values from objects', t => {
    const collection = new Collection([
        { name: 'Arya Stark', age: 9 },
        { name: 'Bran Stark', age: 7 },
        { name: 'Jon Snow', age: 14 }
    ]).pluck('name');

    t.true(collection instanceof Collection);
    t.deepEqual(['Arya Stark', 'Bran Stark', 'Jon Snow'], collection.all());
});
