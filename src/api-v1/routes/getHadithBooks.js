const HadithsMeta = require("../models/HadithsMeta");
const { collections } = require("./constants");

const getHadithBooks = async (req, res, next) => {
  try {
    const collection = req.params.collection;

    if (!collections.includes(collection)) {
      return res.status(400).json({
        message: `Invalid collection name it must be one of them [${collections}]`,
      });
    }

    const meta = await HadithsMeta.collection.get({ id: collection });

    res.status(200).json(meta.books);
  } catch (err) {
    err.status = 400;
    next(err);
  }
};

module.exports = getHadithBooks;
