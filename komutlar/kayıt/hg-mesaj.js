module.exports = {
    name:"hg-mesaj",
    code:`
    
    Hoşgeldin Mesajı Başarıyla ayarlanmıştır
Ayarlanan mesaj = $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message;-uye-;<@$authorID>;-1];-uyetag-;$username#$discriminator;-1];-botsayisi-;$botCount;-1];-kisisayisi-;$membersCount;-1];-sunucubolgesi-;$serverRegion;-1];-sunucu-;$serverName;-1]

    $setServerVar[hgmesaj;$message]
    $onlyPerms[admin;Üzgünüm dostum yetkin yok]
    $onlyIf[$message[1]!=;Hey dostum bir mesaj girmedin?]
    
    
    `


}
//[hgmesaj;$replaceText[$replaceText[$replaceText[replaceText[$replaceText[$replaceText[$message;-uye-;-uye-];-uyetag-;-uyetag-];-botsayisi-;-botsayisi-];-kisisayisi-;-kisisayisi-];-sunucubolgesi-;-sunucubolgesi-];-sunucu-;-sunucu-]]