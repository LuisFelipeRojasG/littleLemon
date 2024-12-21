import mongoose from 'mongoose'

const reservationSchema = mongoose.Schema({
    fecha: String,
    hora: String,
    mesa: String
},
{
    timestamps: true
})

export default mongoose.model('Reservation',  reservationSchema)
