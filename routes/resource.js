var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var grocary_controller = require('../controllers/grocary'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// grocary ROUTES /// 
 
// POST request for creating a grocary.  
router.post('/grocarys', grocary_controller.grocary_create_post); 
 
// DELETE request to delete grocary. 
router.delete('/grocarys/:id', grocary_controller.grocary_delete); 
 
// PUT request to update grocary. 
router.put('/grocarys/:id', grocary_controller.grocary_update_put); 
 
// GET request for one grocary. 
router.get('/grocarys/:id', grocary_controller.grocary_detail); 
 
// GET request for list of all grocary items. 
router.get('/grocarys', grocary_controller.grocary_list); 
 
module.exports = router; 