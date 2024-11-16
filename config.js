const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "16132197256";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,161xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,161xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "16132197256,161xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || " SUHAIL_10_08_11_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTUxLFxuICAgICAgICA1LFxuICAgICAgICAxODksXG4gICAgICAgIDEyLFxuICAgICAgICA3OSxcbiAgICAgICAgMzksXG4gICAgICAgIDQzLFxuICAgICAgICAzNixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNyxcbiAgICAgICAgNzksXG4gICAgICAgIDc5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODUsXG4gICAgICAgIDk0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDQzLFxuICAgICAgICAxODksXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTU0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI3LFxuICAgICAgICAxODIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTYyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDM0LFxuICAgICAgICAzMixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMTU3LFxuICAgICAgICAxODQsXG4gICAgICAgIDc1LFxuICAgICAgICA1NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyMixcbiAgICAgICAgOCxcbiAgICAgICAgMjE0LFxuICAgICAgICA0NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzksXG4gICAgICAgIDMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjAwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjksXG4gICAgICAgIDEzNixcbiAgICAgICAgOTEsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDcxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDM2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjIxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxLFxuICAgICAgICA2NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDI3LFxuICAgICAgICAxNixcbiAgICAgICAgNyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDY0LFxuICAgICAgICAxMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjAxLFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgNixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDc4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjI4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxODQsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDcyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTE4LFxuICAgICAgICA3NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDc1LFxuICAgICAgICA3MixcbiAgICAgICAgNTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMjNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDIyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTczLFxuICAgICAgICAxOTksXG4gICAgICAgIDcyLFxuICAgICAgICA0OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjUwLFxuICAgICAgICAxODcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTMyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDkwLFxuICAgICAgICA1OCxcbiAgICAgICAgMjA1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDcwLFxuICAgICAgICAzNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTIsXG4gICAgICAgIDg4LFxuICAgICAgICAxODMsXG4gICAgICAgIDcxLFxuICAgICAgICA5NixcbiAgICAgICAgODMsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQzLFxuICAgICAgICA0MSxcbiAgICAgICAgOTksXG4gICAgICAgIDE5MSxcbiAgICAgICAgODcsXG4gICAgICAgIDMwLFxuICAgICAgICAwLFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJkYUtxczZsSVpxSUZ3NXg0OU0vN3B5Skg5bWtUWCswZVBTQlkzVEtsMkpBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjE2MTMyMTk3MjU2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxQUVFNkFDQjA3MDY4NDc2NENDMDc2NDhBOEFBMEVGMlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzE3NTE2ODBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiM1JxNG5MeEdSMHVpaGNHZ1JHc3NLd1wiLFxuICBcInBob25lSWRcIjogXCIzMTQzNmQzYi1lYjA5LTRmZjEtYmQ1Ny01ZGE4NTI1YjVmMGFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY1LFxuICAgICAgNzEsXG4gICAgICAxMjAsXG4gICAgICA0MCxcbiAgICAgIDE2MyxcbiAgICAgIDE4OSxcbiAgICAgIDUwLFxuICAgICAgMjEwLFxuICAgICAgMjI4LFxuICAgICAgMTYzLFxuICAgICAgMTM5LFxuICAgICAgMTUsXG4gICAgICA0OCxcbiAgICAgIDY2LFxuICAgICAgMTMxLFxuICAgICAgNjcsXG4gICAgICAxMzQsXG4gICAgICA2MixcbiAgICAgIDEzNCxcbiAgICAgIDExOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjAsXG4gICAgICAyNTQsXG4gICAgICAxODcsXG4gICAgICA1NyxcbiAgICAgIDkzLFxuICAgICAgNjksXG4gICAgICAxMjAsXG4gICAgICAyMzMsXG4gICAgICAxMDUsXG4gICAgICAyMzUsXG4gICAgICAxNjYsXG4gICAgICA2NyxcbiAgICAgIDcsXG4gICAgICAyMSxcbiAgICAgIDE5MSxcbiAgICAgIDkxLFxuICAgICAgMTUxLFxuICAgICAgMTUzLFxuICAgICAgMTY5LFxuICAgICAgMTU4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjMzS1dRWkIzXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIxNjEzMjE5NzI1NjoxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNTU0NjU1OTM1Nzc2OTA6MTlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTVhyM1pJRkVQYmQ0YmtHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ1RUxqYllFK1NmQlJVMTNpS2Z3VjNtV2EyL0ZSRW4zRE5ZYlhpVnd5NUhRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkl0Wk9EYTNxVXhVVm5aazRJRTF5dEUrVHdYRGZJS3hnY0pCQUdVR1VLZjlBZXF4QjN1Z0RjYWsyVHJib0JIek1RWDliQTdIYUpURVdSZ2RmYkIvN0FBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInpSc2lHM3VqbFk4QVV1eHZaeG5kc0ZrWVViS3lPSFJZRGhGaysrci80ODRIOGk4YUJnbXdpbFlGbE40TTVQdVYvckpmYXFNTTYwM1N1NlcrY3dlWGlRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjE2MTMyMTk3MjU2OjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzE3NTE2NzQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFcHRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVwdC5qc29uIjogIntcImtleURhdGFcIjpcIitQdlpGRk1CZ1Q3S21valh4ZUNKK3RYOWY4K3N5UDdtUmp2TVN6UmdHUU09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM4MTQ2MzQ5MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMxNzUwOTU3MzIxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "senku",
  packname: process.env.PACK_NAME || "senku",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "senku-ishigami",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
