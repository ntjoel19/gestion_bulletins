const express = require('express');
const router = express.Router();
const matiereCtrl = require('../controllers/matiere');

const authMiddleware = require('../middlewares/auth')

// Endpoint pour récupérer tous les matieres
router.get('/matieres', matiereCtrl.getAllMatieres);

// Endpoint pour créer une nouvelle matiere
router.post('/matieres', authMiddleware.auth, matiereCtrl.createMatiere);

// Endpoint pour récupérer une matiere par ID
router.get('/matieres/:id', matiereCtrl.getMatiere, (req, res) => {
    res.status(200).json(res.matiere)
});

// Endpoint pour mettre à jour une matiere
router.put('/matieres/:id', authMiddleware.auth, matiereCtrl.getMatiere, matiereCtrl.updateMatiere);

// Endpoint pour supprimer une matiere
router.delete('/matieres/:id', matiereCtrl.getMatiere, matiereCtrl.deleteMatiere);


// Export des routes
module.exports = router;
