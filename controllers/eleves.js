const Eleve = require('../models/eleve');

exports.getAllEleves = (req, res, next) => {
    Eleve.find().
        then(eleves => { res.status(200).json(eleves)})
        .catch (err => {res.status(500).json({ message: err.message });})
}

exports.createEleve = async (req, res, next) => {
    const eleve = new Eleve({
      nom: req.body.nom,
      prenom: req.body.prenom,
      dateNaissance: req.body.dateNaissance,
      classe: req.body.classe,
      etablissement: req.body.etablissement
    });
    
    try {
      const newEleve = await eleve.save();
      res.status(201).json(newEleve);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
}

exports.getEleve = async (req, res, next) => {
    try {
      const eleve = await Eleve.findById(req.params.id);
      console.log(eleve)
      if (!eleve) {
        return res.status(404).json({ message: 'Eleve non trouvé' });
      }
      res.eleve = eleve;
      next();
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
}

exports.updateEleve = async (req, res, next) => {
    if (req.body.nom != null) {
      res.eleve.nom = req.body.nom;
    }
    if (req.body.prenom != null) {
      res.eleve.prenom = req.body.prenom;
    }
    if (req.body.specialite != null) {
      res.eleve.specialite = req.body.specialite;
    }
    if (req.body.etablissements != null) {
      res.eleve.etablissements = req.body.etablissements;
    }
    // Mettez à jour d'autres propriétés selon votre modèle de données
  
    try {
      const updatedEleve = await res.eleve.save();
      res.json(updatedEleve);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
}

exports.deleteEleve = async (req, res) => {
    try {
      await Eleve.deleteOne({ _id: res.eleve._id });
      res.json({ message: 'Eleve supprimé avec succès' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
}