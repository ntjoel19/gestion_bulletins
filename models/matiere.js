const mongoose = require('mongoose');

const matiereSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  // Autres informations relatives à la matière
});

const Matiere = mongoose.model('Matiere', matiereSchema);

module.exports = Matiere;
