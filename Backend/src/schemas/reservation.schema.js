import { z } from 'zod'

const reservationSchema = z.object({
    fecha: z.string({
        required_error: "La fecha es requerida"
    }),
    hora: z.string({
        required_error: "La hora es requerida"
    }),
    mesa: z.string({
        required_error: "La mesa es requerida"
    })
})

export { reservationSchema }
