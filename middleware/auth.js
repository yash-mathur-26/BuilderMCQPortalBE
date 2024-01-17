require("dotenv").config();
const jwt = require("jsonwebtoken");

exports.isAuthorize = (req, res, next) => {
  if (!req.headers.token) return res.status(401).json({ error: "Unauthorized" });
  const token = req.headers.token;
  jwt.verify(token, process.env.JWT_KEY, (err, payload) => {
    if (err) {
      const message =
        err.name === "JsonWebTokenError" ? "Unauthorized" : err.message;
      return res.status(401).json({ error: message });
    }
    req.payload = payload;
    next();
  });
};
