// début du projet
const express = require("express");
const mongoose = require("mongoose");

//
const Hotels = require('./models/hotel');

//import des routes
const hotelsRoutes = require('./controllers/hotels.js');

const port = process.env.PORT || 3000;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(
    process.env.MONGODB_URI || 
      "mongodb://localhost:27017/trippy_basics",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    }, (err)=>{
        if (!err){
                console.log('DB connected')
            }
    }
  );


  


// here goes our routes //
app.use('/hotels', hotelsRoutes); // Router Didier


app.listen(port, ()=>{
    console.log(`Server started on port : ${port}!`)
});