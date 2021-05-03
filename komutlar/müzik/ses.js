module.exports = {
    name:"ses",
    aliases:['volume','v'],
    code:`
    $color[RANDOM]
    $title[İşlem Başarılı]
    $description[Ayarlanan Ses: $message]
    $volume[$message]
    $onlyIf[$isNumber[$message]!=false;Bir sayı girmelisin]
    $onlyIf[$voiceID!=;Üzgünüm ama bunun için bir ses kanalında olmaz lazım]
    $onlyIf[$message!=;Bir sayı girmelisin]
    $suppressErrors[Müzik çalmazken ses arttırmaya çalışan arkadaş seni gönülden kutluyorum]
    
  
    
    
    `



}