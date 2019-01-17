module.export = async (client, message) => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") {
        return message.channel.send(`[INFO] DM Commands are still work in progress`);
    }

    let prefix = client.config.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let author = message.author;
    let guild = message.guild;
    if (!message.content.startsWith(prefix)) return;
    let commandFile = client.commands.get(cmd.slice(prefix.length));
    if(commandFile) commandFile.run(prefix, messageArray, cmd, client, message, args, author, guild, client.config)

};