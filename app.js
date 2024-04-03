if(process.env.NODE_ENV !=='production'){
    require('dotenv').config()
}



const express=require('express')
const app=express()
const mongoose=require('mongoose')
const path=require('path')
const ejsMate=require('ejs-mate')
const Hr=require('./router/a')
const { error } = require('console')

mongoose.connect(process.env.Database,{useNewUrlParser:true})
const db=mongoose.connection
db.on('error',error=>console.error(error))
db.once('open',()=>console.log('mongoose connected'))
app.engine('ejs',ejsMate)
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
app.use(express.urlencoded({extended:true}))
app.use('/',Hr)
app.use(express.static('public'))
app.listen(process.env.PORT || 3000)