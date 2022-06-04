const path = require('path');

module.exports = {
    name: 'outro',
    description: "plays audio",
    async execute(message){
        const { voice } = message.member;
        const voiceChannel = message.member.voice.channel;
        if (!voice.channelID) {
            message.reply('não estás num Voice Channel.');
            return
        }
        voice.channel.join().then((connection) => {
            message.channel.send('https://tenor.com/view/head-brick-human-head-bang-head-shake-brick-gif-16842707');
            const dispatcher = connection.play(path.join(__dirname, 'lacasarosa_v2.m4a'))
            dispatcher.on('finish', () => {
                voice.channel.leave()
            });
        })
    }
}
