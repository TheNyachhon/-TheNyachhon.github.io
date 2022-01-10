const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
//setting up view engine
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('home')
})

app.get('*',(req,res)=>{
    res.send('home')
})

app.listen(3000, () => {
    console.log("Listening on port 3000");
})