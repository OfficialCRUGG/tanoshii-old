module.exports = async (client) => {
    console.log(`[INFO] ${client.user.username} has succesfully started!`);
    client.user.setActivity(client.config.acitivityText, {type: client.config.acitivityType});
    client.user.setStatus(`${client.config.status}`);
};