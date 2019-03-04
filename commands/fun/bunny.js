const Discord = require("discord.js");
const snek = require("snekfetch");
const api = "https://api.bunnies.io/v2/loop/random/?media=gif";

module.exports.run = async (prefix, messageArray, cmd, client, message, args, author, guild, config) => {
  let file = (await snek.get(api)).body.media.gif;
  if(!file){
    return message.channel.send("The API of bunnies.io is not reachable")
  };
  let embed = new Discord.RichEmbed()
  .setTitle(`${config.name} - Bunny`)
  .setColor(config.mainColor)
  .setFooter(`Powered by bunnies.io ● Requested by ${author.tag}`)
  .setImage(file);
  return message.channel.send(embed)
};
module.exports.help = {
  name: "bunny"
}
