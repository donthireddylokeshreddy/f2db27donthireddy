// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('grocary', { title: 'Search Results grocary' });
// });

// module.exports = router;
var express = require('express'); 
const grocary_controlers= require('../controllers/grocary'); 
var router = express.Router(); 
 
/* GET grocary */ 
router.get('/', grocary_controlers.grocary_view_all_Page ); 
module.exports = router; 