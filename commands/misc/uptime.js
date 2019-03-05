// Uptime code by Yui Bot https://github.com/Newtox/Yui/blob/master/commands/botinfo.js
// We don't just copy & paste code from other bot. We looked at the coded and used them to learn how to do stuff, we then coded the things ourself. I'd still like to credit them.
const Discord = require("discord.js");

module.exports.run = async (prefix, messageArray, cmd, client, message, args, author, guild, config) => {

      let t = new Date(client.uptime);
      let months = t.getUTCMonth();
      let days = t.getUTCDate() - 1;
      let minutes = t.getUTCMinutes();
      let hours = t.getUTCHours();
      let seconds = t.getUTCSeconds();
      let uptime = `**${months}**mo, **${days}**d, **${hours}**h, **${minutes}**m, **${seconds}**s`;

      let embed = new Discord.RichEmbed()
        .setTitle(`${config.name} - Uptime`)
        .setColor(config.mainColor)
        .setFooter(`${config.name} ● ${cmd} ● Requested by ${author.tag}`)
        .setDescription("[GitHub Repo](https://github.com/tanoshiibot/tanoshii/) | [Support Server](https://discord.gg/CheqYwR) | [Invite](https://discordapp.com/oauth2/authorize?client_id=522808943945318415&scope=bot&permissions=1073081855)")
        .addField("Uptime", uptime, true)
        return message.channel.send(embed);
};

module.exports.help = {
  name: "uptime"
};
