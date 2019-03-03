const Discord = require("discord.js");
const snek = require("snekfetch");
const api = "http://aws.random.cat/meow";

module.exports.run = async (prefix, messageArray, cmd, client, message, args, author, guild, config) => {
  let msg = await message.channel.send("Finding random cat picture...");
  let file = (await snek.get(api)).body.file;
  if(!file){
    message.delete();
    return message.channel.send("The API of random.cat is not reachable")
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
  name: "cat"
}
