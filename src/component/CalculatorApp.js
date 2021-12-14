import React, { useState } from 'react'
import './style.css'

export const CalculatorApp = () => {


    const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
    const operators = ['.', '=', '/', '*', '-', '+', 'C', 'AC'];


    const initialState = [0];
    const [rx, setRx] = useState(initialState);
    const [ry, setRy] = useState(0);
    const [ra, setRa] = useState(initialState);


    const currentNumber = (array) => parseInt(array.join(''));
    let acumulador = 0


    const handleOnClick = (e) => {

        const { value } = e.target;

        if (/[0-9]/.test(value) && rx.length < 9) {
            setRx([...rx, value]);
        }

        if (/[+/*-]/.test(value)) {

            setRy(currentNumber(rx));

            setRa(prevCount => prevCount + ry);


            setRx(initialState);

            console.log('ra: ', ra);


        }

        if (/[=]/.test(value)) {


        }

    }

    // console.log(currentNumber(rx));

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

