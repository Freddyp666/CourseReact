import React from "react";
import '../boton-de-estilos/BontonBorrar.css';


const BotonBorrar = (props) => (
    <div className='boton-borrar' onClick={props.manejarClic}>
        {props.children}
    </div>
    );


export default BotonBorrar;