import { EventEmitter } from "events";

const myEmitter = new EventEmitter();

function morningGreet() {
  console.log("good morning");
}
function eveningGreet() {
  console.log("good evennig");
}

myEmitter.on("greetmorning", morningGreet);
myEmitter.on("greetevening", eveningGreet);

myEmitter.emit("greetmorning");
myEmitter.emit("greetevening");
