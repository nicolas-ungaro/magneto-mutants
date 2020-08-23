const express = require('express');
const router = express.Router({ mergeParams: true });

const mutantController = require('../controllers/mutant.controller');

router.route('/')
    .post(mutantController.isMutant);

module.exports = router;