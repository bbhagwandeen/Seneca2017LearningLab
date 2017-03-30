// First require (e.g., load) our seneca.js module
var seneca = require('./seneca');

/**
 * Tests for seneca.isValidEmail()
 */
describe('seneca.isValidEmail()', function() {

    // tests for valid myseneca.ca
    test('returns true for simple myseneca address', function() {
        var simpleEmail = 'someone@myseneca.ca';
        var simpleEmail2 = 'someone@senecacollege.ca'
        var simpleEmail3 = 'someone@senecac.on.ca'
        expect(seneca.isValidEmail(simpleEmail)).toBe(true);
        expect(seneca.isValidEmail(simpleEmail2)).toBe(true);
        expect(seneca.isValidEmail(simpleEmail3)).toBe(true);
    });

    // tests for other email clients
    test('returns false for a non-myseneca address', function() {
        var gmailAddress = 'someone@gmail.com';
        expect(seneca.isValidEmail(gmailAddress)).toBe(false);
    });

    // sample test for non-string variable sent
    test('returns false for non-string email address', function() {
        var intValue = 34;
        expect(seneca.isValidEmail(intValue)).toBe(false);
    });

    // tests for null variable send
    test('returns false for a null entry', function() {
        var nullV = null;
        expect(seneca.isValidEmail(nullV)).toBe(false);
    });

    // tests for leading whitespace character in variable
    test('returns false for leading whitespace', function() {
        var whitespaceEmail = 'lol';
        expect(seneca.isValidEmail(whitespaceEmail)).toBe(false);
    });
});

// Tests for seneca.formatSenecaEmail()
describe('seneca.formatSenecaEmail()', function() {

    test('adds @myseneca.ca to the end of name', function() {
        var name = 'mshaw';
        expect(seneca.formatSenecaEmail(name)).toBe('mshaw@myseneca.ca');
    });

    test('removes whitespace', function() {
        var whitespaceEmail2 = ' lol';
        expect(seneca.formatSenecaEmail(whitespaceEmail2)).toBe('lol@myseneca.ca');
    });
});