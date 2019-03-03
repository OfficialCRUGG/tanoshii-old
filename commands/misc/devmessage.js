// This command is based on the Rhodium Bot licensed under the Apache License 2.0 - https://github.com/RhodiumBot/Rhodium/blob/master/commands/core/devmsg.js

const Discord = require("discord.js");

function sendSuccess(config, client, cmd, author, message) {
  let embed = new Discord.RichEmbed()
  .setTitle("Sent.")
  .setColor(config.mainColor)
  .setDescription("Your message has been sent to the developers.")
  .setFooter(`${config.name} ● ${cmd} ● Requested by ${author.tag}`);
  return message.channel.send(embed);
};

function sendError(config, client, cmd, author, message) {
  let embed = new Discord.RichEmbed()
  .setTitle("An error occured.")
  .setColor(config.mainColor)
  .setDescription("It appears you haven't entered a message.")
  .setFooter(`${config.name} ● ${cmd} ● Requested by ${author.tag}`);
  return message.channel.send(embed);
};

module.exports.run = async (prefix, messageArray, cmd, client, message, args, author, guild, config) => {
  if(args.join(" ") !== ""){
        client.config.developers.forEach((d) => {
          let embed = new Discord.RichEmbed()
          .setTitle("New Developer Message")
          .setColor(config.mainColor)
          .setDescription("```" + args.join(" ") + "```")
          .setFooter(`${config.name} ● Sent by ${author.tag} ● User ID: ${author.id}`);
          return client.users.get(d).send(embed);
        });
        sendSuccess(config, client, cmd, author, message);
        message.delete();
    } else {
      sendError(config, client, cmd, author, message);
    }
};

module.exports.help = {
  name: "devmessage"
};
