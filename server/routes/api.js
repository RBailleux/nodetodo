// Configuration du module
let express = require('express');
let router = express.Router();

// Importer le service
let myService = require('../service/todo.service');

// Configuration de la route principale => http://localhost:8080/api/
router.get('/', (req, res, next) => {

    myService.getAll(data => {
        console.log(data)
        res.json(data)
    })

   
});

// Export du module
module.exports = router;