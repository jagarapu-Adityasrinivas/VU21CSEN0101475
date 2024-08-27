import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

const CalculatorWrapper = styled.div`
    background-color: #333;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const Display = styled.div`
    background-color: #000;
    color: #fff;
    font-size: 2em;
    padding: 20px;
    border-radius: 5px;
    margin-bottom: 10px;
    text-align: right;
`;

const ButtonGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
`;

const Button = styled.button`
    padding: 20px;
    font-size: 1.5em;
    background-color: #555;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #777;
    }
`;

function App() {
    const [display, setDisplay] = useState("");

    const handleClick = (value) => {
        if (value === "=") {
            try {
                setDisplay(eval(display).toString());
            } catch {
                setDisplay("Error");
            }
        } else if (value === "C") {
            setDisplay("");
        } else {
            setDisplay(display + value);
        }
    };

    return (
        <Container>
            <CalculatorWrapper>
                <Display>{display}</Display>
                <ButtonGrid>
                    <Button onClick={() => handleClick("1")}>1</Button>
                    <Button onClick={() => handleClick("2")}>2</Button>
                    <Button onClick={() => handleClick("3")}>3</Button>
                    <Button onClick={() => handleClick("/")}>/</Button>
                    <Button onClick={() => handleClick("4")}>4</Button>
                    <Button onClick={() => handleClick("5")}>5</Button>
                    <Button onClick={() => handleClick("6")}>6</Button>
                    <Button onClick={() => handleClick("*")}>*</Button>
                    <Button onClick={() => handleClick("7")}>7</Button>
                    <Button onClick={() => handleClick("8")}>8</Button>
                    <Button onClick={() => handleClick("9")}>9</Button>
                    <Button onClick={() => handleClick("-")}>-</Button>
                    <Button onClick={() => handleClick("0")}>0</Button>
                    <Button onClick={() => handleClick(".")}>.</Button>
                    <Button onClick={() => handleClick("=")}>=</Button>
                    <Button onClick={() => handleClick("+")}>+</Button>
                    <Button onClick={() => handleClick("C")}>C</Button>
                </ButtonGrid>
            </CalculatorWrapper>
        </Container>
    );
}

export default App;
