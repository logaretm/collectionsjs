import test from 'ava';
import Collection from './../src/collection';

// #add
test('should add an item to the collection', t => {
    const collection = new Collection();
    const item = "Arya";
    collection.add(item);

    t.is(item, collection.first());
});

// #all
test('should return internal array elements', t => {
    let collection = new Collection([1, 2, 3]);

    t.deepEqual([1, 2, 3], collection.all());
});

// #average
test('should calculate the average of the elements directly', t => {
    let avg = new Collection([1, 2, 3, 4]).average();

    t.is(2.5, avg);
});

test('should calculate the average of a property in the elements', t => {
    let avg = new Collection([
        { name: "Arya Stark", age: 9 },
        { name: "Bran Stark", age: 7 },
        { name: "Jon Snow", age: 14 }
    ]).average('age');

    t.is(10, avg);
});

test('should calculate the average of a callback called on all elements', t => {
    let avg = new Collection([
        { name: "Arya Stark", age: 9 },
        { name: "Bran Stark", age: 7 },
        { name: "Jon Snow", age: 14 }
    ]).average(item => item.age);

    t.is(10, avg);
});

// #concat
test('should concat a collection and an array', t => {
    const collection = new Collection([1, 2, 3]).concat([4, 5]);

    t.deepEqual([1, 2, 3, 4, 5], collection.all());
});

test('should concat two collections', t => {
    const collection = new Collection([1, 2, 3]).concat(
        new Collection([4, 5])
    );

    t.deepEqual([1, 2, 3, 4, 5], collection.all());
});

// #count
test('should return collection count', t => {
    const count = new Collection([1, 2, 3, 4, 5]).count();

    t.is(5, count);
});

// #each
test('should iterate over all collection elements', t => {
    const items = [];
    new Collection([1, 2, 3]).each(item => items.push(item));

    t.deepEqual([1, 2, 3], items);
});

// #filter
test('should return a collection with filtered items', t => {
    let collection = new Collection([1, 4, 8, 10, 20]).filter(item => item >= 5);

    t.true(collection instanceof Collection);
    t.deepEqual([8, 10, 20], collection.all());
});

// #find
test('should return the element in that index', t => {
    const collection = new Collection(['jon', 'arya', 'martin']);

    t.is('arya', collection.find(1));
});

// #first
test('should return null if the collection is empty', t => {
    const first = new Collection().first();

    t.is(first, null);
});

test('should return first element in a collection', t => {
    const first = new Collection([6, 2, 3, 4, 5]).first();

    t.is(first, 6);
});

test('should return first element that satisifies a predicate/callback', t => {
    const first = new Collection([
        { name: "Bran Stark", age: 7 },
        { name: "Arya Stark", age: 9 },
        { name: "Jon Snow", age: 14 }
    ]).first(item => item.age > 7);

    t.deepEqual({ name: "Arya Stark", age: 9 }, first);
});

//# flatten
test('should flatten the collection elements by one level', t => {
    const collection = new Collection([1, [2, [3, [4]], 5]]).flatten(false);

    t.deepEqual([1, 2, [3, [4]], 5], collection.all());
});

test('should flatten the collection elements deeply', t => {
    const collection = new Collection([1, [2, [3, [4]], 5]]).flatten(true);

    t.deepEqual([1, 2, 3, 4, 5], collection.all());
});

// #getItems
test('should return internal array elements', t => {
    let collection = new Collection([1, 2, 3]);

    t.deepEqual([1, 2, 3], collection.getItems());
});

// #keys
test('should return a new collection with the object keys', t => {
    const keys = new Collection({
        "arya": 10,
        "john": 20,
        "potato": 30
    }).keys();

    t.true(keys instanceof Collection);
    t.deepEqual(["arya", "john", "potato"], keys.all());
});

test('should return a new collection with the array keys', t => {
    const keys = new Collection(["arya", "john", "potato"]).keys();

    t.true(keys instanceof Collection);
    t.deepEqual(['0', '1', '2'], keys.all());
});

//# last
test('should return null if the collection is empty', t => {
    const last = new Collection().last();

    t.is(last, null);
});

test('should return last element in a collection', t => {
    const last = new Collection([6, 2, 3, 4, 5]).last();

    t.is(last, 5);
});

