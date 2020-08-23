/*
Servicio: mutant.validation.service.js
Funcion: Contiene la logica de negocio relacionada al analisis de mutantes
Expone:
    - isMutant: funcion que devuelve true si el dna pasado por parametro pertenece a un mutante y false si no.
 */
const matrix = require('../utils/matrix.utils');
const dnaString = require('../utils/dna.utils');
const config = require('../config.json');
const threshold = config.mutantDnaStringLength || 4;

const isMutant = (dna) => {
    // Asumimos que si la matriz de ADN es de NxN con N > 0 y N < 4 => es un humano.
    if (dna.length < threshold) return false;

    if (checkHorizontal(dna))            
        return true;
    
    if (checkVertical(dna)) 
        return true;
    
    if (checkDiagonal(dna))
        return true;

    let reversed = matrix.reverse(dna);
    if (checkDiagonal(reversed))
        return true;

    return false;
}

module.exports = { 
    validateInput,
    isMutant
};

function validateInput(dna) {
    if (dna === undefined || dna.length === 0)
        throw `La cadena de dna esta vacia`;
    
    let length = dna[0].length;
    if (dna.length !== length)
        throw `La cadena de dna debe ser una matriz de NxN`;

    for (let str of dna) {
        let regex = new RegExp(`^([ACGT]){${length}}$`);
        if(!regex.test(str))
        {
            throw `La cadena de dna '${str}' debe ser de longitud ${length}`;
        }
    }    
}

function checkHorizontal(dna) {
    let row = 0;
    let mutant = false;

    while (!mutant && row < dna.length) {
        mutant = dnaString.containsMutantDna(dna[row]);
        row++;
    }

    return mutant;
}

function checkVertical(dna) {
    let mutant = false;
    let x = 0;
    while(!mutant && x < dna.length) {
      const vertical = dna.map(val => val[x]).join('');
      mutant = dnaString.containsMutantDna(vertical, threshold);
      x++;
    }

    return mutant;
}

function checkDiagonal(dna) {
    let mutant = false;
    for (let row = 0; row < dna.length - threshold + 1; row++) {
        for( let col = 0; col < dna.length - threshold + 1; col++) {
            let x = col;
            const diagonal = dna.map((val, idx) => {
                let result = '';
                if (idx >= row) {
                    result = val[x];
                    x++;
                }
                return result;
            }).join('');

            mutant = diagonal !== undefined ? dnaString.containsMutantDna(diagonal) : false;
            if (mutant) return true;
        }
    }
    return mutant;
}