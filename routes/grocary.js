// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('grocary', { title: 'Search Results grocary' });
// });

// module.exports = router;
var express = require('express'); 
const grocary_controllers= require('../controllers/grocary'); 
var router = express.Router(); 
 
/* GET grocary */ 
router.get('/', grocary_controllers.grocary_view_all_Page ); -


// GET request for one grocary. 
router.get('/grocary/:id', grocary_controllers.grocary_detail); 
module.exports = router; 