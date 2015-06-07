var http = require('http'),
    express = require('express'),
    env = process.env.NODE_ENV || 'development',
    config = require('./server/config/config.js')[env];
var app = express();
require('./server/config/express.js')(app, config);
require('./server/config/mongoose.js')(config);
require('./server/config/passport.js')();
var transporter = require('./server/config/email.js')();
require('./server/config/routes.js')(app);

var message = {
   text:    "i hope this works", 
   from:    "Podai podaisignal@abv.bg", 
   to:      "Alexander alexanderyordanov96@gmail.com",
   subject: "Оплакване",
   attachment: 
   [
      {data:"<html>i <i>hope</i> this works!</html>", alternative:true},
      //{path:"path/to/file.zip", type:"application/zip", name:"renamed.zip"}
   ]
};


app.listen(config.port);
console.log('Server running on port ' + config.port);