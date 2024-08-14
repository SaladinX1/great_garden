const express = require('express');
const app = express();
//const router = express.Router();
const path = require('path');
const fs = require('fs');



app.get("/images", (req, res) => {
    
    const imagesDir = path.join(__dirname, 'images');
    
    // Lire le contenu du répertoire
    fs.readdir(imagesDir, (err, files) => {
        if (err) {
            // Gestion des erreurs si le répertoire ne peut pas être lu
            return res.status(500).json({ error: 'Failed to read directory' });
        }

        console.log('great succes');
        // Optionnel : Filtrer les fichiers pour retourner uniquement les images
        const imageFiles = files.filter(file => {
            return file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.jpeg');
        });

        // Répondre avec la liste des images trouvées
        res.json({ images: imageFiles });
    });
    
})



module.exports = app