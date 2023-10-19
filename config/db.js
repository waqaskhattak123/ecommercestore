const mongoose = require('mongoose');
console.log('i am Hassan Ali')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
        });
        console.log(`Connected With MongoDB ${conn.connection.host}`.cyan.underline.bold);
    } catch (error) {
        console.log(`Error in Connecting with MongoDB ${error}`);
    }
}
module.exports = connectDB;