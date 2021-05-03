module.exports = {
    name:"kayıt",
    code:`
    $title[İşlem Başarılı]
    $description[<@$authorID> başarıyla kayıt oldun]
    $takeRoles[$authorID;$getServerVar[karol]]
    $giveRoles[$authorID;$getServerVar[üyerol]]
    $changeNickname[$authorID;$message[1] | $message[2]]
    $onlyForChannels[$getServerVar[kkanal];Üzgünüm Dostum burası kayıt kanalı değil]
    $onlyIf[$isNumber[$message[2]!=true;Hey yaşına bir sayı girmelisin]]
    $onlyIf[$getServerVar[karol]!=;Hey sistem daha kapalı *üye-kayıt-ayarlar yazarak neyin ayarlı olduğunu görebilirsin(Yetkililer için)]
    $onlyIf[$getServerVar[üyerol]!=;Hey sistem daha kapalı *üye-kayıt-ayarlar yazarak neyin ayarlı olduğunu görebilirsin(Yetkililer için)]
    $onlyIf[$getServerVar[kkanal]!=;Hey sistem daha kapalı *üye-kayıt-ayarlar yazarak neyin ayarlı olduğunu görebilirsin(Yetkililer için)]
    
    `


}