var nodemailer = require('nodemailer');
var wellknown = require('nodemailer-wellknown');

module.exports = function(){
   

	// create reusable transporter object using SMTP transport
	var config = wellknown('Gmail');

	var transporter = nodemailer.createTransport('SMTP',{
		debug:true,
	    service: 'Gmail',
	    auth: {
	        user: 'podaisignal@gmail.com',
	        pass: 'podaisignal!'
	    }
	});

	// NB! No need to recreate the transporter object. You can use
	// the same transporter object for all e-mails

	// setup e-mail data with unicode symbols
	var mailOptions = {
	    from: 'Podai Signal ✔ podaisignal@gmail.com', // sender address
	    to: 'alexanderyordanov96@gmail.com', // list of receivers
	    subject: 'Signal ✔', // Subject line
	    text: 'Kak e ✔', // plaintext body
	    html: '<b>Hello world ✔</b>' // html body
	};

	// send mail with defined transport object
	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        console.log(error);
	    }else{
	        console.log('Message sent: ' + info.response);
	    }
	});

	transporter.close();
	return transporter;
}

