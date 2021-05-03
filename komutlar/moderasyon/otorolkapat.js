module.exports = {
	name:"otorol-kapat",
    code:`
    

	$resetServerVar[otorollog]
	$resetServerVar[otorolrol]
	$resetServerVar[otorol]
	$title[Başarılı]
	$description[Bu özelliği başarıyla kapattın]
	$onlyIf[$hasPerms[$authorID;admin];Hey dostum yetkin yok?]
	$onlyIf[$getServerVar[otorol]!=kapalı;Bu özellik zaten kapalıymış?]
    $onlyPerms[admin;Hey dostum yetkin yok?]
`}