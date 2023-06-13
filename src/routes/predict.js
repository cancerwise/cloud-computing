const express = require('express');
const router = express.Router();
const predictController = require('../controller/predict');

router.post('/lung', predictController.lungCancerTestResult);

router.post('/brain', predictController.brainTumorTestResult);

router.post('/cervical', predictController.cervicalCancerTestResult);

module.exports = router;