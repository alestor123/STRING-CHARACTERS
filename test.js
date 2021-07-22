const tap = require('tap')
const stringChar = require('./App')
const testChar = stringChar('this is an awesome stuff ikr 12323123 bravo echo one one connected and an array  !#$%&()*+,-./:;<=>?@[]^_`{|}~ ')

tap.throws(() => stringChar(), new Error('Please enter a valid string'))
tap.throws(() => stringChar(0), new Error('Please enter a valid string'))
tap.throws(() => stringChar(''), new Error('Please enter a valid string'))
tap.equal(testChar.some(r => ['t', 'h', 'i', 'l', 'm', 'o', 'p', 's', 't', 'u'].includes(r)), true)
