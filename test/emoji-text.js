var assert = require("assert"),
  emojiText = require("..");

describe('emoji-text', function(){

  it('should convert emoji to textual descriptions', function(){
    var text = emojiText.convert("🌵❤️👻🐱🐶");
    assert.equal(text,"[cactus][heart][ghost][cat][dog]");
  });

  it('should respect delimiter and field', function(){
    var text = emojiText.convert("🐔 🌵", {
      delimiter: ':',
      field: 'description'
    });
    assert.equal(text,":CHICKEN: :CACTUS:");
  });

  it('should respect before and after', function(){
    var text = emojiText.convert("🇫🇷 🍟", {
      before: '{',
      after: '}'
    });
    assert.equal(text,"{flag-fr} {fries}");
  });

  it('should support a custom callback', function(){
    var text = emojiText.convert("👻 🐴", {
      callback: function(emoji,data) {
        return "%" + data.description.toUpperCase() + "%";
      }
    });
    assert.equal(text,"%GHOST% %HORSE FACE%");
  });


});
