const assert = require('assert');
const mutantRepository = require('../server/infrastructure/mutant.repository');
const firebaseMock = require('./mocks/firebase.repository.mock');

// Mock the database:
const data = require('./mocks/data.json')
const repository = mutantRepository(firebaseMock(data));

describe('Repository tests', () => {
    it('Should find a document', async () => {
        const dna = [ "ATGCGA", "CAGTGC", "TTGTGT", "AGGAGG", "CACCTA", "TCACTG" ];
        try {
            const result = await repository.find(dna);
            assert.equal(result.id, "94b38bdb7f76ffa13c79c38ab9851a43");
        }
        catch (exception) {
            assert.fail(exception);
        }
    });

    it('Should return all documents', async () => {
        try {
            const result = await repository.all();
            assert.equal(result.length, 7);
        }
        catch (exception) {
            assert.fail(exception);
        }
    });

    it('Should return undefined when trying to find an unexisting dna', async () => {
        try {
            const dna = [ "ATGCGA", "CAGTGC", "TTGTGT", "AGGAGG", "CACCTA", "CCCCCC" ]
            const result = await repository.find(dna);
            assert.equal(result, undefined);
        }
        catch (exception) {
            assert.fail(exception);
        }
    });
});