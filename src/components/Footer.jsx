import React from 'react'
import github from '../assets/images/github.svg'
import linkedin from '../assets/images/linkedin.svg'

export default function Footer() {
  return (
    <div className = "py-2 bg-[#c1c7bd] px-2 flex space-x-3">
        <img alt = "github" src = {github} width = "30rem"/>
        <img alt = "linkedin" src = {linkedin} width = "30rem"/>
    </div>
  )
}
