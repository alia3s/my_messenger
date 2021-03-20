const { resolve } = require('path')

module.exports = {
  aliases: {
    '#': resolve(__dirname, `../src`),
    '#/components': resolve(__dirname,`../src/components`)
  }
}