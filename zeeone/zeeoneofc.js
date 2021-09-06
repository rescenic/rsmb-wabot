const petik = '```'
exports.help = (prefix,hahh,pushname,ownername,status) => {
	return`${hahh} ${pushname}

*◪  ❲ INFORMATION ❳*
${petik}├❒ Owner : ${ownername}
├❒ Base : Self-Bot°©2K21
├❒ Status : ${status}
├❒ Lib : Baileys「 v3.5.0 」
└❒ Prefix : [ ${prefix} ]${petik}

*◪  ❲ LIST MENU ❳*
${petik}├❒ ${prefix}menu2
├❒ ${prefix}convertmenu
├❒ ${prefix}downloadmenu
├❒ ${prefix}funmenu
├❒ ${prefix}makermenu
├❒ ${prefix}othermenu
├❒ ${prefix}ownermenu
├❒ ${prefix}storagemenu
├❒ ${prefix}tagmenu
└❒ ${prefix}upmenu${petik}

*◪  ❲ ABOUT ❳*
${petik}├❒ ${prefix}source
├❒ ${prefix}mystat
├❒ ${prefix}speed
├❒ ${prefix}status
└❒ ${prefix}runtime${petik}

❒ _Creator BotWea © 2K21_ ❒
`
}
exports.convert = (prefix) => {
	return`*◪  ❲ CONVERT MENU ❳*
${petik}├❒ ${prefix}toimg
├❒ ${prefix}tomp3
├❒ ${prefix}tomp4
├❒ ${prefix}slow
├❒ ${prefix}fast
├❒ ${prefix}reverse
└❒ ${prefix}tourl${petik}
`
}
exports.download = (prefix) => {
	return`*◪  ❲ DOWNLOAD MENU ❳*
${petik}├❒ ${prefix}ytsearch${petik} _query_
${petik}├❒ ${prefix}igstalk${petik} _username_
${petik}├❒ ${prefix}ghstalk${petik} _username_
${petik}├❒ ${prefix}play${petik} _query_
${petik}├❒ ${prefix}video${petik} _query_
${petik}├❒ ${prefix}ytmp3${petik} _link_
${petik}├❒ ${prefix}ytmp4${petik} _link_
${petik}├❒ ${prefix}ig${petik} _link_
${petik}├❒ ${prefix}twitter${petik} _link_
${petik}├❒ ${prefix}tiktok${petik} _link_
${petik}├❒ ${prefix}tiktokaudio${petik} _link_
${petik}├❒ ${prefix}fb${petik} _link_
${petik}├❒ ${prefix}brainly${petik} _query_
${petik}├❒ ${prefix}image${petik} _query_
${petik}└❒ ${prefix}anime${petik} _random_
`
}

exports.fun = (prefix) => {
	return`*◪  ❲ DOWNLOAD MENU ❳*
${petik}├❒ ${prefix}fitnah
├❒ ${prefix}fitnahpc
└❒ ${prefix}kontak${petik}
`
}

exports.maker = (prefix) => {
	return`*◪  ❲ MAKER MENU ❳*
${petik}├❒ ${prefix}sticker${petik}
${petik}├❒ ${prefix}swm${petik} author|packname
${petik}├❒ ${prefix}take${petik} author|packname
${petik}├❒ ${prefix}fdeface
└❒ ${prefix}emoji${petik}
`
}

exports.other = (prefix) => {
	return`*◪  ❲ OTHER MENU ❳*
${petik}├❒ ${prefix}add
├❒ ${prefix}ping${petik}
${petik}├❒ ${prefix}get${petik} _link_
${petik}├❒ ${prefix}getpp${petik} _@user_
${petik}├❒ ${prefix}getbio${petik} _@user_
${petik}├❒ ${prefix}tagall
├❒ ${prefix}admin
├❒ ${prefix}hentai
├❒ ${prefix}trapnime
├❒ ${prefix}blowjob
├❒ ${prefix}awoo
└❒ ${prefix}megumin${petik}
`
}

exports.owner = (prefix) => {
	return`*◪  ❲ OWNER MENU ❳*
${petik}├❒ ${prefix}off
├❒ ${prefix}on
├❒ ${prefix}buggc
├❒ ${prefix}bc
├❒ ${prefix}bcimage
├❒ ${prefix}bcgif
├❒ ${prefix}bcvideo
├❒ ${prefix}bcaudio
├❒ ${prefix}bcsticker
├❒ ${prefix}status
├❒ ${prefix}clearall
├❒ ${prefix}self
├❒ ${prefix}public
├❒ ${prefix}join
├❒ ${prefix}leave
├❒ ${prefix}clearall
├❒ ${prefix}setthumb
├❒ ${prefix}settarget
├❒ ${prefix}setfakeimg
├❒ ${prefix}setreply${petik}
${petik}├❒ ${prefix}term${petik} _code_
${petik}└❒ x or >${petik} _code_
`
}

exports.storage = (prefix) => {
	return`*◪  ❲ STORAGE MENU ❳*
${petik}├❒ ${prefix}addstik 
├❒ ${prefix}addimg 
├❒ ${prefix}addvid 
├❒ ${prefix}addvn   
├❒ ${prefix}liststick
├❒ ${prefix}listimg
├❒ ${prefix}listvid
└❒ ${prefix}listvn${petik}
`
}

exports.tag = (prefix) => {
	return`*◪  ❲ TAG MENU ❳*
${petik}├❒ ${prefix}hidetag
├❒ ${prefix}kontag
├❒ ${prefix}sticktag
└❒ ${prefix}totag${petik}
`
}

exports.upmenu = (prefix) => {
	return`*◪  ❲ UP ESWE ❳*
${petik}├❒ ${prefix}upswteks
├❒ ${prefix}upswimage
└❒ ${prefix}upswvideo${petik}
`
}
