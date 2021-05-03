module.exports = {
    name:"linkengel-kapat",
    aliases:['lengel-kapat'],
    code:`
    $title[İşlem Başarılı]
    $description[Link engel başarıyla kapatıldı]
    $setServerVar[linkengel;kapalı]
    $onlyIf[$hasPerms[$authorID;admin]!=false;Üzgünüm Bunun İçin Yetkin Yok !]
    $onlyIf[$getServerVar[linkengel]==açık;Hey bu özellik zaten kapalıymış?]
    
    
    `


}