import mongoose from "mongoose";

//ket noi voi mongo
const connectDB = async () => {
    mongoose.connection.on('connected', ()=> console.log('Database da ket noi'))

    await mongoose.connect(`${process.env.MONGODB_URL}/yogawthtran`)
}

export default connectDB