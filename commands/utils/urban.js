const Discord = require("discord.js");
const urban = require("urban")

module.exports.run = async (prefix, messageArray, cmd, client, message, args, author, guild, config) => {
  if(args.length < 1) {
    let embed = new Discord.RichEmbed().setTitle("An error occured.").setColor(config.mainColor).setDescription("It appears you haven't entered a search phrase.").setFooter(`${config.name} ● ${cmd} ● Requested by ${author.tag}`);
    return message.channel.send(embed);
  }
  let str = args.join(" ");
  urban(str).first(json => {
    if(!json) {
      let embed = new Discord.RichEmbed().setTitle("No results.").setColor(config.mainColor).setDescription("No results have been found.").setFooter(`${config.name} ● ${cmd} ● Requested by ${author.tag}`);
      return message.channel.send(embed);
    };
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
  name: "urban"
}
