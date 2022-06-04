const economy = require('../../economy')

module.exports = {
  commands: ['balance', 'bal'],
  maxArgs: 1,
  expectedArgs: "[@ <user>]",
  callback: async (message) => {
    const target = message.mentions.users.first() || message.author
    const targetId = target.id

    const guildId = message.guild.id
    const userId = target.id

    const coins = await economy.getCoins(guildId, userId)

    message.reply(`esse residente tem ${coins} moedas.`)
  },
}