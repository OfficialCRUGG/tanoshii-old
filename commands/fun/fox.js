const Discord = require("discord.js");
const snek = require("snekfetch");
const api = "https://randomfox.ca/floof/";

module.exports.run = async (prefix, messageArray, cmd, client, message, args, author, guild, config) => {
  let file = (await snek.get(api)).body.image;
  if(!file){
    return message.channel.send("The API of randomfox.ca is not reachable")
  };
  let embed = new Discord.RichEmbed()
  .setTitle(`${config.name} - Fox`)
  .setColor(config.mainColor)
  .setFooter(`Powered by randomfox.ca ● Requested by ${author.tag}`)
  .setImage(file);
  return message.channel.send(embed)
};
module.exports.help = {
  name: "fox"
}
