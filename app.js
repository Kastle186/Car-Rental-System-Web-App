// File: app.js

// Requires of modules!
const express = require('express')
const bodyParser = require('body-parser')

// Constants!
const app = express()
const port = 3000

// Use resources!
app.use(express.static('views'))
app.use(bodyParser.urlencoded({ extended: true }))

// Set Embedded JS for rendering the html pages!
app.set('view engine', 'html')
app.engine('html', require('ejs').renderFile)

app.get('/login', function(request, response) {
    response.render('login.html')
})

app.post('/validatelogin', function(request, response) {
    console.log(request.body)
    response.redirect('/success')
})

app.get('/success', function(request, response) {
    response.send('Success!')
})

app.get('/', function(request, response) {
    response.send('Hello World!')
})

app.listen(port, function(error) {
    if (error) console.log(error)
    console.log('First app running on port ' + port + '!')
})
