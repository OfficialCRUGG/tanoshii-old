const Discord = require("discord.js");
const isgd = require("isgd");

module.exports.run = async (prefix, messageArray, cmd, client, message, args, author, guild, config) => {
  let gicon = message.guild.iconURL;
  let gname = message.guild.name;
  let embed = new Discord.RichEmbed()
  .setTitle(gname + "Guild Information")
  .setColor(config.mainColor)
  .setThumbnail(gicon)
  .setFooter(`${config.name} ● ${cmd} miscellaneous ● Requested by ${author.tag}`)
  .addField("Guild name", message.guild.name, true)
  .addField("Created at", message.guild.createdAt, true)
  .addField("Guild id", message.guild.id, true)
  .addField("Member count", message.guild.memberCount, true)
  .addField("Guild owner", message.guild.owner.user.tag, true);
  if(message.guild.region === "eu-central") {
    embed.addField("Region", "Europe Central", true);
  } else {
    embed.addField("Region", message.guild.region, true);
  }
  return message.channel.send(embed);
};

module.exports.help = {
  name: "guildinfo"
};
