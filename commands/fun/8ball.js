const Discord = require("discord.js");
const snek = require("snekfetch");
const api = "https://nekos.life/api/v2/8ball";

module.exports.run = async (prefix, messageArray, cmd, client, message, args, author, guild, config) => {
  if(args.length < 1) {
    let embed = new Discord.RichEmbed()
    .setTitle(config.name)
    .setColor(config.mainColor)
    .setFooter(`Powered by nekos.life ● Requested by ${author.tag}`)
    .setDescription("Please enter a question.")
    return message.channel.send(embed)
  } else {
    let image = (await snek.get(api)).body.url;
    if(!image){
      return message.channel.send("The API of nekos.life is not reachable")
    };
    let embed = new Discord.RichEmbed()
    .setTitle(`${config.name} - 8 Ball`)
    .setColor(config.mainColor)
    .setFooter(`Powered by nekos.life ● Requested by ${author.tag}`)
    .setDescription("You: " + args.join(" ") + "\nMagic 8 Ball:")
    .setImage(image);
    return message.channel.send(embed)
  }
};
module.exports.help = {
  name: "8ball"
}
