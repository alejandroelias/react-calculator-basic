import React, { useState } from 'react'
import './style.css'

export const CalculatorApp = () => {


    const numbers = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'];
    const operators = ['.', '/', '*', '-', '+'];


    const initialState = '';
    const [calc, setCalc] = useState(initialState);
    const [result, setResult] = useState(initialState);


    const updateCalc = (value) => {

            if (condition) {
                
            }
            console.log(calc.length);
            if (
                (operators.includes(value) && calc.slice === '') ||
                (operators.includes(value) && operators.includes(calc.slice(-1)))
            ) {
                return;
            }

            setCalc(calc + value);


        if (!operators.includes(value)) {
            setResult(eval(calc + value).toString());
        }
    }

    const calculate = () => {
        setCalc(eval(calc).toString());
    }

    const deleteLast = () => {
        if (calc === '') {
            return;
        }
        const value = calc.slice(0, -1);
        setCalc(value);
    }

    const deleteAll = () => {
        setCalc(initialState);
        setResult(initialState);
    }




    return (
        <>
            <div className="calculator">
                <div className="calculator-screen">
                    {result ? <span> ({result}) </span> : ''}&nbsp;
                    {calc || "0"}
                </div>
                <div className="calculator-keys">

                    {numbers.map((number, index) => (

                        <button
                            type="button"
                            key={index}
                            onClick={() => updateCalc(number.toString())}
                            className="btn btn-outline-dark"
                        >
                            {number}
                        </button>
                    ))}
                    {operators.map((operator, index) => (

                        <button
                            type="button"
                            key={index}
                            onClick={() => updateCalc(operator)}
                            className="btn btn-outline-danger"
                        >
                            {operator}
                        </button>
                    ))}
                    <button
                        onClick={deleteLast}
                        className="btn btn-outline-danger"
                    >
                        C
                    </button>
                    <button
                        onClick={deleteAll}
                        className="btn btn-outline-danger"
                    >
                        AC
                    </button>
                    <button
                        onClick={calculate}
                        className="btn btn-danger"
                    >
                        =
                    </button>
                </div>
            </div>
        </>


    )
}

