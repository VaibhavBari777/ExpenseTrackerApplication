const mongoose = require('mongoose')
const colors = require('colors')
const connectDb = async()=>{
    try {
        await mongoose.connect("mongodb+srv://vaibhavbari999:yHQsGahNmOa1yHSr@cluster0.0orfxav.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log(`Server Running On ${mongoose.connection.host}`.bgCyan.white);
    } catch (error) {
        console.log(`${error}`.bgRed)
        
    }
}
module.exports= connectDb;