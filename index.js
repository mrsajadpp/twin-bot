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
client.log("OTU0Mjk3ODE2OTcxMzQ1OTYx.YjRFGQ.rgH4kntjTKhbNfIyKFdvgzZqd_0");
