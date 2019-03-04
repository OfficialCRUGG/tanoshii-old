const Discord = require("discord.js");
const snek = require("snekfetch");
const api = "http://api.crugg.de:3000/cute/random";
const amount = "http://api.crugg.de:3000/cute/amount";

module.exports.run = async (prefix, messageArray, cmd, client, message, args, author, guild, config) => {
  let file = (await snek.get(api)).body.url;
  let title = (await snek.get(api)).body.url;
  let source = (await snek.get(api)).body.sourceLink;
  let source = (await snek.get(amount)).body;
  if(!file){
    return message.channel.send("The API of crugg.de is not reachable")
  };
  let embed = new Discord.RichEmbed()
  .setTitle(title)
  .setDescription("Showing one out of " + amount + " cute pet pictures from [CRUGG's API](http://api.crugg.de:3000).")
  .setColor(config.mainColor)
  .setFooter(`Powered by crugg.de ● Requested by ${author.tag}`)
  .setImage(file)
  .setURL(source);
  return message.channel.send(embed)
};
module.exports.help = {
  name: "cute"
}
