import React, { useState } from 'react'
import EmailComp from './EmailComp'

import './Login.scss'
import PasswordComp from './PasswordComp'
import PhoneComp from './PhoneComp'

function LoginComp() {

  const[submit, setSubmit]= useState(false);
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
                     <input type='checkbox'></input>
                     <p>I read and agree to the terms and conditions</p>
                 </div>

                 {/* button */}
                 {submit ?
                     <button className='lbtn active' >Create account</button>
                  : <button className='lbtn' disabled>Create account</button>
                  }
                
                

            </form>
        </div>
    </div>
  )
}

export default LoginComp