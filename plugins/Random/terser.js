// Klo mau pake, pake aja ini bkn enc cma terser aja

import{minify}from"terser";const handler=async(m,{conn:conn,args:args})=>{if(0===args.length)return conn.reply(m.chat,"👾 🚫",m);const inputCode=args.join(" "),options={mangle:{properties:{keep_quoted:!0}},compress:!1,format:{beautify:!0}};try{const result=await minify(inputCode,options);result.error?conn.reply(m.chat,"👾 🚫",m):conn.reply(m.chat,"📤 📜:\n\n"+result.code,m)}catch(error){conn.reply(m.chat,"👾 🚫",m)}};handler.command=/^terser$/i;export default handler;