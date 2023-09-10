import React from 'react'

const Education = ({ visibility, setVisible }) => {
  
  const size = visibility ? 'w-fit h-fit p-10' : 'w-0 h-0 p-0'

  return (
    <aside onMouseLeave={() => setVisible(false)} className={`bg-[#5a5959] text-[#cac7bd] absolute z-20 space-y-4 overflow-hidden shadow-xl rounded-md top-0 ${size} m-1 transition-all origin-top-left`}>
      <button className="block text-sm" onClick={() => setVisible(false)}>X</button>
      <article className='space-y-1'>
        <h2 className='text-sm text-right'>Lahore, Pakistan</h2>
        <h1 className='text-2xl'>FAST - NUCES</h1>
      </article>
      <h3>BS ( Computer Science )</h3>
      <p>Final Year Student</p>
      <p className='text-sm'>Current CGPA - 3.64 / 4</p>
    </aside>
  )
}

export default Education
