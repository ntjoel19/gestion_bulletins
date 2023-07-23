const mongoose = require('mongoose');

const EtablissementSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  type: { type: String, required: true },
  // Autres informations relatives à l'élève
});

const Etablissement = mongoose.model('Etablissement', EtablissementSchema);

module.exports = Etablissement;
