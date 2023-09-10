import React from 'react'
import webpageImg from '../assets/images/webpage.svg'
import downIcon from '../assets/images/down-icon.svg'
import react from '../assets/images/react.svg'
import tailwind from '../assets/images/tailwind.svg'
import typescript from '../assets/images/typescript.svg'
import node from '../assets/images/node.svg'
import dotnet from '../assets/images/dotnet.svg'
import spring from '../assets/images/spring.svg'
import { Link } from 'react-router-dom'
import LinkHeader from './subcomponents/LinkHeader'

export default function Home() {
  let scrollDown = () =>
  {
    let scrollHeight = document.getElementById("next").offsetTop;
    window.scrollBy(0, scrollHeight);
  }

  return (
    <>
      <LinkHeader />
      <hr className='border-[#5a5959]'/>
      <main id = "home" className = "bg text-[#5a5959] py-10 px-5 lg:flex lg:flex-col lg:justify-around">
        <figure className = "mx-auto w-fit md:space-y-10 lg:grid lg:grid-cols-2 lg:justify-between lg:gap-x-20">
          <figcaption className='px-5 md:space-y-1 lg:space-y-2'>
            <h1 className='flex items-center space-x-4 text-2xl sm:text-3xl py-2 md:text-3xl lg:text-2xl xl:text-4xl'>
              <p>Raza Haider</p>
              <section className = "hidden sm:flex space-x-2.5 items-center py-2">
                <img src = { react } alt={'react-icon'} width = "25rem"/>
                <img src = { tailwind } alt={'tailwind-icon'} width = "25rem"/>
                <img src = { typescript } alt={'typescript-icon'} width = "25rem"/>
                <img src = { node } alt={'node-icon'} width = "25rem"/>
                <img src = { dotnet } alt={'dotnet-icon'} width = "32rem"/>
                <img src = { spring } alt={'spring-boot-icon'} width = "23rem"/>
              </section>
            </h1>
            <h2 className='text-4xl sm:text-6xl md:text-7xl lg:text-5xl xl:text-7xl'>Web Developer</h2>
            <div className='py-6 px-2'>
              <Link onClick = {scrollDown} to = "projects"><button className = "w-[70vw] sm:w-fit ml-auto mr-auto block sm:inline shadow-md lg:text-lg xl:text-xl border-2 hover:bg-[#cac7c1] transition-all border-[#5a5959] px-2 py-1 sm:mr-1 rounded-sm">View Projects</button></Link>
              <Link onClick = {scrollDown} to = "contact"><button className = "w-[70vw] sm:w-fit ml-auto mr-auto my-3 sm:my-0 block sm:inline shadow-md  shadow-[#5a5959aa] lg:text-lg xl:text-xl border-2 border-[#5a5959] hover:bg-[#5a5959ee] hover:border-[#5a595961] bg-[#5a5959] text-[#cac7bd] px-3 py-1 sm:ml-1 rounded-sm transition-all">Get in touch</button></Link>
            </div>
          </figcaption>
          <img alt = "webpage" className="mx-auto" src = {webpageImg} width = "500rem" />
        </figure>
        <a href = "#next" className='py-1'><button className = "expand-reduce block ml-auto mr-auto w-fit my-5 shadow-md rounded-3xl border-2 border-[#5a5959]"><img alt = "down icon" src = {downIcon} width = "40rem"/></button></a>
      </main>
    </>
  )
}
