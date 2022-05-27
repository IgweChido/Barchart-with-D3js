import React, { useEffect, useState } from 'react'
import EmailComp from './EmailComp'
import './Login.scss'
import PasswordComp from './PasswordComp'
import PhoneComp from './PhoneComp'

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'



function LoginComp() {

    const {passwords} = useSelector((state)=>state.password)
    const {emails} = useSelector((state)=>state.email)
    const {phones} = useSelector((state)=>state.phone)

  const[submit, setSubmit]= useState(false);

  useEffect(()=>{

    if(emails && phones && passwords){
        setSubmit(true)
    }

  }, [emails, passwords, phones])
  

  
  
 

  return (
    <div className='loginmain'>
        <div className='loginbck'>

            <p className='lmhead'>Create an account</p>

            <form className='lmcont'>

                 {/* Input Component */}
                <EmailComp/>

                <PasswordComp/>
                
                <div className='inputmain'>
                    <label>Your full name</label>
                    <input type='text'></input>
                </div>

                <PhoneComp/>

                 {/* Terms and condition */}
                 <div className='check'>
                     <input type='checkbox' checked></input>
                     <p>I read and agree to the terms and conditions</p>
                 </div>

                 {/* button */}
                 {submit ?
                    <Link to='/barchart'>
                         <button className='lbtn active' >Create account</button>
                    </Link>
                    
                  : <button className='lbtn' disabled>Create account</button>
                  }
                
                

            </form>
        </div>
    </div>
  )
}

export default LoginComp