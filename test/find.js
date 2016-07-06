import test from 'ava';
import Collection from './../src/collection';

/** @test {Collection#find} */
test('should return the index of an element', t => {
    const collection = new Collection(['jon', 'arya', 'bran']);

    t.is(collection.find('bran'), 2);
    t.is(collection.find('ed'), -1);
});
