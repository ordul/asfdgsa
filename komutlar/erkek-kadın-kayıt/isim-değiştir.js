module.exports = {
    name:"isim",
    aliases:['ad'],
    code:`
    $changeNickname[$mentioned[1];$noMentionMessage]

    <@$mentioned[1]> kişisinin adı başarıyla değiştirildi
    $onlyIf[$message[2]!=;Yanlış bir kullanım Doğrusu:*isim @kişi yeniisim]
    $onlyIf[$noMentionMessage!=;Bunu yapabilmem için bir isim girmen lazım]
    $onlyIf[$mentioned[1]!=;Bunu yapabilmem için birisini etiketlemen lazım]
    $onlyPerms[managenicknames;$replaceText[https://api.xzusfin.repl.co/card?avatar=$authorAvatar&middle=%20&name=%C3%9Czg%C3%BCn%C3%BCm%20Yetkin%20Yok&bottom=%20&background=https://i.hizliresim.com/byVeDQ.jpg&text=%23ffffff&avatarborder=%23FFFFFF&avatarbg=%23FF28b3;.webp;.png]]


    `


}
