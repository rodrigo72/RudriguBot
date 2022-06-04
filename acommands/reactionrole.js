module.exports = {
    name: 'reactionrole',
    description: "sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        const channel = '747087683775365180'
        const simpRole = message.guild.roles.cache.find(role => role.name === "Simp");
        const notSimpRole = message.guild.roles.cache.find(role => role.name === "Not Simp");

        const simpEmoji = '✅';
        const notSimpEmoji = '❎';

        if (message.member.roles.cache.has('730046089415098428')) {

            let embed = new Discord.MessageEmbed()
                .setColor('#ffe400')
                .setTitle('To Simp or Not to Simp')
                .setDescription('Escolhe ser simp ou não ser simp, e será atribuido o role correspondente:\n\n'
                    + `${simpEmoji} Simp \n`
                    + `${notSimpEmoji} Not Simp`);

            let messageEmbed = await message.channel.send(embed);
            messageEmbed.react(simpEmoji);
            messageEmbed.react(notSimpEmoji);

            client.on ('messageReactionAdd', async (reaction, user) => {
                if (reaction.message.partial) await reaction.message.fetch();
                if (reaction.partial) await reaction.fetch();
                if (user.bot) return;
                if (!reaction.message.guild) return;
 
                if (reaction.message.channel.id == channel) {
                    if (reaction.emoji.name === simpEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(simpRole);
                    }
                    if (reaction.emoji.name === notSimpEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(notSimpRole);
                    }
                } else {
                    return;
                }
            });

            client.on('messageReactionRemove', async (reaction, user) => {
 
                if (reaction.message.partial) await reaction.message.fetch();
                if (reaction.partial) await reaction.fetch();
                if (user.bot) return;
                if (!reaction.message.guild) return;
 
 
                if (reaction.message.channel.id == channel) {
                    if (reaction.emoji.name === simpEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(simpRole);
                    }
                    if (reaction.emoji.name === notSimpEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(notSimpRole);
                    }
                } else {
                    return;
                }
            });
        } else {
            message.channel.send('Não tens permissões suficientes.');
        }
    }
}
