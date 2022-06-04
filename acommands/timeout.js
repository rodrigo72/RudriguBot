const ms = require("ms");

module.exports = {
	name: 'timeout',
	aliases: [],
	execute(message, Discord) {
        message.guild.members.cache.forEach(member => {
            member.timeout('100')
        })
    
    }
}