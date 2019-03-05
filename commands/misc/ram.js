// ram usage by Rhodium Bot licensed under the Apache License 2.0 - https://github.com/RhodiumBot/Rhodium/
// We don't just copy & paste code from other bot. We looked at the coded and used them to learn how to do stuff, we then coded the things ourself. I'd still like to credit them.
const Discord = require("discord.js");
const os = require("os");

module.exports.run = async (prefix, messageArray, cmd, client, message, args, author, guild, config) => {

    let embed = new Discord.RichEmbed()
    .setTitle(`${config.name} - Ram Usage`)
    .setColor(config.mainColor)
    .setFooter(`${config.name} ● ${cmd} ● Requested by ${author.tag}`)
    .setDescription("[GitHub Repo](https://github.com/tanoshiibot/tanoshii/) | [Support Server](https://discord.gg/CheqYwR) | [Invite](https://discordapp.com/oauth2/authorize?client_id=522808943945318415&scope=bot&permissions=1073081855)")
    .addField("Performance", `RAM: ${((os.totalmem() - os.freemem()) / 1.074e+9).toFixed(2)}GiB / ${(os.totalmem() / 1.074e+9).toFixed(2)}GiB`)
    return message.channel.send(embed);
};

module.exports.help = {
  name: "ram"
};
