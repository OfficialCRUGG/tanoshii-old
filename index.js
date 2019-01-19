const config = require("./config.json");
const tokenFile = require("./token.json");
const Discord = require("discord.js");
const fs = require("fs");
const cmdDir = fs.readdirSync('./commands/');
const client = new Discord.Client({disableEveryone: true});
client.config = config;
client.commands = new Discord.Collection();
client.groups = [];

for (let dir of cmdDir) {
    console.log("[INFO] Loading command category " + dir ".");
    client.groups.push(dir);
    let group = fs.readdirSync(`./commands/${dir}`);
    for (let commandFile of group) {
        console.log("[INFO] Loading command " + dir + "/" + commandFile.split(".")[0] + ".");
        if (!commandFile.endsWith('.js')) return;
        let command = require(`./commands/${dir}/${commandFile}`);
        client.commands.set(commandFile.split('.')[0], command);
    }
}
fs.readdir("./events", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        console.log(`[INFO] Loading event ${file.split('.')[0]}.`);
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, event.bind(null, client));
    });
});


client.login(tokenFile.token);
