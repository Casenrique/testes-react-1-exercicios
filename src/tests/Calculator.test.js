import { render, screen } from "@testing-library/react"
import  userEvent  from "@testing-library/user-event"
import Calculator from "../components/Calculator"


describe("Calculator", () => {
    test("deve renderizar com o botão de dígitos de operações +, -, *, e /", () => {
        render(<Calculator />)
        screen.debug()
        // const sumButton = screen.getByText(/\+/i)
        // screen.logTestingPlaygroundURL()
        const sumButton = screen.getByRole('button', {
            name: /\+/i
        })
        const subtractionButton = screen.getByRole('button', {
            name: /\-/i
        })
        const multiplicationButton = screen.getByRole('button', {
            name: /\*/i
        })
        const divisionButton = screen.getByRole('button', {
            name: /\//i
        })        
        expect(sumButton).toBeInTheDocument()
        expect(subtractionButton).toBeInTheDocument()
        expect(multiplicationButton).toBeInTheDocument()
        expect(divisionButton).toBeInTheDocument()
    })

    
    test("deve pelo menos dois testes que a divisão está funcionando corretamente.", 
        async () => {
        const user = userEvent.setup()
        render(<Calculator />)
        // screen.debug()
        const numberOne = screen.getByRole('button', {
            name: /1/i
        })
        const numberZero = screen.getByRole('button', {
            name: /0/i
        })
        const numberTwo = screen.getByRole('button', {
            name: /2/i
        })
        const divisionButton = screen.getByRole('button', {
            name: /\//i
        })
        const equalButton = screen.getByRole('button', {
            name: /=/i
        })

        await user.click(numberOne)
        await user.click(numberZero)
        await user.click(divisionButton)
        await user.click(numberTwo)
        await user.click(equalButton)

        const value = screen.getByTestId("result")
        screen.logTestingPlaygroundURL()
        screen.debug()
        expect(value).toHaveTextContent("5")
    })

    test("deve pelo um teste que a multiplicação está funcionando corretamente.", 
        async () => {
        const user = userEvent.setup()
        render(<Calculator />)
        // screen.debug()
        const numberOne = screen.getByRole('button', {
            name: /1/i
        })
        const numberZero = screen.getByRole('button', {
            name: /0/i
        })
        const multiplicationButton = screen.getByRole('button', {
            name: /\*/i
        })
        const numberTwo = screen.getByRole('button', {
            name: /2/i
        })
        const equalButton = screen.getByRole('button', {
            name: /=/i
        })

        await user.click(numberOne)
        await user.click(numberZero)
        await user.click(multiplicationButton)
        await user.click(numberTwo)
        await user.click(equalButton)

        const value = screen.getByTestId("result")
        screen.logTestingPlaygroundURL()
        screen.debug()
        expect(value).toHaveTextContent("20")
    })

    test("deve concatenar operações corretamente.", 
        async () => {
        const user = userEvent.setup()
        render(<Calculator />)
        // screen.debug()
        const numberOne = screen.getByRole('button', {
            name: /1/i
        })
        const numberZero = screen.getByRole('button', {
            name: /0/i
        })
        const multiplicationButton = screen.getByRole('button', {
            name: /\*/i
        })
        const numberTwo = screen.getByRole('button', {
            name: /2/i
        })
        const numberFour = screen.getByRole('button', {
            name: /4/i
        })
        const divisionButton = screen.getByRole('button', {
            name: /\//i
        })
        const equalButton = screen.getByRole('button', {
            name: /=/i
        })

        await user.click(numberOne)
        await user.click(numberZero)
        await user.click(multiplicationButton)
        await user.click(numberTwo)
        await user.click(divisionButton)
        await user.click(numberFour)
        await user.click(equalButton)

        const value = screen.getByTestId("result")
        screen.logTestingPlaygroundURL()
        screen.debug()
        expect(value).toHaveTextContent("5")
    })

    test("deve renderizar os dígitos númericos renderizam corretamente", () => {
        render(<Calculator />)
        screen.debug()
        // screen.logTestingPlaygroundURL()
        const zeroButton = screen.getByRole('button', {
            name: /0/i
        })
        const oneButton = screen.getByRole('button', {
            name: /1/i
        })
        const twoButton = screen.getByRole('button', {
            name: /2/i
        })
        const threeButton = screen.getByRole('button', {
            name: /3/i
        })
        const fourButton = screen.getByRole('button', {
            name: /4/i
        })
        const fiveButton = screen.getByRole('button', {
            name: /5/i
        })
        const sixButton = screen.getByRole('button', {
            name: /6/i
        })
        const sevenButton = screen.getByRole('button', {
            name: /7/i
        })
        const eightButton = screen.getByRole('button', {
            name: /8/i
        })
        const nineButton = screen.getByRole('button', {
            name: /9/i
        })
             
        expect(zeroButton).toBeInTheDocument()
        expect(oneButton).toBeInTheDocument()
        expect(twoButton).toBeInTheDocument()
        expect(threeButton).toBeInTheDocument()
        expect(fourButton).toBeInTheDocument()
        expect(fiveButton).toBeInTheDocument()
        expect(sixButton).toBeInTheDocument()
        expect(sevenButton).toBeInTheDocument()
        expect(eightButton).toBeInTheDocument()
        expect(nineButton).toBeInTheDocument()
       
    })
    
})