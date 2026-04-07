var express = require('express');
var router = express.Router();
var api_controller = require('../controllers/api');
var chips_controller = require('../controllers/chips');

router.get('/', api_controller.api);
router.post('/chips', chips_controller.chips_create_post);
router.delete('/chips/:id', chips_controller.chips_delete);
router.put('/chips/:id', chips_controller.chips_update_put);
router.get('/chips/:id', chips_controller.chips_detail);
router.get('/chips', chips_controller.chips_list);

module.exports = router;