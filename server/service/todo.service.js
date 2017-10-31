// Configurer l'objet 
let request = require(`xhr-request`)

// Définition de l'adresse de l'API JsonServer
const myBddAddress = `http://localhost:3000`

/*
Définition du service
Le service est une classe qui contient des méthodes
*/
    class NewsFeed {

        // Afficher tous les ToDoes
        static getAll(callBack){
            // Requête sur l'API JsonServer
            request(`${myBddAddress}/todoes`, { json: true }, (err, data) => {
                if (err) throw err
                // Envoyer les données dans la vue 
                callBack(data);
            })
        }
    }
// 

/*
Exporter le service
*/
    module.exports = NewsFeed
//