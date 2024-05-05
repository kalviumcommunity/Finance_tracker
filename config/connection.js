const mongoose = require("mongoose")

const connectDB = async (req, res) => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI, {
            // useNewURLParser: true,
            // useCreateIndex: true, 
            // useUnifiedTopology: true
        })
        // console.log(connection)
        console.log(`Mongoose Connection: ${connection.connection.host}`.cyan.underline.bold)
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB; 