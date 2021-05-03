module.exports = {
    name:"linkengel-aç",
    aliases:['lengel-aç'],
    code:`
    $title[İşlem Başarılı]
    $description[Link engel başarıyla açıldı]
    $addField[Log Kanalı;Link log kanalını ayarlamak için: *linkengel-log #kanal]
    $footer[NOT:Log kanalını ayarlamazsanız bu özellik çalışmaz]
    $setServerVar[linkengel;açık]
    $onlyIf[$hasPerms[$authorID;admin]!=false;Üzgünüm Bunun İçin Yetkin Yok !]
    $onlyIf[$getServerVar[linkengel]==kapalı;Bu özellik zaten açıkmış daha ne uğraşıyorsun]
    
    
    `



}