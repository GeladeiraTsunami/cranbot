const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();

const fs = require('fs');
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log("I'm ready baby")
})

client.on('ready', () => {
    client.user.setActivity("It's Halloween! | Use cb help to KILL ME") // Change status to status.js3
});

client.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {

        case "about":
            client.commands.get('about').execute(message, args);
        break;

        case "ping":
            client.commands.get('ping').execute(message, args);
        break;

        case "help":
            client.commands.get('help').execute(message, args);
        break;

        
        case "kira":
            client.commands.get('kira').execute(message, args);
        break;
    }

});

client.login(config.token);