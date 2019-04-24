const fs = require("fs");

module.exports = async (client, message) => {

  var { con } = require("../bot.js");

  if (message.author.bot) {
    return;
  }
  if (message.channel.type === "dm") {
    return message.channel.send("DM Commands are still work in progress");
  }

  let prefix = client.config.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let author = message.author;
  let guild = message.guild;
  if (!message.content.startsWith(prefix)) {
    return;
  }

  let langs = JSON.parse(fs.readFileSync("./data/languages.json", "utf8"));
  if(!langs[message.guild.id]) {
    langs[message.guild.id] = {
      lang: "en_us"
    }
  }

  let lang = langs[message.guild.id].lang;

  let commandFile = client.commands.get(cmd.slice(prefix.length));
  if (commandFile) {
    commandFile.run(prefix, messageArray, cmd, client, message, args, author, guild, client.config, con, lang);
 }
};
