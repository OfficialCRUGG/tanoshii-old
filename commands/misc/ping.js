// ping code by Yui Bot https://github.com/Newtox/Yui/blob/master/commands/botinfo.js
// We don't just copy & paste code from other bot. We looked at the code and used them to learn how to do stuff, we then coded the things ourself. I'd still like to credit them.
const Discord = require("discord.js");
const ping = require("ping");

module.exports.run = async (prefix, messageArray, cmd, client, message, args, author, guild, config) => {
    ping.promise.probe("discordapp.com").then((result) => {

      let embed = new Discord.RichEmbed()
        .setTitle(`${config.name} - Ping`)
        .setColor(config.mainColor)
        .setFooter(`${config.name} ● ${cmd} ● Requested by ${author.tag}`)
        .setDescription("[GitHub Repo](https://github.com/tanoshiibot/tanoshii/) | [Support Server](https://discord.gg/CheqYwR) | [Invite](https://discordapp.com/oauth2/authorize?client_id=522808943945318415&scope=bot&permissions=1073081855)")
        .addField("Ping", `<:connectivity:551715948290244608> discordapp.com: **${result.time}**ms \n<:connectivity:551715948290244608> Discord API: **${Math.round(client.ping)}**ms`, false)
        return message.channel.send(embed);
    });
};

module.exports.help = {
  name: "ping"
};
