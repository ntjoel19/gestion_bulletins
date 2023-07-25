const express = require('express');
const router = express.Router();
const classeCtrl = require('../controllers/classe');
const authMiddleware = require('../middlewares/auth')

// Endpoint pour récupérer toutes les classes
router.get('/classes', authMiddleware.auth, classeCtrl.getAllClasses);

// Endpoint pour créer une nouvelle classe
router.post('/classes', authMiddleware.auth, classeCtrl.createClasses);

// Endpoint pour récupérer une classe par ID
router.get('/classes/:id', authMiddleware.auth, classeCtrl.getClasse, (req, res) => {
    res.status(200).json(res.classe)
});

// Endpoint pour mettre à jour une classe
router.put('/classes/:id', authMiddleware.auth, classeCtrl.getClasse, classeCtrl.updateClasse);

// Endpoint pour supprimer une classe
router.delete('/classes/:id', authMiddleware.auth, classeCtrl.getClasse, classeCtrl.deleteClasse);


// Export des routes
module.exports = router;
