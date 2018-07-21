var express = require('express');
var router = express.Router();

var ctrl = require('../controllers/controllers.js');


// Define Routes
router
	.route('/')
	.post(ctrl.addMessage)
	.get(ctrl.getAllMessages);
  
router
	.route('/:name')
	.get(ctrl.messageGetOne)
	.delete(ctrl.deleteMessage);
	
module.exports = router;