const {
calculateGoldValue,
calculatePurity
} = require("../src/calculator");

describe("Gold Calculator", () => {
test("calculates 24K gold value correctly", () => {
expect(calculateGoldValue(10, 24, 100)).toBe(1000);
});

test("calculates 18K gold value correctly", () => {
expect(calculateGoldValue(10, 18, 100)).toBe(750);
});

test("calculates 14K gold value correctly", () => {
expect(calculateGoldValue(10, 14, 100)).toBeCloseTo(583.3333);
});

test("calculates gold purity correctly", () => {
expect(calculatePurity(18)).toBe(0.75);
});

test("rejects invalid karat values", () => {
expect(() => calculateGoldValue(10, 25, 100)).toThrow();
});

test("rejects negative weight", () => {
expect(() => calculateGoldValue(-5, 18, 100)).toThrow();
});
});
