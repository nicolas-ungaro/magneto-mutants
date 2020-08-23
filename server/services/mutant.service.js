/*
Servicio: mutant.service.js
Funcion: Contiene la logica de negocio relacionada a la obtencion y analisis de mutantes
Expone:
    - isMutant: funcion que devuelve true si el dna pasado por parametro pertenece a un mutante y false si no.
 */
const mutantValidation = require('./mutant.validation.service');
const config = require('../config.json');
const threshold = config.mutantDnaStringLength || 4;

/**
 * Verifica si el dna recibido por parametro existe en la base de datos. Si existe, usa el isMutant de la base. 
 * Si no existe, calcula si es mutante, le setea su valor a la entidad dnaData y lo guarda en la base antes de devolver el valor.
 */
const isMutant = (dna) => {    
    // Validate    
    mutantValidation.validateInput(dna);

    //Act
    // const data = repository.find(dna);
    // if (data) return data.isMutant;
    const isMutant = mutantValidation.isMutant(dna);
    // repository.add( { dna : dna, isMutant : isMutant });

    return isMutant;
}

module.exports = { 
    isMutant
};
