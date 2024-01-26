import { Buscar } from "../Icons";
import './buscador.css'

export default function Buscador({ busqueda, setBusqueda, buscarPokemon }) {

    return (
        <>
            <h3 className="titulo w-full text-4xl  justify-center flex">Mas de 800 Pokémons, elige tu favorito!</h3>
            <form className="flex justify-center items-center gap-[8px] py-[5px]" onSubmit={buscarPokemon}>
                <input className="buscar bg-[var(--card)] border border-white rounded-lg p-3 flex-[0.4] text-[1rem]" type="text" placeholder="Encuentralos yá!" value={busqueda} onChange={(e) => setBusqueda(e.target.value)} />
                <button className="btnBuscar flex bg-[#5784df] text-white rounded-lg p-3 border-none justify-center items-center cursor-pointer gap-1 text-sm duration-300 hover:scale-110 hover:opacity-90" type="submit" >
                    <Buscar />
                    Buscar</button>
            </form>

        </>
    )
}