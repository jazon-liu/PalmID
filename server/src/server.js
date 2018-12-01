const fs = require('fs')
const express = require('express')
const camera = require('raspberry-pi-camera-native')

const PORT = process.env.PORT || 3001
const app = express()

const cameraOptions = {
  width: 1280,
  height: 720,
  fps: 2,
  encoding: 'JPEG',
  quality: 75
}

camera.start(cameraOptions)
camera.on('frame', data => {
  console.log(data)
  writeImg(data)
})

let count = 0

function writeImg (data) {
  fs.writeFile(`./imgs/img${count}.jpeg`, data, 'binary', (err) => {
    console.error(err)
  })
  count++
}

app.get('/video', (req, res) => {
  res.send()
})

app.listen(PORT)
console.log('Listening on port: ' + PORT)

