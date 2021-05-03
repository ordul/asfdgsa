module.exports = {
    name:"bb-mesaj",
    code:`
    Görüşürüz Mesajı Başarıyla ayarlanmıştır
Ayarlanan mesaj = $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message;-uye-;<@$authorID>;-1];-uyetag-;$username#$discriminator;-1];-botsayisi-;$botCount;-1];-kisisayisi-;$membersCount;-1];-sunucubolgesi-;$serverRegion;-1];-sunucu-;$serverName;-1]

    $setServerVar[bbmesaj;$replaceText[$replaceText[$replaceText[replaceText[$replaceText[$replaceText[$message;-uye-;-uye-];-uyetag-;-uyetag-];-botsayisi-;-botsayisi-];-kisisayisi-;-kisisayisi-];-sunucubolgesi-;-sunucubolgesi-];-sunucu-;-sunucu-]
    $onlyPerms[admin;Üzgünüm dostum yetkin yok]
    $onlyIf[$message[1]!=;Hey dostum bir mesaj girmedin?]
    
    
    `


}