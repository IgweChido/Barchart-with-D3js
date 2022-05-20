import React from 'react'

import './Login.scss'

function LoginComp() {
  return (
    <div className='loginmain'>
        <div className='loginbck'>

            <p className='lmhead'>Create an account</p>

            <form className='lmcont'>

                 {/* Input Component */}
                 <div className='inputmain'>
                    <label>Your email address</label>
                    <input type='text'></input>
                </div>

                <div className='inputmain'>
                    <label>Your password</label>
                    <input type='password'></input>
                </div>

                <div className='inputmain'>
                    <label>Confirm your password</label>
                    <input type='password'></input>
                </div>

                <div className='inputmain'>
                    <label>Your full name</label>
                    <input type='text'></input>
                </div>

                <div className='inputmain'>
                    <label>Your phone number</label>
                    <input type='text'></input>
                </div>

                 {/* Terms and condition */}
                 <div className='check'>
                     <input type='checkbox'></input>
                     <p>I read and agree to the terms and conditions</p>
                 </div>

                 {/* button */}
                 <button className='lbtn'>Create account</button>

            </form>
        </div>
    </div>
  )
}

export default LoginComp