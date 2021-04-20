
const mongoose = require('mongoose')
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: true
        })
        console.log('Mongoose is connected to Database successfully')
    } catch (error) {

        console.error('Can not connect to database')
    }
}
module.exports = connectDB