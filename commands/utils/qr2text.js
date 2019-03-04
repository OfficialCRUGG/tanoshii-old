const Discord = require("discord.js");
const snek = require("snekfetch");
const encode = require("strict-uri-encode");

module.exports.run = async (prefix, messageArray, cmd, client, message, args, author, guild, config) => {
  let imageUrl = encode(args.join(" "));
  let url = `https://api.qrserver.com/v1/read-qr-code/?fileurl=${imageUrl}`;
  let text = (await snek.get(url)).body[0].symbol[0].data;
  console.log(text);
  if(!text){
    return message.channel.send("You haven't entered a valid link to a QR code or the API of goqr.me is not reachable")
  };
  let embed = new Discord.RichEmbed()
  .setTitle(`${config.name} - QR Code`)
  .setColor(config.mainColor)
  .setFooter(`Powered by goqr.me ● Requested by ${author.tag}`)
  .setDescription("```" + text + "```")
  return message.channel.send(embed)
};
module.exports.help = {
  name: "qr2text"
}
