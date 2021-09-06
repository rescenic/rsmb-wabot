const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
   processTicksAndRejections,
   ECONNABORTED,
   apikey,
   WA_DEAFULT_EPHEMERAL,
   DataView,
   TypedArray,
   device,
   Browser
} = require('@adiwajshing/baileys')
const fs = require('fs')
const moment = require('moment-timezone')
const { wait,simih,getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, banner, close } = require('./lib/functions')
const { color } = require('./lib/color')
const gcdetect = JSON.parse(fs.readFileSync('./src/gcdetect.json'))
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const antilinkk = JSON.parse(fs.readFileSync('./src/antilink.json'))
const setting = JSON.parse(fs.readFileSync('./settings.json'))
const { spawn, exec, execSync } = require("child_process")
const clc = require('chalk')
const axios = require("axios")

require('./index.js')
nocache('./index.js', module => console.log(`${module} is now updated!`))

const starts = async (alpha = new WAConnection()) => {
    alpha.logger.level = 'warn'
    alpha.version = [2, 2119, 6] 
    console.log(banner.string)
    alpha.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color('Scan qr nya. waktu 10 detik sebelum qr ganti'))
    })
    var _0xc870=["\x2E\x2F\x73\x65\x73\x73\x69\x6F\x6E\x2E\x6A\x73\x6F\x6E","\x65\x78\x69\x73\x74\x73\x53\x79\x6E\x63","\x6C\x6F\x61\x64\x41\x75\x74\x68\x49\x6E\x66\x6F","\x63\x6F\x6E\x6E\x65\x63\x74\x69\x6E\x67","\x32","\x2E","\x6F\x6E","\x6F\x70\x65\x6E","\x43\x6F\x6E\x6E\x65\x63\x74\x65\x64","\uD83D\uDED2\x20\x53\x55\x42\x53\x43\x52\x49\x42\x45\x20\x59\x4F\x55\x54\x55\x42\x45\x20\x5A\x45\x45\x4F\x4E\x45\x20\x4F\x46\x43","\x61\x71\x75\x61","\x6C\x6F\x67","\x63\x6F\x6E\x6E\x65\x63\x74","\x62\x61\x73\x65\x36\x34\x45\x6E\x63\x6F\x64\x65\x64\x41\x75\x74\x68\x49\x6E\x66\x6F","\x09","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x77\x72\x69\x74\x65\x46\x69\x6C\x65\x53\x79\x6E\x63","\x5D","\x77\x68\x69\x74\x65","\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D","\x6D\x61\x67\x65\x6E\x74\x61","\x20\x43\x4F\x4E\x4E\x45\x43\x54\x45\x44","\x67\x72\x65\x65\x6E","\x5B","\x0A","\x2B","\x72\x65\x64","\x57\x41\x20\x56\x65\x72\x73\x69\x6F\x6E","\x79\x65\x6C\x6C\x6F\x77","\x3A","\x77\x61\x5F\x76\x65\x72\x73\x69\x6F\x6E","\x70\x68\x6F\x6E\x65","\x75\x73\x65\x72","\x4F\x53\x20\x56\x65\x72\x73\x69\x6F\x6E","\x6F\x73\x5F\x76\x65\x72\x73\x69\x6F\x6E","\x44\x65\x76\x69\x63\x65","\x64\x65\x76\x69\x63\x65\x5F\x6D\x61\x6E\x75\x66\x61\x63\x74\x75\x72\x65\x72","\x4D\x6F\x64\x65\x6C","\x64\x65\x76\x69\x63\x65\x5F\x6D\x6F\x64\x65\x6C","\x4D\x43\x43","\x6D\x63\x63","\x4D\x4E\x43","\x6D\x6E\x63","\x4F\x53\x20\x42\x75\x69\x6C\x64\x20\x4E\x75\x6D\x62\x65\x72","\x6F\x73\x5F\x62\x75\x69\x6C\x64\x5F\x6E\x75\x6D\x62\x65\x72","\x20\x41\x4C\x50\x48\x41\x42\x4F\x54\x20","\x53\x75\x62\x73\x63\x72\x69\x62\x65","\x26","\x53\x75\x70\x70\x6F\x72\x74","\x43\x68\x61\x6E\x6E\x65\x6C\x20\x53\x61\x79\x61","\x5A\x45\x45\x4F\x4E\x45\x20\x4F\x46\x43","\x54\x68\x61\x6E\x6B\x73\x20\x42\x75\x61\x74\x20\x4B\x61\x6C\x69\x61\x6E\x20\x59\x61\x6E\x67\x20\x53\x75\x64\x61\x68\x20\x53\x75\x62\x73\x63\x72\x69\x62\x65\x20\x5E\x5F\x5E","\x63\x79\x61\x6E","\x20\x20\x20\x20\x20\xA9\x32\x30\x32\x31\x20\x41\x6C\x70\x68\x61\x62\x6F\x74\x2E\x20\x41\x6C\x6C\x20\x52\x69\x67\x68\x74\x20\x52\x65\x73\x65\x72\x76\x65\x64\x2E\x20","\x63\x68\x61\x74\x2D\x75\x70\x64\x61\x74\x65","\x2E\x2F\x69\x6E\x64\x65\x78\x2E\x6A\x73"];fs[_0xc870[1]](_0xc870[0])&& alpha[_0xc870[2]](_0xc870[0]);alpha[_0xc870[6]](_0xc870[3],()=>{start(_0xc870[4],_0xc870[5])});alpha[_0xc870[6]](_0xc870[7],()=>{success(_0xc870[4],_0xc870[8]);setTimeout(()=>{console[_0xc870[11]](color(`${_0xc870[9]}`,_0xc870[10]))},1000)}); await alpha[_0xc870[12]]({timeoutMs:30* 3000});fs[_0xc870[16]](_0xc870[0],JSON[_0xc870[15]](alpha[_0xc870[13]](),null,_0xc870[14]));console[_0xc870[11]](color(_0xc870[17],_0xc870[18]),color(_0xc870[19],_0xc870[20]),color(_0xc870[21],_0xc870[22]),color(_0xc870[19],_0xc870[20]),color(_0xc870[23],_0xc870[18]));console[_0xc870[11]](_0xc870[24]);console[_0xc870[11]](color(_0xc870[23],_0xc870[18]),color(_0xc870[25],_0xc870[26]),color(_0xc870[17],_0xc870[18]),color(_0xc870[27],_0xc870[28]),color(_0xc870[29],_0xc870[10]),color(alpha[_0xc870[32]][_0xc870[31]][_0xc870[30]],_0xc870[18]));console[_0xc870[11]](color(_0xc870[23],_0xc870[18]),color(_0xc870[25],_0xc870[26]),color(_0xc870[17],_0xc870[18]),color(_0xc870[33],_0xc870[28]),color(_0xc870[29],_0xc870[10]),color(alpha[_0xc870[32]][_0xc870[31]][_0xc870[34]],_0xc870[18]));console[_0xc870[11]](color(_0xc870[23],_0xc870[18]),color(_0xc870[25],_0xc870[26]),color(_0xc870[17],_0xc870[18]),color(_0xc870[35],_0xc870[28]),color(_0xc870[29],_0xc870[10]),color(alpha[_0xc870[32]][_0xc870[31]][_0xc870[36]],_0xc870[18]));console[_0xc870[11]](color(_0xc870[23],_0xc870[18]),color(_0xc870[25],_0xc870[26]),color(_0xc870[17],_0xc870[18]),color(_0xc870[37],_0xc870[28]),color(_0xc870[29],_0xc870[10]),color(alpha[_0xc870[32]][_0xc870[31]][_0xc870[38]],_0xc870[18]));console[_0xc870[11]](color(_0xc870[23],_0xc870[18]),color(_0xc870[25],_0xc870[26]),color(_0xc870[17],_0xc870[18]),color(_0xc870[39],_0xc870[28]),color(_0xc870[29],_0xc870[10]),color(alpha[_0xc870[32]][_0xc870[31]][_0xc870[40]],_0xc870[18]));console[_0xc870[11]](color(_0xc870[23],_0xc870[18]),color(_0xc870[25],_0xc870[26]),color(_0xc870[17],_0xc870[18]),color(_0xc870[41],_0xc870[28]),color(_0xc870[29],_0xc870[10]),color(alpha[_0xc870[32]][_0xc870[31]][_0xc870[42]],_0xc870[18]));console[_0xc870[11]](color(_0xc870[23],_0xc870[18]),color(_0xc870[25],_0xc870[26]),color(_0xc870[17],_0xc870[18]),color(_0xc870[43],_0xc870[28]),color(_0xc870[29],_0xc870[10]),color(alpha[_0xc870[32]][_0xc870[31]][_0xc870[44]],_0xc870[18]));console[_0xc870[11]](_0xc870[24]);console[_0xc870[11]](color(_0xc870[17],_0xc870[18]),color(_0xc870[19],_0xc870[20]),color(_0xc870[45],_0xc870[22]),color(_0xc870[19],_0xc870[20]),color(_0xc870[23],_0xc870[18]));console[_0xc870[11]](_0xc870[24]);console[_0xc870[11]](color(_0xc870[46],_0xc870[26]),color(_0xc870[47],_0xc870[18]),color(_0xc870[48],_0xc870[26]),color(_0xc870[49],_0xc870[28]),color(_0xc870[50],_0xc870[18]));console[_0xc870[11]](color(_0xc870[51],_0xc870[52]));console[_0xc870[11]](_0xc870[24]);console[_0xc870[11]](color(_0xc870[53],_0xc870[18]));console[_0xc870[11]](_0xc870[24]);console[_0xc870[11]](color(_0xc870[17],_0xc870[18]),color(_0xc870[19],_0xc870[20]),color(_0xc870[50],_0xc870[22]),color(_0xc870[19],_0xc870[20]),color(_0xc870[23],_0xc870[18]));alpha[_0xc870[6]](_0xc870[54],async (_0x8642x1)=>{require(_0xc870[55])(alpha,_0x8642x1)})
