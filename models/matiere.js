const mongoose = require('mongoose');

const matiereSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  abreviation: { type: String, required: true },
  // Autres informations relatives à la matière
});

matiereSchema.index({ nom: 1, abreviation: 1 }, { unique: true });

const Matiere = mongoose.model('Matiere', matiereSchema);

module.exports = Matiere;
