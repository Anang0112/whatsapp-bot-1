const fs = require('fs-extra')
const { 
    prefix
} = JSON.parse(fs.readFileSync('./settings/setting.json'))

/*

_*------ [ IKLAN ] ------*_

_Top up game terpecaya dan termurah_
_di *Galaxy Shop*_

_- Top Up FF_
_- Top Up ML_
_- Top Up CoDm_
_- Pulsa_
_- Covert Pulsa_
_- Token Listrik_

_Jika kalian minat bisa hub :_

_> wa.me/6281543315572_

_> https://play.google.com/store/apps/details?id=com.galaxyshop_

*/

exports.textMenu = (pushname) => {
    return `
Hi, ${pushname}! 👋️
Berikut adalah beberapa fitur yang ada pada bot ini!✨

Creator:

🦊 *${prefix}cooltext*
🦊 *${prefix}sticker*
🦊 *${prefix}stickergif*
🦊 *${prefix}stickergiphy*
🦊 *${prefix}meme*
🦊 *${prefix}quotemaker*
🦊 *${prefix}nulis*

Islam:
🤲 *${prefix}infosurah*
🤲 *${prefix}surah*
🤲 *${prefix}tafsir*
🤲 *${prefix}ALaudio*
🤲 *${prefix}jsolat*

18+:
😍 *${prefix}nekopoi*

Fun Menu (Group):
🦊 *${prefix}simisimi*
🤐 *${prefix}katakasar*
	┷🦊 *${prefix}klasmen*

Download:
⏩ *${prefix}ytmp3*
🎦 *${prefix}ytmp4*
💬 *${prefix}facebook*

Primbon:
🌟 *${prefix}cekzodiak*
🌟 *${prefix}artinama*
🌟 *${prefix}cekjodoh*

Search Any:
🦊 *${prefix}dewabatch*
🦊 *${prefix}images*
🦊 *${prefix}sreddit*
🦊 *${prefix}resep*
🦊 *${prefix}stalkig*
🦊 *${prefix}wiki*
🦊 *${prefix}cuaca*
🦊 *${prefix}chord*
🦊 *${prefix}lirik*
🦊 *${prefix}ss*
🦊 *${prefix}play*
🦊 *${prefix}movie*
🦊 *${prefix}whatanime*

Random Teks:
🦊 *${prefix}motivasi*
🦊 *${prefix}howgay*
🦊 *${prefix}fakta*
🦊 *${prefix}pantun*
🦊 *${prefix}katabijak*
🦊 *${prefix}quote*
🦊 *${prefix}cerpen*
🦊 *${prefix}cersex*
🦊 *${prefix}puisi*

Random Images:
🦊 *${prefix}anime*
🦊 *${prefix}kpop*
🦊 *${prefix}memes*

Lain-lain:
🦊 *${prefix}tts*
🦊 *${prefix}translate*
🦊 *${prefix}resi*
🦊 *${prefix}covidindo*
🦊 *${prefix}ceklokasi*
🦊 *${prefix}shortlink*
🦊 *${prefix}bapakfont*

Tentang Bot:
🦊 *${prefix}tnc*
🦊 *${prefix}donasi*
🦊 *${prefix}botstat*
🦊 *${prefix}ownerbot*
🦊 *${prefix}join*

_-_-_-_-_-_-_-_-_-_-_-_-_-_

Owner Bot:
🦊 *${prefix}ban* - banned
🦊 *${prefix}bc* - promosi
🦊 *${prefix}leaveall* - keluar semua grup
🦊 *${prefix}clearall* - hapus semua chat

Hope you have a great day!✨`
}



exports.textAdmin = () => {
    return `
⚠ [ *Admin Group Only* ] ⚠ 
Berikut adalah fitur admin grup yang ada pada bot ini!

🦊 *${prefix}add*
🦊 *${prefix}kick* @tag
🦊 *${prefix}promote* @tag
🦊 *${prefix}demote* @tag
🦊 *${prefix}mutegrup*
🦊 *${prefix}tagall*
🦊 *${prefix}setprofile*
🦊 *${prefix}del*
🦊 *${prefix}welcome*

_-_-_-_-_-_-_-_-_-_-_-_-_-_

⚠ [ *Owner Group Only* ] ⚠
Berikut adalah fitur owner grup yang ada pada bot ini!
🦊 *${prefix}kickall*
*Owner Group adalah pembuat grup.*
`
}

exports.textDonasi = () => {
    return `
Hai, terimakasih telah menggunakan bot ini, untuk mendukung bot ini kamu dapat membantu dengan berdonasi dengan Transfer :

Dana : 081543315572
Gopay : 081543315572
Pulsa M3 : 081543315572
Donasi akan digunakan untuk pengembangan dan pengoperasian bot ini.

Terimakasih.
}
