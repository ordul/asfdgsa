module.exports = {
    name:"küfürengel-aç",
    aliases:['kengel-aç'],
    code:`
    $title[İşlem Başarılı]
    $description[Küfür engel başarıyla açıldı]
    $addField[Log Kanalı;Küfür log kanalını ayarlamak için: *küfürengel-log #kanal]
    $footer[NOT:Log kanalını ayarlamazsanız bu özellik çalışmaz]
    $setServerVar[küfür;açık]
    $onlyIf[$hasPerms[$authorID;admin]!=false;Üzgünüm Bunun İçin Yetkin Yok !]
    $onlyIf[$getServerVar[küfür]==kapalı;Bu özellik zaten açıkmış daha ne uğraşıyorsun]
    
    
    `



}