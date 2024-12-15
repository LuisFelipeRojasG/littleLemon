import mongoose from 'mongoose'

const reserationSchema = mongoose.Schema({
    fecha: String,
    hora: Number,
    mesa: String
},
{
    timestamps: true
})

export default mongoose.model('Reservation',  reserationSchema)
