const express = require('express');
require('dotenv').config()
const connectDB = require('./config/db');
const cors = require('cors')

//Conectu datebase
connectDB()

const app = express();

//Bady parser
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(cors())

app.use('/api/travel', require('./routes/travelRoutes'))



const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server ishga tushdi...${PORT}`))