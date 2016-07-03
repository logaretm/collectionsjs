import test from 'ava';
import Collection from './../src/collection';

test('it sorts by a property in the objects', t => {
    const collection = new Collection([
        { name: 'Jon Snow', age: 14 },
        { name: 'Arya Stark', age: 9 },
        { name: 'Bran Stark', age: 7 },
    ]).sortBy('age');

    t.deepEqual(collection.all(), [
        { name: 'Bran Stark', age: 7 },
        { name: 'Arya Stark', age: 9 },
        { name: 'Jon Snow', age: 14 }
    ]);
});

test('it sorts by a property in the objects in descending order', t => {
    const collection = new Collection([
        { name: 'Bran Stark', age: 7 },
        { name: 'Jon Snow', age: 14 },
        { name: 'Arya Stark', age: 9 }
    ]).sortBy('age', 'desc');

    t.deepEqual(collection.all(), [
        { name: 'Jon Snow', age: 14 },
        { name: 'Arya Stark', age: 9 },
        { name: 'Bran Stark', age: 7 }
    ]);
});
