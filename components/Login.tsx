import React from 'react'

export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form action="">
        <label>Email</label>
        <input
         type="email"
         placeholder='Enter your email'
         className='p-3 '
         />
         <div>
     <label>Password</label>
        <input
         type="password"
         placeholder='Enter your email'
         className='p-3 '
         />
         </div>
   


      </form>
    </div>
  )
}
