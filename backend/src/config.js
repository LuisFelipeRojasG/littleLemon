import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT_SERV
const MONGODB_URL = process.env.MONGODB_URL
const ORIGIN = process.env.ORIGIN

export { PORT, MONGODB_URL, ORIGIN }