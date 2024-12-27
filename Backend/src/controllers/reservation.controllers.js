import Reservation from '../models/reserv.model.js'

const createReservation = async (req, res) => {
    const { date, time, table, occasion } = req.body

    try {
        const newReservation = new Reservation({
            date, 
            time, 
            table, 
            occasion
        })
        const savedReservation = await newReservation.save()
        res.json({
            date: savedReservation.date,
            time: savedReservation.time,
            table: savedReservation.table,
            occasion: savedReservation.occasion
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
    
}

const getReservations = async (req, res) => {
    const reserv = await Reservation.find()
    res.json(reserv)
}

const deleteReservation = async (req, res) => {
    const reserv = await Reservation.findByIdAndDelete(req.params.id)
    if (!reserv) return res.status()
        res.json(reserv)
}

export { createReservation, getReservations, deleteReservation }
