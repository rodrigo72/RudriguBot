const economy = require('../economy')

module.exports = {
    name: 'answer5',
    description: 'Verifica se a quinta resposta está correta',
    async execute (message, args, Discord) {

        const guildId = message.guild.id
        const userId = message.author.id
        const tag = message.author.tag

        const newEmbed = new Discord.MessageEmbed()
        .setColor('#ffe400')
        .setTitle('Fase 6')
        //.setURL('')
        .setImage('https://i.imgur.com/LxrXoBM.jpg')
        .setDescription ('(2:25) \n\n"[...] não conseguia abster-se de participar no delírio geral, mas aquele cântico sub-humano, <G-I!... G-I!...>, enchia-o sempre de horror. Claro que gritava com(o) os outros: impossível não o fazer." \n\n\n!answer6  <>')
        // "I try to sing along/ But I get it all wrong" 
        .setTimestamp()

        const fase = await economy.getCoins(guildId, userId)

        if (!args[0]) {
        
            if (fase >= 5) {
                return message.channel.send(newEmbed);
            } else {
                return message.reply('sem resposta.');
            }
        }

        if (args[0] !== 'munich') return message.reply('resposta incorreta.');
        if (args[0] === 'munich') {

            if (fase == 4) {
                const faseN = await economy.addCoins(guildId, userId, 1)
                console.log(`----------------- O senhor ${tag} passou a fase número ${faseN}. -----------------`)
                message.reply(`***resposta correta.*** \nPassaste para a fase ${faseN + 1}.`);
            }
            return message.channel.send(newEmbed);
        }

    }
}