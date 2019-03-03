const Discord = require("discord.js");
const urban = require("urban")

module.exports.run = async (prefix, messageArray, cmd, client, message, args, author, guild, config) => {
  urban.random().first(json => {
    let embed = new Discord.RichEmbed()
    .setTitle(json.word)
    .setURL(json.permalink)
    .setColor(config.mainColor)
    .setDescription("Definition by *" + json.author + "*:\n**" + json.definition + "**")
    .addField("Example", json.example, false)
    .addField("Upvotes", json.thumbs_up, true)
    .addField("Downvotes", json.thumbs_down, true)
    .setFooter(`${config.name} ● ${cmd} ● Requested by ${author.tag}`);
    return message.channel.send(embed);
  });
};
module.exports.help = {
  name: "randomurban"
}
