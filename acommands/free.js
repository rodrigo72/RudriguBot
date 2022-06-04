module.exports = {
    name: 'free',
    description: 'gives free v-bucks',
    execute(message, args, client) {
        message.channel.send('Clica no ✅ para receber FREE V-BUCKS!!')
        .then( (message, reaction, user) => {
            message.react('✅')

            client.on ('messageReactionAdd', async (reaction, user) => {

                if (user.bot) return;
                if (!reaction.message.guild) return;

                if (reaction.emoji.name === '✅') {
                    await message.delete()
                    await message.channel.send('Vírus ativado.') 
                }
            
            })
        })

    }
}