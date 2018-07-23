var express = require('express');
var router = express.Router();

var ctrl = require('../controllers/controllers.js');


// Define Routes
router
	.route('/list')
	.post(ctrl.addMessage)
	.get(ctrl.getAllMessages);
	
router
	.route('/user/:messageId')
	.delete(ctrl.deleteUserMessages);
  
router
	.route('/:messageId')
	.get(ctrl.messageGetOne)
	.delete(ctrl.deleteMessage);
	
module.exports = router;