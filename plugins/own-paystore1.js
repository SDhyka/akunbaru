let handler = async (m, { conn }) => {
	//-----PRICE
//sewa
let sh = '5'
let sn = '15'
let ss = '30'
let sp = '35'
let sv = '65'
//premium
let ph = '5'
let pn = '20'
let pp = '40'
let pv = '50'
let ppm = '999'
let info = `
╭━━━━「 *ADMIN NAME MENYEDIAKAN*📮 」
┊⫹⫺ *BER²*🗂️
┊⫹⫺ *JPM*🗂️
┊⫹⫺ *JAPOST*🗂️
┊⫹⫺ *TT*🗂️
┊⫹⫺ *BT*🗂️
┊⫹⫺ *DAN JASA LAINYA🗂️
╰═┅═━––––––๑
*⫹⫺ ANNOUNCEMENT📢*
*GAK PAKE JASA ADMIN NAME, JANGAN KOAR² YA KAK❗️*

*⫹⫺ PAYMENT*
• *DANA*
• *GOPAY*
• *QRIS*
• *OVO DLL*
`
const sections = [
   {
	title: `${htjava} SEWA ✦-------`,
	rows: [
	    {title: "📦 𝗕𝗘𝗥²", rowId: '.pesanname *BER²* • Admin Name', description: '𝗔𝗗𝗠𝗜𝗡 : 𝗡𝗔𝗠𝗘 📧' },
	    {title: "📦 𝗝𝗣𝗠 ", rowId: '.pesanname *JPM* • Admin ', description: '𝗔𝗗𝗠𝗜𝗡 : 𝗡𝗔𝗠𝗘 📧' },
	{title: "📦 𝗝𝗔𝗣𝗢𝗦𝗧", rowId: '..pesanname *JAPOST* • Admin ', description: '𝗔𝗗𝗠𝗜𝗡 : 𝗡𝗔𝗠𝗘 📧' },
	{title: "📦 𝗧𝗧", rowId: '.pesanname *TT* • Admin ', description: '𝗔𝗗𝗠𝗜𝗡 : 𝗡𝗔𝗠𝗘 📧' },
	{title: "📦 𝗕𝗧", rowId: '.pesanname *BT* • Admin ', description: '𝗔𝗗𝗠𝗜𝗡 : 𝗡𝗔𝗠𝗘 📧' }
	{title: "📦 𝗝𝗔𝗦𝗔 𝗗𝗟𝗟", rowId: '.pesanname *JASA DLL* • Admin ', description: '𝗔𝗗𝗠𝗜𝗡 : 𝗡𝗔𝗠𝗘 📧' },
	]
    }, {
    title: `${htjava} ADMIN NAME ✦-------`,
	rows: [
	    {title: "🌿 𝗔𝗗𝗠𝗜𝗡 𝗡𝗔𝗠𝗘", rowId: '.pesanname *BANG NAME, SAYA BISA MILIH JASALU PAKE PEMBAYARAN APA? TOLONG CHAT GW🙏🏻', description: '𝗞𝗜𝗥𝗜𝗠 𝗜𝗡𝗙𝗢 𝗞𝗘𝗔𝗗𝗠𝗜𝗡 𝗨𝗡𝗧𝗨𝗞 𝗣𝗘𝗠𝗕𝗔𝗬𝗔𝗥𝗔𝗡' }
	]
    },
]

const listMessage = {
  text: info,
  footer: botdate,
  title: wm,
  buttonText: "Menu Admin!",
  sections
}
await conn.sendMessage(m.chat, listMessage)
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['adminstore', 'name']
handler.tags = ['main']
handler.command = /^(adminstore(toko)?|admin)$/i

export default handler