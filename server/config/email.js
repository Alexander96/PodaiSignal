var email   = require("emailjs");

module.exports = function(){
   var server  = email.server.connect({
      user:    "podaisignal@gmail.com", 
      password:"podaisignal!", 
      host:    "smtp.google.com", 
      ssl: true,
   });
   return server;
}

