const mongoose = require('mongoose');


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser : true
        })

        console.log('MongoDBga ulanish bajarildi..')
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectDB;