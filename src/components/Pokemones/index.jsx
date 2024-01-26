import React, { useState, useEffect } from 'react'
import Card from '../Card'
import usePokemones from '../Hooks/usePokemones'
import InfiniteScroll from 'react-infinite-scroll-component'
import Cargando from '../Cargando'


export default function Pokemones() {
    const { pokemones, masPokemones, verMas } = usePokemones()
    return (
        <InfiniteScroll 
        dataLength={pokemones.length}
        next={masPokemones}
        hasMore={verMas}
        loader={<Cargando/>}
        endMessage={
            <h3 className='grid-cols-[1/6]  w-full text-4xl text-black justify-center flex'>Felicidades haz llegado al final de la pagina!!!</h3>
        }
        className='flex flex-col items-center gap-4 mb-10'>
            <div className='flex flex-wrap gap-10 mt-9 justify-center  '>
                {
                    pokemones.map((pokemon) => (

                        <Card
                            key={pokemon.id}
                            id={pokemon.id}
                            name={pokemon.nombre}
                            img={pokemon.imagen}
                        />
                    ))}

            </div>
            

        </InfiniteScroll>

    )
}
