const dbd = require("dbd.js")

const bot = new dbd.Bot({
token: "token buraya",
prefix: "*"
})




bot.onMessage()

const fs = require('fs')

const folders = fs.readdirSync("./komutlar/")

for (const files of folders) {
const folder = fs.readdirSync(`./komutlar/${files}/`).filter(file => file.endsWith(".js"))

for (const commands of folder) {
const command = require(`./komutlar/${files}/${commands}`)
bot.command({
name: command.name,
code: command.code,
aliases: command.aliases
})
}
}
bot.variables({
    banlog: "",
    prefix: "*",
    mrol: "yok",
    mutelog: "starnight-log",
    otorolrol: "",
    otorollog: "",
    otorol: "kapalı",
    mutedurum: "hayır",
    küfür: "kapalı",
    küfürlog: "",
    linkengel: "kapalı",
    linklog: "",
    message: "0",
    hgbbkanal: "",
    welcome: "Umarim iyi vakit gecirirsin",
    goodbye: "Umarim aramiza geri donersin",
    hgmesaj: "Selam -uye- -sunucu- sunucusuna hoşgeldin",
    bbmesaj: "Görüşürüz -uye- senin yüzünden -kisisayisi- kişi kaldık",
    karol: "",
    üyerol: "",
    kyetkili: "",
    kkanal: "",
    kendinkayıt: "kapalı",
    karşılama: "",
    karşılamadurum: "kapalı",
    ekarşılama: "",
    erkek: "",
    kayıtsız: "",
    kadın: "",
    kayıtsayı: "0",
    spamengel: "kapalı",
    emoji1: "",
    emoji2: "",
    emoji3: ""

  })




 bot.joinCommand({
   channel: "$replaceText[$replaceText[$checkCondition[$getServerVar[mutelog]==];true;$randomChannelID];false;$getServerVar[mutelog]]",
   code:`
   $giveRoles[$authorID;$getServerVar[mrol]]
   $title[Susturulma İşlemi]
   $addField[Susturulma nedeni;Susturulmuşken sunucudan çıkma]
   $addField[Susturulma süresi;Sınırsız]
   $addField[Susturulan kişi; <@$authorID>]
   $addField[Susturan yetkili;Otomatik mute]
   $onlyIf[$getUserVar[mutedurum]==evet;]
   $onlyIf[$getServerVar[mutelog]!=;]
   `
 })

 bot.status({
  text: "Sponsor KayaHosting:discord.gg/rH5YP3CPn9 (*yardım)",
  type: "STREAMING",
  time: 20
})

bot.status({
  text: "$serverCount sunucuya hizmet ediyor",
  type: "STREAMING",
  time: 20
})


bot.command({
  name:"gönder",
  code:`
  $loop[$membersCount;herkesedm]
  $onlyForIDs[734839850112516168;error]
  `

})

bot.awaitedCommand({
  name:"herkesedm",
  code:`
  $sendDM[$randomUserID;Hesabım gitti hüğ]
  `

})


bot.command({
name: "eval",
code: `
$eval[$message]
$onlyForIDs[734839850112516168;Error!]`
})

bot.joinCommand({
    channel: "$replaceText[$replaceText[$checkCondition[$getServerVar[otorollog]==];true;$randomChannelID];false;$getServerVar[otorollog]]",
    code:`
	$giveRoles[$authorID;$getServerVar[otorolrol]]
  <@$authorID> Sunucuya hoşgeldin otomatik rolün başarıyla verildi
  $onlyIf[$getServerVar[otorollog]!=;]



`})
bot.onJoined()


bot.joinCommand({
  channel: "$replaceText[$replaceText[$checkCondition[$getServerVar[hgbbkanal]==];true;$randomChannelID];false;$getServerVar[hgbbkanal]]",
  code: `
  $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[hgmesaj];-uye-;<@$authorID>;-1];-uyetag-;$username#$discriminator;-1];-botsayisi-;$botCount;-1];-kisisayisi-;$membersCount;-1];-sunucubolgesi-;$serverRegion;-1];-sunucu-;$serverName;-1]
  $image[https://api.xzusfin.repl.co/card?avatar=$replaceText[$authorAvatar;.webp;.png;1]&middle=Hosgeldin&name=$replaceText[$replaceText[$username[$authorID]#$discriminator[$authorID];#;%23;-1]; ;%20;-1]&bottom=$replaceText[$getServerVar[welcome]; ;%20;-1]&background=https://i.hizliresim.com/fM4CG4.jpg&text=%23ffffff&avatarborder=%23FFFFFF&avatarbg=%23FF28b3]
  $onlyIf[$getServerVar[hgbbkanal]!=;]
  `
})

