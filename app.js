const express = require('express');
const app = express();
const path = require('path');

require('dotenv').config()

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

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
    const sent = req.query;
    res.render('home',{sent})
})

app.get('*',(req,res)=>{
    res.send('home')
})

app.listen(process.env.PORT || 3000 , () => {
    console.log("Listening on port 3000");
})

app.post("/sendmessage",(req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const message= req.body.message;

    const newMessage = new Messages({
        Name:name,
        Email:email,
        Message:message
    })
    newMessage.save();
    res.redirect('/?message=sent')
})