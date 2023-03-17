const express = require('express');
const router = express.Router();
const Controllers = require('../Controllers/methods');

router.get('/setVacation', (req, res) =>{ 
    Controllers.setVacation(req, res);
})

module.exports = router;