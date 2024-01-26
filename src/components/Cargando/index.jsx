import pokeCarga from '/pokebolacargando.gif'

const Cargando =() => <div className="w-20 flex flex-col items-center justify-center align-middle mt-20">
    <img src={pokeCarga} alt="cargando" />
    <span>Cargando...</span>
</div>

export default Cargando