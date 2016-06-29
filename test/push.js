import test from 'ava';
import Collection from './../src/collection';

test('should add an item to the collection', t => {
    const collection = new Collection();
    const item = "Arya";
    collection.push(item);

    t.is(item, collection.first());
});
