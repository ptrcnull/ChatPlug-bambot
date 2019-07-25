console.log('Initializing...')

const { Client } = require('chatplug-client')
const client = new Client()

client.on('message', async (target, message) => {
  if (message.body.startsWith('go!bam')) {
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
        originId: 'bam',
        avatarUrl: 'https://cdn.discordapp.com/attachments/456818557519659011/496761562850131978/unknown.png'
      },
      originThreadId: 'bambot'
    }).catch(err => {
      console.log(err)
      if (err.result && err.result.errors) console.log(err.result.errors)
    })
  }
})

console.log('Listening!')
