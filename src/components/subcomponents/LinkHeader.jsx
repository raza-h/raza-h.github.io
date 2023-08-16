import React from 'react'
import linkedin from '../../assets/images/linkedin.svg'
import github from '../../assets/images/github.svg'
import fast from '../../assets/images/fast.svg'

const LinkHeader = () => {
  return (
    <header id="top" className='bg-[#cac7bd] px-5 lg:py-5'>
    <ul className='flex justify-end space-between w-[100%]'>
        <li className='flex mr-auto'>
            <a rel="noreferrer" target="_blank" href="https://lhr.nu.edu.pk"><img src = {fast} width="51rem" alt="university link"/></a>
        </li>
        <li className='flex items-center space-x-4'>
            <a rel="noreferrer" target="_blank" href="https://github.com/dork-writes"><img src = {github} width="25rem" alt = "github link"/></a>
            <a rel="noreferrer" target="_blank" href="https://linkedin.com/in/razah1214"><img src = {linkedin} width="25rem" alt="linkedin link"/></a>
        </li>
    </ul>
    </header>
  )
}

export default LinkHeader
