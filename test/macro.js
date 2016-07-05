import test from 'ava';
import Collection from './../src/collection';

test('it should register methods on the collection objects', t => {
    Collection.macro('pluckNJoin', c => c.pluck('name').join());

    const collection = new Collection([{ name: 'Jack' }, { name: 'Mary' }, { name: 'Bob' }]);
    t.is(collection.pluckNJoin(), 'Jack,Mary,Bob');

    Collection.macro('addNumbers', (c, n) => c.map(i => i + n));
    const col2 = new Collection([1, 2, 3, 4]).addNumbers(3);
    t.deepEqual(col2.all(), [4, 5, 6, 7]);
});

test('it should throw an error when trying to register an existing method', t => {
    t.throws(() => {
        Collection.macro('pluck', c => c);
    });
});
