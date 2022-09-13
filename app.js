const http = require('http')//http is build in

const{readFileSync} = require('fs')//if r not invoke it yet..



// get all files
const homePage = readFileSync('./navbar-app/index.html')
const homeStyle = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')


const server =http.createServer((req, res)=>{
const url =req.url
console.log(url);
//home page
if(url ==='/'){
  //console.log(req.method)
  //console.log(req.url)
  res.writeHead(200,{'content-type':'text/html'})//this does matter, if plain instead of html
  res.write(homePage)//res.write('<h1>Homepage</h1>')
  res.end()
}
// style
else if(url === '/styles.css'){
  res.writeHead(200,{'content-type':'text/css'})
  res.write(homeStyle)
  res.end()
}
else if(url === '/logo.svg'){
  res.writeHead(200,{'content-type':'image/svg+xml'})
  res.write(homeImage)
  res.end()
}
else if(url === '/browser-app.js'){
  res.writeHead(200,{'content-type':'tedt/javascript'})
  res.write(homeLogic)
  res.end()
}
// 404
else{
  res.writeHead(404,{'content-type':'text/html'})//this does matter, if plain instead of html
  res.write(homeImage)
  res.end()
}

  
})
 
server.listen(5000)

//alwasy has response in server
/**
 response.end([data[,encoding]][,callback])  wth is this...

 this matter:
 res.writeHead(200,{'content-type':'text/html'})
 res.writeHead(200,{'content-type':'text/plain'})
 
 */
/*
GET
/
GET
/favicon.ico
why alway give me double return...get get
*/