const passwordSchema = require("../models/password");

module.exports = (req, res, next) => {
  if (!passwordSchema.validate(req.body.password)) {
    res.writeHead(
      400,
      "Le mot de passe doit comprendre 5 caractères au moins dont au moins un chiffre, une majuscule, une minuscule, sans espaces. Ex: Mama1 (NB: faible)",
      {
        "content-type": "application/json",
      }
    );
    res.end("Le format du mot de passe est incorrect.");
  } else {
    next();
  }
};