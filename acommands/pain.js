module.exports = {
    name: 'pain',
    description: "the pain of the simps",
    execute(message, args){

        if (message.member.roles.cache.has('791060757122908220')) {
            message.channel.send('https://youtu.be/6QOaH3t_hE4');
        } else {
            message.channel.send('Não tens permissões suficientes.');
        }
        
    }
}
