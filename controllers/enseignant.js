const Enseignant = require('../models/enseignant');

exports.getAllEnseignants = (req, res, next) => {
    Enseignant.find().
        then(enseignants => { res.status(200).json(enseignants)})
        .catch (err => {res.status(500).json({ message: err.message });})
}

exports.createEnseignant = async (req, res, next) => {
    const enseignant = new Enseignant({
      nom: req.body.nom,
      prenom: req.body.prenom,
      specialite: req.body.specialite,
      etablissements: req.body.etablissements
    });
    console.log(enseignant)
    try {
      const newEnseignant = await enseignant.save();
      res.status(201).json(newEnseignant);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
}

exports.getEnseignant = async (req, res, next) => {
    try {
      const enseignant = await Enseignant.findById(req.params.id);
      console.log(enseignant)
      if (!enseignant) {
        return res.status(404).json({ message: 'Enseignant non trouvé' });
      }
      res.enseignant = enseignant;
      next();
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
}

exports.updateEnseignant = async (req, res, next) => {
    if (req.body.nom != null) {
      res.enseignant.nom = req.body.nom;
    }
    if (req.body.prenom != null) {
      res.enseignant.prenom = req.body.prenom;
    }
    if (req.body.specialite != null) {
      res.enseignant.specialite = req.body.specialite;
    }
    if (req.body.etablissements != null) {
      res.enseignant.etablissements = req.body.etablissements;
    }
    // Mettez à jour d'autres propriétés selon votre modèle de données
  
    try {
      const updatedEnseignant = await res.enseignant.save();
      res.json(updatedEnseignant);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
}

exports.deleteEnseignant = async (req, res) => {
    try {
      await Enseignant.deleteOne({ _id: res.enseignant._id });
      res.json({ message: 'Enseignant supprimé avec succès' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
}