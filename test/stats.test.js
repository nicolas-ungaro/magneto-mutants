const assert = require('assert');
let data = require('./mocks/data.json')
const statsService = require('../server/services/stats.service');
const mutantRepository = require('../server/infrastructure/mutant.repository');
let firebaseMock = require('./mocks/firebase.repository.mock');
let repository = mutantRepository(firebaseMock(data));
let service = statsService(repository);

describe('Stats tests', () => {
    it('Should return current stats', async () => {
        try {
            const result = await service.get();
            assert.equal(result.ratio, 0.4);
            assert.ok("pass");
        }
        catch (exception) {
            assert.fail(exception);
        }
    });

    it('Should return empty stats', async () => {
        try {
            repository = mutantRepository(firebaseMock([]));
            service = statsService(repository);
            const result = await service.get();
            
            assert.equal(result.ratio, 0);
        }
        catch (exception) {
            assert.fail(exception);
        }
    });
});