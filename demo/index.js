const moduleA = require('./ModuleA')

const message = moduleA.sayHello()  


console.log(require.cache)

console.log(message)// 'hello world'