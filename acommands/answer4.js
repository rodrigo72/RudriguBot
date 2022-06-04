const economy = require('../economy')

module.exports = {
    name: 'answer4',
    description: 'Verifica se a quarta resposta está correta',
    async execute (message, args, Discord) {

        const guildId = message.guild.id
        const userId = message.author.id
        const tag = message.author.tag

        const newEmbed = new Discord.MessageEmbed()
        .setColor('#ffe400')
        .setTitle('Fase 5')
        .setURL('https://mega.nz/file/JGQiEb4a#NHj4mxLtxAS8LfQwdifurw_oCoH0tRRGEdxlQlZoNCQ')
        .setImage('https://i.imgur.com/7R9X4yf.png')
        .setDescription ('O segundo ponto da reta de Euler \n!answer5  <city>')
        .setTimestamp()

        const fase = await economy.getCoins(guildId, userId)

        if (!args[0]) {
        
            if (fase >= 4) {
                return message.channel.send(newEmbed);
            } else {
                return message.reply('sem resposta.');
            }
        }

        if (args[0] !== 'voice?') return message.reply('resposta incorreta.');
        if (args[0] === 'voice?') {

            if (fase == 3) {
                const faseN = await economy.addCoins(guildId, userId, 1)
                console.log(`----------------- O senhor ${tag} passou a fase número ${faseN}. -----------------`)
                message.reply(`***resposta correta.*** \nPassaste para a fase ${faseN + 1}.`);
            }
            return message.channel.send(newEmbed);
        }

    }
}