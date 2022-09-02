// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.

import Cabecera from './components/Cabecera.js';
import React, { useState } from 'react';
import Listado from './components/Listado.js';


function App() {

 const [comprados, setComprados] = useState(0); 
  
  return (
    <div>
    <div></div>
      <Cabecera numeroComprados={comprados}/>
      <Listado actualizarComprados={() => setComprados(comprados+1)}/>

    </div>
  );
}

export default App;
