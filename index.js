var wemoji = require('wemoji');

// Regex for replacing
var pattern = new RegExp(Object.keys( wemoji.unicode ).join('|'), 'g');
var defaults = {
  before: '[',
  after: ']',
  field: 'name'
};

module.exports.convert = function (str, options) {
  if (options == null) options = {};

  var before, after
  if ( 'delimiter' in options ) {
    before = options.delimiter
    after  = options.delimiter
  } else {
    before = 'before' in options ? options.before : defaults.before
    after = 'after' in options ? options.after : defaults.after
  }
  var field = options.field || defaults.field;

  return str.replace(pattern, function(val) {
    if (options.callback) {
      return options.callback(val, wemoji.unicode[ val ]);
    } else {
      return before + wemoji.unicode[ val ][ field ] + after;
    }
  });
}
