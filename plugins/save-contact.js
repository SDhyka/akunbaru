import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
  if (!text) return
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'Tag salah satu lah'
  text = text.replace('@' + who.split`@`[0], '').trimStart()
  return conn.sendContact(m.chat, who, text || conn.getName(who), m)
}
handler.help = ['save'].map(v => v + ' @mention <ContactName>')
handler.tags = ['']

handler.command = /^save$/

handler.owner = false

export default handler
