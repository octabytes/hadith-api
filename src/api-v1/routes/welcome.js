const welcomeEveryone = async (req, res, next) => {
  try {
    return res.status(200).json({
      message: "Welcome Everyone!",
    });
  } catch (err) {
    err.status = 400;
    next(err);
  }
};

module.exports = welcomeEveryone;
