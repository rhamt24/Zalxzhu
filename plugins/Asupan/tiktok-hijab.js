//by Bang Putra Jangan di hapus tqto nya pake boleh

let handler = async (m, { conn, text }) => {
//await m.reply(wait);
conn.sendMessage(m.chat, {
		react: {
			text: '⌛',
			key: m.key,
		}
	})
    let yh = global.hijab
    let url = yh[Math.floor(Math.random() * yh.length)]
   await conn.sendFile(m.chat, url, 'anu.jpg', '_Nih kak ><_', m)
  }
  handler.command = /^(tthijab|tiktokhijab)$/i
  handler.tags = ['asupantt']
  handler.help = ['tthijab', 'tiktokhijab']
  
  handler.limit = true
  
  export default handler
  
 global.hijab = [
"https://i.postimg.cc/2Sc8Yv0Q/p-1932029i39.jpg",
"https://i.postimg.cc/VNvv04JZ/p-19320rf5h7.jpg",
"https://i.postimg.cc/wxmtkW0S/p-193222brl5.jpg",
"https://i.postimg.cc/pTQwWMPw/p-193222o602.jpg",
"https://i.postimg.cc/XqFsgwz9/p-19322f6ue0.jpg",
"https://i.postimg.cc/2yV1pGDB/p-19323jnd21.jpg",
"https://i.postimg.cc/xCH0LZn5/p-19324tqmd1.jpg",
"https://i.postimg.cc/NjYd1Cv4/p-19325oity2.jpg",
"https://i.postimg.cc/Pr54Jntm/p-19326ptiu4.jpg",
"https://i.postimg.cc/wMpmSPV4/p-19326t9w97.jpg",
"https://i.postimg.cc/FzQB8WcT/p-193277ss81.jpg",
"https://i.postimg.cc/HLB40SWq/p-19327mzvc0.jpg",
"https://i.postimg.cc/prnfHRQv/p-19328r6pt1.jpg",
"https://i.postimg.cc/Znt8J0Tc/p-19328xoqp3.jpg",
"https://i.postimg.cc/LXrThNVj/p-193295mpj0.jpg",
"https://i.postimg.cc/xdXj1CZW/p-1932auifw0.jpg",
"https://i.postimg.cc/rsFSD5L8/p-1932dq3rr5.jpg",
"https://i.postimg.cc/Gm7vHXL9/p-1932dy6cf5.jpg",
"https://i.postimg.cc/dtJC6bDL/p-1932e9d8a8.jpg",
"https://i.postimg.cc/bNPv9qGt/p-1932eytwf8.jpg",
"https://i.postimg.cc/yxZSgjbC/p-1932f2e4e6.jpg",
"https://i.postimg.cc/x8McTCX0/p-1932fh9044.jpg",
"https://i.postimg.cc/g2PTgk83/p-1932gec9f7.jpg",
"https://i.postimg.cc/TYxVSyN2/p-1932il8al4.jpg",
"https://i.postimg.cc/G2zDn9T6/p-1932k1rvv9.jpg",
"https://i.postimg.cc/0jwVCLNt/p-1932kbxy99.jpg",
"https://i.postimg.cc/0yq7mgvW/p-1932kz1r04.jpg",
"https://i.postimg.cc/1z2Tc5zh/p-1932m46290.jpg",
"https://i.postimg.cc/CKGDJchh/p-1932mzcx98.jpg",
"https://i.postimg.cc/3RDjM2HN/p-1932n22t12.jpg",
"https://i.postimg.cc/nLbBvytS/p-1932nfvpz7.jpg",
"https://i.postimg.cc/25gvx3BD/p-1932nix266.jpg",
"https://i.postimg.cc/Zn9c5rS1/p-1932o7e2f0.jpg",
"https://i.postimg.cc/zXCdbFWr/p-1932p9bcq1.jpg",
"https://i.postimg.cc/d3xTDXBB/p-1932rf9ic0.jpg",
"https://i.postimg.cc/Hs0VqrGz/p-1932roxp66.jpg",
"https://i.postimg.cc/C1dPRZpp/p-1932sui9g8.jpg",
"https://i.postimg.cc/J4ZF3WfS/p-1932sxt5c2.jpg",
"https://i.postimg.cc/Ssj9qkLs/p-1932w3r815.jpg",
"https://i.postimg.cc/7ZTSJxjT/p-1932wa40b6.jpg",
"https://i.postimg.cc/y8PvnhVz/p-1932wyo5x0.jpg",
"https://i.postimg.cc/52nS8x34/p-1932x3b4p1.jpg",
"https://i.postimg.cc/t4G59ZmM/p-1932x82vu1.jpg",
"https://i.postimg.cc/9MvDhTF8/p-1932ydeeq3.jpg",
"https://i.postimg.cc/C5F4bWbp/p-1932z4e293.jpg"
]
