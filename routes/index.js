var express = require('express');
var router = express.Router();
var connection = require('../middleware/db')

/* GET home page. */
router.get('/', function(req, res, next) {
  function get_active_sessions(){
    connection.query('SELECT USER();',  function(err, results){
      if(err){
        console.log(err);
      }
      else{
        console.log(results);
      }
    });
  }
  get_active_sessions();
  res.render('index', { title: 'Express' });

});

module.exports = router;
