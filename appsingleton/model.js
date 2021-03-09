class player{
    constructor(id, name){
        this.id = id;
        this.name = name;
    }
}

class game{
    constructor(id, name){
        this.id = id;
        this.name = name;
    }
}

class score{
    constructor(id, points, idplayer, idgame){
        this.id = id;
        this.points = points;
        this.idplayer = idplayer;
        this.idgame = idgame;
    }
    
}

class Topscore{
    constructor(idp1, idg1, idp2, idg2, idp3, idg3){
        this.idp1 = idp1;
        this.idg1 = idg1;
        this.idp2 = idp2;
        this.idg2 = idg2;
        this.idp3 = idp3;
        this.idg3 = idg3;
        if(typeof Topscore.instance === "object"){
            console.log("\u001b[1;37m ---------");
            console.log("\u001b[1;31m|Forbiden!|");
            console.log("\u001b[1;37m ---------");
            return Topscore.instance;
        }
        Topscore.instance = this;
        return this;
    }
    
}

module.exports = {player, game, score, Topscore}