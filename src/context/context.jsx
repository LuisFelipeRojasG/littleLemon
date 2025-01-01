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
        } catch (error) {
            console.log(error.respose)
        }
    }

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
