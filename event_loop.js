const http = require('http')

const server = http.createServer((req, res)=>{
      if (req.url === '/'){
        res.write('welcome to the server')
        return res.end()
      }
      if (req.url === '/about'){
         //task
        for(let i=0; i<100; i++){
            console.log(Math.random()*i)
        }
        return res.end("about page")
      }
      res.end("Not found")
})


server.listen(3000)
console.log("server on port 3000")
