const jwt = require("jsonwebtoken");

exports.isAuthorize = (req, res, next) => {
  if (!req.headers["token"])
    return res.status(401).json({ error: "Uauthorized" });
  const token = req.headers["token"];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
    if (err) {
      const message =
        err.name === "JsonWebTokenError" ? "Unauthorized" : err.message;
      return res.status(401).json({ error: "Uauthorized" });
    }
    req.payload = payload;
    next();
  });
};
