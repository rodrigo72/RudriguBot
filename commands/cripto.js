const { MessageAttachment } = require("discord.js")

module.exports = {
    commands: ['cripto', 'c'],
    expectedArgs: '<frase>',
    permissionError: 'Tens de ser admin para usar este comando.',
    minArgs: 1,
    maxArgs: 20,
    callback: async (message, arguments, text, Discord) => {
        const frase = text
        let filter = m => m.author.id === message.author.id

        message.channel.send('Escreva uma chave (integers): ')
        message.channel.awaitMessages(filter, {
            max: 1,
            time: 10000,
            errors: ['time']
          })
          .then(message => {

            message = message.first()
            const chave = message.content

            if (isNaN(chave) || (chave < 0)) {
                return message.channel.send('Chave inválida.')
            }
            
            if (!isNaN(chave)) {
                //message.channel.send('Chave válida.')

            // DISPONIVEL UMA FRASE E UMA CHAVE

            var caesarShift = function (str, amount) {
                // Wrap the amount
                if (amount < 0) {
                  return caesarShift(str, amount + 26);
                }
              
                // Make an output variable
                var output = "";
              
                // Go through each character
                for (var i = 0; i < str.length; i++) {
                  // Get the character we'll be appending
                  var c = str[i];
              
                  // If it's a letter...
                  if (c.match(/[a-z]/i)) {
                    // Get its code
                    var code = str.charCodeAt(i);
              
                    // Uppercase letters
                    if (code >= 65 && code <= 90) {
                      c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
                    }
              
                    // Lowercase letters
                    else if (code >= 97 && code <= 122) {
                      c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
                    }
                  }

                  // Append
                  output += c;
                }
              
                return output;
              };

                message.channel.send(`Chave válida. \nMensagem criptografada: **${caesarShift(frase, chave)}**`);
                //message.channel.send(caesarShift(frase, chave))
            }
        })
          //.catch(collected => {
          //    message.channel.send('Timeout/ chave inálida.');
          //})

    },

    permissions: [],
    requiredRoles: [],
}