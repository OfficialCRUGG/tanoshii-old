const Discord = require("discord.js");
const encode = require("strict-uri-encode");
const isgd = require("isgd");

module.exports.run = async (prefix, messageArray, cmd, client, message, args, author, guild, config) => {
  let question = encode(args.join(" "));
  let link = `https://www.google.com/search?q=${question}`;
  isgd.shorten(link, function(res) {
    message.channel.send(`Okay. Just googled that for you. There you are: **<${res}>**`);
  });
};

module.exports.help = {
  name: "gtfm"
};
