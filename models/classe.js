const mongoose = require('mongoose');

const classeSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  niveau: { type: String, required: true },
  // Ajout d'un champ pour le coefficient de la matière dans cette classe
  matieres: [{
    matiere: { type: mongoose.Schema.Types.ObjectId, ref: 'Matiere', required: true },
    coefficient: { type: Number, required: true },
    enseignant: { type: mongoose.Schema.Types.ObjectId, ref: 'Enseignant', required: true },
  }],
  // Autres informations relatives à la classe
});

const Classe = mongoose.model('Classe', classeSchema);

module.exports = Classe;