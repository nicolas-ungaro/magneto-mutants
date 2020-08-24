const config = require('./config.json');
const FirebaseRepository = require('./infrastructure/firebase.repository');
const MutantsRepository = require('./infrastructure/mutant.repository');
const MutantValidationService = require('./services/mutant.validation.service');
const MutantService = require('./services/mutant.service');
const StatsService = require('./services/stats.service');
const MutantController = require('./controllers/mutant.controller');
const StatsController = require('./controllers/stats.controller');

const firebase = FirebaseRepository(config);
const mutantRepository = MutantsRepository(firebase);
const mutantValidationService = MutantValidationService(config);
const mutantService = MutantService(mutantRepository, mutantValidationService);
const statsService = StatsService(mutantRepository);
const mutantController = MutantController(mutantService);
const statsController = StatsController(statsService);

module.exports = {
    config,
    firebase,
    mutantRepository,
    mutantValidationService,
    mutantService,
    statsService,
    mutantController,
    statsController
}