import React from 'react'
import {useState} from 'react'
import './index.css'

const  Login= () => {
  const [mail,setMail] = useState('')//using react hooks
  const [password,setPassword]=useState('')
  const onFormSubmission = e => {
    e.preventDefault()
    
  }
  return (
    <div className='mainContainer'>
        <div className='brandSection'>
            <h1 className='brandName'>Board.</h1>
        </div>
        <div className='loginContainer'>
            <h1 className='heading'>
                Sign In
            </h1>
            <p className='siCo'>Sign in to your account </p>
            <div className='googleSignIn'>
                <img src="https://res.cloudinary.com/dollmqugm/image/upload/v1710694059/google_dhlfjb.svg" alt="google" className='googleIcon'/>
                <p className='gogSign'>sign in with Google</p>
            </div>
            <div className='formContainer'>
                <div className='input'>
                <label htmlFor='email' >Email Address</label>
                <input type="email" id="mail" value={mail} onChange={e=>setMail(e.target.value)} placeholder='Enter email'/>
                </div>
                <div className='input'>
                <label htmlFor='password' >Password</label>
                <input type="email" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter email'/>
                </div>
                <p className='highlighter'>Forgot password ?</p>
                <button type="submit" onSubmit={()=>onFormSubmission()} className='submitBtn'>Sign In</button>
            </div>
            <p className='register'>Don't have an account ? <span className='highlighter'>Register here</span></p>
        </div>
    </div>
  )
}
export default Login
