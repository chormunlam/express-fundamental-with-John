const express = require('express')//import the module, express libray, 
const app =express()//invoke it
//or you can do in 1 line
//const app =rquire('express')()


app.listen(5000,()=>{//later will show how to do it dynamic
  console.log("server is listening on part 5000");
})


app.get('/',(req, res)=>{
  console.log('user hit the resouce')
  res.status(200).send('Home page')
})

app.get('/about', (req, res)=>{
  res.status(200).send('about page')
})

app.all('*', (req,res)=>{

  res.status(404).send('<h1>resouce not found</h1>')
})



//app.get  read data
//app.post   insert data
//app.put    update data
//app.delete  delete data
//app.all     work on all of them 
//app.use
//app.listen

//why i got 304 instead of 200