let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply(' *Uaaaaawh🥱, Maap kak Cyraa1 tadi ketiduran😊* ')
}

handler.tags = ['main']
handler.command = /^(cyraaon)$/i

handler.admin = true

export default handler