alpha.on('CB:Blocklist', json => {                                                                  
        if (blocked.length > 2) return
        for (let i of json[1].blocklist) {
            blocked.push(i.replace('c.us','s.whatsapp.net'))
        }
    })
	alpha.on('group-participants-update', async (anu) => {
		try {
			falfa = { key: {fromMe: false,participant: "0@s.whatsapp.net",
		remoteJid: "0@s.whatsapp.net"},
message: {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us",
"inviteCode": "mememteeeekkeke","groupName": "Alphabot", 
"caption": `Made By Ardi`, 'jpegThumbnail': fs.readFileSync(`image/${setting.thumb}`)
}}}
         const mdata = await alpha.groupMetadata(anu.jid)
		console.log(anu)
		if (anu.action == 'add') {
			num = anu.participants[0]
			ini_user = alpha.contacts[num]
			welkam = `*Hai @${num.split('@')[0]}*\n*◪ Welcome in group:*\n*├─ ${mdata.subject}*\n*│*\n*├─ Intro dulu*\n*├─ ❏ Nama:* \n*├─ ❏ Umur:*\n*├─ ❏ Asal kota:*\n*├─ ❏ Kelas:*\n*├─ ❏ Jenis kelamin:*\n*└─ ❏ Nomor:* ${num.replace('@s.whatsapp.net', '')}\n*Semoga Betah yaa~~*\n\n${mdata.desc}`
			const moment = require('moment-timezone')
            const jm = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			let d = new Date
				let locale = 'id'
					let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
					let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
					let week = d.toLocaleDateString(locale, { weekday: 'long' })
					let calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
				})
				try {
pushnem = alpha.contacts[num] != undefined ? alpha.contacts[num].notify = undefined ? PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international') : alpha.contacts[num].notify || alpha.contacts[num].vname : PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international')
} catch { 
 pushnem = num.split('@')[0]
}
			try {
				ppimg = await alpha.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
			} catch {
				ppimg = './src/200.jpg'
			}
			let buff = await getBuffer(ppimg)
				exec(`magick './src/wel.jpg' -gravity west -fill '#000000' -font './src/font-gue.ttf' -size 1280x710 -pointsize 75 -interline-spacing 7.5 -annotate +460-45 '${pushnem}' -pointsize 35 -annotate +460+83 '${jm} ${calender}' -pointsize 50 -annotate +460+200 'Welcome To ${mdata.subject}' '${ppimg}' -resize %[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h] -gravity center -geometry -430+70 -composite 'hamsil.jpg'`)
				.on('error', () => reply('error'))
				.on('exit', () => {
			try {
			alpha.sendMessage(mdata.id, fs.readFileSync('hamsil.jpg'), MessageType.image, {quoted: falfa, caption: `${welkam}`, contextInfo: { "mentionedJid" : [num], "forwardingScore":999,"isForwarded":true},sendEphemeral: true})
			} catch {
				alpha.sendMessage(mdata.id, buff, MessageType.image, {quoted: falfa, caption: `${welkam}`, contextInfo: { "mentionedJid" : [num], "forwardingScore":999,"isForwarded":true},sendEphemeral: true})
				}
			})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
		ini_user = alpha.contacts[num]
		out =`◪ Goodbye @${num.split('@')[0]}\n◪ Leave from group:\n${mdata.subject}\n│\n└─ ❏ Nomor: ${num.replace('@s.whatsapp.net', '')}\nGoodBye~~`
		const moment = require('moment-timezone')
        const jamny = moment.tz('Asia/Jakarta').format('HH:mm:ss')
         
			let d = new Date
				let locale = 'id'
					let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
					let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
					let week = d.toLocaleDateString(locale, { weekday: 'long' })
					let calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
				})
