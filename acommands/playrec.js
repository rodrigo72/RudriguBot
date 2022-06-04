const fs = require("fs");

module.exports = {
    name: 'playrec',
    description: '',
    async execute(message, args, client) {

        if (message.member.hasPermission('ADMINISTRATOR')) {
            const voicechannel = message.member.voice.channel;
            if (!voicechannel) return message.channel.send("Tens de estar num Voice Channel para executar este comando.");

            if (!fs.existsSync(`./recorded-${message.author.id}.pcm`)) return message.channel.send("Áudio não foi gravado.");

            const connection = await message.member.voice.channel.join();
            const stream = fs.createReadStream(`./recorded-${message.author.id}.pcm`);

            const dispatcher = connection.play(stream, {
                type: "converted"
            });

            dispatcher.on("finish", () => {
                message.member.voice.channel.leave();
                return message.channel.send("Fim da transmissão.");
            })
            
        } else {
            message.channel.send('Não tens permissões suficientes.');
    }


    }
}