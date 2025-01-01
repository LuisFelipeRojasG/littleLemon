import mongoose from 'mongoose'
import { MONGODB_URL } from './config.js'

const connectBD = async () => {
    try {
        await mongoose.connect(MONGODB_URL)
        console.log("DB is connected")
    } catch (error) {
        console.log(error)
    }
}

export default connectBD
