# Cranbot
 A Discord bot made possible with [Discord.js](https://discordjs.guide) and [Node.js](https://nodejs.org). &nbsp;

 **Note: This is a private bot, you can't add it to your own server, but you can download and host it yourself, take this as a template, also I strongly recommend checking the official [Discord.js Documentation](https://discordjs.guide) for more information and code explanation.**

## Cranbot 1.0.0 Roadmap:
- [x] Status message.
- [x] Replies.
- [x] Rich presence.
- [ ] Dependancies, documentation and licensing fix.
- [ ] Fix embed content.
- [ ] Tutorial (how to section).

## Cranbot 2.0 POSSIBLE Roadmap:
- [ ] Display custom status based on day/month of the year.
- [ ] Play songs through Youtube.
- [ ] Display lyrics for songs.

## How to:
* (NOT READY) This will be fixed upon release (1.0.0).
* Download [Node.js](https://nodejs.org/en/download/).
* Create a folder
* Under the folder do `npm init`.
* Then `npm install discord.js`.
* Go to [Discord Developer](https://discordapp.com/developers/applications/). Log-in to your account and create a Application.
* Under settings go to BOTS, create your custom bot and COPY your token.
* On your main folder, create a file named `config.json`, and paste the following:&nbsp;
    ```{
	"prefix": "(!) ", //Note: this is an OPTIONAL command to call your bot, you can delete this line. 
	"token": 'YOUR DISCORD TOKEN HERE'
    }```

* to log-in to your bot, go to cmd, type `cd C:\USER\INDEX.JS LOCATION`, and then `node index.js`, if it works you will receive something like "I'm active".
