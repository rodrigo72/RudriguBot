const economy = require('../economy')

module.exports = {
    name: 'answer6',
    description: 'Verifica se a sexta resposta está correta',
    async execute (message, args, Discord) {

        const guildId = message.guild.id
        const userId = message.author.id
        const tag = message.author.tag

        const newEmbed = new Discord.MessageEmbed()
        .setColor('#ffe400')
        .setTitle('Fase 7')
        .setImage('https://i.imgur.com/qDm1Pnw.png')
        .setFooter('!answer7  < >')
        .setTimestamp()

        const fase = await economy.getCoins(guildId, userId)

        if (!args[0]) {
        
            if (fase >= 6) {
                return message.channel.send(newEmbed);
            } else {
                return message.reply('sem resposta.');
            }
        }

        if (args[0] !== 'twominuteshate') return message.reply('resposta incorreta.');
        if (args[0] === 'twominuteshate') {

            if (fase == 5) {
                const faseN = await economy.addCoins(guildId, userId, 1)
                console.log(`----------------- O senhor ${tag} passou a fase número ${faseN}. -----------------`)
                message.reply(`***resposta correta.*** \nPassaste para a fase ${faseN + 1}.`);
            }
            return message.channel.send(newEmbed);
        }

    }
}