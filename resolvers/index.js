const createFile = require('./createFile')
const hello = require('./hello')

module.exports = {
  Query: {
    hello,
  },
  Mutation: {
    createFile,
  },
}
