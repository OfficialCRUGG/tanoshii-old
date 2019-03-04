const Discord = require("discord.js");
const snek = require("snekfetch");
const api = "https://api.desktoppr.co/1/wallpapers/random";

module.exports.run = async (prefix, messageArray, cmd, client, message, args, author, guild, config) => {
  let msg = await message.channel.send(client.emojis.get("535484057497108482") + " Finding random wallpaper...")
  let file = (await snek.get(api)).body.response.image.url;
  let link = (await snek.get(api)).body.response.url;
  let uploader = (await snek.get(api)).body.response.uploader;
  let likes = (await snek.get(api)).body.response.likes_count;
  let height = (await snek.get(api)).body.response.height;
  let width = (await snek.get(api)).body.response.width;
  if(!file){
    return message.channel.send("The API of desktoppr.co is not reachable")
  };
  let embed = new Discord.RichEmbed()
  .setTitle(`${config.name} - Random Wallpaper`)
  .setURL(link)
  .setColor(config.mainColor)
  .setFooter(`Powered by desktoppr.co ● Requested by ${author.tag}`)
  if(uploader === "null") {
    embed.addField("Uploaded by", "Unknown", false)
  } else {
    embed.addField("Uploaded by", uploader, false)
  }
  if(likes === 1) {
    embed.addField("Like", likes, false)
  } else {
    embed.addField("Likes", likes, false)
  }
  embed.addField("Height", height, true)
  .addField("Width", width, true)
  .setImage(file);
  msg.delete();
  return message.channel.send(embed)
};
module.exports.help = {
  name: "randomwallpaper"
}
