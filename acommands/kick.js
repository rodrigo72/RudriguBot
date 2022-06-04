module.exports = {
    name: 'kick',
    description: 'This command kicks a member',
    execute(message, args) {
        const member = message.mentions.users.first();
        if (message.member.roles.cache.has('730046089415098428')) {
            
            if (member) {
                const memberTarger = message.guild.members.cache.get(member.id);
                memberTarger.kick();
                message.channel.send('`User has been kicked`');
            } else {
                message.channel.send('Não tens permissoes suficientes ou o membro não existe/ não foi mencionado corretamente.');
            }
        } else {
            message.channel.send('Não tens permissões suficientes.');
        }
    }
}