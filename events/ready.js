module.exports = async (client) => {
  console.log(`[INFO] ${client.user.username} has succesfully started!`);
  client.user.setStatus(`${client.config.status}`);
  let statuses = [
    `over ${client.guilds.size} guilds.`,
    `for ${config.prefix}help`,
    `over ${client.users.size} users.`
  ]
  setInterval(function() {
    let status = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(status, {type: "WATCHING"})
  }, 5000)
};
