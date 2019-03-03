// Uptime & ping code by Yui Bot https://github.com/Newtox/Yui/blob/master/commands/botinfo.js
const Discord = require("discord.js");
const ping = require("ping")

module.exports.run = async (prefix, messageArray, cmd, client, message, args, author, guild, config) => {
    ping.promise.probe('discordapp.com').then(result => {

    let t = new Date(client.uptime);
    let months = t.getUTCMonth();
    let days = t.getUTCDate() - 1;
    let minutes = t.getUTCMinutes();
    let hours = t.getUTCHours();
    let seconds = t.getUTCSeconds();
    let uptime = `**${months}**mo, **${days}**d, **${hours}**h, **${minutes}**m, **${seconds}**s`;

    let embed = new Discord.RichEmbed()
      .setTitle("ManageMe - Bot Info")
      .setColor(config.mainColor)
      .setFooter(`${config.name} ● ${cmd} ● Requested by ${author.tag}`)
      .setDescription("[GitHub Repo](https://github.com/mm-discord/manageme/) | [Releases](http://files.manageme.ga/) | [Support Server](https://discord.gg/CheqYwR) | [Invite](https://discordapp.com/oauth2/authorize?client_id=522808943945318415&scope=bot&permissions=1073081855)")
      .addField("Bot", `**${client.user.username}**#${client.user.discriminator}`, true)
      .addField("Client ID", `${client.user.id}`, true)
      .addField("Developers", "**CRUGG**#0001 & **Ron31**#2338", false)
      .addField("Uptime", uptime, false)
      .addField("Development Software", "**Atom** (CRUGG), **JetBrains WebStorm** (Ron31)", false)
      .addField("Guilds", `**${client.guilds.size}** Guilds`, true)
      .addField("Users", `**${client.users.size}** Users`, true)
      .addField("Channels", `<:channels:551715947422154752> **${client.channels.filter((channels) => channels.type === "text").size}** text channels\n<:channels:551715947422154752> **${client.channels.filter((channels) => channels.type === "voice").size}** voice channels\n<:channels:551715947422154752> **${client.channels.filter((channels) => channels.type === "category").size}** categories\n<:channels:551715947422154752> **${client.channels.size}** total channels`, false)
      .addField("Dependencies", "<:package:551716343737614336> **discord.js** 11.4.2\n<:package:551716343737614336> **isgd** 1.1.3\n<:package:551716343737614336> **mysql2** 1.6.4\n<:package:551716343737614336> **node-http-ping** 0.3.1\n<:package:551716343737614336> **ping** 0.2.2\n<:package:551716343737614336> **sequelize** 4.42.0\n<:package:551716343737614336> **strict-uri-encode** 2.0.0")
      .addField("Ping", `<:connectivity:551715948290244608> discordapp.com: **${result.time}**ms \n<:connectivity:551715948290244608> Discord API: **${Math.round(client.ping)}**ms`, false)
      .addField("Credits", "<:user:551715946797203466> Some parts of code by **[Rhodium Bot](https://github.com/RhodiumBot/Rhodium)** & **[Yui Bot](https://github.com/Newtox/Yui)**\n<:user:551715946797203466> Icons by **Discord Inc.**, **[Ҝizuru キズル](https://discordemoji.com/user/350710888812249101)**, **CRUGG** & **[FontAwesome](https://fontawesome.com/)**", false);
    return message.channel.send(embed);
    });
};

module.exports.help = {
  name: "botinfo"
};
