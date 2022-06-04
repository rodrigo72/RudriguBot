const economy = require('../economy')

module.exports = {
    name: 'answer1',
    description: 'Verifica se a primeira resposta está correta',
    async execute (message, args, Discord) {

        const guildId = message.guild.id
        const userId = message.author.id
        const tag = message.author.tag

        const newEmbed = new Discord.MessageEmbed()
        .setColor('#ffe400')
        .setTitle('Fase 2')
        .setURL('https://mega.nz/file/cP5gSLKA')
        .setImage('https://i.imgur.com/ZDCAA78.png')
        .setDescription ('~~https://~~ \n!answer2  <La Casa Rosa (link)>')
        .setTimestamp()

        const fase = await economy.getCoins(guildId, userId)

        if (!args[0]) {
        
            if (fase >= 1) {
                return message.channel.send(newEmbed);
            } else {
                return message.reply('sem resposta.');
            }
        }

        if (args[0] !== 'center') return message.reply('resposta incorreta.');
        if (args[0] === 'center') {

            if (fase == 0) {
                const faseN = await economy.addCoins(guildId, userId, 1)
                console.log(`----------------- O senhor ${tag} passou a fase número ${faseN}. -----------------`)
                message.reply(`***resposta correta.*** \nPassaste para a fase ${faseN + 1}. \nAgora podes usar apenas <!answer1> para ter acesso à informação da próxima fase.`);
            }
            return message.channel.send(newEmbed);
        }

    }
}