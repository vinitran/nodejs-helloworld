const jwt = require("jsonwebtoken");

require("dotenv");

const authenToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) res.sendStatus(401);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err) => {
        if (err) res.sendStatus(403);
    });
    next();
}

module.exports = authenToken;