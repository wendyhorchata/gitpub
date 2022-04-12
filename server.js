// Setting up the express
const express = require('express')
const app = express()
const PORT = 8080;
const drinks = require('./models/drinks.js')
const foods = require('./models/foods.js')


// route all Action
app.get('/', (req, res) => {
    res.send('Welcome to gitpub App!')
})

// route show all 
app.get('/drinks', (req, res) => {
    res.render('drinks_index.ejs', {
        allDrinks: drinks
    })
})

app.get('/drinks/:id', (req, res) => {
    res.render('drinks_show.ejs', {
        drink: drinks[req.params.id]
    })
})


app.get('/foods', (req, res) => {
    res.render('foods_index.ejs', {
        allFoods: foods
    })
})




app.get('/foods/:id', (req, res) => {
      res.render('foods_show.ejs', {
        item: foods[req.params.id]
        
    })
       
})


// listen to port
app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`)
})

