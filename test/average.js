import test from 'ava';
import Collection from './../src/collection';

test('should calculate the average of the elements directly', t => {
    const avg = new Collection([1, 2, 3, 4]).average();

    t.is(2.5, avg);
});

test('should calculate the average of a property in the elements', t => {
    const avg = new Collection([
        { name: 'Arya Stark', age: 9 },
        { name: 'Bran Stark', age: 7 },
        { name: 'Jon Snow', age: 14 }
    ]).average('age');

    t.is(10, avg);
});

test('should calculate the average of a callback called on all elements', t => {
    const avg = new Collection([
        { name: 'Arya Stark', age: 9 },
        { name: 'Bran Stark', age: 7 },
        { name: 'Jon Snow', age: 14 }
    ]).average(item => item.age);

    t.is(10, avg);
});
