import test from 'ava';
import Collection from './../src/collection';

/** @test {Collection#find} */
test('should return the element in that index', t => {
    const collection = new Collection(['jon', 'arya', 'martin']);

    t.is('arya', collection.find(1));
});
