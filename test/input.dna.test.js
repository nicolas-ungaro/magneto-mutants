const assert = require('assert');
const config = require('../server/config.json');
const mutantValidationService = require('../server/services/mutant.validation.service');

describe('Dna Input Validations', () => {
    it('Should throw exception when dna is not NxN', () => {
        let dna = ["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACT"];
        try {
            mutantValidationService(config).validateInput(dna);
        }
        catch (exception) {
            assert.ok('ok');
        }
    });

    it('Should throw exception when dna empty', () => {
        try {
            mutantValidationService(config).validateInput([]);
        }
        catch (exception) {
            assert.equal(exception, 'La cadena de dna esta vacia');
        }
    });

    it('Should throw exception when dna undefined', () => {
        try {
            mutantValidationService(config).validateInput(undefined);
        }
        catch (exception) {
            assert.equal(exception, 'La cadena de dna esta vacia');
        }
    });

    it('Should throw exception when dna contains other than ACGT', () => {
        try {
            let dna = ["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCAXTA"];            
            mutantValidationService(config).validateInput(undefined);
        }
        catch (exception) {
            assert.equal(exception, 'La cadena de dna esta vacia');
        }
    });

    it('Should throw exception when one or more dna strings are of different length', () => {
        try {
            let dna = ["ATGCGA", "CAGTGC", "TTATGT", "AGA", "CCCCTA", "TCATTAA"];            
            mutantValidationService(config).validateInput(undefined);
        }
        catch (exception) {
            assert.equal(exception, 'La cadena de dna esta vacia');
        }
    });
});