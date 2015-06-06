var Signal = require('mongoose').model('Signal');

module.exports = {
    getAllSignals: function(req, res, next){
    	Signal.find({}).exec(function(err, signals){
    		if(err){
    			console.log("couldnt find signals: " + err);
    			req.end();
    		}
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
    		res.send(data).end();
    	})
    }
}