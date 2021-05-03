module.exports = {
    name:"devamet",
    aliases:['devam','resume'],
    code:`
    $color[RANDOM]
    $title[Devam Etme Başarılı]
    $description[Şarkı devam ettiriliyor [$songInfo[title]($songInfo[url])]]
    $resumeSong
    $onlyIf[$voiceID!=;Sanırım bir ses kanalına girmeyi unuttun]
    $suppressErrors[Müzik çalıyor iken devam etmemi istiyorsun biraz aklıllı ol]
    `
    }