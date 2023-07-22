const mongoose = require('mongoose');

const enseignantSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  // Autres informations relatives à l'enseignant
});

const Enseignant = mongoose.model('Enseignant', enseignantSchema);

module.exports = Enseignant;