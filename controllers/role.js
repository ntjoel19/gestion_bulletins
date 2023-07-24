const Role = require('../models/role');

exports.getAllRoles = (req, res, next) => {
    Role.find().
        then(roles => { res.status(200).json(roles)})
        .catch (err => {res.status(500).json({ message: err.message });})
}

exports.createRole = async (req, res, next) => {
    const role = new Role({
      nom: req.body.nom,
      abreviation: req.body.abreviation
    });
    
    try {
      const newRole = await role.save();
      res.status(201).json(newRole);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
}

exports.getRole = async (req, res, next) => {
    try {
      const role = await Role.findById(req.params.id);
      console.log(role)
      if (!role) {
        return res.status(404).json({ message: 'Role non trouvé' });
      }
      res.role = role;
      next();
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
}

exports.updateRole = async (req, res, next) => {
    if (req.body.nom != null) {
      res.role.nom = req.body.nom;
    }
    if (req.body.abreviation != null) {
      res.role.abreviation = req.body.abreviation;
    }
    // Mettez à jour d'autres propriétés selon votre modèle de données
  
    try {
      const updatedRole = await res.role.save();
      res.json(updatedRole);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
}

exports.deleteRole = async (req, res) => {
    try {
      await Role.deleteOne({ _id: res.role._id });
      res.json({ message: 'Role supprimé avec succès' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
}