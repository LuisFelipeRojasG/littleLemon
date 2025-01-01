import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT_SERV
const MONGODB_URL = process.env.MONGODB_URL

export { PORT, MONGODB_URL }