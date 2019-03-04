const Discord = require("discord.js");
const encode = require("strict-uri-encode");

module.exports.run = async (prefix, messageArray, cmd, client, message, args, author, guild, config) => {
  let text = encode(args.join(" "));
  let qrcode = `https://api.qrserver.com/v1/create-qr-code/?data=${text}&size=600x600&format=png&qzone=1`;
  let embed = new Discord.RichEmbed()
  .setTitle(`${config.name} - QR Code`)
  .setColor(config.mainColor)
  .setFooter(`Powered by goqr.me ● Requested by ${author.tag}`)
  .setImage(qrcode);
  return message.channel.send(embed)
};
module.exports.help = {
  name: "text2qr"
}
