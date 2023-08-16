import React from 'react'
import Project from './subcomponents/Project'
// import { useEffect } from 'react'
// import Loader from './Loader'
// import API from '../config'

export default function Projects() {

  // useEffect(()=>
  // {
    // const fetchProjects = async() =>
    // {
    //   if (!props.projects.length)
    //   {
    //     try
    //     {
    //       let response = await fetch(API, {
    //         method: 'GET',
    //         mode: 'cors',
    //         headers: {
    //           'Content-Type': 'application/json'
    //         }
    //       });

    //       response = await response.json();
    //       console.log(response);
    //       props.setProjects(response);
    //     }
  
    //     catch(err)
    //     {
  
    //     }
    //   }
    // }
    // fetchProjects();
  // },[props]);

  return (
    <section className = "space-y-5 ml-auto mr-auto w-[90%] lg:w-[80%] xl:w-[70%]">
      <Project name="TechMedic" description="An MERN e-commerce application for a repair startup.">
          <a href = "https://github.com/rayansiddique9/techmedic-frontend" target = "_blank" rel = "noreferrer"><button className='bg-[#5a5959] hover:bg-[#5a5959ee] border-2 border-[#5a5959] transition-all rounded-sm text-[#cac7bd] px-2 py-1 shadow-md'>Frontend</button></a>
          <a href = "https://github.com/dork-writes/techmedic-backend" target = "_blank" rel = "noreferrer"><button className='border-2 border-[#5a5959] rounded-sm px-2 py-1 hover:bg-[#cac7c1] transition-all shadow-md'>Backend</button></a>
      </Project>
      <Project name="TeleDoc" description="A Spring Boot healthcare application for patients to have online appointments.">
          <a href = "https://github.com/raza-h/teledoc" target = "_blank" rel = "noreferrer"><button className='bg-[#5a5959] hover:bg-[#5a5959ee] border-2 border-[#5a5959] transition-all rounded-sm text-[#cac7bd] px-2 py-1 shadow-md'>Source Code</button></a>
      </Project>
      <Project name="Car Guru" description="A Flask car information web application.">
          <a href = "https://github.com/raza-h/car-guru/tree/master" target = "_blank" rel = "noreferrer"><button className='bg-[#5a5959] hover:bg-[#5a5959ee] border-2 border-[#5a5959] transition-all rounded-sm text-[#cac7bd] px-2 py-1 shadow-md'>Source Code</button></a>
      </Project>
      <Project name="Tic-Tac-Toe ( Single Player )" description="A JS single player impossible difficulty tic-tac-toe game developed using alpha-beta pruning algorithm.">
          <a href = "https://github.com/dork-writes/tictactoe-v-computer" target = "_blank" rel = "noreferrer"><button className='bg-[#5a5959] hover:bg-[#5a5959ee] border-2 border-[#5a5959] transition-all rounded-sm text-[#cac7bd] px-2 py-1 shadow-md'>Source Code</button></a>
          <a href = "https://dork-writes.github.io/tictactoe-v-computer" target = "_blank" rel = "noreferrer"><button className='border-2 border-[#5a5959] rounded-sm px-2 py-1 hover:bg-[#cac7c1] transition-all shadow-md'>Live Demo</button></a>
      </Project>
      <Project name="Tic-Tac-Toe ( Multiplayer )" description="A JS multiplayer tic-tac-toe game.">
          <a href = "https://github.com/dork-writes/tictactoe" target = "_blank" rel = "noreferrer"><button className='bg-[#5a5959] hover:bg-[#5a5959ee] border-2 border-[#5a5959] transition-all rounded-sm text-[#cac7bd] px-2 py-1 shadow-md'>Source Code</button></a>
          <a href = "https://dork-writes.github.io/tictactoe" target = "_blank" rel = "noreferrer"><button className='border-2 border-[#5a5959] rounded-sm px-2 py-1 hover:bg-[#cac7c1] transition-all shadow-md'>Live Demo</button></a>
      </Project>
    </section>
  )
}
