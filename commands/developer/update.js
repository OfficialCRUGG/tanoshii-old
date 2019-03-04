// Source by Rhodium https://github.com/RhodiumBot/Rhodium/blob/master/commands/vserver/update.js

const downloadUpdate = require("../../utils/downloadUpdate.js")
const installDependencies = require('../../utils/installDependencies.js');

const Discord = require("discord.js");
const { exec } = require("child_process");

module.exports.run = async () => {
  if(author.id = "228965621478588416" || "224084384054116352") {
    downloadUpdate()
    .then(installDependencies())
    .then(process.exit(0));
  } else {
    message.reply("No permissions")
  }
};
module.exports.help = {
  name: "update"
}


const { exec } = require("child_process");
const { RichEmbed } = require("discord.js");
const fs = require("fs");

module.exports.run = async (prefix, messageArray, cmd, client, msg, args, author, guild, config) => {
  if(author.id = "228965621478588416" || "224084384054116352") {
    let emb = new RichEmbed()
        .setTitle(`Update initiated by ${msg.author.tag}`)
        .setDescription("Updating...");

    let embmsg = await msg.channel.send(emb);
    client.user.setPresence({status: "online", game: {name: "Applying an update."}});

    exec("git pull", (err, out, stderr) => {
        if(!err && stderr === ""){
            console.log(out);
            emb.description = emb.description.replace(`${client.vars.emojiIcons.animated.loading} Pulling`, `${client.vars.emojiIcons.check} Pulling`)
            embmsg.edit(emb);
            exec("pm2 restart all", (err, out, stderr) => {
                if(err && stderr !== "") {
                  let emb2 = new RichEmbed()
                  .setTitle(`Update failed`)
                  .setDescription(`There was an error\n${out}\n${stderr}`);
                  let embmsg2 = await msg.channel.send(emb2);
                }
            })
        }
        else {
          let emb3 = new RichEmbed()
          .setTitle(`Update failed`)
          .setDescription(`There was an error\n${out}\n${stderr}`);
          let embmsg3 = await msg.channel.send(emb3);
        }
    })
  }
};

module.exports.info = {
    name: "update"
};
