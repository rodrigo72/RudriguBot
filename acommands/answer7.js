const economy = require('../economy')

module.exports = {
    name: 'answer7',
    description: 'Verifica se a sexta resposta está correta',
    async execute (message, args, Discord) {

        const guildId = message.guild.id
        const userId = message.author.id
        const tag = message.author.tag

        const newEmbed = new Discord.MessageEmbed()
        .setColor('#ffe400')
        .setTitle('Bem-vindo à parte II do enigma da La Casa Rosa:')
        .setDescription('teste teste')
        .setImage()
        .setTimestamp()

        const fase = await economy.getCoins(guildId, userId)

        if (!args[0]) {
        
            if (fase >= 7) {
                return message.channel.send(newEmbed);
            } else {
                return message.reply('sem resposta.');
            }
        }

        if (args[0] !== 'rosa') return message.reply('resposta incorreta.');
        if (args[0] === 'rosa') {

            if (fase == 6) {
                const faseN = await economy.addCoins(guildId, userId, 1)
                console.log(`----------------- O senhor ${tag} passou a fase número ${faseN}. -----------------`)
                message.reply(`***resposta correta.*** \nPassaste para a fase ${faseN + 1}.`);
            }
            return message.channel.send(newEmbed);
        }

    }
}