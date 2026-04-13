var express = require('express');
var chips_controller = require('../controllers/chips');
var router = express.Router();
router.get('/', chips_controller.chips_view_all_Page);
router.get('/chips/:id', chips_controller.chips_detail);
router.put('/chips/:id', chips_controller.chips_update_put);
router.delete('/chips/:id', chips_controller.chips_delete);
router.get('/detail', chips_controller.chips_view_one_Page);
module.exports = router;