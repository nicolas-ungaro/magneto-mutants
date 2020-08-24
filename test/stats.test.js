const assert = require('assert');
const mutantRepository = require('../server/infrastructure/mutant.repository');
const firebaseMock = require('./mocks/firebase.repository.mock');
//const statsService = require('../server/services/stats.service');
// Mock the database:
// const repository = mutantRepository(firebaseMock());
// const service = statsService(repository);
const container = require('../server/container');
const service = container.statsService;

describe('Stats tests', () => {
    it('Should return current stats', async () => {
        try {
            const result = await service.get();
            assert.ok("pass");
        }
        catch (exception) {
            assert.fail(exception);
        }
    });
});