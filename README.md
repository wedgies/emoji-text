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
			return "%" + data.description.toUpperCase() + "%";
		}
	}); // "%GHOST% %HORSE FACE%"
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

The data object comes from [gemoji](https://www.npmjs.com/package/gemoji) and looks like this:

```json
{
  "description": "pile of poo",
  "names": ["hankey", "poop", "shit"],
  "tags": ["crap"],
  "name": "hankey",
  "emoji": "💩"
}
```


## Install

Install with [npm](https://www.npmjs.org/):

```
npm install emoji-text
```

## License

ISC