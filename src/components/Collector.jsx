import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import About from './About'
import { useState } from 'react'
import Projects from './Projects'
import { Routes, Route } from 'react-router-dom'
import Contact from './Contact'
import Experience from './Experience'

export default function Collector(props) {
  const [display, setDisplay] = useState('block');

  return (
    <div id = "next" className = "bg-[#5a5959] min-h-screen flex flex-col justify-between">
      <Navbar setDisplayBody = {setDisplay} />
      <main className = {`${display} mt-5 py-10 bg-[#5a5959]`}>
        <Routes>
          <Route index element = {<About />} />
          <Route element = {<Projects projects = {props.projects} setProjects = {props.setProjects}/>} path = "projects"/>     
          <Route element = {<Contact />} path = "contact" />   
          <Route element = {<Experience />} path = "experience" />   
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
