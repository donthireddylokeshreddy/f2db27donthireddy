var grocary = require('../models/grocary'); 
 
// List of all grocary 
exports.grocary_list = async function(req, res) { 
    try{ 
        thegrocary = await grocary.find(); 
        res.send(thegrocary); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
 
// for a specific grocary. 
exports.grocary_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await grocary.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
 

// Handle grocary delete on DELETE. 
exports.grocary_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await grocary.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
 
// Handle grocary update form on PUT. 
// Handle grocary update form on PUT. 
exports.grocary_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await grocary.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.grocary_type)  
               toUpdate.grocary_type = req.body.grocary_type; 
        if(req.body.tomatovalue) toUpdate.tomatovalue = req.body.tomatovalue; 
        if(req.body.onionvalue) toUpdate.onionvalue = req.body.onionvalue; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 
 

// VIEWS 
// Handle a show all view 
exports.grocary_view_all_Page = async function(req, res) { 
    try{ 
        result = await grocary.find(); 
        res.render('grocary', { title: 'grocary Search Results', results: result }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// Handle grocary create on POST. 
exports.grocary_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new grocary(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"grocary_type":"goat", "cost":12, "size":"large"} 
    document.tomatovalue = req.body.tomatovalue; 
    document.onionvalue = req.body.onionvalue; 
    document.capsicumvaluve = req.body.capsicumvaluve; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

 // Handle a show one view with id specified by query 
 exports.grocary_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await grocary.findById( req.query.id) 
        res.render('grocarydetail',  
{ title: 'grocary Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for creating a grocary. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.grocary_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('grocarycreate', { title: 'grocary Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for updating a grocary. 
// query provides the id 
exports.grocary_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await grocary.findById(req.query.id) 
        res.render('grocaryupdate', { title: 'grocary Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a delete one view with id from query 
exports.grocary_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await grocary.findById(req.query.id) 
        res.render('grocarydelete', { title: 'grocary Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 