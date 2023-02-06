import React from 'react'
import webpageImg from '../assets/images/webpage.svg'
import downIcon from '../assets/images/down-icon.svg'

export default function Home() {
  return (
    <>
    <div className = "bg text-[#5A5959] py-10 px-5 lg:flex lg:flex-col lg:justify-center">
      <div className = " ml-auto mr-auto w-fit space-y-10 lg:grid lg:grid-cols-2 lg:justify-between lg:gap-x-20">
        <div className='px-5 py-2'>
          <h1 className='text-2xl py-2 md:text-4xl lg:text-3xl xl:text-4xl'>Raza Haider</h1>
          <h2 className='text-4xl md:text-7xl lg:text-5xl xl:text-7xl'>Web Developer</h2>
          <div className='py-8 px-2'>
            <button className = "shadow-md lg:text-lg xl:text-xl border-2 hover:bg-[#cac7bf] transition-all border-[#5a5959] px-2 py-1 mr-1 rounded-sm">View Projects</button>
            <button className = "shadow-md  shadow-[#5a5959aa] lg:text-lg xl:text-xl border-2 border-[#5a5959] hover:bg-[#5a5961] hover:border-[#5a595961] bg-[#5a5959] text-[#c1c7bd] px-3 py-1 ml-1 rounded-sm transition-all">Get in touch</button>
          </div>
        </div>
      <div>
        <img alt = "webpage" src = {webpageImg} width = "500rem" />
      </div>
    </div>
    <button className = "block ml-auto mr-auto w-fit my-5 shadow-md rounded-3xl border-2 border-[#5a5959]"><img alt = "down icon" src = {downIcon} width = "40rem"/></button>
    </div>
    </>
  )
}
