module.exports = {
    name: 'serverinfo',
    description: 'Informação acerca do servidor',
    execute (message, args, Discord) {
        const { guild } = message;
        //mesage.guild
        const { name, region, memberCount, owner, afkTimeout } = guild;
        const icon = guild.iconURL();

        const embed = new Discord.MessageEmbed()
            .setColor ('#ffe400')
            .setTitle (`Server Info - ${name}`)
            .setThumbnail (icon)
            .addFields({
                name: 'Região',
                value: region,
            },
            {
                name: 'Residentes',
                value: memberCount,
            },
            {
                name: 'Dono da *La Casa Rosa*',
                value: owner.user.tag,
            },
            {
                name: 'AFK Timeout',
                value: afkTimeout / 60 + ' min',
            }
        )
        message.channel.send(embed);
    }
}
