const Discord = require("discord.js");

module.exports.run = async (prefix, messageArray, cmd, client, message, args, author, guild, config, con) => {
    // con.connect(async (err) => {
    //     if(err) { throw err; }
    //     console.log("Connected to database!");
    //     let entry = await con.query("SELECT prefix FROM prefix WHERE guild=" + "449982492511043625");
    //     console.log(entry)
    //     // let prefix = entry.prefix;
    //     // console.log(prefix);
    // });
};

module.exports.help = {
    name: "prefix"
};
