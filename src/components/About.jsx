import React from 'react'
import dev from '../assets/images/dev.svg'

export default function About() {
  return (
    <div className={`text-[#cac7bd] md:text-[#5a5959] grid md:grid-cols-2 border-2 border-[#cac7bd] md:border-0 w-[90%] sm:w-[80%] md:w-[90%] lg:w-[80%] xl:w-[70%] ml-auto mr-auto rounded-sm`}>
        <div className = "px-5 py-5">
            <img alt = "developer" src = {dev} width = "300rem" className='md:w-[20rem] pb-5 xl:pb-10'/>
            <p className = "text-[#cac7bd] text-xl xl:text-2xl">Raza Haider</p>
        </div>
        <div className = "md:bg-[#cac7bd] lg:text-xl px-5 py-4 text-justify lg:pb-10 rounded-sm xl:px-8">
            <p className = "hidden md:block md:text-xl lg:text-3xl py-4 lg:pb-7 xl:pb-10">About Me</p>
            <p className = "pb-5">A college junior at National University of Computer and Emerging Sciences, Lahore, and a self-taught web developer. I specialize in Frontend development with React and Tailwind CSS. Furthermore, I am well-versed in MERN Stack.</p>
        </div>
    </div>
  )
}
