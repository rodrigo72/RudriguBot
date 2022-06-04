const economy = require('../economy')

module.exports = {
    name: 'answer2',
    description: 'Verifica se a segunda resposta está correta',
    async execute (message, args, Discord) {

        const guildId = message.guild.id
        const userId = message.author.id
        const tag = message.author.tag

        const newEmbed = new Discord.MessageEmbed()
        .setColor('#ffe400')
        .setTitle('Fase 3')
        .setURL('https://enigmadalacasarosa.netlify.app/')
        .setDescription ('!answer3  <password>')
        .setTimestamp()

        const fase = await economy.getCoins(guildId, userId)

        if (!args[0]) {
        
            if (fase >= 2) {
                return message.channel.send(newEmbed);
            } else {
                return message.reply('sem resposta.');
            }
        }

        if (args[0] !== 'enigmadalacasarosa.netlify.app') return message.reply('resposta incorreta.');
        if (args[0] === 'enigmadalacasarosa.netlify.app') {

            if (fase == 1) {
                const faseN = await economy.addCoins(guildId, userId, 1)
                console.log(`----------------- O senhor ${tag} passou a fase número ${faseN}. -----------------`)
                message.reply(`***resposta correta.*** \nPassaste para a fase ${faseN + 1}.`);
            }
            return message.channel.send(newEmbed);
        }

    }
}