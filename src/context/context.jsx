import React  from "react"
import { createContext, useContext, useState } from "react"
import { reservFind, reservRequest } from '../api/reserv.js'

const LemonContext = createContext()

const useAuth = () => {

    const useLemon = useContext(LemonContext)
    return useLemon
}

function LemonProvider ({children}) {
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [table, setTable] = useState('')
    const [occasion, setOccasion] = useState('')
    const [reservation, setReservation] = useState([])

    const newReserv = async (data) => {
        try {
            const res = await reservRequest(data)
        } catch (error) {
            console.log(error.response)
        }
    }

    const getReserv = async () => {
        try {
            const res = await reservFind()
            setReservation(res.data)
            console.log(reservation)
        } catch (error) {
            console.log(error.respose)
        }
    }

    //reducer
    /*const updateTimes = (state, action) => {
        switch (action.type) {
            case 'disponible':
                return state = true;
            case 'No disponible':
                return state = false;
            default:
                return state;
        }
    }

    const availableTimes = () => {
        const [state, dispatch] = useReducer(updateTimes, initializeTimes)

        return state, dispatch
    }*/

    return (
        <LemonContext.Provider 
            value={{
                date,
                setDate,
                time, 
                setTime,
                table,
                setTable,
                occasion,
                setOccasion,
                newReserv,
                getReserv,
                reservation
            }}>
                {children}
        </LemonContext.Provider>
    )

}

export { LemonContext, LemonProvider, useAuth }
