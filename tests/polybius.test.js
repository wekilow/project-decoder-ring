const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius", () => {
    it("should decode the message and should still be a string, each pair of numbers is translated using the coordinates", () => {
        const actual = polybius("thinkful");
        const expected = "4432423352125413";
        expect(actual).to.equal(expected);
    });

    it("should encode the message with only spaces and letters, capital letters can be ignored", () => {
        const actual = polybius("Hello World");
        const expected = "3251131343 2543241341";
        expect(actual).to.eql(expected);
    });

    it("should decode the message maintaining spaces throughout", () => {
        const actual = polybius("3251131343 2543241341", false);
        const expected = "hello world";
        expect(actual).to.eql(expected);
    });

    it("should decode letters 'I' and 'J' in the same space. Both letters can be converted to 42, but when decoding, both letters should somehow be shown", () => {
        const actual = polybius("4432423352125413", false);
        const expected = "th(i/j)nkful";
        expect(actual).to.eql(expected);
    });

    it("should decode the number of characters in the string excluding spaces should be even. Otherwise, return false", () => {
        const actual = polybius("44324233521254134", false);
        const expected = false;
        expect(actual).to.equal(expected);
    });
});
