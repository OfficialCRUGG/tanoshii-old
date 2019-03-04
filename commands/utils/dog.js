const Discord = require("discord.js");
const snek = require("snekfetch");
const api = "https://random.dog/woof.json";

module.exports.run = async (prefix, messageArray, cmd, client, message, args, author, guild, config) => {
  let file = (await snek.get(api)).body.url;
  if(!file){
    return message.channel.send("The API of random.dog is not reachable")
  };
  let embed = new Discord.RichEmbed()
  .setTitle("ManageMe - Dog")
  .setColor(config.mainColor)
  .setFooter(`Powered by random.dog ● Requested by ${author.tag}`)
  .setImage(file);
  return message.channel.send(embed)
};
module.exports.help = {
  name: "dog"
}
