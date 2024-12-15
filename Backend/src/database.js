import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const connectBD = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("DB is connected")
    } catch (error) {
        console.log(error)
    }
}

export default connectBD
