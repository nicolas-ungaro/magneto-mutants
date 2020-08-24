const express = require('express');
const router = express.Router({ mergeParams: true });

const  container = require('../container');

router.route('/')
    .post(container.mutantController.isMutant);

module.exports = router;

