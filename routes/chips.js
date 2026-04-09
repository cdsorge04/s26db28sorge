var express = require('express');
var chips_controller = require('../controllers/chips');
var router = express.Router();
router.get('/', chips_controller.chips_view_all_Page);
router.get('/chips/:id', chips_controller.chips_detail);
module.exports = router;