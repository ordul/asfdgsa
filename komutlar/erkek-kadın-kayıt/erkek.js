module.exports = {
    name:"erkek",
    aliases:['e'],
    code:`
    $giveRoles[$mentioned[1];$getServerVar[erkek]]
    $takeRoles[$mentioned[1];$getServerVar[kayıtsız]]
    $title[Kayıt Başarılı]
    $addField[Kayıt eden kişinin kayıt sayısı;$getServerVar[kayıtsayı]]
    $setServerVar[kayıtsayı;$sum[$getServerVar[kayıtsayı]+1]]
    $addField[Kayıt Olan Kişi;<@$mentioned[1]>]
    $addField[Kayıt Eden Kişi;<@authorID>]
    $title[Kayıt Başarılı]
    
    $onlyIf[$message[1]!=;:x: Bunu yapmam için bir kişi etiketlemelisin]
    $onlyIf[$mentioned[1]!=;:x: Bunu yapmam için birini etiketlemelisin]
    $onlyIf[$getServerVar[kyetkili]!=;Daha Kayıt Yetkilisi ayarlanmamış ilk önce onu ayarla]
    $onlyIf[$getServerVar[erkek]!=;Daha erkek rolü ayarlamamışsın ilk önce onu ayarla]
    $onlyForRoles[$getServerVar[kyetkili];:x: Bu komutu sadece kayıt yetkilileri kullanabilir]
    
    `


}