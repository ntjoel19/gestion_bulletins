const Etablissement = require('../models/etablissement');

exports.getAllEtablissements = (req, res, next) => {
    Etablissement.find().
        then(etablissements => { res.status(200).json(etablissements)})
        .catch (err => {res.status(500).json({ message: err.message });})
}

exports.createEtablissement = async (req, res, next) => {
    const etablissement = new Etablissement({
      nom: req.body.nom,
      type: req.body.type,
      region: req.body.region,
      departement: req.body.departement,
      arrondissement: req.body.arrondissement,
      classes: req.body.classes
    });
  
    try {
      const newEtablissement = await etablissement.save();
      res.status(201).json(newEtablissement);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
}

exports.getEtablissement = async (req, res, next) => {
    try {
      const etablissement = await Etablissement.findById(req.params.id);
      console.log(etablissement)
      if (!etablissement) {
        return res.status(404).json({ message: 'Etablissement non trouvée' });
      }
      res.etablissement = etablissement;
      next();
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
}

exports.updateEtablissement = async (req, res, next) => {
    if (req.body.nom != null) {
      res.etablissement.nom = req.body.nom;
    }
    if (req.body.type != null) {
      res.etablissement.type = req.body.type;
    }
    if (req.body.region != null) {
      res.etablissement.region = req.body.region;
    }
    if (req.body.departement != null) {
      res.etablissement.departement = req.body.departement;
    }
    if (req.body.arrondissement != null) {
      res.etablissement.arrondissement = req.body.arrondissement;
    }
    if (req.body.classes != null) {
      res.etablissement.classes = req.body.classes;
    }
    // Mettez à jour d'autres propriétés selon votre modèle de données
  
    try {
      const updatedEtablissement = await res.etablissement.save();
      res.json(updatedEtablissement);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
}

exports.deleteEtablissement = async (req, res) => {
    try {
      await Etablissement.deleteOne({ _id: res.etablissement._id });
      res.json({ message: 'Etablissement supprimée avec succès' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
}