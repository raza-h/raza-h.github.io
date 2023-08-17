import React from 'react'
import linkedin from '../../assets/images/linkedin.svg'
import github from '../../assets/images/github.svg'
import fast from '../../assets/images/fast.svg'
import react from '../../assets/images/react.svg'
import node from '../../assets/images/node.svg'
import dotnet from '../../assets/images/dotnet.svg'
import tailwind from '../../assets/images/tailwind.svg'
import ts from '../../assets/images/typescript.svg'
import spring from '../../assets/images/spring.svg'

const LinkHeader = () => {
  return (
    <header id="top" className='bg-[#cac7bd] px-2 sm:px-3.5 md:px-5 lg:py-5'>
    <ul className='flex items-center justify-between w-[100%]'>
        <li className='flex'>
            <a rel="noreferrer" target="_blank" href="https://lhr.nu.edu.pk"><img src = {fast} width="51rem" alt="university link"/></a>
        </li>
        <li className='flex space-x-1.5 sm:space-x-2.5 md:space-x-5'>
          <img src = {react} width={'30rem'} alt = "react icon"/>
          <img src = {tailwind} width={'30rem'} alt = "tailwind icon"/>
          <img src = {ts} width={'30rem'} alt = "typesript icon"/>
          <img src = {node} width={'30rem'} alt = "node icon"/>
          <img src = {dotnet} width={'35rem'} alt = "dotnet icon"/> 
          <img src = {spring} width={'26rem'} alt = "spring icon"/> 
        </li>
        <li className='flex items-center space-x-1.5 sm:space-x-2 md:space-x-4'>
            <a rel="noreferrer" target="_blank" href="https://github.com/dork-writes"><img src = {github} width="30rem" alt = "github link"/></a>
            <a rel="noreferrer" target="_blank" href="https://linkedin.com/in/razah1214"><img src = {linkedin} width="30rem" alt="linkedin link"/></a>
        </li>
    </ul>
    </header>
  )
}

export default LinkHeader
