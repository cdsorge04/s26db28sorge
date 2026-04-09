var chips = require('../models/chips');
exports.chips_detail = async function(req, res) {
    console.log("detail " + req.params.id)
    try {
        let result = await chips.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": "document for id ${req.params.id} not found"}`)
    }
};
exports.chips_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Chips create POST');
};
exports.chips_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Chips delete DELETE ' + req.params.id);
};
exports.chips_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`);
    try {
        let toUpdate = await chips.findById(req.params.id);
        if (req.body.chipsBrand)
            toUpdate.chipsBrand = req.body.chipsBrand;
        if (req.body.chipsFlavor)
            toUpdate.chipsFlavor = req.body.chipsFlavor;
        if (req.body.cost)
            toUpdate.cost = req.body.cost;
        if (req.body.checkboxsale)
            toUpdate.sale = true;
        else
            toUpdate.sale = false;
        let result = await toUpdate.save();
        console.log("Success " + result);
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed"}`);
    }
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
exports.chips_create_post = async function(req, res) {
    console.log(req.body);
    let document = new chips();
    document.chipsBrand = req.body.chipsBrand;
    document.chipsFlavor = req.body.chipsFlavor;
    document.cost = req.body.cost;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};