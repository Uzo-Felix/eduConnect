const express = require('express');
const router = express.Router();
const ContributionController = require('../controllers/contribution');

router.get('/', ContributionController.getAllContributions);
router.post('/', ContributionController.createContribution);

module.exports = router;
