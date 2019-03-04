// Source by Rhodium https://github.com/RhodiumBot/Rhodium/blob/master/commands/vserver/update.js

const { exec } = require("child_process");
const { RichEmbed } = require("discord.js");
const fs = require("fs");

module.exports.run = async (prefix, messageArray, cmd, client, msg, args, author, guild, config) => {
  if(author.id = "228965621478588416" || "224084384054116352") {
    let emb = new RichEmbed()
        .setTitle(`Update initiated by ${msg.author.tag}`)
        .setDescription("Updating...");

    msg.channel.send(emb);
    client.user.setPresence({status: "online", game: {name: "Applying an update."}});

    exec("git pull", (err, out, stderr) => {
        if(!err && stderr === ""){
            console.log(out);
            exec("pm2 restart all", (err, out, stderr) => {
                if(err && stderr !== "") {
                  let emb2 = new RichEmbed()
                  .setTitle(`Update failed`)
                  .setDescription(`There was an error\n${out}\n${stderr}`);
                  msg.channel.send(emb2);
                }
            })
        }
        else {
          let emb3 = new RichEmbed()
          .setTitle(`Update failed`)
          .setDescription(`There was an error trying to pull update.\n${out}\n${stderr}`);
          msg.channel.send(emb3);
        }
    })
  }
};

module.exports.info = {
    name: "update"
};