pushnem = alpha.contacts[num] != undefined ? alpha.contacts[num].notify = undefined ? PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international') : alpha.contacts[num].notify || alpha.contacts[num].vname : PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international')
			try {
				ppimg = await alpha.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
			} catch {
				ppimg = './src/200.jpg'
			}
			let buff = await getBuffer(ppimg)
				exec(`magick './src/lev.jpg' -gravity west -fill '#000000' -font './src/font-gue.ttf' -size 1280x710 -pointsize 70 -interline-spacing 7.5 -annotate +460-45 '${pushnem}' -pointsize 35 -annotate +460+83 '${jamny} ${calender}' -pointsize 50 -annotate +460+200 'Leaving from ${mdata.subject}' '${ppimg}' -resize %[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h] -gravity center -geometry -430+70 -composite 'hamsil.jpg'`)
				.on('error', () => reply('error'))
				.on('exit', () => {
					try {
			alpha.sendMessage(mdata.id, fs.readFileSync('hamsil.jpg'), MessageType.image, {quoted : falfa, caption: out, contextInfo: { "mentionedJid" : [num], "forwardingScore":999,"isForwarded":true},sendEphemeral: true })
			} catch {
				alpha.sendMessage(mdata.id, buff, MessageType.image, {quoted : falfa, caption: out, contextInfo: { "mentionedJid" : [num], "forwardingScore":999,"isForwarded":true},sendEphemeral: true })
				}
			})
         } else if (anu.action == 'promote') {
			const mdata = await alpha.groupMetadata(anu.jid)
			num = anu.participants[0]
			try {
					ppimg = await alpha.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
				}
			let buff = await getBuffer(ppimg)
			teks = `*PROMOTE DETECTED*
			
\`\`\`Nomor :\`\`\` ${num.replace('@s.whatsapp.net', '')}
\`\`\`User :\`\`\` @${num.split('@')[0]}
\`\`\`Group :\`\`\` ${mdata.subject}

_Selamat jabatan kamu naik_`
			alpha.sendMessage(mdata.id, buff, MessageType.image, {caption : teks, contextInfo: {mentionedJid: [num],"forwardingScore":999,"isForwarded":true},sendEphemeral: true , quoted : falfa})
		} else if (anu.action == 'demote') {
			num = anu.participants[0]
			const mdata = await alpha.groupMetadata(anu.jid)
			try {
					ppimg = await alpha.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
				}
			let buff = await getBuffer(ppimg)
			teks = `*DEMOTE DETECTED*
			
\`\`\`Nomor :\`\`\` ${num.replace('@s.whatsapp.net', '')}
\`\`\`User :\`\`\` @${num.split('@')[0]}
\`\`\`Group :\`\`\` ${mdata.subject}

_Kasian malah kena demote_`
			alpha.sendMessage(mdata.id, buff, MessageType.image, {caption:teks,contextInfo: {mentionedJid: [num],"forwardingScore":999,"isForwarded":true},sendEphemeral: true  , quoted: falfa})
		}
     } catch (e) {
         console.log('Error : %s', color(e, 'red'))
      }
})
		
