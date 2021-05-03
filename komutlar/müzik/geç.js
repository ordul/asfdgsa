module.exports = ({
    name: "geç",
    code: `
    $color[RANDOM]
    $title[Şarkı Başarıyla Geçildi]
    $skipSong
    $description[Geçilen müzik [$songInfo[title]\\]($songInfo[url])]

    $onlyIf[$voiceID!=;Sanırım bir ses kanalına girmeyi unuttun]

    $suppressErrors[Müzik çalmıyor iken şarkı geçmemi istiyorsun biraz aklıllı ol]
    `
    });