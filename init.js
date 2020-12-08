const { promises: fs, existsSync: exists } = require('fs')
const path = require('path')
const { FILE_STORE } = require('./config')

async function init() {
  console.info('Initializing')
  if (!exists(FILE_STORE)) {
    try {
      await fs.mkdir(FILE_STORE)
    } catch (error) {
      throw new Error('Unable to create temporary file store', error)
    }
  }
  console.info('Initialization complete')
}

module.exports = init
