const test = require('ava')
const index = require('.')

test('should return the expected xy coordinates', t => {
    t.deepEqual(index('#008000'), [0.1724, 0.7468])
})