/*
Servicio: mutant.validation.service.js
Funcion: Contiene la logica de negocio relacionada al analisis de mutantes
Expone:
    - isMutant: funcion que devuelve true si el dna pasado por parametro pertenece a un mutante y false si no.
 */
const matrix = require('../utils/matrix.utils');
const dnaString = require('../utils/dna.utils');

function MutantValidationService(config) {
    const mutantDnaStringLength = config.mutantDnaStringLength || 4;
    
    async function isMutant(dna) {
        // Asumimos que si la matriz de ADN es de NxN con N > 0 y N < 4 => es un humano.
        if (dna.length < mutantDnaStringLength) return false;

        let horizontal = checkHorizontal(dna);
        let vertical = checkVertical(dna);
        let diagonal = checkDiagonal(dna);
        let diagonalRight2Left = checkDiagonal(matrix.reverse(dna));

        return await horizontal || await vertical || await diagonal || await diagonalRight2Left;
    }

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

    // Chequeo de las filas de la matriz de dna
    async function checkHorizontal(dna) {
        let row = 0;
        let mutant = false;
    
        while (!mutant && row < dna.length) {
            mutant = dnaString.containsMutantDna(dna[row]);
            row++;
        }
    
        return mutant;
    }
    
    // Chequeo de las columnas de la matriz de dna
    async function checkVertical(dna) {
        let mutant = false;
        let x = 0;
        while(!mutant && x < dna.length) {
          // obtengo las columnas de la matriz
          const vertical = dna.map(val => val[x]).join('');
          mutant = dnaString.containsMutantDna(vertical, mutantDnaStringLength);
          x++;
        }
    
        return mutant;
    }
    
    // Chequeo las cadenas de dna en las diagonales de la matriz
    async function checkDiagonal(dna) {
        let mutant = false;

        // Chequeo las diagonales pero avanzo solo hasta la posicion donde se que no va a haber posibilidades de match
        for (let row = 0; row < dna.length - mutantDnaStringLength + 1; row++) {
            for( let col = 0; col < dna.length - mutantDnaStringLength + 1; col++) {
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
    
    return {
        isMutant,
        validateInput
    }
}

module.exports = MutantValidationService;