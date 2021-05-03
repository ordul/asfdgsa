module.exports = {
    name:"küfürengel-log",
    aliases:['kengel-log'],
    code:`
    $title[İşlem  Başarılı]
    $description[Artık birisi küfür ettiğinde <#$mentionedChannels[1]> kanalına mesaj atacağım]
    $setServerVar[küfürlog;$mentionedChannels[1]]
    $onlyIf[$message[1];Hey yanlış bir kullanım girdin doğrusu *küfürengel-log #kanal]
    $onlyIf[$getServerVar[küfür]==açık;Hey daha küfür engel özelliğini açmamışsın açmak için *küfürengel-aç]
    $onlyIf[$hasPerms[$authorID;admin]!=false;Üzgünüm Bunun İçin Yetkin Yok !]
    
    `



}