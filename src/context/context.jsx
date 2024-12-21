import { createContext, useContext, useState, useReducer } from "react"
import React  from "react"

const LemonContext = createContext()

const useAuth = () => {

    const useLemon = useContext(LemonContext)
    return useLemon
}

function LemonProvider ({children}) {

    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [tables, setTables] = useState('')
    const [occasion, setOccasion] = useState('')
    const [active, setActive] = useState(true)

    //reducer
    const updateTimes = (state, action) => {
        switch (action.type) {
            case 'disponible':
                return state = true;
            case 'No disponible':
                return state = false;
            default:
                return state;
        }
    }

    const initializeTimes = [
        {
            time: '17:00',
            estado: 'disponible'
        },
        {
            time: '18:00',
            estado: 'disponible'
        },
        {
            time: '19:00',
            estado: 'disponible'
        },
        {
            time: '20:00',
            estado: 'disponible'
        },
        {
            time: '21:00',
            estado: 'disponible'
        },
        {
            time: '22:00',
            estado: 'disponible'
        }
    ]

    const availableTimes = () => {
        const [state, dispatch] = useReducer(updateTimes, initializeTimes)

        return state, dispatch
    }

    return (
        <LemonContext.Provider 
            value={{
                availableTimes,
                initializeTimes,
                date,
                setDate,
                time, 
                setTime,
                tables,
                setTables,
                occasion,
                setOccasion,
                active,
                setActive
            }}>
                {children}
        </LemonContext.Provider>
    )

}

export { LemonContext, LemonProvider, useAuth }
