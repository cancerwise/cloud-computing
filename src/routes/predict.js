const express = require('express');
const router = express.Router();
const predictController = require('../controller/predict');

router.post('/lung-cancer', predictController.lungCancerTestResult);

router.post('/brain-tumor', predictController.brainTumorTestResult);

router.post('/cervical-cancer', predictController.cervicalCancerTestResult);

module.exports = router;