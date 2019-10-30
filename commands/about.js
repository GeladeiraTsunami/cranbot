module.exports = {
    name: 'about',
    description: "My version, credits",
    execute(message, args){
        const Version = require('./package-lock.json')
        message.channel.send(package-lock.version)
    }
}