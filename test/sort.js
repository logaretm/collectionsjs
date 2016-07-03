import test from 'ava';
import Collection from './../src/collection';

test('it should sort the collection without changing the orignal collection order', t => {
    const collection = new Collection([5, 3, 4, 1, 2]);
    const sorted = collection.sort();

    t.deepEqual(collection.all(), [5, 3, 4, 1, 2]);
    t.deepEqual(sorted.all(), [1, 2, 3, 4, 5]);
});

test('it should sort the collection with0 a compare function without changi the original collection'
, t => {
    const collection = new Collection([
        { name: 'Jon Snow', age: 14 },
        { name: 'Arya Stark', age: 9 },
        { name: 'Bran Stark', age: 7 },
    ]);

    const sorted = collection.sort((first, second) => {
        if (first.age > second.age) {
            return 1;
        }

        if (first.age < second.age) {
            return -1;
        }

        return 0;
    });


    t.deepEqual(collection.all(), [
        { name: 'Jon Snow', age: 14 },
        { name: 'Arya Stark', age: 9 },
        { name: 'Bran Stark', age: 7 },
    ]);
    t.deepEqual(sorted.all(), [
        { name: 'Bran Stark', age: 7 },
        { name: 'Arya Stark', age: 9 },
        { name: 'Jon Snow', age: 14 }
    ]);
});
