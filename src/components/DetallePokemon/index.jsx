function DetallePokemon({ mostrar, pokemon, cerrar }) {

    return (
        <div className="modal-container bg-[rgba(0,0,0,0.5)] fixed top-0 left-0 w-screen h-screen place-items-center duration-200 z-[1]" onClick={cerrar} style={{ display: mostrar ? 'grid' : 'none' }}>
            <section className="modal-body bg-[var(--back)] max-h-[582px] min-w-[400px] absolute p-4 flex">
                <div className="imagen-container grid place-items-center justify-between">
                    <img src={pokemon.imagen} alt={pokemon.nombre} className="imagen-detalle w-[300px] aspect-[8/10]" />
                    <section className="flex gap-3">
                        {pokemon.types?.map(type => <span className='tag bg-[var(--card)] text-[var(--text)] py-1 px-[6px] rounded-md capitalize'>{type}</span>)}
                    </section>
                </div>
                <div className="data grid p-2 gap-2 ">
                    <h1 className="titulo m-0 capitalize font-bold text-2xl">{pokemon.nombre} </h1>

                    <h3 className="titulo-seccion font-medium">Habilidades</h3>

                    <div className="wrap flex gap-3 justify-around items-center text-[var(--text)]">
                        {pokemon.abilities?.map(ability => <span className='tag flex  bg-[#4261a1] text-[var(--text)] h-10 justify-center rounded-md capitalize w-32 text-center items-center'>{ability}</span>)}
                    </div>

                    <h3 className="titulo-seccion font-semibold text-[var(--text)]">Estadisticas</h3>
                    <div className='stats grid grid-cols-3 gap-2 text-[var(--text)]'>
                        {pokemon.stats?.map(stat =>
                            <section className="flex items-center flex-col capitalize bg-gray-100 rounded-lg p-2 text-black">
                                <span className='puntos border-[2px] border-[#000] rounded-[50%] w-10 h-10 grid place-items-center '>{stat.base}</span>
                                <span>{stat.name}</span>
                            </section>
                        )}
                    </div>

                </div>
            </section>
        </div>
    )
}

export default DetallePokemon