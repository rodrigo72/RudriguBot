require('events').EventEmitter.defaultMaxListeners = 30;
require('dotenv').config();


const path = require('path');

const Discord = require('discord.js');
const fetch = require('node-fetch');
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});

const Commando = require('discord.js-commando') 

const prefix = '!';

const fs = require ('fs');

const axios = require('axios')
const mongo = require ('./mongo');
const config = require ('./config.json');
const welcome = require ('./commands/setwelcome');
const command = require ('./commands/command');
const advancedPolls = require('./advanced-polls');
//const levels = require('./levels')


client.commands = new Discord.Collection();


const commandFiles = fs.readdirSync('./acommands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./acommands/${file}`);
 
    client.commands.set(command.name, command);
}

//const client = new Commando.CommandoClient({
//    owner: '348800725272363009',
//    commandPrefix: config.prefix
//})

client.once('ready', async () => {
    console.log('RudriguBot is online!');
    welcome(client);
    advancedPolls(client);
    //levels(client);


    client.user.setPresence({
        status: "idle",
        activity: {
            name: "!help",
            type: "WATCHING"
        }
    })

    //client.user.setActivity('!help', { type: 'WATCHING' });
    //client.user.setStatus('idle')



    const baseFile = 'command-base.js'
    const commandBase = require(`./commands/${baseFile}`)

    const readCommands = dir => {
        const files = fs.readdirSync(path.join(__dirname, dir))
        for (const file of files) {
            const stat = fs.lstatSync(path.join(__dirname, dir, file))
            if (stat.isDirectory()) {
                readCommands(path.join(dir, file))
            } else if (file !== baseFile) {
                const option = require(path.join(__dirname, dir, file))
                commandBase(client, option)
            }
        }
    }

    readCommands('commands')

    await mongo().then(mongoose => {
        try {
            console.log('Connected to mongo!');
        } finally {
            mongoose.connection.close();
        }
    })
});



// Novos membros recebem uma mesagem e um role: Calhaus -
// client.on('guildMemberAdd', guildMember => {
//    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'calhaus -');
//    guildMember.roles.add(welcomeRole);
//    guildMember.guild.channels.cache.get('747087683775365180');
//.send(`Bem-vindo!<@${guildMember.user.id}>`) 
//});


client.on("message", message => {

    if ((message.member.roles.cache.some(role => role.name === 'RuiBot')) || (message.member.roles.cache.some(role => role.name === 'RudriguBot'))) return;

    if (message.content.toLowerCase().includes("miyagi")) {
        message.channel.send("<@348800725272363009>");
    }
    if (message.content.toLowerCase().includes("bruno")) {
        message.channel.send("<@583913773979402242>");
    }
    if (message.content.toLowerCase().includes("bruna")) {
        message.channel.send("<@583913773979402242>");
    }
    if (message.content.toLowerCase().includes("palhaço")) {
        message.channel.send("<@391356976283779073>");
    }
    if (message.content.toLowerCase().includes("aora")) {
        message.channel.send("ora");
    }
    if (message.content.toLowerCase().includes("puta")) {
        message.channel.send("este é um servidor family friendly");
    }
    if (message.content.toLowerCase().includes("rodrigo")) {
        message.channel.send("<@348800725272363009>");
    }
    if (message.content.toLowerCase().includes("burro")) {
        message.channel.send("<@348800725272363009>");
    }
    if (message.content.toLowerCase().includes("bruh")) {
        message.channel.send("<@356117999813525534>");
    }
    if (message.content.toLowerCase().includes(":rei:")) {
        message.channel.send("💅");
    }
    if (message.content.toLowerCase().includes("desumilde")) {
        message.channel.send("<@348800725272363009>");
    }
    if (message.content.toLowerCase().includes("camada")) {
        message.channel.send("🧅");
    }
    if (message.mentions.has(client.user.id)) {
        message.react('👀');
    }
    if (message.content.toLowerCase().includes("suicidio") || message.content.toLowerCase().includes("suicídio") ) {
        message.channel.send("poggers");
    }
    if (message.content.toLowerCase().includes("é o q se quer") || message.content.toLowerCase().includes("é o que se quer") ) {
        message.channel.send("de facto");
    }
    if (message.content.toLowerCase().includes("triste") || message.content.toLowerCase().includes("oh maldade")) {
        message.channel.send("<@851565126254723113>");
    }
    if (message.content.toLowerCase().includes("qara")) {
        message.channel.send("<@851565126254723113>");
    }
})

