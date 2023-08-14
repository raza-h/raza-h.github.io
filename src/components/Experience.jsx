import React from 'react'

const Experience = () => {
  return (
    <section className='text-[#c1c7bd] p-5'>
      <article className='p-5 border space-y-2 border-[#c1c7bd] rounded-md'>
        <small className='text-sm float-right'>July 2023 - August 2023</small>
        <h1 className='text-xl'>ABSOL - Absolute Solutions</h1>
        <h2>.NET Intern</h2>
        <ul className='list-disc p-5 text-sm space-y-2'>
            <li>Worked on Software Requirements Specification Document for Case Management System</li>
            <li>Implemented the DocuSign or <span className='bg-[#cac7bd] text-[#5a5959] px-2 py-0.5 rounded-sm mx-1'>e-sign feature</span> in Case Management System application, enabling attorneys to get their documents signed through the application</li>
            <li>Learned about working with ASP.NET Core Web APIs</li>
            <li>Learned about creating Razor Views and integrating Javascript</li>
            <li>Learned how to build web applications in ASP.NET Core MVC</li>
            <li>Learned the basics of C#</li>
            <li>Revised OOP Concepts</li>
        </ul>
      </article>
    </section>
  )
}

export default Experience
