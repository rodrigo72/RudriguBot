module.exports = {
    commands: ['realping', 'rping', 'rp'],
    permissionError: 'Tens de ser administrador para usar este comando.',
    permissions: 'ADMINISTRATOR',
    callback: (message, arguments, text, client) => {
        message.reply('Calculating ping...').then((resultMessage) => {
            const ping = resultMessage.createdTimestamp - message.createdTimestamp
      
            resultMessage.edit(`Bot latency: ${ping}, API Latency: ${client.ws.ping}`)
          })
        },
}

