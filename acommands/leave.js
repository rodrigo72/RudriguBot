module.exports = {
    name: 'leave',
    description: 'parar o bot e sair do voice channel',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;

        if (!voiceChannel) return message.channel.send("Tens de estar num Voice Channel para executar este comando.");
        await voiceChannel.leave();
        await message.channel.send('🔓 Desconectado.')
    }
}
