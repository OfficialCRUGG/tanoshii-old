const Discord = require("discord.js");
const Encode = require("strict-uri-encode")

module.exports.run = async (prefix, messageArray, cmd, client, message, args, author, guild, config) => {
  let question = Encode(args.join(' '));
  let link = `https://www.google.com/search?q=${question}`;
  message.channel.send(`Okay. Just googled that for you. There you are: **<${link}>**`);
};

module.exports.help = {
  name: "gtfm"
};
