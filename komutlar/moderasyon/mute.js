module.exports = {
  name:"mute",
  code:`
  $channelSendMessage[$getServerVar[mutelog];*<@$mentioned[1]> adlı kişini nmutesi bitti heyyo*]
  $takeRoles[$mentioned[1];$getServerVar[mrol]]
  $setUserVar[mutedurum;hayır;$mentioned[1]]
  $wait[$message[2]]
  $setUserVar[mutedurum;evet;$mentioned[1]]
  $giveRoles[$mentioned[1];$getServerVar[mrol]]
  $channelSendMessage[$getServerVar[mutelog];
  {title: SUSTURULMA İŞLEMİ}
  {description:
  **Susturulan Kişi**
  <@$mentioned[1]>
  **Susturan Yetkili**
  <@$authorID>
  **Susturulma Sebebi**
  $message[3] $message[4] $message[5]
  **Susturulma Süresi**
  $message[2]
}

]



  $onlyPerms[admin;Yetkin Yok !]
  $onlyIf[$getServerVar[mrol]!=yok;Hey dostum mute rolü ayarlı değil?]
  $onlyIf[$message[3]!=;Kullanım *mute <kişi> <süre> <sebep>]
  $onlyIf[$getServerVar[mutelog]!=;Hey dostum mute log kanalı ayarlanmamış?]
  `
}
