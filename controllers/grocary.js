var grocary = require('../models/grocary'); 
 
// List of all grocarys 
exports.grocary_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: grocary list'); 
}; 
 
// for a specific grocary. 
exports.grocary_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: grocary detail: ' + req.params.id); 
}; 
 
// Handle grocary create on POST. 
exports.grocary_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: grocary create POST'); 
}; 
 
// Handle grocary delete form on DELETE. 
exports.grocary_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: grocary delete DELETE ' + req.params.id); 
}; 
 
// Handle grocary update form on PUT. 
exports.grocary_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: grocary update PUT' + req.params.id); 
};