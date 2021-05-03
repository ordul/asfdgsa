module.exports = {
    name:"spamengel",
    code:`
    $if[$message[1]==aç]
    $setServerVar[spamengel;açık]
    Spam engel başarıyla açıldı
    $onlyIf[$message[1]!=;Bunu yapmak için *spamengel aç ya da *spamengel]
    $onlyPerms[admin;:x: Bunu yapmak için \`Yönetici\` yetkisine sahip olmalısın]

    $elseif[$message[1]==kapat]
    $resetServerVar[spamengel]
    $onlyPerms[admin;:x: Bunu yapmak için \`Yönetici\` yetkisine sahip olmalısın]
    `


}