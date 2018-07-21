var mongoose = require('mongoose');

// SCHEMA Definition
var messageSchema = new mongoose.Schema ({
	
	name : {
		type : String,
		required : true
	},
	
	word : {
		type : String,
		required : true
	},
	
	result : {
		type : String,
		required : true
	}
});

mongoose.model('Message', messageSchema);