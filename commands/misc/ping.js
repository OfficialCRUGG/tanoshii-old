const Discord = require("discord.js");

module.exports.run = async (prefix, messageArray, cmd, client, message, args, author, guild, config) => {
  const msg = await message.channel.send(`${client.guilds.get('522816995406643227').emojis.find("name", "loading")} Checking ping...`);
  if (msg.createdTimestamp - message.createdTimestamp > 300) {
    msg.edit(`${client.guilds.get('522816995406643227').emojis.find("name", "statusred")} The bot latency is ${msg.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  } else if (msg.createdTimestamp - message.createdTimestamp > 200) {
    msg.edit(`${client.guilds.get('522816995406643227').emojis.find("name", "statusyellow")} The bot latency is ${msg.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  } else if (msg.createdTimestamp - message.createdTimestamp <= 100) {
    msg.edit(`${client.guilds.get('522816995406643227').emojis.find("name", "statusgreen")} The bot latency is ${msg.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
}

module.exports.help = {
  name: "ping"
}