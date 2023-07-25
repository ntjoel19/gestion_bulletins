const express = require('express');
const router = express.Router();
const enseignantCtrl = require('../controllers/enseignant');
const authMiddleware = require('../middlewares/auth')


// Endpoint pour récupérer tous les enseignants
router.get('/enseignants', authMiddleware.auth, enseignantCtrl.getAllEnseignants);

// Endpoint pour créer une nouvelle enseignant
router.post('/enseignants', authMiddleware.auth, enseignantCtrl.createEnseignant);

// Endpoint pour récupérer une enseignant par ID
router.get('/enseignants/:id', authMiddleware.auth, enseignantCtrl.getEnseignant, (req, res) => {
    res.status(200).json(res.enseignant)
});

// Endpoint pour mettre à jour une enseignant
router.put('/enseignants/:id', authMiddleware.auth, enseignantCtrl.getEnseignant, enseignantCtrl.updateEnseignant);

// Endpoint pour supprimer une enseignant
router.delete('/enseignants/:id', authMiddleware.auth, enseignantCtrl.getEnseignant, enseignantCtrl.deleteEnseignant);


// Export des routes
module.exports = router;
