if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const express=require('express');
const app= express();

const cors = require('cors');

const mongoose=require('mongoose');
const MongoStore = require('connect-mongo');
const foodApi=require('./apis/foodApi')


const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/food-app';

mongoose.connect(dbUrl)
    .then(() => console.log('db connected'))
    .catch((err) => console.log(err));
  

    const store = MongoStore.create({
      mongoUrl: dbUrl,
      touchAfter: 60 * 60 * 24 * 1
    })
    


app.use(cors());
app.use(express.json());


app.get('/',(req,res)=>{
  res.send("Server Started")
});



    app.use(foodApi);







    const port = process.env.PORT || 3000;
      app.listen(8000,()=>{
        console.log('server started at port 8000');
      });