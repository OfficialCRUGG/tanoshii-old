const Discord = require("discord.js");
const snek = require("snekfetch");
const api = "https://nekos.life/api/v2/cat";

module.exports.run = async (prefix, messageArray, cmd, client, message, args, author, guild, config) => {
  let catface = (await snek.get(api)).body.cat;
  if(!catface){
    return message.channel.send("The API of nekos.life is not reachable")
  };
  let embed = new Discord.RichEmbed()
  .setTitle("ManageMe - Catface")
  .setColor(config.mainColor)
  .setFooter(`Powered by nekos.life ● Requested by ${author.tag}`)
  .setDescription("```" + catface + "```");
  return message.channel.send(embed)
};
module.exports.help = {
  name: "catface"
}
