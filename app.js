const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session')
const flash = require('connect-flash')
require('dotenv').config()

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(session({
    secret:process.env.Secret,
    resave:false,
    saveUninitialized:false
}))
app.use(flash())

// Database
const {Messages} = require('./database')
const mongoose = require('mongoose');
const connectionURL = process.env.url
mongoose.connect(connectionURL)
    .then(() => {
        console.log("Connection open!!");
    })
    .catch(err => {
        console.log("Connection failed!: ");
        console.log(err);
    })

//setting up view engine
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('home',{message:req.flash('message')})
})

app.get('*',(req,res)=>{
    res.send('home')
})

app.listen(process.env.PORT || 3000 , () => {
    console.log("Listening on port 3000");
})

app.post("/sendmessage",async(req,res)=>{
    const newMessage = new Messages(req.body)
    await newMessage.save();
    req.flash('message','sent')
    res.redirect('/')
})