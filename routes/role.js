const express = require('express');
const router = express.Router();
const roleCtrl = require('../controllers/role');

// Endpoint pour récupérer tous les roles
router.get('/roles', roleCtrl.getAllRoles);

// Endpoint pour créer une nouvelle role
router.post('/roles', roleCtrl.createRole);

// Endpoint pour récupérer une role par ID
router.get('/roles/:id', roleCtrl.getRole, (req, res) => {
    res.status(200).json(res.role)
});

// Endpoint pour mettre à jour une role
router.put('/roles/:id', roleCtrl.getRole, roleCtrl.updateRole);

// Endpoint pour supprimer une role
router.delete('/roles/:id', roleCtrl.getRole, roleCtrl.deleteRole);


// Export des routes
module.exports = router;
