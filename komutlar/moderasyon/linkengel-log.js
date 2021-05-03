module.exports = {
    name:"linkengel-log",
    aliases:['lengel-log'],
    code:`
    $title[İşlem  Başarılı]
    $description[Artık birisi reklam yaptığında <#$mentionedChannels[1]> kanalına mesaj atacağım]
    $setServerVar[linklog;$mentionedChannels[1]]
    $onlyIf[$message[1];Hey yanlış bir kullanım girdin doğrusu *linkengel-log #kanal]
    $onlyIf[$getServerVar[linkengel]==açık;Hey daha link engel özelliğini açmamışsın açmak için *linkengel-aç]
    $onlyIf[$hasPerms[$authorID;admin]!=false;Üzgünüm Bunun İçin Yetkin Yok !]
    
    `



}