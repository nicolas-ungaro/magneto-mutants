const assert = require('assert');
const mutantService  = require('../server/services/mutant.validation.service');

describe('Dna Input Validations', () => {
    it('Should throw exception when dna is not NxN', () => {
        let dna = ["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACT"];
        try {
            mutantService.validateInput(dna);
        }
        catch (exception) {
            assert.ok('ok');
        }
    });

    it('Should throw exception when dna empty', () => {
        try {
            mutantService.validateInput([]);
        }
        catch (exception) {
            assert.equal(exception, 'La cadena de dna esta vacia');
        }
    });

    it('Should throw exception when dna undefined', () => {
        try {
            mutantService.validateInput(undefined);
        }
        catch (exception) {
            assert.equal(exception, 'La cadena de dna esta vacia');
        }
    });

    it('Should throw exception when dna contains other than ACGT', () => {
        try {
            let dna = ["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCAXTA"];            
            mutantService.validateInput(undefined);
        }
        catch (exception) {
            assert.equal(exception, 'La cadena de dna esta vacia');
        }
    });

    it('Should throw exception when one or more dna strings are of different length', () => {
        try {
            let dna = ["ATGCGA", "CAGTGC", "TTATGT", "AGA", "CCCCTA", "TCATTAA"];            
            mutantService.validateInput(undefined);
        }
        catch (exception) {
            assert.equal(exception, 'La cadena de dna esta vacia');
        }
    });
});