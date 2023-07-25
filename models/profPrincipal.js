const mongoose = require('mongoose');

const profPrincipalSchema = new mongoose.Schema({
  enseignantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Enseignant', required: true },
  classeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Classe', required: true },
  etablissementId: { type: mongoose.Schema.Types.ObjectId, ref: 'Etablissement', required: true },
  anneeScolaire: {type: Number, required: true}
  // Autres informations relatives à la matière
});

profPrincipalSchema.index({ enseignantId: 1, classeId: 1, classeId: 1, anneeScolaire: 1 }, { unique: true });

const ProfPrincipal = mongoose.model('ProfPrincipal', profPrincipalSchema);

module.exports = ProfPrincipal;
