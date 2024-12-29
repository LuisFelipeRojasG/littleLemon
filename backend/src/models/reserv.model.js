import mongoose from 'mongoose'

const reservationSchema = mongoose.Schema({
    date: {
        type: String,
        require: true
    },
    time: {
        type: String,
        require: true
    },
    table: {
        type: String,
        require: true
    },
    occasion: {
        type: String,
        require: true
    }
},
{
    timestamps: true
})

export default mongoose.model('Reservation',  reservationSchema)
