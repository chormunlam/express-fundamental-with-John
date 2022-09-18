const express = require('express')
const app = express()

//  req => middleware => res

const logger = (req, res, next) => {
  const method = req.method
  const url = req.url
  const time = new Date().getFullYear()
  console.log(method, url, time)
  next()//when you work in middleware, you must pass it on next middeleware
  //or you terminated with res.send('Testing')
}
//this will out put GET / 2022

app.get('/', logger, (req, res) => {
  res.send('Home')
})

app.get('/about', logger, (req, res) => {
  res.send('About')
})


app.listen(5001, () => {
  console.log('Server is listening on port 5001....')
})


