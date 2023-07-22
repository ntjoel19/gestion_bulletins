const mongoose = require('mongoose');

const noteParMatiere = new mongoose.Schema({
  eleve: { type: mongoose.Schema.Types.ObjectId, ref: 'Eleve', required: true },
  matiere: { type: mongoose.Schema.Types.ObjectId, ref: 'Matiere', required: true },
  note: { type: Number, required: true },
  appreciation: { type: String },
  // Autres informations relatives au bulletin
});

const NoteParMatiere = mongoose.model('noteParMatiere', noteParMatiere);

module.exports = NoteParMatiere;
