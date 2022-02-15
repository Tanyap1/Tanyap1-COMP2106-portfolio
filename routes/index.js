var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to my Portfolio site' });
});
/*about page*/
router.get('/about', (req, res)=> {
  //load the about.hbs view
  res.render('about',{title:"About Me"});
});
/*projects page*/
router.get('/projects', (req, res)=> {
  //load the projects.hbs view
  res.render('projects', {title:"My Projects"});
});
/*contact page*/
router.get('/contact', (req, res)=> {
  //load the contact.hbs view
  res.render('contact', {title:"Contact Me"});
});
module.exports = router;
