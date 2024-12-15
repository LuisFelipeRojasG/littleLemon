import { render, screen } from "@testing-library/react"
import BookingForm from "../components/BookingForm"

test('Render el encabezado', () => {
    render(<BookingForm />)
    const encabezadoElement = screen.getAllByText("Reserve Table")
})

