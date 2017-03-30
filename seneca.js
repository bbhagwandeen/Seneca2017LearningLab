// [INFO] See discussion of node.js exports here:
// https://www.sitepoint.com/understanding-module-exports-exports-node-js/

/**
 * Given a string `email`, return `true` if the string is in the form
 * of a valid Seneca College email address, `false` othewise.
 */
exports.isValidEmail = function (email) {
    // the following switch case checks the typeof value
    // of the variables being sent to the isValidEmail function
    // and will return values to seneca.test.js
  switch (typeof email) {
        // if email is string and has a leading whitespace character,
        // return false.
        // if email is string and contains "myseneca.ca, 
        // senecacollege.ca or senecacollege.on.ca" then
        // return true.
        // if the email is null, then error out
    case 'string':
      if (/\s/.test(email)) {
        return false;
      } else if (email.includes('myseneca.ca') ||
                email.includes('senecacollege.ca') ||
                email.includes('senecac.on.ca')) {
        return true;
      }
      return false;

    case !'string':
      return true;
    case 'null':
      return true;
    default:
      return false;
  }
};

/**
 * Given a string `name`, return a formatted Seneca email address for
 * this person. NOTE: the email doesn't need to be real/valid/active.
 */
exports.formatSenecaEmail = function (name) {
  return name.concat('@myseneca.ca').trim();
};
