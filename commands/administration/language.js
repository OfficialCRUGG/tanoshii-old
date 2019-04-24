// Source by Rhodium https://github.com/RhodiumBot/Rhodium/blob/master/commands/vserver/update.js

const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (prefix, messageArray, cmd, client, msg, args, author, guild, config, con, lang) => {
    let strings = require("../../lang/" + lang + ".json");
    let languageList = "EnglishUS, Deutsch";
    if(args.length === 0) {
        let message = strings.commands.language.languageInfo.replace("%lang%", lang).replace("%command%", config.prefix + "language");
        return msg.channel.send(message);
    } else {
        if(!msg.member.hasPermission("MANAGE_SERVER")) return msg.reply(strings.commands.noPerms)
        let langs = JSON.parse(fs.readFileSync("./data/languages.json", "utf8"));

        if(args[0] === "Deutsch") {
            langs[msg.guild.id] = {
                lang: "de_de"
            };
            fs.writeFile("./data/languages.json", JSON.stringify(langs), (err) => {
                if (err) console.log(err);
            });
            return msg.reply(strings.commands.language.languageSet.success.replace("%lang%", "de_de"));
        } else if(args[0] === "EnglishUS") {
            langs[msg.guild.id] = {
                lang: "en_us"
            };
            fs.writeFile("./data/languages.json", JSON.stringify(langs), (err) => {
                if (err) console.log(err);
            });
            return msg.reply(strings.commands.language.languageSet.success.replace("%lang%", "en_us"));
        } else {
            return msg.reply(strings.commands.language.languageSet.notFound.replace("%langs%", languageList));
        }
    }
};

module.exports.info = {
    name: "language"
};
