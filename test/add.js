import test from 'ava';
import Collection from './../src/collection';

// #add
test('should add an item to the collection', t => {
    const collection = new Collection();
    const item = 'Arya';
    collection.add(item);

    t.is(item, collection.first());
});
