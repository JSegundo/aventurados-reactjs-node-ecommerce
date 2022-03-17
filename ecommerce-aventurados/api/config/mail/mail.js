var gmailSender = require('gmail-sender-oauth');
//const accessToken='lwvpejugownihqgm'
const accessToken='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'

gmailSender.setClientSecretsFile('./client_secret.json');


var params = {
  from: 'aventuradosinfo@gmail.com',
  to: 'aventuradosinfo@gmail.com',
  subject: 'Aventura dos!!!',
  body: 'This is a test'
};
gmailSender.send(accessToken, params, function (err, resp) {
if (err) {
  return console.error('Something went wrong: ' + err);
}
else {
    console.log('Message sent with id: ' + resp.id);
}

});




/*
const gmailApiSync = require('gmail-api-sync');
console.log('!!!!!!!!!!!!!',process.argv.slice(2))
const args = process.argv.slice(2);
const serverAuthCode = args[0];
console.log(args);

gmailApiSync.setClientSecretsFile('./client_secret.json');
gmailApiSync.getNewAccesToken(serverAuthCode,function(err,token){
  if(err) {
    return console.error(err);
  } 
  else {
    console.log('accessToken: ' + JSON.stringify(token));
    //return {'accessToken':  JSON.stringify(token)};
  }
});


var gmailSender = require('gmail-sender-oauth');

gmailSender.setClientSecretsFile('./client_secret.json');

var params = {
    from: 'aventuradosinfo@gmail.com',
    to: 'sanchez.candela@gmail.com',
    subject: 'AventuraDos!!!',
    body: 'This is a test'
};    
gmailSender.send(accessToken, params, function (err, resp) {
  if (err) {
    return console.error('Something went wrong: ' + err);
  }  
  else {
      console.log('Message sent with id: ' + resp.id);
  }    
 
});  



/* const options={
    user: 'aventuradosinfo@gmail.com',
//    pass: 'lwvpejugownihqgm',
    pass:'Hola2022',
    to:   'sanchez.candela@gmail.com',
    subject: 'test Aventurados',
};
const send = require('gmail-send')(options);


send(options)
  .then(({ result, full }) => console.log(result))
  .catch((error) => console.error('ERROR', error))
  ;
   */
/* 


const send = require('gmail-send')({
    user: 'aventuradosinfo@gmail.com',
    pass: 'lwvpejugownihqgm',
    to:   'sanchez.candela@gmail.com',
    subject: 'test subject',
});


send({
    text:    'gmail-send example 1',  
  }, (error, result, fullResult) => {
    if (error) console.error(error);
    console.log(result);
})

 */
/* const send = require('gmail-send')({
    user: 'aventuradosinfo@gmail.com',
    pass: 'lwvpejugownihqgm',
    to:   'sanchez.candela@gmail.com',
    subject: 'test Aventurados',
  });
 */
  /* 
  send({
    text:    'gmail-send example 1',  
  }, (error, result, fullResult) => {
    if (error) console.error(error);
    console.log(result);
  })

 */
/* 
  console.log('* [example2] sending test email without checking the result');

  require('gmail-send')({    
  user: 'aventuradosinfo@gmail.com',           // Your GMail account used to send emails
  pass: 'lwvpejugownihqgm',           // Application-specific password
  to:   'sanchez.candela@gmail.com',           // Send to yourself
  subject: 'ping',
  text:    'gmail-send example 3',  // Plain text
})(()=>{console.log('enviado')});                         // Send email without any check
 */                                    //
                                    // Either callback function MUST be provided
                                    // or Promise rejection must be handled (see below)
//
// * [example2] sending test email without checking the result
//

/* const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    service:"gmail",
    auth:{
        user:"aventuradosinfo@gmail.com",
        //pass:"Hola2022",
        pass:"lwvpejugownihqgm",
    },
    tls:{
        rejectUnauthorized:false
    }
})


let mailOptions ={
    from:"aventuradosinfo@gmail.com",
    to:"sanchez.candela@gmail.com",
    subject:"prueba de aventurados",
    text:"mucho texto"
}

transporter.sendMail(mailOptions,function (err,success){
    if (err){console.log(err);
    } else {
        console.log("Email sent successfully!!");
    }
});

 */