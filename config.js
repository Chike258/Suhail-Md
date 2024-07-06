const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_14_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDk2LFxuICAgICAgICAzLFxuICAgICAgICAxMixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDksXG4gICAgICAgIDYyLFxuICAgICAgICAxODAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTkxLFxuICAgICAgICAzNixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDYzLFxuICAgICAgICA4NCxcbiAgICAgICAgMjE0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTg0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTg0LFxuICAgICAgICA0NCxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDI4LFxuICAgICAgICA1NixcbiAgICAgICAgNzgsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDU2LFxuICAgICAgICA5MyxcbiAgICAgICAgNzksXG4gICAgICAgIDgxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgODgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjksXG4gICAgICAgIDg1LFxuICAgICAgICA3MixcbiAgICAgICAgMTE0LFxuICAgICAgICA1NixcbiAgICAgICAgNzYsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzYsXG4gICAgICAgIDMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDc5LFxuICAgICAgICAxODQsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTUsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjUzLFxuICAgICAgICA4NixcbiAgICAgICAgMTE4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTcwLFxuICAgICAgICA2NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDM3LFxuICAgICAgICA0NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMyxcbiAgICAgICAgNjksXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTU1LFxuICAgICAgICA1NixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTAyLFxuICAgICAgICA2NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDg1LFxuICAgICAgICAxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIzNixcbiAgICAgICAgOCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjAzLFxuICAgICAgICAxODIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTY2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjksXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2MixcbiAgICAgICAgOTgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDksXG4gICAgICAgIDIxNixcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTA3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDExNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNixcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDk3LFxuICAgICAgICA2MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzksXG4gICAgICAgIDE3MixcbiAgICAgICAgNzAsXG4gICAgICAgIDExNixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDc3LFxuICAgICAgICAxODAsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTU1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTYwLFxuICAgICAgICA5LFxuICAgICAgICAxODMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJHRTh6dGRaYm1SS1Q2dC9ORDJuNnJTY3lGOU9qeERNRTRvQTRtdnNMRVlNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkxNjM2ODk4MDJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBQjhDMjIyMEFFQjU4NTAxOTMyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDI1NzI1NFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJjOEhtNGRKOFFWZWs4aGoyRzdtdkhRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjk5ODAwYTc5LTk1ODQtNDJiOS05YWZmLWUzYTk1ZTFlNjVkYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjgsXG4gICAgICA1NCxcbiAgICAgIDIxNixcbiAgICAgIDgzLFxuICAgICAgMTIyLFxuICAgICAgMjUzLFxuICAgICAgNTcsXG4gICAgICA0MCxcbiAgICAgIDIyOSxcbiAgICAgIDQ4LFxuICAgICAgMTI5LFxuICAgICAgNzMsXG4gICAgICAyMzgsXG4gICAgICAyNSxcbiAgICAgIDI0LFxuICAgICAgMjIyLFxuICAgICAgMTU3LFxuICAgICAgMTAsXG4gICAgICA4MSxcbiAgICAgIDE0N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5OSxcbiAgICAgIDE3OSxcbiAgICAgIDQwLFxuICAgICAgMTQ5LFxuICAgICAgMTE4LFxuICAgICAgMTI3LFxuICAgICAgNDEsXG4gICAgICAyMDEsXG4gICAgICAyNSxcbiAgICAgIDIxMCxcbiAgICAgIDE4NixcbiAgICAgIDI0MSxcbiAgICAgIDIwNCxcbiAgICAgIDIxNixcbiAgICAgIDE1MixcbiAgICAgIDE2NyxcbiAgICAgIDg4LFxuICAgICAgMTI1LFxuICAgICAgMzYsXG4gICAgICA4MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJWRTg5M0tESFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTE2MzY4OTgwMjoxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNDM2MjQxNjc0MzIzOTA6MTNAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiSGVhbGVyXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTWJxeXRVQkVPQ1ZwTFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJqMXhoYXBHL0xpdnB0YTBhYW9ETVpCM1FDMGJGdjVQMXR3MktacUJpN0F3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImxyUll2d20zS3VVa3Q0U2ttc0N1RjFpU0EyWjVDV0tkSjVhVkNpZDgrV3lDNEtYSmxQTkJMNzRlYjJ4UXZ1Z3R4M1Q3Ymx4L2g4Z054aUwyalBhWURnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInhXanN4d2RCczVnZXBqMjAxVXpRSXoyeGsvMTFGMjNza2lBRE9mbWJQV01XNEJpeTVmZWIrR2VQL2E3QWN4cEZjKyt2aWJWRUI3YklqYUo3dCtjSGl3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxNjM2ODk4MDI6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAyNTcyNTAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHTnVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdOdS5qc29uIjogIntcImtleURhdGFcIjpcIkVyM0RlYVdZSFptZk1Ec3hBbHRJdzBBL0lZYnd2MENjVTRwK0djZ0dtYnc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDQ3OTE5NDMwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAyNTcyNTE4NThcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
