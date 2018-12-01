const express = require('express')
const RaspiCam = require('raspicam')



const PORT = process.env.PORT || 3001
const app = express()
const camera = new RaspiCam()

camera.start()

app.get('/video', (req, res) => {

})

app.listen(PORT)
console.log('Listening on port: ' + PORT)

