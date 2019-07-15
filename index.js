console.log('[bam] Initializing...')

const Client = require('chatplug-client')
const client = new Client()

client.on('message', async message => {
  if (message.body.startsWith('!bam')) {
    const res = await client.send({
      body: 'bam!', // todo: attachments
      originId: 'bambot',
      author: {
        username: 'BamBot',
        originId: 'bam'
      },
      originThreadId: 'bambot'
    })
    console.log(res)
  }
})

console.log('[bam] Listening!')
