const {
    addplayer, getplayers, getplayerbyId, 
    addgame, getgames, getgamebyId,
    addscore, getscores, getsortscores, getpodium
} = require('./controller');

addplayer(1,"Pere");
addplayer(2,"Ana");
addplayer(3,"Joan");
addplayer(4,"Toni");
addplayer(5,"Sara");
addplayer(6,"Inma");

addgame(1,"Tenis");
addgame(2,"Basket");
addgame(3,"Golf");

addscore(1,3,1,1);
addscore(2,4,1,2);
addscore(3,3,2,3);
addscore(4,1,3,2);
addscore(5,6,2,1);
addscore(6,2,5,1);
addscore(7,5,4,3);
addscore(8,2,6,2);



players = getplayers();
games = getgames();
scores = getscores();


console.log("\u001b[1;33mPlayers List");
console.log("\u001b[1;37m------------");
players.forEach(player => console.log(player.id+":"+player.name));

console.log("\u001b[1;33mGames List");
console.log("\u001b[1;37m----------");
games.forEach(game => console.log(game.id+":"+game.name));

console.log("\u001b[1;33mScores List");
console.log("\u001b[1;37m-----------");
scores.forEach(score => {
    let player = getplayerbyId(score.idplayer);
    let game = getgamebyId(score.idgame);
    console.log(score.id+":"+player.name+":"+game.name+":"+score.points);
});

let sorted = getsortscores();

console.log("\u001b[1;33mSorted List");
console.log("\u001b[1;37m-----------");
sorted.forEach(score => {
    let player = getplayerbyId(score.idplayer);
    let game = getgamebyId(score.idgame);
    console.table(score.id+":"+player.name+":"+game.name+":"+score.points);
});

podium = getpodium();

const {Topscore} = require ('./model');

podium = new Topscore(1,1,1,1,1,1);

console.log("\u001b[1;33mPodium List Singleton");
console.log("\u001b[1;37m---------------------");
let player1= getplayerbyId(podium.idp1);
let game1 = getgamebyId(podium.idg1);
let player2= getplayerbyId(podium.idp2);
let game2 = getgamebyId(podium.idg2);
let player3= getplayerbyId(podium.idp3);
let game3 = getgamebyId(podium.idg3);
console.table("TOP 1: "+player1.name+":"+game1.name);
console.table("TOP 2: "+player2.name+":"+game2.name);
console.table("TOP 3: "+player3.name+":"+game3.name);
