// Source by Rhodium https://github.com/RhodiumBot/Rhodium/blob/master/commands/vserver/update.js

const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (prefix, messageArray, cmd, client, msg, args, author, guild, config) => {
  if(config.developers.includes(author.id)) {
    let inputRaw = args.join(" ");
    let input = inputRaw.split("//");
    console.log(input.length)
    if(input.length == 1 || input.length > 2) {
      let embed = new Discord.RichEmbed()
      .setTitle("Invalid arguments")
      .setDescription("You have not entered 2 arguments seperated by '//'s")
      .setColor(config.mainColor);
      return msg.channel.send(embed);
    }
    client.guilds.forEach(async (guild) => {
      let embed = new Discord.RichEmbed()
      .setTitle(input[0])
      .setDescription(input[1])
      .setColor(config.mainColor)
      .setFooter("Guild owner broadcast sent by " + msg.author.tag);
      guild.owner.user.send(embed)
    });
  } else {
    let embed = new Discord.RichEmbed()
    .setTitle("No Permissions")
    .setDescription("You don't have permissions to execute that command.")
    .setColor(config.mainColor);
    return msg.channel.send(embed);
  }
};

module.exports.info = {
    name: "ownerbc"
};
