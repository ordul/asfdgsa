module.exports = {
    name:"kick",
    code:`
  $color[RANDOM]
  $title[Atılma İşlemi !]
  $addField[Atılan Kişi; $username[$mentioned[1]]#$discriminator[$mentioned[1]]]
  $addField[Atan kişi; <@$authorID>]
  $addField[Atılma Sebebi; $noMentionMessage]
  $footer[Atılma Tarihi]
  $addTimestamp
  $kick[$mentioned[1];$noMentionMessage]
  $onlyIf[$hasPerms[$authorID;admin]!=false;Hey Dostum yetkin yok]
  $onlyIf[$message[2]!=;Hey dostum komudu yanlış kullandın *kick @kişi sebep]



`
    
}