import React from 'react'
import dev from '../assets/images/dev.svg'

export default function About() {
  return (
    <section className={`text-[#cac7bd] md:text-[#5a5959] grid md:grid-cols-2 border-2 border-[#cac7bd] md:border-0 w-[90%] sm:w-[80%] md:w-[90%] lg:w-[80%] xl:w-[70%] ml-auto mr-auto rounded-md`}>
        <figure className = "px-5 py-5">
            <img alt = "developer" src = {dev} width = "300rem" className='md:w-[20rem] pb-5 xl:pb-10'/>
            <p className = "text-[#cac7bd] text-xl xl:text-2xl">Raza Haider</p>
        </figure>
        <article className = "md:bg-[#cac7bd] lg:text-xl px-5 py-4 text-justify lg:pb-10 rounded-md xl:px-8">
            <h2 className = "hidden md:block md:text-xl lg:text-3xl py-4 lg:pb-7 xl:pb-10">About Me</h2>
            <p className = "pb-5">A college senior at National University of Computer and Emerging Sciences, Lahore, and a self-taught web developer. 
              I specialize in Frontend web development with React.js. Furthermore, I am well-versed in MERN Stack. Along with my internship,
              I am currently exploring React Native to scale my past skills and experience to mobile applications.
            </p>
        </article>
    </section>
  )
}
