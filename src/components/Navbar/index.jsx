import {useEffect, useState} from 'react'
import { Logo, Moon, Sol } from '../Icons'
import './Navbar.css'


export default function Navbar() {
    const [tema, setTema] = useState('claro')
    const handleChange = (e)=> setTema(e.target.checked ? 'oscuro' : 'claro')

    useEffect(()=>{
        document.body.setAttribute('data-tema', tema)
    },[tema])


    return (
        <nav className='bg-[var(--yelow)] h-20 flex  items-center justify-around py-2'>
            <div className=' top-[-20px] w-auto overflow-hidden'>
                <Logo />
            </div>

            <div className='flex items-center gap-2'>
                <Sol/>         
                    <label className='bg-gray-500 w-[70px] h-[28px] rounded-2xl cursor-pointer flex items-center p-[2px]' >
                    <input type="checkbox" className='hidden check-switch' onChange={handleChange} />
                    <span className='slider w-6 h-6 rounded-3xl duration-500 bg-white'></span>
                </label>
                <Moon/>
            </div>
        </nav>
    )
}
