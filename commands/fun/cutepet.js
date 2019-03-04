const Discord = require("discord.js");
const snek = require("snekfetch");
const api = "http://api.crugg.de:3000/cutepets/random";
const amountapi = "http://api.crugg.de:3000/cutepets/amount";

module.exports.run = async (prefix, messageArray, cmd, client, message, args, author, guild, config) => {
  let sneked = (await snek.get(api))
  let file = sneked.body.url;
  let title = sneked.body.title;
  let source = sneked.body.sourceLink;
  let amount = (await snek.get(amountapi)).body;
  if(!file){
    return message.channel.send("The API of crugg.de is not reachable")
  };
  let embed = new Discord.RichEmbed()
  .setTitle(title)
  .setDescription("Showing one out of " + amount + " cute pet pictures from [CRUGG's api](http://api.crugg.de:3000).")
  .setColor(config.mainColor)
  .setFooter(`Powered by crugg.de ● Requested by ${author.tag}`)
  .setImage(file)
  .setURL(source);
  return message.channel.send(embed)
};
module.exports.help = {
  name: "cutepet"
}
