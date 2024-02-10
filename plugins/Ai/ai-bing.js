import fetch from 'node-fetch'

let handler = async (m, {
  conn,
  text,
  usedPrefix,
  command
}) => {
  if (command == 'bing') {
    if (!text) throw `Example : ${usedPrefix + command} siapa presiden Indonesia?`;
    try {
    m.reply("*WAIT JIKA EROR KETIK BING3*")
      let response = await fetch('https://api.alyachan.pro/api/bing', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            text: text,
            apikey: alya
          })
        })
        .then(res => res.json());
    await conn.sendMessage(m.chat, {
    text: response.message,
    contextInfo: {
    externalAdReply: { 
    title: 'Bing-Ai',
    body: '',
    thumbnailUrl: "https://telegra.ph/file/b6a2e82f30570afa1d082.jpg",
    sourceUrl: "https://www.bing.com/?/ai",
    mediaType: 1,
    renderLargerThumbnail: true
    }}}, { quoted: m})
    } catch (e) {
      console.log(e);
      throw `*Error:* ${eror}`;
    }
  }
  if (command == 'bingimg') {
    if (!text) throw `Contoh: ${usedPrefix + command} anak berlari menggunakan pakaian merah 3d animation`;
    try {
      m.reply(wait)
      let response = await fetch('https://api.alyachan.pro/api/bing-image', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            text: text,
            apikey: alya
          })
        })
        .then(res => res.json());

      for (let i = 0; i < 4; i++) {
        let img = response.result[i]
        await sleep(3000)
        await conn.sendFile(m.chat, img, 'bing_img.png', `*PROMPT:* ${text}`, m)
      }
    } catch (error) {
      throw `Error: ${eror}`
    }
  }
}

handler.command = handler.help = ['bing', 'bingimg']
handler.tags = ['ai']
handler.limit = 6

export default handler

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
