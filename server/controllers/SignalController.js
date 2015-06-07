var Signal = require('mongoose').model('Signal');
var fs = require('fs');
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
    postSignal: function(req, res, next){    //creates a signal
        var signal = req.body;
        var imgPath = "public/img/default.jpg";
            
        console.log("#########################");
        console.log(signal);
        if(signal.photo) {
            var b64string = signal.photo.data;
            var buf = new Buffer(b64string, 'base64');

            var photo = {};
            photo.data = buf;
            photo.contentType = signal.photo.contentType;
            signal.photo = photo;
        }else{
            pic = fs.readFileSync(imgPath);
            var photo = {
                data: pic,
                contentType: 'image/jpg'
            }
            signal.photo = photo;
        }
        signal.status = "pending";
        signal.rate = 0;
        console.log("------signal-------");
        console.log(signal);
        console.log("------signal-------");

        Signal.create(signal, function(err, s){
            if(err){
                console.log("failed to create signal: " + err);
                //res.end({success: false});
                res.end();
            }
            else{
                //res.end({success: true});
                res.end();
            }
            console.log("success");
            console.log(s);
        });
    },
    getLastThreeSignals: function(req, res){
        Signal.find({}).limit(3).select("-photo").exec(function(err, data){
            if(err){
                console.log("Smth went wrong :(");
                res.status(500);
                res.end();
            }
            res.status(200);
            res.send(data);
        })   
    }
}