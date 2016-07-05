import test from 'ava';
import Collection from './../src/collection';

test('it should join all elements in one string with a sperator', t => {
    const collection = new Collection(['Jack', 'has', 3, 'apples']);

    t.is(collection.join(' '), 'Jack has 3 apples');
});
