// Initialization 
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser")
const sequelize = require('./Database/db')
const userRoute = require('./routes/userRoute')
const prodcutRoute = require('./routes/productRoute')

app.use('/users', userRoute);
app.use('/products', prodcutRoute);

app.listen(PORT, ()=>{
    console.log(`Server Running on............................... PORT ${PORT}`)
})

//creating server 
const app = express();


app.get('/',(req,res) =>{
    res.send("Welcome to webpage")
})


app.get('/notice',(req,res) =>{
    res.send("This is notice")
})



//creating port 
const PORT = 5000;


//Creating middleware 
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// Running port 
app.listen(PORT,() => {
    console.log(`sever starting at port ....... ${PORT}`)
})