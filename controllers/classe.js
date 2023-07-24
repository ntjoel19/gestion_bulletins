const Classe = require('../models/classe');

exports.getAllClasses = (req, res, next) => {
    Classe.find().
        then(classes => { res.status(200).json(classes)})
        .catch (err => {res.status(500).json({ message: err.message });})
}

exports.createClasses = async (req, res, next) => {
    const classe = new Classe({
      nom: req.body.nom,
      niveau: req.body.niveau,
      matieres: req.body.matieres
    });
  
    try {
      const newClasse = await classe.save();
      res.status(201).json(newClasse);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
}

exports.getClasse = async (req, res, next) => {
    try {
        const classe = await Classe.findById(req.params.id);
        if (!classe) {
          return res.status(404).json({ message: 'Classe non trouvée' });
        }
        res.classe = classe;
        next();
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

exports.updateClasse = async (req, res, next) => {
    if (req.body.nom != null) {
      res.classe.nom = req.body.nom;
    }
    if (req.body.niveau != null) {
      res.classe.niveau = req.body.niveau;
    }
    if (req.body.matieres != null) {
      res.classe.matieres = req.body.matieres;
    }
    if (req.body.lv2 != null) {
      res.classe.lv2 = req.body.lv2;
    }
    if (req.body.serie != null) {
      res.classe.serie = req.body.serie;
    }
    if (req.body.profPrincipal != null) {
      res.classe.profPrincipal = req.body.profPrincipal;
    }
    // Mettez à jour d'autres propriétés selon votre modèle de données
  
    try {
      const updatedClasse = await res.classe.save();
      res.json(updatedClasse);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
}

exports.deleteClasse = async (req, res) => {
    try {
      await res.classe.remove();
      res.json({ message: 'Classe supprimée avec succès' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
}