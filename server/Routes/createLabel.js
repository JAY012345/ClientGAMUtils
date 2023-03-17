const express = require('express');
const router = express.Router();
const Controllers = require('../Controllers/methods');

router.post('/createLabel', (req, res) =>{ 
    Controllers.createLabel(req, res);
})

module.exports = router;