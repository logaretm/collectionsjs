import test from 'ava';
import Collection from './../src/collection';

/** @test {Collection#contains} */
test('it should return true if the element is found using a closure', t => {
    const collection = new Collection([
        { name: 'John Snow', age: 14 },
        { name: 'Bran Stark', age: 7 },
        { name: 'Arya Stark', age: 9 }
    ]);

    t.true(collection.contains(stark => stark.name === 'Bran Stark'));
});

/** @test {Collection#contains} */
test('it should return false if the element is not found using a closure', t => {
    const collection = new Collection([
        { name: 'John Snow', age: 14 },
        { name: 'Bran Stark', age: 7 },
        { name: 'Arya Stark', age: 9 }
    ]);

    t.false(collection.contains(stark => stark.name === 'Eddard'));
});
