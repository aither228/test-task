const express = require('express');
const { getTicket, getFibonacci } = require('../controller/controller');
const router = express.Router();

// Post input 
router.post('/input', getTicket);

// Get output
router.get('/output', getFibonacci);

module.exports = router;