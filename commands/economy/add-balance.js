const economy = require('../../economy')

module.exports = {
  commands: ['addbalance', 'addbal'],
  minArgs: 2,
  maxArgs: 2,
  expectedArgs: "<@ user> <quantidade de moedas>",
  permissionError: 'Tens de ser administrador para usar este comando.',
  permissions: 'BAN_MEMBERS',
  callback: async (message, arguments) => {
    const mention = message.mentions.users.first()

    if (!mention) {
      message.reply('Inválido, faz @ <user>.')
      return
    }

    const coins = arguments[1]
    if (isNaN(coins)) {
      message.reply('Quantidade inválida.')
      return
    }

    const guildId = message.guild.id
    const userId = mention.id

    const newCoins = await economy.addCoins(guildId, userId, coins)

    message.reply(
      `Deste ao residente <@${userId}> ${coins} moeda(s). Agora tem ${newCoins} moeda(s).`
    )
  },
}