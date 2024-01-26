import { useState } from 'react'

import Navbar from './components/Navbar/index.jsx';
import Buscador from './components/Buscador/Buscador.jsx';
import Pokemones from './components/Pokemones/index.jsx';


function App() {


  return (
    <>
      <Navbar/>
      <Buscador/>

      <Pokemones/>

    </>
  )
}

export default App
