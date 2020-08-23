const express = require('express');
const mutant = require('./mutant.route');
const stats = require('./stats.route');

const router = express.Router();

router.use('/mutant', mutant);
router.use('/stats', stats);

module.exports = router;