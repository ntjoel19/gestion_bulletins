const express = require("express");
const bodyParser = require('body-parser');

// Import et montage des routes pour chaque entité
const classeRoutes = require('./routes/classeRoutes');
const matiereRoutes = require('./routes/matiereRoutes');
const enseignantRoutes = require('./routes/enseignantRoutes');
const eleveRoutes = require('./routes/eleveRoutes');
const noteRoutes = require('./routes/noteRoutes');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());
app.use(helmet({crossOriginResourcePolicy: false,}));
app.use(express.json());

app.use("/images", express.static(path.join(__dirname, "images")));

app.use('/api', classeRoutes);
app.use('/api', matiereRoutes);
app.use('/api', enseignantRoutes);
app.use('/api', eleveRoutes);
app.use('/api', noteRoutes);

module.exports = app;