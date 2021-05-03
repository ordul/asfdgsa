module.exports = {
	name:"otorol-ayarla",
    code:`
    $setServerVar[otorolrol;$mentionedRoles[1]]
    $setServerVar[otorollog;$mentionedChannels[1]]
	$setServerVar[otorol;açık]
    $title[Başarılı]
    $description[Otorol başarıyla ayarlandı.Artık sunucuya yeni birisi geldiğinde <@$mentionedRoles[1]> rolünü vereceğim ve <#$mentionedChannels[1]> kanalına mesaj atacağım]
    $onlyIf[$hasPerms[$authorID;admin];Hey dostum yetkin yok?]
    $onlyPerms[admin;Hey dostum yetkin yok?]
	$onlyIf[$getServerVar[otorol]!=açık;Hey dostum bu özellik zaten açıkmış?]
    $onlyIf[$message[2]!=;Bir dakika yanlış bir kullanım Doğrusu *otorol-ayarla @rol #kanal]
    $onlyIf[$mentionedRoles[1]!=;Rol Etiketle!]
    `
    

}