var Signal = require('mongoose').model('Signal');
function applyUrl(signals){
	for(var i=0;i<signals.length;i++){
		signals[i].url = "/signal-img/" + signals[i]._id;
	};
}
module.exports = {
    getAllSignals: function(req, res, next){
    	Signal.find({}).lean().exec(function(err, signals){
    		if(err){
    			console.log("couldnt find signals: " + err);
    			req.end();
    		}
    		applyUrl(signals);
    		res.send(signals).end();
    	})
    },
    getAllSignalStatus: function(req, res, next){
    	var status = req.params.status;

    	console.log("SignalType: " + status);
    	Signal.find({status: status}).exec(function(err, signals){
    		if(err){
    			console.log("couldnt find signals: " + err);
    			req.end();
    		}
    		applyUrl(signals);
    		res.send(signals).end();
    	})
    },
    getSignalById: function(req, res, next){
    	var id = req.params.id;

    	Signal.find({_id: id}).exec(function(err, data){
    		if(err){
    			console.log("couldnt find a signal: " + err);
    			req.end();
    		}
    		applyUrl(data);
    		res.send(data).end();
    	})
    },
    getSignalPhoto: function(req, res, next){
		var	signalId = req.params.signalId;

		Signal.findOne({_id: signalId}).select("photo").exec(function(err, d){

			if(err || !d) {

				res.status(404).end('Error: ' + err);
			}
			else {
				
				res.contentType(d.photo.contentType);
				res.send(d.photo.data);
			}
		});
	},
}