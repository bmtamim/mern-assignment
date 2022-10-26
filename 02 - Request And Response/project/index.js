const http = require('http')

const host = '127.0.0.1'
const port = 3000

const server = http.createServer((request,response)=>{
    let data;
    let contentType = request.headers['content-type'];
    
    if(request.url === '/'){
        response.writeHead(200)
        data = 'This is Home'
    }else if(request.url === '/about'){
        response.writeHead(200)
        data = 'This is About'
    }else{
        response.writeHead(404)
        data = 'Not Found'
    }

    if(contentType === 'application/json'){
       data = JSON.stringify({data})
    }

    response.write(data)
    response.end()
   
})

server.listen(port,host)
console.log('Server Running...')