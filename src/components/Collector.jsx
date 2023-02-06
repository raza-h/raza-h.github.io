import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
//import About from './About'
import { useState } from 'react'
import Projects from './Projects'

export default function Collector(props) {
  const [display, setDisplay] = useState('block');

  return (
    <div className = "bg-[#5a5959] h-[100vh] flex flex-col justify-between">
      <Navbar setDisplayBody = {setDisplay} />
      <div className = {`${display} mt-5 py-10 bg-[#5a5959]`}>
        <Projects projects = {props.projects} setProjects = {props.setProjects}/>
      </div>
      <Footer />
    </div>
  )
}
