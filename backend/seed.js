if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
  }
const mongoose = require('mongoose');
const Food = require('./models/Food');

const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/food-app';



mongoose.connect(dbUrl)
    .then(() => console.log("DB CONNECTED!"))
    .catch((err) => console.log(err));

    console.log(process.env)
const Dummy_foods = [
    {
        name: 'Burger',
        price: 10,
        desc:'Extra Cheese and Spice'
    },
    {
        name: 'Panner Tikka',
        price: 22.25,
        desc:'Smooth and Delicious Paneer grilled to Perfection'
    },
    {
        name: 'Pizza',
        price: 19.25,
        desc:'Smooth and Delicious Pizza grilled to Perfection'
    },
    {
        name: 'Pasta',
        price: 15.99,
        desc:'Smooth and Delicious Pasta grilled to Perfection'
    },
     {
        name: 'Noodles',
        price: 15.99,
        desc:'Smooth and Delicious Pasta grilled to Perfection'
    },
];



const seedDB = async() => {
    
    await Food.deleteMany({});

    await Food.insertMany(Dummy_foods);
    console.log('DB Seeded');

}


seedDB();