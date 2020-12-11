const assert = require('assert');


// Check that capitalizeFirst transforms javaScript correctly
assert.strictEqual(capitalizeFirst('javaScript test hello'), 'JavaScript Test Hello');
// Check that it works for a 1-character string
assert.strictEqual(capitalizeFirst('z'), 'Z');
// Check that it works for an empty string
assert.strictEqual(capitalizeFirst(''), '');