const EventEmitter = require('events');

class Topic1 {
    constructor(name, eventEmitter) {
      this.name = name;
      this.eventEmitter = eventEmitter;
      console.log("Topic1 - Nou listener: "+this.name+" ");
    }
  
    attend() {
      setTimeout(() => {this.eventEmitter.emit('missatge', this.constructor.name+': HOLA '+this.name);}, 3000);
      setTimeout(() => {this.eventEmitter.emit('missatge', this.constructor.name+': ADEU '+this.name);}, 5000);
    }
  }

  class Topic2 {
    constructor(name, eventEmitter) {
      this.name = name;
      this.eventEmitter = eventEmitter;
      console.log("Topic2 - Nou listener: "+this.name+" ");
    }
  
    attend() {
      setTimeout(() => {this.eventEmitter.emit('missatge', this.constructor.name+': HOLA '+this.name);}, 3000);
      setTimeout(() => {this.eventEmitter.emit('missatge', this.constructor.name+': ADEU '+this.name);}, 5000);
    }
  }

module.exports = {Topic1, Topic2};
