import express from 'express'
//cria um servidor web ou http express
let server = express()

//converte os dados do usuario em json
server.use(express.json())

server.listen(33333,()=>{
    console.log('Servidor iniciado')
})