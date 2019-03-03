const Discord = require("discord.js");
const snek = require("snekfetch");
const api = "https://api.bunnies.io/v2/loop/random/?media=gif";

module.exports.run = async (prefix, messageArray, cmd, client, message, args, author, guild, config) => {
  let msg = await message.channel.send("Finding random bunny picture... (If there is still nothing sent after 5-10 seconds, try again)");
  let file = (await snek.get(api)).body.media.gif;
  if(!file){
    message.delete();
    return message.channel.send("The API of bunnies.io is not reachable")
  };

  await message.channel.send({files: [
    {
      attachment: file,
      name: file.split("/").pop()
    }
  ]});
  msg.delete();
};
module.exports.help = {
  name: "bunny"
}
