const http =require("http");
const port = process.env.port || 3001
const app = require('./app')
const server = http.createServer(app)
server.listen(port,(err)=>{
    if(!err){
        console.log("Server running on port "+ port)
    }
    else{
        console.log(err)
    }
})