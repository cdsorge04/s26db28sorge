var chips = require('../models/chips');
exports.chips_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Chips list');
};
exports.chips_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Chips detail: ' + req.params.id);
};
exports.chips_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Chips create POST');
};
exports.chips_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Chips delete DELETE ' + req.params.id);
};
exports.chips_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: Chips update PUT ' + req.params.id);
};
exports.chips_list = async function(req, res) {
    try {
        const theChips = await chips.find();
        res.send(theChips);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
exports.chips_view_all_Page = async function(req, res) {
    try {
        const theChips = await chips.find();
        res.render('chips', {
            title: 'Chips Search Results',
            results: theChips
        });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};