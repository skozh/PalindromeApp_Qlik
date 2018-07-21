var mongoose = require('mongoose');
var Message = mongoose.model('Message');

// Add a record
module.exports.addMessage = function(req,res){
	var pal = require('./palindrome.js');
	
	if (req.body.message && req.body.name){
		
		Message
			.create({
				name : req.body.name.toLowerCase(),
				word : req.body.message,
				result : pal.palindrome(req.body.message)
			}, function(err, message){
				if (err){
					console.log("Message not registered");
					res
						.status(400)
						.json(err);
				} else{
					console.log("Message registered!", message);
					res
						.status(201)
						.json(message);
				}
			});
	}
	else{
		res.sendStatus(400);
	}
};

// Get All records
module.exports.getAllMessages = function(req,res){
	console.log('GET messages');
	//console.log(req.query);

	var offset = 0;
	var count = 5;
	var maxCount = 50;

	if (req.query && req.query.offset) {
		offset = parseInt(req.query.offset, 10);
	}

	if (req.query && req.query.count) {
		count = parseInt(req.query.count, 10);
	}

	if (isNaN(offset) || isNaN(count)) {
		res
			.status(400)
			.json({
			"message" : "Count and offset must both be numbers"
		});
		return;
	}

	  if (count > maxCount) {
		res
		  .status(400)
		  .json({
			"message" : "Count limit of " + maxCount + " exceeded"
		  });
		return;
	  }

	  Message
		.find()
		.skip(offset)
		.limit(count)
		.exec(function(err, messages) {
		  //console.log(err);
		  //console.log(messages);
		  if (err) {
			console.log("Error finding messages");
			res
			  .status(500)
			  .json(err);
		  } else {
			//console.log("Found messages", messages.length);
			res
			  .json(messages);
		  }
		});
}

// Delete records on "Name"
module.exports.deleteMessage = function(req,res){
	var nameId = req.params.name;
	
	Message
		.remove({ name: nameId.toLowerCase()}, function(err) {
			if (err){
				res
					.status(404)
					.json(err);
			} else{
				console.log("Message deleted of ", nameId);
				res
					.status(204)
					.json({"Deleted Message of :":nameId});
			}
		});
			
	};

// Get one record
module.exports.messageGetOne = function(req, res) {
  var nameId = req.params.name;

  console.log('GET Message of ', nameId);

  Message
    .find({"name": nameId.toLowerCase()})
    .exec(function(err, doc) {
      var response = {
        status : 200,
        message : doc
      };
      if (err) {
        console.log("Error finding message");
        response.status = 500;
        response.message = err;
      } else if(!doc) {
        console.log("User not found in the database", nameId);
        response.status = 404;
        response.message = {
          "message" : "User not found " + nameId
        };
      }
      res
        .status(response.status)
        .json(response.message);
    });

};