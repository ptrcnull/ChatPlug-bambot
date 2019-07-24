console.log('Initializing...')

const { Client } = require('chatplug-client')
const client = new Client()

client.on('message', async message => {
  if (message.body.startsWith('!bam')) {
    await client.send({
      body: '',
      attachments: [
        {
          type: 'IMAGE',
          originId: 'bam',
          sourceUrl: 'https://cdn.discordapp.com/attachments/456818557519659011/496761562850131978/unknown.png'
        }
      ],
      originId: 'bambot',
      author: {
        username: 'BamBot',
        originId: 'bam'
      },
      originThreadId: 'bambot'
    })
  }
})

console.log('Listening!')
