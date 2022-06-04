module.exports = {
    name: 'start',
    descriptio: 'Começa o enigma',
    execute (message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#ffe400')
        .setTitle('Fase 1')
        // .setURL()
        .setDescription ('A página da esquerda tem um padrão que a página da direita não tem. Se descobrires esse padrão, descreve-o em uma palavra (em inglês) no seguinte formato: \n \n!answer1 <word> \n\n\nBongard problem:')
        .setImage ('https://i.imgur.com/jbQzXGV.png')
        .setTimestamp()

        message.channel.send(newEmbed);
    }
}

