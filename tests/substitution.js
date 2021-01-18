const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution", () => {
    it("should transpose letters from standard alphabet to the substitution alphabet", () => {
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
        const expected = "jrufscpw";
        expect(actual).to.equal(expected);
    });

    it("should maintain spaces throughout and capital letters should be ignored", () => {
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        const expected = "elp xhm xf mbymwwmfj dne";
        expect(actual).to.eql(expected);
    });

    it("should cipher deciphered message when encode equals false", () => {
        const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
        const expected = "thinkful";
        expect(actual).to.equal(expected);
    });

    it("should be able to decipher letters as well as specific characters such as #, $, *, etc", () => {
        const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
        const expected = "y&ii$r&";
        expect(actual).to.equal(expected);
    });

    it("should cipher deciphered message when encode equals false, when given specific characters such as #, $, *, etc", () => {
        const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
        const expected = "message";
        expect(actual).to.equal(expected);
    });

    it("alphabet parameter should be exact 26 characters of a string, if not return false ", () => {
        const actual = substitution("thinkful", "short");
        expect(actual).to.be.false;
    });

    it("alphabet parameter should be unique. Otherwise, it should return false", () => {
        const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
        expect(actual).to.be.false;
    });
})
