module.exports = {
    name:"karşılama-aç",
    code:`
    $title[İşlem Başarılı]
    $description[Karşılama sistemi<#$mentionedChannels[1]> olarak ayarlandı]
    $setServerVar[ekarşılama;$mentionedChannels[1]]
    $setServerVar[karşılamadurum;açık]
    $onlyIf[$mentionedChannels[1]!=;Yanlış kullanım Doğrusu:*karşılama-aç #kanal]
    $onlyIf[$message[1]!=;Yanlış kullanım Doğrusu: *karşılama-aç #kanal]
    $onlyIf[$getServerVar[karşıalamadurum]==kapalı;Bu özellik zaten açıkmış?]
    $onlyIf[$getServerVar[kyetkili]!=;Hey daha kayıt yetkilisi ayarlanmamış ilk onu ayarla]
    $onlyPerms[admin;Üzgünüm dostum yetkin yok]
    `


}