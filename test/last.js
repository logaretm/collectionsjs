import test from 'ava';
import Collection from './../src/collection';

test('should return null if the collection is empty', t => {
    const last = new Collection().last();

    t.is(last, null);
});

test('should return last element in a collection', t => {
    const last = new Collection([6, 2, 3, 4, 5]).last();

    t.is(last, 5);
});

test('should return the last element that satisifies a predicate/callback', t => {
    const last = new Collection([
        { name: "Arya Stark", age: 9 },
        { name: "Bran Stark", age: 7 },
        { name: "Jon Snow", age: 14 }
    ]).last(item => item.age <= 10);

    t.deepEqual({ name: "Bran Stark", age: 7 }, last);
});