client.on('message', async message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    let quotes = fs.readFileSync('./quotes.json');
    quotes = JSON.parse(quotes);

    switch (command) {
        case 'addquote':
          quotes.array.push(args.join(' ')); 
          quotes = JSON.stringify(quotes);
          fs.writeFileSync('./quotes.json', quotes); 
          message.reply("quote adicionada ;)")   
          break;
        case 'getquote':
          const randomQuote = quotes.array[Math.floor(Math.random() * quotes.array.length)];
          message.channel.send(randomQuote);
          break;
        case 'lengthquotes':
          message.reply(quotes.array.length);
          break;
      }

    if        (command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if (command == 'pain') {
        client.commands.get('pain').execute(message, args);
    } else if (command == 'tetris') {
        client.commands.get('tetris').execute(message, args);
    } else if (command === 'rules') {
        client.commands.get('rules').execute(message, args, Discord);
    } else if (command === 'clear') {
        client.commands.get('clear').execute(message, args);
    } else if (command === 'kick') {
        client.commands.get('kick').execute(message, args);
    } else if (command === 'reactionrole') {
        client.commands.get('reactionrole').execute(message, args, Discord, client);
    } else if (command === 'chess') {
        client.commands.get('chess').execute(message, args);
    } else if (command === 'play') {
        client.commands.get('play').execute(message, args);
    } else if (command === 'leave') {
        client.commands.get('leave').execute(message, args);
    } else if (command === 'blendw') {
        client.commands.get('blendw').execute(message, args);
    } else if (command === 'serverinfo') {
        client.commands.get('serverinfo').execute(message, args, Discord);
    } else if (command === 'quote') {
        client.commands.get('quote').execute(message, args);
    } else if (command === 'help') {
        client.commands.get('help').execute(message, args, Discord, client);
    } else if (command === 'off') {
        client.commands.get('off').execute(message, args);
    } else if (command === 'record') {
        client.commands.get('record').execute(message, args, client);
    } else if (command === 'playrec') {
        client.commands.get('playrec').execute(message, args, client);
    //} else if (command === 'google') {
    //    client.commands.get('google').execute(message, args, client, Discord, axios);
    } else if (command === 'free') {
        client.commands.get('free').execute(message, args, client);
    } else if (command === 'hey') {
        client.commands.get('hey').execute(message, args, client);
    } else if (command === 'joke') {
        client.commands.get('joke').execute(message, args, axios);
    } else if (command === 'teste5') {
        client.commands.get('teste5').execute(message, args, axios);
    } else if (command === 'start') {
        client.commands.get('start').execute(message, args, Discord);
    } else if (command === 'answer1') {
        client.commands.get('answer1').execute(message, args, Discord);
    } else if (command === 'answer2') {
        client.commands.get('answer2').execute(message, args, Discord);
    } else if (command === 'answer3') {
        client.commands.get('answer3').execute(message, args, Discord);
    } else if (command === 'answer4') {
        client.commands.get('answer4').execute(message, args, Discord);
    } else if (command === 'answer5') {
        client.commands.get('answer5').execute(message, args, Discord);
    } else if (command === 'answer6') {
        client.commands.get('answer6').execute(message, args, Discord);
    } else if (command === 'answer7') {
        client.commands.get('answer7').execute(message, args, Discord);
    } else if (command === 'outro') {
        client.commands.get('outro').execute(message);
    } else if (command === 'ohfacil') {
        client.commands.get('ohfacil').execute(message);
    } else if (command === 'intro') {
        client.commands.get('intro').execute(message);
    } else if (command === 'joined') {
        client.commands.get('joined').execute(message);
    } else if (command === 'mudae') {
        client.commands.get('mudae').execute(message);
    } else if (command === 'timeout') {
        client.commands.get('timeout').execute(message, args, Discord);
    }
});



client.login(process.env.DISCORD_TOKEN);
