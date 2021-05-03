module.exports = {
    name:"durdur",
    aliases:['pause'],
    code:`
    $color[RANDOM]
    $title[Durdurma Başarılı]
    $description[Durdurulan Şarkı [$songInfo[title]($songInfo[url])]]
    $pauseSong
    $onlyIf[$voiceID!=;Sanırım bir ses kanalına girmeyi unuttun]
    $suppressErrors[Müzik çalmıyor iken şarkı durdurmamı istiyorsun biraz aklıllı ol]
    `
    }