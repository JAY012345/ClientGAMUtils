const express = require('express');
const router = express.Router();
const Controllers = require('../Controllers/methods');

router.post('/updateSignature', (req, res) =>{ 
    Controllers.updateSignature(req, res);
})

module.exports = router;