test('should return the last element that satisifies a predicate/callback', t => {
    const last = new Collection([
        { name: "Arya Stark", age: 9 },
        { name: "Bran Stark", age: 7 },
        { name: "Jon Snow", age: 14 }
    ]).last(item => item.age <= 10);

    t.deepEqual({ name: "Bran Stark", age: 7 }, last);
});

// #map
test('should return a collection with mapped items', t => {
    let collection = new Collection([1, 2, 3]).map(item => item + 1);

    t.true(collection instanceof Collection);
    t.deepEqual([2, 3, 4], collection.all());
});

// #pluck
test('should return a mapped collection containg values from objects', t => {
    let collection = new Collection([
        { name: "Arya Stark", age: 9 },
        { name: "Bran Stark", age: 7 },
        { name: "Jon Snow", age: 14 }
    ]).pluck('name');

    t.true(collection instanceof Collection);
    t.deepEqual(["Arya Stark", "Bran Stark", "Jon Snow"], collection.all());
});

// #push
test('should add an item to the collection', t => {
    const collection = new Collection();
    const item = "Arya";
    collection.push(item);

    t.is(item, collection.first());
});

// #reduce
test('should return a single value from the collection', t => {
    let value = new Collection([1, 2, 3]).reduce(
        (previous, current) => previous + current,
         0
     );

    t.is(6, value);
});

// #reject
test('should return a collection without rejected items', t => {
    let collection = new Collection([1, 5, 10, 15, 20, 25]).reject(item => item > 5);

    t.true(collection instanceof Collection);
    t.deepEqual([1, 5], collection.all());
});

// #REVERSE
test('should return a collection with reversed element order', t => {
    let collection = new Collection([1, 2, 3]).reverse();

    t.deepEqual([3, 2, 1], collection.all());
});

// #stringify
test('should stringify the collection contents', t => {
    const collection = new Collection([1, 2, 3]);

    t.is(JSON.stringify([1, 2, 3]), collection.stringify());
});

// #sum
test('should return a single value that is the sum of all elements', t => {
    let sum = new Collection([1, 2, 3, 4, 5]).sum();

    t.is(sum, 15);
});

test('should return a single value that is the sum of a property in all elements', t => {
    let sum = new Collection([
        { name: "Arya Stark", age: 9 },
        { name: "Bran Stark", age: 7 },
        { name: "Jon Snow", age: 14 }
    ]).sum('age');

    t.is(sum, 30);
});

test('should return a single value that is the sum of a callback called on each element', t => {
    let sum = new Collection([
        { name: "Arya Stark", age: 9 },
        { name: "Bran Stark", age: 7 },
        { name: "Jon Snow", age: 14 }
    ]).sum(item => item.age);

    t.is(sum, 30);
});

// #take
test('should return empty collection if the count is 0', t => {
    let collection = new Collection([1, 2, 3, 4, 5]).take(0);

    t.true(collection instanceof Collection);
    t.deepEqual([], collection.all());
});

test('should retrive elements from the beginning of the collection', t => {
    let collection = new Collection([1, 2, 3, 4, 5]).take(3);

    t.true(collection instanceof Collection);
    t.deepEqual([1, 2, 3], collection.all());
});

test('should retrive elements from the end of the collection if a negative count was given', t => {
    let collection = new Collection([1, 2, 3, 4, 5]).take(-3);

    t.true(collection instanceof Collection);
    t.deepEqual([5, 4, 3], collection.all());
});

// #where
test('should return a filtered collection which elements satisfy the callback', t => {
    const collection = new Collection([1, 2, 3]).where(item => item > 2);

    t.is(collection.first(), 3);
});

test('should return a filtered collection which elements object properties equal the value', t => {
    const collection =  new Collection([
        { name: "Arya Stark", age: 9 },
        { name: "Bran Stark", age: 7 },
        { name: "Jon Snow", age: 14 }
    ]).where('age', 14);

    t.deepEqual({ name: "Jon Snow", age: 14 }, collection.first());
});

// #zip
test('should return a collection whose elements are pairs of the two arrays', t => {
    const collection = new Collection([1, 2, 3]).zip(['a', 'b', 'c']);

    t.deepEqual([[1, 'a'], [2, 'b'], [3, 'c']], collection.all());
});
