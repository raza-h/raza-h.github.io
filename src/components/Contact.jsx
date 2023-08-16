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
    await emailjs.send('service_voaqzzv', "template_ny503j8", {message: email + "\nFrom "+ occupation + "\n - " + message, from_name: name, reply_to: email},'HSd1g95KiiGGBoaAJ');
    toast.success('Sent Successfully!');
  }

  const contextClass = {
    success: "bg-[#cac7bd]",
    info: "bg-[#cac7bd]",
    default: "bg-[#cac7bd]",
  };

  return (
    <>
      <ToastContainer className = "space-y-3"
        toastClassName={({ type }) => contextClass[type || "default"] +
          " relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer"
        }
        bodyClassName={() => "text-sm text-[#5a5959] font-med block p-3"}
        position="top-right"
        autoClose={2000}
      />
      <form onSubmit = {handleSubmit} className = "border-2 w-[90%] ml-auto mr-auto lg:w-[80%] xl:w-[60%] rounded-md border-[#cac7bd] py-5 px-5 text-[#cac7bd] space-y-10">
        <h1 className = "text-3xl pb-5">Get in touch</h1>
        <section>
          <label htmlFor = "name" className = "text-xl">Name</label>
          <input autoComplete = "off" className = "my-3 block w-[100%] rounded-sm bg-[#5a5959] border-2 border-[#cac7bd] focus:outline-0 px-2 py-1 text-md" name = "name" type = "text" value = {name} onChange = {e=>handleChange(e, setName)}/>
        </section>
        <section>
          <label htmlFor = "email" className = "text-xl">Email</label>
          <input autoComplete = "off" className = "my-3 block w-[100%] rounded-sm bg-[#5a5959] border-2 border-[#cac7bd] focus:outline-0 px-2 py-1 text-md" name = "email" type = "email" value = {email} onChange = {e=>handleChange(e, setEmail)}/>
        </section>
        <section>
          <label htmlFor = "company" className = "text-xl">Occupation <span>(Optional)</span></label>
          <input autoComplete = "off" className = "my-3 block w-[100%] rounded-sm bg-[#5a5959] border-2 border-[#cac7bd] focus:outline-0 px-2 py-1 text-md" name = "company" type = "text" value = {occupation} onChange = {e=>handleChange(e, setOccupation)}/>
        </section>
        <section>
          <label htmlFor = "message" className = "text-xl">Message</label>
          <textarea autoComplete = "off" className = "my-3 block w-[100%] rounded-sm bg-[#5a5959] border-2 border-[#cac7bd] focus:outline-0 px-2 py-1 text-md" name = "message" type = "text" value = {message} onChange = {e=>handleChange(e, setMessage)}/>
        </section>
        <button disabled = {!name.length || !email.length || !message.length} className = "bg-[#cac7bd] text-[#5a5959] rounded-sm px-3 py-1 border-2 border-[#cac7bd] hover:bg-[#5a5959] hover:text-[#cac7bd] transition-all disabled:bg-[#5a5959] disabled:text-[#c1c7cdaa] disabled:border-[#c1c7cdaa] disabled:cursor-auto">Send</button>
      </form>
    </>
  )
}
