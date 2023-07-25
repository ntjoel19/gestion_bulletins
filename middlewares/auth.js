const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');

dotenv.config();

exports.auth = (req, res, next) => {
    const token = req.header('Authorization').split(" ")[1];
    
    if (!token) {
        return res.status(401).json({ message: 'Token d\'authentification manquant' });
    }

    jwt.verify(token, process.env.JWTPRIVATEKEY, (err, user) => {
        if (err) {
        return res.status(403).json({ message: 'Token d\'authentification invalide' });
        }
        console.log(user);
        res.cookie('access_token', token, { httpOnly: true, secure: true, maxAge: 86400000 }) //86400000 ms = 24h
        req.user = user;
        next();
    });
};