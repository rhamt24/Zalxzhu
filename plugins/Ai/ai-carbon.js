import fetch from 'node-fetch'

let handler = async (m, { conn, args }) => {
   let text
    if (args.length >= 1) {
        text = args.slice(0).join(" ")
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text
    } else throw "Input teks atau reply teks yang ingin di jadikan carbon!"
   if (!text) return m.reply('masukan text')
   await m.reply(wait) 
   try {
   let img = await fetch(API('lann', '/api/maker/carbon', { text: text, apikey: lann })).then(res => res.json());
   await conn.sendFile(m.chat, img.result, 'img.jpeg', '', m)
   } catch (e) {
   throw `✖️ *Server sedang error!`
   }
}

handler.help = ['carbon']
handler.tags = ['ai']
handler.command = /^(carbon|carbonara)$/i
handler.limit = true
export default handler

