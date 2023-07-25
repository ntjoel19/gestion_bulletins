var passwordValidator = require("password-validator");

var passwordSchema = new passwordValidator();

passwordSchema
  .is()
  .min(5) // Min 5 caractères
  .is()
  .max(100) // Max 100 caractères
  .has()
  .uppercase() //avoir lettres majuscules
  .has()
  .lowercase() //avoir lettres minuscules
  .has()
  .digits(1) //avoir 1 chiffre
  .has()
  .not()
  .spaces() //pas d'espace
  .is()
  .not()
  .oneOf(["Passw0rd", "Password123"]);

module.exports = passwordSchema;
