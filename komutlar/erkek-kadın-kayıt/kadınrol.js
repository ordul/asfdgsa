module.exports = {
    name:"kadın-rol",
    code:`
    $title[İşlem Başarılı]
    $description[Kadın rol <@$mentionedRoles[1] olarak ayarlandı]
    $setServerVar[kadın;$mentionedRoles[1]]
    $onlyIf[$mentionedRoles[1]!=;Bu özellik için ilk önce bir rol etiketlemen lazım:*kadın-rol @rol]
    $onlyIf[$message[1]!=;Yanlış bir kullanım doğrusu: *kadın-rol @rol]
    $onlyPerms[manageroles;❌Bunu yapmak için \`Rolleri Yönet\` yetkisine sahip olmalısın ]

    `




}
