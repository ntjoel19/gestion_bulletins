const express = require("express");
const mongoose = require("mongoose");
const logger = require('morgan');
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
dotenv.config()

// Import et montage des routes pour chaque entité

const etablissementRoutes = require('./routes/etablissement');
const matiereRoutes = require('./routes/matiere');
const enseignantRoutes = require('./routes/enseignant');
const eleveRoutes = require('./routes/eleve');
const classeRoutes = require('./routes/classe');
const roleRoutes = require('./routes/role');
// const noteRoutes = require('./routes/noteRoutes');
const app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
//app.use(helmet({crossOriginResourcePolicy: false,}));
app.use(express.json());

mongoose.connect("mongodb+srv://"  + 
                process.env.DB_USER + ":" + 
                process.env.DB_PASSWORD + 
                "@cluster0.kwpeuu4.mongodb.net/?retryWrites=true&w=majority")
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());
// app.use(helmet({crossOriginResourcePolicy: false,}));
app.use(express.json());

// app.use("/images", express.static(path.join(__dirname, "images")));

app.use('/api', classeRoutes);
app.use('/api', etablissementRoutes);
app.use('/api', matiereRoutes);
app.use('/api', enseignantRoutes);
app.use('/api', eleveRoutes);
app.use('/api', roleRoutes);
// app.use('/api', noteRoutes);

module.exports = app;