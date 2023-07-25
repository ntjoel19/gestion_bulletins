const express = require('express');
const router = express.Router();
const eleveCtrl = require('../controllers/eleves');
const authMiddleware = require('../middlewares/auth')

// Endpoint pour récupérer tous les eleves
router.get('/eleves', authMiddleware.auth, eleveCtrl.getAllEleves);

// Endpoint pour créer une nouvelle eleve
router.post('/eleves', authMiddleware.auth, eleveCtrl.createEleve);

// Endpoint pour récupérer une eleve par ID
router.get('/eleves/:id', authMiddleware.auth, eleveCtrl.getEleve, (req, res) => {
    res.status(200).json(res.eleve)
});

// Endpoint pour mettre à jour une eleve
router.put('/eleves/:id', authMiddleware.auth, eleveCtrl.getEleve, eleveCtrl.updateEleve);

// Endpoint pour supprimer une eleve
router.delete('/eleves/:id', authMiddleware.auth, eleveCtrl.getEleve, eleveCtrl.deleteEleve);


// Export des routes
module.exports = router;
