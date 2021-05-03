module.exports = {
	name:"unmute",
    code:`
    $setUserVar[mutedurum;hayır;$mentioned[1]]
    $takeRoles[$mentioned[1];$getServerVar[mrol]]
    $title[İşlem Başarılı]
    $description[<@$mentioned[1]> kişisinin mutesi <@$authorID> tarafından kaldırıldı]
    $channelSendMessage[$getServerVar[mutelog]]
    $onlyIf[$getServerVar[mutedurum]!=kapalı;Hey bu kişinin mutesi açık değilmiş?]
	
  $onlyPerms[admin;Yetkin Yok !]
  $onlyIf[$getServerVar[mrol]!=yok;Hey dostum mute rolü ayarlı değil?]
  $onlyIf[$message[1]!=;Kullanım !unmute <kişi> ]
  $onlyIf[$getServerVar[mutelog]!=ayarlanmamış;Hey dostum mute log kanalı ayarlanmamış?]
    
    
    
    `




}