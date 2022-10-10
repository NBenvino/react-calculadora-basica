import Boton from "./Boton";
import React, { useState } from "react";

export default function Calculadora() {
  const [numFront, setNumFront] = useState("");
  const [numBack, setNumBack] = useState(0);
  const [operation, setOperation] = useState("");

  const clear = () => {
    setNumFront("");
  };
  const clearAll = () => {
    setNumFront("");
    setNumBack(0);
  };

  const negative = () => {
    Number.isNaN(parseInt(numFront))
      ? setNumBack(parseFloat(numBack) * -1)
      : setNumFront(parseFloat(numFront) * -1);
  };

  const changeOperation = (operation) => {
    setOperation(operation);
    if (numFront) setNumBack(numFront);
    clear();
  };

  const action = () => {
    if (operation !== "") {
      let front = parseFloat(numFront);
      let back = parseFloat(numBack);
      switch (operation) {
        case "%":
          setNumBack((back * front) / 100);
          break;
        case "/":
          setNumBack(front / back);
          break;
        case "*":
          setNumBack(front * back);
          break;
        case "-":
          setNumBack(back - front);
          break;
        case "+":
          setNumBack(front + back);
          break;
      }
      clear();
    }
  };

  const changeNumber = (num) => {
    setNumFront(numFront + num);
  };

  return (
    <section className="calculator">
      <input className="output" defaultValue={numFront} placeholder={numBack} />
      <div className="buttons">
        <Boton txt="AC" execute={clearAll} type="clear" />
        <Boton txt="C" execute={clear} type="clear" />
        <Boton txt="+/-" execute={() => negative()} type="operation" />
        <Boton txt="%" execute={() => changeOperation("%")} type="operation" />
        <Boton txt="7" execute={() => changeNumber("7")} type="number" />
        <Boton txt="8" execute={() => changeNumber("8")} type="number" />
        <Boton txt="9" execute={() => changeNumber("9")} type="number" />
        <Boton txt="/" execute={() => changeOperation("/")} type="operation" />
        <Boton txt="4" execute={() => changeNumber("4")} type="number" />
        <Boton txt="5" execute={() => changeNumber("5")} type="number" />
        <Boton txt="6" execute={() => changeNumber("6")} type="number" />
        <Boton txt="x" execute={() => changeOperation("*")} type="operation" />
        <Boton txt="1" execute={() => changeNumber("1")} type="number" />
        <Boton txt="2" execute={() => changeNumber("2")} type="number" />
        <Boton txt="3" execute={() => changeNumber("3")} type="number" />
        <Boton txt="-" execute={() => changeOperation("-")} type="operation" />
        <Boton txt="0" execute={() => changeNumber("0")} type="number" />
        <Boton txt="." execute={() => changeNumber(".")} type="number" />
        <Boton txt="=" execute={() => action()} type="search" />
        <Boton txt="+" execute={() => changeOperation("+")} type="operation" />
      </div>
    </section>
  );
}
