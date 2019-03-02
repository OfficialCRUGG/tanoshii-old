const Discord = require("discord.js");

function sendHelp(config, client, cmd, author, message) {
  let embed = new Discord.RichEmbed()
    .setTitle("ManageMe - Help")
    .setColor(config.mainColor)
    .setFooter(`${config.name} ● ${cmd} ● Requested by ${author.tag}`)
    .setDescription(`Please use ${config.prefix}help <category> to see the commands`)
    .addField("Moderation", "View all moderation commands.", true)
    .addField("Economy", "View all economy commands.", true)
    .addField("Experience", "View all experience commands.", true)
    .addField("Developer", "View commands availible to developers.", true)
    .addField("Miscellaneous", "View all other commands.", true)
  return message.channel.send(embed);
}

function sendModeration(config, client, cmd, author, message) {
  let embed = new Discord.RichEmbed()
    .setTitle("ManageMe - Moderation commands")
    .setColor(config.mainColor)
    .setFooter(`${config.name} ● ${cmd} moderation ● Requested by ${author.tag}`)
    .addField("No commands", "There are currently no commands in this category")
  return message.channel.send(embed);
}

function sendEconomy(config, client, cmd, author, message) {
  let embed = new Discord.RichEmbed()
    .setTitle("ManageMe - Economy commands")
    .setColor(config.mainColor)
    .setFooter(`${config.name} ● ${cmd} economy ● Requested by ${author.tag}`)
    .addField("No commands", "There are currently no commands in this category")
  return message.channel.send(embed);
}

function sendExp(config, client, cmd, author, message) {
  let embed = new Discord.RichEmbed()
    .setTitle("ManageMe - Experience commands")
    .setColor(config.mainColor)
    .setFooter(`${config.name} ● ${cmd} experience ● Requested by ${author.tag}`)
    .addField("No commands", "There are currently no commands in this category")
  return message.channel.send(embed);
}

function sendBotDev(config, client, cmd, author, message) {
  let embed = new Discord.RichEmbed()
    .setTitle("ManageMe - Bot developer commands")
    .setColor(config.mainColor)
    .setFooter(`${config.name} ● ${cmd} developer ● Requested by ${author.tag}`)
    .addField("No commands", "There are currently no commands in this category")
  return message.channel.send(embed);
}

function sendMisc(config, client, cmd, author, message) {
  let embed = new Discord.RichEmbed()
    .setTitle("ManageMe - Miscellaneous commands")
    .setColor(config.mainColor)
    .setFooter(`${config.name} ● ${cmd} miscellaneous ● Requested by ${author.tag}`)
    .addField(`${config.prefix}ping`, "View respond latency and API latency.", true)
    .addField(`${config.prefix}devmessage`, "Send a message to all developers. (Used for bug reports, suggestions etc.)", true)
    .addField(`${config.prefix}gtfm`, "Google that for me (If you're too lazy to google)", true)
    .addField(`${config.prefix}lmgtfy`, "Let me google that for you (If someone else is too lazy to google)", true)
  return message.channel.send(embed);
}

module.exports.run = async (prefix, messageArray, cmd, client, message, args, author, guild, config) => {
  if (args.length == 0) {
    return (sendHelp(config, client, cmd, author, message))
  } else if (args.length == 1) {
    if (args[0] == "moderation" || args[0] == "mod") {
      return (sendModeration(config, client, cmd, author, message))
    } else if (args[0] == "economy" || args[0] == "eco" || args[0] == "ec") {
      return (sendEconomy(config, client, cmd, author, message))
    } else if (args[0] == "experience" || args[0] == "xp" || args[0] == "exp") {
      return (sendExp(config, client, cmd, author, message))
    } else if (args[0] == "developer" || args[0] == "dev") {
      return (sendBotDev(config, client, cmd, author, message))
    } else if (args[0] == "miscellaneous" || args[0] == "misc") {
      return (sendMisc(config, client, cmd, author, message))
    } else {
      return (sendHelp(config, client, cmd, author, message))
    }
  } else {
    return (sendHelp(config, client, cmd, author, message))
  }
}

module.exports.help = {
  name: "help"
}
