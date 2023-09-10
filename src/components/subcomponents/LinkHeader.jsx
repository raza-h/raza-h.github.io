import React from 'react'
import linkedin from '../../assets/images/linkedin.svg'
import github from '../../assets/images/github.svg'
import fast from '../../assets/images/fast.svg'

const LinkHeader = ({ setVisible }) => {
  return (
    <header id="top" className='bg-[#cac7bd] px-2 sm:px-3.5 md:px-5 lg:py-5'>
      <ul className='flex items-center justify-between w-[100%]'>
          <li className='flex'>
              <figure onClick={() => setVisible(true)} className='cursor-pointer'>
                <img src = {fast} width="51rem" alt="university link"/>
              </figure>
          </li>
          <li className='flex items-center space-x-3.5'>
              <a rel="noreferrer" target="_blank" href="https://github.com/dork-writes"><img src = {github} width="30rem" alt = "github link"/></a>
              <a rel="noreferrer" target="_blank" href="https://linkedin.com/in/razah1214"><img src = {linkedin} width="30rem" alt="linkedin link"/></a>
          </li>
      </ul>
    </header>
  )
}

export default LinkHeader
