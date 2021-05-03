module.exports = {
    name:"change",
    code:`
    $image[https://api.cool-img-api.ml/changemymind?text=$replaceText[$message; ;+;-1]]
    $onlyIf[$message!=;Bir yazı gir]
    $cooldown[10s;Bu komutu her 10 saniyede bir kullanabilirsin]
    $onlyIf[$jsonRequest[https://discord.boats/api/bot/791752827776401438/voted?id=$authorID;voted;Hey]==true;Bu komutu kullanmak için oy vermen lazım.Oy vermek için [buraya tıkla\\](https://discord.boats/bot/791752827776401438)]
    
    `

}