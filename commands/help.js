module.exports = {
    name: 'help',
    description: "show commands",
    execute(message, args){
        const helpEmbed = new RichEmbed()
        .setColor('#a50000')
        .setTitle("Commands")
        .setDescription('ping, sound, kira')
        .addBlankField()
        .setTitle("Advanced")
        .setDescription('Use cb help <Command> for more information about a command');

        message.channel.send(helpEmbed);
    }
}