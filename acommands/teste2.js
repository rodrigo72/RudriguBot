module.exports = {
    name: 'teste2',
    description: ' ',
    execute(message, args, axios, Discord) {
        
        axios.get('https://api.fbi.gov/wanted/v1/list')
        .then((res, Discord) => {
            // console.log(res.data.items[0])
            message.channel.send(res.data.items[0].title)


            let embed = new MessageEmbed()
            .setTitle(res.data.items[0].title)
            .setThumbnail(res.data.items[0].images[0].thumb)

            message.channel.send(embed)

        })
        .catch((err) => {
            console.log('ERR: ', err)
        })

    }
}