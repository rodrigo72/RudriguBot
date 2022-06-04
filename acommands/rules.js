module.exports = {
    name: 'rules',
    description: "Embeds",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#ffe400')
        .setTitle('Regras')
        // .setURL()
        .setAuthor('rudrigu bot gang')
        .setDescription ('Embed de teste para as regras do server')
        .addFields (
            {name: 'Rule 1', value: 'Be nice'}, 
            {name: 'Rule 2', value: '002 best waifu'}
            
        )
        .setImage ('https://i.imgur.com/8BVEN8x.gif')
        .setFooter ('mais regras no salao das regras')


        message.channel.send(newEmbed);
    }
}

