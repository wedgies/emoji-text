# Emoji-Text

Converts emoji in a string into textual descriptions.

## Examples

```javascript
	var emojiText = require("emoji-text");

	emojiText.convert("🐱🐶"); // "[cat][dog]"

	emojiText.convert("🐔 🌵", {
  	delimeter: ':'
	}); // ":chicken: :cactus:"

	emojiText.convert("👻 🐴", {
		callback: function(emoji,data) {
			return "%" + data.description.toLowerCase() + "%";
		}
	}); // "%ghost% %horse face%"
```

## Parameters

```
emojiText.convert(str, options);
```

### str

The string to convert, expected to have emoji encoded as UTF-8.

### options

```javascript
{
	before: '[', // character to use before field
	after: ']', // character to use after field
	delimeter: ':', // shortcut to set before + after to same char
	field: 'name', // field to use name, description or emoji,
	callback: function(emoji, data) {} // custom conversion callback
}
```

### data

The data object comes from [wemoji](https://www.npmjs.com/package/wemoji) and looks like this:

```javascript
{ emoji: '🏩',
  platforms: [ 'tw', 'a', 'g' ],
  description: 'LOVE HOTEL',
  name: 'love_hotel',
  css: 'love_hotel',
  category: 'travel' }
```

## Install

Install with [npm](https://www.npmjs.org/):

```
npm install emoji-text
```

## License

ISC

[![Built with Wedgies](https://d3v9r9uda02hel.cloudfront.net/production/1.55.17/img/built-with-wedgies.png)](http://wedgies.com)
