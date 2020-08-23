const express = require('express');
const router = express.Router({ mergeParams: true });

const statsController = require('../controllers/stats.controller');

router.route('/')
    .get(statsController.get);

module.exports = router;