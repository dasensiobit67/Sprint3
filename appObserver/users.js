const EventEmitter = require('events');
const User1 = require('./topics').Topic1;
const User2 = require('./topics').Topic2;
const eventEmitter = new EventEmitter();

eventEmitter.on("missatge", (msg) => console.log("Missatge de "+msg));

let user1= new User1(`User1`, eventEmitter);
user1.attend();
let user2= new User1(`User2`, eventEmitter);
user2.attend();

let user3= new User2(`User3`, eventEmitter);
user3.attend();
