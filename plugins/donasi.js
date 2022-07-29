let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `
.✵.════𝔻𝕆ℕ𝔸𝕊𝕀════.✵.

𝙳𝙰𝙽𝙰 𝙾𝚅𝙾 𝙶𝙾𝙿𝙰𝚈 🍃
> 「 0813 8420 0380 」
𝚂𝚊𝚠𝚎𝚛𝚒𝚊 🧋
> 「 https://saweria.co/HyDyka 」🧃

𝙳𝙾𝙽𝙰𝚂𝙸 𝙵𝚁𝙴𝙴𝙲𝙻𝙸𝙲𝙺 🌿
> 「 https://cararegistrasi.com/DonateClick 」🐣
> 「 https://safefileku.com/download/m9vHSqrKCYI2XUn 」🐣

Jika Kamu Berdonasi, SS hasil donasi kalian, dan kirim ke Owner Bot
Ini, Supaya mendapatkan trial 7-30 Hari Bot (Premium Akses)
Makin Banyak Yang Berdonasi, Maka semakin murah dan cepat layanan kami

𝗢𝘄𝗻𝗲𝗿 𝗞𝗼𝗻𝘁𝗮𝗸 𝗗𝗶𝗯𝗮𝘄𝗮𝗵 𝗔𝘁𝗮𝘂 :
「  https://wa.me/qr/6R2TG6UISL2VK1 」 🌲
`
const templateButtons = [
    {index: 1, urlButton: {displayText: '✨ Saweria', url: psaweria}},
    {index: 2, urlButton: {displayText: '📷 Instagram', url: sig}},
    {index: 3, urlButton: {displayText: '🌎 Official Group', url: sgc}},
    {index: 4, quickReplyButton: {displayText: 'Menu', id: '.menu'}},
    {index: 5, quickReplyButton: {displayText: 'Owner', id: '.owner'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
