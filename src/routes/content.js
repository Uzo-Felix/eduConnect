const express = require('express');
const router = express.Router();
const ContentController = require('../controllers/content');

router.get('/', ContentController.getAllContent);
router.post('/', ContentController.createContent);

module.exports = router;
