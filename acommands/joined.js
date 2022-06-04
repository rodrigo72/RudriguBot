module.exports = {
    name: 'joined',
    description: "data",
    execute(message, args){
        message.reply(`${message.member.joinedAt}`);
    }
}