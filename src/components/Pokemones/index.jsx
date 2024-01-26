import React, { useState, useEffect } from 'react'
// import Card from '../Card'
import './Pokemones.css'
import usePokemones from '../Hooks/usePokemones'
import InfiniteScroll from 'react-infinite-scroll-component'
import Cargando from '../Cargando'
import DetallePokemon from '../DetallePokemon'
import Buscador from '../Buscador'


function Pokemon({ id, nombre, imagen, verPokemon }) {
    return (
        <div className='pokemon-card flex flex-col items-center rounded-2xl bg-gray-50 py-1 cursor-pointer duration-200 hover:scale-105' onClick={verPokemon}>
            <img src={imagen} alt={nombre} className='pokemon-imagen w-52 h-44  my-1' />
            <p className='pokemon-titulo flex justify-between items-center bg-[#454A54] text-[var(--text)]
            font-semibold capitalize py-1 px-2 rounded-lg w-4/5 flex-col'>
                <span>#{id}</span>
                <span>{nombre}</span>
            </p>
        </div>
    )
}


export default function Pokemones() {
    const { pokemones, masPokemones, verMas, searchPokemon } = usePokemones()
    const [mostrar, setMostrar] = useState({ mostrar: false, pokemon: {} })
    const [busqueda, setBusqueda] = useState('')

    const verPokemon = (pokemon) => setMostrar({ mostrar: true, pokemon })
    const noVerPokemon = () => {
        setMostrar({ mostrar: false, pokemon: {} })
        setBusqueda('')
    }


    const buscarPokemon = async (e) => {
        e.preventDefault()

        if (!busqueda) return

        const pokemon = await searchPokemon(busqueda)

        setMostrar({ mostrar: true, pokemon })
    }

    return (
        <>
            <DetallePokemon {...mostrar} cerrar={noVerPokemon} />
            <Buscador busqueda={busqueda} setBusqueda={setBusqueda} buscarPokemon={buscarPokemon}/>
            <InfiniteScroll
                dataLength={pokemones.length}
                next={masPokemones}
                hasMore={verMas}
                loader={<Cargando />}
                endMessage={
                    <h3 className='grid-cols-[1/6]  w-full text-4xl text-black justify-center flex'>Felicidades haz llegado al final de la pagina!!!</h3>
                }
                className='flex flex-col items-center gap-4 mb-10'>
                <div className='flex flex-wrap gap-10 mt-9 justify-center  '>
                    {/* {pokemones.map((pokemon) => (

                        <Card
                            key={pokemon.id}
                            id={pokemon.id}
                            name={pokemon.nombre}
                            img={pokemon.imagen}
                            verPokemon={() => verPokemon(pokemon)}
                        />
                    ))} */}
                    { pokemones.map(pokemon => <Pokemon {...pokemon} key={pokemon.id} verPokemon={() => verPokemon(pokemon)}/> )}

                </div>


            </InfiniteScroll>
        </>

    )
}
