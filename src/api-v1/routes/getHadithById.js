const Hadith = require("../models/Hadith");
const { collections } = require("./constants");

const getHadithById = async (req, res, next) => {
  try {
    const { collection, id } = req.params;

    if (!collections.includes(collection)) {
      return res.status(400).json({
        message: `Invalid collection name it must be one of them [${collections}]`,
      });
    }

    Hadith.config.collectionName = collection;

    const hadith = await Hadith.collection.get({ id });

    res.status(200).json(hadith.toObject());
  } catch (err) {
    err.status = 400;
    next(err);
  }
};

module.exports = getHadithById;
