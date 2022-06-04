const channelId = '791840271007744022'
const check = '✅'
let registerd = false

const registerEvent = client => {
    if (registerd) {
        return
    }

    registerd = true



    client.on('messageReactionAdd', (reaction, user) => {
        if (user.bot) {
            return  
        }

        const { message } = reaction
        if (message.channel.id === channelId) {
            message.delete()
        }
    })
}

module.exports = {
    commands: ['ticket', 'support'],
    minArgs: 1,
    expectedArgs: '<message>',
    callback: (userMessage, arguments, text, client) => {
        const { guild, member} = userMessage

        registerEvent(client)

        const channel = guild.channels.cache.get(channelId)
        channel.send(`Um novo ticket foi criado por <@${member.id}>:
        
    "${text}"
    
    Clica no ${check} quando esta mensagem já não for necessária.`)
        .then(ticketMessage => {
            ticketMessage.react(check)

            userMessage.reply('o teu ticket foi enviado.')
            userMessage.delete()
        })
    },
}