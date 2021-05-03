module.exports = {
    name:"kayıt-yetkili-ayarla",
    aliases:['kyetkili-ayarla'],
    code:`
    $title[İşlem Başarılı]
    $description[Kayıt Yetkilisi rol <@$mentionedRoles[1]> olarak ayarlandı]
    $setServerVar[kyetkili;$mentionedRoles[1]]
    $onlyIf[$mentionedRoles[1]!=;Yanlış kullanım *kayıt-yetkili-ayarla @rol]
    $onlyIf[$message[1]!=;Yanlış kullanım Doğrusu: *kayıt-yetkili-ayarla @rol]
    $onlyPerms[admin;Üzgünüm dostum yetkin yok]
    `


}