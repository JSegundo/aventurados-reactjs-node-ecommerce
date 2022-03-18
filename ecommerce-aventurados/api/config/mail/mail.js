
////para generar el access token

var gmailApiSync = require('gmail-api-sync');
gmailSender.setClientSecretsFile('./client_secret.json');


var params = {
  from: 'aventuradosinfo@gmail.com',
  to: 'aventuradosinfo@gmail.com',
  subject: 'aventurados!!!',
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