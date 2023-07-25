const express = require('express');
const router = express.Router();
const profPrincipalCtrl = require('../controllers/profPrincipal');

const authMiddleware = require('../middlewares/auth')

// Endpoint pour récupérer tous les profPrincipals
router.get('/profPrincipals', authMiddleware.auth, profPrincipalCtrl.getAllProfPrincipals);

// Endpoint pour créer une nouvelle profPrincipal
router.post('/profPrincipals', authMiddleware.auth, profPrincipalCtrl.createProfPrincipal);

// Endpoint pour récupérer une profPrincipal par ID
router.get('/profPrincipals/:id', authMiddleware.auth,  profPrincipalCtrl.getProfPrincipal, (req, res) => {
    res.status(200).json(res.profPrincipal)
});

// Endpoint pour mettre à jour une profPrincipal
router.put('/profPrincipals/:id', authMiddleware.auth, profPrincipalCtrl.getProfPrincipal, profPrincipalCtrl.updateProfPrincipal);

// Endpoint pour supprimer une profPrincipal
router.delete('/profPrincipals/:id', profPrincipalCtrl.getProfPrincipal, profPrincipalCtrl.deleteProfPrincipal);


// Export des routes
module.exports = router;
