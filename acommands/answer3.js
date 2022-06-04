const economy = require('../economy')

module.exports = {
    name: 'answer3',
    description: 'Verifica se a terceira resposta está correta',
    async execute (message, args, Discord) {

        const guildId = message.guild.id
        const userId = message.author.id
        const tag = message.author.tag

        const newEmbed = new Discord.MessageEmbed()
        .setColor('#ffe400')
        .setTitle('Fase 4')
        .setURL('https://mega.nz/file/oKQ32QKb#SbidLPbxLsIxi67RJ9fGey01sD1YOKPwa6X5pBdYgcM')
        .setDescription ('apart. choice. mute? ___ \n!answer4  <   >')
        .setTimestamp()

        const fase = await economy.getCoins(guildId, userId)

        if (!args[0]) {
        
            if (fase >= 3) {
                return message.channel.send(newEmbed);
            } else {
                return message.reply('sem resposta.');
            }
        }

        if (args[0] !== '0089567823522') return message.reply('resposta incorreta.');
        if (args[0] === '0089567823522') {

            if (fase == 2) {
                const faseN = await economy.addCoins(guildId, userId, 1)
                console.log(`----------------- O senhor ${tag} passou a fase número ${faseN}. -----------------`)
                message.reply(`***resposta correta.*** \nPassaste para a fase ${faseN + 1}.`);
            }
            return message.channel.send(newEmbed);
        }

    }
}