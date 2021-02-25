const Hadith = require("../models/Hadith");
const { collections } = require("./constants");

const getBookHadiths = async (req, res, next) => {
  try {
    const { collection, book_number } = req.params;

    if (!collections.includes(collection)) {
      return res.status(400).json({
        message: `Invalid collection name it must be one of them [${collections}]`,
      });
    }

    Hadith.config.collectionName = collection;

    let query = Hadith.collection.where(
      "book_number",
      "==",
      parseInt(book_number)
    );

    if (req.query.offset) {
      query.offset(parseInt(req.query.offset));
    }

    if (req.query.limit) {
      query.limit(parseInt(req.query.limit));
    } else {
      query.limit(30);
    }

    const snapshot = await query.orderBy("hadith_number").fetch();

    const hadithList = [];

    for (hadith of snapshot.list) {
      hadithList.push(hadith.toObject());
    }

    res.status(200).json(hadithList);
  } catch (err) {
    err.status = 400;
    next(err);
  }
};

module.exports = getBookHadiths;
