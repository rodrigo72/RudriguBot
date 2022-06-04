const economy = require('../../economy')

module.exports = {
  commands: 'pay',
  minArgs: 2,
  maxArgs: 2,
  expectedArgs: "<@ user> <quantidade de moedas>.",
  permissionError: 'Tens de ser administrador para usar este comando.',
  permissions: 'ADMINISTRATOR',
  callback: async (message, arguments, text) => {
    const { guild, member } = message

    const target = message.mentions.users.first()
    if (!target) {
      message.reply('tens de fazer <@ user>.')
      return
    }

    const coinsToGive = arguments[1]
    if (isNaN(coinsToGive)) {
      message.reply('quantidade inválida de moedas.')
      return
    }

    const coinsOwned = await economy.getCoins(guild.id, member.id)
    if (coinsOwned < coinsToGive) {
      message.reply(`Não tens ${coinsToGive} moedas para dar.`)
      return
    }

    const remainingCoins = await economy.addCoins(
      guild.id,
      member.id,
      coinsToGive * -1
    )
    const newBalance = await economy.addCoins(guild.id, target.id, coinsToGive)

    message.reply(
      `Deste ${coinsToGive} moedas ao residente <@${target.id}>, que agora tem ${newBalance}. Ficaste com ${remainingCoins} moedas.`
    )
  },
}