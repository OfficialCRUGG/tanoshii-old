"228965621478588416",
"224084384054116352"

const Discord = require("discord.js");
const { exec } = require("child_process");

module.exports.run = async (prefix, messageArray, cmd, client, message, args, author, guild, config) => {
  if(author.id = "228965621478588416" || "224084384054116352") {
    exec("git pull")
    exec("npm install")
    process.exit(0);
  } else {
    message.reply("No permissions")
  }
};
module.exports.help = {
  name: "update"
}
