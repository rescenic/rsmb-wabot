const {
    WAConnection,
    MessageType,
    Presence,
    MessageOptions,
    Mimetype,
    WALocationMessage,
    WA_MESSAGE_STUB_TYPES,
    WA_DEFAULT_EPHEMERAL,
    WAMessageProto,
    ReconnectMode,
    ProxyAgent,
    GroupSettingChange,
    waChatKey,
    mentionedJid,
    processTime,
} = require("@adiwajshing/baileys");
const qrcode = require("qrcode-terminal");
const moment = require("moment-timezone");
const speed = require("performance-now");
const request = require("request");
const { spawn, exec, execSync } = require("child_process");
const fs = require("fs");
const axios = require("axios");
const ffmpeg = require("fluent-ffmpeg");
const { EmojiAPI } = require("emoji-api");
const tik = require("tiktok-scraper-without-watermark");
const ig = require("insta-fetcher");
const emoji = new EmojiAPI();
const fetch = require("node-fetch");
const Fb = require("fb-video-downloader");
const twitterGetUrl = require("twitter-url-direct");
const phoneNum = require("awesome-phonenumber");
const gis = require("g-i-s");
const got = require("got");
const crypto = require("crypto");
const imageToBase64 = require("image-to-base64");
const ID3Writer = require("browser-id3-writer");
const brainly = require("brainly-scraper");
const yts = require("yt-search");
const ms = require("parse-ms");
const toMs = require("ms");
const setting = JSON.parse(fs.readFileSync("./settings.json"));
const antilink = JSON.parse(fs.readFileSync("./src/antilink.json"));
const welkom = JSON.parse(fs.readFileSync("./src/welkom.json"));
let filter = JSON.parse(fs.readFileSync("./src/filter.json"));
const setiker = JSON.parse(fs.readFileSync("./temp/stik.json"));
const audionye = JSON.parse(fs.readFileSync("./temp/vn.json"));
const imagenye = JSON.parse(fs.readFileSync("./temp/image.json"));
const videonye = JSON.parse(fs.readFileSync("./temp/video.json"));
const sfilter = JSON.parse(fs.readFileSync("./src/sfilter.json"));
const gcdetect = JSON.parse(fs.readFileSync("./src/gcdetect.json"));
const { error } = require("qrcode-terminal");
const {
    getBuffer,
    h2k,
    generateMessageID,
    getGroupAdmins,
    getRandom,
    banner,
    start,
    info,
    success,
    close,
} = require("./lib/functions");
const { color, bgcolor } = require("./lib/color");
const { fetchJson, getBase64, kyun, createExif } = require("./lib/fetcher");
const { yta, ytv, igdl, upload } = require("./lib/ytdl");
const { webp2mp4File } = require("./lib/webp2mp4");
const time = moment().tz("Asia/Jakarta").format("HH:mm:ss");
const afk = JSON.parse(fs.readFileSync("./lib/off.json"));
const { sleep, isAfk, cekafk, addafk } = require("./lib/offline");
const { zeeoneofc } = require("./zeeone");
const _Elite = JSON.parse(fs.readFileSync("./alpha/Elite.json"));

