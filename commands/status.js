module.exports = {
    name: 'status',
    description: "set bot custom status",
    execute(message, args){ 
        month = getMonth(); //0 = january
        day = getDate(); //1 = day 1 
        if (month == 9) {
            bot.user.setActivity("'It's Halloween! | Use cb help")
        }
        else if(month == 11 && day > 26){
            bot.user.setActivity('Merry Christmas! | Use cb help')
        }
        else{
            bot.user.setActivity('Use cb help')
        }
        var currentActivity = + fixedMsg;
        bot.user.setActivity('Happy Halloween! | Use cb help')
    }
}