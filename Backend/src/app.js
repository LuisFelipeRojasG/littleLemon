import express from 'express'
import morgan from 'morgan'
import reservRoutes from './routes/reserv.routes.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express()

//Middelware para recibir las respuestas del servidor en la terminal
app.use(morgan('dev'))

//Middelware para convertir los request body en JSON
app.use(express.json())

//Para convertir la información de las cookies en JSON
app.use(cookieParser())

//Para permitir la comunicación entre Backend y Frontend
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}))

//Todas las rutas deben de comenzar con "/api"
app.use("/api", reservRoutes)

export default app

