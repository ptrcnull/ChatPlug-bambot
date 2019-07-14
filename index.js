const Client = require('chatplug-client')
const client = new Client()
client.on('message', console.log)
