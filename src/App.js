import Boton from './componentes/Boton';
import './App.css';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';


function App() {

const [input, setInput] =  useState(" ") ;

const agregarInput = valor => {
  setInput (input + valor); 
};

const calcularResultado = () => {
  if (input){
  setInput(evaluate(input));
  } else {
    alert("Por favor ingrese valores para realizar la operacion");
  }
};


  return (
    <div className="App">
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>

        <div className='fila'>
          <Boton manejarClics={agregarInput}>1</Boton>
          <Boton manejarClics={agregarInput}>2</Boton>
          <Boton manejarClics={agregarInput}>3</Boton>
          <Boton manejarClics={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClics={agregarInput}>4</Boton>
          <Boton manejarClics={agregarInput}>5</Boton>
          <Boton manejarClics={agregarInput}>6</Boton>
          <Boton manejarClics={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClics={agregarInput}>7</Boton>
          <Boton manejarClics={agregarInput}>8</Boton>
          <Boton manejarClics={agregarInput}>9</Boton>
          <Boton manejarClics={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClics={calcularResultado}>=</Boton>
          <Boton manejarClics={agregarInput}>0</Boton>
          <Boton manejarClics={agregarInput}>.</Boton>
          <Boton manejarClics={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>Clear</BotonClear>
        </div>

      </div>
    </div>
  );
}

export default App;
