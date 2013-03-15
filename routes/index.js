
/*
 * GET home page.
 */
os = require('os');

exports.index = function(req, res){
  res.render('index', { title: 'Express', os: os });
};
