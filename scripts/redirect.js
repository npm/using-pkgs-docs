const fs = require('fs')
const path = require('path')
const glob = require('glob')
const cheerio = require('cheerio')
let header = `
<title>Redirecting to https://docs.npmjs.com/</title>
<meta http-equiv="refresh" content="0; URL=https://docs.npmjs.com/">
<link rel="canonical" href="https://docs.npmjs.com/">
`
let layouts = glob.sync(path.resolve(__dirname, '../_book/layouts/*.html'))
let files = glob.sync(path.resolve(__dirname, '../_book/**/*.html'))
files = files.filter(file => layouts.indexOf(file) === -1)
files.map((file) => {
  let $ = cheerio.load(fs.readFileSync(file, 'utf8'))
  $('head').prepend(header)
  fs.writeFileSync(file, $.html())
})

