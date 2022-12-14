const app = require('express')()
const server = require('http').Server(app)
const next = require('next')
const dev =  process.env.NODE_ENV !== 'production'
const nextApp = next({dev})
const handle = nextApp.getRequestHandler()
require('dotenv').config({path:'./config.env'})
const connectDB = require('./utilsServer/connectDb')
const port = process.env.PORT || 3000
connectDB()

nextApp.prepare().then(() => {
    app.all('*', (req,res) => handle(req,res))
    server.listen(port, err =>{
        if(err)throw err
        console.log(`Express server is running on ${port}`)
    })
})