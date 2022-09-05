const EventEmitter = require("events");

//Create Class
class MyEventEmitter extends EventEmitter {}

//Init Object
const myEvent = new MyEventEmitter();

//Event Listener
myEvent.on("event", () => console.log("Event Fired"));

//Init event
myEvent.emit("event");
myEvent.emit("event");
myEvent.emit("event");
