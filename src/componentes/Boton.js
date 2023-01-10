import React from "react";
import "../hojas-de-estilos/Boton.css";

function Boton (props){

  const esOperador = valor =>{
    return isNaN(valor) && (valor != ".") && (valor != "=");
  };
  
    return(
        <div className={`boton-operador ${esOperador(props.children) ? 'operador' : null}`.trimEnd()}
        onClick={() => props.manejarClics(props.children)}>
            {props.children}
        </div>
    )
}

export default Boton;