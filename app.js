const express = require('express')
require('express-async-errors');
const app = express();
require('dotenv').config();
const stateRouter = require('./routes/data');

const connectDB = require('./DB/connectDB')

const port = 3000;


app.use(express.json());

app.use('/api/v2',stateRouter );


const start = async () =>{
    
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port,()=>{
            console.log(`server is listen at port ${port}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();