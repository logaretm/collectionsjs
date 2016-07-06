import test from 'ava';
import Collection from './../src/collection';

test('it should remove an element from the collection', t => {
    const john = { name: 'John Snow', age: 14 };
    const arya = { name: 'Arya Stark', age: 9 };
    const bran = { name: 'Bran Stark', age: 7 };

    const collection = new Collection([john, arya, bran]);
    collection.remove(john);

    t.deepEqual(collection.all(), [arya, bran]);
});

test('it should return false if no element was removed', t => {
    const john = { name: 'John Snow', age: 14 };
    const arya = { name: 'Arya Stark', age: 9 };
    const bran = { name: 'Bran Stark', age: 7 };

    const collection = new Collection([john, arya, bran]);

    t.false(collection.remove({ name: 'Eddard', age: 50 }));
    t.deepEqual(collection.all(), [john, arya, bran]);
});
