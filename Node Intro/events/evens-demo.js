const { EventEmitter } = require('events')

const Obj = new EventEmitter()

Obj.on('customEvent', (firstName, lastName) => {
    console.log('got fired', firstName, lastName)
})
Obj.emit('customEvent', 'abhialsh', 'vorat')
