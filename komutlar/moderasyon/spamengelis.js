module.exports = ({
    name: "$alwaysExecute",
    code: `
    $setUserVar[message;0]
    $wait[5s]
    $setUserVar[message;$sum[$getUserVar[message];1]]
    $onlyIf[$hasPerms[$authorID;admin]!=true;]
    
    $onlyIf[$getUserVar[message]<=5;{execute:mutecik}]
    $onlyIf[$hasPerms[$authorID;admin]!=true;]
    `
    })
