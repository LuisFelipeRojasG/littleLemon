import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT_SERV
const MONGODB_URL = process.env.MONGODB_URL
const ORIGIN_GITHUB = process.env.ORIGIN_GITHUB

export { PORT, MONGODB_URL, ORIGIN_GITHUB }