import React, { useEffect, useState } from 'react'
import downloadIcon from '../assets/images/download.svg'
import hamburger from '../assets/images/hamburger-menu.svg'
import cross from '../assets/images/cross.svg'
import { Link, useLocation } from 'react-router-dom'
import resume from '../assets/files/resume.pdf'

export default function Navbar(props) {
  const [hamOpen, setHam] = useState('h-0');
  const [menuIcon, setIcon] = useState(hamburger);
  const [anim, setAnim] = useState('');
  const [about, setAbout] = useState('');
  const [projects, setProjects] = useState('');
  const [experience, setExp] = useState('');
  const [contact, setContact] = useState('text-[#cac7bd]');
  const location = useLocation();

  useEffect(() =>
  {
    const { pathname } = location;
    pathname === "/" ? setAbout('bg-[#cac7bd] text-[#5a5959] md:text-[#cac7bd] md:bg-[#5a5959] nav-item-clicked') : setAbout('');
    pathname === "/projects" ? setProjects('bg-[#cac7bd] text-[#5a5959] md:text-[#cac7bd] md:bg-[#5a5959] nav-item-clicked') : setProjects('');
    pathname === "/experience" ? setExp('bg-[#cac7bd] text-[#5a5959] md:text-[#cac7bd] md:bg-[#5a5959] nav-item-clicked') : setExp('');
    pathname === "/contact" ? setContact('bg-[#cac7bd] text-[#5a5959] md:text-[#cac7bd] md:bg-[#5a5959]') : setContact('text-[#cac7bd]');
  },[location]);

  const toggleHam = async() =>
  {
    if (hamOpen === 'h-0' || hamOpen === 'h-0 navbar-hide')
    {
      props.setDisplayBody('hidden opacity-0');
      setHam('navbar-items h-[50vh]');
      setIcon(cross);
      setAnim('rotate-cross');
    }
    
    else
    {
      setHam('h-0 navbar-hide');
      setIcon(hamburger);
      setAnim('rotate-ham');
      await new Promise (r => setTimeout(r, 500))
      props.setDisplayBody('change-opacity');
    }
  }

  return (
    <div className = "md:border-b-2 md:border-b-[#cac7bd]">
      <header className = "flex md:hidden py-2 px-2 justify-between">
        <h1 className='flex justify-center flex-col text-[#cac7bd] text-3xl'>Raza Haider</h1>
        <button onClick = {toggleHam} className = "py-[0.1rem] px-1 border-2 border-[#cac7bd] rounded-sm"><img alt = "menu" className = {`${anim}`} src = {menuIcon} width = "30rem"/></button>
      </header>
      <header className = {`md:flex justify-between px-0 md:py-3 ${hamOpen} overflow-hidden md:h-fit`}>
        <div className = "w-[100%] md:w-fit py-[0.05rem] px-2 flex items-center">
          <a onClick={()=> {anim ? toggleHam() : setAnim('')}} href = {resume} download><button className = "pr-2 pt-5 md:py-[0.3rem] text-[#cac7bd] md:border-2 md:border-[#cac7bd] rounded-sm hover:bg-[#cac7bd10] transition-all"><img alt ="download" src = {downloadIcon} width = "30rem" className='inline pr-[0.4rem] md:px-[0.4rem]'/><span>Resume</span></button></a>
        </div>
        <nav>
          <ul className='list-none md:flex text-[#cac7bd] md:space-x-10 space-y-5 md:space-y-0 my-5 py-2 md:py-0 md:my-3'>
            <li className = "nav-item px-2 py-1 md:py-0" onClick={()=> {window.innerWidth < 768 ? toggleHam() : setAnim('')}} ><a href = "#top"><p>Home</p></a></li>
            <li className = {`${about} nav-item md:px-1 px-2 py-1 md:py-0`}  onClick={()=> {window.innerWidth < 768 ? toggleHam() : setAnim('')}} ><Link to="/"><p>About</p></Link></li>
            <li className = {`${projects} nav-item md:px-1 px-2 py-1 md:py-0`} onClick={()=> {window.innerWidth < 768 ? toggleHam() : setAnim('')}} ><Link to = "/projects"><p>Projects</p></Link></li>
            <li className = {`${experience} nav-item md:px-1 px-2 py-1 md:py-0`} onClick={()=> {window.innerWidth < 768 ? toggleHam() : setAnim('')}} ><Link to = "/experience"><p>Experience</p></Link></li>
          </ul>
        </nav>
        <div className = {`px-2 py-1 md:py-0 ${contact} flex items-center`}>
          <Link to = "contact"><button onClick={()=> {anim ? toggleHam() : setAnim('')}} className = "md:px-2 rounded-sm md:my-[1px] md:py-[0.3rem] md:border-2 border-[#cac7bd] md:hover:bg-[#cac7bd10] transition-all">Get in touch</button></Link>
        </div>
      </header>
    </div>
  )
}
