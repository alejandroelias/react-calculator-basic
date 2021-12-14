import React, { useState } from 'react'
import './style.css'

export const CalculatorApp = () => {


    const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
    const operators = ['.', '=', '/', '*', '-', '+', 'C', 'AC'];


    const handleOnClick = (e) => {

        const { value } = e.target;



    }

    // console.log(currentNumber(rx));

    return (
        <>
            <div className="calculator">
                <input
                    type="text"
                    className="calculator-screen"
                    id="result"
                    value='0'
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

