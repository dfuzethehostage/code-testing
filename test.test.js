const reverse = require("./reverse-string.js");
const capitalize = require("./capitalize.js");
const calculator = require("./calculator.js");
const ceasarCipher = require("./ceasar-cipher.js");
const analyzeArray = require("./analyze-array.js");

test("reverseString", () => {
  expect(reverse("hello")).toEqual("olleh");
});

test("capitalize", () => {
  expect(capitalize("hello")).toEqual("Hello");
});

test("add", () => {
  expect(calculator.add(1, 2)).toEqual(3);
});

test("subtract", () => {
  expect(calculator.subtract(1, 2)).toEqual(-1);
});

test("multiply", () => {
  expect(calculator.multiply(1, 2)).toEqual(2);
});

test("divide", () => {
  expect(calculator.divide(1, 2)).toEqual(0.5);
});

test("ceaserCipher", () => {
  expect(ceasarCipher("abcdefghijklmnopqrstuvwxyz", 2)).toEqual(
    "cdefghijklmnopqrstuvwxyzab"
  );
  expect(ceasarCipher("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 1)).toEqual(
    "BCDEFGHIJKLMNOPQRSTUVWXYZA"
  );
});

test("analyzeArray", () => {
  expect(analyzeArray([3, 5, 7, 2, 1]).average).toBe(3);
  expect(analyzeArray([3, 5, 7, 2, 1]).min).toBe(1);
  expect(analyzeArray([3, 5, 7, 2, 1]).max).toBe(7);
  expect(analyzeArray([3, 5, 7, 2, 1]).length).toBe(5);
});
