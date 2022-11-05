const fs = require('fs')
// const data = 'This is some tesst text.....!'
// fs.writeFile('file.txt', data, (err) => {
//     if (err) {
//         console.log('err => ', err)
//     } else {
//         console.log('success')
//     }
// })

const data = 'appending this text'
fs.appendFile('file.txt', data, (err) => {
    if (err) {
        console.log('err => ', err)
    } else {
        console.log('success')
    }
})

fs.readFile('./file.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log('error while reading =', err)
    } else {
        console.log('Output =', data)
    }
})
