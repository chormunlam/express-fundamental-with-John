//api focus more on express, and SSR is more overhead

const express = require('express')
const app = express() //invoke

/** 
app.get('/',(req,res)=>{
  res.json([{name:'john'}, {name:'kitty'}])
})
*/


const { products } = require('./data')//get object in products array..
app.get('/', (req, res) => {
  res.json(products)
})

//same do the listen too
app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})

//my json file did not format well in broswer..