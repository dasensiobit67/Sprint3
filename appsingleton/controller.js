const {player, game, score, Topscore} = require ('./model');

var players=[];
var games=[];
var scores=[];
var sorted=[];

function addplayer(id, name){
    players.push(new player(id, name));
}

function getplayers(){
    return players;
}

function getplayerbyId(id){
    return players.find(function(item){
        return item.id === id;
    });
}

function addgame(id, name){
    games.push(new game(id, name));
}

function getgames(){
    return games;
}

function getgamebyId(id){
    return games.find(function(item){
        return item.id === id;
    });
}

function addscore(id, points, idp, idg){
    scores.push(new score(id, points, idp, idg));
}

function getscores(){
    return scores;
}

function getsortscores(){
    sorted = scores.sort(((a, b) => b.points - a.points));
    return sorted;
}

function getpodium(){
    podium = new Topscore(
        sorted[0].idplayer,sorted[0].idgame,
        sorted[1].idplayer,sorted[1].idgame,
        sorted[2].idplayer,sorted[2].idgame,
        )
    return podium;

}

module.exports = {
    addplayer, getplayers, getplayerbyId, 
    addgame, getgames, getgamebyId, 
    addscore, getscores, getsortscores, getpodium
};