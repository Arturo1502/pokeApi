import { Buscar } from "../Icons";
import './buscador.css'

export default function Buscador() {

    return (
        <>
        <h3 className="titulo w-full text-4xl text-black justify-center flex">Mas de 800 Pokémons, elige tu favorito!</h3>
        <section className="flex justify-center items-center gap-[8px] py-[5px]">
            <input className="buscar bg-white border border-white rounded-lg p-3 flex-[0.4] text-[1rem]" type="text" placeholder="Encuentralos yá!" />
            <button className="btnBuscar flex bg-[#5784df] text-white rounded-lg p-3 border-none justify-center items-center cursor-pointer gap-1 text-sm duration-300 hover:scale-110 hover:opacity-90">
                <Buscar/>
                Buscar</button>
        </section>
        </>
    )
}