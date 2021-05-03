module.exports = ({
    name: "tekrarla",
    aliases:['repeat'],
    code: `
    $color[00ff51]
$author[$replaceText[$replaceText[$loopQueue;true;Şarkı Tekrarlanıyor <a:yehuu:793804921132023868> ;-1];false;Şarkı Tekrarlanamıyor <a:megaultrax123123hmm:793803207524089867> ;-1];https://i.hizliresim.com/z3QjWn.png]



$suppressErrors[Sanırım bir şeyi atladın bir müzik çalmıyor?]
$onlyIf[$voiceID!=;Bir ses kanalında değilsin?]
    `
    });