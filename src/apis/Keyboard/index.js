import EventEmitter from 'event-emitter'
const Keyboard = new EventEmitter()
Keyboard.addListener = Keyboard.on
module.exports = Keyboard