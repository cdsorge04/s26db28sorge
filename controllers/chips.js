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
exports.chips_create_Page = function(req, res) {
    console.log("create view");
    try {
        res.render('chipscreate', { title: 'Chips Create' });
    } catch (err) {
        res.status(500);
        res.send(`{'error': '${err}'}`);
    }
};
exports.chips_delete = async function(req, res) {
    console.log("delete " + req.params.id);
    try {
        let result = await chips.findByIdAndDelete(req.params.id);
        console.log("Removed " + result);
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": Error deleting ${err}}`);
    }
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
exports.chips_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id);
    try {
        let result = await chips.findById(req.query.id);
        res.render('chipsdetail', {
            title: 'Chips Details',
            toShow: result
        });
    } catch (err) {
        res.status(500);
        res.send(`{'error': '${err}'}`);
    }
};
exports.chips_update_Page = async function(req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await chips.findById(req.query.id)
        res.render('chipsupdate', { 
            title: 'Chips Update', 
            toShow: result 
        });
    }
    catch(err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle a delete one view with id from query
exports.chips_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        let result = await chips.findById(req.query.id)
        res.render('chipsdelete', { 
            title: 'Chips Delete', 
            toShow: result 
        });
    }
    catch(err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};