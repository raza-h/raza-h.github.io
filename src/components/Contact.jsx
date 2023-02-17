import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [occupation, setOccupation] = useState('');
  const [message, setMessage] = useState('');

  let handleChange = (e, setType) =>
  {
    setType(e.target.value);
  }

  let handleSubmit = async(e) =>
  {
    console.log('Hello');
    e.preventDefault();
    setName('');
    setEmail('');
    setOccupation('');
    setMessage('');
    toast.info('Sending...');
    await setMessage(email + "\nFrom "+ occupation + "\n - " + message);
    const response = await emailjs.send('service_voaqzzv', "template_ny503j8", {message, from_name: name, reply_to: email},'HSd1g95KiiGGBoaAJ');
    toast.success('Sent Successfully!');
  }

  const contextClass = {
    success: "bg-[#c1c7bd]",
    info: "bg-[#c1c7bd]",
    default: "bg-[#c1c7bd]",
  };

  return (
    <div>
    <ToastContainer className = "space-y-3"
      toastClassName={({ type }) => contextClass[type || "default"] +
        " relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer"
      }
      bodyClassName={() => "text-sm text-[#5a5959] font-med block p-3"}
      position="top-right"
      autoClose={2000}
    />
    <form onSubmit = {handleSubmit} className = "border-2 w-[90%] ml-auto mr-auto lg:w-[80%] xl:w-[60%] rounded-sm border-[#c1c7bd] py-5 px-5 text-[#c1c7bd] space-y-10">
      <h1 className = "text-3xl pb-5">Get in touch</h1>
      <div>
        <label htmlFor = "name" className = "text-xl">Name</label>
        <input autoComplete = "off" className = "my-3 block w-[90%] md:w-[80%] rounded-sm bg-[#5a5959] border-2 border-[#c1c7bd] focus:outline-0 px-2 py-1 text-md" name = "name" type = "text" value = {name} onChange = {e=>handleChange(e, setName)}/>
      </div>
      <div>
        <label htmlFor = "email" className = "text-xl">Email</label>
        <input autoComplete = "off" className = "my-3 block w-[90%] md:w-[80%] rounded-sm bg-[#5a5959] border-2 border-[#c1c7bd] focus:outline-0 px-2 py-1 text-md" name = "email" type = "email" value = {email} onChange = {e=>handleChange(e, setEmail)}/>
      </div>
      <div>
        <label htmlFor = "company" className = "text-xl">Occupation (Optional)</label>
        <input autoComplete = "off" className = "my-3 block w-[90%] md:w-[80%] rounded-sm bg-[#5a5959] border-2 border-[#c1c7bd] focus:outline-0 px-2 py-1 text-md" name = "company" type = "text" value = {occupation} onChange = {e=>handleChange(e, setOccupation)}/>
      </div>
      <div>
        <label htmlFor = "message" className = "text-xl">Message</label>
        <textarea autoComplete = "off" className = "my-3 block w-[90%] md:w-[80%] rounded-sm bg-[#5a5959] border-2 border-[#c1c7bd] focus:outline-0 px-2 py-1 text-md" name = "message" type = "text" value = {message} onChange = {e=>handleChange(e, setMessage)}/>
      </div>
      <button disabled = {!name.length || !email.length || !message.length} className = "bg-[#c1c7bd] text-[#5a5959] rounded-sm px-3 py-1 border-2 border-[#c1c7bd] hover:bg-[#5a5959] hover:text-[#c1c7bd] transition-all disabled:bg-[#5a5959] disabled:text-[#c1c7cdaa] disabled:border-[#c1c7cdaa] disabled:cursor-auto">Send</button>
    </form>
    </div>
  )
}
