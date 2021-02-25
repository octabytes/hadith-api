const { Model, Field } = require("fireo");

class HadithsMeta extends Model {
  id = Field.ID();
  books = Field.List();

  static config = {
    collectionName: "hadiths_meta",
  };
}

module.exports = HadithsMeta;
