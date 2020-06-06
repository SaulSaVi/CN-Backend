const express = require('express');

const router = express.Router();
const { Users } = require('../models');

router.post('/api/v1/users', controlador);

module.exports = router;