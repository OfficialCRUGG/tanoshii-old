// Uptime & ping code by Yui Bot https://github.com/Newtox/Yui/blob/master/commands/botinfo.js
// Dependencies, ram usage & nodejs version by Rhodium Bot licensed under the Apache License 2.0 - https://github.com/RhodiumBot/Rhodium/
// We don't just copy & paste code from other bot. We looked at the coded and used them to learn how to do stuff, we then coded the things ourself. I'd still like to credit them.
const Discord = require("discord.js");

module.exports.run = async (prefix, messageArray, cmd, client, message, args, author, guild, config) => {

    let embed = new Discord.RichEmbed()
    .setTitle(`${config.name} - Bot Info`)
    .setColor(config.mainColor)
    .setFooter(`${config.name} ● ${cmd} ● Requested by ${author.tag}`)
    .setDescription("[GitHub Repo](https://github.com/tanoshiibot/tanoshii/) | [Support Server](https://discord.gg/CheqYwR) | [Invite](https://discordapp.com/oauth2/authorize?client_id=522808943945318415&scope=bot&permissions=1073081855)")
    .addField("Guilds", `**${client.guilds.size}** Guilds`, true)
    .addField("Users", `**${client.users.size}** Users`, true)
    .addField("Channels", `<:channels:551715947422154752> **${client.channels.filter((channels) => channels.type === "text").size}** text channels\n<:channels:551715947422154752> **${client.channels.filter((channels) => channels.type === "voice").size}** voice channels\n<:channels:551715947422154752> **${client.channels.filter((channels) => channels.type === "category").size}** categories\n<:channels:551715947422154752> **${client.channels.size}** total channels`, true)
    .addField("node.js Version", process.version, true)
      return message.channel.send(embed);
};

module.exports.help = {
  name: "stats"
};
