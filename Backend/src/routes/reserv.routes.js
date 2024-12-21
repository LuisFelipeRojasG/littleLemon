import { Router } from 'express'
import { validateSchema } from '../middlewares/validator.middleware.js'
import { reservationSchema } from '../schemas/reservation.schema.js'
import { createReservation } from '../controllers/reservation.controllers.js'

const router = Router()

router.post("/reservation", validateSchema(reservationSchema), createReservation)

export default router
