const UserModel = require('../models/userAuth');
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

exports.signup = (req, res, next) => {
    let emailRegex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

    if(!emailRegex.test(req.body.email)) return res.status(500).json({ message: "Bad email" })

    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new UserModel({
                email: req.body.email,
                role: req.body.role,
                password: hash
            })
            console.log(user)
            user.save()
                .then(() => res.status(201).json({ message: "User créé !" }))
                .catch(error => res.status(400).json({ error }))
        })
        .catch(error => res.status(500).json({ error }))
}

exports.signin = (req, res, next) => {
    UserModel.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: "User non trouvé !" })
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Mot de passe incorrect !' })
                    }
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign(
                            { userId: user._id },
                            process.env.JWTPRIVATEKEY,
                            { expiresIn: '24h' }
                        )
                    })
                })
                .catch(error => res.status(500).json({ error }))
        })
        .catch(error => res.status(500).json({ error }))
}