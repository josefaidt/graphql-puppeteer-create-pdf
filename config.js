const path = require('path')

const FILE_STORE = path.join(__dirname, '.files')
const FILE_TEMPLATE = path.join(__dirname, 'static/template.html')
const PORT = process.env.PORT || 3000

module.exports = {
  FILE_TEMPLATE,
  FILE_STORE,
  PORT,
}
