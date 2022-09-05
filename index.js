// const person = require('./person')

// const person1 = new person('Atul Jha',22)
// person1.greetings()

const Logger = require("./logger");
const logger = new Logger();

logger.on("message", (data) => console.log("Called Listener:", data));

logger.log("Hello World!");
