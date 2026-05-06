const express = require('express');
const router = express.Router();
const { registerDrug } = require('../controllers/manufacturerController');

// POST request to register a drug
router.post('/register-drug', registerDrug);

module.exports = router;