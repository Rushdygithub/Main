const path = require('path')

const info = [
    obj = {
       path: __dirname,
       fileName: __filename,
       baseName: path.basename,
       extention: path.extname,
       parse: path.parse,
       join: path.join('Modules','path.js')

    }
]

console.log(info[0].path)
console.log(info[0].fileName)
console.log(info[0].baseName(info[0].fileName))
console.log(info[0].extention(info[0].fileName))
console.log(info[0].parse(info[0].fileName))
console.log(info[0].join)

