module.exports = {
    name:"erkek-rol",
    aliases:['e-rol'],
    usage:"erkek-rol @rol",
    code:`
    $title[İşlem Başarılı]
    $description[Erkek rol <@$mentionedRoles[1] olarak ayarlandı]
    $setServerVar[erkek;$mentionedRoles[1]]
    $onlyIf[$mentionedRoles[1]!=;Bu özellik için ilk önce bir rol etiketlemen lazım:*erkek-rol @rol]
    $onlyIf[$message[1]!=;Yanlış bir kullanım doğrusu: *erkek-rol @rol]
    $onlyPerms[manageroles;:x: Bunu yapmak için \`Rolleri Yönet\` yetkisine sahip olmalısın ]
    
    `
    
    


}