////////////////////////////////////
//                                //
//    To be developed by Ron31    //
//                                //
////////////////////////////////////

// temporary index.js file
const config = require("./config.json")
const tokenFile = require("./token.json")
const Discord = require("discord.js");
const fs = require("fs");
const cmdDir = fs.readdirSync('./commands/');
const client = new Discord.Client({disableEveryone: true})
client.commands = new Discord.Collection();
client.groups = new Map;

for (let dir of cmdDir) {
    console.log("- Loading group " + dir);
    client.groups.push(dir);
    let group = fs.readdirSync(`./commands/${dir}`);
    for (let commandFile of group) {
        console.log("-- Loading command " + commandFile.split(".")[0] + " of " + dir)
        if (!commandFile.endsWith('.js')) return;
        let command = require(`../commands/${dir}/${commandFile}`);
        client.commands.set(commandFile.split('.')[0], [command, dir]);
    }
}

client.on("ready", async () => {
    console.log(`[INFO] ${bot.user.username} has succesfully started!`);
    client.user.setActivity(config.acitivityText, {type: config.acitivityType});
    client.user.setStatus(`${config.status}`);
});

client.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") {
        return message.channel.send(`[INFO] DM Commands are still work in progress`);
    }

    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let author = message.author
    let guild = message.guild
    if (!message.content.startsWith(prefix)) return;
    let commandFile = bot.commands.get(cmd.slice(prefix.length));
    if(commandFile) commandFile.run(prefix, messageArray, cmd, bot, message, args, author, guild, config)

});

client.login(tokenFile.token);
