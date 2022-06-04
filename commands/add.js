module.exports = {
    commands: ['add', 'addition'],
    expectedArgs: '<num1> <num2>',
    permissionError: 'Tens de ser admin para usar este comando.',
    minArgs: 2,
    maxArgs: 2,
    callback: (message, arguments, text) => {
        const num1 = +arguments[0]
        const num2 = +arguments[1]

        message.reply(`A soma é ${num1 + num2} !`)
    },
    permissions: [],
    requiredRoles: [],
}

