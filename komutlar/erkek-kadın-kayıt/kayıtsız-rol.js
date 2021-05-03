module.exports = {
    name:"kayıtsız-rol",
    usage:"kayıtsız-rol @rol",
    code:`
    $title[İşlem Başarılı]
    $description[Kayıtsız rol <@$mentionedRoles[1] olarak ayarlandı]
    $setServarVar[kayıtsız;$mentionedRoles[1]]
    $onlyIf[$mentionedRoles[1]!=;Bu özellik için ilk önce bir rol etiketlemen lazım:*kayıtsız-rol @rol]
    $onlyIf[$message[1]!=;Yanlış bir kullanım doğrusu: *kayıtsız-rol @rol]
    $onlyPerms[manageroles;❌Bunu yapmak için \`Rolleri Yönet\` yetkisine sahip olmalısın ]

    `




}
