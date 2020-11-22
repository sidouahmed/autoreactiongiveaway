const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://autoreation.glitch.me/`);
}, 2000);
 
const { Client, RichEmbed } = require("discord.js");
var { Util } = require('discord.js');
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss")
const client = new Client({ disableEveryone: true})
const fetchVideoInfo = require("youtube-info");
const botversion = require('./package.json').version;
const simpleytapi = require('simple-youtube-api')
const moment = require("moment");
const fs = require('fs');
const util = require("util")
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require('snekfetch');
const guild = require('guild');
const dateFormat = require('dateformat');//npm i dateformat
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyBekoOSD0sEfToIUgga-2vYjNnLRjODUJA');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const yt_api_key = "AIzaSyBekoOSD0sEfToIUgga-2vYjNnLRjODUJA";
const pretty = require("pretty-ms");
client.login(process.env.BOT_TOKEN);
const queue = new Map();
var table = require('table').table
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


//code




client.on("message", message => { 
  if(message.content.toLowerCase().includes("giveaway")) { 
    if(message.author.bot) { 
      message.react("🎉") 
    } 
  } 
});


client.on("message", message => { 
  if(message.content.toLowerCase().includes("giveaway")) { 
    if(message.author.id == "294882584201003009" || message.author.id == "553212598368337921" || message.author.id == "582537632991543307") { 
      message.react("🎉") 
    } 
  } 
}) 

// by razex 
//join our discord for support and fun ! : https://discord.gg/WqNFcgx
