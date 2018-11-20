const getMultiplication = require('../main');

it ('should add get multiplication table', () => {
    expect(getMultiplication(2, 4)).toBe("2*2=4\n2*3=6  3*3=9\n2*4=8  3*4=12 4*4=16");
});
it ('should add get multiplication table', () => {
    expect(getMultiplication(4, 2)).toBe(null);
});
