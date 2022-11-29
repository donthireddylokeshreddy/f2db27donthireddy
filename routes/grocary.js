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

/* GET detail grocary page */ 
router.get('/detail', grocary_controllers.grocary_view_one_Page); 

/* GET create grocary page */ 
router.get('/create', grocary_controllers.grocary_create_Page); 

/* GET create update page */ 
router.get('/update', grocary_controllers.grocary_update_Page); 

/* GET delete grocary page */ 
router.get('/delete', grocary_controllers.grocary_delete_Page); 

/* GET update grocary page */ 
router.get('/update', grocary_controllers.grocary_update_Page);

/* GET update grocary page */ 
router.get('/update', secured,grocary_controlers.grocary_update_Page); 
