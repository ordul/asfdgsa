module.exports = {
    name:"üye-kayıt-sıfırla",
    code:`
    Kayıt Sistemi Resetlenmiştir !
    $resetServerVar[üyerol]
    $resetServerVar[kkanal]
    $onlyIf[$hasPerms[$authorID;admin]!=false;Üzgünüm Bunu Sadece \`\`Yönetici\`\` Kişileri Ayarlayabilir !]
    `
  }