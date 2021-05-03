module.exports = {
    name:"üye-ayarla",
    code:`
    $title[İşlem Başarılı]
    $description[Üye rol <@$mentionedRoles[1]> olarak ayarlandı]
    $setServerVar[karol;$mentionedRoles[2]]
    $setServerVar[üyerol;$mentionedRoles[1]]
    $setServerVar[kkanal;$mentionedChannels[1]]
    $setServerVar[kendinkayıt;açık]
    $onlyIf[$mentionedRoles[1]!=;Yanlış kullanım Doğrusu: *üye-kayıt @kayıtsızrol @üyerol #kanal]
    $onlyIf[$mentionedRoles[2]!=;Yanlış kullanım Doğrusu: *üye-kayıt @kayıtsızrol @üyerol #kanal]
    $onlyIf[$mentionedChannels[1]!=;Yanlış kullanım Doğrusu: *üye-kayıt @kayıtsızrol @üyerol #kanal]
    $onlyIf[$message[1]!=;Yanlış kullanım Doğrusu: *üye-kayıt @kayıtsızrol @üyerol #kanal]
    $onlyPerms[admin;Üzgünüm dostum yetkin yok]
    `


}