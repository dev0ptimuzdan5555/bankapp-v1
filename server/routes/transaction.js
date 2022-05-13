const express = require('express');
const router = express.Router();

const Transaction = require('../controllers/transaction');



router.post('/transfer', Transaction.transfer);

module.exports = router;