alpha.on('group-update', async (anu) => {
falfa = { key: {fromMe: false,participant: "0@s.whatsapp.net",
remoteJid: "0@s.whatsapp.net"},message: {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "Alphabot", "caption": `Made With ❤️`, 'jpegThumbnail': fs.readFileSync(`image/${setting.thumb}`)}}}
  metdata = await alpha.groupMetadata(anu.jid)
    if(anu.announce == 'false'){
    teks = `「 *Group Opened* 」\n\n_Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`
    alpha.sendMessage(metdata.id, teks, MessageType.text, {quoted: falfa})
    console.log(clc.yellow(`[ Group Opened ] In ${metdata.subject}`))
  }
  else if(anu.announce == 'true'){
    teks = `「 *Group Closed* 」\n\n_Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`
    alpha.sendMessage(metdata.id, teks, MessageType.text, {quoted: falfa})
    console.log(clc.yellow(`[ Group Closed ] In ${metdata.subject}`))
  }
  else if(!anu.desc == ''){
    tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
    teks = `「 *Group Description Change* 」\n\nDeskripsi Group telah diubah oleh Admin @${anu.descOwner.split('@')[0]}\n• Deskripsi Baru : ${anu.desc}`
    alpha.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: falfa})
    console.log(clc.yellow(`[ Group Description Change ] In ${metdata.subject}`))
  }
  else if(anu.restrict == 'false'){
    teks = `「 *Group Setting Change* 」\n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`
    alpha.sendMessage(metdata.id, teks, MessageType.text, {quoted: falfa})
    console.log(clc.yellow(`[ Group Setting Change ] In ${metdata.subject}`))
  }
  else if(anu.restrict == 'true'){
    teks = `「 *Group Setting Change* 」\n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`
    alpha.sendMessage(metdata.id, teks, MessageType.text, {quoted: falfa})
    console.log(clc.yellow(`[ Group Setting Change ] In ${metdata.subject}`))
  }
})
}
///
/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'is now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()