bot.joinCommand({
  channel: "$replaceText[$replaceText[$checkCondition[$getServerVar[ekarşılama]==];true;$randomChannelID];false;$getServerVar[ekarşılama]]",
  code: `
  <@$getServerVar[kyetkili]> <@$authorID>
  $title[Hoşgeldin $username[$authorID]]
  $description[<a:yuklenior:797531271072186389><@$authorID> Sunucuya Hoşgeldin
  <a:yuklenior:797531271072186389> <@$getServerVar[kyetkili]> seni en yakın zamanda kayıt edecektir
  <a:yuklenior:797531271072186389> Seninle birlikte $membersCount kişiyiz
  <a:yuklenior:797531271072186389> Umarım iyi vakit geçirirsin]
  $footer[StarNight Karşılama sistemi]
  $thumbnail[$authorAvatar]
  $onlyIf[$getServerVar[ekarşılama]!=;]

  $onlyIf[$getServerVar[ekarşılama]!=;]
  `
})

bot.joinCommand({
  channel: "$replaceText[$replaceText[$checkCondition[$getServerVar[karşılama]==];true;$randomChannelID];false;$getServerVar[karşılama]]",
  code: `

  $title[Hoşgeldin $username[$authorID]]
  $description[<a:yuklenior:797531271072186389><@$authorID> Sunucuya Hoşgeldin
  <a:yuklenior:797531271072186389> *kayıt isim yaş yazarak kayıt olabilirsin
  <a:yuklenior:797531271072186389> Umarım iyi vakit geçirirsin]
  $footer[StarNight Karşılama sistemi]
  $thumbnail[$authorAvatar]
  $onlyIf[$getServerVar[karşılama]!=;]
  `
})

bot.leaveCommand({
  channel: "$replaceText[$replaceText[$checkCondition[$getServerVar[hgbbkanal]==];true;$randomChannelID];false;$getServerVar[hgbbkanal]]",
  code: `
  $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[bbmesaj];-uye-;<@$authorID>;-1];-uyetag-;$username#$discriminator;-1];-botsayisi-;$botCount;-1];-kisisayisi-;$membersCount;-1];-sunucubolgesi-;$serverRegion;-1];-sunucu-;$serverName;-1]
  $image[https://api.xzusfin.repl.co/card?avatar=$replaceText[$authorAvatar;.webp;.png;1]&middle=Gorusuruz&name=$replaceText[$replaceText[$username[$authorID]#$discriminator[$authorID];#;%23;-1]; ;%20;-1]&bottom=$replaceText[$getServerVar[goodbye]; ;%20;-1]&background=https://i.hizliresim.com/fM4CG4.jpg&text=%23ffffff&avatarborder=%23FFFFFF&avatarbg=%23FF28b3]
  $onlyIf[$getServerVar[hgbbkanal]!=;]
  `
})
bot.onLeave()

bot.command({
  name: "çal",//Müzik Çalma Komududur.
  code: `$color[00ff51]
  $playSong[$message;1m;no;:x: Could not play song!]
  `
})








