module.exports = {
    name:"ban",
    code:`
  $color[RANDOM]
  $title[Yasaklanma İşlemi !]
  $addField[Yasaklanan Kişi; $username[$mentioned[1]]#$discriminator[$mentioned[1]]]
  $addField[Yasaklayan kişi; <@$authorID>]
  $addField[Yasaklanma Sebebi; $noMentionMessage]
  $footer[Yasaklanma Tarihi]
  $addTimestamp
  $ban[$mentioned[1];$noMentionMessage]
  $onlyIf[$hasPerms[$authorID;admin]!=false;Hey Dostum yetkin yok]
  $onlyIf[$message[2]!=;Hey dostum komudu yanlış kullandın *ban @kişi sebep]



`
    
}