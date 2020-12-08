const puppeteer = require('puppeteer')
const fs = require('fs').promises
const path = require('path')
const { FILE_STORE } = require('../config')

module.exports = async function createFile(parent, args, ctx, info) {
  const { data } = args
  const template = await fs.readFile(path.join(__dirname, '../static/template.html'), 'utf-8')
  const outputId = `${data.name}-${Date.now()}.pdf`
  const output = path.join(FILE_STORE, outputId)

  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.setContent(template)
  await page.emulateMediaType('screen')
  // create pdf file
  await page.pdf({
    path: output,
    format: 'A4',
    printBackground: true,
  })
  await browser.close()

  // return outputId to be used with /files/outputId
  return outputId
}
