// const axios = require('axios')

module.exports = {
    name: 'joke',
    description: 'envia uma piada',
    execute(message, args, axios) {
        
        axios.get('https://official-joke-api.appspot.com/random_joke')
        .then((res) => {
            message.channel.send(res.data.setup)
            message.channel.send(res.data.punchline)
        })
        .catch((err) => {
            console.log('ERR: ', err)
        })

    }
}