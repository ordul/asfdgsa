module.exports = {
    name:"üye-karşılama-aç",
    code:`
    $title[İşlem Başarılı]
    $description[Üye Karşılama sistemi<#$mentionedChannels[1]> olarak ayarlandı]
    $setServerVar[karşılama;$mentionedChannels[1]]
    $setServerVar[karşılamadurum;açık]
    $onlyIf[$mentionedChannels[1]!=;Yanlış kullanım Doğrusu:*üye-karşılama-aç #kanal]
    $onlyIf[$message[1]!=;Yanlış kullanım Doğrusu: *üye-karşılama-aç #kanal]
    $onlyIf[$getServerVar[karşılamadurum]==kapalı;Bu özellik zaten açıkmış?]
    $onlyIf[$getServerVar[kendinkayıt]==açık;Hey daha üye kayıt sistemi aktif değil ilk onu hallet]
    $onlyPerms[admin;Üzgünüm dostum yetkin yok]
    `


}