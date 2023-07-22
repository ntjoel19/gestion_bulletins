const mongoose = require('mongoose');

const eleveSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  dateNaissance: { type: Date, required: true },
  // Référence à la classe à laquelle l'élève appartient
  classe: { type: mongoose.Schema.Types.ObjectId, ref: 'Classe', required: true },
  // Autres informations relatives à l'élève
});

const Eleve = mongoose.model('Eleve', eleveSchema);

module.exports = Eleve;
