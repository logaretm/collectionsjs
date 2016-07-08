import test from 'ava';
import Collection from './../src/collection';

/** @test {Collection#unique} */
test('it should remove duplicate items', t => {
    const unique = new Collection([2, 1, 2, 3, 3, 4, 5, 1, 2]).unique();

    t.deepEqual(unique.all(), [2, 1, 3, 4, 5]);
});

/** @test {Collection#unique} */
test('it should remove duplicate items based on a predicate', t => {
    const unique = new Collection([
        { name: 'Jeff', quote: 'Hi, my name is Jeff' },
        { name: 'Fake Jeff', quote: 'Hi, my name is Jeff' },
        { name: 'Not Jeff', quote: 'Hi, my name is Jeff' }
    ]).unique(jeff => jeff.quote);

    t.deepEqual(unique.pluck('name').all(), ['Jeff']);
});
