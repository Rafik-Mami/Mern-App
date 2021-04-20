const jwt = require("jsonwebtoken");
const User = require("../models/User");

const isAuth = async (req, res, next) => {
    try {

        const token = req.headers["authorization"];
        if (!token) {
            return res.status(400).send({ errors: [{ msg: "Unauthorized1" }] });
        }
        const decoded = await jwt.verify(token, process.env.SECRET);

        const user = await User.findById(decoded.id).select("-password");

        if (!user) {
            return res.status(400).send({ errors: [{ msg: "Unauthorized2" }] });
        }

        req.user = user;

        next();
    } catch (error) {
            return res.status(500).send({ errors: [{ msg: "Unauthorized3" }] });
    }
};

module.exports = isAuth;
