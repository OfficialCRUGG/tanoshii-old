const Discord = require("discord.js");
const snek = require("snekfetch");
const api = "https://random.dog/woof.json";

module.exports.run = async (prefix, messageArray, cmd, client, message, args, author, guild, config) => {
  let msg = await message.channel.send("Finding random dog picture...");
  let file = (await snek.get(api)).body.url;
  if(!file){
    message.delete();
    return message.channel.send("The API of random.dog is not reachable")
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
  name: "dog"
}
