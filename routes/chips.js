var express = require('express');
var chips_controller = require('../controllers/chips');
var router = express.Router();
const secured = (req, res, next) => {
  if (req.user) {
    return next();
  }
  res.redirect("/login");
}
router.get('/', chips_controller.chips_view_all_Page);
router.get('/chips/:id', chips_controller.chips_detail);
router.put('/chips/:id', chips_controller.chips_update_put);
router.delete('/chips/:id', chips_controller.chips_delete);
router.get('/detail', chips_controller.chips_view_one_Page);
router.get('/create', chips_controller.chips_create_Page);
router.get('/update', secured, chips_controller.chips_update_Page);
router.get('/delete', chips_controller.chips_delete_Page);
module.exports = router;