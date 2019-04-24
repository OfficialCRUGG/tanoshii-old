// Source by Rhodium https://github.com/RhodiumBot/Rhodium/blob/master/commands/vserver/update.js

const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (prefix, messageArray, cmd, client, msg, args, author, guild, config, con, lang) => {
  let strings = require("../../lang/" + lang + ".json");
  if(config.developers.includes(author.id)) {
    let inputRaw = args.join(" ");
    let input = inputRaw.split("//");
    console.log(input.length)
    if(input.length == 1 || input.length > 2) {
      let embed = new Discord.RichEmbed()
      .setTitle(strings.commands.invalidArgs)
      .setDescription(strings.commands.obc.invalidArgs)
      .setColor(config.mainColor);
      return msg.channel.send(embed);
    }
    client.guilds.forEach(async (guild) => {
      let embed = new Discord.RichEmbed()
      .setTitle(input[0])
      .setDescription(input[1])
      .setColor(config.mainColor)
      .setFooter(strings.commands.obc.embedFooter.replace("%sender%", msg.author.tag));
      guild.owner.user.send(embed)
    });
  } else {
    return msg.reply(strings.commands.noPerms);
  }
};

module.exports.info = {
    name: "ownerbc"
};
