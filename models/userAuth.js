const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  // Référence à la classe à laquelle l'élève appartient
  role: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Role', required: true }], 
  // Autres informations relatives à la matière
});

const User = mongoose.model('User', userSchema);

module.exports = User;