module.exports = {
    name: 'off',
    description: 'Desliga o bot',
    execute (message, args) {
        if (message.member.hasPermission('ADMINISTRATOR')) {
            process.exit();
        } else {
            message.channel.send('Não tens permissões suficientes.');
        }
    }

}