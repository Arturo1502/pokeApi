import React from 'react'
import './Card.css'

export default function Card({ id, name, img , verPokemon }) {
    return (

        <div className="flex flex-col items-center justify-center  w-56 rounded-lg bg-gray-100 tarjeta p-5 cursor-pointer duration-300 hover:scale-105 " onClick={verPokemon}> 
            <div className="h content-center" >
                <img
                    className="h-[200px] p-3"
                    src={img}
                    alt={`${name}'s photo`} />
            </div>
            <p className="p-4 flex flex-col items-center justify-between bg-gray-600 text-white font-semibold pt-1 pb-2 rounded-lg w-3/5 capitalize">
                <span className=''>#{id}</span>
                <span>{name}</span>
            </p>
        </div>
    )
}