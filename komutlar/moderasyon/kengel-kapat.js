module.exports = {
    name:"küfürengel-kapat",
    aliases:['kengel-kapat'],
    code:`
    $title[İşlem Başarılı]
    $description[Küfür engel başarıyla kapatıldı]
    $setServerVar[küfür;kapalı]
    $resetServerVar[küfürlog]
    $onlyIf[$hasPerms[$authorID;admin]!=false;Üzgünüm Bunun İçin Yetkin Yok !]
    $onlyIf[$getServerVar[küfür]==açık;Hey bu özellik zaten kapalıymış?]
    
    
    `


}