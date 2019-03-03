const config = require("../config.json");

module.exports = async (client) => {
  console.log(`[INFO] ${client.user.username} has succesfully started!`);
  client.user.setStatus(`${client.config.status}`);
  let statuses = config.statuses;
  setInterval(function() {
    let statusRaw = statuses[Math.floor(Math.random() * statuses.length)];
    let status = statusRaw.replace("%prefix%", config.prefix).replace("%guilds%", client.guilds.size).replace("%users%", client.users.size);
    client.user.setActivity(status, {type: "WATCHING"});
  }, 5000);
};
