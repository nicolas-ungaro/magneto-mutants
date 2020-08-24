const express = require('express');
const router = express.Router({ mergeParams: true });

const  container = require('../container');

router.route('/')
    .get(container.statsController.get);

module.exports = router;