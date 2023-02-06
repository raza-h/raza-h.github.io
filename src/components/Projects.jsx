import React from 'react'
import { useEffect } from 'react'
import Loader from './Loader'
import API from '../config'

export default function Projects(props) {

  useEffect(()=>
  {
    const fetchProjects = async() =>
    {
      if (!props.projects.length)
      {
        try
        {
          let response = await fetch(API, {
            method: 'GET',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json'
            }
          });

          response = await response.json();
          console.log(response);
          props.setProjects(response);
        }
  
        catch(err)
        {
  
        }
      }
    }
    fetchProjects();
  },[props]);

  return (
    <div className = "space-y-5 ml-auto mr-auto w-[90%] lg:w-[80%] xl:w-[70%]">
        {!props.projects.length ? <Loader /> : props.projects.map(
          r=>
          <div key = {r._id} className = "bg-[#c1c7bd] py-5 px-5 rounded-md text-[#5a5959] space-y-3">
            <p className = "text-2xl rounded-3xl">{r.title}&nbsp;</p>
            <p className = "text-md  rounded-3xl">{r.description}&nbsp;</p>
            <br />
            <a rel = "noreferrer" target = "_blank" className='text-sm rounded-3xl underline cursor-pointer' href = {r.link}>Check it out!&nbsp;</a>
          </div>
        )}      
    </div>
  )
}
