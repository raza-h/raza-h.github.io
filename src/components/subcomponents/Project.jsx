import React from 'react'

const Project = ( props ) => {
  
  const { name, description } = props;
  
  return (
    <article className = "bg-[#c1c7bd] py-5 px-5 rounded-md text-[#5a5959] space-y-3">
        <h2 className = "text-2xl rounded-3xl">{name}</h2>
        <p className = "text-md  rounded-3xl pb-3">{description}</p>
        <div className='inline space-x-1'>
            { props.children }
        </div>
        <br />
    </article>
  )
}

export default Project
