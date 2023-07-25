const ProfPrincipal = require('../models/profPrincipal');

exports.getAllProfPrincipals = (req, res, next) => {
    ProfPrincipal.find().
        then(profPrincipals => { res.status(200).json(profPrincipals)})
        .catch (err => {res.status(500).json({ message: err.message });})
}

exports.createProfPrincipal = async (req, res, next) => {
    
    const profPrincipal = new ProfPrincipal({
      enseignantId: req.body.enseignantId,
      classeId: req.body.classeId,
      etablissementId: req.body.etablissementId,
      anneeScolaire: req.body.anneeScolaire,
    });
    
    try {
      const newProfPrincipal = await profPrincipal.save();
      res.status(201).json(newProfPrincipal);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
}

exports.getProfPrincipal = async (req, res, next) => {
    try {
      const profPrincipal = await ProfPrincipal.findById(req.params.id);
      console.log(profPrincipal)
      if (!profPrincipal) {
        return res.status(404).json({ message: 'ProfPrincipal non trouvée' });
      }
      res.profPrincipal = profPrincipal;
      next();
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
}

exports.updateProfPrincipal = async (req, res, next) => {
    if (req.body.enseignantId != null) {
      res.profPrincipal.enseignantId = req.body.enseignantId;
    }
    if (req.body.classeId != null) {
      res.profPrincipal.classeId = req.body.classeId;
    }
    if (req.body.etablissementId != null) {
        res.profPrincipal.etablissementId = req.body.etablissementId;
    }
    if (req.body.anneeScolaire != null) {
    res.profPrincipal.anneeScolaire = req.body.anneeScolaire;
    }
    // Mettez à jour d'autres propriétés selon votre modèle de données
  
    try {
      const updatedProfPrincipal = await res.profPrincipal.save();
      res.json(updatedProfPrincipal);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
}

exports.deleteProfPrincipal = async (req, res) => {
    try {
      await ProfPrincipal.deleteOne({ _id: res.profPrincipal._id });
      res.json({ message: 'ProfPrincipal supprimé avec succès' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
}