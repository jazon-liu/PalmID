const fs = require('fs')
const express = require('express')
const camera = require('raspberry-pi-camera-native')
const ffmpge = require('ffmpeg')

const PORT = process.env.PORT || 3001
const app = express()

const cameraOptions = {
  width: 1920,
  height: 1080,
  fps: 2,
  encoding: 'JPEG',
  quality: 2
}

camera.start(cameraOptions)

camera.on('frame', data => {
  
})

app.get('/video', (req, res) => {
  camera.on('frame', data => {
    console.log(data)

    const head = {
      'Content-Type': 'video/mp4',
    }
    
    res.writeHead(206, head)

    res.end(data, 'binary')
  })
})

app.listen(PORT)
console.log('Listening on port: ' + PORT)


