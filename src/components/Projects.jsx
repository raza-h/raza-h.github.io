import React from 'react'
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
      <article className = "bg-[#c1c7bd] py-5 px-5 rounded-md text-[#5a5959] space-y-3">
        <h2 className = "text-2xl rounded-3xl">TechMedic</h2>
        <p className = "text-md  rounded-3xl pb-3">An MERN e-commerce application for a repair startup.</p>
        <div className='inline space-x-1'>
          <a href = "https://github.com/rayansiddique9/techmedic-frontend" target = "_blank" rel = "noreferrer"><button className='bg-[#5a5959] hover:bg-[#5a5959ee] border-2 border-[#5a5959] transition-all rounded-sm text-[#c1c7bd] px-2 py-1 shadow-md'>Frontend Code</button></a>
          <a href = "https://github.com/dork-writes/techmedic-backend" target = "_blank" rel = "noreferrer"><button className='border-2 border-[#5a5959] rounded-sm px-2 py-1 hover:bg-[#c1c7c1] transition-all shadow-md'>Backend Code</button></a>
        </div>
        <br />
      </article>
      <article className = "bg-[#c1c7bd] py-5 px-5 rounded-md text-[#5a5959] space-y-3">
        <h2 className = "text-2xl rounded-3xl">iNote</h2>
        <p className = "text-md pb-3 rounded-3xl">A MERN notepad application.</p>
        <div className='inline space-x-1'>
          <a href = "https://github.com/dork-writes/inote" target = "_blank" rel = "noreferrer"><button className='bg-[#5a5959] hover:bg-[#5a5959ee] border-2 border-[#5a5959] transition-all rounded-sm text-[#c1c7bd] px-2 py-1 shadow-md'>Source Code</button></a>
        </div>
        <br />
      </article>
      <article className = "bg-[#c1c7bd] py-5 px-5 rounded-md text-[#5a5959] space-y-3">
        <h2 className = "text-2xl rounded-3xl">TeleDoc</h2>
        <p className = "text-md pb-3 rounded-3xl">A Spring Boot healthcare application for patients to have online appointments.</p>
        <div className='inline space-x-1'>
          <a href = "https://github.com/raza-h/teledoc" target = "_blank" rel = "noreferrer"><button className='bg-[#5a5959] hover:bg-[#5a5959ee] border-2 border-[#5a5959] transition-all rounded-sm text-[#c1c7bd] px-2 py-1 shadow-md'>Source Code</button></a>
        </div>
        <br />
      </article>
      <article className = "bg-[#c1c7bd] py-5 px-5 rounded-md text-[#5a5959] space-y-3">
        <h2 className = "text-2xl rounded-3xl">Car Guru</h2>
        <p className = "text-md pb-3 rounded-3xl">A Flask car information web application.</p>
        <div className='inline space-x-1'>
          <a href = "https://github.com/raza-h/car-guru/tree/master" target = "_blank" rel = "noreferrer"><button className='bg-[#5a5959] hover:bg-[#5a5959ee] border-2 border-[#5a5959] transition-all rounded-sm text-[#c1c7bd] px-2 py-1 shadow-md'>Source Code</button></a>
        </div>
        <br />
      </article>
      <article className = "bg-[#c1c7bd] py-5 px-5 rounded-md text-[#5a5959] space-y-3">
        <h2 className = "text-2xl rounded-3xl">Tic-Tac-Toe ( <span className='font-semibold'>α</span> -	<span className='font-semibold'>β</span> Pruning )</h2>
        <p className = "text-md pb-3 rounded-3xl">A JS single player impossible difficulty tic-tac-toe game developed using alpha-beta pruning algorithm.</p>
        <div className='inline space-x-1'>
          <a href = "https://github.com/dork-writes/tictactoe-v-computer" target = "_blank" rel = "noreferrer"><button className='bg-[#5a5959] hover:bg-[#5a5959ee] border-2 border-[#5a5959] transition-all rounded-sm text-[#c1c7bd] px-2 py-1 shadow-md'>Source Code</button></a>
          <a href = "https://dork-writes.github.io/tictactoe-v-computer" target = "_blank" rel = "noreferrer"><button className='border-2 border-[#5a5959] rounded-sm px-2 py-1 hover:bg-[#c1c7c1] transition-all shadow-md'>Live Demo</button></a>
        </div>
        <br />
      </article>
      <article className = "bg-[#c1c7bd] py-5 px-5 rounded-md text-[#5a5959] space-y-3">
        <h2 className = "text-2xl rounded-3xl">Tic-Tac-Toe ( Multiplayer )</h2>
        <p className = "text-md pb-3 rounded-3xl">A JS multiplayer tic-tac-toe game.</p>
        <div className='inline space-x-1'>
          <a href = "https://github.com/dork-writes/tictactoe" target = "_blank" rel = "noreferrer"><button className='bg-[#5a5959] hover:bg-[#5a5959ee] border-2 border-[#5a5959] transition-all rounded-sm text-[#c1c7bd] px-2 py-1 shadow-md'>Source Code</button></a>
          <a href = "https://dork-writes.github.io/tictactoe" target = "_blank" rel = "noreferrer"><button className='border-2 border-[#5a5959] rounded-sm px-2 py-1 hover:bg-[#c1c7c1] transition-all shadow-md'>Live Demo</button></a>
        </div>
        <br />
      </article>
    </section>
  )
}
