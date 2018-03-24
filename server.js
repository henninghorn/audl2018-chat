// server.js
// where your node app starts

// init project
const express = require('express')
const app = express()

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))

app.use(express.json())

//

const messages = []

//

app.get('/api/messages', (req, res) => {

  res.json(messages)

})

app.post('/api/messages', (req, res) => {

  let message = {
    text: req.body.text
  }
  
  messages.push(message)
  
  res.json({
    message: 'Saved.'
  })
  
})

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})
