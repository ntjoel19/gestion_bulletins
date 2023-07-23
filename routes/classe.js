const express = require('express');
const router = express.Router();
const classeCtrl = require('../controllers/classe');

// Endpoint pour récupérer toutes les classes
router.get('/classes', classeCtrl.getAllClasses);

// Endpoint pour créer une nouvelle classe
router.post('/classes', classeCtrl.createClasses);

// Endpoint pour récupérer une classe par ID
router.get('/classes/:id', classeCtrl.getClasse, (req, res) => {
    res.status(200).json(res.classe)
});

// Endpoint pour mettre à jour une classe
router.get('/classes/:id', classeCtrl.getClasse, classeCtrl.updateClasse);

// Endpoint pour supprimer une classe
router.delete('/classes/:id', classeCtrl.getClasse, classeCtrl.deleteClasse);


// Export des routes
module.exports = router;
