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
const bot = new Discord.Client({disableEveryone: true})
bot.commands = new Discord.Collection();

fs.readdir("./commands", (err, files) => {
  if(err) console.lor(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("[INFO] No commands loaded!")
    return;
  }

jsfile.forEach((f, i) =>{
  let props = require(`./commands/${f}`);
  console.log(`[INFO] "${f}" loaded!`);
  bot.commands.set(props.help.name, props);
});

});

bot.on("ready", async () => {
    console.log(`[INFO] ${bot.user.username} has succesfully started!`);
    bot.user.setActivity(config.acitivityText, {type: config.acitivityType});
    bot.user.setStatus(`${config.status}`);
});

bot.on("message", async message => {
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

bot.login(tokenFile.token);
