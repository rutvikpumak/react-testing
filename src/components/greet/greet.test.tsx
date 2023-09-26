import { render,screen } from "@testing-library/react"
import { Greet } from "./greet"

test("greet renders correctly",()=>{
    render (<Greet/>)
    const textElement  = screen.getByText('Hello')
    expect(textElement).toBeInTheDocument()
})

test("Greet with name",()=>{
    render (<Greet name="Rutvik"/>)
    const textElement  = screen.getByText('Hello Rutvik')
    expect(textElement).toBeInTheDocument()

})