module.exports = {
    name:"duraklat",
    aliases:['stop'],
    code:`
    $color[RANDOM]
    $title[Durdurma Başarılı]
    $description[Şarkılar Duraklatıldı]
    $stopSong
    $onlyIf[$voiceID!=;Sanırım bir ses kanalına girmeyi unuttun]
    $suppressErrors[Müzik çalmıyor iken şarkı duraklatmamı istiyorsun biraz aklıllı ol]
    `
    }