const ytdl = require ('ytdl-core');
const ytSearch = require ('yt-search');

module.exports = {
    name: 'blendw',
    description: 'Envia do video do BlendW',
    async execute (message, agrs) {

        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel) {
            return message.channel.send("Tens de estar num Voice Channel para executar este comando.");
        }   

        const permissions = voiceChannel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT')) {
            return message.channel.send("Não tens permissões suficientes.");
        }

        const connection = await voiceChannel.join(); 
        const stream = ytdl('https://youtu.be/DJfg39WkMvE', {filter: 'audioonly'});
        connection.play(stream, {seek: 0, volume: 1})
        .on('finish', () => {
            voiceChannel.leave();
        });

        await message.reply(`⚠ Now playing ***Blend W***`);
    }
}