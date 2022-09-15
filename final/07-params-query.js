const express = require('express')
const app = express()
const { products } = require('./data')

app.get('/', (req, res) => {
  res.send('<h1> Home Page</h1><a href="/api/products">products</a>')
})

//set up get request for api/product
app.get('/api/products', (req, res) => {
  //res.json(products)
  const newProducts = products.map((product) => {
    const { id, name, image } = product
    return { id, name, image }
  })

  res.json(newProducts)
})

//set the id page
// app.get('/api/products/1', (req, res)=>{
//   const singleProduct =products.find((products)=>products.id===1)
//   res.json(singleProduct)
// })

app.get('/api/products/:productID', (req, res) => {//: placeholder(productID)
  // console.log(req) big req method
  // console.log(req.params) :{productID: '1'} come back in string
  const { productID } = req.params

  const singleProduct = products.find(
    (product) => product.id === Number(productID)//string--> number
  )
  if (!singleProduct) {
    return res.status(404).send('Product Does Not Exist')
  }

  return res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {//example:http://localhost:5001/api/products/4/reviews/aa
  console.log(req.params)
  res.send('hello world')//dummy data
})

app.get('/api/v1/query', (req, res) => {//url:api/v1/query?search=a&limit=2
  // console.log(req.query)
  const { search, limit } = req.query
  let sortedProducts = [...products]

  if (search) {//name
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search)
    })
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit))//0 -> x
  }
  
  if (sortedProducts.length < 1) {
    // res.status(200).send('no products matched your search');// option 1
    return res.status(200).json({ success: true, data: [] })//option 2: common, im incharge
    //nothing wrong with the url, but not such a data in search
  }
  res.status(200).json(sortedProducts)
})

app.listen(5001, () => {
  console.log('Server is listening on port 5001....')
})
