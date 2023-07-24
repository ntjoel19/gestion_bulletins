const mongoose = require('mongoose');

const EtablissementSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  type: { type: String, required: true },
  region: { type: String, required: true },
  departement: { type: String, required: true },
  arrondissement: { type: String, required: true },
  classes:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Classe', required: true }]
  // Autres informations relatives à l'élève
});

EtablissementSchema.index({ nom: 1, type: 1, region: 1, departement: 1, arrondissement: 1 }, { unique: true });

const Etablissement = mongoose.model('Etablissement', EtablissementSchema);

module.exports = Etablissement;
