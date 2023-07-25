const express = require('express');
const router = express.Router();
const etablissementCtrl = require('../controllers/etablissement');
const authMiddleware = require('../middlewares/auth')

// Endpoint pour récupérer toutes les etablissements
router.get('/etablissements', etablissementCtrl.getAllEtablissements);

// Endpoint pour créer une nouvelle etablissement
router.post('/etablissements', authMiddleware.auth, etablissementCtrl.createEtablissement);

// Endpoint pour récupérer une etablissement par ID
router.get('/etablissements/:id', etablissementCtrl.getEtablissement, (req, res) => {
    res.status(200).json(res.etablissement)
});

// Endpoint pour mettre à jour une etablissement
router.put('/etablissements/:id', authMiddleware.auth, etablissementCtrl.getEtablissement, etablissementCtrl.updateEtablissement);

// Endpoint pour supprimer une etablissement
router.delete('/etablissements/:id', authMiddleware.auth, etablissementCtrl.getEtablissement, etablissementCtrl.deleteEtablissement);


// Export des routes
module.exports = router;
