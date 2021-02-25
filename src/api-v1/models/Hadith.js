const { Model, Field } = require("fireo");

class Hadith extends Model {
  id = Field.ID();
  hadith_number = Field.Number();
  book_number = Field.Number();
  book_name = Field.Map();
  chapter = Field.Map();
  text = Field.Map();
  is_sahih = Field.Boolean();
  uci = Field.Text();

  static config = {
    collectionName: "Must_be_set_runtime",
  };
}

module.exports = Hadith;
