/*
Controller: mutant.controller.js
Funcion: Manejar la interaccion entre el servicio de mutant.service y el endpoint de la api de mutant
         El controller sabe que responses mandar a traves de cada endpoint de la api mutant en base a la respuesta
         obtenida de el o los servicios que llama.
 */
const mutantService = require('../services/mutant.service');

const isMutant = function (req, res) {
    // Arrange
    const dna = req.body.dna;    

    // Act
    const isMutant = mutantService.isMutant(dna);

    // Return
    let status = isMutant ? 200 : 403;
    res.status(status);
    res.end();
}

module.exports = {
    isMutant
}