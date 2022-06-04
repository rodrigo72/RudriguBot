module.exports = {
    name: 'clear',
    description: "Clear messages",
    async execute (message, args) {
        if (message.member.hasPermission('ADMINISTRATOR') || message.member.roles.cache.some(role => role.name === 'Mod') || message.member.roles.cache.some(role => role.name === 'reagente em excesso')) {

            if (!args[0]) return message.reply('Escreve o número de mensagens que queres apagar: (!clear <num>)');
            if (isNaN(args[0])) return message.reply('Inválido, tente novamente');

            if (args[0] > 100) return message.reply('Inválido. O limite máximo é 100.');
            if (args[0] < 1) return message.reply('Inválido. O limite mínimo é 1.');

            await message.channel.messages.fetch({limit:args[0]}).then(messages => {
                message.channel.bulkDelete(messages);
            });

        } else {
            message.channel.send('Não tens permissões suficientes.');
        }
    }
}