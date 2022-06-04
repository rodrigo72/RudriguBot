module.exports = {
    name: 'help',
    description: 'Lista de comandos',
    async execute(message, args, Discord, client) {

        const emojiNext = '➡'
        const emojiPrevious = '⬅'
        //const filter = m => m.content.includes('discord');
        //const collector = message.channel.createMessageCollector(filter, { time: 15000 });

        const newEmbed2 = new Discord.MessageEmbed()
        .setColor('#ffe400')
        .setTitle('***!help - Lista de Comandos***')
        .setImage('https://i.imgur.com/Hco0aDe.gif')
        .setTimestamp()
        //.setFooter ('Existem mais comandos, mas por enquanto são de admin. Estes são os disponíveis.', )
        

        const newEmbed3 = new Discord.MessageEmbed()
        .setColor('#ffe400')
        .setTitle('***!help - Lista de Comandos***')
        .addFields(
            {name: '!quote',value: 'Envia quotes aleatoriamente'},
            {name: '!tetris',value: 'Envia o link do Jstris - 40L'},
            {name: '!play',value: 'Comando de música'},
            {name: '!leave',value: 'Comando de música'},
            {name: '!serverinfo',value: 'Dá informação acerca do server'},
            {name: '!pay',value: 'Dá moedas a outra pessoa'},
            {name: '!pain',value: 'Disponível apenas para o role: Simp'},
        )
        .setFooter('Comandos públicos.') 
        .setTimestamp()


        const newEmbed4 = new Discord.MessageEmbed()
        .setColor('#ffe400')
        .setTitle('***!help - Lista de Comandos***')
        .addFields(
            {name: '!chess',value: 'Envia o link do chess.com'},
            {name: '!clear',value: 'Apaga mensagens'},
            {name: '!blendw',value: 'Comando de música - Tradição da music night'},
            {name: '!ping',value: 'O primeiro comando e o mais útil'},
            {name: '!realping',value: 'Comando de admin'},
            {name: '!ticket',value: 'Envia o um ticket para o salão do correio/ dos Mods'},
            {name: '!balance',value: 'Quantidade de moedas'},
        )
        .setFooter('Comandos públicos.')
        .setTimestamp()
         
        
        message.channel.send(newEmbed2)
        .then(async (message, reaction, user) => {
            setTimeout(function() {
                message.edit(newEmbed3)
                    message.react(emojiPrevious);
                    message.react(emojiNext);
                    message.react('🗑');
            }, 4500)

            
            const list = [newEmbed3, newEmbed4]
            client.on ('messageReactionAdd', async (reaction, user) => {
                
                if (user.bot) return;
                if (!reaction.message.guild) return;
                var i = 0;
        
               
                    if (reaction.emoji.name === emojiNext) {
                            if (i != 2) { 
                                i = i + 1 
                                await message.edit(list[i])
                            }

                            await reaction.users.remove(user.id)
                    }
                
                
                    if (reaction.emoji.name === emojiPrevious) {
                            if (i =! 0) { 
                                i = Math.abs(i - 1) 
                                await message.edit(list[i])
                            }

                            await reaction.users.remove(user.id)
                    }

                    if (reaction.emoji.name === '🗑') {
                        i = 0;
                        return await message.delete();
                    }
            })

        })

    },
}