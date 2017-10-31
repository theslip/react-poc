const express = require('express')
const path = require('path')
const http = require('http')

const app = express()
const port = 3500

app.use('/public', express.static(path.join(__dirname, '/public')))
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')))

http.createServer(app).listen(port, 'localhost', () => {
  console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`)
})
