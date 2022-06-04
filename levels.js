const mongo = require('./mongo')
const profileSchema = require('./schemas/profile-schema')

module.exports = (client) => {



    client.on('message', message => {
        const { guild, member, channel } = message;
        const salaoWaifus = '737631545270992917';
        const salaoWaifus2 = '772750674072043522';

        addXP(guild.id, member.id, 23, message);
        
    })

}

if (channel.id ===! salaoWaifus || channel.id ===! salaoWaifus2) {
const getNeededXP = level => level * level * 100

const addXP = async (guildId, userId, xpToAdd, message) => {
    
        await mongo().then(async (mongoose) => {
            try {
                const result = await profileSchema.findOneAndUpdate({
                    guildId,
                    userId,
                }, 
                {
                    guildId,
                    userId,
                    $inc: {
                    xp: xpToAdd,
                    },
                }, 
                {
                    upsert: true,
                    new: true,
                })

                let { xp, level } = result
                const needed = getNeededXP(level)

                if (xp >= needed) {
                    ++level
                    xp -= needed

                    message.reply(`Subiste para o level ${level} e agora tens ${xp} XP! Precisas de ${getNeededXP(level)} XP para subir novamente.`)

                    await profileSchema.updateOne({
                        guildId,
                        userId,
                    }, 
                    {
                        level,
                        xp
                    })
                }
            } catch(err) {
                console.log(err)
                
            } finally {
                mongoose.connection.close();
                console.log('Connection closed');
            }
        })
    }
}


module.exports.addXP = addXP
