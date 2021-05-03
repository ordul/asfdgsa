module.exports =  {
    name:"hgbb-aç",
    code:`
    $title[Başarılı]
    $description[Hg-Bb kanalı başarıyla <#$mentionedChannels[1]> ayarlandı]
    $setServerVar[hgbbkanal;$mentionedChannels[1]]
    $onlyPerms[admin;Üzgünüm dostum yetkin yok]
    $onlyIf[$message[1]!=;Hey dostum bir kanal etiketlemedin?]
    $onlyIf[$mentionedChannels[1]!=;Yanlış kullanım *hgbb-aç @kanal]
    `


}