const express = require('express');
const router = express.Router();
const { verifyDrug } = require('../controllers/pharmacyController');

// POST request to verify OTP
router.post('/verify', verifyDrug);

module.exports = router;