module.exports = {
    name: 'tetris',
    description: "Tetris - Maratona 40L",
    execute(message, args){
        message.channel.send('https://jstris.jezevec10.com/?play=1&mode=1');
    }
}