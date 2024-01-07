const {addition} = require('../addition.js');

describe('Tests for the first task', () => {
    test('Addition of the number 0.1 to the number 0.2 ', () => {
        expect(addition(0.1, 0.2)).toBeCloseTo(0.3);
    })
})