const Discord = require("discord.js");
const isgd = require("isgd");

module.exports.run = async (prefix, messageArray, cmd, client, message, args, author, guild, config) => {
  if(args.length === 0) {
    let embed = new Discord.RichEmbed().setTitle("ManageMe - isgd").setColor(config.mainColor).setFooter(`${config.name} ● ${cmd} ● Requested by ${author.tag}`).setDescription(`You used this command wrong. Please use ${config.prefix}isgd <URL>`);
    return message.channel.send(embed);
  } else if(args.length === 1) {
    isgd.shorten(args[0], function(res) {
      message.channel.send(`Your link has been shortened. There you are: **<${res}>**`);
    });
  } else {
    let embed = new Discord.RichEmbed().setTitle("ManageMe - isgd").setColor(config.mainColor).setFooter(`${config.name} ● ${cmd} ● Requested by ${author.tag}`).setDescription(`You used this command wrong. Please use ${config.prefix}isgd <URL>`);
    return message.channel.send(embed);
  }
};

module.exports.help = {
  name: "isgd"
};
