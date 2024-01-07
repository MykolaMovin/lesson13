const {filterFoodPrice} = require('../food');;
const food = [
    {kind: 'potato', price: 10},
    {kind: 'bred',   price: 16}, 
    {kind: 'pepper', price: 27}, 
    {kind: 'banana', price: 32}, 
    {kind: 'lemon',  price: 50}
];
const MIN = 12;
const MAX = 40;

describe('Task 4 - Filtering food', () => {
    test('Test whether the expected length of the sorted array 3 corresponds to the actual length', () => {
        expect(filterFoodPrice(food, MIN, MAX)).toHaveLength(3);
    });

    test(`Test whether the sorted array contains the object { kind: 'pepper', price: 27 }`, () => {
        const expectedObject = {kind: 'pepper', price: 27};
        expect(filterFoodPrice(food, MIN, MAX)).toContainEqual(expectedObject);
    });

    test('Test whether the sorted array contains 2, 3, and 4 elements of the original food array', () => {
        expect(filterFoodPrice(food, MIN, MAX)).toEqual(expect.arrayContaining([food[1], food[2], food[3]]));
      });
    
    test('Test whether the price property of the 1st element of the sorted array is greater than min', () => {
        expect(filterFoodPrice(food, MIN, MAX)[0].price).toBeGreaterThan(MIN);
      });
    
    test('Test whether the price property of the 3rd element of the sorted array is less than max ', () => {
        expect(filterFoodPrice(food, MIN, MAX)[2].price).toBeLessThan(MAX);
      });
    
    test(`Test the assertion that the sorted array does not contain the element { kind: 'lemon', price: 50 }`, () => {
        const unExpectedObject = { kind: 'lemon', price: 50 };
        expect(filterFoodPrice(food, MIN, MAX)).not.toContain((unExpectedObject));
      });
    
});