shop = "RESCENIC SHOP";
thumbnail = setting.thumb;
fthumb = setting.fakethumb;
hit_today = [];
blocked = [];
prefix = setting.prefix;
banChats = true;
offline = false;
img = setting.img;
baper = "RESCENIC SHOP";
apiku = "api-alphabot.herokuapp.com";
targetpc = setting.ownerNumber;
owner = setting.ownerNumber;
fake = setting.fake;
numbernye = "0";
waktu = "-";
alasan = "-";
botname = setting.botname;
ownername = setting.ownername;
cr = setting.cr;
petik = "```";
msgId = "B826873620DD5947E683E3ABE663F263";
//=================================================//
module.exports = alpha = async (alpha, mek) => {
    try {
        if (!mek.hasNewMessage) return;
        mek = mek.messages.all()[0];
        if (!mek.message) return;
        if (mek.key && mek.key.remoteJid == "status@broadcast") return;
        global.blocked;
        mek.message =
            Object.keys(mek.message)[0] === "ephemeralMessage"
                ? mek.message.ephemeralMessage.message
                : mek.message;
        const content = JSON.stringify(mek.message);
        const from = mek.key.remoteJid;
        const {
            text,
            extendedText,
            contact,
            location,
            liveLocation,
            image,
            video,
            sticker,
            document,
            audio,
            product,
        } = MessageType;
        const time = moment.tz("Asia/Jakarta").format("DD/MM HH:mm:ss");
        const type = Object.keys(mek.message)[0];
        //const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        //const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'
        body =
            type === "conversation" &&
            mek.message.conversation.startsWith(prefix)
                ? mek.message.conversation
                : type == "imageMessage" &&
                  mek.message.imageMessage.caption.startsWith(prefix)
                ? mek.message.imageMessage.caption
                : type == "videoMessage" &&
                  mek.message.videoMessage.caption.startsWith(prefix)
                ? mek.message.videoMessage.caption
                : type == "extendedTextMessage" &&
                  mek.message.extendedTextMessage.text.startsWith(prefix)
                ? mek.message.extendedTextMessage.text
                : "";
        budy =
            type === "conversation"
                ? mek.message.conversation
                : type === "extendedTextMessage"
                ? mek.message.extendedTextMessage.text
                : "";
        var pes =
            type === "conversation" && mek.message.conversation
                ? mek.message.conversation
                : type == "imageMessage" && mek.message.imageMessage.caption
                ? mek.message.imageMessage.caption
                : type == "videoMessage" && mek.message.videoMessage.caption
                ? mek.message.videoMessage.caption
                : type == "extendedTextMessage" &&
                  mek.message.extendedTextMessage.text
                ? mek.message.extendedTextMessage.text
                : "";
        const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase();
        const command = body.slice(0).trim().split(/ +/).shift().toLowerCase();
        hit_today.push(command);
        const args = body.trim().split(/ +/).slice(1);
        const isCmd = body.startsWith(prefix);
        const q = args.join(" ");
        const botNumber = alpha.user.jid;
        const botNumberss = alpha.user.jid + "@c.us";
        const isGroup = from.endsWith("@g.us");
        const sender = mek.key.fromMe
            ? alpha.user.jid
            : isGroup
            ? mek.participant
            : mek.key.remoteJid;
        const timi = moment.tz("Asia/Jakarta").add(30, "days").calendar();
        const timu = moment.tz("Asia/Jakarta").add(20, "days").calendar();
        const wita = moment.tz("Asia/Makassar").format("HH:mm:ss");
        const wib = moment.tz("Asia/Jakarta").format("HH:mm:ss");
        const wit = moment.tz("Asia/Jayapura").format("HH:mm:ss");
        const totalchat = await alpha.chats.all();
        const groupMetadata = isGroup ? await alpha.groupMetadata(from) : "";
        const groupName = isGroup ? groupMetadata.subject : "";
        const groupId = isGroup ? groupMetadata.jid : "";
        const groupMembers = isGroup ? groupMetadata.participants : "";
        const groupDesc = isGroup ? groupMetadata.desc : "";
        const groupOwner = isGroup ? groupMetadata.owner : "";
        const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : "";
        const isBotGroupAdmins = groupAdmins.includes(botNumber) || false;
        const isGroupAdmins = groupAdmins.includes(sender) || false;
        const isAntiLink = isGroup ? antilink.includes(from) : false;
        const ratee = ["106", "106", "106", "106", "106", "106", "106"];
        const tee = ratee[Math.floor(Math.random() * ratee.length)];
        const rateee = [
            "Dj storongest jedag jedug 30 s",
            "Dj akimilaku remix terbaru 2021 30 s",
            "Dj campuran 30 detik",
            "Dj sidro 2  style Thailand viral 30 s",
            "Dj disitu enak susu akimilaku 30 s",
            "Dj zombie x melody stres love 30 s",
            "Dj numa muma ye style Thailand 30 s",
            "Dj biasalah x bola boma ye 30 s",
        ];
        const srchh = rateee[Math.floor(Math.random() * rateee.length)];
        const tescuk = ["0@s.whatsapp.net"];
        const conts = mek.key.fromMe
            ? alpha.user.jid
            : alpha.contacts[sender] || { notify: jid.replace(/@.+/, "") };
        const pushname = mek.key.fromMe
            ? alpha.user.name
            : conts.notify || conts.vname || conts.name || "-";
        const timuu = moment.tz("Asia/Jakarta").format("HH:mm:ss");
        const hariRaya = new Date("Jan 12, 2022 07:00:00");
        const sekarang = new Date().getTime();
        const Selisih = hariRaya - sekarang;
        const jhari = Math.floor(Selisih / (1000 * 60 * 60 * 24));
        const jjam = Math.floor(
            (Selisih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const mmmenit = Math.floor((Selisih % (1000 * 60 * 60)) / (1000 * 60));
        const ddetik = Math.floor((Selisih % (1000 * 60)) / 1000);
        const ultah = `${jhari}Hari ${jjam}Jam ${mmmenit}Menit ${ddetik}Detik`;
        var date = new Date();
        var tahun = date.getFullYear();
        var bulan1 = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var waktoo = date.getHours();
        switch (hari) {
            case 0:
                hari = "Minggu";
                break;
            case 1:
                hari = "Senin";
                break;
            case 2:
                hari = "Selasa";
                break;
            case 3:
                hari = "Rabu";
                break;
            case 4:
                hari = "Kamis";
                break;
            case 5:
                hari = "Jum`at";
                break;
            case 6:
                hari = "Sabtu";
                break;
        }
        switch (bulan1) {
            case 0:
                bulan1 = "Januari";
                break;
            case 1:
                bulan1 = "Februari";
                break;
            case 2:
                bulan1 = "Maret";
                break;
            case 3:
                bulan1 = "April";
                break;
            case 4:
                bulan1 = "Mei";
                break;
            case 5:
                bulan1 = "Juni";
                break;
            case 6:
                bulan1 = "Juli";
                break;
            case 7:
                bulan1 = "Agustus";
                break;
            case 8:
                bulan1 = "September";
                break;
            case 9:
                bulan1 = "Oktober";
                break;
            case 10:
                bulan1 = "November";
                break;
            case 11:
                bulan1 = "Desember";
                break;
        }
        var tampilTanggal =
            "" + hari + ", " + tanggal + " " + bulan1 + " " + tahun;
        var tampilWaktu = "" + jam + ":" + menit + ":" + detik;
        var ase = new Date();
        var waktoo = ase.getHours();
        switch (waktoo) {
            case 0:
                waktoo = "Selamat Malam 🌚";
                break;
            case 1:
                waktoo = "Selamat Malam 🌚";
                break;
            case 2:
                waktoo = "Selamat Malam 🌚";
                break;
            case 3:
                waktoo = "Selamat Malam 🌚";
                break;
            case 4:
                waktoo = "Selamat Pagi 🌞";
                break;
            case 5:
                waktoo = "Selamat Pagi 🌞";
                break;
            case 6:
                waktoo = "Selamat Pagi 🌞";
                break;
            case 7:
                waktoo = "Selamat Pagi 🌞";
                break;
            case 8:
                waktoo = "Selamat Pagi 🌞";
                break;
            case 9:
                waktoo = "Selamat Pagi 🌞";
                break;
            case 10:
                waktoo = "Selamat Pagi 🌞";
                break;
            case 11:
                waktoo = "Waktu Dzuhur , jangan lupa shalat";
                break;
            case 12:
                waktoo = "Selamat Siang ☀️";
                break;
            case 13:
                waktoo = "Selamat Siang ☀️";
                break;
            case 14:
                waktoo = "Waktu Ashar , jangan lupa shalat";
                break;
            case 15:
                waktoo = "Selamat Sore 🌌";
                break;
            case 16:
                waktoo = "Selamat Sore 🌌";
                break;
            case 17:
                waktoo = "Selamat Sore 🌌";
                break;
            case 18:
                waktoo = "Waktu Magrib, jangan lupa shalat";
                break;
            case 19:
                waktoo = "Waktu Isya, jangan lupa shalat";
                break;
            case 20:
                waktoo = "Selamat Malam 🌃";
                break;
            case 21:
                waktoo = "Selamat Malam 🌃";
                break;
            case 22:
                waktoo = "Selamat Malam 🌃";
                break;
            case 23:
                waktoo = "Selamat Malam 🌃";
                break;
        }
        var hahh = "" + waktoo;
        var ase = new Date();
        var waktoonyabro = ase.getHours();
        switch (waktoonyabro) {
            case 0:
                waktoonyabro = `Selamat Malam 🌛 ${pushname}`;
                break;
            case 1:
                waktoonyabro = `Selamat Malam 🌛 ${pushname}`;
                break;
            case 2:
                waktoonyabro = `Selamat Malam 🌛 ${pushname}`;
                break;
            case 3:
                waktoonyabro = `Selamat Pagi ✨ ${pushname}`;
                break;
            case 4:
                waktoonyabro = `Selamat Pagi ✨ ${pushname}`;
                break;
            case 5:
                waktoonyabro = `Selamat Pagi ✨ ${pushname}`;
                break;
            case 6:
                waktoonyabro = `Selamat Pagi ✨ ${pushname}`;
                break;
            case 7:
                waktoonyabro = `Selamat Pagi ✨ ${pushname}`;
                break;
            case 8:
                waktoonyabro = `Selamat Pagi ✨ ${pushname}`;
                break;
            case 9:
                waktoonyabro = `Selamat Pagi ✨ ${pushname}`;
                break;
            case 10:
                waktoonyabro = `Selamat Pagi ✨ ${pushname}`;
                break;
            case 11:
                waktoonyabro = `Selamat Siang 🔥 ${pushname}`;
                break;
            case 12:
                waktoonyabro = `Selamat Siang 🔥 ${pushname}`;
                break;
            case 13:
                waktoonyabro = `Selamat Siang 🔥 ${pushname}`;
                break;
            case 14:
                waktoonyabro = `Selamat Siang 🔥 ${pushname}`;
                break;
            case 15:
                waktoonyabro = `Selamat Sore 🌹${pushname}`;
                break;
            case 16:
                waktoonyabro = `Selamat Sore 🌹${pushname}`;
                break;
            case 17:
                waktoonyabro = `Selamat Sore 🌹${pushname}`;
                break;
            case 18:
                waktoonyabro = `Selamat Malam 🌛 ${pushname}`;
                break;
            case 19:
                waktoonyabro = `Selamat Malam 🌛 ${pushname}`;
                break;
            case 20:
                waktoonyabro = `Selamat Malam 🌛 ${pushname}`;
                break;
            case 21:
                waktoonyabro = `Selamat Malam 🌛 ${pushname}`;
                break;
            case 22:
                waktoonyabro = `Selamat Malam 🌛 ${pushname}`;
                break;
            case 23:
                waktoonyabro = `Selamat Malam 🌛 ${pushname}`;
                break;
        }
        var ucapannya = "" + waktoonyabro;
        mess = {
            wait: "BENTAR",
            success: "Berhasil!",
            wrongFormat: "Format salah, coba liat lagi di menu",
            error: {
                stick: "Itu bukan stiker",
                Iv: "Linknya error:v",
            },
            only: {
                group: "Only Group",
            },
        };
        const isUrl = (url) => {
            return url.match(
                new RegExp(
                    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/,
                    "gi"
                )
            );
        };

        const reply = (teks) => {
            alpha.sendMessage(from, teks, text, {
                quoted: mek,
                thumbnail: fs.readFileSync(`image/${thumbnail}`),
                contextInfo: { forwardingScore: 999, isForwarded: true },
                sendEphemeral: true,
            });
        };
        const sendText = async (txt) => {
            return alpha.sendText(from, txt).catch((e) => {
                console.log(e);
            });
        };

        const sendMess = (hehe, teks) => {
            alpha.sendMessage(hehe, teks, text);
        };

        const mentions = (teks, memberr, id) => {
            id == null || id == undefined || id == false
                ? alpha.sendMessage(from, teks.trim(), extendedText, {
                      contextInfo: { mentionedJid: memberr },
                  })
                : alpha.sendMessage(from, teks.trim(), extendedText, {
                      quoted: mek,
                      contextInfo: { mentionedJid: memberr },
                  });
        };

        const fakestatus = (teks) => {
            alpha.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`,
                        ...(from ? { remoteJid: "status@broadcast" } : {}),
                    },
                    message: {
                        imageMessage: {
                            url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            mimetype: "image/jpeg",
                            caption: fake,
                            fileSha256:
                                "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            fileLength: "28777",
                            height: 1080,
                            width: 1079,
                            mediaKey:
                                "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            fileEncSha256:
                                "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            directPath:
                                "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            mediaKeyTimestamp: "1610993486",
                            jpegThumbnail: fs.readFileSync(
                                `image/${thumbnail}`
                            ),
                            scansSidecar:
                                "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==",
                        },
                    },
                },
                contextInfo: { forwardingScore: 999, isForwarded: true },
                sendEphemeral: true,
            });
        };
        const fakethumb = (teks, yes) => {
            alpha.sendMessage(from, teks, image, {
                thumbnail: fs.readFileSync(`./image/${tee}.jpg`),
                quoted: mek,
                caption: yes,
            });
        };
        const fakegroup = (teks) => {
            alpha.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`,
                        ...(from
                            ? { remoteJid: "6289523258649-1604595598@g.us" }
                            : {}),
                    },
                    message: {
                        imageMessage: {
                            url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            mimetype: "image/jpeg",
                            caption: fake,
                            fileSha256:
                                "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            fileLength: "28777",
                            height: 1080,
                            width: 1079,
                            mediaKey:
                                "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            fileEncSha256:
                                "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            directPath:
                                "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            mediaKeyTimestamp: "1610993486",
                            jpegThumbnail: fs.readFileSync(
                                `./image/${thumbnail}`
                            ),
                            scansSidecar:
                                "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==",
                        },
                    },
                },
                contextInfo: { forwardingScore: 999, isForwarded: true },
                sendEphemeral: true,
            });
        };
        const ftoko = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {}),
            },
            message: {
                productMessage: {
                    product: {
                        productImage: {
                            mimetype: "image/jpeg",
                            jpegThumbnail: fs.readFileSync(
                                `image/${thumbnail}`
                            ), //Gambarnye
                        },
                        title: `${shop}`,
                        description: "SELF BOT",
                        currencyCode: "IDR",
                        priceAmount1000: "70000000",
                        retailerId: `${shop}`,
                        productImageCount: 1,
                    },
                    businessOwnerJid: `62887435047326@s.whatsapp.net`,
                },
            },
        };
        const ftroli = {
            key: {
                fromMe: false,
                participant: "0@s.whatsapp.net",
                remoteJid: "6289523258649-1604595598@g.us",
            },
            message: {
                orderMessage: {
                    itemCount: 10,
                    status: 200,
                    thumbnail: fs.readFileSync(`image/${thumbnail}`),
                    surface: 200,
                    message: `${shop}`,
                    orderTitle: "zeeoneofc",
                    sellerJid: "0@s.whatsapp.net",
                },
            },
            contextInfo: { forwardingScore: 999, isForwarded: true },
            sendEphemeral: true,
        };

        const fakeitem = (teks) => {
            alpha.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`,
                        ...(from
                            ? {
                                  remoteJid: "6289523258649-1604595598@g.us",
                              }
                            : {}),
                    },
                    message: {
                        orderMessage: {
                            orderId: "174238614569481",
                            thumbnail: fs.readFileSync(`image/${thumbnail}`),
                            itemCount: 10,
                            status: "INQUIRY",
                            surface: "CATALOG",
                            message: `${setting.botname}`,
                            token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA==",
                        },
                    },
                },
                contextInfo: { forwardingScore: 999, isForwarded: true },
                sendEphemeral: true,
            });
        };
        const fakedoc = (teks) => {
            alpha.sendMessage(from, teks, text, {
                contextInfo: { mentionedJid: [sender] },
                quoted: {
                    key: {
                        participant: `${numbernye}@s.whatsapp.net`,
                        remoteJid: "6283136505591-1614953337@g.us",
                        fromMe: false,
                        id: "B391837A58338BA8186C47E51FFDFD4A",
                    },
                    message: {
                        documentMessage: {
                            jpegThumbnail: fs.readFileSync(
                                `image/${thumbnail}`
                            ),
                            mimetype: "application/octet-stream",
                            title: "YT : ZEEONE OFC",
                            fileLength: "36",
                            pageCount: 0,
                            fileName: `Alphabot.zip`,
                        },
                    },
                    messageTimestamp: "1614069378",
                    status: "PENDING",
                },
            });
        };
        const fkontak = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}),
            },
            message: {
                contactMessage: {
                    displayName: `${cr}`,
                    vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${cr},;;;\nFN:${cr},\nitem1.TEL;waid=${
                        sender.split("@")[0]
                    }:${
                        sender.split("@")[0]
                    }\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
                    jpegThumbnail: fs.readFileSync(`image/${thumbnail}`),
                    thumbnail: fs.readFileSync(`image/${thumbnail}`),
                    sendEphemeral: true,
                },
            },
        };
        const sendStickerFromUrl = async (to, url) => {
            var names = Date.now() / 10000;
            var download = function (uri, filename, callback) {
                request.head(uri, function (err, res, body) {
                    request(uri)
                        .pipe(fs.createWriteStream(filename))
                        .on("close", callback);
                });
            };
            download(url, "./stik" + names + ".png", async function () {
                console.log("selesai");
                let filess = "./stik" + names + ".png";
                let asw = "./stik" + names + ".webp";
                exec(
                    `ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`,
                    (err) => {
                        let media = fs.readFileSync(asw);
                        alpha.sendMessage(to, media, MessageType.sticker, {
                            quoted: mek,
                        });
                        fs.unlinkSync(filess);
                        fs.unlinkSync(asw);
                    }
                );
            });
        };
        const sendMediaURL = async (to, url, text = "", mids = []) => {
            if (mids.length > 0) {
                text = normalizeMention(to, text, mids);
            }
            const fn = Date.now() / 10000;
            const filename = fn.toString();
            let mime = "";
            var download = function (uri, filename, callback) {
                request.head(uri, function (err, res, body) {
                    mime = res.headers["content-type"];
                    request(uri)
                        .pipe(fs.createWriteStream(filename))
                        .on("close", callback);
                });
            };
            download(url, filename, async function () {
                console.log("done");
                let media = fs.readFileSync(filename);
                let type = mime.split("/")[0] + "Message";
                if (mime === "image/gif") {
                    type = MessageType.video;
                    mime = Mimetype.gif;
                }
                if (mime.split("/")[0] === "audio") {
                    mime = Mimetype.mp4Audio;
                }
                alpha.sendMessage(to, media, type, {
                    quoted: mek,
                    mimetype: mime,
                    caption: text,
                    contextInfo: { mentionedJid: mids },
                });

                fs.unlinkSync(filename);
            });
        };
        async function sendFileFromUrl(from, url, caption, mek, men) {
            let mime = "";
            let res = await axios.head(url);
            mime = res.headers["content-type"];
            let type = mime.split("/")[0] + "Message";
            if (mime === "image/gif") {
                type = MessageType.video;
                mime = Mimetype.gif;
            }
            if (mime === "application/pdf") {
                type = MessageType.document;
                mime = Mimetype.pdf;
            }
            if (mime.split("/")[0] === "audio") {
                mime = Mimetype.mp4Audio;
            }
            return alpha.sendMessage(from, await getBuffer(url), type, {
                caption: caption,
                quoted: mek,
                mimetype: mime,
                contextInfo: { mentionedJid: men ? men : [] },
            });
        }
        const textImg = (teks) => {
            return alpha.sendMessage(from, teks, text, {
                quoted: mek,
                thumbnail: fs.readFileSync(`image/${thumbnail}`),
            });
        };
        const getGroup = async function (totalchat) {
            let grup = [];
            let a = [];
            let b = [];
            for (c of totalchat) {
                a.push(c.jid);
            }
            for (d of a) {
                if (d && d.includes("g.us")) {
                    b.push(d);
                }
            }
            for (e of b) {
                let ingfo = await alpha.groupMetadata(e);
                grup.push(ingfo);
            }
            return grup;
        };
        const createSerial = (size) => {
            return crypto.randomBytes(size).toString("hex").slice(0, size);
        };
        const addEliteUser = (userid, sender, time, serials) => {
            const obj = {
                id: userid,
                name: sender,
                time: time,
                serial: serials,
            };
            _Elite.push(obj);
            fs.writeFileSync("./alpha/Elite.json", JSON.stringify(_Elite));
        };
        const checkEliteUser = (sender) => {
            let status = false;
            Object.keys(_Elite).forEach((i) => {
                if (_Elite[i].id === sender) {
                    status = true;
                }
            });
            return status;
        };
        const isElite = checkEliteUser(sender);
        //FUNCTION
        cekafk(afk);
        if (!mek.key.remoteJid.endsWith("@g.us") && offline) {
            if (!mek.key.fromMe) {
                if (isAfk(mek.key.remoteJid)) return;
                addafk(mek.key.remoteJid);
                heheh = ms(Date.now() - waktu);
                alpha.sendMessage(
                    mek.key.remoteJid,
                    `@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`,
                    MessageType.text,
                    {
                        contextInfo: {
                            mentionedJid: [`${owner}@s.whatsapp.net`],
                            stanzaId: "B826873620DD5947E683E3ABE663F263",
                            participant: "0@s.whatsapp.net",
                            remoteJid: "status@broadcast",
                            quotedMessage: {
                                imageMessage: {
                                    caption: "*OFFLINE*",
                                    jpegThumbnail: fs.readFileSync(
                                        `image/${thumbnail}`
                                    ),
                                },
                            },
                        },
                    }
                );
            }
        }
        if (mek.key.remoteJid.endsWith("@g.us") && offline) {
            if (!mek.key.fromMe) {
                if (mek.message.extendedTextMessage != undefined) {
                    if (
                        mek.message.extendedTextMessage.contextInfo != undefined
                    ) {
                        if (
                            mek.message.extendedTextMessage.contextInfo
                                .mentionedJid != undefined
                        ) {
                            for (let ment of mek.message.extendedTextMessage
                                .contextInfo.mentionedJid) {
                                if (ment === `${owner}@s.whatsapp.net`) {
                                    if (isAfk(mek.key.remoteJid)) return;
                                    addafk(mek.key.remoteJid);
                                    heheh = ms(Date.now() - waktu);
                                    alpha.sendMessage(
                                        mek.key.remoteJid,
                                        `@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`,
                                        MessageType.text,
                                        {
                                            contextInfo: {
                                                mentionedJid: [
                                                    `${owner}@s.whatsapp.net`,
                                                ],
                                                stanzaId:
                                                    "B826873620DD5947E683E3ABE663F263",
                                                participant: "0@s.whatsapp.net",
                                                remoteJid: "status@broadcast",
                                                quotedMessage: {
                                                    imageMessage: {
                                                        caption: "*OFFLINE*",
                                                        jpegThumbnail:
                                                            fs.readFileSync(
                                                                `image/${thumbnail}`
                                                            ),
                                                    },
                                                },
                                            },
                                        }
                                    );
                                }
                            }
                        }
                    }
                }
            }
        }

        //========================================================================================================================//
        colors = ["red", "white", "black", "blue", "yellow", "green"];
        const isMedia = type === "imageMessage" || type === "videoMessage";
        const isQuotedImage =
            type === "extendedTextMessage" && content.includes("imageMessage");
        const isQuotedVideo =
            type === "extendedTextMessage" && content.includes("videoMessage");
        const isQuotedAudio =
            type === "extendedTextMessage" && content.includes("audioMessage");
        const isQuotedSticker =
            type === "extendedTextMessage" &&
            content.includes("stickerMessage");

        if (!isGroup && isCmd)
            console.log(
                "\x1b[1;31m~\x1b[1;37m>",
                "[\x1b[1;32mEXEC\x1b[1;37m]",
                time,
                color(command),
                "from",
                color(sender.split("@")[0]),
                "args :",
                color(args.length)
            );
        //if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
        if (isCmd && isGroup)
            console.log(
                "\x1b[1;31m~\x1b[1;37m>",
                "[\x1b[1;32mEXEC\x1b[1;37m]",
                time,
                color(command),
                "from",
                color(sender.split("@")[0]),
                "in",
                color(groupName),
                "args :",
                color(args.length)
            );
        //if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
        await alpha.updatePresence(from, Presence.recording);
        await alpha.updatePresence(from, Presence.composing);
        //if (!mek.key.fromMe && banChats === true) return
        subscribezeeoneofc =
            type == "buttonsResponseMessage"
                ? mek.message.buttonsResponseMessage.selectedButtonId
                : "";
        if (subscribezeeoneofc == "list_diamond") {
            let pip = alpha.prepareMessageFromContent(
                from,
                {
                    listMessage: {
                        title: `${ucapannya}`,
                        description: `List diamond by vigen shop disini kak silahkan di pilih`,
                        buttonText: "CLICK HERE",
                        footerText: `${shop}`,
                        listType: "SINGLE_SELECT",
                        sections: [
                            {
                                title: "◉ List ke-1",
                                rows: [
                                    {
                                        title: "⦿ 70 Diamonds = IDR 10.000",
                                        description: `\n\n${shop}`,
                                        rowId: "0",
                                    },
                                ],
                            },
                            {
                                title: "◉ List ke-2",
                                rows: [
                                    {
                                        title: "⦿ 100 Diamonds = IDR 15.000",
                                        description: `\n\n${shop}`,
                                        rowId: "0",
                                    },
                                ],
                            },
                            {
                                title: "◉ List ke-3",
                                rows: [
                                    {
                                        title: "⦿ 140 Diamonds = IDR 20.000",
                                        description: `\n\n${shop}`,
                                        rowId: "0",
                                    },
                                ],
                            },
                            {
                                title: "◉ List ke-4",
                                rows: [
                                    {
                                        title: "⦿ 210 Diamonds = IDR 30.000",
                                        description: `\n\n${shop}`,
                                        rowId: "0",
                                    },
                                ],
                            },
                            {
                                title: "◉ List ke-5",
                                rows: [
                                    {
                                        title: "⦿ 355 Diamonds = IDR 50.000",
                                        description: `\n\n${shop}`,
                                        rowId: "0",
                                    },
                                ],
                            },
                            {
                                title: "◉ List ke-6",
                                rows: [
                                    {
                                        title: "⦿ 500 Diamonds = IDR 70.000",
                                        description: `\n\n${shop}`,
                                        rowId: "0",
                                    },
                                ],
                            },
                            {
                                title: "◉ List ke-7",
                                rows: [
                                    {
                                        title: "⦿ 720 Diamonds = IDR 100.000",
                                        description: `\n\n${shop}`,
                                        rowId: "0",
                                    },
                                ],
                            },
                            {
                                title: "◉ List ke-8",
                                rows: [
                                    {
                                        title: "⦿ 1000 Diamonds = IDR 140.000",
                                        description: `\n\n${shop}`,
                                        rowId: "0",
                                    },
                                ],
                            },
                            {
                                title: "◉ List ke-9",
                                rows: [
                                    {
                                        title: "⦿ 1080 Diamonds = IDR 150.000",
                                        description: `\n\n${shop}`,
                                        rowId: "0",
                                    },
                                ],
                            },
                            {
                                title: "◉ List ke-10",
                                rows: [
                                    {
                                        title: "⦿ 1440 Diamonds = IDR 200.000",
                                        description: `\n\n${shop}`,
                                        rowId: "0",
                                    },
                                ],
                            },
                            {
                                title: "◉ List ke-11",
                                rows: [
                                    {
                                        title: "⦿ 2005 Diamonds = IDR 270.000",
                                        description: `\n\n${shop}`,
                                        rowId: "0",
                                    },
                                ],
                            },
                            {
                                title: "◉ List ke-12",
                                rows: [
                                    {
                                        title: "⦿ 4005 Diamonds = IDR 535.000",
                                        description: `\n\n${shop}`,
                                        rowId: "0",
                                    },
                                ],
                            },
                        ],
                    },
                },
                {}
            );
            alpha.relayWAMessage(pip, { waitForAck: true });
        }
        if (subscribezeeoneofc == "owner") {
            members_ids = [];
            for (let mem of groupMembers) {
                members_ids.push(mem.jid);
            }
            vcard2 =
                "BEGIN:VCARD\n" +
                "VERSION:3.0\n" +
                `FN:${setting.ownername}\n` +
                `ORG: SUBSCRIBE YT ZEEONE OFC;\n` +
                `TEL;type=CELL;type=VOICE;waid=${setting.ownerNumber}:${setting.ownerNumberr}\n` +
                "END:VCARD".trim();
            alpha
                .sendMessage(
                    from,
                    { displayName: `${setting.ownername}`, vcard: vcard2 },
                    contact,
                    {
                        quoted: fkontak,
                        contextInfo: { mentionedJid: members_ids },
                    }
                )
                .then((res) =>
                    alpha.sendMessage(from, "Tuh kontak ownerku", text, {
                        quoted: mek,
                    })
                );
        }
        if (subscribezeeoneofc == "gopay") {
            ini_mark = `6288217066706@s.whatsapp.net`;
            ini_gopay = `Untuk pembayaran via gopay bisa melalui nomor dibawah!

➸ *GOPAY* : 085855159230

Silahkan hubungi @${ini_mark.split("@")[0]} untuk melakukan pembayaran`;
            alpha.sendMessage(from, ini_gopay, text, {
                thumbnail: fs.readFileSync(`image/${thumbnail}`),
                caption: "tqto",
                contextInfo: {
                    text: "tqto",
                    forwardingScore: 1000000000,
                    isForwarded: true,
                    sendEphemeral: true,
                    externalAdReply: {
                        title: `${ucapannya}`,
                        body: `${shop}`,
                        previewType: "PHOTO",
                        thumbnailUrl: ``,
                        thumbnail: fs.readFileSync(`image/${thumbnail}`),
                        sourceUrl: `https://youtube.com/channel/UCdzWwbApjkyODby7_MoRYlA`,
                    },
                },
                quoted: ftoko,
                contextInfo: { mentionedJid: [ini_mark] },
            });
        }
        if (subscribezeeoneofc == "ovo") {
            ini_mark = `6288217066706@s.whatsapp.net`;
            ini_gopay = `Untuk pembayaran via ovo bisa melalui nomor dibawah!

➸ *OVO*: 088217066706

Silahkan hubungi @${ini_mark.split("@")[0]} untuk melakukan pembayaran`;
            alpha.sendMessage(from, ini_gopay, text, {
                thumbnail: fs.readFileSync(`image/${thumbnail}`),
                caption: "tqto",
                contextInfo: {
                    text: "tqto",
                    forwardingScore: 1000000000,
                    isForwarded: true,
                    sendEphemeral: true,
                    externalAdReply: {
                        title: `${ucapannya}`,
                        body: `${shop}`,
                        previewType: "PHOTO",
                        thumbnailUrl: ``,
                        thumbnail: fs.readFileSync(`image/${thumbnail}`),
                        sourceUrl: `https://youtube.com/channel/UCdzWwbApjkyODby7_MoRYlA`,
                    },
                },
                quoted: ftoko,
                contextInfo: { mentionedJid: [ini_mark] },
            });
        }
        if (subscribezeeoneofc == "member") {
            let pip = alpha.prepareMessageFromContent(
                from,
                {
                    listMessage: {
                        title: `${ucapannya}`,
                        description: `List diamond by vigen shop disini kak silahkan di pilih`,
                        buttonText: "CLICK HERE",
                        footerText: `${shop}`,
                        listType: "SINGLE_SELECT",
                        sections: [
                            {
                                title: "◉ MEMBER MINGGUAN",
                                rows: [
                                    {
                                        title: "⦿ M.MINGGUAN = IDR 30.000",
                                        description: `\n\n${shop}`,
                                        rowId: "0",
                                    },
                                ],
                            },
                            {
                                title: "MEMBER BULANAN",
                                rows: [
                                    {
                                        title: "⦿ M.BULANAN = IDR 118.000",
                                        description: `\n\n${shop}`,
                                        rowId: "0",
                                    },
                                ],
                            },
                        ],
                    },
                },
                {}
            );
            alpha.relayWAMessage(pip, { waitForAck: true });
        }
        if (subscribezeeoneofc == "dana") {
            ini_mark = `6288217066706@s.whatsapp.net`;
            ini_gopay = `Untuk pembayaran via dana bisa melalui nomor dibawah!

➸ *DANA*: 085855159153

Silahkan hubungi @${ini_mark.split("@")[0]} untuk melakukan pembayaran`;
            alpha.sendMessage(from, ini_gopay, text, {
                thumbnail: fs.readFileSync(`image/${thumbnail}`),
                caption: "tqto",
                contextInfo: {
                    text: "tqto",
                    forwardingScore: 1000000000,
                    isForwarded: true,
                    sendEphemeral: true,
                    externalAdReply: {
                        title: `${ucapannya}`,
                        body: `${shop}`,
                        previewType: "PHOTO",
                        thumbnailUrl: ``,
                        thumbnail: fs.readFileSync(`image/${thumbnail}`),
                        sourceUrl: `https://youtube.com/channel/UCdzWwbApjkyODby7_MoRYlA`,
                    },
                },
                quoted: ftoko,
                contextInfo: { mentionedJid: [ini_mark] },
            });
        }
        if (subscribezeeoneofc == "payment") {
            buttons = [
                {
                    buttonId: "gopay",
                    buttonText: { displayText: "GOPAY" },
                    type: 1,
                },
                {
                    buttonId: "ovo",
                    buttonText: { displayText: "OVO" },
                    type: 1,
                },
                {
                    buttonId: "dana",
                    buttonText: { displayText: "DANA" },
                    type: 1,
                },
            ];

            buttonMessage = {
                contentText: `Halo kak @${
                    sender.split("@")[0]
                } 🥰\n\nBerikut adalah metode pembayaran yang tersedia di VIGEN SHOP`,
                footerText: `${shop}`,
                buttons: buttons,
                headerType: 1,
            };

            alpha.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {
                quoted: ftroli,
                contextInfo: {
                    mentionedJid: [sender],
                    forwardingScore: 999,
                    isForwarded: true,
                },
                sendEphemeral: true,
            });
        }
        sub_yt_zeeone_ofc =
            type == "listResponseMessage"
                ? mek.message.listResponseMessage.title
                : "";
        if (sub_yt_zeeone_ofc == "⦿ M.MINGGUAN = IDR 30.000") {
            buttons = [
                {
                    buttonId: "list_diamond",
                    buttonText: { displayText: "⬅️ BACK" },
                    type: 1,
                },
                {
                    buttonId: "payment",
                    buttonText: { displayText: "💸 PAYMENT" },
                    type: 1,
                },
            ];

            buttonMessage = {
                contentText: `Halo kak @${
                    sender.split("@")[0]
                } 🥰\n\n• Pilih payment jika ingin membeli ⦿ M.MINGGUAN dgn harga IDR 30.000\n• Pilih back jika ingin kembali ke list diamond`,
                footerText: `${shop}`,
                buttons: buttons,
                headerType: 1,
            };

            alpha.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {
                quoted: ftroli,
                contextInfo: {
                    mentionedJid: [sender],
                    forwardingScore: 999,
                    isForwarded: true,
                },
                sendEphemeral: true,
            });
        }
        if (sub_yt_zeeone_ofc == "⦿ M.BULANAN = IDR 118.000") {
            buttons = [
                {
                    buttonId: "list_diamond",
                    buttonText: { displayText: "⬅️ BACK" },
                    type: 1,
                },
                {
                    buttonId: "payment",
                    buttonText: { displayText: "💸 PAYMENT" },
                    type: 1,
                },
            ];

            buttonMessage = {
                contentText: `Halo kak @${
                    sender.split("@")[0]
                } 🥰\n\n• Pilih payment jika ingin membeli ⦿ M.BULANAN dgn harga IDR 118.000\n• Pilih back jika ingin kembali ke list diamond`,
                footerText: `${shop}`,
                buttons: buttons,
                headerType: 1,
            };

            alpha.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {
                quoted: ftroli,
                contextInfo: {
                    mentionedJid: [sender],
                    forwardingScore: 999,
                    isForwarded: true,
                },
                sendEphemeral: true,
            });
        }
        if (sub_yt_zeeone_ofc == "⦿ 70 Diamonds = IDR 10.000") {
            buttons = [
                {
                    buttonId: "list_diamond",
                    buttonText: { displayText: "⬅️ BACK" },
                    type: 1,
                },
                {
                    buttonId: "payment",
                    buttonText: { displayText: "💸 PAYMENT" },
                    type: 1,
                },
            ];

            buttonMessage = {
                contentText: `Halo kak @${
                    sender.split("@")[0]
                } 🥰\n\n• Pilih payment jika ingin membeli 70 Diamonds dgn harga IDR 10.000\n• Pilih back jika ingin kembali ke list diamond`,
                footerText: `${shop}`,
                buttons: buttons,
                headerType: 1,
            };

            alpha.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {
                quoted: ftroli,
                contextInfo: {
                    mentionedJid: [sender],
                    forwardingScore: 999,
                    isForwarded: true,
                },
                sendEphemeral: true,
            });
        }
        if (sub_yt_zeeone_ofc == "⦿ 100 Diamonds = IDR 15.000") {
            buttons = [
                {
                    buttonId: "list_diamond",
                    buttonText: { displayText: "⬅️ BACK" },
                    type: 1,
                },
                {
                    buttonId: "payment",
                    buttonText: { displayText: "💸 PAYMENT" },
                    type: 1,
                },
            ];

            buttonMessage = {
                contentText: `Halo kak @${
                    sender.split("@")[0]
                } 🥰\n\n• Pilih payment jika ingin membeli 100 Diamonds dgn harga IDR 15.000\n• Pilih back jika ingin kembali ke list diamond`,
                footerText: `${shop}`,
                buttons: buttons,
                headerType: 1,
            };
            alpha.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {
                quoted: ftroli,
                contextInfo: {
                    mentionedJid: [sender],
                    forwardingScore: 999,
                    isForwarded: true,
                },
                sendEphemeral: true,
            });
        }
        if (sub_yt_zeeone_ofc == "⦿ 140 Diamonds = IDR 20.000") {
            buttons = [
                {
                    buttonId: "list_diamond",
                    buttonText: { displayText: "⬅️ BACK" },
                    type: 1,
                },
                {
                    buttonId: "payment",
                    buttonText: { displayText: "💸 PAYMENT" },
                    type: 1,
                },
            ];

            buttonMessage = {
                contentText: `Halo kak @${
                    sender.split("@")[0]
                } 🥰\n\n• Pilih payment jika ingin membeli 140 Diamonds dgn harga IDR 20.000\n• Pilih back jika ingin kembali ke list diamond`,
                footerText: `${shop}`,
                buttons: buttons,
                headerType: 1,
            };
            alpha.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {
                quoted: ftroli,
                contextInfo: {
                    mentionedJid: [sender],
                    forwardingScore: 999,
                    isForwarded: true,
                },
                sendEphemeral: true,
            });
        }
        if (sub_yt_zeeone_ofc == "⦿ 210 Diamonds = IDR 30.000") {
            buttons = [
                {
                    buttonId: "list_diamond",
                    buttonText: { displayText: "⬅️ BACK" },
                    type: 1,
                },
                {
                    buttonId: "payment",
                    buttonText: { displayText: "💸 PAYMENT" },
                    type: 1,
                },
            ];

            buttonMessage = {
                contentText: `Halo kak @${
                    sender.split("@")[0]
                } 🥰\n\n• Pilih payment jika ingin membeli 210 Diamonds dgn harga IDR 30.000\n• Pilih back jika ingin kembali ke list diamond`,
                footerText: `${shop}`,
                buttons: buttons,
                headerType: 1,
            };
            alpha.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {
                quoted: ftroli,
                contextInfo: {
                    mentionedJid: [sender],
                    forwardingScore: 999,
                    isForwarded: true,
                },
                sendEphemeral: true,
            });
        }
        if (sub_yt_zeeone_ofc == "⦿ 355 Diamonds = IDR 50.000") {
            buttons = [
                {
                    buttonId: "list_diamond",
                    buttonText: { displayText: "⬅️ BACK" },
                    type: 1,
                },
                {
                    buttonId: "payment",
                    buttonText: { displayText: "💸 PAYMENT" },
                    type: 1,
                },
            ];

            buttonMessage = {
                contentText: `Halo kak @${
                    sender.split("@")[0]
                } 🥰\n\n• Pilih payment jika ingin membeli 355 Diamonds dgn harga IDR 50.000\n• Pilih back jika ingin kembali ke list diamond`,
                footerText: `${shop}`,
                buttons: buttons,
                headerType: 1,
            };
            alpha.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {
                quoted: ftroli,
                contextInfo: {
                    mentionedJid: [sender],
                    forwardingScore: 999,
                    isForwarded: true,
                },
                sendEphemeral: true,
            });
        }
        if (sub_yt_zeeone_ofc == "⦿ 500 Diamonds = IDR 70.000") {
            buttons = [
                {
                    buttonId: "list_diamond",
                    buttonText: { displayText: "⬅️ BACK" },
                    type: 1,
                },
                {
                    buttonId: "payment",
                    buttonText: { displayText: "💸 PAYMENT" },
                    type: 1,
                },
            ];

            buttonMessage = {
                contentText: `Halo kak @${
                    sender.split("@")[0]
                } 🥰\n\n• Pilih payment jika ingin membeli 500 Diamonds dgn harga IDR 70.000\n• Pilih back jika ingin kembali ke list diamond`,
                footerText: `${shop}`,
                buttons: buttons,
                headerType: 1,
            };
            alpha.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {
                quoted: ftroli,
                contextInfo: {
                    mentionedJid: [sender],
                    forwardingScore: 999,
                    isForwarded: true,
                },
                sendEphemeral: true,
            });
        }
        if (sub_yt_zeeone_ofc == "⦿ 720 Diamonds = IDR 100.000") {
            buttons = [
                {
                    buttonId: "list_diamond",
                    buttonText: { displayText: "⬅️ BACK" },
                    type: 1,
                },
                {
                    buttonId: "payment",
                    buttonText: { displayText: "💸 PAYMENT" },
                    type: 1,
                },
            ];

            buttonMessage = {
                contentText: `Halo kak @${
                    sender.split("@")[0]
                } 🥰\n\n• Pilih payment jika ingin membeli 720 Diamonds dgn harga IDR 100.000\n• Pilih back jika ingin kembali ke list diamond`,
                footerText: `${shop}`,
                buttons: buttons,
                headerType: 1,
            };
            alpha.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {
                quoted: ftroli,
                contextInfo: {
                    mentionedJid: [sender],
                    forwardingScore: 999,
                    isForwarded: true,
                },
                sendEphemeral: true,
            });
        }
        if (sub_yt_zeeone_ofc == "⦿ 1000 Diamonds = IDR 140.000") {
            buttons = [
                {
                    buttonId: "list_diamond",
                    buttonText: { displayText: "⬅️ BACK" },
                    type: 1,
                },
                {
                    buttonId: "payment",
                    buttonText: { displayText: "💸 PAYMENT" },
                    type: 1,
                },
            ];

            buttonMessage = {
                contentText: `Halo kak @${
                    sender.split("@")[0]
                } 🥰\n\n• Pilih payment jika ingin membeli 1000 Diamonds dgn harga IDR 140.000\n• Pilih back jika ingin kembali ke list diamond`,
                footerText: `${shop}`,
                buttons: buttons,
                headerType: 1,
            };
            alpha.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {
                quoted: ftroli,
                contextInfo: {
                    mentionedJid: [sender],
                    forwardingScore: 999,
                    isForwarded: true,
                },
                sendEphemeral: true,
            });
        }
        if (sub_yt_zeeone_ofc == "⦿ 1080 Diamonds = IDR 150.000") {
            buttons = [
                {
                    buttonId: "list_diamond",
                    buttonText: { displayText: "⬅️ BACK" },
                    type: 1,
                },
                {
                    buttonId: "payment",
                    buttonText: { displayText: "💸 PAYMENT" },
                    type: 1,
                },
            ];

            buttonMessage = {
                contentText: `Halo kak @${
                    sender.split("@")[0]
                } 🥰\n\n• Pilih payment jika ingin membeli 1080 Diamonds dgn harga IDR 150.000\n• Pilih back jika ingin kembali ke list diamond`,
                footerText: `${shop}`,
                buttons: buttons,
                headerType: 1,
            };
            alpha.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {
                quoted: ftroli,
                contextInfo: {
                    mentionedJid: [sender],
                    forwardingScore: 999,
                    isForwarded: true,
                },
                sendEphemeral: true,
            });
        }
        if (sub_yt_zeeone_ofc == "⦿ 1440 Diamonds = IDR 200.000") {
            buttons = [
                {
                    buttonId: "list_diamond",
                    buttonText: { displayText: "⬅️ BACK" },
                    type: 1,
                },
                {
                    buttonId: "payment",
                    buttonText: { displayText: "💸 PAYMENT" },
                    type: 1,
                },
            ];

            buttonMessage = {
                contentText: `Halo kak @${
                    sender.split("@")[0]
                } 🥰\n\n• Pilih payment jika ingin membeli 1440 Diamonds dgn harga IDR 200.000\n• Pilih back jika ingin kembali ke list diamond`,
                footerText: `${shop}`,
                buttons: buttons,
                headerType: 1,
            };
            alpha.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {
                quoted: ftroli,
                contextInfo: {
                    mentionedJid: [sender],
                    forwardingScore: 999,
                    isForwarded: true,
                },
                sendEphemeral: true,
            });
        }
        if (sub_yt_zeeone_ofc == "⦿ 2005 Diamonds = IDR 270.000") {
            buttons = [
                {
                    buttonId: "list_diamond",
                    buttonText: { displayText: "⬅️ BACK" },
                    type: 1,
                },
                {
                    buttonId: "payment",
                    buttonText: { displayText: "💸 PAYMENT" },
                    type: 1,
                },
            ];

            buttonMessage = {
                contentText: `Halo kak @${
                    sender.split("@")[0]
                } 🥰\n\n• Pilih payment jika ingin membeli 2005 Diamonds dgn harga IDR 270.000 \n• Pilih back jika ingin kembali ke list diamond`,
                footerText: `${shop}`,
                buttons: buttons,
                headerType: 1,
            };
            alpha.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {
                quoted: ftroli,
                contextInfo: {
                    mentionedJid: [sender],
                    forwardingScore: 999,
                    isForwarded: true,
                },
                sendEphemeral: true,
            });
        }
        if (sub_yt_zeeone_ofc == "⦿ 4005 Diamonds = IDR 535.000") {
            buttons = [
                {
                    buttonId: "list_diamond",
                    buttonText: { displayText: "⬅️ BACK" },
                    type: 1,
                },
                {
                    buttonId: "payment",
                    buttonText: { displayText: "💸 PAYMENT" },
                    type: 1,
                },
            ];

            buttonMessage = {
                contentText: `Halo kak @${
                    sender.split("@")[0]
                } 🥰\n\n• Pilih payment jika ingin membeli 4005 Diamonds dengan harga IDR 535.000 \n• Pilih back jika ingin kembali ke list diamond`,
                footerText: `${shop}`,
                buttons: buttons,
                headerType: 1,
            };
            alpha.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {
                quoted: ftroli,
                contextInfo: {
                    mentionedJid: [sender],
                    forwardingScore: 999,
                    isForwarded: true,
                },
                sendEphemeral: true,
            });
        }

        switch (command) {
            case prefix + "menu":
                if (!isElite)
                    return reply(
                        `Hai ${pushname} Anda belum terdaftar di database, silahkan ketik ${prefix}verif Nick FF|ID FF`
                    );
                let content = fs.readFileSync(`image/${thumbnail}`);
                const media = await alpha.prepareMessage(
                    from,
                    content,
                    MessageType.image,
                    { thumbnail: fs.readFileSync(`image/${thumbnail}`) }
                );

                const buttons = [
                    {
                        buttonId: "list_diamond",
                        buttonText: { displayText: "LIST TOP UP" },
                        type: 1,
                    },
                    {
                        buttonId: "owner",
                        buttonText: { displayText: "OWNER" },
                        type: 1,
                    },
                    {
                        buttonId: "member",
                        buttonText: { displayText: "MEMBERSHIP" },
                        type: 1,
                    },
                ];

                const btn = {
                    contentText: `Halo kak ${pushname} saya adalah bot whatsApp khusus  yang siap membantu kk`,
                    footerText: `${shop}`,
                    buttons: buttons,
                    headerType: 4,
                    imageMessage: media.message.imageMessage,
                };

                alpha.sendMessage(from, btn, MessageType.buttonsMessage, {
                    quoted: fkontak,
                });
                break;

            case prefix + "sc":
            case prefix + "source":
            case prefix + "sourcecode":
                source = `Source Script Bot : bit.ly/ytzeeoneofc`;
                alpha.sendMessage(from, source, text, {
                    quoted: {
                        key: {
                            participant: `0@s.whatsapp.net`,
                            remoteJid: "6283136505591-1614953337@g.us",
                            fromMe: false,
                            id: "B391837A58338BA8186C47E51FFDFD4A",
                        },
                        message: {
                            documentMessage: {
                                jpegThumbnail: fs.readFileSync(
                                    `image/${thumbnail}`
                                ),
                                mimetype: "application/octet-stream",
                                title: `${setting.fake}`,
                                fileLength: "36",
                                pageCount: 0,
                                fileName: `${setting.fake}`,
                            },
                        },
                        messageTimestamp: "1614069378",
                        status: "PENDING",
                    },
                    contextInfo: { forwardingScore: 999, isForwarded: true },
                    sendEphemeral: true,
                });
                break;
                break;
            case prefix + "bcsticker":
            case prefix + "bcstik":
                if (!mek.key.fromMe) return fakestatus("```OWNER ONLY```");
                anu = await alpha.chats.all();
                if ((isMedia && !mek.message.videoMessage) || isQuotedSticker) {
                    const encmedia = isQuotedSticker
                        ? JSON.parse(
                              JSON.stringify(mek).replace("quotedM", "m")
                          ).message.extendedTextMessage.contextInfo
                        : mek;
                    bc = await alpha.downloadMediaMessage(encmedia);
                    for (let _ of anu) {
                        alpha.sendMessage(_.jid, bc, sticker, {
                            quoted: ftroli,
                        });
                    }
                    fakestatus("Suksess broadcast");
                }
                break;
            case prefix + "bcvideo":
                if (!mek.key.fromMe) return fakestatus("```OWNER ONLY```");
                if (args.length < 1) return reply(".......");
                anu = await alpha.chats.all();
                if ((isMedia && !mek.message.videoMessage) || isQuotedVideo) {
                    const encmedia = isQuotedVideo
                        ? JSON.parse(
                              JSON.stringify(mek).replace("quotedM", "m")
                          ).message.extendedTextMessage.contextInfo
                        : mek;
                    bc = await alpha.downloadMediaMessage(encmedia);
                    for (let _ of anu) {
                        alpha.sendMessage(_.jid, bc, video, {
                            mimetype: "video/mp4",
                            duration: 359996400,
                            quoted: ftoko,
                            caption: `[ *${
                                setting.botname
                            } BROADCAST* ]\n\n${body.slice(9)}`,
                        });
                    }
                    fakestatus("Suksess broadcast");
                }
                break;
            case prefix + "bcaudio":
                if (!mek.key.fromMe) return fakestatus("```OWNER ONLY```");
                if (args.length < 1) return reply(".......");
                anu = await alpha.chats.all();
                if ((isMedia && !mek.message.audioMessage) || isQuotedAudio) {
                    const encmedia = isQuotedAudio
                        ? JSON.parse(
                              JSON.stringify(mek).replace("quotedM", "m")
                          ).message.extendedTextMessage.contextInfo
                        : mek;
                    bc = await alpha.downloadMediaMessage(encmedia);
                    for (let _ of anu) {
                        alpha.sendMessage(_.jid, bc, audio, {
                            mimetype: "audio/mp4",
                            duration: 359996400,
                            ptt: true,
                            quoted: ftoko,
                            caption: `[ *${
                                setting.botname
                            } BROADCAST* ]\n\n${body.slice(9)}`,
                        });
                    }
                    fakestatus("Suksess broadcast");
                }
                break;
            case prefix + "bcgif":
                if (!mek.key.fromMe) return fakestatus("```OWNER ONLY```");
                if (args.length < 1) return reply(".......");
                anu = await alpha.chats.all();
                if ((isMedia && !mek.message.videoMessage) || isQuotedVideo) {
                    const encmedia = isQuotedVideo
                        ? JSON.parse(
                              JSON.stringify(mek).replace("quotedM", "m")
                          ).message.extendedTextMessage.contextInfo
                        : mek;
                    bc = await alpha.downloadMediaMessage(encmedia);
                    for (let _ of anu) {
                        alpha.sendMessage(_.jid, bc, video, {
                            mimetype: Mimetype.gif,
                            quoted: ftroli,
                        });
                    }
                    fakestatus("Suksess broadcast");
                }
                break;
            /*++++++++++++++++++++++++++
+++++++++MENU BARU++++++++
+++++++++++++++++++++++++++*/

            case prefix + "owner":
            case prefix + "creator":
                members_ids = [];
                for (let mem of groupMembers) {
                    members_ids.push(mem.jid);
                }
                vcard2 =
                    "BEGIN:VCARD\n" +
                    "VERSION:3.0\n" +
                    `FN:${setting.ownername}\n` +
                    `ORG: SUBSCRIBE ZEEONE OFC;\n` +
                    `TEL;type=CELL;type=VOICE;waid=${setting.ownerNumber}:${setting.ownerNumberr}\n` +
                    "END:VCARD".trim();
                alpha
                    .sendMessage(
                        from,
                        { displayName: `${setting.ownername}`, vcard: vcard2 },
                        contact,
                        {
                            quoted: fkontak,
                            contextInfo: { mentionedJid: members_ids },
                        }
                    )
                    .then((res) =>
                        alpha.sendMessage(from, "Nih kontak ownerku", text, {
                            quoted: mek,
                        })
                    );
                break;
            case prefix + "on":
                if (!mek.key.fromMe) return;
                offline = false;
                fakeitem(" ```ANDA TELAH ONLINE``` ");
                break;
            case prefix + "off":
                if (!mek.key.fromMe) return;
                offline = true;
                waktu = Date.now();
                anuu = args.join(" ") ? args.join(" ") : "-";
                alasan = anuu;
                fakeitem(" ```ANDA TELAH OFFLINE``` ");
                break;
            case prefix + "public":
                if (!mek.key.fromMe) return fakestatus("```OWNER ONLY```");
                if (banChats === false) return;
                banChats = false;
                fakeitem(`「 *PUBLIC-MODE* 」`);
                break;
            case prefix + "self":
                if (!mek.key.fromMe) return fakestatus("```OWNER ONLY```");
                if (banChats === true) return;
                uptime = process.uptime();
                banChats = true;
                fakeitem(`「 *SELF-MODE* 」`);
                break;
            case prefix + "hidetag":
            case prefix + "_`":
            case prefix + ".":
                if (!isGroup) return fakegroup("```ONLY GRUP LORD```");
                var value = args.join(" ");
                var group = await alpha.groupMetadata(from);
                var member = group["participants"];
                var mem = [];
                member.map(async (adm) => {
                    mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
                });
                var optionshidetag = {
                    text: value,
                    contextInfo: { mentionedJid: mem },
                    quoted: mek,
                };
                alpha.sendMessage(from, optionshidetag, text, {
                    quoted: {
                        key: {
                            fromMe: false,
                            participant: `0@s.whatsapp.net`,
                            ...(from
                                ? { remoteJid: "393470602054-1351628616@g.us" }
                                : {}),
                        },
                        message: {
                            imageMessage: {
                                url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                                mimetype: "image/jpeg",
                                caption: `${setting.fake}`,
                                fileSha256:
                                    "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                                fileLength: "28777",
                                height: 1080,
                                width: 1079,
                                mediaKey:
                                    "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                                fileEncSha256:
                                    "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                                directPath:
                                    "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                                mediaKeyTimestamp: "1610993486",
                                jpegThumbnail: fs.readFileSync(
                                    `image/${thumbnail}`
                                ),
                            },
                        },
                    },
                });
                break;
            case prefix + "bc":
            case prefix + "broadcast":
            case prefix + "bcimage":
                if (!mek.key.fromMe) return fakegroup("```Owner Only```");
                if (args.length < 1) return reply("```Masukkan text```");
                ini_bc = args.join(" ");
                anu = await alpha.chats.all();
                if ((isMedia && !mek.message.videoMessage) || isQuotedImage) {
                    const encmediaa = isQuotedImage
                        ? JSON.parse(
                              JSON.stringify(mek).replace("quotedM", "m")
                          ).message.extendedTextMessage.contextInfo
                        : mek;
                    bc = await alpha.downloadMediaMessage(encmediaa);
                    for (let _ of anu) {
                        alpha.sendMessage(_.jid, bc, image, {
                            quoted: fkontak,
                            caption: `「  *BROADCAST * 」\n\n${ini_bc}`,
                        });
                    }
                    fakegroup("```SUKSESS BROADCAST```");
                } else {
                    for (let _ of anu) {
                        alpha.sendMessage(
                            _.jid,
                            `*BROADCAST* \n\n${ini_bc}`,
                            text,
                            {
                                contextInfo: {
                                    mentionedJid: [sender],
                                    forwardingScore: 999,
                                    isForwarded: true,
                                },
                                sendEphemeral: true,
                            }
                        );
                        //sendMess(_.jid, `*「 Alphabot Broadcast  」*\n\n${body.slice(4)}`)
                    }
                    fakegroup("```SUKSESS BROADCAST```");
                }
                break;
            case prefix + "verif":
            case prefix + "daftar":
                if (isElite) return reply("Kamu Sudah Terdaftar");
                if (args.length < 1)
                    return reply(
                        `*🙊Ups! Salah Atuh bro*\n*Gini Loh bro! Cara Daftarnya* \n\n*Ketik :* \n❖ ${prefix}verif nama Nick FF|ID FF \n\n*Contoh :* \n❖ ${prefix}verif ${pushname}|12345678`
                    );
                var reg = args.join(" ");
                var jeneng = reg.split("|")[0];
                var umure = reg.split("|")[1];
                const noSeri = createSerial(20);
                try {
                    ppimg = await alpha.getProfilePicture(
                        `${sender.split("@")[0]}@c.us`
                    );
                } catch {
                    ppimg = "https://i.ibb.co/rvsVF3r/5012fbb87660.png";
                }
                imglu = `${img}`;
                veri = sender;
                _Elite.push(sender);
                fs.writeFileSync("./alpha/Elite.json", JSON.stringify(_Elite));
                addEliteUser(sender, noSeri);
                const captionnya = `╭─「 *SUCCESS VERIFICATION* 」
│\`\`\`Pendaftaran berhasil dgn\`\`\` 
│\`\`\`Nick FF: ${jeneng}\`\`\`
│\`\`\`ID FF: ${umure}\`\`\`
│\`\`\`Nomor : @${sender.split("@")[0]}\`\`\`
│\`\`\`Waktu: ${wib} WIB\`\`\`
│\`\`\`SN: ${noSeri}\`\`\`
│\`\`\`Untuk melihat daftar diamond\`\`\`
│\`\`\`Kirim perintah ${prefix}menu\`\`\`
│\`\`\`\n│ Total user : ${_Elite.length} Pengguna\`\`\`
╰─────────────────────`;
                //let buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/verify?nama=${encodeURI(pushname)}&member=${_Elite.length}&seri=${noSeri}&pp=${ppimg}&bg=${imglu}`)
                let bufff = await getBuffer(ppimg);
                let buff = await getBuffer(ppimg);
                try {
                    alpha.sendMessage(from, buff, image, {
                        quoted: fkontak,
                        caption: captionnya,
                        contextInfo: {
                            mentionedJid: [sender],
                            forwardingScore: 999,
                            isForwarded: true,
                        },
                        sendEphemeral: true,
                    });
                } catch {
                    alpha.sendMessage(from, bufff, image, {
                        quoted: fkontak,
                        caption: captionnya,
                        contextInfo: {
                            mentionedJid: [sender],
                            forwardingScore: 999,
                            isForwarded: true,
                        },
                        sendEphemeral: true,
                    });
                }
                break;

            default:
                if (budy.includes("eror", "error", "Eror", "Error")) {
                    alpha.updatePresence(from, Presence.composing);
                    const daieeeee = fs.readFileSync("./stik/10_1.webp");
                    alpha.sendMessage(from, daieeeee, sticker, {
                        contextInfo: { mentionedJid: [sender] },
                        quoted: {
                            key: {
                                participant: `${numbernye}@s.whatsapp.net`,
                                remoteJid: "6283136505591-1614953337@g.us",
                                fromMe: false,
                                id: "B391837A58338BA8186C47E51FFDFD4A",
                            },
                            message: {
                                documentMessage: {
                                    jpegThumbnail: fs.readFileSync(
                                        `image/${thumbnail}`
                                    ),
                                    mimetype: "application/octet-stream",
                                    title: "YT : ZEEONE OFC",
                                    fileLength: "36",
                                    pageCount: 0,
                                    fileName: `Kenapa bisa error???`,
                                },
                            },
                            messageTimestamp: "1614069378",
                            status: "PENDING",
                        },
                    });
                }
        }
        if (isGroup && budy != undefined) {
        } else {
            console.log(
                color("[TEXT]", "aqua"),
                "SELF-MODE",
                color(sender.split("@")[0])
            );
        }
    } catch (e) {
        e = String(e);
        if (!e.includes("this.isZero")) {
            console.log("Message : %s", color(e, "green"));
        }
    }
};
