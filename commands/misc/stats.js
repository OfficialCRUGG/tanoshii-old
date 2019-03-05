// Uptime & ping code by Yui Bot https://github.com/Newtox/Yui/blob/master/commands/botinfo.js
// Dependencies, ram usage & nodejs version by Rhodium Bot licensed under the Apache License 2.0 - https://github.com/RhodiumBot/Rhodium/
// We don't just copy & paste code from other bot. We looked at the coded and used them to learn how to do stuff, we then coded the things ourself. I'd still like to credit them.
const Discord = require("discord.js");
const os = require("os");
//const sysi = require("systeminformation");
const ping = require("ping");
const packages = require("../../package.json");

module.exports.run = async (prefix, messageArray, cmd, client, message, args, author, guild, config) => {
    ping.promise.probe("discordapp.com").then((result) => {

      let t = new Date(client.uptime);
      let months = t.getUTCMonth();
      let days = t.getUTCDate() - 1;
      let minutes = t.getUTCMinutes();
      let hours = t.getUTCHours();
      let seconds = t.getUTCSeconds();
      let uptime = `**${months}**mo, **${days}**d, **${hours}**h, **${minutes}**m, **${seconds}**s`;

      let dependencies = "";
      Object.entries(packages.dependencies).forEach((dependency) => {
        dependencies += `<:package:551716343737614336> **[${dependency[0]}](https://npmjs.org/package/${dependency[0]})** ${dependency[1]}\n`
      });

      let embed = new Discord.RichEmbed()
        .setTitle(`${config.name} - Bot Info`)
        .setColor(config.mainColor)
        .setFooter(`${config.name} ● ${cmd} ● Requested by ${author.tag}`)
        .setDescription("[GitHub Repo](https://github.com/tanoshiibot/tanoshii/) | [Support Server](https://discord.gg/CheqYwR) | [Invite](https://discordapp.com/oauth2/authorize?client_id=522808943945318415&scope=bot&permissions=1073081855)")
        .addField("Bot", `**${client.user.username}**#${client.user.discriminator}`, true)
        .addField("Client ID", `${client.user.id}`, true)
        .addField("Developers", "**CRUGG**#0001 & **Ron31**#2338", false)
        .addField("Uptime", uptime, true)
        .addField("node.js Version", process.version, true)
        .addField("Development Software", "**Atom** (CRUGG), **JetBrains WebStorm** (Ron31)", false)
        .addField("Guilds", `**${client.guilds.size}** Guilds`, true)
        .addField("Users", `**${client.users.size}** Users`, true)
        .addField("Performance", `RAM: ${((os.totalmem() - os.freemem()) / 1.074e+9).toFixed(2)}GiB / ${(os.totalmem() / 1.074e+9).toFixed(2)}GiB\n`)
        .addField("Channels", `<:channels:551715947422154752> **${client.channels.filter((channels) => channels.type === "text").size}** text channels\n<:channels:551715947422154752> **${client.channels.filter((channels) => channels.type === "voice").size}** voice channels\n<:channels:551715947422154752> **${client.channels.filter((channels) => channels.type === "category").size}** categories\n<:channels:551715947422154752> **${client.channels.size}** total channels`, false)
        .addField("Dependencies", dependencies)
        .addField("Ping", `<:connectivity:551715948290244608> discordapp.com: **${result.time}**ms \n<:connectivity:551715948290244608> Discord API: **${Math.round(client.ping)}**ms`, false)
        .addField("Credits", "<:user:551715946797203466> Some parts of code by **[Rhodium Bot](https://github.com/RhodiumBot/Rhodium)** & **[Yui Bot](https://github.com/Newtox/Yui)**\n<:user:551715946797203466> Icons by **Discord Inc.**, **[Ҝizuru キズル](https://discordemoji.com/user/350710888812249101)**, **CRUGG** & **[FontAwesome](https://fontawesome.com/)**", false);
        return message.channel.send(embed);
    });
};

module.exports.help = {
  name: "botinfo"
};
