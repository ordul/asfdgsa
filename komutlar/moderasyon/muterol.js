module.exports = {
	name:"mute-ayarla",
    code:`


	$title[İşlem Başarılı]
	$description[Artık mute atıldığında verilecek rol <@$mentionedRoles[1]>
    Ayrıca mute atıldığında <#$mentionedChannels[1]> kanalına mesaj atacağım]
    
	$addField[Nasıl Mute Verilir?;*mute @kişi süre sebeb]
	$addField[Süreler;1 dakika:1m,1 saniye:1s,1saat 1h,1gün 1d]
	$footer[$username]
    $setServerVar[mrol;$mentionedRoles[1]]
	$setServerVar[mutelog;$mentionedChannels[1]]
	$onlyPerms[admin;Hey dostum yetkin yok]
	$onlyIf[$message[1]!=;Hey yanlış bir kullanım *mute-ayarla @rol ]
	$suppressErrors[Bir hata oluştu sanırım bir rol etiketlemedinveya bir kanal?]



`


}