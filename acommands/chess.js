module.exports = {
    name: 'chess',
    description: "chess.com",
    execute(message, args){
        message.channel.send('https://www.chess.com/today');
    }
}