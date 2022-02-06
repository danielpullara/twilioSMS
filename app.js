require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_TOKEN;
const client = require('twilio')(accountSid, authToken);


client.messages.create({
    body: 'Did this work?',
    from: '+19088276673',
    to:'+14153518738'
})
.then( message => console.log(message))
.catch((err) => console.log(err))

