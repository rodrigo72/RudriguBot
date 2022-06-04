const fs = require("fs");

module.exports = {
    name: 'record',
    description: 'Grava áudio',
    async execute(message, args, client) {
        if (message.member.hasPermission('ADMINISTRATOR')) {


            const voicechannel = message.member.voice.channel;
            if (!voicechannel) return message.channel.send("Tens de estar num Voice Channel para executar este comando.");

            const connection = await message.member.voice.channel.join();
            const receiver = connection.receiver.createStream(message.member, {
                mode: "pcm",
                end: "silence"
            });

            const writer = receiver.pipe(fs.createWriteStream(`./recorded-${message.author.id}.pcm`));
            writer.on('finish', () => {
                message.member.voice.channel.leave();
                message.channel.send("Gravação terminada.");
            });


        } else {
            message.channel.send('Não tens permissões suficientes.');
        }
    }
}
