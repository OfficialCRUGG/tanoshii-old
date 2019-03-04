const Discord = require("discord.js");
const snek = require("snekfetch");
const api = "http://aws.random.cat/meow";

module.exports.run = async (prefix, messageArray, cmd, client, message, args, author, guild, config) => {
  let file = (await snek.get(api)).body.file;
  if(!file){
    return message.channel.send("The API of random.cat is not reachable")
  };
  let embed = new Discord.RichEmbed()
  .setTitle(`${config.name} - Cat`)
  .setColor(config.mainColor)
  .setFooter(`Powered by random.cat ● Requested by ${author.tag}`)
  .setImage(file);
  return message.channel.send(embed)
};
module.exports.help = {
  name: "cat"
}
