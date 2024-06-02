"use client"

import axios from 'axios';
import  { useState } from 'react'

const page = () => {

  axios.defaults.baseURL = "http://localhost:/3000"   

  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();

   try {
    const resp = await axios.post(`api/signup`, {formData})
   console.log("Registration Successful", resp.data )
   
   } catch (error) {
    console.log("Error while registering..", error);
   }
}
  
  
  return (

    <>
    <div className='auth-pages h-[120vh] mb-40 '>


    <div className='grid place-items-center w-full py-9'>
      <h1 className=' text-4xl  w-4/12 text-center text-gray-400 flex justify-center px-8 py-3 '>REGISTER HERE</h1>
    </div>

    <div className='flex items-center justify-center flex-col '>
      <form className='flex flex-col  gap-5  px-20 border-x-4  rounded-2xl border-slate-500'>
        <div>
          <label htmlFor="firstName">First Name <sup>*</sup></label><br />
          <input onChange={handleChange} value={formData.firstName} type="text" name="firstName" id="firstName" placeholder='Manas' /><br /><br />
          <label htmlFor="middleName">Middle Name</label><br />
          <input onChange={handleChange} value={formData.middleName} type="text" name="middleName" id="middleName" placeholder='Kumar' /><br /><br />
          <label htmlFor="lastName">Last Name <sup>*</sup></label><br />
          <input onChange={handleChange} value={formData.lastName} type="text" name="lastName" id="lastName" placeholder='Sahu' /><br />
        </div>
<br />
        <div>
          <label htmlFor="email">Email <sup>*</sup></label> <br />
          <input onChange={handleChange} value={formData.email} type="email" name="email" id="email" placeholder='yesthisismanas@gmail.com' />
        </div>
<br />
        <div>
          <label htmlFor="password">Password <sup>*</sup></label> <br />
          <input onChange={handleChange} value={formData.password} type="password" name="password" id="password" placeholder='Enter a strong password !'/>
        </div>

      <button className='bg-slate-600 text-gray-300 text-2xl border mt-10 py-2 px-5 rounded-lg '
       onClick={handleSubmit}
        >SignUp</button>

      </form>


    </div>

</div>
    
</>
  )
}

export default page