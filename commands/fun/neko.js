const Discord = require("discord.js");
const snek = require("snekfetch");
const api = "https://nekos.life/api/v2/img/neko";

module.exports.run = async (prefix, messageArray, cmd, client, message, args, author, guild, config) => {
    if(message.channel.nsfw) {
      let image = (await snek.get(api)).body.url;
      if(!image){
        return message.channel.send("The API of nekos.life is not reachable")
      };
      let embed = new Discord.RichEmbed()
      .setTitle(`${config.name} - Neko`)
      .setColor(config.mainColor)
      .setFooter(`Powered by nekos.life ● Requested by ${author.tag}`)
      .setImage(image);
      return message.channel.send(embed)
    } else {
      let embed = new Discord.RichEmbed()
      .setTitle(`${config.name} - Neko`)
      .setColor(config.mainColor)
      .setFooter(`Powered by nekos.life ● Requested by ${author.tag}`)
      .setDescription("While all images **should** be sfw, we can't guarantee that there won't be anything nsfw, so please use this command in an nsfw channel.")
      return message.channel.send(embed)
    }
};
module.exports.help = {
  name: "neko"
}
