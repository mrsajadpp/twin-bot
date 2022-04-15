const Discord = require("discord.js");
const client = new Client();
const perfix = '&';

client.on("Ready", () =>{
  console.log("Bot is online!");
});
client.on("message", message =>{
  if (message.content === `${perfix}ping`) {
    message.reply("pong")
  }
});
client.log("OTYyMDM0OTEyNTQ5MDE1NjMy.YlBq1A.Btls9IUhycTKgewBR7CZG9lwC_4");
