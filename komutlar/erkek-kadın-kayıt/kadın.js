module.exports = {
    name:"kadın",
    aliases:['k'],
    code:`
    $giveRoles[$mentioned[1];$getServerVar[kadın]]
    $takeRoles[$mentioned[1];$getServerVar[kayıtsız]]
    $addField[Kayıt eden kişinin kayıt sayısı;$getServerVar[kayıtsayı]]
    $setServerVar[kayıtsayı;$sum[$getServerVar[kayıtsayı]+1]]
    $addField[Kayıt Olan Kişi;<@$mentioned[1]>]
    $addField[Kayıt Eden Kişi;<@authorID>]
    $title[Kayıt Başarılı]
    $onlyForRoles[$getServerVar[kyetkili];Bu komutu sadece kayıt yetkilileri kullanabilir]
    $onlyIf[$message[1]!=;Bunu yapmam için bir kişi etiketlemelisin]
    $onlyIf[$mentioned[1]!=;Bunu yapmam için birini etiketlemelisin]
    $onlyIf[$getServerVar[kyetkili]!=;Daha Kayıt Yetkilisi ayarlanmamış ilk önce onu ayarla]
    $onlyIf[$getServerVar[kadın]!=;Daha kadın rolü ayarlamamışsın ilk önce onu ayarla]
    
    `


}