const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const bodyParser = require('body-parser')
const sendMail = require('./email')

const publicPath = path.join(__dirname,'../public')
const indexPath = path.join(__dirname,'../public/index.html')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(publicPath))

const port = process.env.PORT
app.listen(process.env.PORT,()=>{
    console.log(`listening on port ${port}`)
})

mongoose.connect( process.env.MONGODB_URL ,{
    useNewUrlParser : true,
    useCreateIndex : true
});

const userSchema = mongoose.Schema({
    name : {
        type : String
    },
    email : {
        type : String,
        required  : true,
        toLowetCase : true,
        trim : true
    },
    phone : {
        type : String
    },
    message : {
        type : String
    }
})

const User = mongoose.model('user',userSchema)

app.get('/',(req,res)=>{
    res.sendFile(publicPath)
})
app.get('/faq',(req,res)=>{
    res.sendFile(path.join(publicPath,'faq.html'))
})
app.get('/pricing',(req,res)=>{
    res.sendFile(path.join(publicPath,'pricing.html'))
})
app.get('/sitemap',(req,res)=>{
    res.sendFile(path.join(publicPath,'sitemap.xml'))
})
app.get('/c',(req,res)=>{
    res.redirect('https://chat.whatsapp.com/By9O5YpgER53SBKNcST0YO')
})
app.get('/webd',(req,res)=>{
    res.redirect('https://chat.whatsapp.com/IJGxdDGBZFsHTEHIcL7tk4')
})

app.post('/contact',(req,res)=>{
    const userMsg = new User(req.body)
    userMsg.save()
    sendMail.sendWelcomeEmail(req.body)
    res.send()
})
