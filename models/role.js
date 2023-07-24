const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  abreviation: { type: String, required: true },
  // Autres informations relatives à la matière
});

roleSchema.index({ nom: 1, abreviation: 1 }, { unique: true });

const Role = mongoose.model('Role', roleSchema);

module.exports = Role;