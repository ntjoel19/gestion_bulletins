const Matiere = require('../models/matiere');

exports.getAllMatieres = (req, res, next) => {
    Matiere.find().
        then(matieres => { res.status(200).json(matieres)})
        .catch (err => {res.status(500).json({ message: err.message });})
}

exports.createMatiere = async (req, res, next) => {
    
    const matiere = new Matiere({
      nom: req.body.nom,
      abreviation: req.body.abreviation,
    });
    
    try {
      const newMatiere = await matiere.save();
      res.status(201).json(newMatiere);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
}

exports.getMatiere = async (req, res, next) => {
    try {
      const matiere = await Matiere.findById(req.params.id);
      console.log(matiere)
      if (!matiere) {
        return res.status(404).json({ message: 'Matiere non trouvée' });
      }
      res.matiere = matiere;
      next();
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
}

exports.updateMatiere = async (req, res, next) => {
    if (req.body.nom != null) {
      res.matiere.nom = req.body.nom;
    }
    if (req.body.abreviation != null) {
      res.matiere.abreviation = req.body.abreviation;
    }
    // Mettez à jour d'autres propriétés selon votre modèle de données
  
    try {
      const updatedMatiere = await res.matiere.save();
      res.json(updatedMatiere);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
}

exports.deleteMatiere = async (req, res) => {
    try {
      await Matiere.deleteOne({ _id: res.matiere._id });
      res.json({ message: 'Matiere supprimé avec succès' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
}