    module.exports = {
    name: 'teste',
    description: ' ',
    execute(message, args, axios) {


        if(!args.length) {
            return message.channel.send("Inválido, escreve o nome de um anime.")
       }

        const yep = args.join(' ')
        let option = {
            url: `https://kitsu.io/api/edge/anime?filter[text]=${yep}`,
            method: `GET`,
            headers: {
              'Content-Type': "application/vnd.api+json",
              'Accept': "application/vnd.api+json"
      
            },
            json: true
          }

          message.channel.send("yepyep").then(msg => {
            axios.get(option).then(body => {
             try {
              let embed = new MessageEmbed()
              .setTitle(body.data[0].attributes.titles.en)
              .setColor("RED")
              .setDescription(body.data[0].attributes.synopsis)
              .setThumbnail(body.data[0].attributes.posterImage.original)
              .addField("Ratings", body.data[0].attributes.averageRating)
              .addField("TOTAL EPISODES", body.data[0].attributes.episodeCount)
              .setImage(body.data[0].attributes.coverImage.large)
              
              
              message.channel.send(embed)
              msg.delete();
              
             } catch (err) {
              msg.delete();
               return message.channel.send("Unable to find this anime");
             }
            
            })
        })

    }
}