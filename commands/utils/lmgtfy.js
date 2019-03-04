const Discord = require("discord.js");
const encode = require("strict-uri-encode");
const isgd = require("isgd");

module.exports.run = async (prefix, messageArray, cmd, client, message, args, author, guild, config) => {
  let question = encode(args.join(" "));
  let link = `http://www.lmgtfy.com/?q=${question}`;
  isgd.shorten(link, function(res) {
    message.channel.send(`**<${res}>**`);
  });
};

module.exports.help = {
  name: "lmgtfy"
};
