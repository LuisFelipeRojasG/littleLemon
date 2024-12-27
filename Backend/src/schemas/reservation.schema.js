import { z } from 'zod'

const reservationSchema = z.object({
    date: z.string({
        required_error: "La fecha es requerida"
    }),
    table: z.string({
        required_error: "La mesa es requerida"
    }),
    time: z.string({
        required_error: "La hora es requerida"
    }),
    occasion: z.string({
        required_error: "La ocasión es requerida"
    }),
    
})

export { reservationSchema }
