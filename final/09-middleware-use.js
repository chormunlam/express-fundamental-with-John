const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')



//  req => middleware => res
//app.use(logger)//this will invoked with any route
app.use([logger, authorize])


// api/home/about/products

app.get('/', (req, res) => {
  res.send('Home')
})
app.get('/about', (req, res) => {
  res.send('About')
})
app.get('/api/products', (req, res) => {
  res.send('Products')
})
app.get('/api/items', (req, res) => {
  console.log(req.user)//now it require to use ?user=john
  res.send('Items')
})

app.listen(5001, () => {
  console.log('Server is listening on port 5001....')
})

/*
GET /products 2022
GET / 2022
GET /?user=john 2022
 */