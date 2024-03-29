import fetch from 'node-fetch'
import uploadImage from '../../lib/uploadImage.js'

async function handler(m, { conn, usedPrefix, command }) {
  try {
    const q = m.quoted ? m.quoted : m;
    const mime = (q.msg || q).mimetype || q.mediaType || '';
    if (/^image/.test(mime) && !/webp/.test(mime)) {
     m.reply(wait)
      const img = await q.download();
      const out = await uploadImage(img);
      const api = await fetch(API('lann', '/api/tools/removebg', { url: `${out}`, apikey: lann }));
       const image = await api.json();
       const url = image.url.result
       conn.sendFile(m.chat, url, null, `🍟 Removebg Success`, m);
    } else {
      m.reply(`Kirim gambar dengan caption *${usedPrefix + command}* atau tag gambar yang sudah dikirim.`);
    }
  } catch (e) {
    console.error(e);
    m.reply(`Identifikasi gagal. Silakan coba lagi.`);
  }
}

handler.help = ['removebg2', 'nobg2'];
handler.tags = ['tools'];
handler.command = ['removebg2'];
handler.premium = false;
handler.limit = false;

export default handler