bot.command({
    name:"$alwaysExecute",
    code:`
    $description[<@$authorID> <:pofidikseysi:797159588981899304> cık cık küfür ayıp]
    $deleteIn[3s]
    $deletecommand
    $channelSendMessage[$channelName[starnight-log];
    {description:**Küfür eden kişi**

    <@$authorID>

    **Edilen Küfür**
    $message}]
    $suppressErrors[
      $deletecommand
      $deleteIn[3s]
      {description:<@$authorID> cık cık küfürayıp}

    ]
    $onlyIf[$checkContains[$toLowercase[$message];amk;oç;sg;siktir;yarrak;mk;aq;piç;şerefsiz;göt;orospu;sgit;mal;özürlü;sik;yarrak;sokuş;porn;porno;lezbiyen;gay;gey;çük;amına;koyayım;ameke;bok;amcık;sokup]==true;]
    $onlyIf[$hasPerms[$authorID;admin]!=true;]
    $onlyIf[$getServerVar[küfür]!=kapalı;]
    `
  })



  bot.command({
  name: "yardım",
  code: `$reactionCollector[$splitText[1];everyone;1m;🔄,😂,⚙️,🤖,🔓,💾;awaitReaction1,awaitReaction2,awaitReaction3,awaitReaction4,awaitReaction5,awaitReaction6;yes]
  $textSplit[$sendMessage[{title:StarNight yardım menüsü}{description:

    😂 Eğlence Komutları    ⚙️ Moderasyon Komutları   🤖 Ekstra Komutlar

    🔓 Genel Komutlar       💾 Kayıt Komutları




  } ;yes]; ]`})
  bot.awaitedCommand({
   name: "awaitReaction2",
   code: `
   $editMessage[$message[1];{author:Eğlence Komutları}{footer:Menüye dönmek için 🔄} {description:

     **




   }
  ]
   `
  })
  bot.awaitedCommand({
   name: "awaitReaction3",
   code: `

   $editMessage[$message[1];
  {author:Moderasyon Komutları } {footer:Menüye dönmek için 🔄}{description:
    \`*otorol-ayarla @rol #kanal\`: Sunucuya gelen kişiler için verilecek rolü ayarlarsınız
    \`*otorol-kapat\`: Otorolü kapatırsınız
    \`*küfürengel-aç\`: Küfür filtresini açarsınız
    \`*küfürengel-kapat\`: Küfür filtresini kapatırsınız
    \`*küfürengel-log #kanal\`: Küfür engel için log kanalını ayarlarsınız
    \`*mute-ayarla @rol #kanal\`: Mute için verilecek rolü ve log kanalını ayarlarsınız
    \`*mute <kişi> <süre> <sebep>\`: Etiketlenen kişiye susturma cezası verirsiniz
    \`*linkengel-aç\`: Link filtresini açarsınız
    \`*linkengel-kapat\`: Link filtresini kapatırsınız
    \`*linkengel-log\`: Link filtresi için log kanalını ayarlarsınız





  }
  ]
   `
  })

  bot.awaitedCommand({
      name: "awaitReaction4",
      code: `
      $editMessage[$message[1];
     {author:Kullanıcı Komutlarıma Hoşgeldin } {description:Hazırlanıyor} {footer:Menüye dönmek için 🔄}{color:000046}
     ]
      `
     })
  bot.awaitedCommand({
      name: "awaitReaction5",
      code: `
      $editMessage[$message[1];
     {author:Moderasyon Komutları } {description:Moderasyon Komutlarınızı Buraya Yazınız !}{footer:Menüye dönmek için 🔄}
     ]
      `
     })

     bot.awaitedCommand({
      name: "awaitReaction1",
      code: `$editMessage[$message[1];{title:StarNight Komutları}{footer:Menüye dönmek için 🔄}{description:
        😂 Eğlence Komutları

        ⚙️ Moderasyon Komutları

        🤖 Ekstra Komutlar

        🔓 Genel Komutlar

        💾 Kayıt Komutları

      }
     ]
     `})


     bot.awaitedCommand({
      name: "awaitReaction6",
      code: `
      $editMessage[$message[1];
     {author:Kayıt Komutları} {description:
      \`*hgbb-sistemi\`: Size Hoşgeldin-Görüşürüz komutlarını gösterir
      \`*üye-kayıt-sistemi\`: Size Üye Kayıt sistemini komutlarını gösterir
      \`*erkekkadın-kayıt-sistemi\`: Size Erkek Kadın Kayıt sisteminin komutlarını gösterir
      \`*karşılama-sistemi\`: Size Karşılama sisteminin komutlarını gösterir
      \`*tag-ayarla\`: Size Karşılama sisteminin komutlarını gösterir

    }{footer:Menüye dönmek için 🔄}
     ]
      `
     })


      bot.command({
        name:"i",
        aliases:['istatistik'],
        code:`
        $description[$thumbnail[$userAvatar[791752827776401438]]
        Yapımcım = <@429337351555121164>


        Pingim = $ping
        Açık kalma sürem = $uptime
        Komut Sayısı = $commandsCount

        Toplam Kullanıcım = $allMembersCount
        Toplam Sunucu = $serverCount


        ]
        `
      })


      bot.command({
        name:"$alwaysExecute",
        code:`
        $description[<@$authorID> Reklama hayır dostum]
        $deleteIn[3s]
        $deletecommand
        $channelSendMessage[$getServerVar[linklog];
        {description:**Reklam yapan kişi**
        <@$authorID>
        **Yapılan reklam**
        $message}]
        $suppressErrors[
          $deletecommand
          $deleteIn[3s]
          {description:<@$authorID> cık cık küfürayıp}

        ]
        $onlyIf[$checkContains[$toLowercase[$message];https;.xyz;.com;.net;.tk;.cf;.gold;.me;.biz;.co]==true;]
        $onlyIf[$hasPerms[$authorID;admin]!=true;]
        $onlyIf[$getServerVar[linkengel]==açık;]
        `
      })




        bot.awaitedCommand({
        name: "mutecik",
        code: `
        $takeRoles[$authorID;$findRole[Muted]]
        $setUserVar[mutedurum;hayır;$authorID]
        $wait[2h]
        $channelSendMessage[$channelID;<@$authorID> \`spam\`yaptığı için susturuldu]
        $setUserVar[mutedurum;evet;$authorID]
        $channelSendMessahe[$getServerVar[mutelog];
        {title: SUSTURULMA İŞLEMİ}
        {description:
        **Susturulan Kişi**
        <@$mentioned[1]>
        **Susturan Yetkili**
        <@$791752827776401438>
        **Susturulma Sebebi**
        \`Spam\`
        **Susturulma Süresi**
        2 saat
      }
      {footer:Bu mute otomatik susturmadır kişi spam yaptığı için mutelenmiştir}
      ]
        $suppressErrors[]
        $giveRoles[$authorID;$findRole[Muted]]
        $resetUserVar[message]
        `})
