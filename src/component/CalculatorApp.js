import React, { useReducer, useState } from 'react'
import { calculatorReducer } from '../reducer/calculatorReducer';
import './style.css'

export const CalculatorApp = () => {

    

    const [state, dispatch] = useReducer(calculatorReducer, initialState)

    const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
    const operators = ['.', '=', '/', '*', '-', '+', 'C', 'AC'];


    const initialState = [0];
    const [rx, setRx] = useState(initialState);
    const [ry, setRy] = useState(initialState);

    
    const currentNumber = (array) =>  parseInt(array.join(''));
    
    const sumBinary = () => {
        let result = 0;
        setRy(rx);
        setRx(initialState);
        
        result = currentNumber(ry)+currentNumber(rx);
        return result;
    }
    

    const handleOnClick = (e) => {

        const { value } = e.target;

        if (/[0-9]/.test(value) && rx.length < 9) {
            setRx([...rx, value]);
        }

        if (/[+/*-]/.test(value)) {
            console.log('Suma actual '+sumBinary())

        }
        
        if (/[=]/.test(value)) {

            
        }
        
    }

    return (
        <>
            <div className="calculator">
                <input
                    type="text"
                    className="calculator-screen"
                    id="result"
                    value={currentNumber(rx).toString()}
                    disabled
                />
                <div className="calculator-keys">

                    {numbers.map((number, index) => (

                        <button
                            type="button"
                            key={index}
                            value={number}
                            onClick={(e) => handleOnClick(e)}
                            className="btn btn-outline-dark">
                            {number}
                        </button>
                    ))}
                    {operators.map((operator, index) => (

                        <button
                            type="button"
                            key={index}
                            value={operator}
                            onClick={(e) => handleOnClick(e)}
                            className="btn btn-outline-danger">
                            {operator}
                        </button>
                    ))}
                </div>
            </div>
        </>


    )
}

