// Uptime & ping code by Yui Bot https://github.com/Newtox/Yui/blob/master/commands/botinfo.js
// Dependencies, ram usage & nodejs version by Rhodium Bot licensed under the Apache License 2.0 - https://github.com/RhodiumBot/Rhodium/
// We don't just copy & paste code from other bot. We looked at the coded and used them to learn how to do stuff, we then coded the things ourself. I'd still like to credit them.
const Discord = require("discord.js");
const packages = require("../../package.json");

module.exports.run = async (prefix, messageArray, cmd, client, message, args, author, guild, config) => {

    let dependencies = "";
    Object.entries(packages.dependencies).forEach((dependency) => {
      dependencies += `<:package:551716343737614336> **[${dependency[0]}](https://npmjs.org/package/${dependency[0]})** ${dependency[1]}\n`
    });

    let embed = new Discord.RichEmbed()
    .setTitle(`${config.name} - Bot Info`)
    .setColor(config.mainColor)
    .setFooter(`${config.name} ● ${cmd} ● Requested by ${author.tag}`)
    .setDescription("[GitHub Repo](https://github.com/tanoshiibot/tanoshii/) | [Support Server](https://discord.gg/CheqYwR) | [Invite](https://discordapp.com/oauth2/authorize?client_id=522808943945318415&scope=bot&permissions=1073081855)")
    .addField("Dependencies", dependencies)
    return message.channel.send(embed);
};

module.exports.help = {
  name: "botinfo"
};
