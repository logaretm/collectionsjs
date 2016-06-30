import test from 'ava';
import Collection from './../src/collection';

test('should return a single value that is the sum of all elements', t => {
    const sum = new Collection([1, 2, 3, 4, 5]).sum();

    t.is(sum, 15);
});

test('should return a single value that is the sum of a property in all elements', t => {
    const sum = new Collection([
        { name: 'Arya Stark', age: 9 },
        { name: 'Bran Stark', age: 7 },
        { name: 'Jon Snow', age: 14 }
    ]).sum('age');

    t.is(sum, 30);
});

test('should return a single value that is the sum of a callback called on each element', t => {
    const sum = new Collection([
        { name: 'Arya Stark', age: 9 },
        { name: 'Bran Stark', age: 7 },
        { name: 'Jon Snow', age: 14 }
    ]).sum(item => item.age);

    t.is(sum, 30);
});
