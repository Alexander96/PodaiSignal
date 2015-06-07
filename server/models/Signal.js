var mongoose = require('mongoose');
var fs = require('fs');

var signalSchema = mongoose.Schema({
        photo: {data: Buffer, contentType: String},
        user: Object,
        description: String,
        place:{
            lat: Number,
            lng: Number,
        },
        status: String,
        rate: Number,
        date: String
    });

    var Signal = mongoose.model('Signal', signalSchema);
module.exports.seedInitialSignals = function(){
    //Signal.remove({}).exec(function(err){});
    Signal.find({}).exec(function(err, collection){
        if(err){
            console.log("Error in Signal.js: " + err);
        }
        //console.log(collection);
        if(collection.length == 0){
            var imgPath = "public/img/dupka.jpg";   
            var pic = fs.readFileSync(imgPath);

            Signal.create({                        
                photo: {data: pic, contentType: "image/jpg"},
                user: {
                    firstName: "Александър",
                    middleName: "Йорданов",
                    lastName: "Йорданов",
                    email: "alexanderyordanov96@gmail.com",
                    phone: "0894300065",
                    town: "София"
                },
                description: "Пропаднах с колата си в огромна дупка на шосето",
                place:{
                    lat: 42.6388932,
                    lng: 23.3239467,
                },
                status: "inproccess",
                rate: 13,
                date: "05/06/2015"
            }, function (err, data) {
                if(err){
                    console.log("Error: " + err);
                }
            });

            imgPath = "public/img/dupka1.jpg";   
            pic = fs.readFileSync(imgPath);

            Signal.create({                        
                photo: {data: pic, contentType: "image/jpg"},
                user: {
                    firstName: "Денис",
                    middleName: "Нейчев",
                    lastName: "Нейчев",
                    email: "denis@gmail.com",
                    phone: "0854354354",
                    town: "Стара Загора"
                },
                description: "Безобразие на пътищата в България",
                place:{
                    lat: 42.6964868,
                    lng: 23.3040918,
                },
                status: "done",
                rate: 20,
                date: "06/05/2015"
            }, function (err, data) {
                if(err){
                    console.log("Error: " + err);
                }
            });

            Signal.create({                        
                photo: {data: pic, contentType: "image/jpg"},
                user: {
                    firstName: "Пешо",
                    middleName: "Пешев",
                    lastName: "Пешве",
                    email: "pesho@gmail.com",
                    phone: "0854236748",
                    town: "Варна"
                },
                description: "Бойко Борисов е станал шосефа дупка",
                place:{
                    lat: 42.6964868,
                    lng: 23.3040918,
                },
                status: "pending",
                rate: 17,
                date: "06/08/2015"
            }, function (err, data) {
                if(err){
                    console.log("Error: " + err);
                }
            });

            Signal.create({                        
                photo: {data: pic, contentType: "image/jpg"},
                user: {
                    firstName: "Александър",
                    middleName: "Йорданов",
                    lastName: "Йорданов",
                    email: "alexanderyordanov96@gmail.com",
                    phone: "0894300065",
                    town: "София"
                },
                description: "Пропаднах с колата си в огромна дупка на шосето",
                place:{
                    lat: 42.6388932,
                    lng: 23.3239467,
                },
                status: "inproccess",
                rate: 9,
                date: "01/06/2015"
            }, function (err, data) {
                if(err){
                    console.log("Error: " + err);
                }
            });

            imgPath = "public/img/dupka1.jpg";   
            pic = fs.readFileSync(imgPath);

            Signal.create({                        
                photo: {data: pic, contentType: "image/jpg"},
                user: {
                    firstName: "Денис",
                    middleName: "Нейчев",
                    lastName: "Нейчев",
                    email: "denis@gmail.com",
                    phone: "0854354354",
                    town: "Стара Загора"
                },
                description: "Безобразие на пътищата в България",
                place:{
                    lat: 42.6964868,
                    lng: 23.3040918,
                },
                status: "done",
                rate: 28,
                date: "06/12/2015"
            }, function (err, data) {
                if(err){
                    console.log("Error: " + err);
                }
            });

            Signal.create({                        
                photo: {data: pic, contentType: "image/jpg"},
                user: {
                    firstName: "Пешо",
                    middleName: "Пешев",
                    lastName: "Пешве",
                    email: "pesho@gmail.com",
                    phone: "0854236748",
                    town: "Варна"
                },
                description: "Бойко Борисов е станал шосефа дупка",
                place:{
                    lat: 42.6964868,
                    lng: 23.3040918,
                },
                status: "pending",
                rate: 8,
                date: "06/06/2014"
            }, function (err, data) {
                if(err){
                    console.log("Error: " + err);
                }
            });

            console.log( 'Signals added to database....' );
        }
    });
    

}