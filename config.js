require('dotenv').config(); 

global.owner = process.env.OWNER_NUMBER || "94769714218"
global.anitav4 = process.env.BOT_NAME || "💗🫟SENU x ANITHA MD BOT 💗🫟";
global.ownername = process.env.OWNER_NAME || "Mr.Senura Lakshan";
global.packname = process.env.PACK_NAME || "💚SLP TO CSW";
global.author = process.env.AUTHOR || "🫟SENURA LAKSHAN🦋";
global.channelname = process.env.CHANNEL_NAME || "💗කාටූන් ලෝකේ 🔊";
global.channeljid = process.env.CHANNEL_JID || "120363400978174539@newsletter";
global.autoTyping = process.env.AUTO_TYPING === 'false'; 
global.autoRecord = process.env.AUTO_RECORD === 'false';
global.autoViewStatus = process.env.AUTO_VIEW_STATUS === 'false';
global.AUTOSTATUS_REACT = process.env.AUTOSTATUS_REACT === 'true';
global.autoLikeEmoji = process.env.AUTO_LIKE_EMOJI || "💗,🌷";

global.LEVELUP = process.env.LEVELUP === 'true';

global.ANTIVIEWONCE = process.env.ANTIVIEWONCE === 'true';

global.roles = {
    1: "Novice",
    3: "Learner",
    5: "Apprentice",
    8: "Magician",
    10: "Wizard",
    15: "Sorcerer",
    20: "Grandmaster",
    25: "Legend",
};


global.public = process.env.PUBLIC === 'true';

global.ANTIDELETE = process.env.ANTIDELETE === 'true';
global.unavailable = process.env.UNAVAILABLE === 'false';
global.available = process.env.AVAILABLE === 'true';
global.autoreadmessages = process.env.AUTO_READ_MESSAGES === 'false';
global.chatbot = process.env.CHATBOT === 'false';
global.autoreact = process.env.AUTO_REACT === 'false';

global.WELCOME = process.env.WELCOME === 'true';

global.prefix = process.env.PREFIX || '.';

global.autobio = process.env.AUTO_BIO === 'true';

global.ANTICALL = process.env.ANTICALL === 'true';

global.antilink = process.env.ANTILINK === 'true';
global.antilinkkick = process.env.ANTILINK_KICK === 'true';
global.antilinkwarn = process.env.ANTILINK_WARN === 'true';

global.mess = {
    success: process.env.MESSAGE_SUCCESS || 'DONE✨️',
    admin: process.env.MESSAGE_ADMIN || '_*❗This Command Can Only Be Used By Group Admins !*_',
    botAdmin: process.env.MESSAGE_BOT_ADMIN || '_*❗This Command Can Only Be Used When Bot Becomes Group Admin !*_',
    OnlyOwner: process.env.MESSAGE_OWNER || '_*❗This Command Can Only Be Used By My Owner !*_',
    OnlyGrup: process.env.MESSAGE_GROUP || '_*❗This Command Can Only Be Used In Group Chat ![ඒක GROUP COMMAND ]*_',
    private: process.env.MESSAGE_PRIVATE || '_*❗This Command Can Only Be Used In Private Chat ![ඒක PRIVATE]*_',
    wait: process.env.MESSAGE_WAIT || '_*WAIT MENIKA🌝💙*_',
    notregist: process.env.MESSAGE_NOT_REGIST || '_*You are not registered in the Bot Database. Please register first*_',
    premium: process.env.MESSAGE_PREMIUM || '_*ප්‍රිමියම් නෑ සුද්දා🌝🤦🏻‍♂️*_',
    endLimit: process.env.MESSAGE_END_LIMIT || '10000',
};


let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
